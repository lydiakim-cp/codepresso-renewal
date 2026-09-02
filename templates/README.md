# 서브페이지 조립 재료

새 서브페이지는 **설계하지 않고 조립한다.** 이 폴더의 조각은 모두 이미 운영 중인
페이지에서 그대로 떠 온 것이라, 붙이는 순간 기존 디자인과 어긋나지 않는다.

- `subpage.template.html` — 페이지 껍데기(head·meta·GNB·footer·스크립트). 루트에
  `{페이지이름}.html`로 복사해서 시작한다.
- `sections/*.html` — 섹션 조각. **문구만 바꾸고 클래스·구조는 그대로 둔다.**

## 조립 절차

1. `subpage.template.html`을 루트에 `{페이지이름}.html`로 복사한다.
2. `css/pages/{페이지이름}.css`를 만든다(`@layer components { .{페이지이름} { … } }`).
3. 내용 블록마다 아래 표에서 조각을 고르고, 파일 내용을 `<main>` 안에 붙인다.
4. 문구를 바꾼다 — 글자 수 상한은
   [component-inventory.md](../.claude/skills/html-css-architecture/component-inventory.md)
   "권장 글자 수".
5. 붙인 조각이 요구하는 `<script>`를 더한다(아래 표 오른쪽 칸).
6. 저장하면 훅이 `token-lint` + `page-audit`를 돌린다. 통과할 때까지 고친다.

**표에 맞는 조각이 없으면 새로 만들지 말고 묻는다.** 조각을 새로 추가할 때는 이미
운영 중인 페이지에서 떠 오고(직접 쓰지 않는다), 이 표에 한 줄을 더한다.

## 무엇을 담을 때 어느 조각인가

| 담을 내용 | 조각 | 함께 필요한 스크립트 |
|---|---|---|
| 첫 화면 (제목 + CTA + 보조 수치 3칸) | `hero.html` | — (`fade-up`을 붙이지 않는다) |
| 기능·특징 3~4개, 아이콘 + 한 줄 설명 | `features-card-3.html` | 자동 순환을 쓸 때만 `js/feature-card-cycle.js` |
| 분류가 있는 긴 목록 (업종·직군별 등) | `catalog-board.html` | `js/catalog-board.js` |
| 필터로 걸러 보는 카드 목록 | `catalog-filtered-list.html` | `js/case-filter.js` · `js/part-nav.js` |
| 기간·날짜가 붙는 단계 | `process-timeline.html` | — |
| 기간 없는 N단계 (선형·순환) | `cycle-steps.html` | — |
| 자랑할 누적 수치 (카운트업) | `outcomes-metric.html` | `js/stat-reveal.js` |
| 고객사 로고 + 성과 문장 | `outcomes-cases.html` | — |
| 한 문장만 던지는 전체 폭 강조 | `statement.html` | — (**페이지당 1곳**) |
| 질문과 답 | `faq.html` | — (`<details>` native) |
| 최하단 전환 유도 | `cta-final.html` | — (항상 마지막 섹션) |

더 세분한 판단(왜 이 조각이고 왜 저것이 아닌지)은
[component-inventory.md](../.claude/skills/html-css-architecture/component-inventory.md)의
"콘텐츠 → 컴포넌트 역인덱스"에 있다.

## 조각이 원본과 다른 점

- 목록(`<li>`)은 앞 2~3개만 남기고 잘랐다 — 나머지는 같은 구조를 반복한다.
- 문구·수치는 원본 페이지의 것이 그대로 남아 있다. **반드시 바꾼다**(그대로 두면
  다른 페이지의 내용이 새 페이지에 실린다).
- 조각 안 `id`(`part1-education` 같은 것)는 페이지 안에서 유일해야 한다 — 겹치면 바꾼다.
