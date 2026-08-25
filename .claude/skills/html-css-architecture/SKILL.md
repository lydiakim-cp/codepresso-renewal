---
name: html-css-architecture
description: 코드프레소 리뉴얼 사이트의 HTML/CSS 작업 규범. Semantic HTML, Design Token과 승격 기준, 고정 타이포 제약(메인 최소 14px·weight 3단), 컴포넌트화, 페이지/섹션 구조 관례, 에셋 네이밍(images/ 단일 루트·ic_ camelCase·버전 접미사 금지), 중복·무효 선언 정리, 마크업·CSS·JS 3자 정합성 확인, 커밋 메시지 규칙, 접근성. HTML 작성, CSS 작성, 컴포넌트 스타일링, 섹션 추가·리디자인, 아이콘/이미지 교체, 반응형, CSS 중복 제거·리팩터링, 커밋 작업을 할 때 항상 먼저 로드해서 따른다.
---

# Modern HTML & CSS Architecture

새로운 웹사이트/페이지/컴포넌트의 HTML과 CSS를 작성하거나 수정할 때 이 스킬을 로드하고, 아래 원칙에 따라 마크업과 스타일을 설계한다. 이 스킬은 프로젝트의 기본 마크업 규범이며, 별도 지시가 없어도 HTML/CSS/JSX 작업 시 항상 적용한다.

## 핵심 원칙

> **HTML은 의미를 표현하고, Component는 UI의 의미를 표현하며, CSS는 표현과 동작 상태를 담당한다.**

- Semantic HTML로 콘텐츠와 UI의 의미를 명확히 표현한다.
- 브라우저 기본 스타일은 Lightweight Reset으로 정규화한다.
- Design Token을 CSS 변수로 관리한다.
- 반복되는 UI는 Semantic Component로 추상화한다.
- Tailwind CSS는 utility를 제한적으로 사용한다.
- HTML/JSX의 `class`가 지나치게 길어지지 않게 한다.
- Container Query로 컴포넌트 단위 반응형을 구현한다.
- Accessibility는 설계 단계부터 고려한다.
- AI가 생성한 코드도 사람이 읽고 유지보수 가능해야 한다.
- 이미 상속되는 값을 다시 선언하지 않는다 — 마크업/CSS를 만질 때마다 중복·무효 선언을 걷어낸다(12번).
- 마크업 · CSS · JS는 항상 함께 움직인다 — 한쪽만 고치고 끝내지 않는다(12번 "정리 후 확인").
- 이미 확정된 프로젝트 제약(타이포·구조·에셋 네이밍)은 임의로 깨지 않고 확인받는다.

## CSS Architecture 계층

```
HTML / React Component
        ↓
Semantic HTML → Reset → Base Styles → Design Tokens → Utilities → Component Styles → Page-specific Styles
```

권장 파일 구조:

```
src/styles/
├── reset.css
├── tokens.css
├── base.css
├── utilities.css
└── components/
    ├── button.css
    ├── card.css
    ├── input.css
    ├── badge.css
    └── modal.css
```

작은 프로젝트는 파일을 통합해도 되지만 **역할의 분리**는 유지한다.

## 1. Semantic HTML

`div`를 기본 element로 쓰지 않는다. 의미에 맞는 태그를 우선한다: `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`, `button`, `a`, `form`, `label`, `input`, `textarea`, `select`, `ul`, `ol`.

```html
<header><nav>...</nav></header>
<main>
  <article>
    <header><h1>제목</h1></header>
    <section><h2>소제목</h2><p>...</p></section>
  </article>
</main>
<footer>...</footer>
```

### div 사용 원칙

Semantic meaning이 없는 단순 layout wrapper에는 `div` 허용:

```html
<div class="track-grid">...</div>
```

클릭 가능한 UI에 `div onclick`을 쓰지 않는다 → `button` 사용. 이동에는 `a href` 사용.

### Heading Hierarchy

`h1~h6`는 문서 구조를 위해서만 사용하고, 글자 크기 조절 목적으로 레벨을 낮추지 않는다. 시각적 크기는 CSS로 처리한다.

## 2. Lightweight Reset

프로젝트 시작 시 다음과 같은 최소 Reset을 적용한다. **디자인 시스템 값(폰트 크기, 색상 등)은 Reset에 넣지 않는다** — Reset은 브라우저 기본값 정규화만 담당.

```css
*, *::before, *::after { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }
body { margin: 0; min-height: 100vh; }
img, picture, svg, video, canvas { display: block; max-width: 100%; }
button, input, textarea, select { font: inherit; }
button { cursor: pointer; }
button:disabled { cursor: not-allowed; }
a { color: inherit; text-decoration: none; }
h1, h2, h3, h4, h5, h6, p { margin: 0; }
ul, ol { margin: 0; padding: 0; list-style: none; }
textarea { resize: vertical; }
:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
```

## 3. Base Styles

Reset 이후 글로벌 기본 스타일(배경, 텍스트 색상, 폰트, line-height 등)을 Design Token 기반으로 정의한다.

```css
body {
  background: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-family-sans);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}
```

### 이 프로젝트의 고정 타이포 제약 (협의 없이 깨지 않는다)

아래는 이 프로젝트에서 이미 확정된 제약이다. `css/tokens.css`에 주석으로도 남아 있지만, 새 컴포넌트를 만들 때 **먼저 알고 시작해야 하는 값**이라 여기에도 둔다. 바꿔야 할 이유가 생기면 임의로 예외를 만들지 말고 사용자에게 확인받는다.

