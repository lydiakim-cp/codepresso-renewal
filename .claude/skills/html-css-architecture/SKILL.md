---
name: html-css-architecture
description: Modern HTML & CSS Architecture 가이드. Semantic HTML, Lightweight Reset, Design Token, Component화, Tailwind 사용 원칙, Container Query, Accessibility 등 마크업/스타일링 작업 시 기본으로 참고해야 하는 설계 원칙. HTML 작성, CSS 작성, 컴포넌트 스타일링, Tailwind class 정리, 반응형 구현, 접근성 개선 등의 작업을 할 때 항상 먼저 로드해서 따른다.
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

## 7. Responsive Design

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

## 12. 최종 품질 체크리스트

작업 완료 후 아래를 확인한다.

**HTML**: Semantic HTML 적절히 사용 / div 대체 가능한 native element 미사용 / heading hierarchy 정상 / link·button 역할 명확

**CSS**: Reset 적용 / Design Token 사용 / raw color·arbitrary value 불필요 반복 없음 / 긴 utility class 없음 / 반복 UI가 Component로 추출됨 / specificity 과도하지 않음 / 컴포넌트 텍스트 스타일이 base.css의 h1~h6·p 전역 스타일과 값이 같은데 다른 태그·중복 선언으로 만들어지지 않았는지 확인

**Responsive**: 모바일 정상 동작 / breakpoint 불필요하게 많지 않음 / 재사용 Component에 Container Query 검토됨 / `clamp()`/`min()`/`max()` 활용 가능 영역 검토

**Accessibility**: keyboard navigation 가능 / `:focus-visible` 제공 / 이미지 `alt` 적절 / form label 연결 / screen reader 유틸리티 적용

**Maintainability**: HTML/JSX만 읽어도 구조 이해 가능 / 스타일 복사 없음 / 기존 Component 재사용 우선 / 프로젝트 CSS Architecture 준수

**Design System 동기화**: 새 컴포넌트를 만들기 전 `codepresso-designsystem.html`에 이미 있는지 확인했는가 / 있으면 그 컴포넌트를 재사용했는가(색상·spacing·radius·shadow가 기존 값과 통일됨) / 새로 만든 컴포넌트를 `codepresso-designsystem.html`에도 추가했는가

## 핵심 철학

```
Semantic HTML + Lightweight Reset + Design Tokens
+ Reusable Components + Limited Utilities
+ Container-based Responsive Design + Accessibility
```

목표는 CSS를 최소화하는 것이 아니라, **AI가 생성해도 사람이 읽고 이해할 수 있고, 반복 UI를 안정적으로 재사용하며, 디자인 시스템이 일관되게 유지되는 구조**를 만드는 것이다. Tailwind를 쓰더라도 Tailwind 자체가 목표가 아니다 — **Utility는 도구, Component와 Design System이 구조의 중심**이다.
