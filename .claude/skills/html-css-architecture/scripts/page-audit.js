#!/usr/bin/env node
/*
 * Page Audit — 서브페이지 한 장이 규범대로 조립됐는지 기계로 확인한다.
 * subpage-guide.md 6번 체크리스트 중 사람이 표를 대조해야 했던 항목을 자동화한다.
 *
 * 사용법:
 *   node .claude/skills/html-css-architecture/scripts/page-audit.js            # 전 페이지
 *   node .claude/skills/html-css-architecture/scripts/page-audit.js skills.html
 *
 * 검사 항목
 *   1. CSS <link> 3개(main → pages/{페이지} → mobile)와 그 순서
 *   2. <main class="{페이지이름}"> 페이지 스코프 / 다크면 main-dark ↔ @import 짝
 *   3. header·footer를 data-include로 불러왔는지, include-partials.js가 첫 스크립트인지
 *   4. 마크업의 data-* 훅 ↔ 로드한 <script> 양방향 대조 (빠진 것·안 쓰는 것)
 *   5. title · meta description · og:* 채워졌는지 (뼈대 TODO/플레이스홀더 잔존 포함)
 *   6. 내부 링크(href/src)가 실제로 존재하는 파일인지
 *
 * 종료 코드 — 오류(✗) 1건 이상이면 1, 경고(⚠)만 있으면 0.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..', '..');

/* 마크업 훅 → 그 훅을 읽는 스크립트. js/*.js가 실제로 찾는 선택자에서 뽑았다.
   훅이 있는데 스크립트가 없으면 인터랙션이 콘솔 에러 없이 조용히 죽는다. */
const HOOKS = [
  { script: 'js/include-partials.js', test: /data-include=/ },
  { script: 'js/fade-up.js', test: /class="[^"]*\bfade-up\b/ },
  { script: 'js/feature-card-cycle.js', test: /data-feature-cycle/ },
  { script: 'js/proof-card-slider.js', test: /data-proof-deck/ },
  { script: 'js/stat-reveal.js', test: /data-stat-reveal/ },
  { script: 'js/part-nav.js', test: /data-part-nav/ },
  { script: 'js/journey-stage.js', test: /data-(?:journey|diagnosis)-stage/ },
  { script: 'js/difference-cycle.js', test: /data-difference-screens/ },
  { script: 'js/catalog-board.js', test: /data-catalog-board/ },
  { script: 'js/case-filter.js', test: /data-case-filter/ },
  { script: 'js/scenario-switch.js', test: /data-scenario-steps/ },
  { script: 'js/floating-cta.js', test: /data-floating-cta=/ },
];

/* GNB·footer 조각 안에 훅이 있어 페이지 마크업만 봐서는 알 수 없는 것들 */
const PARTIAL_SCRIPTS = ['js/header-scroll.js', 'js/nav-menu.js'];

/* 스타일이 사라졌는데 마크업에 남은 클래스들. 새로 생긴 것과 구분하기 위한 기록이며,
   비우는 것이 목표다(각 항목은 "마크업에서 지운다" 또는 "CSS를 되살린다" 중 하나). */
const ORPHAN_BASELINE = JSON.parse(
  fs.existsSync(path.join(__dirname, 'page-audit.baseline.json'))
    ? fs.readFileSync(path.join(__dirname, 'page-audit.baseline.json'), 'utf8')
    : '{}'
);

const PLACEHOLDER = /\{[^}]*\}|TODO|LOREM/i;

/* 파일명과 스코프가 일부러 다른 페이지. why-codepresso는 index.css의 PART 3가
   이미 스코프 없이 .difference를 쓰고 있어 .difference-page로 갈랐다
   (component-inventory.md E 참고). */
const SCOPE_EXCEPTIONS = { 'why-codepresso': 'difference-page' };

const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const walkCss = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    return e.isDirectory() ? walkCss(full) : full.endsWith('.css') ? [full] : [];
  });

/* CSS에 선언된 클래스 전부. 마크업이 여기 없는 클래스를 쓰면 둘 중 하나다 —
   오타이거나, 스타일 없이 새 디자인을 만들려 한 것. 둘 다 막아야 한다
   ("임의의 값·디자인이 새로 생겨서는 안 된다"). */
/* 섹션 역할 어휘표(SKILL.md 4번)의 이름 — 스타일이 붙지 않아도 정상이다.
   섹션에 스타일·동작이 없으면 클래스를 생략해도 되지만, 붙였다면 이 이름이어야 한다. */
const SECTION_VOCAB = new Set([
  'hero', 'intro', 'features', 'catalog', 'process', 'deliverables', 'outcomes',
  'positioning', 'statement', 'journey', 'insight', 'faq', 'cta-final',
  'pricing', 'about', 'contact',
]);

