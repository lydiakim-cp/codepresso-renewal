# 토큰과 타이포

> 색·간격·폰트 값을 쓸 때 편다. **실제 토큰은 `css/tokens.css`가 정본이다** — 아래는 자주 쓰는 것만 옮긴 사본이므로 쓰기 전에 원본을 확인한다.

### Base Heading/Text 스타일과의 중복 방지

`base.css`에 `h1~h6`, `p` 등에 Design Token 기반 전역 타이포 스타일을 이미 정의했다면, 컴포넌트에서 새 텍스트 스타일을 만들기 전에 **먼저 그 전역 스타일과 값이 같은지 확인한다.**

- 새로 마크업할 텍스트가 시맨틱상 `h1~h6`/`p`에 해당하고, 원하는 시각 스타일이 `base.css`의 해당 태그 스타일과 동일하다면 → **그 태그를 그대로 쓰고 컴포넌트 CSS에는 값이 다른 속성(예: `color`)만 override로 남긴다.** `div`/`span`에 태그의 전역 스타일과 동일한 `font-size`/`line-height`/`font-weight`/`letter-spacing`을 통째로 다시 선언하지 않는다.
- 반대로 시각 스타일은 비슷해 보이지만 스케일이 다르다면(예: hero 타이틀이 `h1`보다 훨씬 큰 hero 전용 사이즈) → 태그를 시맨틱에 맞게 유지하되, 별도 컴포넌트 클래스로 전체 스타일을 새로 정의한다. 이 경우는 중복이 아니라 의도적으로 다른 스케일이므로 정리 대상이 아니다.
- 판단 후에는 **의미(시맨틱 계층)와 시각(중복 제거) 둘 다 확인**한다. 값이 겹쳐서 태그를 올렸을 때 heading 계층을 건너뛰게 된다면(`h1` 다음 바로 `h3` 등) 그 트레이드오프를 사용자에게 명시하고 확인받는다 — 자동으로 감수하고 넘어가지 않는다.
- 이 점검은 **한 요소를 손볼 때 그 요소만 보고 끝내지 않는다.** 같은 이유로 값이 겹칠 만한 다른 텍스트 요소(다른 컴포넌트의 heading/본문 클래스)가 있는지 프로젝트 전체에서 한 번에 훑고, 같은 패턴이면 같은 방식으로 정리한다.


색상, spacing, radius, shadow, typography 등 반복 값은 CSS 변수로 관리한다. **이 프로젝트의 실제 토큰은 `css/tokens.css`에 있다** — 아래는 자주 쓰는 것만 옮긴 것이고, 쓰기 전에 `tokens.css`를 열어 확인한다.

```css
/* Color — 브랜드 */
--color-brand: #1A61EA;        /* 주요 행동·강조 */
--color-brand-dark: #0D33A3;   /* 강조 텍스트 */
--color-brand-tint-1: #F5F8FF; /* 아주 옅은 배경 */
--color-brand-tint-2: #E9EFFF; /* 선택 상태·태그 배경 */

/* Color — 텍스트(Ink). --color-text가 아니라 --color-ink 계열이다 */
--color-ink-heaviest: #04091A; /* 큰 제목 */
--color-ink: #0E1B3D;          /* 기본 본문 */
--color-ink-light: #41496B;    /* 본문 설명 */
--color-ink-lighter: #7C88A3;  /* 보조 정보 */

/* Color — 면과 선 */
--color-surface: #FFFFFF;        /* 카드 배경 */
--color-surface-sunken: #F5F8FF; /* 옅게 가라앉은 영역 */
--color-surface-page: #FBFCFF;   /* 페이지 배경 */
--color-line: #EAECF3;           /* 구분선 */
--color-line-heavy: #D3D6E0;     /* 진한 경계 */

/* Shadow — 2단뿐이다(lg 없음). 블루 틴트가 코드프레소의 시각적 서명 */
--shadow-sm: 0 2px 6px rgba(26, 97, 234, .04);
--shadow-md: 0 6px 16px rgba(26, 97, 234, .12);

/* Spacing — 숫자가 곧 px다. --space-6은 6px이지 24px이 아니다 */
--space-2 --space-4 --space-6 --space-8 --space-10 --space-12
--space-18 --space-20 --space-24 --space-35 --space-48 --space-60

/* Radius */
--radius-sm: 6px; --radius-md: 8px; --radius-lg: 12px;
--radius-xl: 20px; --radius-full: 999px;

/* Typography — 용도별 시맨틱 토큰을 먼저 쓴다 */
--text-hero / --text-h1 (56px) · --text-h2 (44px) · --text-h3 (24px)
--text-card-title (20px) · --text-body (16px) · --text-body-muted (14px)
/* 원시 스케일: --text-heading-18~64, --text-body-14/16/18 (+ 대응 --leading-*) */

--font-weight-regular: 400; --font-weight-medium: 500; --font-weight-semibold: 600;

/* Motion — 즉각적 hover(0.1s)와 느긋한 스크롤(0.5s)의 이중 리듬 */
--duration-hover: 0.1s; --duration-scroll: 0.5s; --duration-cycle: 5s;
--ease-hover: ease-out; --ease-scroll: ease-out;
```

**원칙: raw 값을 직접 쓰지 않는다.** `background: #1A61EA;` (X) → `background: var(--color-brand);` (O)

**주의 — 토큰 이름을 추측하지 않는다.** 이 프로젝트는 흔한 관례와 다른 이름을 쓴다. `--color-primary`, `--color-text`, `--color-border`, `--color-focus`, `--text-sm`, `--text-base`, `--shadow-lg`는 **존재하지 않는다.** 없는 변수를 쓰면 그 속성이 조용히 무시되어 스타일이 깨진 것도 모르고 넘어간다. 반드시 `tokens.css`에서 실제 이름을 확인하고 쓴다.

### 기존 색에서 파생시키는 방법 — `color-mix()`

옅은 배경, hover 색, 반투명 경계선처럼 **기존 색의 변형이 필요할 때 새 hex를 만들지 않고** 기존 토큰에서 파생시킨다. 이 프로젝트의 정착된 패턴이다.

```css
/* hover — 브랜드색을 흰색과 섞어 밝게 */
background: color-mix(in srgb, var(--color-brand) 80%, white);

/* 옅은 틴트 배경 — 원색이 쨍하지 않게 */
background: color-mix(in srgb, var(--color-brand) 12%, var(--color-surface));

/* 반투명 경계선 */
border: 1px solid color-mix(in srgb, var(--color-surface) 40%, transparent);
```

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