- **메인페이지(`index.html`) 최소 폰트는 14px이다.** `--text-body-12`/`--text-body-13`을 메인페이지에서 쓰지 않는다. 작아 보이게 하고 싶으면 크기를 줄이는 대신 `color`(`--color-ink-lighter`)나 weight로 위계를 낮춘다.
  - 13px은 `codepresso-designsystem.html` 카탈로그 문서의 chrome(캡션·주석) 전용이다.
  - 12px은 현재 사용처가 없다. 새로 쓰지 않는다.
- **Font weight는 3단(400 Regular / 500 Medium / 600 Semibold)이 원칙이다.** 700 Bold는 예외 — `proof-card`의 강조 지표처럼 Semibold로 부족한 자리에만 쓰고, 새로 쓸 때는 왜 Semibold로 안 되는지 근거를 남긴다.
- **Heading(`h1~h3`)은 Semibold(600) 고정이다.** heading에 Regular·Medium·Bold를 섞지 않는다.
- **자간은 스케일이 정한다** — heading은 40px 이하 `-0.1px` / 56px 이상 `-0.5px`, body는 16px만 `-0.1px`이고 14px 이하는 `0`. 개별 컴포넌트에서 임의 자간을 새로 정하지 않는다.

새 텍스트 스타일이 필요할 때는 이 제약 안에서 `--text-*` 시맨틱 토큰(`--text-h2`, `--text-body-muted`, `--text-card-title` 등)을 먼저 찾아 쓴다.

### Base Heading/Text 스타일과의 중복 방지

`base.css`에 `h1~h6`, `p` 등에 Design Token 기반 전역 타이포 스타일을 이미 정의했다면, 컴포넌트에서 새 텍스트 스타일을 만들기 전에 **먼저 그 전역 스타일과 값이 같은지 확인한다.**

- 새로 마크업할 텍스트가 시맨틱상 `h1~h6`/`p`에 해당하고, 원하는 시각 스타일이 `base.css`의 해당 태그 스타일과 동일하다면 → **그 태그를 그대로 쓰고 컴포넌트 CSS에는 값이 다른 속성(예: `color`)만 override로 남긴다.** `div`/`span`에 태그의 전역 스타일과 동일한 `font-size`/`line-height`/`font-weight`/`letter-spacing`을 통째로 다시 선언하지 않는다.
- 반대로 시각 스타일은 비슷해 보이지만 스케일이 다르다면(예: hero 타이틀이 `h1`보다 훨씬 큰 hero 전용 사이즈) → 태그를 시맨틱에 맞게 유지하되, 별도 컴포넌트 클래스로 전체 스타일을 새로 정의한다. 이 경우는 중복이 아니라 의도적으로 다른 스케일이므로 정리 대상이 아니다.
- 판단 후에는 **의미(시맨틱 계층)와 시각(중복 제거) 둘 다 확인**한다. 값이 겹쳐서 태그를 올렸을 때 heading 계층을 건너뛰게 된다면(`h1` 다음 바로 `h3` 등) 그 트레이드오프를 사용자에게 명시하고 확인받는다 — 자동으로 감수하고 넘어가지 않는다.
- 이 점검은 **한 요소를 손볼 때 그 요소만 보고 끝내지 않는다.** 같은 이유로 값이 겹칠 만한 다른 텍스트 요소(다른 컴포넌트의 heading/본문 클래스)가 있는지 프로젝트 전체에서 한 번에 훑고, 같은 패턴이면 같은 방식으로 정리한다.

## 4. Design Tokens

색상, spacing, radius, shadow, typography 등 반복 값은 CSS 변수로 관리한다.

```css
:root {
  --color-primary: #3274fc;
  --color-on-primary: #ffffff;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-text-muted: #64748b;
  --color-border: #e2e8f0;
  --color-focus: #3274fc;

  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px;

  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px; --radius-xl: 24px;

  --shadow-sm: 0 1px 2px rgb(0 0 0 / 5%);
  --shadow-md: 0 4px 12px rgb(0 0 0 / 8%);
  --shadow-lg: 0 10px 30px rgb(0 0 0 / 12%);

  --text-sm: 14px; --text-base: 16px; --text-lg: 18px; --text-xl: 20px;
  --font-weight-regular: 400; --font-weight-medium: 500;
  --font-weight-semibold: 600; --font-weight-bold: 700;
}
```

**원칙: raw 값을 직접 쓰지 않는다.** `background: #3274fc;` (X) → `background: var(--color-primary);` (O)

### 토큰 승격 기준 — 무엇을 토큰으로 올리고, 무엇을 컴포넌트에 두는가

이 프로젝트는 디자인 판단을 **구체적인 수치로 지시**하는 방식으로 진행된다("카드 높이 320px", "이동폭 34px", "hover 시 3px", "12px → 14px"). 그 수치가 토큰이 될지 컴포넌트 CSS에 남을지 기준이 없으면, 어떤 값은 토큰이 되고 어떤 값은 하드코딩으로 남아 체계가 갈라진다. 아래로 판단한다.

**토큰으로 승격한다 — 다음 중 하나라도 해당하면:**
- **서로 다른 컴포넌트 2곳 이상에서 같은 값이 쓰인다.** (2회가 기준선이다. 3회까지 기다리지 않는다.)
- 색상·spacing·radius·shadow·타이포처럼 **이미 스케일이 존재하는 축의 값**이다 — 스케일에 빈칸이 생기면 채운다(`--space-60`, `--text-heading-44`가 이렇게 추가됐다).
- 그 값이 바뀌면 **여러 곳이 함께 바뀌어야 하는** 성격이다(브랜드 컬러, 배경 틴트, 본문 최소 크기).

**컴포넌트 CSS에 둔다 — 다음에 해당하면:**
- 그 컴포넌트 **하나에서만 의미 있는 치수**다 — 카드 고정 높이(320px), 텍스트 이동폭(34px), 특정 패널의 `min-height`, 마퀴 애니메이션 길이.
- 값 자체가 **다른 값과의 관계로 정해진** 것이다(“3개 패널 중 가장 높은 것에 맞춘 높이”).
- 이런 값은 토큰으로 올리지 말고 **왜 그 수치인지 한 줄 주석**을 남긴다. 다음 사람이 임의로 바꾸지 않게 하는 게 토큰화보다 중요하다.

