---
name: html-css-architecture
description: 코드프레소 리뉴얼 사이트(순수 HTML/CSS/바닐라 JS — Tailwind·React 없음)의 마크업·스타일 규범과 디자인 QA 기준. 제1규칙은 "새로 만들지 말고 기존 컴포넌트·토큰·패턴을 찾아 그대로 재사용". HTML/CSS를 쓰거나 고칠 때, 섬션·서브페이지를 만들거나 리디자인할 때, 화면이 심심해 배경·아이콘·모션을 보강할 때, 목업에 연출을 넣을 때, 반응형·CSS 중복 정리·리팩터링·커밋을 할 때, 그리고 **작업을 마친 뒤 색·구조·배치를 디자이너 시점으로 QA·검수할 때**(강조 섬션·강조 배경 폭·움직이는 목업·애니메이션 점검) 항상 먼저 로드한다.
---

# HTML · CSS 작업 규범

이 프로젝트의 기본 마크업 규범이다. 별도 지시가 없어도 HTML/CSS 작업 시 항상 적용한다.

아래는 **매번 지켜야 하는 핵심**만 담았다. 세부 규칙은 `references/`에 나눠 두었고,
필요한 작업을 할 때만 열어 본다 — 아래 **"작업별로 여는 문서"** 표에서 고른다.

## 0. 제1규칙 — 새로 만들지 말고, 있는 것을 찾아 그대로 쓴다

**다른 모든 규칙보다 먼저 적용한다.** 버튼 하나, 카드 하나도 예외 없다.

> **새로 만들기 전에, 같은 역할을 하는 것이 프로젝트 안에 있는지 먼저 찾는다.
> 있으면 그 클래스와 토큰을 그대로 가져와 쓴다. 비슷한 CSS를 다시 쓰지 않는다.**

새 CSS를 한 줄이라도 쓰기 전에:

1. **[component-inventory.md](component-inventory.md)** — 같은 **역할**의 컴포넌트가 있는지 본다. 겉모습이 달라도 역할이 같으면 그것을 쓴다.
2. **`codepresso-designsystem.html`** — 카탈로그에 있으면 마크업 예시를 복사해 내용만 바꾼다.
3. **`css/tokens.css`** — 색·간격·radius·폰트는 반드시 기존 토큰으로 표현한다.
4. **[css-patterns.md](css-patterns.md)** — hover·아이콘·색 파생 등은 이미 정해진 방식이 있다.
5. **어디에도 없을 때만 새로 만든다.** 그때도 새 파일부터 만들지 말고 기존 파일에 합칠 수 있는지 본다.

**판단이 흔들릴 때:**

- **"비슷한데 좀 다르다"** → 기존 것을 쓰고 다른 점만 modifier로 덮는다. 새 클래스를 병렬로 만들지 않는다.
- **"이 페이지 전용인데"** → 아니다. 역할이 같으면 같은 컴포넌트를 쓴다. 페이지 CSS는 **배치**만 담는다.
- **같은 값을 두 번째로 쓰게 되면** 그 자리에서 토큰·공용 클래스로 올린다.
- **애매하면 새로 만들지 말고 사용자에게 묻는다.** 임의로 만들어 놓고 나중에 정리하는 것이 가장 비싸다.
- 후보를 찾았으면 **그 CSS 파일을 열어 상단 Markup API 주석을 실제로 읽는다.** 인벤토리의 한 줄 설명만 보고 "구조가 안 맞다"고 판단하지 않는다 → [references/reuse-playbook.md](references/reuse-playbook.md)

**작업을 마칠 때:** 새로 만든 것이 있으면 **왜 기존 것으로 안 됐는지** 보고에 한 줄 남긴다.
범용이면 `codepresso-designsystem.html`과 인벤토리에 등록한다.

## 1. 기술 스택 — 없는 것을 쓰지 않는다

**순수 HTML + CSS + 바닐라 JS.** 빌드 도구·프레임워크·전처리기가 없다.

- **Tailwind 없음** — `flex items-center gap-4` 같은 utility 클래스는 존재하지 않는다. 레이아웃은 컴포넌트 CSS로 쓴다.
- **React/JSX 없음** — 컴포넌트는 "CSS 클래스 + 마크업 패턴"이고, 재사용은 마크업 복사다.
- **Sass/PostCSS 없음** — `$변수`·`@mixin`·중첩 `&`를 쓰지 않는다. 변수는 `var(--...)`.

