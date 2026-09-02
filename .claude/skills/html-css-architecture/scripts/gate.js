#!/usr/bin/env node
/*
 * Design Gate — HTML·CSS를 고친 직후 자동으로 검사를 돌리는 훅 진입점.
 * .claude/settings.json의 PostToolUse(Write|Edit)가 이 파일을 부른다.
 *
 * 왜 훅인가 — 규범을 문서로만 두면 "마지막으로 문서를 읽은 사람의 성실함"만큼만
 * 지켜진다. 실제로 breakpoint 3단 규칙이 있는데도 @media가 7개로 쪼개져 있었고,
 * CSS가 사라진 뒤에도 마크업이 그 클래스를 계속 쓰고 있었다. 검사하는 주체가
 * 없었기 때문이다. 이 훅이 그 주체다.
 *
 * 위반이 있으면 exit 2 — Claude Code가 그 출력을 다음 턴에 되돌려 준다.
 */

const { execFileSync } = require('child_process');
const path = require('path');

const SCRIPTS = __dirname;

let input = '';
process.stdin.on('data', (c) => {
  input += c;
});
process.stdin.on('end', () => {
  let file = '';
  try {
    const payload = JSON.parse(input || '{}');
    file = payload.tool_input?.file_path || payload.tool_input?.filePath || '';
  } catch {
    /* 훅 입력이 없거나 형식이 다르면 조용히 통과한다 — 검사가 작업을 막지 않는다 */
  }
  if (!/\.(css|html)$/i.test(file)) process.exit(0);

  /* designsystem 카탈로그·프로토타입은 서비스 페이지 규범 대상이 아니다 */
  if (/designsystem|프로토타입/.test(file)) process.exit(0);

  const run = (script, args = []) => {
    try {
      execFileSync('node', [path.join(SCRIPTS, script), ...args], { encoding: 'utf8', stdio: 'pipe' });
      return null;
    } catch (e) {
      return `${e.stdout || ''}${e.stderr || ''}`.trim();
    }
  };

  const findings = [run('token-lint.js'), run('page-audit.js')].filter(Boolean);
  if (!findings.length) process.exit(0);

  process.stderr.write(
    ['[design-gate] 규범 위반이 있다 — 고친 뒤 다시 저장한다.', '', ...findings].join('\n')
  );
  process.exit(2);
});