```css
/* 좋음 — 1회성 치수 + 근거 주석 */
.feature-card {
  /* 3개 카드 중 desc가 가장 긴 카드 기준. 이보다 낮추면 hover 시 텍스트가 잘린다 */
  height: 320px;
}

/* 나쁨 — 근거 없는 매직넘버 */
.feature-card { height: 320px; }
```

**애매하면 컴포넌트에 두고 주석을 남긴다.** 토큰 파일이 1회성 값으로 불어나는 것이, 컴포넌트에 근거 있는 수치가 남는 것보다 나쁘다. 나중에 두 번째 사용처가 생기면 그때 승격한다.

## 5. Tailwind CSS 사용 원칙

Tailwind는 제거 대상이 아니라 **역할을 제한**해서 쓴다.

- **Utility 사용 적합**: 단순/일회성 layout — `flex items-center gap-4`, `grid grid-cols-2 gap-6`, `text-sm`, `mx-auto w-full max-w-6xl`
- **Component class로 추출해야 하는 경우**: ① 스타일 반복 ② class가 지나치게 김 ③ hover/focus/disabled 등 상태 복잡 ④ 접근성 관련 스타일 ⑤ 의미 있는 이름이 더 이해하기 쉬움 ⑥ 재사용 가능성 높음

```html
<!-- 지양: 긴 utility chain -->
<a class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] ...">본문으로 이동</a>

<!-- 권장: semantic component class -->
<a href="#main-content" class="skip-link">본문으로 이동</a>
```

**기준**: utility 3~5개 이상이 결합되어 의미 있는 UI 패턴을 표현하면 component class 추출을 검토한다. 단, 단순 layout에는 강제하지 않는다.

### Arbitrary Value 제한

`w-[317px]`, `mt-[13px]`, `bg-[#3274FC]` 같은 arbitrary value는 지양한다. Design Token/Tailwind 기존 scale 사용(`mt-4`, `bg-primary`). 반복적으로 필요한 값은 Design Token으로 승격한다.

## 6. Component Architecture

반복 UI는 재사용 가능한 Component로 만든다.

```
components/
├── ui/ (Button, Card, Badge, Input, Modal)
├── navigation/ (Header, Sidebar, SkipLink)
└── domain/ (도메인별 Card, ProgressBar 등)
```

페이지는 markup만 봐도 구조와 의미를 이해할 수 있어야 한다:

```tsx
<main>
  <PageHeader title="..." description="..." />
  <TrackGrid>
    <TrackCard />
    <TrackCard />
  </TrackGrid>
</main>
```

Variant가 있는 컴포넌트는 의미 있는 API 제공: `<Button variant="primary">`, `<Button variant="danger">` — 페이지마다 긴 utility chain을 반복하지 않는다.

### CSS 파일 분리 기준 — 무분별한 파일 증식 방지

새 UI를 만들 때마다 새 CSS 파일부터 만들지 않는다. **같은 section이거나 비슷한 기능 카테고리에 속하는 스타일이라면, 새 파일을 만들지 말고 기존 파일(예: `layout.css`, 같은 도메인의 컴포넌트 파일)을 재사용한다.**

- 새 컴포넌트 CSS를 작성하기 전에 먼저 확인: 이 스타일이 들어갈 성격이 비슷한 기존 파일이 있는가? (예: 섹션 상단 타이틀 블록, 페이지 레이아웃 wrapper류는 `layout.css`처럼 레이아웃을 모아두는 파일에 함께 둔다.)
- 별도 파일로 분리하는 것은 그 컴포넌트가 **명확히 독립적이고 여러 페이지/문맥에서 재사용될 단위**일 때만 한다 (버튼, 카드, 뱃지처럼 범용 UI 프리미티브).
- 한 페이지의 특정 섹션에서만 쓰이는 스타일, 혹은 다른 레이아웃류 스타일과 성격이 겹치는 스타일을 매번 새 파일로 쪼개면 컴포넌트 파일 수만 늘어나고 유지보수성이 떨어진다 — 이런 경우는 통합한다.
- 판단이 애매하면 파일을 새로 만들기보다 기존 파일에 합치는 쪽을 기본값으로 한다.

## 7. Responsive Design

### 이 프로젝트의 현재 단계 — 데스크톱 확정 우선

**현재 이 프로젝트는 데스크톱(1440px 기준) 디자인을 확정하는 단계다.** 아직 반응형 대응은 착수하지 않았다. 따라서:

- **요청받지 않은 반응형 작업을 임의로 추가하지 않는다.** 새 컴포넌트를 만들면서 미디어 쿼리 3단을 함께 깔지 않는다 — 데스크톱 레이아웃이 확정되기 전의 반응형은 대부분 재작업이 된다.
- **다만 지금 해두면 나중에 재작업이 없는 것은 지금부터 적용한다** — 아래 Fluid Design(`clamp()`/`min()`/`max()`)과 Logical Properties, 그리고 재사용 컴포넌트의 `container-type` 선언. 이것들은 데스크톱 단독 렌더링을 바꾸지 않으면서 반응형 착수 비용을 낮춘다.
- **고정 px 레이아웃을 쓸 때는 그것이 임시임을 드러낸다** — 폭·높이를 픽셀로 못 박아야 한다면 한 줄 주석으로 근거를 남겨(“1440 기준, 반응형 착수 시 재검토”) 나중에 찾을 수 있게 한다.
- 반응형은 **별도 요청으로 착수**한다. 그때 아래 원칙(Container Query 우선, breakpoint 최소화)을 적용한다.