## 2. 파일 구조

```
partials/          전 페이지 공용 마크업 (header.html · footer.html)
css/
├── main.css       전 페이지 로드. @layer 순서로 @import
├── reset.css      브라우저 기본값 정규화
├── tokens.css     Design Token — 색·타이포·spacing·radius·motion
├── base.css       h1~h3, p 등 태그 전역 스타일
├── keyframes.css  공용 @keyframes 라이브러리
├── mobile.css     반응형 900/720/560 전부 (페이지마다 세 번째 <link>)
├── components/
│   ├── ui/        범용 UI — main.css가 전부 로드
│   └── sections/  섹션 조합 — 쓰는 페이지가 직접 로드
└── pages/         페이지별 @import + 고유 스타일
```

- `@layer reset, tokens, base, components;` 로 우선순위를 정한다 — specificity 경쟁(`.a .b .c .d`)으로 해결하지 않는다.
- **컴포넌트 파일 안에 `@layer`를 쓰지 않는다.** 레이어는 부르는 쪽(`main.css`·`pages/*.css`)이 `@import url(…) layer(components)`로 정한다.
- **페이지는 CSS를 `main.css` + `pages/{페이지}.css` + `mobile.css` 3개만 링크한다.** 새 컴포넌트 CSS는 HTML에 `<link>`를 더하지 말고 둘 중 맞는 곳에 `@import`한다.
- `ui/` vs `sections/` 판단: 떼어내 **다른 맥락에 놓아도 말이 되면** `ui/`, **그 섹션의 서사에 묶여** 있으면 `sections/`.
- `reset.css`·`tokens.css`의 내용을 이 문서에 옮겨 적지 않는다 — **파일이 정본이므로 열어서 확인한다.**

## 3. 절대 깨지 않는 제약

협의 없이 예외를 만들지 않는다. 바꿔야 할 이유가 생기면 사용자에게 확인받는다.

**타이포**
- **서비스 페이지 최소 폰트는 14px.** 작아 보이게 하려면 크기 대신 `color`(`--color-ink-lighter`)나 weight로 위계를 낮춘다. (13px은 `codepresso-designsystem.html` 문서 chrome 전용)
- **주의** — `--text-label` **토큰**은 13px이지만 `.text-label` **클래스**는 14px이다. 서비스 페이지에는 클래스를 쓴다.
- **Font weight 3단**(400/500/600). 700은 `metric-card` 큰 수치 하나만 쓰는 예외다.
- **Heading(h1~h3)은 Semibold(600) 고정.** `<h2>`를 쓰면 44px Semibold가 자동 적용되므로 **제목에 크기·굵기를 다시 쓰지 않는다.**

**토큰**
- **raw 값을 직접 쓰지 않는다.** `#1A61EA` (X) → `var(--color-brand)` (O)
- **토큰 이름을 추측하지 않는다.** 이 프로젝트는 흔한 관례와 다르다 — `--color-primary`, `--color-text`, `--color-border`, `--text-sm`, `--shadow-lg`는 **없다.** 텍스트는 `--color-ink` 계열이다. 없는 변수를 쓰면 그 속성이 조용히 무시된다. 반드시 `tokens.css`에서 확인한다.
- **`--space-*`는 숫자가 곧 px다** — `--space-6`은 6px이지 24px이 아니다.
- **그림자는 상호작용 신호다** — 평소 상태에 `box-shadow`를 깔지 않는다. 공간은
  면(surface ramp)과 경계선이 만들고, 그림자는 hover·활성만 담당한다. 예외는
  화면 위에 실제로 떠 있는 것뿐(`floating-cta`·`preview-frame`·`surface-glass`)
  → [css-patterns.md](css-patterns.md) "면·경계·그림자 3층"
- **진한 면이 필요하면 `--color-surface-raised`(1.267×) / `--color-surface-deep`(1.510×)** 를 쓴다.
  이 두 면 위 텍스트는 `--color-ink`·`--color-ink-light`까지만(그 아래는 AA 미달).

**카드 안에 장식용 선을 넣지 않는다**
- **카드·패널 안에 `border-left`/`border-top` 같은 accent 선을 쓰지 않는다.**
  "이 카드는 문제다", "이 항목은 강조다"를 세로 띠로 표시하지 않는다 —
  색(`--color-critical` 등 수치·텍스트 색) · 도형 · 한 줄 설명으로 말한다.
