# 실제 코드 패턴 — 새로 고안하지 말고 이대로 따른다

이 프로젝트 CSS에 **이미 정착된 관용구**를 모았다. 새 컴포넌트를 만들 때 hover를 어떻게 줄지, 아이콘을 어떻게 넣을지, 반투명 흰색을 어떻게 쓸지 매번 다시 고민하지 않도록 하는 것이 목적이다.

[SKILL.md](SKILL.md) 0번 제1규칙("새로 만들지 말고 있는 것을 찾아 쓴다")의 실행 매뉴얼이다. 여기 있는 방식과 다르게 쓰고 싶으면 그 이유를 사용자에게 확인받는다.

## 1. 색을 파생시킬 때 — `color-mix()`

**새 hex 값을 만들지 않는다.** 옅은 배경, hover 색, 반투명 경계선은 모두 기존 토큰에서 파생시킨다. 현재 10개 파일에서 22회 쓰이는 표준 방식이다.

```css
/* ① hover — 브랜드색을 흰색과 섞어 밝게 (버튼 hover의 표준) */
background: color-mix(in srgb, var(--color-brand) 80%, white);

/* ② 옅은 틴트 배경 — 원색이 쨍하지 않게 깔 때 */
background: color-mix(in srgb, var(--color-brand) 12%, var(--color-surface));

/* ③ 반투명 — 유리 질감, 어두운 배경 위 경계선 */
background: color-mix(in srgb, var(--color-surface) 55%, transparent);
border: 1px solid color-mix(in srgb, var(--color-surface) 40%, transparent);

/* ④ 두 색 사이의 중간 톤 — 그라디언트 정지점 */
background: color-mix(in srgb, var(--color-brand-dark) 70%, var(--color-ink-heaviest));
```

- **상태색도 마찬가지다.** 붉은 배지가 필요하면 새 붉은색을 만들지 말고 `--color-critical`에서 파생시킨다:
  ```css
  background: color-mix(in srgb, var(--color-critical) 12%, var(--color-surface));
  color: var(--color-critical);
  ```
- 스크롤 진행도처럼 **값이 변하는 비율**도 `calc()`로 주입할 수 있다(`css/pages/index.css`의 페이지 배경이 이 방식):
  ```css
  color-mix(in srgb, var(--color-bg-login-pre) calc((1 - var(--scroll-progress)) * 100%), var(--color-surface))
  ```

## 2. 아이콘 — chevron SVG는 하나로 통일

**텍스트 화살표(`→`, `>`, `+`, `‹`)를 쓰지 않는다.** 방향 표시는 항상 같은 chevron SVG path를 인라인으로 넣는다.

```html
<!-- 우향 (기본) — 버튼·링크·리스트 항목 끝 -->
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<!-- 하향 — 드롭다운 트리거 -->
<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
```

- **좌향은 별도 path를 만들지 않고** 우향에 `transform: scaleX(-1)`을 준다(`proof-card.css`의 이전 버튼 방식).
- `stroke="currentColor"`를 쓴다 — 색을 SVG에 박지 않고 부모의 `color`를 따라가게 한다.
- `stroke-width`는 `2`, 버튼 안에서 크기는 `16px` 고정(`button.css`가 `.btn > svg`로 일괄 처리하므로 버튼 안에서는 크기를 따로 주지 않아도 된다).
- 장식용 아이콘에는 **반드시 `aria-hidden="true"`** 를 붙인다.

### `images/icon/`의 아이콘을 쓸 때 — 색을 반드시 브랜드 톤으로 바꾼다

`images/icon/*.svg`는 **코드프레소 팔레트와 무관한 색을 하드코딩**하고 있다 — `#E7ECEF`(회색), `#F57C75`(연어), `#7AD7B5`(민트), `#A9C5F7` 등. 이 파일을 `<img>`로 넣으면 CSS로 색을 바꿀 수 없어서, 페이지에 브랜드와 어울리지 않는 색이 그대로 박힌다.