### 착수 시 원칙

- **페이지 전체 레이아웃** → Media Query
- **재사용 가능한 Component** → Container Query 우선 검토

```css
.track-grid {
  container-type: inline-size;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}
@container (min-width: 640px) { .track-grid { grid-template-columns: repeat(2, 1fr); } }
@container (min-width: 960px) { .track-grid { grid-template-columns: repeat(3, 1fr); } }
```

### Fluid Design

breakpoint를 과도하게 늘리지 않고 `clamp()`, `min()`, `max()`, `calc()`를 적극 활용한다.

```css
.page-title { font-size: clamp(2rem, 5vw, 4rem); }
.section { padding-block: clamp(48px, 8vw, 120px); }
.container { width: min(100% - 32px, 1200px); margin-inline: auto; }
```

### Logical Properties

글로벌/다국어 서비스를 고려해 논리 속성을 사용한다: `margin-inline-start`, `padding-inline-end` (물리 속성 `margin-left`, `padding-right` 대신).

## 8. Accessibility

설계 단계부터 고려하며 별도 마무리 작업으로 미루지 않는다.

- Native HTML 우선: `<button>저장</button>` > `<div role="button">저장</div>`. ARIA는 native semantic으로 부족할 때 보완적으로만 사용.
- 모든 interactive element에 `:focus-visible` 스타일 제공 (`:focus`보다 우선).
- 접근성 유틸리티는 중앙 관리: `.sr-only`, `.skip-link` 등을 semantic component/utility로 정의.
- 이미지 `alt`, form label 연결, keyboard navigation 지원 필수.

## 9. 모던 CSS 기능 활용

- **`:has()`**: DOM 상태 기반 스타일 변경으로 불필요한 JS state 조작 감소. 예: `.form-group:has(input:invalid) { border-color: var(--color-error); }`
- **CSS Nesting**: 관련 스타일을 묶을 때 사용하되 과도하게 깊게 만들지 않는다 (Component → State/Element 정도 깊이 권장).
- **Subgrid**: 여러 Card의 내부 요소(Title/Description/CTA)를 행 단위로 정렬해야 할 때 검토.
- **CSS Layer**: 대규모 프로젝트에서 `@layer reset, base, components, utilities;`로 우선순위 관리. specificity를 selector chain(`.page .content .card .title`)으로 해결하지 않는다.

## 10. 피해야 할 패턴

- 거대한 class attribute (반복/복잡 UI는 Component CSS로 추출)
- Arbitrary value 남발 (`top-[17px]`, `bg-[#3274FC]`)
- 색상/spacing 직접 입력 (Design Token 사용)
- 의미 없는 class 이름 (`box blue big` 대신 `track-card`)
- CSS specificity 경쟁 (`.page .main .card .content .title`)
- CSS로 해결 가능한 상태(`:hover`, `:focus-visible`, `:has()`)를 불필요하게 JS로 관리
- 모든 것을 utility로만 처리 (Utility-first는 목적이 아니라 도구)

## 11. 작업 전 판단 순서

이 프로젝트는 `codepresso-designsystem.html`을 컴포넌트 카탈로그(디자인 시스템 문서)로 유지한다. 새 UI를 구현하기 전 다음 순서로 판단한다:

1. **`codepresso-designsystem.html`을 먼저 확인**한다 — 만들려는 UI(버튼, 카드, 뱃지, 진행 표시, 폼 컨트롤 등)와 같은 역할의 컴포넌트가 이미 문서화되어 있는가?
   - 있으면 → 그 컴포넌트의 클래스/토큰을 **그대로 재사용**한다. 겉모습이 비슷해 보여도 새 클래스를 따로 만들지 않는다.
   - 없으면 → 새로 제작한다. 제작 후에는 **`codepresso-designsystem.html`에 해당 컴포넌트 섹션을 추가**해 문서를 최신 상태로 유지한다(마크업 예시 + 용도 설명 정도의 최소 기록이면 충분하다. 기존 문서의 section 구조·`callout`/`card` 패턴을 따른다).
   - 새 컴포넌트가 기존 컴포넌트와 색상/spacing/radius/shadow 값이 겹치는데 별도로 하드코딩되고 있다면 → 기존 값을 참조하도록 통일한다(예: 버튼 hover 컬러를 새로 정의하지 않고 기존 `--color-brand`/`--color-brand-dark` 체계를 따른다).
2. 기존 Design Token으로 표현 가능한가? → **Token 사용**
3. 반복될 가능성이 있는 UI인가? → **Component로 추출**
4. 단순한 layout/style인가? → **Utility 사용**
5. 복잡한 interaction/state가 있는가? → **Component CSS 사용**

이 판단 순서는 매번 작은 요청(버튼 하나, 컴포넌트 하나 수정)에도 적용한다 — "이미 있는 페이지에 몇 줄만 고치는 작업"이라도 디자인 시스템 문서와의 일치 여부를 확인하지 않고 넘어가지 않는다.

### 페이지 · 섹션 구조 관례

새 섹션을 추가하거나 기존 섹션을 재구성할 때 아래 구조를 따른다. 이미 확정된 관례이므로 새로 설계하지 않는다.

**CSS 로드 — 페이지마다 정확히 2개**

```html
<link rel="stylesheet" href="css/main.css">        <!-- reset → tokens → base → 공통 컴포넌트 -->
<link rel="stylesheet" href="css/pages/index.css"> <!-- 그 페이지 전용 컴포넌트 -->
```

- 새 컴포넌트 CSS를 만들면 **공통이면 `main.css`에, 페이지 전용이면 `css/pages/{page}.css`에** `@import`를 추가한다. HTML에 세 번째 `<link>`를 붙이지 않는다.
- 판단 기준: 두 개 이상의 페이지가 쓸 컴포넌트인가? → 공통. 한 페이지의 특정 섹션 전용인가? → 페이지 CSS.

