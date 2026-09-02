# 서브페이지 만들기 — 실전 절차서

이 문서는 [SKILL.md](SKILL.md)의 규범을 전제로, **"가격 페이지 만들어줘" 같은 새 서브페이지 요청을 실제로 처리하는 순서**를 다룬다. SKILL.md는 "무엇을 지켜야 하는가"를 다루고, 이 문서는 "어떤 순서로 어떤 파일을 만드는가"를 다룬다.

> 지금 시점(2026-09) 기준 선례 6개. **새 페이지를 만들 때 성격이 가장 가까운 것을
> 먼저 열어 본다** — 섹션 골격·페이지 스코프·반응형·목업 재사용이 모두 들어 있어,
> 문서만 읽고 새로 설계하는 것보다 빠르고 어긋나지 않는다.
>
> | 선례 | 성격 | 이럴 때 본다 |
> |---|---|---|
> | `skills.html` | 라이트, 제품 5종 + 진단·교육 서사 | 가장 표준적인 라이트 서브페이지 |
> | `ax-grow.html` | **다크**(`main-dark`), 교육·내재화 | 다크 페이지를 만들 때 (가장 최신) |
> | `ax-build.html` | **다크**, 20일 구축 프로세스 | 기간·프로세스 중심 페이지 |
> | `why-codepresso.html` | 라이트, 차별점 비교·좌표 | 경쟁 구도·대비가 주제일 때 |
> | `cases.html` | 라이트, 목록 + 필터 | 카드 목록·필터가 필요할 때 |
> | `skillcertify.html` | 라이트, 단일 제품 소개 | 제품 하나만 다루는 페이지 |

## 0. 시작 전에 사용자(비개발자)에게 확인할 것

Claude가 서브페이지를 만들기 전에, 요청에 아래 정보가 없으면 먼저 물어본다:

1. **페이지 URL/파일명** — 예: `pricing.html`, `about.html`. GNB 링크와 맞아야 한다.
2. **이 페이지가 GNB의 어떤 메뉴와 연결되는가** — 나중에 그 메뉴의 `href="#"`를 이 파일로 바꿔야 한다.
3. **페이지에 들어갈 내용 블록** — 무엇을 어떤 순서로 보여줄지. "가격표 + FAQ" 같은 목록이면 충분하다.
4. **참고할 기존 컴포넌트가 있는가** — [component-inventory.md](component-inventory.md)의
   **"콘텐츠 → 컴포넌트 역인덱스"** 를 같이 보고 어떤 카드/리스트/배너를 재사용할지 고른다.
5. **라이트인가 다크인가** — 업무 자동화(AXpresso) 계열이면 다크다(아래 1번 분기).
6. **한 줄 소개(meta description)와 공유 이미지** — 검색 결과와 카카오톡·슬랙 링크
   미리보기에 그대로 나가는 문구다. 없으면 hero 설명을 그대로 쓸지 확인받는다(아래 1번).

## 1. 페이지 파일 뼈대 만들기

**뼈대를 손으로 쓰지 않는다** — `templates/subpage.template.html`을 루트에
`{페이지이름}.html`로 복사한다(`sample/`, `pages/` 같은 하위 폴더에 넣지 않는다 —
루트의 `index.html`과 동일한 위치). 섹션은 `templates/sections/*.html`을 붙여
문구만 바꾼다. 어느 조각을 고르는지는 [`templates/README.md`](../../../templates/README.md)의 표가 정한다.

같은 내용을 두 번 받으면 같은 결과가 나와야 하므로, **조립이 기본이고 새로 쓰는 것이 예외다.**
아래는 그 조각들이 왜 그렇게 생겼는지와, 조각으로 덮이지 않는 부분을 다룬다.

