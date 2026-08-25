# 서브페이지 만들기 — 실전 절차서

이 문서는 [SKILL.md](SKILL.md)의 규범을 전제로, **"가격 페이지 만들어줘" 같은 새 서브페이지 요청을 실제로 처리하는 순서**를 다룬다. SKILL.md는 "무엇을 지켜야 하는가"를 다루고, 이 문서는 "어떤 순서로 어떤 파일을 만드는가"를 다룬다.

> 지금 시점(2026-08) 기준 사실: `index.html` 외에는 실제 콘텐츠 서브페이지가 하나도 없다. 즉 아래 절차를 처음 밟는 페이지가 이 프로젝트의 첫 서브페이지가 된다 — 참고할 완성된 선례가 없다는 뜻이니, 특히 1~3단계는 건너뛰지 말고 그대로 따른다.

## 0. 시작 전에 사용자(비개발자)에게 확인할 것

Claude가 서브페이지를 만들기 전에, 요청에 아래 정보가 없으면 먼저 물어본다:

1. **페이지 URL/파일명** — 예: `pricing.html`, `about.html`. GNB 링크와 맞아야 한다.
2. **이 페이지가 GNB의 어떤 메뉴와 연결되는가** — 나중에 그 메뉴의 `href="#"`를 이 파일로 바꿔야 한다.
3. **페이지에 들어갈 내용 블록** — 무엇을 어떤 순서로 보여줄지. "가격표 + FAQ" 같은 목록이면 충분하다.
4. **참고할 기존 컴포넌트가 있는가** — [component-inventory.md](component-inventory.md)를 같이 보고 어떤 카드/리스트/배너를 재사용할지 고른다.

## 1. 페이지 파일 뼈대 만들기

새 서브페이지는 프로젝트 루트에 `{페이지이름}.html`로 만든다 (`sample/`, `pages/` 같은 하위 폴더에 넣지 않는다 — 루트의 `index.html`과 동일한 위치).

```html
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>코드프레소 — {페이지 제목}</title>
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/pages/{페이지이름}.css">
</head>

<body>
  <!-- 1. GNB — 아래 2번 항목 참고 -->
  <header class="header"> ... </header>

  <main>
    <!-- 2. 이 페이지의 섹션들 — 아래 3번 항목 참고 -->
  </main>

  <!-- 3. 스크립트 — 아래 4번 항목 참고, 필요한 것만 -->
  <script src="js/fade-up.js"></script>
  <script src="js/header-scroll.js"></script>
  <script src="js/nav-menu.js"></script>
</body>

</html>
```

CSS는 **정확히 2개**만 링크한다(SKILL.md 337행 규칙). `css/pages/{페이지이름}.css`가 아직 없으면 새로 만들고, 이 페이지에서만 쓰는 컴포넌트를 여기서 `@import`한다. `index.css`의 형식을 그대로 따라 만든다:

```css
/*
 * Page: {페이지이름}.html
 * main.css 위에 얹는 이 페이지 전용 계층.
 */

@import url("../components/{새-컴포넌트}.css") layer(components);

@layer components {
  /* 이 페이지에만 있는 자잘한 조정 */
}
```

## 2. GNB(헤더) 붙이기

지금 GNB는 사용자가 시안으로 만든 예시이며 **나중에 실제 운영 중인 GNB로 교체될 예정**이다. 그러니 지금 단계에서는:

- `index.html`의 `<header class="header">` ~ `</header>` 블록을 **통째로 그대로 복사**해서 새 페이지에 붙인다. 지금 단계에서 메가메뉴 구조를 손으로 다시 만들거나 줄이지 않는다 — 교체될 코드를 다듬는 데 시간을 쓰지 않는다.
- 로고(`<a class="logo" href="/">`)는 그대로 둔다.
- 지금 만드는 페이지가 GNB의 어떤 메뉴에 해당하면, 그 메뉴의 `href="#"`를 이 페이지 경로로 바꾼다. 예: 가격 페이지라면 `<a class="nav-link" href="#">가격</a>` → `<a class="nav-link" href="pricing.html">가격</a>`. 그 외의 링크(`로그인`, `1분 AI 진단`, 다른 메뉴들)는 아직 연동 대상이 아니므로 `href="#"`를 그대로 둔다.
- 현재 활성 페이지 표시(`is-active` 등)는 아직 규칙이 없다 — 임의로 추가하지 않고, 필요해지면 사용자에게 확인받는다.

