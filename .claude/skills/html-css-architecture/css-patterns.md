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

> **chevron은 아래 두 파일의 path만 쓴다**(사용자 지시).
> `images/icon/chevron-right.svg` · `images/icon/chevron-down.svg`
>
> 이 둘이 유일한 진실 원천이다. **모양이 같아도 다른 표기로 쓰지 않는다** —
> `m9 18 6-6-6-6`(상대 좌표)은 `M9 18L15 12L9 6`과 같은 그림이지만, 표기가 갈리면
> 나중에 일괄 교체·검증이 안 된다. 실제로 두 곳이 이 표기로 새 있었고 통일했다.
> 새 chevron이 필요하면 그 파일을 열어 path를 그대로 복사한다.

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

### path를 손으로 그리지 않는다 — 파일에서 복사한다 (실제로 겪은 실수)

인라인으로 넣으라는 규칙을 "그 아이콘처럼 생긴 path를 새로 쓰라"로 오해하기 쉽다.
**`ic_barChart.svg 기반`이라고 주석만 달고 좌표를 손으로 지어내면 안 된다.**
겉보기에 비슷해도 같은 제품·같은 지표가 페이지마다 다른 그림이 된다.

- 반드시 **그 파일을 열어 `<path>` 요소를 그대로 복사**하고, `fill`의 하드코딩 색만 바꾼다.
- **같은 대상은 index.html이 쓰는 것과 같은 아이콘 파일을 쓴다.** 제품·지표 이름으로
  index를 먼저 grep한다. (실제 매핑: AI Fluent→`ic_aiFluent`, SkillCertify→`ic_skillCertify`,
  SkillPath→`ic_skillPath`, SkillCamp→`ic_edu`, SkillFit→`ic_skillFit`)
- index에 같은 지표가 있으면 **그 SVG 블록을 통째로 복사**한다. path 하나만 빠져도
  그림이 미묘하게 달라진다(실제로 캘린더 아이콘이 index 9개 / 서브 8개로 갈렸다).
- **아이콘 이름만 보고 그림을 짐작하지 않는다.** `ic_proof`는 돋보기가 아니라 트로피,
  `ic_award`도 트로피다. 확인하려면 파일들을 한 판에 렌더해 눈으로 본다.
- **한 페이지 안에서 같은 아이콘을 뜻이 다른 두 자리에 쓰지 않는다.** 뜻이 겹치면
  대조표에서 다른 파일을 고른다(예: 증명은 `ic_barChart`가 아니라 `ic_skillMonitor`).

### 두 가지 함정 — viewBox와 단색 파일

`images/icon/`의 파일은 **두 종류가 섞여 있다.** 둘을 같은 크기 박스에 그대로 넣으면
크기가 들쭉날쭉해 보인다.

| 파일 | viewBox | 그림이 채우는 비율 |
|---|---|---|
| `ic_barChart` `ic_lineChart` `ic_structure` `ic_team` `ic_todo` `ic_proof` | `0 0 24 24` | 75~83% |
| `ic_edu` `ic_award` `ic_skillFit` `ic_skillCertify` `ic_skillMonitor` `ic_aiFluent` | `0 0 40 40` | 39~58% |

40 그리드 파일은 사방에 여백(과 배경 판 `<rect>`)을 품고 있다. 그래서:

1. **배경 판 `<rect width="40|39|24">`는 빼낸다** — 얹히는 자리가 이미 자기 면을 갖고 있어 판이 두 겹이 된다.
2. **viewBox를 그림 범위로 잘라** 다른 아이콘과 광학 크기를 맞춘다. 눈대중이 아니라
   브라우저 `getBBox()`로 실측하고, 채움 비율 80%가 되게 정사각 viewBox를 계산한다.
   예: `ic_award`의 bbox가 `10.75,10.92 18.5×18.17` → `viewBox="8.44 8.44 23.13 23.13"`.

**단색 파일에는 색 단계를 만들지 않는다.** 위 색 배정 표는 원본이 2색 이상일 때의
이야기다. `#1A61EA` 하나로만 그려진 파일(`ic_skillCertify` `ic_skillFit` `ic_skillMonitor`
`ic_proof`)의 첫 path를 옅은 톤으로 내리면 형태가 희미해져 아이콘이 깨져 보인다.
원본이 단색이면 **전부 `var(--color-brand)`**(흰색으로 파인 부분만 `--color-surface`)로 둔다.