```html
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>{페이지 제목} | 코드프레소</title>

  <!-- 검색 결과·링크 미리보기에 그대로 나가는 문구다. 비워 두지 않는다(0번 6항목).
       og:image는 이 페이지를 대표하는 기존 이미지를 쓴다(새로 만들지 않는다).
       TODO: 운영 도메인이 확정되면 og:url·canonical을 절대 URL로 채운다. -->
  <meta name="description" content="{80~120자 한 줄 소개 — hero 설명을 그대로 써도 된다}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{페이지 제목} | 코드프레소">
  <meta property="og:description" content="{위 description과 같은 문구}">
  <meta property="og:image" content="images/{대표 이미지}">

  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/pages/{페이지이름}.css">
  <link rel="stylesheet" href="css/mobile.css">
</head>

<body>
  <!-- 1. GNB — 마크업을 복사하지 않는다. 조각 파일을 불러온다(아래 2번) -->
  <div data-include="partials/header.html"></div>

  <!-- main에 페이지 스코프 클래스를 준다. pages/*.css의 모든 규칙이 이 안에 들어간다 -->
  <main class="{페이지이름}">
    <!-- 2. 이 페이지의 섹션들 — 아래 3번 항목 참고 -->
  </main>

  <!-- 3. Footer — 역시 조각 파일 -->
  <div data-include="partials/footer.html"></div>

  <!-- 4. 스크립트 — 아래 4번 항목 참고, 필요한 것만.
       include-partials.js를 가장 먼저 둔다 -->
  <script src="js/include-partials.js"></script>
  <script src="js/fade-up.js"></script>
  <script src="js/header-scroll.js"></script>
  <script src="js/nav-menu.js"></script>
</body>

</html>
```

CSS는 **`main.css` + `pages/{페이지}.css` + `mobile.css` 3개**를 링크한다
(`mobile.css`가 세 번째인 것은 의도된 예외 — [SKILL.md](SKILL.md) 2번 참고).
`css/pages/{페이지이름}.css`가 아직 없으면 새로 만든다:

```css
/*
 * Page: {페이지이름}.html
 * main.css 위에 얹는 이 페이지 전용 계층.
 * 범용 UI(components/ui/)는 main.css가 이미 전부 로드하므로 여기서 import하지 않는다.
 */

@layer components {
  /* 이 페이지 전용 규칙. 전부 .{페이지이름} 스코프 안에 둔다 */
  .{페이지이름} { ... }
}

/* 900px·720px·560px 반응형은 css/mobile.css에 모아 둔다 */
```

**페이지 전용 규칙은 전부 `.{페이지이름}` 스코프 안에 둔다** — 그래야 여러 페이지가
같은 섹션 이름(`hero`·`features`·`outcomes`)을 써도 서로에게 새지 않는다.

### 다크 페이지일 때 (AXpresso 계열)

**`<link>`를 늘리지 않는다.** 두 줄만 다르다:

```html
<main class="{페이지이름} main-dark">
```
```css
/* pages/{페이지이름}.css 맨 위 */
@import url("../main-dark.css") layer(components);
```

`main-dark.css`가 시맨틱 토큰(`--color-ink`·`--color-line`·`--color-surface-*`)을
axpresso 값으로 remap하고 hero·feature-card·process-steps·deliverable-list·faq-list·
tag·cta-final을 반전한다. 페이지 CSS에는 **그 페이지에만 있는 것**만 남긴다.
다크에서는 테두리를 최소로 — 공간은 면이 만들고 선은 실제로 나누는 자리에만 둔다.
색 값을 직접 쓰지 않는다(토큰이 이미 뒤집혀 있으므로 그대로 쓰면 두 번 뒤집힌다).
현재 선례는 `ax-build.html` · `ax-grow.html`
([component-inventory.md](component-inventory.md) B-2).

### 반응형은 `mobile.css`의 정해진 자리에 넣는다

`css/mobile.css` 한 파일이 전 페이지의 900/720/560을 담고 있어(현재 730줄)
아무 데나 붙이면 곧 찾을 수 없게 된다. **breakpoint마다 `@media`는 한 덩어리다**
(7개로 쪼개져 있던 것을 3개로 병합했다 — `page-audit.js`가 이 구조를 검사한다).
그 블록 안의 순서를 지킨다:

```
@media (max-width: 900px) {
  /* 1. 공용 컴포넌트 (스코프 없는 것) */
  /* 2. 페이지 블록 — 페이지명 알파벳순, 페이지마다 한 덩어리로 모아 둔다 */
  .ax-build … / .ax-grow … / .cases … / .difference-page … / .skills …
}
```

- 페이지 블록에는 **반드시 페이지 스코프를 붙인다**(`.{페이지이름} .{섹션}`).
- **페이지를 지우거나 섹션을 갈아치웠으면 `mobile.css`의 그 스코프도 같이 지운다** —
  남으면 아무도 쓰지 않는 규칙이 파일에 쌓인다(6번 체크리스트).

## 2. GNB(헤더)·Footer 붙이기

