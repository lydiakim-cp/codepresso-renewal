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
- 아이콘이 이미지 파일이면 `images/icon/ic_{camelCase}.svg` 규칙을 따른다([SKILL.md](SKILL.md) 에셋 네이밍).

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

## 4. 상태와 JS 훅

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

## 5. 유리 질감(glass) 패널

반투명 흰색 + blur 조합은 여러 곳에서 쓰이므로 **공용 클래스 `.surface-glass`가 이미 있다**(`css/components/surface.css`). 새로 만들지 말고 이것을 쓴다.

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

## 6. 그림자

**`--shadow-sm`과 `--shadow-md` 두 단계뿐이다** (`--shadow-lg`는 없다). 블루 틴트가 들어간 것이 코드프레소의 시각적 서명이므로 회색 그림자를 새로 만들지 않는다.

```css
box-shadow: var(--shadow-sm);   /* 기본 카드 */
box-shadow: var(--shadow-md);   /* hover 시 한 단계 띄움 */
```

더 강한 그림자가 꼭 필요하면 새 값을 쓰기 전에 사용자에게 확인한다 — 현재 회색 그림자를 쓰는 곳(`.btn-pill`)은 체계에서 벗어난 예외다.

## 7. 반응형 breakpoint

새 숫자를 만들지 않고 **두 값만 쓴다**.

| breakpoint | 의미 |
|---|---|
| `max-width: 900px` | 2단 레이아웃(`section-wrap.row`)이 1단으로 접힘 |
| `max-width: 720px` | 카드 내부 요소가 재배치됨 |

전면 반응형은 아직 착수 단계가 아니므로, **요청받지 않은 반응형을 새로 추가하지 않는다**([SKILL.md](SKILL.md) 7번).

## 8. 컴포넌트 CSS 파일을 새로 만들 때

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