**그래서 `<img>`로 넣지 않고 SVG 내용을 마크업에 인라인으로 붙이고, 하드코딩된 색을 토큰으로 교체한다.**

```html
<!-- 나쁨 — 원본 색(민트·연어)이 그대로 나온다 -->
<img src="images/icon/ic_shield.svg" alt="">

<!-- 좋음 — path를 인라인으로 옮기고 fill을 토큰으로 교체 -->
<span class="my-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5 5L12 1L2.5 5V9C..." fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"/>
    <path fill-rule="evenodd" d="M11.41 11.52L15.24 7.7L17 9.47..." fill="var(--color-brand)"/>
  </svg>
</span>
```

색을 배정하는 방식(index.html의 아이콘들이 쓰는 층위):

| 원본에서의 역할 | 바꿀 값 |
|---|---|
| 큰 배경 면 | `color-mix(in srgb, var(--color-brand) 10~25%, var(--color-surface))` |
| 중간 톤 요소 | `color-mix(in srgb, var(--color-brand) 35~45%, var(--color-surface))` |
| 주요 강조 | `var(--color-brand)` |
| 가장 진한 포인트 | `var(--color-brand-dark)` |
| 흰색으로 파인 부분 | `var(--color-surface)` |

- 부모의 `color`를 따라가게 하려면 `fill="currentColor"` + `fill-opacity`를 쓴다 — hover 시 아이콘 색이 함께 바뀌어야 할 때 유용하다.
- 장식 아이콘을 감싼 요소에는 `aria-hidden="true"`를 붙인다.
- `<img>`를 쓰는 것이 허용되는 경우는 **색을 바꿀 필요가 없을 때뿐이다**(GNB 메가메뉴 아이콘, 고객사 로고처럼 원본 색을 그대로 살려야 하는 것).
- 새 아이콘 파일을 추가한다면 `images/icon/ic_{camelCase}.svg` 규칙을 따른다([SKILL.md](SKILL.md) 에셋 네이밍).

## 3. hover와 트랜지션 — 이중 리듬을 지킨다

이 프로젝트는 **즉각적인 hover(0.1s)와 느긋한 스크롤 연출(0.5s)** 두 리듬으로 움직인다. 새 인터랙션도 이 둘 중 하나에 맞춘다.

```css
/* hover·focus 등 사용자 조작에 대한 즉각 반응 */
transition: background-color var(--duration-hover) var(--ease-hover),
            box-shadow var(--duration-hover) var(--ease-hover);

/* 스크롤 진입·단계 전환 등 연출 */
transition: opacity var(--duration-scroll) var(--ease-scroll),
            transform var(--duration-scroll) var(--ease-scroll);
```

- **`transition: all`을 쓰지 않는다.** 바뀌는 속성만 나열한다 — `all`은 의도하지 않은 속성까지 애니메이션시켜 성능과 예측 가능성을 해친다.
- 초 단위를 직접 쓰지 않고 `--duration-hover` / `--duration-scroll` / `--duration-cycle`(5s, 자동 순환)을 쓴다.
- **버튼의 화살표 이동은 정해진 값이 있다** — `translateX(3px)`. `button.css`가 이미 처리하므로 버튼에는 새로 쓰지 않는다.

### 모션 축소 설정 대응 — 빠뜨리면 안 된다

`transition`이나 `animation`을 새로 추가했으면 **같은 파일 맨 아래에 반드시** 이 블록을 넣는다. 현재 13개 파일에 예외 없이 적용된 규칙이다.

```css
@media (prefers-reduced-motion: reduce) {
  .my-component { transition: none; }
}
```

## 4. 화면이 단조로울 때 — 이 순서로 채운다

새 페이지·섹션을 만들고 나면 "텍스트만 있어 심심하다"는 지적이 자주 나온다. 그때 **임의로 새 장식을 발명하지 않고** 아래 4가지를 순서대로 검토한다. 모두 이 프로젝트에 이미 있는 수단이다.

### (1) 섹션 배경에 리듬을 준다 — 가장 먼저 볼 것