/* JS만 쓰는 훅 클래스(.num 등)는 CSS에 없어도 정상이다 — js/*.js에서 모은다 */
const jsHooks = new Set();
for (const f of fs.readdirSync(path.join(ROOT, 'js')).filter((n) => n.endsWith('.js'))) {
  const js = fs.readFileSync(path.join(ROOT, 'js', f), 'utf8');
  for (const m of js.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)) jsHooks.add(m[1]);
}

const definedClasses = new Set();
for (const f of walkCss(path.join(ROOT, 'css'))) {
  for (const m of fs.readFileSync(f, 'utf8').matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)) definedClasses.add(m[1]);
}
const exists = (p) => fs.existsSync(path.join(ROOT, p));

const auditPage = (file) => {
  const html = read(file);
  const name = path.basename(file, '.html');
  const err = [];
  const warn = [];

  // 1. CSS <link> 3개와 순서
  const links = [...html.matchAll(/<link[^>]+href="([^"]+\.css)"/g)].map((m) => m[1]);
  const expected = ['css/main.css', `css/pages/${name}.css`, 'css/mobile.css'];
  if (links.join('|') !== expected.join('|')) {
    err.push(`CSS <link>가 규범과 다르다\n      기대: ${expected.join(' → ')}\n      실제: ${links.join(' → ') || '(없음)'}`);
  }
  const pageCssPath = `css/pages/${name}.css`;
  const pageCss = exists(pageCssPath) ? read(pageCssPath) : null;
  if (!pageCss) err.push(`${pageCssPath}가 없다`);

  // 2. 페이지 스코프 / 다크 짝
  const mainTag = html.match(/<main[^>]*class="([^"]+)"/);
  if (!mainTag) {
    err.push('<main class="{페이지이름}"> 페이지 스코프가 없다');
  } else {
    const classes = mainTag[1].split(/\s+/);
    const allowed = SCOPE_EXCEPTIONS[name] || name;
    if (!classes.includes(allowed)) {
      warn.push(`<main>의 스코프 클래스(${classes.join(' ')})가 파일명(${name})과 다르다`);
    }
    const isDark = classes.includes('main-dark');
    const hasImport = pageCss && /@import\s+url\(["']?\.\.\/main-dark\.css/.test(pageCss);
    if (isDark && !hasImport) err.push('main-dark 클래스는 있는데 페이지 CSS에 main-dark.css @import가 없다');
    if (!isDark && hasImport) err.push('main-dark.css를 @import했는데 <main>에 main-dark 클래스가 없다');
  }

  // 3. partials · 스크립트 순서
  const scripts = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => m[1]);
  for (const part of ['partials/header.html', 'partials/footer.html']) {
    if (!html.includes(`data-include="${part}"`)) err.push(`${part}을 data-include로 불러오지 않았다`);
  }
  if (/<header[\s>]/.test(html) || /<footer[\s>]/.test(html)) {
    err.push('페이지에 <header>/<footer> 태그를 직접 썼다 — partials 조각을 쓴다');
  }
  if (scripts.length && scripts[0] !== 'js/include-partials.js') {
    err.push(`include-partials.js가 첫 스크립트가 아니다 (현재 첫 스크립트: ${scripts[0]})`);
  }

  // 4. 훅 ↔ 스크립트 양방향
  const known = new Set([...HOOKS.map((h) => h.script), ...PARTIAL_SCRIPTS]);
  for (const { script, test } of HOOKS) {
    const used = test.test(html);
    const loaded = scripts.includes(script);
    if (used && !loaded) err.push(`${script}를 로드하지 않았다 — 마크업이 그 훅을 쓰고 있어 조용히 죽는다`);
    if (!used && loaded) warn.push(`${script}는 쓰지 않는다 (대응 훅이 마크업에 없다)`);
  }
  for (const script of scripts) {
    if (!known.has(script)) warn.push(`${script} — 이 스크립트는 감사 표에 없다. HOOKS에 추가한다`);
  }

  // 5. title · meta
  const meta = (re) => {
    const m = html.match(re);
    return m ? m[1].trim() : null;
  };
  const title = meta(/<title>([^<]*)<\/title>/);
  const desc = meta(/<meta\s+name="description"\s+content="([^"]*)"/);
  const ogTitle = meta(/<meta\s+property="og:title"\s+content="([^"]*)"/);
  const ogDesc = meta(/<meta\s+property="og:description"\s+content="([^"]*)"/);
  const ogImage = meta(/<meta\s+property="og:image"\s+content="([^"]*)"/);
  if (!title) err.push('<title>이 없다');
  if (!desc) err.push('meta description이 없다 — 검색 결과에 그대로 나가는 문구다');
  else if (PLACEHOLDER.test(desc)) err.push('meta description이 뼈대 플레이스홀더 그대로다');
  else if (desc.length < 40 || desc.length > 160) warn.push(`meta description 길이 ${desc.length}자 (권장 80~120)`);
  for (const [label, value] of [['og:title', ogTitle], ['og:description', ogDesc], ['og:image', ogImage]]) {
    if (!value) warn.push(`${label}이 없다 — 링크 미리보기가 비어 보인다`);
    else if (PLACEHOLDER.test(value)) err.push(`${label}이 뼈대 플레이스홀더 그대로다`);
  }
  if (ogImage && !/^https?:/.test(ogImage) && !exists(ogImage)) err.push(`og:image 파일이 없다: ${ogImage}`);

  // 6. 내부 링크·에셋 존재 확인
  const refs = new Set();
  for (const m of html.matchAll(/(?:href|src|data-include)="([^"]+)"/g)) {
    const v = m[1];
    if (!v || v.startsWith('#') || /^(?:https?:|mailto:|tel:|data:|javascript:)/.test(v)) continue;
    refs.add(v.split(/[?#]/)[0]);
  }
  for (const ref of refs) {
    if (!exists(ref)) err.push(`가리키는 파일이 없다: ${ref}`);
  }

  // 7. 마크업의 클래스가 CSS에 실제로 있는지
  const unknown = new Set();
  for (const m of html.matchAll(/class="([^"]*)"/g)) {
    for (const cls of m[1].split(/\s+/)) {
      if (cls && !definedClasses.has(cls) && !jsHooks.has(cls) && !SECTION_VOCAB.has(cls)) unknown.add(cls);
    }
  }
  /* 기존 고아 클래스는 baseline에 기록해 두고, 새로 생긴 것만 막는다 —
     지금 red로 두면 다음 사람이 경고 전체를 무시하게 된다(정리는 별도 회차). */
  const legacy = new Set(ORPHAN_BASELINE[file] || []);
  const fresh = [...unknown].filter((c) => !legacy.has(c));
  const legacyFound = [...unknown].filter((c) => legacy.has(c));
  if (fresh.length) {
    err.push(`CSS에 없는 클래스: ${fresh.join(', ')} — 오타이거나 새 디자인을 만든 것이다`);
  }
  if (legacyFound.length) {
    warn.push(`정리 대기 중인 고아 클래스 ${legacyFound.length}개: ${legacyFound.join(', ')}`);
  }

  return { file, err, warn };
};

