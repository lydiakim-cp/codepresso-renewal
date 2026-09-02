#!/usr/bin/env node
/*
 * Token Lint — "임의의 값이 새로 생기지 않는다"를 기계로 지킨다.
 * SKILL.md 3번의 토큰·타이포 제약 중 사람이 눈으로 봐야 했던 것을 자동화한다.
 *
 * 사용법:
 *   node .claude/skills/html-css-architecture/scripts/token-lint.js         # css/ 전체
 *   ... token-lint.js css/pages/skills.css   # 파일만
 *   ... token-lint.js --all                  # baseline 무시, 백로그 전부 보기
 *   ... token-lint.js --write-baseline       # 지금 상태를 baseline으로 기록
 *
 * 검사 항목
 *   1. 정의되지 않은 var(--x)      — 오타 하나로 그 속성이 조용히 무시된다
 *   2. raw 색 값(#hex·rgb·hsl)     — 토큰 정의부(tokens.css·main-dark.css) 밖에서는 금지
 *   3. font-size 리터럴            — var(--text-*)로만. 14px 미만은 서비스 페이지 금지
 *   4. font-weight 리터럴          — var(--font-weight-*)로만
 *   5. border-radius 리터럴        — var(--radius-*)로만 (50%·999px 알약은 허용)
 *   6. padding/margin/gap 리터럴   — --space 스케일에 없는 값이면 경고
 *
 * 종료 코드 — 새 오류(✗) 1건 이상이면 1.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..', '..');
const CSS_DIR = path.join(ROOT, 'css');

/* 토큰을 정의하는 파일 — 여기서만 raw 값을 쓴다(정의부니까) */
const TOKEN_FILES = new Set(['css/tokens.css', 'css/main-dark.css']);
/* 목업 안 텍스트는 14px 하한의 예외(--mock-text-* 4단), 카탈로그는 문서 chrome */
const SMALL_TEXT_OK = /(mock-motion|product-mock|designsystem)\.css$/;
/* 알약 모양·원 — 토큰으로 표현할 수 없는 형태값 */
const RADIUS_OK = /^(50%|999px|9999px|100%|0|0px|inherit)$/;

const argv = process.argv.slice(2);
const MODE_ALL = argv.includes('--all');
const MODE_WRITE = argv.includes('--write-baseline');
const targets = argv.filter((a) => !a.startsWith('--'));

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith('.css') ? [p] : [];
  });

const rel = (abs) => path.relative(ROOT, abs).split(path.sep).join('/');

const files = targets.length ? targets.map((f) => path.resolve(ROOT, f)) : walk(CSS_DIR);

/* 정의된 커스텀 프로퍼티를 css/ 전체에서 먼저 모은다 — 한 파일만 검사할 때도
   다른 파일이 정의한 토큰을 쓰는 것은 정상이므로 항상 전체를 스캔한다. */
const defined = new Set();
for (const f of walk(CSS_DIR)) {
  for (const m of fs.readFileSync(f, 'utf8').matchAll(/(--[a-zA-Z0-9-]+)\s*:/g)) defined.add(m[1]);
}

/* 값을 마크업이 정하는 변수(카드마다 다른 좌표·개수)는 HTML의 style=""가 정의한다.
   여기까지 모아야 "정의되지 않은 변수"가 오탐을 내지 않는다. */
const collectInlineVars = (dir) => {
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith('.html'))) {
    const html = fs.readFileSync(path.join(dir, f), 'utf8');
    for (const m of html.matchAll(/style="([^"]*)"/g)) {
      for (const d of m[1].matchAll(/(--[a-zA-Z0-9-]+)\s*:/g)) defined.add(d[1]);
    }
  }
};
collectInlineVars(ROOT);
collectInlineVars(path.join(ROOT, 'partials'));

