# 페이지 · 섹션 구조 · 에셋

> 새 섹션을 추가하거나 페이지를 조립할 때 편다. 페이지 **전체**를 새로 만드는 절차는 [subpage-guide.md](../subpage-guide.md)에 있다.

### 페이지 · 섹션 구조 관례

새 섹션을 추가하거나 기존 섹션을 재구성할 때 아래 구조를 따른다. 이미 확정된 관례이므로 새로 설계하지 않는다.

**CSS 로드 — 페이지마다 정확히 2개**

```html
<link rel="stylesheet" href="css/main.css">        <!-- reset → tokens → base → 공통 컴포넌트 -->
<link rel="stylesheet" href="css/pages/index.css"> <!-- 그 페이지 전용 컴포넌트 -->
<link rel="stylesheet" href="css/mobile.css">      <!-- 반응형 — 항상 마지막 -->
```

- 새 컴포넌트 CSS를 만들면 **공통이면 `main.css`에, 페이지 전용이면 `css/pages/{page}.css`에** `@import`를 추가한다. HTML에 세 번째 `<link>`를 붙이지 않는다.
- 판단 기준: 두 개 이상의 페이지가 쓸 컴포넌트인가? → 공통. 한 페이지의 특정 섹션 전용인가? → 페이지 CSS.

**header · footer는 마크업을 복사하지 않는다 — `partials/`에서 불러온다**

GNB와 footer는 모든 페이지가 같은 마크업을 쓴다. 페이지마다 복사하면 메뉴 하나를
고칠 때 전 페이지를 손으로 맞춰야 하고, 페이지가 늘수록 어긋난다. 그래서 **조각
파일 하나만 두고 각 페이지가 그것을 불러온다**(사용자 지시).

```
partials/
├── header.html   GNB — 전 페이지 공용
└── footer.html   Footer — 전 페이지 공용
```

```html
<body>
  <div data-include="partials/header.html"></div>

  <main class="{페이지명}"> ... </main>

  <div data-include="partials/footer.html"></div>

  <!-- 다른 스크립트보다 먼저 로드한다 -->
  <script src="js/include-partials.js"></script>
  <script src="js/fade-up.js"></script>
  ...
</body>
```

- `js/include-partials.js`가 `data-include`를 찾아 그 파일을 `fetch`해 **그 자리에
  내용만 펼쳐 넣는다**(wrapper div는 남지 않는다).
- 삽입이 끝나면 `document`에 **`partials:loaded` 이벤트**를 한 번 보낸다.
  **GNB·footer를 만지는 스크립트는 이 이벤트를 기다렸다가 초기화한다** —
  `fetch`가 비동기라 먼저 실행되면 `.header`가 아직 없다.
  현재 `header-scroll.js`·`nav-menu.js`가 이 방식이다.

  ```js
  (() => {
    const init = () => { /* .header를 찾는 코드 */ };
    document.addEventListener("partials:loaded", init, { once: true });
  })();
  ```

- **`file://`로 열면 조각이 안 보인다** — `fetch`가 CORS로 막힌다. 로컬 확인도
  정적 서버로 띄운다(`python -m http.server`). 스크린샷·검증도 서버 기준으로 한다.
- GNB를 고칠 일이 생기면 `partials/header.html` **하나만** 고친다. 페이지 HTML에서
  `<header>`를 찾으려 하지 않는다 — 거기엔 없다.
- 조각을 새로 추가할 때도 `partials/`에 두고 같은 `data-include` 방식을 쓴다.
  두 페이지 이상이 쓰는 마크업 덩어리라면 조각 후보다.

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

**섹션 배경은 처음 만들 때부터 리듬을 준다**

새 페이지를 만들 때 모든 섹션을 흰 바탕으로 두면 화면이 평평해 보인다. **옅은 면(`--color-brand-tint-2`)과 흰 면을 번갈아** 배치하고, 가장 강조할 한 구간은 **어두운 판(`--color-ink-heaviest`)** 으로 올린다. (`surface-sunken`과 `brand-tint-1`은 **같은 색**이라 그 둘로는 리듬이 만들어지지 않는다.) 배정 기준과 주의점은 [css-patterns.md](../css-patterns.md) 4번 "화면이 단조로울 때"에 있다.

- 배경색을 넣으면 `dot-line`(점선 구분)은 불필요해진다 — 둘을 함께 쓰지 않는다.
- **카드와 섹션 배경이 같은 색이 되지 않게** 확인한다(흰 카드는 옅은 바탕에, `sunken` 카드는 흰 바탕에).

### 시각적 완성도 — 텍스트만 남기지 않는다

마크업과 콘텐츠를 다 넣었어도 **텍스트 블록만 반복되면 완성이 아니다.** 아래를 검토하고, 적용하지 않기로 한 것은 이유를 보고에 남긴다. 수단은 모두 이미 프로젝트에 있으므로 새로 발명하지 않는다 — 구체적인 코드는 [css-patterns.md](../css-patterns.md) 4번에 있다.

1. **섹션 배경 리듬** — 위 항목.
2. **배경 이미지 질감** — `images/`의 배경을 크게 확대해 일부만 쓰고 `blur`로 흘린다. hero와 최하단 CTA처럼 시선이 머무는 구간에 우선 적용한다. 같은 이미지를 여러 곳에 쓸 때는 `background-position`·`background-size`를 달리해 다른 구역이 보이게 한다.
3. **아이콘** — 텍스트만 반복되는 카드 목록에는 아이콘을 넣어 스캔하기 쉽게 만든다. `images/icon/`의 파일은 **원본 색이 브랜드와 무관하므로 인라인 SVG로 옮겨 색을 토큰으로 교체**한다(`<img>`로 넣으면 색을 못 바꾼다).
4. **모션** — 순차 지연(stagger)으로 읽는 순서를 만들고, 카드 hover에 `translateY(-3px)` + 그림자 한 단계를 준다. **애니메이션을 넣으면 `prefers-reduced-motion` 대응을 1:1로 함께 넣는다.**

### 군더더기를 넣지 않는다 — 내부용 문서·페이지

이 사이트의 일부 화면(디자인 가이드 등)은 **사내 직원이 보는 문서**다. 이런 화면에는 방문자를 설득하는 인트로 문구, 자기소개, 요약 수치 카드 같은 것을 넣지 않는다 — 읽는 사람이 이미 맥락을 알고 있어서 스크롤만 늘린다.

- 제목과 본문으로 바로 들어간다. "무엇을 위한 문서인지" 설명하는 단락을 습관적으로 붙이지 않는다.
- **개수를 세는 요약 카드**(예: "가이드 6개 · 컴포넌트 12개")는 특히 주의한다 — 내용이 늘거나 줄면 숫자가 실제와 어긋나고, 그것을 알아채는 사람도 없다.
- 판단이 서지 않으면 사용자에게 "이 문구가 필요한가" 묻는다. 넣는 쪽보다 빼는 쪽이 기본값이다.

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