## 3. 본문 섹션 만들기

SKILL.md의 "페이지·섹션 구조 관례"를 그대로 따른다:

```html
<section class="{섹션이름} fade-up">
  <div class="section-wrap col">
    <div class="section-title text-center">
      <p class="tag">{eyebrow}</p>
      <h2>{섹션 제목}</h2>
      <p class="desc">{설명}</p>
    </div>
    <div class="section-content">
      ...
    </div>
  </div>
</section>
```

- 페이지의 첫 화면(hero)에 해당하는 섹션에는 `fade-up`을 붙이지 않는다.
- 좌우 2단 배치가 필요하면 `section-wrap row` (필요시 `is-sticky` 추가) — [SKILL.md](SKILL.md) "4번 항목" 및 `codepresso-designsystem.html`의 `#layout` 참고.
- 이미 있는 컴포넌트를 먼저 찾는다. 아래 표와 [component-inventory.md](component-inventory.md)를 순서대로 확인한다 — 없는 것만 새로 만든다.
- 실제로 있는 서비스 서브페이지 선례가 아직 없으므로, 여러 섹션을 구성할 때 가장 가까운 참고는 `index.html`의 각 섹션(`how-it-works`, `proof` 등)이다. 그 섹션들의 마크업 구조(섹션 → `.section-wrap` → `.section-title`/`.section-content`)를 그대로 본뜨고, 안의 콘텐츠 컴포넌트만 이 페이지 내용에 맞는 것으로 바꾼다.

## 4. 스크립트 — 공용 vs 페이지 전용

`index.html`은 스크립트 9개를 로드하지만, 그중 **정말로 여러 페이지가 공유하는 것은 3개뿐**이다. 나머지는 index.html의 특정 섹션에만 딸린 전용 스크립트라 그 섹션을 쓰지 않으면 로드하지 않는다.

| 스크립트 | 역할 | 새 서브페이지에 필요한가 |
|---|---|---|
| `js/fade-up.js` | `.fade-up` 요소가 스크롤로 화면에 들어오면 `.is-visible`을 붙여 위로 떠오르며 나타나게 함 | **항상 필요** (섹션에 `fade-up` 클래스를 쓰는 한) |
| `js/header-scroll.js` | GNB를 스크롤에 따라 투명→반투명+blur로 전환, 숨김/등장 처리 | **항상 필요** (GNB를 쓰는 한) |
| `js/nav-menu.js` | GNB 메가메뉴 열기/닫기(hover + 키보드) | **항상 필요** (GNB를 쓰는 한) |
| `js/feature-card-cycle.js` | `how-it-works`의 `feature-card` 자동 순환 | `feature-card-grid[data-feature-cycle]`을 이 페이지에 쓸 때만 |
| `js/proof-card-slider.js` | `proof-card` 덱 슬라이더 | `proof-card-deck[data-proof-deck]`을 쓸 때만 |
| `js/stat-reveal.js` | `metric-card` 숫자 카운트업 + 진행바 | `[data-stat-reveal]`을 쓸 때만 |
| `js/part-nav.js` | PART 1/2 같은 세그먼트 내비게이션의 스크롤 연동 활성 표시 | `part-nav[data-part-nav]`를 쓸 때만 |
| `js/journey-stage.js` | 스크롤에 따라 단계별 콘텐츠가 전환되는 스테이지형 섹션 | `[data-journey-stage]`류 구조를 쓸 때만 |
| `js/difference-cycle.js` | 여러 화면이 일정 주기로 자동 순환하는 섹션 | 그 패턴을 그대로 쓸 때만 |