**마크업을 복사하지 않는다.** 둘 다 `partials/`에 조각 파일 하나로 있고, 페이지는
그것을 불러온다([references/page-structure.md](references/page-structure.md) "header · footer는 마크업을 복사하지 않는다").

```html
<div data-include="partials/header.html"></div>
...
<div data-include="partials/footer.html"></div>
<script src="js/include-partials.js"></script>   <!-- 다른 스크립트보다 먼저 -->
```

- 위 두 줄과 스크립트 한 줄이면 끝이다. `<header>`/`<footer>` 태그를 페이지에 쓰지 않는다.
- **`file://`로 열면 조각이 안 보인다**(fetch가 CORS로 막힘) — 로컬 확인도
  `python -m http.server` 같은 정적 서버로 한다.
- **GNB 링크를 이 페이지로 연결해야 하면 `partials/header.html`을 고친다.** 한 곳만
  고치면 전 페이지에 함께 반영된다. 예: 이 페이지가 GNB의 어떤 메뉴에 해당하면
  그 메뉴의 `href="#"`를 이 파일 경로로 바꾼다.
- 현재 활성 페이지 표시(`is-active`)는 아직 관례가 없다 — 임의로 추가하지 않고
  필요해지면 사용자에게 확인받는다.
- 지금 GNB는 시안이며 나중에 실제 운영 GNB로 교체될 예정이다. 교체도 조각 파일
  하나만 바꾸면 된다.

## 3. 본문 섹션 만들기

SKILL.md의 "페이지·섹션 구조 관례"를 그대로 따른다:

**섹션 이름은 새로 짓지 않는다** — [SKILL.md](SKILL.md) 4번의 "섹션 역할 어휘표"에서
고른다(`hero` · `intro` · `features` · `catalog` · `process` · `deliverables` ·
`outcomes` · `journey` · `insight` · `faq` · `cta-final`). 표에 없는 역할이면
임의로 만들지 말고 **사용자에게 물어본 뒤** 표에 추가한다.

섹션 자체에 스타일·동작이 붙지 않으면 클래스를 아예 달지 않아도 된다
(`<section class="fade-up">`). 안쪽 블록에만 이름을 준다.