const targets = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs
      .readdirSync(ROOT)
      .filter((f) => f.endsWith('.html'))
      /* 카탈로그·프로토타입은 서비스 페이지 규범 대상이 아니다 */
      .filter((f) => f !== 'codepresso-designsystem.html' && !f.startsWith('프로토타입'));

/* mobile.css 구조 — breakpoint마다 @media 한 덩어리여야 한다(subpage-guide 1번).
   블록이 쪼개지면 같은 페이지 규칙이 두 곳에 흩어져 다음 사람이 찾지 못한다. */
const auditMobileCss = () => {
  const css = read('css/mobile.css');
  const found = [...css.matchAll(/@media \(max-width: (\d+)px\)/g)].map((m) => m[1]);
  const counts = found.reduce((acc, bp) => ({ ...acc, [bp]: (acc[bp] || 0) + 1 }), {});
  const warn = [];
  for (const [bp, n] of Object.entries(counts)) {
    if (n > 1) warn.push(`${bp}px 블록이 ${n}개로 쪼개져 있다 — 하나로 병합한다`);
  }
  for (const bp of ['900', '720', '560']) {
    if (!counts[bp]) warn.push(`${bp}px 블록이 없다 — breakpoint는 900/720/560 3단이다`);
  }
  const extra = Object.keys(counts).filter((bp) => !['900', '720', '560'].includes(bp));
  if (extra.length) warn.push(`규범에 없는 breakpoint: ${extra.join(', ')}px`);
  return warn;
};

let failed = 0;
for (const t of targets) {
  const { file, err, warn } = auditPage(t);
  const head = err.length ? '✗' : warn.length ? '⚠' : '✓';
  console.log(`\n${head} ${file}`);
  err.forEach((m) => console.log(`  ✗ ${m}`));
  warn.forEach((m) => console.log(`  ⚠ ${m}`));
  if (!err.length && !warn.length) console.log('  통과');
  if (err.length) failed += 1;
}
const mobileWarn = auditMobileCss();
console.log(`\n${mobileWarn.length ? '⚠' : '✓'} css/mobile.css`);
mobileWarn.forEach((m) => console.log(`  ⚠ ${m}`));
if (!mobileWarn.length) console.log('  900/720/560 각 1블록 — 통과');

console.log(`\n${targets.length}개 페이지 중 ${failed}개에 오류가 있다.`);
process.exit(failed ? 1 : 0);
