// 사용법: node scripts/build-i18n.mjs
// data/data.xlsx의 main-page 시트를 읽어 data/content.json으로 변환한다.

import { readFileSync, writeFileSync } from 'node:fs';
import { inflateRawSync } from 'node:zlib';

const XLSX_PATH = new URL('../data/data.xlsx', import.meta.url);
const OUT_PATH = new URL('../data/content.json', import.meta.url);

// --- 최소 ZIP 리더 (xlsx = zip 컨테이너) ---------------------------------
function readZipEntries(buf) {
  const EOCD_SIG = 0x06054b50;
  let eocdOffset = -1;
  for (let i = buf.length - 22; i >= 0; i--) {
    if (buf.readUInt32LE(i) === EOCD_SIG) { eocdOffset = i; break; }
  }
  if (eocdOffset < 0) throw new Error('ZIP EOCD를 찾을 수 없습니다 (xlsx가 손상되었을 수 있음)');

  const totalEntries = buf.readUInt16LE(eocdOffset + 10);
  const cdOffset = buf.readUInt32LE(eocdOffset + 16);

  const entries = new Map();
  let ptr = cdOffset;
  for (let i = 0; i < totalEntries; i++) {
    const sig = buf.readUInt32LE(ptr);
    if (sig !== 0x02014b50) throw new Error('ZIP 중앙 디렉토리 레코드가 올바르지 않습니다');
    const compMethod = buf.readUInt16LE(ptr + 10);
    const compSize = buf.readUInt32LE(ptr + 20);
    const nameLen = buf.readUInt16LE(ptr + 28);
    const extraLen = buf.readUInt16LE(ptr + 30);
    const commentLen = buf.readUInt16LE(ptr + 32);
    const localHeaderOffset = buf.readUInt32LE(ptr + 42);
    const name = buf.toString('utf8', ptr + 46, ptr + 46 + nameLen);
    entries.set(name, { compMethod, compSize, localHeaderOffset });
    ptr += 46 + nameLen + extraLen + commentLen;
  }

  const files = new Map();
  for (const [name, meta] of entries) {
    const lh = meta.localHeaderOffset;
    const lNameLen = buf.readUInt16LE(lh + 26);
    const lExtraLen = buf.readUInt16LE(lh + 28);
    const dataStart = lh + 30 + lNameLen + lExtraLen;
    const raw = buf.subarray(dataStart, dataStart + meta.compSize);
    const data = meta.compMethod === 0 ? raw : inflateRawSync(raw);
    files.set(name, data);
  }
  return files;
}

// --- 최소 XML 텍스트 추출 (본 용도에 필요한 태그만 파싱) -------------------
function parseSharedStrings(xml) {
  const strings = [];
  const siRe = /<si>([\s\S]*?)<\/si>/g;
  let m;
  while ((m = siRe.exec(xml))) {
    const inner = m[1];
    const texts = [...inner.matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((t) => t[1]);
    strings.push(decodeXmlEntities(texts.join('')));
  }
  return strings;
}

function decodeXmlEntities(str) {
  return str
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

function colToIndex(col) {
  let idx = 0;
  for (let i = 0; i < col.length; i++) idx = idx * 26 + (col.charCodeAt(i) - 64);
  return idx - 1;
}

function parseSheet(xml, sharedStrings) {
  const rows = [];
  const rowRe = /<row[^>]*>([\s\S]*?)<\/row>/g;
  let rowMatch;
  while ((rowMatch = rowRe.exec(xml))) {
    const rowXml = rowMatch[1];
    const cellRe = /<c r="([A-Z]+)\d+"(?:[^>]*t="([^"]*)")?[^>]*>(?:<v>([\s\S]*?)<\/v>|<is>([\s\S]*?)<\/is>)?<\/c>/g;
    const rowData = [];
    let cellMatch;
    while ((cellMatch = cellRe.exec(rowXml))) {
      const [, col, type, vRaw, isRaw] = cellMatch;
      const idx = colToIndex(col);
      let value = '';
      if (isRaw !== undefined) {
        const texts = [...isRaw.matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((t) => t[1]);
        value = decodeXmlEntities(texts.join(''));
      } else if (vRaw !== undefined) {
        value = type === 's' ? (sharedStrings[Number(vRaw)] ?? '') : decodeXmlEntities(vRaw);
      }
      rowData[idx] = value;
    }
    rows.push(rowData);
  }
  return rows;
}

function findSheetPathByName(workbookXml, relsXml, sheetName) {
  // <sheet>의 name/r:id 속성 순서는 저장한 프로그램마다 달라질 수 있어 순서에
  // 의존하지 않고 태그 전체에서 각각 뽑는다(엑셀 원본 vs openpyxl 저장 차이 대응).
  const sheetTagRe = new RegExp(`<sheet\\b[^>]*name="${sheetName}"[^>]*/?>`);
  const sheetTag = sheetTagRe.exec(workbookXml)?.[0];
  if (!sheetTag) throw new Error(`워크북에서 시트를 찾을 수 없습니다: ${sheetName}`);
  const rId = /r:id="([^"]+)"/.exec(sheetTag)?.[1];
  if (!rId) throw new Error(`시트의 r:id를 찾을 수 없습니다: ${sheetName}`);

  const relTagRe = new RegExp(`<Relationship\\b[^>]*Id="${rId}"[^>]*/?>`);
  const relTag = relTagRe.exec(relsXml)?.[0];
  if (!relTag) throw new Error(`관계 정보를 찾을 수 없습니다: ${rId}`);
  const target = /Target="([^"]+)"/.exec(relTag)?.[1];
  if (!target) throw new Error(`관계의 Target을 찾을 수 없습니다: ${rId}`);
  return `xl/${target.replace(/^\/?xl\//, '')}`;
}

// --- 실행 -----------------------------------------------------------------
const buf = readFileSync(XLSX_PATH);
const files = readZipEntries(buf);

const workbookXml = files.get('xl/workbook.xml').toString('utf8');
const relsXml = files.get('xl/_rels/workbook.xml.rels').toString('utf8');
const sheetPath = findSheetPathByName(workbookXml, relsXml, 'main-page');

const sharedStringsFile = files.get('xl/sharedStrings.xml');
const sharedStrings = sharedStringsFile ? parseSharedStrings(sharedStringsFile.toString('utf8')) : [];

const sheetXml = files.get(sheetPath).toString('utf8');
const rows = parseSheet(sheetXml, sharedStrings);

// 헤더 행: scope, key, text-ko, note
const [header, ...dataRows] = rows;
const keyCol = header.indexOf('key');
const textCol = header.indexOf('text-ko');
if (keyCol < 0 || textCol < 0) {
  throw new Error(`main-page 시트 헤더에서 key/text-ko 컬럼을 찾을 수 없습니다: ${JSON.stringify(header)}`);
}

const content = {};
for (const row of dataRows) {
  const key = row[keyCol];
  const text = row[textCol];
  if (!key) continue;
  content[key] = text ?? '';
}

writeFileSync(OUT_PATH, JSON.stringify(content, null, 2), { encoding: 'utf8' });
console.log(`data/content.json 생성 완료 — key ${Object.keys(content).length}개`);