```html
<section class="{어휘표에서 고른 이름} fade-up">
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
- 여러 섹션을 구성할 때 가장 가까운 참고는 이미 만들어진 `ax-build.html`·`skills.html`이고, 그다음이 `index.html`의 각 섹션(`features`·`outcomes` 등)이다. 그 섹션들의 마크업 구조(섹션 → `.section-wrap` → `.section-title`/`.section-content`)를 그대로 본뜨고, 안의 콘텐츠 컴포넌트만 이 페이지 내용에 맞는 것으로 바꾼다.

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
| `js/catalog-board.js` | `catalog-board`의 좌측 분류 레일 전환 | `[data-catalog-board]`를 쓸 때만 |
| `js/case-filter.js` | `part-nav`를 필터로 써서 목록 카드를 걸러 보여줌 | `[data-case-filter]` + `[data-case-list]`를 쓸 때만 |
| `js/scenario-switch.js` | 좌측 단계 목록을 읽어 내려가면 우측 목업이 그 단계 화면으로 바뀜(스크롤 연동) | `[data-scenario-steps]` + `[data-scenario-screens]`를 쓸 때만 |

**이 대조는 기계가 해 준다** — `node .claude/skills/html-css-architecture/scripts/page-audit.js {페이지}.html`
이 마크업의 `data-*` 훅과 로드한 `<script>`를 양방향으로 비교해, 빠진 것과 쓰지 않는 것을
함께 알려준다. 표는 왜 그런지를 알기 위해 읽고, 확인은 스크립트로 한다.

**판단 기준**: 이 페이지의 마크업에 그 스크립트가 찾는 `data-*` 속성/클래스가 있는가? 없으면 그 `<script>` 태그를 넣지 않는다. 반대로 어떤 컴포넌트를 마크업에 썼는데 대응하는 스크립트를 빠뜨리면 인터랙션이 콘솔 에러 없이 조용히 죽으므로([references/cleanup.md](references/cleanup.md) "정리 후 확인" 3번 항목), 컴포넌트를 골랐으면 이 표에서 짝이 되는 스크립트도 함께 확인한다.

## 5. Footer

`partials/footer.html` 하나가 전 페이지 공용이므로 **새 페이지에서 할 일은
`<div data-include="partials/footer.html"></div>` 한 줄뿐이다**(2번 참고).
스타일은 `css/components/ui/site-footer.css`가 담당하고 `main.css`가 로드한다.

footer의 **내용**(링크 구성·사업자정보)을 바꿔야 하면 그 조각 파일만 고친다.
현재 링크 `href`와 사업자정보는 확정 전이라 자리만 잡혀 있다(`TODO` 주석) —
실제 값을 받으면 그 파일에서 채운다.

## 6. 마무리 체크리스트

서브페이지를 완성한 뒤 아래를 확인한다. [references/checklist.md](references/checklist.md)과 함께 사용한다.

- [ ] `<link>`가 3개인가 (`css/main.css` + `css/pages/{페이지}.css` + `css/mobile.css`)
- [ ] GNB·footer를 **복사하지 않고** `data-include`로 불러왔는가 / `include-partials.js`를 스크립트 맨 앞에 뒀는가
- [ ] 다른 페이지에 같은 내용(목업·이미지)이 이미 있는지 확인했는가 — 있으면 CSS·JS 한 벌을 공유하도록 공용으로 올렸는가
- [ ] 버튼이 카탈로그 변형만 쓰고, width를 `100%`로 덮지 않았는가
- [ ] 1440/900/720/560/390/320px에서 섹션 좌우 여백이 일정하고 가로 스크롤이 없는가
- [ ] 새로 쓴 컴포넌트가 [component-inventory.md](component-inventory.md)에 이미 있는 것인지 먼저 확인했는가 — 있으면 그 클래스를 재사용했는가
- [ ] 섹션마다 `<section class="{이름} fade-up">` → `.section-wrap` → `.section-title`/`.section-content` 구조를 따르는가 (첫 화면 제외)
- [ ] 마크업에 쓴 `data-*`/클래스에 맞는 스크립트를 4번 표에서 확인해 빠짐없이 로드했는가 — 반대로 쓰지 않는 스크립트는 넣지 않았는가
- [ ] `title` · `meta description` · `og:*` 를 채웠는가 (뼈대의 TODO 주석을 그대로 남기지 않았는가)
- [ ] 다크 페이지면 `main-dark` 클래스와 `@import`가 짝으로 들어갔는가 — `<link>`를 늘리지 않았는가
- [ ] `mobile.css`에 넣은 블록이 페이지 스코프를 갖고, 정해진 순서 자리에 있는가
- [ ] 문구가 [component-inventory.md](component-inventory.md) "권장 글자 수" 상한 안에 있는가
- [ ] `page-audit.js {페이지}.html` · `token-lint.js` 가 통과하는가 (저장 시 훅이 자동 실행한다)
- [ ] `node .claude/skills/html-css-architecture/scripts/contrast-audit.js` 로 대비를 실측했는가
- [ ] 타이포·토큰·중복 정리 등 SKILL.md 3~12번 규칙을 그대로 지켰는가
- [ ] **텍스트만 반복되는 화면으로 끝나지 않았는가** — 아래 7번을 확인했는가

## 7. 시각적 완성도 — 콘텐츠를 다 넣은 뒤 반드시 확인

마크업과 콘텐츠가 다 들어갔어도 **텍스트 블록만 이어지면 완성이 아니다.**
아래 4가지를 넣은 상태로 제출하고, 넣지 않기로 한 것은 이유를 보고에 남긴다.

1. **섹션 배경 리듬** — 옅은 면과 흰 면을 번갈아, 강조 구간 하나는 어두운 판으로.
2. **배경 이미지 질감** — hero와 최하단 CTA처럼 시선이 머무는 구간에.
3. **아이콘** — 반복되는 카드 목록에. 원본 색을 브랜드 토큰으로 교체한다.
4. **모션** — 진입 stagger + 카드 hover 부상. `prefers-reduced-motion` 대응을 1:1로.

> **판단 기준·실측 대비비 표·실제 코드는 전부
> [css-patterns.md](css-patterns.md) 4번에 있다.** 배경색을 고르기 전에 그것을 편다 —
> `--color-surface-sunken`과 `--color-brand-tint-1`은 **같은 색**이고 흰색과 6% 차이뿐이라,
> 그 둘로 리듬을 만들려 하면 화면이 허여멀건해진다(실제로 겪은 지적).