**교체한 뒤에는 반드시 렌더해서 눈으로 본다.** 크기·색·의미 세 가지가 한꺼번에
틀어질 수 있고, 계산만으로는 "트로피가 진단 자리에 들어간" 것을 잡을 수 없다.

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

> **먼저 알아야 하는 값 — 이 팔레트는 옅은 쪽이 매우 촘촘하다.**
> 흰색을 기준으로 한 대비비를 실제로 재 보면 이렇다.
>
> | 토큰 | hex | 흰색과의 대비비 |
> |---|---|---|
> | `--color-surface` | `#FFFFFF` | 1.00 |
> | `--color-surface-page` | `#FBFCFF` | 1.03 |
> | `--color-surface-sunken` | `#F5F8FF` | **1.06** |
> | `--color-brand-tint-1` | `#F5F8FF` | **1.06 — sunken과 같은 값이다** |
> | `--color-brand-tint-2` | `#E9EFFF` | 1.15 |
> | `--color-ink-heaviest` | `#04091A` | 19.83 |
>
> 즉 **`surface-sunken`과 `brand-tint-1`은 같은 색이고**, 흰색과의 차이도 6%뿐이다.
> 이 둘로 "옅은 면 / 강조 면"을 나누려 하면 화면이 통째로 허여멀건해진다
> (capability.html에서 실제로 그렇게 만들었다가 지적받았다 — 사용자: "너무 허여멀건한
> 배경 및 색상으로 위계·격차가 없고 단조로워 보임").

```css
/* 옅은 면 — sunken이 아니라 한 단계 진한 tint-2를 쓴다 */
.my-section-a { background: var(--color-brand-tint-2); }

/* 강조 구간 하나 — 옅은 톤으로는 강조가 서지 않는다. 어두운 판으로 올린다 */
.my-section-b { background-color: var(--color-ink-heaviest); }
/* 나머지는 흰색(--color-surface) 그대로 둔다 */
```

배정 기준:
- **위계는 배경 하나로 만들지 못한다. 배경 · 카드 · 경계선 3층으로 만든다.**
  옅은 판(`brand-tint-2`) 위에는 **흰 카드 + 옅은 브랜드 경계선**을,
  흰 판 위에는 **`sunken` 카드**를 놓는다. 판과 카드가 같은 색이면 카드가 사라진다.
- **카드가 흰색이면 바탕에 색을 깔아야** 카드가 떠 보인다. 반대로 **카드가 `sunken`이면 바탕은 흰색**이어야 대비가 산다 — 카드와 배경이 같은 색이 되지 않게 항상 확인한다.
- 목업·대시보드처럼 **그림자로 떠 있어야 하는 것은 흰 바탕**에 둔다.
- **가장 강조할 한 구간은 어두운 판(`--color-ink-heaviest`)으로 올린다.**
  `brand-tint-1`로는 흰 면과 구분되지 않는다(위 표). ax-build 06·capability 07이
  이 방식이고, 배경 질감 + 유리 카드를 함께 얹는다.
- 어두운 판은 **페이지에 두 곳까지**다. 최하단 `cta-final`이 이미 어두우므로
  강조 구간을 어둡게 하면 **그 사이에 흰 면 섹션을 하나 두어** 페이지가 두 번
  닫히는 느낌을 막는다.
- 다 적용했는데도 평평하면 배경을 더 칠하지 말고 **(3) 아이콘·(4) 모션**으로 넘어간다.
  옅은 톤을 하나 더 추가하는 것으로는 해결되지 않는다.
- 배경색을 넣으면 **`dot-line`(점선 구분)은 불필요해진다** — 영역 구분은 border보다 background 차이로 처리하는 것이 이 프로젝트의 기본이다([references/page-structure.md](references/page-structure.md)).
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

breakpoint 3단(900/720/560)과 `css/mobile.css` 운용 규칙은
[references/responsive-motion.md](references/responsive-motion.md)에 있다. 여기서는 줄바꿈 훅만 다룬다.

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
- 새 파일을 만들기 전에 **성격이 맞는 기존 파일에 합칠 수 있는지** 먼저 본다([SKILL.md](SKILL.md) 2번 파일 구조).
- 1회성 수치(카드 높이 등)를 남길 때는 **왜 그 값인지 한 줄 주석**을 붙인다.

## 10. 배경·카드·그림자로 위계(3층)를 만들 때

섹션 배경 배정, 카드가 뜨는지 가라앉는지, 그림자를 상시로 둘지 hover로만 둘지
판단할 때는 실측값 기반 규칙이 따로 있다 → [references/surface-depth.md](references/surface-depth.md)