**판단 기준**: 이 페이지의 마크업에 그 스크립트가 찾는 `data-*` 속성/클래스가 있는가? 없으면 그 `<script>` 태그를 넣지 않는다. 반대로 어떤 컴포넌트를 마크업에 썼는데 대응하는 스크립트를 빠뜨리면 인터랙션이 콘솔 에러 없이 조용히 죽으므로(SKILL.md 12번 "정리 후 확인" 3번 항목), 컴포넌트를 골랐으면 이 표에서 짝이 되는 스크립트도 함께 확인한다.

## 5. Footer

이 프로젝트에는 **아직 실제로 쓰이는 `<footer>` 마크업이 없다** (`base.css`에 `footer` 태그 스타일만 정의돼 있고, `index.html`에도 footer가 없는 상태다). 서브페이지에 footer가 필요하다고 판단되면, 마크업을 임의로 새로 확정하지 말고 **먼저 사용자에게 어떤 내용(회사 정보/링크/저작권 등)이 들어가야 하는지 확인**한다. 확인 전에는 비워두거나, 임시로 최소한의 자리만 잡아둔다.

## 6. 마무리 체크리스트

서브페이지를 완성한 뒤 아래를 확인한다. [SKILL.md](SKILL.md) 14번(최종 품질 체크리스트)과 함께 사용한다.

- [ ] `<link>`가 정확히 2개인가 (`css/main.css` + `css/pages/{페이지}.css`)
- [ ] GNB를 통째로 복사했고, 이 페이지에 해당하는 메뉴의 `href`만 바꿨는가
- [ ] 새로 쓴 컴포넌트가 [component-inventory.md](component-inventory.md)에 이미 있는 것인지 먼저 확인했는가 — 있으면 그 클래스를 재사용했는가
- [ ] 섹션마다 `<section class="{이름} fade-up">` → `.section-wrap` → `.section-title`/`.section-content` 구조를 따르는가 (첫 화면 제외)
- [ ] 마크업에 쓴 `data-*`/클래스에 맞는 스크립트를 4번 표에서 확인해 빠짐없이 로드했는가 — 반대로 쓰지 않는 스크립트는 넣지 않았는가
- [ ] 타이포·토큰·중복 정리 등 SKILL.md 3~12번 규칙을 그대로 지켰는가
- [ ] footer가 필요한 페이지라면, 마크업을 임의로 확정하지 않고 사용자에게 확인받았는가
- [ ] **텍스트만 반복되는 화면으로 끝나지 않았는가** — 아래 7번을 확인했는가

## 7. 시각적 완성도 — 콘텐츠를 다 넣은 뒤 반드시 확인

마크업과 콘텐츠가 다 들어갔어도 **텍스트 블록만 이어지면 완성이 아니다.** 아래 4가지를 넣은 상태로 제출하고, 넣지 않기로 한 것은 이유를 보고에 남긴다. 구체적인 코드는 [css-patterns.md](css-patterns.md) 4번에 있다.

1. **섹션 배경 리듬** — 모든 섹션을 흰 바탕으로 두지 않는다. 옅은 면(`--color-surface-sunken`)과 흰 면을 번갈아 배치하고, 가장 강조할 한 구간만 `--color-brand-tint-1`로 올린다.
   - 카드가 흰색이면 바탕에 색을, 카드가 `sunken`이면 바탕은 흰색으로 — **카드와 배경이 같은 색이 되지 않게** 확인한다.
   - 배경색을 넣었으면 `dot-line`은 빼고, `main`에 스크롤 그라디언트를 깔았다면 둘 중 하나만 택한다.
2. **배경 이미지 질감** — hero와 최하단 CTA처럼 시선이 머무는 구간에, `images/`의 배경을 크게 확대해 일부만 쓰고 `blur`로 흘린다.
3. **아이콘** — 반복되는 카드 목록에는 아이콘을 넣는다. `images/icon/`의 파일은 **원본 색이 브랜드와 무관하므로 인라인 SVG로 옮겨 색을 토큰으로 교체**한다.
4. **모션** — hero는 로드 직후 순차 상승, 스크롤 구간은 `fade-up` + 순차 지연, 카드에는 hover 부상(`translateY(-3px)` + 그림자 한 단계). **애니메이션마다 `prefers-reduced-motion` 대응을 1:1로 넣는다.**
