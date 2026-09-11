/* public/images/clients/dark의 로고 목록을 메인 히어로용 데이터로 만든다. */
import { readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const logoDir = join(root, '..', 'public', 'images', 'clients', 'dark');
const outputPath = join(root, '..', 'data', 'client-logos.json');
const imageExtension = /\.(avif|gif|jpe?g|png|svg|webp)$/i;

function labelFromFilename(filename) {
  return filename
    .replace(imageExtension, '')
    .replace(/^logo[-_]*(?:\d+[-_]*)?/i, '')
    .replace(/_?\(h\d+\)/i, '')
    .replace(/[-_]+/g, ' ')
    .trim() || '기업 로고';
}

const logos = readdirSync(logoDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && imageExtension.test(entry.name))
  .map((entry) => ({
    src: `/images/clients/dark/${encodeURIComponent(entry.name)}`,
    alt: `${labelFromFilename(entry.name)} 로고`,
  }))
  .sort((a, b) => a.src.localeCompare(b.src, 'ko'));

writeFileSync(outputPath, `${JSON.stringify(logos, null, 2)}\n`, 'utf8');
console.log(`고객사 로고 목록 생성 완료 — ${logos.length}개`);