- **구분선은 예외다.** 영역을 나누는 선은 계속 쓴다 — 섹션 경계, 표의 행 사이,
  레일과 본문 사이(`catalog-board__rail`), 목업 상단 바(`preview-frame__bar`),
  footer 위쪽 선, 카드와 카드를 잇는 연결선. 판별 기준은
  **"나누거나 잇고 있는가(선) vs 꾸미고 있는가(장식)"** 다.
- **구현 방식이 아니라 보이는 결과로 판단한다.** `border-top`을 피해서
  `position: absolute`로 카드 상단에 4px 띠를 얹는 것은 같은 위반이다
  (실제로 그렇게 우회했다가 지적받았다). 카드 가장자리에 색 띠가 보이면 안 된다.
- 카드의 성격 구분이 필요하면 **면(배경) · 경계선 색 · 그림자 · 아이콘 색**으로 한다.
- 그래도 카드가 평평하면 선을 넣지 말고 배경·아이콘·모션으로 간다
  ([css-patterns.md](css-patterns.md) 4번).

**모션**
- `@keyframes`를 새로 만들기 전에 `css/keyframes.css`를 본다(rise-in·pop-in·scale-in·pulse·float·nudge·marquee 등).
- **애니메이션을 넣으면 `prefers-reduced-motion` 대응을 같은 파일에 1:1로 함께 넣는다.** 예외 없다.

**반응형**
- breakpoint는 **900 / 720 / 560px 3단**뿐이다. 새 숫자를 만들지 않는다.
- 반응형 CSS는 컴포넌트 파일이 아니라 **`css/mobile.css`** 에 모은다.

## 4. 클래스 네이밍 — 세 층

```
1. 어휘   섹션 이름은 아래 표에서 고른다 (짓지 않는다)
2. 스코프 페이지별 차이는 .{페이지명} .{섹션명} 으로 덮는다
3. 안쪽   섹션 안 요소는 짧게. 태그로 유일하면 클래스를 생략한다
```

```css
.process { }                        /* 공통 골격 — sections/ */
.ax-build .process { }              /* 이 페이지에서만 다른 값 — pages/ */
.ax-build .process .step-icon { }   /* 섹션 안 요소 */
```

**섹션 역할 어휘표 — 여기서 고른다**

| 클래스 | 역할 |
|---|---|
| `hero` | 첫 화면 — 한 줄 정의 + CTA |
| `intro` | 이것이 무엇인지 정의·전후 대비 |
| `features` | 기능·특징·조건을 나열 |
| `catalog` | 목록·분류를 한 판에 |
| `process` | 단계·절차·기간 |
| `deliverables` | 산출물·남는 것 |
| `outcomes` | 성과·고객 사례·수치 |
| `positioning` | 경쟁 구도·좌표 안에서의 자리 |
| `statement` | 한 문장만 던지는 전체 폭 강조 띠 (페이지당 1곳) |
| `journey` | 여정·학습 경로 |
| `insight` | 콘텐츠·아티클·뉴스 |
| `faq` | 자주 묻는 질문 |
| `cta-final` | 최하단 전환 유도 |

- **표에 없는 역할이 나오면 임의로 만들지 말고 사용자에게 묻고** 확인 후 표에 등록한다.
- 겉모습이 달라도 **역할이 같으면 같은 이름**을 쓴다. 차이는 스코프가 처리한다.
- 한 페이지에 같은 역할이 두 번 나오면 뒤에 한 단어를 붙인다(`features-team`).
- 페이지 스코프는 **`<main class="{페이지명}">`** — ID가 아니라 클래스다(ID는 specificity가 높아 공용 컴포넌트를 이긴다).
- **공용 컴포넌트의 생김새를 스코프로 덮지 않는다.** 배치만 한다.

세부(안쪽 요소 · BEM · modifier · `is-` 상태 · `data-` 훅) → [references/naming.md](references/naming.md)

## 5. 커밋 규칙

**커밋은 사용자가 명시적으로 요청할 때만 한다.** 작업이 끝났다고 자동으로 커밋하지 않는다.

```
{무엇}을 {어떻게} — 한국어 한 줄, 50자 내외

(리팩터링·버그 수정이면) 무엇이 문제였고 왜 그랬는지 먼저.
그 다음 어떻게 해결했는지.

- "무엇을 했다"가 아니라 "무엇이 어떻게 달라졌다"로 쓴다
- 수치가 있는 결정은 수치를 남긴다 (카드 높이 320px, 12px → 14px)
- 판단이 갈릴 수 있었던 지점은 왜 그 선택을 했는지 한 줄 덧붙인다
```