흰 바탕만 이어지면 페이지가 평평해 보인다. **옅은 면과 흰 면을 번갈아** 배치해 구간을 나눈다.

```css
/* 섹션마다 성격에 맞춰 배정한다 */
.my-section-a { background: var(--color-surface-sunken); }   /* 옅은 블루 */
.my-section-b { background: var(--color-brand-tint-1); }     /* 강조 구간 */
/* 나머지는 흰색(--color-surface) 그대로 둔다 */
```

배정 기준:
- **카드가 흰색이면 바탕에 색을 깔아야** 카드가 떠 보인다. 반대로 **카드가 `sunken`이면 바탕은 흰색**이어야 대비가 산다 — 카드와 배경이 같은 색이 되지 않게 항상 확인한다.
- 목업·대시보드처럼 **그림자로 떠 있어야 하는 것은 흰 바탕**에 둔다.
- 페이지에서 가장 강조할 한 구간만 `--color-brand-tint-1`로 한 단계 올린다. 여러 곳에 쓰면 강조가 사라진다.
- 배경색을 넣으면 **`dot-line`(점선 구분)은 불필요해진다** — 영역 구분은 border보다 background 차이로 처리하는 것이 이 프로젝트의 기본이다([SKILL.md](SKILL.md) 11번).
- 인접 섹션이 **하나의 배경을 공유해야 하면 섹션마다 칠하지 말고 감싸는 wrapper가 한 번만 그린다**(`.parts-group`이 그 방식) — 섹션마다 칠하면 경계에서 색이 끊긴다.

> **주의**: `main`에 스크롤 연동 그라디언트(`--scroll-progress`)를 깔아둔 상태에서 섹션 배경을 칠하면 섹션이 그라디언트를 가려 연출이 보이지 않는다. 둘 중 하나만 택하고, 택한 이유를 주석에 남긴다.

### (2) 배경 이미지를 질감으로 깐다

`images/`의 배경 이미지를 **크게 확대해 일부만 쓰고, blur로 흘려** 질감처럼 쓴다. 그림 전체를 보여주는 것이 아니라 분위기만 만드는 용도다. `cta-final.css`가 이 방식의 원본이다.

```css
.my-section { position: relative; overflow: hidden; }

.my-section::before {
  content: "";
  /* blur 반경만큼 바깥으로 여유를 둔다 — inset: 0이면 블러가 경계 안쪽 픽셀을
     투명한 바깥과 섞어 가장자리가 어둡게 죽는다. */
  position: absolute;
  inset: -40px;
  background-image: url("../../images/bg-line2.png");
  background-repeat: no-repeat;
  background-position: top right;   /* 어느 구역을 쓸지 */
  background-size: 160%;            /* 확대 비율 */
  filter: blur(10px);
  opacity: 0.35;
  pointer-events: none;
}

/* 본문이 배경에 묻히지 않게 덮는 층. 아래로 갈수록 흰색이 되어 다음 섹션과 이어진다. */
.my-section::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%,
      color-mix(in srgb, var(--color-surface) 70%, transparent) 60%,
      var(--color-surface) 100%);
  pointer-events: none;
}

/* 콘텐츠는 z-index로 올린다 */
.my-section .section-wrap { position: relative; z-index: 1; }
```

- 쓸 수 있는 파일: `images/bg-line.png`, `bg-line2.png`, `bg-gradient.png`, `main-bg.png`.
- **같은 이미지를 여러 섹션에 쓸 때는 `background-position`과 `background-size`를 달리해** 다른 구역이 보이게 한다 — 같은 자리가 반복되면 오히려 지루해진다.
- 배경 질감 위에 놓이는 카드·판은 단색 대신 **반투명 유리**로 띄운다(아래 5번).

### (3) 아이콘을 넣는다

텍스트만 반복되는 카드 목록에는 아이콘을 넣어 스캔하기 쉽게 만든다. `images/icon/`에서 의미가 맞는 것을 고르고, **위 2번의 색상 교체 규칙을 반드시 적용**한다(원본 색이 브랜드와 어울리지 않는다).