**섹션 마크업**

```html
<section class="{섹션이름} fade-up" id="{앵커가 필요할 때만}">
  <div class="section-wrap content">
    ...
  </div>
</section>
```

- `<section>`에 섹션 이름 클래스를 두고, **스크롤 진입 애니메이션이 필요하면 `fade-up`을 함께 붙인다**(`js/fade-up.js`가 IntersectionObserver로 처리). hero는 첫 화면이라 붙이지 않는다.
- 폭 제한·좌우 패딩은 항상 안쪽 `.section-wrap`이 담당한다. `<section>`에 직접 `max-width`를 주지 않는다.
- `id`는 GNB·`part-nav`가 앵커로 잡아야 할 때만 붙인다.

**`<header>`는 GNB 하나만**

문서 전체에서 `<header>` 태그는 **`<nav>`를 가진 최상단 GNB 하나**만 쓴다. 섹션 안의 "타이틀 + 설명 + CTA" 상단 블록은 `<header>`가 아니라 `div`로 마크업하고 `{섹션이름}-head` 같은 클래스를 준다. (과거 `difference-block-head`·`journey-block-head` 6곳을 이 규칙에 맞춰 `div`로 교체한 이력이 있다.)

**배경은 섹션이 아니라 그룹이 그린다**

인접한 섹션들이 하나의 배경(그라디언트·틴트)을 공유해야 하면, 섹션마다 따로 칠하지 말고 **묶는 wrapper에서 한 번만 그린다**(`.parts-group`이 PART 1·2를 감싸 그라디언트를 한 번만 그리는 방식). 섹션마다 칠하면 경계에서 색이 끊긴다.

영역 구분은 `border`보다 **`background` 차이로** 처리하는 것을 기본으로 한다.

### 시안(sample) 페이지의 CSS 재사용 원칙

여러 디자인 시안을 비교하기 위해 `sample/` 아래 임시 HTML을 만들 때도 **실제 프로젝트 CSS를 그대로 링크**해서 쓴다. 시안이 나중에 채택되면 실제 컴포넌트가 되므로, 미리 실제 클래스/토큰을 쓰고 있어야 "적용" 단계가 필요 없다.

- `<link rel="stylesheet" href="../css/main.css">`로 **reset·tokens·base·components 전체**를 불러온다. `tokens.css`만 링크하고 나머지를 `<style>` 안에서 손으로 재구현하지 않는다.
- 이미 존재하는 컴포넌트(카드 셸, 진행바, 옵션 버튼 등)는 그 실제 클래스명(`.hero-survey-frame`, `.hero-survey-option` 등)을 그대로 마크업에 써서 렌더링을 재사용한다. `.demo-card`, `.opt-check`처럼 시안 전용 이름으로 껍데기를 다시 만들지 않는다.
- 시안 페이지의 `<style>` 블록에는 **그 시안에만 있는 새로운 시도**(아직 컴포넌트로 확정되지 않은 실험적 스타일, 여러 컨셉을 나열하기 위한 페이지 레이아웃)만 남긴다. 실제 컴포넌트의 색상·spacing·radius를 다시 하드코딩하지 않는다.
- 여러 컨셉을 비교하는 시안이라도 공용 부분(카드 셸, 진행바 구조 등)은 하나의 실제 클래스를 공유하고, 컨셉별로 달라지는 지점만 별도 modifier 클래스로 분기한다.
- 시안이 채택되면 그 시안의 실험적 스타일을 실제 컴포넌트 CSS 파일로 옮기고, 다른 시안들은 정리(삭제 또는 참고용으로만 축소)한다.

### 네이밍 금지: `demo-*` / `sample-*`

클래스명·파일명 어디에도 `demo-`, `sample-` 같은 범용·임시 접두사를 쓰지 않는다. 이런 이름은 "이건 진짜가 아니다"라는 신호만 줄 뿐 무엇인지 설명하지 않고, 시안이 채택되면 실제 이름으로 다시 바꿔야 하는 불필요한 작업을 만든다.

- **클래스명**: 시안 전용 실험 클래스도 그 컴포넌트가 실제로 무엇인지 설명하는 이름을 쓴다 — `.demo-card` (X) → 그 UI가 속할 컴포넌트 이름을 그대로 따르거나(`.hero-survey`), 실험안이라면 컨셉을 설명하는 이름(`.opt-radio`, `.opt-underline`처럼 무엇을 하는 옵션인지 드러나는 이름)을 쓴다.
- **파일명**: `sample/` 폴더 안에 있어도 파일명 자체는 그 페이지가 다루는 대상을 설명해야 한다 — `sample-1.html`, `demo-page.html` (X) → `survey-progress-sample.html`처럼 "무엇의 무엇"인지 드러나는 이름 (O). `sample`이라는 단어를 꼭 넣어야 한다면 접두사가 아니라 맥락을 설명하는 단어 뒤에 접미사로만 둔다.
- 이미 있는 `demo-*`/`sample-*` 이름을 발견하면 그 자리에서 의미 있는 이름으로 정리한다.

### 에셋 네이밍 · 위치 규칙

이미지·아이콘·배경 파일도 클래스명과 같은 기준으로 다룬다. 다운로드한 원본 파일명을 그대로 커밋하지 않는다.

**위치 — `images/` 하나만 쓴다.**

```
images/
├── icon/               아이콘 (제품·기능·장식)
├── codepresso_logo/    자사 로고
├── logos/              고객사 로고
└── (루트)              페이지 배경·일러스트 등 그 외
```

