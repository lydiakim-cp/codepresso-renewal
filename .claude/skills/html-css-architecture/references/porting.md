# 이식 가이드 — 왜 필요하고, 다른 프로젝트에 어떻게 적용하는가

## 왜 이 스킬을 쓰는가

Claude는 매 세션 새로 판단하므로, "카드에 장식 선을 넣지 않는다" 같은 결정도
세션을 못 넘긴다. 이 스킬은 그 판단을 **코드(저장 시점 게이트)와 문서(반례 기록)**에
영속화한다.

- **게이트**(`scripts/gate.js` → `token-lint.js`+`page-audit.js`, `.claude/settings.json`
  PostToolUse 훅) — 미정의 변수·raw 색·14px 미만 폰트·임의 max-width·CSS에 없는
  클래스·훅 누락을 저장 시점에 기계적으로 막는다. 판단이 아니라 검사다.
- **baseline 파일**(`*.baseline.json`) — 기존 위반은 지문으로 기록해 봐주고, 새로
  생긴 것만 막는다. 레거시 코드베이스에도 첫날부터 적용 가능하게 하는 장치다.
- **anti-patterns.md + harvest-feedback.js** — 사용자가 실제로 되돌린 것만 기록해
  "이론상 나쁘다"가 아니라 "실제로 실패했다"는 근거의 조직 기억을 만든다.

**반박 대응**
- *"Tailwind/shadcn 쓰면 되지 않냐"* → 그건 문법·뼈대일 뿐 "이 카드엔 장식 선을
  안 쓴다" 같은 축적된 판단은 안 준다. 게이트·anti-patterns·토큰 승격 기준은
  Tailwind 유무와 무관한 층위에서 작동한다.
- *"디자인 감각은 AI가 대신 못 하지 않냐"* → 맞다. 그래서 취향을 새로 판단하지
  않고 이미 내려진 판단을 기록·재생한다. 새 판단이 필요하면 "임의로 만들지 말고
  묻는다"를 반복 명시한다([SKILL.md](../SKILL.md) 0번).
- *"게이트가 있어도 사람이 검토 안 하면 소용없지 않냐"* → 게이트는 검토를
  대체하지 않고, 오타·하드코딩처럼 검토할 가치 없는 하위 카테고리를 걸러내
  사람의 검토를 [design-qa.md](design-qa.md)의 상위 판단에 집중시킨다.
- *"새 회사 적용 초기 비용이 크지 않냐"* → 재작성 대상은 아래 "🔧 코드프레소 값"
  마커 블록뿐이고, 방법론 문서는 그대로 채택된다. baseline 덕에 완벽한 상태에서
  시작할 필요도 없다.

## 이식 순서

1. **토큰** — `css/tokens.css`를 자사 값으로. [tokens-typography.md](tokens-typography.md)
   마커 블록과 [SKILL.md](../SKILL.md) 3번 절대 제약값(최소 폰트·breakpoint)을 동기화.
2. **섹션 어휘표** — [SKILL.md](../SKILL.md) 4번을 자사 정보구조로 재작성,
   `scripts/page-audit.js`의 `SECTION_VOCAB` 상수를 동기화.
3. **컴포넌트 인벤토리** — [component-inventory.md](../component-inventory.md) 표
   내용을 자사 컴포넌트로 교체(역인덱스 틀은 유지).
4. **아이콘·에셋** — [css-patterns.md](../css-patterns.md) 2번 색 배정표를
   자사 아이콘셋으로.
5. **실측 문서 재실행** — [surface-depth.md](surface-depth.md)의 절차를 자사
   레퍼런스로 다시 돌리고, [design-qa.md](design-qa.md) 기준표를 자사 페이지로
   재측정.
6. **게이트 설정 교체** — `token-lint.js`/`page-audit.js` 상단의 상수(위 표 참고)를
   직접 고친다, baseline json 삭제 후 `--write-baseline`으로 재시작.
7. **anti-patterns.md 초기화** — 코드프레소 반례는 예시로만 남기고 빈 표로 시작,
   `harvest-feedback.js`의 언어 종속 정규식을 자사 언어로 교체.
8. **검증** — 더미 섹션으로 훅이 실제로 막는지 확인 후 `--all`로 전수 확인.

## 파일별로 무엇을 바꾸는지

아래 외 파일(`naming.md`·`reuse-playbook.md`·`cleanup.md`·`css-patterns.md`의
1·3·5·6·9번 등)은 원칙 자체가 범용이라 **손대지 않는다.**

| 파일 | 이식 시 바꾸는 부분 |
|---|---|
| `SKILL.md` | 3번 "절대 깨지 않는 제약"의 구체 수치(14px·900/720/560 등), 4번 섹션 어휘표 |
| `css-patterns.md` | 2번 아이콘 파일명·색 배정표, 4번 실측 대비표 |
| `tokens-typography.md` | 색상·spacing·radius·타이포·모션 값 전체 |
| `component-inventory.md` | A~F 표의 컴포넌트 목록 전체("역인덱스" 틀은 유지), "권장 글자 수" 표 |
| `surface-depth.md` | "밝은 면 ramp" 실측 대비표·hex 전체 — 절차(레퍼런스 실측→표 작성→갭 발견→토큰
  추가)는 그대로 따르고, 자사 레퍼런스로 다시 실행해 새 표를 만든다 |
| `design-qa.md` | 기준표의 구체 수치(어두운 판 1~2곳 등)와 grep 대상 클래스명 — 자사 페이지
  3~5장으로 재측정 |
| `anti-patterns.md` | 표 전체(코드프레소 커밋 기록) — 자사는 빈 표로 시작해
  `harvest-feedback.js`로 새로 쌓는다 |
| `mock-motion-guide.md` | 컴포넌트 클래스명 전체 — UX 아이디어(부모 data attribute
  스위칭·0%/100%는 완성 상태·1회 재생은 스크립트가 되감음)만 가져가고 자사
  컴포넌트로 재구현 |
| `subpage-guide.md` | 선례 페이지 목록·템플릿 경로·섹션 어휘 인용 |
| `buttons.md` / `page-structure.md` / `responsive-motion.md` / `checklist.md` | 본문에
  인용된 구체 클래스명·px값 — 절차·판단 기준 문장은 그대로 두고 인용만 자사 것으로
  치환 |
| `scripts/token-lint.js` | 상단 `TOKEN_FILES`·`SMALL_TEXT_OK`·`RADIUS_OK` 상수를 직접 고친다 |
| `scripts/page-audit.js` | 상단 `HOOKS`·`SECTION_VOCAB`·`SCOPE_EXCEPTIONS` 상수를 직접 고친다 |

## 이식 시 건드리지 않는 것

`scripts/gate.js`·`contrast-audit.js`, [SKILL.md](../SKILL.md) 0·2·5번,
[naming.md](naming.md)·[reuse-playbook.md](reuse-playbook.md)·[cleanup.md](cleanup.md)
전체, [css-patterns.md](../css-patterns.md)의 1·3·5·6·9번 — 전부 완전 범용이라
그대로 채택한다.