### (4) 움직임을 얹는다

한 화면에 여러 요소가 동시에 나타나면 정보 순서가 안 보인다. **순차 지연(stagger)** 으로 읽는 순서를 만든다.

```css
/* 첫 화면(hero)은 fade-up.js 대상이 아니므로 로드 직후 CSS 애니메이션으로 */
.my-hero-copy > * {
  animation: my-rise var(--duration-scroll) var(--ease-scroll) both;
}
.my-hero-copy > :nth-child(2) { animation-delay: .08s; }
.my-hero-copy > :nth-child(3) { animation-delay: .16s; }

@keyframes my-rise {
  from { opacity: 0; transform: translateY(var(--motion-rise)); }
  to { opacity: 1; transform: none; }
}

/* 스크롤 진입 구간은 섹션의 .fade-up이 붙는 .is-visible을 받아 순서를 만든다 */
.fade-up.is-visible .my-step:nth-child(2) { transition-delay: .1s; }
.fade-up.is-visible .my-step:nth-child(3) { transition-delay: .2s; }
```

얹을 수 있는 것들:
- **카드 hover**: `translateY(-3px)` + `box-shadow`를 `sm` → `md`로. 이 프로젝트의 표준 부상 폭이다.
- **아이콘/배지 hover**: 배경이 `tint` → `brand`로 채워지고 글자가 흰색으로.
- **화살표**: hover 시 `translateX(3px)`.
- **방향 암시**: 미세한 왕복(`3px`, 2~3s 주기)으로 흐름을 계속 짚어준다.
- **순차 등장**: 목록 항목은 `.03s`, 큰 단계는 `.1s` 간격.

**모든 애니메이션에는 `prefers-reduced-motion` 대응을 1:1로 넣는다**(3번 참고). 이것을 빠뜨린 애니메이션은 추가하지 않은 것과 같다.

> **제품 화면 목업 안쪽을 움직이게 하려면** 이 4번이 아니라 [mock-motion-guide.md](mock-motion-guide.md)를 본다 — `preview-frame` 안의 화면을 실제로 돌아가는 것처럼 연출하는 5종(focus·replay·deck·detail·ticker)이 이미 공용 컴포넌트로 있다. 여기 4번은 **페이지·섹션 전반**의 시각적 보강을 다룬다.

## 5. 상태와 JS 훅

```html
<div class="feature-card-grid" data-feature-cycle data-interval="5000">
  <article class="feature-card is-active">…</article>
</div>
```

| 용도 | 방식 | 규칙 |
|---|---|---|
| **JS가 토글하는 상태** | `is-` 접두사 클래스 | 기존 이름을 재사용한다 — `is-active`, `is-visible`, `is-open`, `is-current`, `is-scrolled`, `is-hidden`, `is-done`, `is-live`. 새 이름(`is-selected` 등)을 만들기 전에 같은 의미가 있는지 본다 |
| **JS가 요소를 찾는 훅** | `data-{기능}` 속성 | 스타일 클래스와 분리한다. CSS를 정리해도 JS가 안 깨진다 |
| **정적 변형(variant)** | 별도 클래스 병기 | `.summary-banner.dark`, `.text-label.brand` — BEM `--` 표기를 쓰지 않는다 |

- 어떤 스크립트가 그 상태 클래스를 붙이는지 **컴포넌트 CSS 상단에 한 줄 주석**으로 남긴다.
- `data-*`를 지우거나 이름을 바꿀 때는 `js/` 전체를 검색해 확인한다.

## 6. 유리 질감(glass) 패널

반투명 흰색 + blur 조합은 여러 곳에서 쓰이므로 **공용 클래스 `.surface-glass`가 이미 있다**(`css/components/ui/surface.css`). 새로 만들지 말고 이것을 쓴다.

```html
<div class="content-panel surface-glass">…</div>
```

직접 구성해야 한다면 이 조합을 따른다:

```css
background: color-mix(in srgb, var(--color-surface) 55%, transparent);
border: 1px solid color-mix(in srgb, var(--color-surface) 70%, transparent);
backdrop-filter: blur(20px) saturate(160%);
-webkit-backdrop-filter: blur(20px) saturate(160%);   /* Safari 대응 필수 */
```

## 7. 그림자

**`--shadow-sm`과 `--shadow-md` 두 단계뿐이다** (`--shadow-lg`는 없다). 블루 틴트가 들어간 것이 코드프레소의 시각적 서명이므로 회색 그림자를 새로 만들지 않는다.

```css
box-shadow: var(--shadow-sm);   /* 기본 카드 */
box-shadow: var(--shadow-md);   /* hover 시 한 단계 띄움 */
```

더 강한 그림자가 꼭 필요하면 새 값을 쓰기 전에 사용자에게 확인한다 — 현재 회색 그림자를 쓰는 곳(`.btn-pill`)은 체계에서 벗어난 예외다.

## 8. 반응형 breakpoint

새 숫자를 만들지 않고 **두 값만 쓴다**.

| breakpoint | 의미 |
|---|---|
| `max-width: 900px` | 2단 레이아웃(`section-wrap.row`)이 1단으로 접힘 |
| `max-width: 720px` | 카드 내부 요소가 재배치됨 |

전면 반응형은 아직 착수 단계가 아니므로, **요청받지 않은 반응형을 새로 추가하지 않는다**([SKILL.md](SKILL.md) 7번).

### PC/모바일에서 줄바꿈 위치가 달라야 할 때 — `data-break`

`<br>`은 위치를 가리지 않고 항상 줄바꿈한다. PC와 모바일에서 문장을 끊는 자리가 달라야
하면, class가 아니라 `data-*` 훅으로 표시한다(이 프로젝트의 JS 훅 관례와 같은 이유 —
스타일용 클래스와 섞이지 않는다).

```html
<h1>전 직원을<br data-break="desktop">AI 네이티브 개발자로</h1>
```

```css
/* base.css — 데스크톱 기본값. mobile 전용 br은 기본적으로 숨긴다 */
br[data-break="mobile"] { display: none; }

/* mobile.css 560px 섹션 — 반전 */
@media (max-width: 560px) {
  br[data-break="mobile"] { display: inline; }
  br[data-break="desktop"] { display: none; }
}
```

- **PC/모바일 어디서나 같은 자리에서 끊겨도 되면 그냥 `<br>`을 쓴다.** `data-break`는
  두 화면의 줄바꿈 위치가 실제로 다를 때만 붙인다 — 모든 `<br>`에 습관적으로 붙이지 않는다.
- 가운데 정렬 제목처럼 화면 폭에 따라 끊는 자리가 바뀌어야 하는 곳에 주로 쓴다.
- 가능한 값은 `desktop`(560px 초과에서만 줄바꿈) / `mobile`(560px 이하에서만 줄바꿈) 두 가지다.

## 9. 컴포넌트 CSS 파일을 새로 만들 때

```css
/*
 * Component: {컴포넌트 이름}
 * 무엇을 하는 컴포넌트인지 한두 줄.
 * (범용 컴포넌트라면) Markup API — 어떤 구조로 써야 하는지
 *   .my-card
 *     .my-card__title
 *     .my-card__body
 * (JS와 연동되면) 상태 클래스 .is-active는 {script}.js가 붙인다.
 */

.my-card { … }
```

- **파일 안에 `@layer`를 쓰지 않는다.** 레이어는 부르는 쪽이 정한다 — `main.css`나 `css/pages/*.css`에서 `@import url("…") layer(components);`로 등록한다.
- 새 파일을 만들기 전에 **성격이 맞는 기존 파일에 합칠 수 있는지** 먼저 본다([SKILL.md](SKILL.md) 6번).
- 1회성 수치(카드 높이 등)를 남길 때는 **왜 그 값인지 한 줄 주석**을 붙인다.