- **`assets/`, `img/`, `static/` 같은 두 번째 에셋 루트를 만들지 않는다.** 새 성격의 파일이 생기면 `images/` 아래 하위 폴더로 넣는다(모션 소스 → `images/motion/`).
- 이미 다른 루트에 있는 파일을 발견하면 `images/` 아래로 옮기고 참조 경로를 함께 고친다.

**파일명 규칙**

- **아이콘: `ic_` + camelCase** — `ic_skillPath.svg`, `ic_aiFluent.svg`. 소문자로 붙여쓰지 않는다(`ic_skillcertify.svg` (X) → `ic_skillCertify.svg` (O)).
- **그 외: kebab-case** — `bg-gradient.png`, `insight-thumb.svg`.
- **한글·공백·쉼표·번호 접두사 금지** — `003.일정,캘린더.svg` (X) → `ic_calendar.svg` (O). 한글 파일명은 git 로그에서 이스케이프되어 읽을 수 없고, 일부 환경에서 경로가 깨진다.
- **확장자는 용도에 맞게** — 아이콘·로고·일러스트는 SVG 우선. 같은 이름의 `.png`/`.svg`를 둘 다 두지 않는다(하나만 쓰이고 나머지는 죽은 파일이 된다).

**버전 접미사 `-v1` / `-v2` / `-glass` 금지**

- 시안을 비교하는 동안에만 로컬에서 쓰고, **커밋에는 확정된 파일 하나만 올린다** — `skillfit-icon-glass-v1.png`, `skillcamp-icon-v3.png` 같은 이름이 저장소에 남으면 어느 것이 현재 쓰이는 것인지 알 수 없다.
- 아이콘·이미지를 **교체할 때는 새 파일을 추가하는 게 아니라 같은 이름으로 덮어쓰거나, 새 이름으로 바꾸고 구본을 같은 커밋에서 삭제한다.** 참조가 끊긴 구본을 남기지 않는다.
- 에셋을 교체·삭제하기 전에 `index.html`·`css/`·`js/`에서 파일명을 검색해 참조가 없는지 확인한다.

## 12. 중복·무효 선언 정리 (마크업/CSS 작업마다 필수)

HTML·CSS를 **작성하거나 수정할 때마다** 아래 4종 중복을 점검하고 정리한다. 사용자가 따로 요청하지 않아도 항상 수행하는 상시 작업이며, "이번엔 몇 줄만 고치는 작업"이라는 이유로 건너뛰지 않는다.

정리는 **값이 같은지 실제로 확인한 뒤에만** 한다. 토큰(`var(--text-h2)`)은 이름이 달라도 최종 값이 같을 수 있으므로, 토큰 체인을 끝까지 펼쳐 실제 값(`44px`)으로 비교한다. 이름만 보고 "다르겠지"라고 넘기지 않는다.

### (1) 태그 전역 스타일과 중복된 폰트 재정의

`base.css`가 `h1~h6`·`p` 등에 이미 주는 값을 컴포넌트 클래스가 다시 선언하는 경우.

```css
/* base.css: h2 { font-size: 44px; line-height: 54px; font-weight: 600; ... } */

/* 나쁨 — h2에 붙는 클래스가 기본값을 그대로 재선언 */
.section-title h2 { font-size: var(--text-h2); line-height: var(--leading-h2); font-weight: 600; text-align: center; }

/* 좋음 — 값이 다른 속성만 남긴다 */
.section-title h2 { text-align: center; }
```

- 클래스가 붙은 **실제 태그를 마크업에서 확인**하고, 그 태그의 `base.css` 기본값과 `font-size`/`line-height`/`font-weight`/`letter-spacing`/`color`를 하나씩 비교한다.
- 겹치는 속성만 지우고, 다른 값은 남긴다.
- **전부 겹쳐서 규칙이 비면** 규칙과 클래스명을 모두 삭제하고 태그만 남긴다(`<h1 class="hero-title">` → `<h1>`).
- 반응형 단계에서 기본값과 우연히 같아지는 경우(예: 26px → 24px → 20px 사다리의 중간이 h3 기본값과 일치)는 **의도된 스케일 변화이므로 중복이 아니다.** 지우지 않는다.

### (2) 같은 요소의 공용 유틸리티와 중복된 클래스

마크업에서 공용 유틸리티 클래스와 나란히 붙어 있으면서 같은 값을 또 선언하는 컴포넌트 클래스.

```html
<!-- .text-caption이 이미 14px/22px/ink-lighter를 주는데 -->
<span class="journey-program-desc text-caption">온라인 이러닝</span>
```

- 고유 속성이 하나도 없이 **유틸리티와 100% 동일하면** → CSS 규칙과 마크업의 클래스명을 **둘 다** 삭제한다.
- 고유 속성이 있으면 → 겹치는 선언만 지우고 클래스는 유지한다.
- 삭제 전 반드시 `js/`와 `css/` 전체에서 그 클래스명을 검색해 **JS 훅이나 다른 셀렉터가 참조하지 않는지 확인**한다. 참조가 있으면 마크업의 클래스는 남기고 CSS 선언만 정리한다.

### (3) modifier가 base 규칙을 되풀이하는 경우

```css
/* 나쁨 — padding/border-radius가 base와 동일 */
.summary-banner { padding: var(--space-48); border-radius: var(--radius-lg); background: A; }
.summary-banner.stats { padding: var(--space-48); border-radius: var(--radius-lg); background: B; }

/* 좋음 — 달라지는 값만 */
.summary-banner.stats { background: B; }
```

부모에서 상속되는 속성(`color`, `font-family`, `letter-spacing` 등)을 자식 셀렉터가 같은 값으로 다시 선언하는 것도 같이 정리한다. 단 `::before`/`::after`는 상속받지 않는 속성(`position`, `border-radius` 등)을 다시 써야 하는 경우가 많으므로 **상속 여부를 확인한 뒤** 판단한다.