/* JS가 런타임에 심는 변수도 정의로 본다 — style.setProperty('--case-index', n) 류 */
for (const f of fs.readdirSync(path.join(ROOT, 'js')).filter((n) => n.endsWith('.js'))) {
  const js = fs.readFileSync(path.join(ROOT, 'js', f), 'utf8');
  for (const m of js.matchAll(/setProperty\(\s*['"`](--[a-zA-Z0-9-]+)/g)) defined.add(m[1]);
}

const spaceScale = new Set();
for (const m of fs.readFileSync(path.join(CSS_DIR, 'tokens.css'), 'utf8').matchAll(/--space-(\d+)\s*:\s*(\d+)px/g)) {
  spaceScale.add(`${m[2]}px`);
}

/* 레거시 baseline — 이미 있는 위반을 기록해 두고 기본 실행에서는 빼고 센다.
   게이트의 목적은 "지금부터 새 값이 생기지 않는 것"이다. 기존 위반까지 매번
   쏟아지면 경고가 배경 소음이 되어 아무도 읽지 않는다. 줄 번호는 편집에 따라
   밀리므로 지문에서 빼고 파일 + 메시지로 센다. */
const BASELINE_PATH = path.join(__dirname, 'token-lint.baseline.json');
const baseline =
  fs.existsSync(BASELINE_PATH) && !MODE_ALL && !MODE_WRITE
    ? JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8'))
    : {};
const seen = {};

let errors = 0;
let warns = 0;
let suppressed = 0;

for (const abs of files) {
  const file = rel(abs);
  const lines = fs.readFileSync(abs, 'utf8').split('\n');
  const isTokenFile = TOKEN_FILES.has(file);
  const smallTextOk = SMALL_TEXT_OK.test(file);
  const out = [];

  const push = (level, line, msg) => {
    const k = `${file} :: ${msg}`;
    seen[k] = (seen[k] || 0) + 1;
    if (!MODE_ALL && !MODE_WRITE && seen[k] <= (baseline[k] || 0)) {
      suppressed += 1;
      return;
    }
    out.push({ level, line, msg });
    if (level === '✗') errors += 1;
    else warns += 1;
  };

  lines.forEach((raw, i) => {
    const n = i + 1;
    /* 주석은 걷어낸다 — 설명 안의 예시 값을 위반으로 잡지 않기 위해 */
    const line = raw.replace(/\/\*.*?\*\//g, '').replace(/\/\*.*$/, '');
    if (!line.trim()) return;
    const isDecl = line.trim().startsWith('--');

    // 1. 정의되지 않은 var()
    /* fallback이 있는 var(--x, 12px)는 값이 보장되므로 검사하지 않는다 */
    for (const m of line.matchAll(/var\(\s*(--[a-zA-Z0-9-]+)\s*(,?)/g)) {
      if (!m[2] && !defined.has(m[1])) push('✗', n, `정의되지 않은 변수 ${m[1]} — 이 속성은 조용히 무시된다`);
    }

    // 2. raw 색 값
    if (!isTokenFile) {
      const color = line.match(/#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(/);
      if (color && !isDecl) push('✗', n, `raw 색 값 ${color[0]} — tokens.css의 변수를 쓴다`);
      else if (color && isDecl) push('⚠', n, `이 파일에서 색을 새로 정의한다 ${color[0]} — tokens.css로 올릴 값인지 본다`);
    }

    // 3. font-size
    const fontSize = line.match(/font-size\s*:\s*([^;]+)/);
    if (fontSize && !isDecl) {
      const v = fontSize[1].trim();
      const px = v.match(/^(\d+(?:\.\d+)?)px$/);
      if (px && Number(px[1]) < 14 && !smallTextOk) {
        push('✗', n, `font-size ${v} — 서비스 페이지 최소 14px. 작게 보이려면 색·weight로 낮춘다`);
      } else if (px) {
        push('✗', n, `font-size ${v} 리터럴 — var(--text-*)를 쓴다`);
      }
    }

    // 4. font-weight
    const weight = line.match(/font-weight\s*:\s*(\d{3})\b/);
    if (weight && !isDecl) push('✗', n, `font-weight ${weight[1]} 리터럴 — var(--font-weight-*)를 쓴다`);

    // 5. border-radius
    const radius = line.match(/border-radius\s*:\s*([^;]+)/);
    if (radius && !isDecl) {
      const v = radius[1].trim();
      if (!v.includes('var(') && !RADIUS_OK.test(v)) push('✗', n, `border-radius ${v} 리터럴 — var(--radius-*)를 쓴다`);
    }

    // 6. 여백 스케일
    const spacing = line.match(/\b(padding|margin|gap|row-gap|column-gap)(?:-(?:top|right|bottom|left|inline|block))?\s*:\s*([^;]+)/);
    if (spacing && !isDecl) {
      for (const v of spacing[2].trim().split(/\s+/)) {
        const px = v.match(/^-?(\d+(?:\.\d+)?)px$/);
        if (px && Number(px[1]) !== 0 && !spaceScale.has(`${px[1]}px`)) {
          push('⚠', n, `${spacing[1]} ${v} — --space 스케일에 없는 값이다`);
        }
      }
    }
  });

  if (out.length) {
    console.log(`\n${out.some((o) => o.level === '✗') ? '✗' : '⚠'} ${file}`);
    out.forEach((o) => console.log(`  ${o.level} ${file}:${o.line}  ${o.msg}`));
  }
}

if (MODE_WRITE) {
  fs.writeFileSync(BASELINE_PATH, `${JSON.stringify(seen, null, 2)}\n`, 'utf8');
  const total = Object.values(seen).reduce((a, b) => a + b, 0);
  console.log(`\nbaseline 갱신 — 기존 위반 ${total}건을 기록했다. 이후에는 새로 생긴 것만 막힌다.`);
  process.exit(0);
}

console.log(
  `\n${files.length}개 파일 · 새 오류 ${errors}건 · 새 경고 ${warns}건` +
    (suppressed ? ` (baseline의 기존 위반 ${suppressed}건 제외 — 전체는 --all)` : '')
);
if (!errors && !warns) console.log('새로 생긴 임의 값이 없다 — 통과');
process.exit(errors ? 1 : 0);