- **왜 그렇게 했는지가 무엇을 했는지보다 중요하다.** 코드를 봐도 모르는 것을 남긴다.
- **의도적으로 남긴 것**(정리할 수 있었지만 두기로 한 것)이 있으면 그 이유를 적는다.
- 도구가 자동 갱신하는 파일(`docs/.bkit-memory.json` 등)이 섞이면 마지막 줄에 밝힌다.

## 작업별로 여는 문서

**필요한 것만 연다.** 전부 읽지 않는다.

| 지금 하는 일 | 여는 문서 |
|---|---|
| 기존 것을 재사용할지 새로 만들지 판단이 안 선다 | [references/reuse-playbook.md](references/reuse-playbook.md) |
| 어떤 컴포넌트가 있는지 찾는다 | [component-inventory.md](component-inventory.md) |
| 색·간격·폰트 값을 정한다 / 토큰으로 올릴지 판단한다 | [references/tokens-typography.md](references/tokens-typography.md) |
| 섹션 안쪽 요소·상태·JS 훅 이름을 짓는다 | [references/naming.md](references/naming.md) |
| 버튼·링크를 놓는다 | [references/buttons.md](references/buttons.md) |
| 섹션을 추가한다 / 배경·에셋을 다룬다 | [references/page-structure.md](references/page-structure.md) |
| 반응형을 손본다 / 애니메이션을 넣는다 | [references/responsive-motion.md](references/responsive-motion.md) |
| hover·아이콘·색 파생 등 CSS 관용구가 필요하다 | [css-patterns.md](css-patterns.md) |
| **화면이 심심하다 — 배경·아이콘·모션으로 채운다** | [css-patterns.md](css-patterns.md) 4번 |
| 제품 화면 목업에 연출을 넣는다 | [mock-motion-guide.md](mock-motion-guide.md) |
| 새 서브페이지를 처음부터 만든다 | [subpage-guide.md](subpage-guide.md) |
| CSS 중복을 정리한다 / 리팩터링 후 확인한다 | [references/cleanup.md](references/cleanup.md) |
| **작업을 마친 뒤 — 색·구조·배치를 디자이너 시점으로 검수한다** | [references/design-qa.md](references/design-qa.md) |
| **작업을 마치기 직전** | [references/checklist.md](references/checklist.md) |

## 항상 하는 것

지시받지 않아도 매 작업에서 수행한다.

- **중복·무효 선언 정리** — 이번에 쓴 CSS가 `base.css`의 태그 전역 스타일이나 공용 유틸리티와 값이 겹치면 지운다. "몇 줄만 고치는 작업"이라고 건너뛰지 않는다 → [references/cleanup.md](references/cleanup.md)
- **마크업 · CSS · JS는 함께 움직인다** — 한쪽만 고치고 끝내지 않는다. 섹션을 재구성했거나 CSS를 30줄 이상 고쳤으면 3자 정합성을 확인한다.
- **접근성** — native 태그 우선(`<button>` > `<div role="button">`), 장식용 SVG에 `aria-hidden="true"`, 이미지 `alt`. `:focus-visible`은 `reset.css`가 전역으로 처리하므로 컴포넌트에서 다시 쓰지 않는다.
- **텍스트만 남기지 않는다** — 마크업을 다 넣었어도 텍스트 블록만 반복되면 완성이 아니다. 적용하지 않기로 한 것은 이유를 보고에 남긴다.
- **끝냈으면 디자이너 시점으로 다시 본다** — 페이지·섹션을 새로 만들거나 크게 고쳤으면 **강조 섹션 / 강조 배경의 화면 끝 도달 / 움직이는 목업 / 애니메이션 절제 / 색 위계 3층**을 값으로 세어 확인한다. 눈으로 "괜찮아 보인다"로 넘기지 않는다 → [references/design-qa.md](references/design-qa.md)
- **보고** — 지운 것과 **의도적으로 남긴 것(및 이유)** 을 함께 보고한다. 기존부터 깨져 있던 것과 이번에 깨진 것을 구분한다.

---

**결론은 하나로 돌아온다 — 새로 만들기 전에 먼저 찾아본다(0번).**
이미 있는 것을 그대로 쓰는 것이 가장 빠르고, 가장 일관되고, 가장 오래 유지된다.