### (4) 무효한 `display: flex` / layout 선언

- `display:flex`인데 `gap`·`flex-direction`·`align-items`·`justify-content`·`flex-wrap`·`flex-*` 중 아무것도 쓰지 않으면 → `display` 선언 삭제.
- **자식이 1개**라서 `flex-direction`·`gap`이 아무 일도 하지 않으면 → 그 선언들을 삭제한다(`.difference-cycle`처럼 `<ol>` 하나만 감싸는 wrapper).
- **단, 자식이 1개여도 정렬이 실제로 동작하는 경우는 삭제하지 않는다** — `align-items`+`justify-content`로 아이콘/텍스트를 중앙 정렬하는 아이콘 박스, `.btn` 같은 컨트롤은 flex가 제 역할을 한다.
- 자식 수는 **마크업을 직접 열어 확인**한다. self-closing SVG(`<path/>`)나 void 태그 때문에 자동 카운트가 틀리기 쉬우므로, 스크립트 결과만 믿고 지우지 않는다.

### 점검 범위 — 한 요소에서 멈추지 않는다

한 곳에서 이 중복을 발견하면 **같은 패턴이 있을 다른 곳을 프로젝트 전체에서 한 번에 훑고 같은 방식으로 정리한다.** 파일 하나만 고치고 끝내면 나머지가 계속 남아 다음 작업에서 또 갈라진다.

### 정리 후 확인 — 마크업 · CSS · JS 3자 정합성

정리·리팩터링 후에는 **세 축이 서로 어긋나지 않았는지 양방향으로** 확인한다. 한쪽 방향(HTML이 쓰는 클래스가 CSS에 있는가)만 보면, CSS는 새 구조로 갔는데 마크업이 옛 버전에 남는 사고를 잡지 못한다. 실제로 이 프로젝트에서 한 커밋이 통째로 그 복구에 쓰인 적이 있다(hero-survey: CSS만 새 구조로 교체되고 마크업이 옛 버전으로 남음).

**섹션 하나를 재구성하거나 컴포넌트 CSS를 30줄 이상 고쳤다면 아래 4개를 전부 돌린다.** 몇 줄만 고친 작업은 1·2번만 확인해도 된다.

1. **HTML → CSS**: 각 HTML이 쓰는 class 전체가 그 페이지가 로드하는 CSS에 정의돼 있는가.
   **정리 전에도 미정의였던 클래스**(JS 훅, 섹션 식별자 등)와 이번 작업으로 새로 깨진 것을 구분해서 보고한다 — 기존 것을 회귀로 착각하지 않는다.
2. **CSS → HTML (역방향, 필수)**: 이번에 고친 CSS 파일이 정의한 클래스 중 **마크업 어디에서도 쓰이지 않는 것**이 있는가.
   - 있으면 둘 중 하나다 — ⓐ 마크업을 같이 고치는 걸 빠뜨렸거나(→ 마크업을 CSS에 맞춘다), ⓑ 죽은 CSS다(→ 삭제한다).
   - **"일단 놔두자"로 넘기지 않는다.** 어느 쪽인지 판단해서 처리하고, 판단 근거를 보고한다.
3. **JS 로드 확인**: `js/`의 각 스크립트가 그것을 필요로 하는 HTML의 `<script>` 목록에 실제로 들어 있는가.
   - 파일만 만들고 `<script>` 태그 추가를 빠뜨리면 인터랙션이 조용히 죽는다 — 콘솔 에러도 나지 않는다.
   - 반대로 `<script>`는 남아 있는데 파일이 삭제된 경우(404)도 함께 본다.
   - **의도적으로 보류 중인 파일**(아직 붙이지 않은 인터랙션, 삭제 예정 파일)은 삭제하지 말고 그대로 두되, 보고에 "미로드 상태"로 한 줄 남긴다.
4. **JS 훅 ↔ 마크업**: 스크립트가 `querySelector`로 잡는 클래스·id가 마크업에 실제로 존재하는가. 마크업을 재구성했다면 그 스크립트의 셀렉터 목록을 열어 하나씩 대조한다.

그 밖에:

5. CSS 중괄호 균형과 `@import` 경로/순서(`@import`는 모든 규칙보다 앞)를 확인한다.
6. 지운 것과 **의도적으로 남긴 것(및 그 이유)** 을 함께 보고한다. 남긴 판단이 더 중요한 정보다.

## 13. 커밋 규칙

**커밋은 사용자가 명시적으로 요청할 때만 한다.** 작업이 끝났다고 자동으로 커밋하지 않는다.

### 메시지 구조

```
{무엇}을 {어떻게} — 한국어 한 줄, 50자 내외

(리팩터링·버그 수정이면) 무엇이 문제였고 왜 그랬는지 먼저 쓴다.
그 다음 어떻게 해결했는지 쓴다.

- 변경점을 목록으로. "무엇을 했다"가 아니라 "무엇이 어떻게 달라졌다"로 쓴다
- 수치가 있는 결정은 수치를 남긴다 (카드 높이 320px, 12px → 14px)
- 판단이 갈릴 수 있었던 지점은 왜 그 선택을 했는지 한 줄 덧붙인다
```

### 원칙

