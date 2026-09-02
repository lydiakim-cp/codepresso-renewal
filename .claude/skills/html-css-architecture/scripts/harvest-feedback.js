#!/usr/bin/env node
/*
 * Harvest Feedback — 사용자가 직접 고친 것을 반례로 회수할 수 있게 범위를 좁혀 준다.
 * 사용자의 손수정은 이 프로젝트에서 취향을 알려주는 유일한 채널인데, 지금까지
 * 커밋 메시지에만 남아 다음 세션으로 전달되지 않았다(그래서 같은 것을 또 넣었다).
 *
 * 사용법:
 *   node .claude/skills/html-css-architecture/scripts/harvest-feedback.js
 *   ... harvest-feedback.js --since <ref>     # 마커 대신 이 지점부터
 *   ... harvest-feedback.js --update-marker   # 회수를 끝낸 뒤 마커를 HEAD로 옮긴다
 *
 * 출력은 판단 재료다 — 이 스크립트는 무엇이 반례인지 결정하지 않는다.
 * references/anti-patterns.md에 올릴지는 사람(또는 그것을 읽는 Claude)이 정한다.
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..', '..');
const MARKER_PATH = path.join(__dirname, 'feedback-marker.json');

/* diff가 수천 줄이라 기본 maxBuffer로는 ENOBUFS가 난다 */
const git = (args) =>
  execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }).trim();

const argv = process.argv.slice(2);
const sinceFlag = argv.indexOf('--since');
const marker = fs.existsSync(MARKER_PATH) ? JSON.parse(fs.readFileSync(MARKER_PATH, 'utf8')) : {};
const since = sinceFlag >= 0 ? argv[sinceFlag + 1] : marker.commit || 'HEAD~10';

if (argv.includes('--update-marker')) {
  const head = git(['rev-parse', 'HEAD']);
  fs.writeFileSync(
    MARKER_PATH,
    `${JSON.stringify({ commit: head, updated: new Date().toISOString().slice(0, 10) }, null, 2)}\n`,
    'utf8'
  );
  console.log(`마커를 ${head.slice(0, 7)}로 옮겼다. 다음 회수는 이 지점 이후만 본다.`);
  process.exit(0);
}

/* 제목만으로 두 갈래로 나눈다 — 덜어낸 것이 반례일 확률이 가장 높고,
   통일·교체는 취향의 방향은 알려주지만 반례는 아닐 수도 있다. */
const REMOVED_WORDS = /걷어|지운|제거|되돌|뺀|낮춘|줄인|좁힌/;
const CHANGED_WORDS = /통일|바꾼|올린|맞춘|정리/;

const log = git(['log', '--format=%h|%s', `${since}..HEAD`, '--', 'css', '*.html', 'js'])
  .split('\n')
  .filter(Boolean)
  .map((l) => {
    const [hash, ...rest] = l.split('|');
    return { hash, subject: rest.join('|') };
  });

if (!log.length) {
  console.log(`${since}..HEAD 사이에 CSS·HTML 변경이 없다. 회수할 것이 없다.`);
  process.exit(0);
}

console.log(`회수 범위: ${since}..HEAD — 커밋 ${log.length}개\n`);

const printGroup = (title, items) => {
  console.log(`\n● ${title}`);
  if (items.length) items.forEach((c) => console.log(`  ${c.hash}  ${c.subject}`));
  else console.log('  없다');
};

printGroup(
  '덜어낸 커밋 — 반례 1순위',
  log.filter((c) => REMOVED_WORDS.test(c.subject))
);
printGroup(
  '바꾼·통일한 커밋 — 취향의 방향',
  log.filter((c) => !REMOVED_WORDS.test(c.subject) && CHANGED_WORDS.test(c.subject))
);
printGroup(
  '그 외',
  log.filter((c) => !REMOVED_WORDS.test(c.subject) && !CHANGED_WORDS.test(c.subject))
);

/* 지워진 선언을 성격별로 센다 — 무엇을 덜어냈는지가 취향의 방향을 알려준다 */
const diff = git(['diff', '-U0', `${since}..HEAD`, '--', 'css', '*.html']);
const removed = diff.split('\n').filter((l) => l.startsWith('-') && !l.startsWith('---'));
const buckets = {
  'hover 효과': /:hover|hover/,
  '그림자': /box-shadow/,
  '블러·유리': /backdrop-filter|blur\(/,
  '테두리·구분선': /border(-top|-left|-right|-bottom)?\s*:/,
  '애니메이션': /animation|@keyframes|transition/,
  '색': /color\s*:|background/,
  '크기·폰트': /font-size|font-weight|width|height/,
};
console.log(`\n● 이 범위에서 지워진 선언 ${removed.length}줄의 성격`);
for (const [label, re] of Object.entries(buckets)) {
  const n = removed.filter((l) => re.test(l)).length;
  if (n) console.log(`  ${label.padEnd(12)} ${n}줄`);
}

console.log(
  [
    '',
    '다음 할 일 — 위 후보 커밋의 diff를 읽고,',
    '"Claude가 넣었고 사용자가 지운 것"만 references/anti-patterns.md 표에 한 줄로 올린다',
    '(넣었던 것 · 왜 아니었나 · 대신 무엇). 값·클래스처럼 기계가 검사할 수 있는 것은',
    '표가 아니라 token-lint·page-audit 규칙으로 내린다.',
    '끝나면: node .claude/skills/html-css-architecture/scripts/harvest-feedback.js --update-marker',
  ].join('\n')
);
