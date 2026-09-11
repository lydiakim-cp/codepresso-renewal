/* data/content.json을 실제 Nuxt SFC의 data-i18n 요소에 빌드 타임으로 반영한다. */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { parseFragment, serialize } from 'parse5';

const content = JSON.parse(readFileSync(new URL('../data/content.json', import.meta.url), 'utf8'));
const allowedTags = new Set(['strong', 'br', 'b', 'em']);
const escapeHtml = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const sanitize = (raw) => raw
  .replace(/<br:pc>/g, '\u0000BR_PC\u0000').replace(/<br:m>/g, '\u0000BR_M\u0000').replace(/<br\s*\/?>/gi, '\u0000BR\u0000')
  .replace(/<\/?([a-zA-Z0-9]+)[^>]*>/g, (match, tag) => allowedTags.has(tag.toLowerCase()) ? match : escapeHtml(match))
  .replace(/\u0000BR_PC\u0000/g, '<br data-break="desktop">').replace(/\u0000BR_M\u0000/g, '<br data-break="mobile">').replace(/\u0000BR\u0000/g, '<br>');
const attributes = (node) => Object.fromEntries((node.attrs || []).map((attribute) => [attribute.name, attribute.value]));
const localize = (node) => {
  if (!node || typeof node !== 'object') return;
  const key = attributes(node)['data-i18n'];
  if (key && Object.hasOwn(content, key)) node.childNodes = parseFragment(sanitize(content[key])).childNodes;
  for (const child of node.childNodes || []) localize(child);
};

const pages = new URL('../pages/', import.meta.url);
const pageCssNames = {
  'codepresso-designsystem.vue': 'designsystem',
  'codepresso-designsystem-v2.vue': 'designsystem-v2',
};
for (const file of readdirSync(pages).filter((name) => name.endsWith('.vue'))) {
  const url = new URL(file, pages);
  const source = readFileSync(url, 'utf8');
  const match = /<template>([\s\S]*?)<\/template>([\s\S]*)/.exec(source);
  if (!match) continue;
  // parse5는 Vue 컴포넌트 이름을 소문자로 바꾸므로 SFC 경계 컴포넌트는 보호한다.
  const protectedTemplate = match[1]
    .replace(/<SiteHeader\s*\/>/, '<!--NUXT_SITE_HEADER-->')
    .replace(/<SiteFooter\s*\/>/, '<!--NUXT_SITE_FOOTER-->')
    .replace(/<ClientInteractions[\s\S]*?\/>/, '<!--NUXT_INTERACTIONS-->');
  const tree = parseFragment(protectedTemplate);
  localize(tree);
  const template = serialize(tree)
    .replace('<!--NUXT_SITE_HEADER-->', '<SiteHeader />')
    .replace('<!--NUXT_SITE_FOOTER-->', '<SiteFooter />')
    .replace('<!--NUXT_INTERACTIONS-->', match[1].match(/<ClientInteractions[\s\S]*?\/>/)?.[0] || '');
  const cssName = pageCssNames[file] || file.replace(/\.vue$/, '');
  const pageScript = match[2]
    // public CSS 링크 대신 Vite가 원본 css/ 파일을 번들에 포함하게 한다.
    .replace(/useHead\(\{ link: \[\{ rel: 'stylesheet', href: '[^']+' \}\] \}\)\n?/, `import '~/css/pages/${cssName}.css'\n`);
  writeFileSync(url, `<template>${template}</template>${pageScript}`, 'utf8');
}
console.log('Nuxt Vue 페이지 i18n 적용 완료');