- **제목은 한국어**로, 무엇을 어떻게 했는지 드러낸다. `수정`, `업데이트`, `작업` 같은 단어 하나로 끝내지 않는다.
- **리팩터링·버그 수정은 본문에 원인 서술이 필수다.** "고쳤다"만 남기면 다음에 같은 문제가 생겼을 때 아무 도움이 안 된다. 무엇이 어긋나 있었고 왜 그랬는지를 먼저 쓴다.
- **왜 그렇게 했는지가 무엇을 했는지보다 중요하다.** 코드를 보면 알 수 있는 것(“hero.css 183줄 수정”)이 아니라, 코드를 봐도 모르는 것(“섹션마다 칠하면 경계에서 색이 끊겨서 wrapper에서 한 번만 그린다”)을 남긴다.
- **의도적으로 남긴 것**(정리할 수 있었지만 두기로 한 것)이 있으면 그 이유를 적는다.
- 도구가 자동 갱신하는 파일(`docs/.bkit-memory.json` 등)이 섞이면 마지막 줄에 그 사실만 한 줄로 밝힌다.
- 한 커밋에는 한 가지 주제만 담는 것을 기본으로 하되, 진행 중이던 보조 작업이 섞였다면 본문에 그 사실을 명시한다.

## 14. 최종 품질 체크리스트

작업 완료 후 아래를 확인한다.

**HTML**: Semantic HTML 적절히 사용 / div 대체 가능한 native element 미사용 / heading hierarchy 정상 / link·button 역할 명확 / `<header>`는 GNB 하나뿐인가(섹션 상단 블록은 `div`) / 새 섹션이 `<section class="{이름} fade-up">` + 안쪽 `.section-wrap` 구조를 따르는가

**CSS**: Reset 적용 / Design Token 사용 / raw color·arbitrary value 불필요 반복 없음 / 긴 utility class 없음 / 반복 UI가 Component로 추출됨 / specificity 과도하지 않음 / 새 컴포넌트 CSS가 `main.css` 또는 `css/pages/*.css`에 `@import`됐는가(HTML에 세 번째 `<link>`를 붙이지 않았는가)

**타이포 제약 (3번 항목)**: 메인페이지에 14px 미만 폰트가 없는가 / heading이 Semibold(600) 고정인가 / 700 Bold를 새로 썼다면 근거가 있는가 / 자간을 컴포넌트에서 임의로 새로 정하지 않았는가

**토큰 승격 (4번 항목)**: 2곳 이상에서 쓰이는 값이 하드코딩으로 남아 있지 않은가 / 반대로 1회성 치수를 불필요하게 토큰으로 올리지 않았는가 / 컴포넌트에 남긴 매직넘버에 근거 주석이 있는가

**중복·무효 선언 (12번 항목 — 매 작업 필수)**: 태그 전역 스타일과 겹치는 폰트 재선언 없음 / 같은 요소의 공용 유틸리티와 100% 중복된 클래스 없음(있으면 CSS·마크업 양쪽에서 제거) / modifier가 base 값을 되풀이하지 않음 / 상속되는 속성을 자식이 같은 값으로 재선언하지 않음 / flex 기능을 쓰지 않거나 자식 1개로 무효한 `display:flex`·`gap`·`flex-direction` 없음 / 값 비교는 토큰 체인을 펼친 실제 값으로 했는지 / 같은 패턴을 프로젝트 전체에서 훑었는지 / 삭제한 클래스가 `js/`·`css/`에서 참조되지 않는지 확인했는지

**마크업 · CSS · JS 3자 정합성 (12번 "정리 후 확인" — 섹션 재구성·CSS 30줄 이상 수정 시 필수)**: HTML이 쓰는 클래스가 CSS에 전부 정의됐는가 / **CSS가 정의했는데 마크업이 안 쓰는 클래스가 없는가**(있으면 마크업 누락인지 죽은 CSS인지 판단해 처리) / `js/`의 각 스크립트가 HTML `<script>` 목록에 들어 있는가(의도적 보류는 보고에 명시) / 스크립트의 `querySelector` 셀렉터가 마크업에 실제로 존재하는가

**에셋 (11번 항목)**: `images/` 밖에 새 에셋 루트를 만들지 않았는가 / 아이콘이 `ic_` + camelCase인가 / 한글·공백·쉼표 파일명이 없는가 / `-v1`·`-v2` 같은 버전 접미사가 커밋에 남지 않았는가 / 교체한 구본을 같은 커밋에서 삭제했는가

**Responsive**: (현재는 데스크톱 확정 단계 — 요청 없는 반응형 작업을 추가하지 않았는가) / 고정 px 레이아웃에 근거 주석을 남겼는가 / `clamp()`·논리 속성·`container-type`처럼 지금 해두면 재작업이 없는 것은 적용했는가

**Accessibility**: keyboard navigation 가능 / `:focus-visible` 제공 / 이미지 `alt` 적절 / form label 연결 / screen reader 유틸리티 적용

**Maintainability**: HTML/JSX만 읽어도 구조 이해 가능 / 스타일 복사 없음 / 기존 Component 재사용 우선 / 프로젝트 CSS Architecture 준수

**Design System 동기화**: 새 컴포넌트를 만들기 전 `codepresso-designsystem.html`에 이미 있는지 확인했는가 / 있으면 그 컴포넌트를 재사용했는가(색상·spacing·radius·shadow가 기존 값과 통일됨) / 새로 만든 컴포넌트를 `codepresso-designsystem.html`에도 추가했는가

**보고**: 지운 것과 **의도적으로 남긴 것(및 이유)** 을 함께 보고했는가 / 기존부터 깨져 있던 것과 이번 작업으로 깨진 것을 구분했는가

## 핵심 철학

```
Semantic HTML + Lightweight Reset + Design Tokens
+ Reusable Components + Limited Utilities
+ Container-based Responsive Design + Accessibility
```

목표는 CSS를 최소화하는 것이 아니라, **AI가 생성해도 사람이 읽고 이해할 수 있고, 반복 UI를 안정적으로 재사용하며, 디자인 시스템이 일관되게 유지되는 구조**를 만드는 것이다. Tailwind를 쓰더라도 Tailwind 자체가 목표가 아니다 — **Utility는 도구, Component와 Design System이 구조의 중심**이다.
