# 반응형 · 모션

> 반응형을 손보거나 애니메이션을 넣을 때 편다. breakpoint 3단(900/720/560)은 [SKILL.md](../SKILL.md)에도 요약돼 있다.

### breakpoint 3단 — 새 값을 만들지 않는다

데스크톱(1440px)을 기준으로 만들고, 아래 **3단**으로 좁혀 간다. 반응형을 손볼 일이 생기면 이 세 값을 쓰고 **새 숫자를 만들지 않는다.**

| breakpoint | 무엇이 달라지는가 | 쓰는 곳 |
|---|---|---|
| `max-width: 900px` | 2단 레이아웃(`section-wrap.row`)이 1단으로 접히고 sticky가 풀린다. GNB 메뉴가 감춰진다 | `layout` `hero` `header` `education-journey` `diagnosis-showcase` `difference` `proof-card` `ax-build` |
| `max-width: 720px` | 카드 **내부**가 재배치된다 | `assessment-card` `content-panel` `metric-card` `proof-card` |
| `max-width: 560px` | 모바일. 타이포 스케일이 내려가고, 목업 안이 1열로 접히고, 버튼이 폭을 채운다 | `tokens` `layout` `hero` `header` `assessment-card` `feature-card` `part-nav` `insight` `cta-final` `education-journey` `diagnosis-showcase` `difference` `ax-build` |

**모바일 CSS(900/720/560px)는 `css/mobile.css` 하나로 모은다**(사용자 확인됨 — 이전에는 각 컴포넌트 파일 안에 뒀으나, 흩어진 반응형을 한눈에 보기 어려워 통합했다). 컴포넌트 순서로 섹션을 나눠 그 컴포넌트가 원래 있던 파일을 주석으로 표시한다. 새 컴포넌트에 반응형을 추가할 때도 컴포넌트 파일이 아니라 `mobile.css`의 같은 breakpoint 섹션에 추가한다 — 다시 흩어 두지 않는다.

`tokens.css`의 560px 블록(`--text-h1/h2/h3` 등 타이포 토큰 재정의)과 `designsystem.css`의 1100/800/520px 블록(사내 문서 전용, 다른 breakpoint 체계 — `proof-card`의 1023/780px 예외와 같은 성격)은 성격이 달라 옮기지 않고 각자 자리에 남긴다.

**로드 방법 — 페이지마다 세 번째 `<link>`로 추가한다**(`css/main.css` + `css/pages/{page}.css` + `css/mobile.css`). "페이지당 CSS 2개만 링크" 원칙의 의도적 예외다. `css/mobile.css` 파일 전체는 `@layer components { ... }`로 감싼다 — `<link>`는 `@import`처럼 `layer()`를 지정할 방법이 없어, 감싸지 않으면 익명 레이어보다도 우선순위가 낮은 일반 스타일시트로 취급돼 `@layer components` 안의 컴포넌트 규칙에 밀린다. `@layer components` 안에서는 나중에 로드된 규칙이 같은 specificity를 이기므로, 항상 마지막에 오는 세 번째 `<link>`가 그 페이지의 모든 컴포넌트·페이지 전용 규칙보다 반드시 나중에 캐스케이드되게 한다.

**모바일(560px)에서 지키는 원칙:**

- **타이포는 컴포넌트가 아니라 토큰으로 줄인다.** `tokens.css`의 560px 블록이 `--text-h1/h2/h3`를 32/24/20px로 다시 가리키고, `base.css`의 `h1~h3`가 그것을 읽으므로 **컴포넌트를 하나도 고치지 않고** 사이트 전체 제목이 함께 줄어든다. 컴포넌트에서 `font-size`를 다시 쓰지 않는다.
- **본문 16px은 줄이지 않는다** — "최소 14px" 제약과 충돌하고 가독성이 떨어진다.
- **목업 안 타이포는 오히려 키운다.** 화면이 좁아지면 목업이 "축소 화면"이 아니라 실제 크기에 가까워지므로, 데스크톱 스케일(16/14/12/10)을 모바일에서 15/14/13/11로 올린다.
- **주요 CTA는 폭을 채운다**(`width: 100%` + 세로 쌓기) — 버튼 2개가 한 줄에 안 들어가고, 엄지로 누르는 영역도 넓어야 한다.
- **고정 높이는 푼다.** 카드 높이·판 높이는 대개 "이웃과 눈높이를 맞추려는" 값인데, 1열로 쌓이면 맞출 이웃이 없고 내용만 잘린다(`feature-card` 380px, `insight-layout` 480px).
- **섹션은 최소 한 화면(`100svh`)을 채운다.** `100vh`가 아니다 — 모바일 브라우저는 주소창이 접혔다 펴지고 `100vh`는 펴진 상태 기준이라 섹션마다 빈 자리가 생긴다. 이미 여러 화면 길이인 섹션(`education-journey`·`diagnosis-showcase`)은 예외로 뺀다.
- **터치 타깃은 44px 이상.** `.btn` 기본 높이 40px을 모바일에서 44px로 올린다.
- **제품 화면 목업은 재배치하지 않고 비율 그대로 축소한다** — 아래 항목 참고.

**목업은 접지 말고 줄인다 (`--mock-fit`)**

목업은 "읽는 UI"가 아니라 제품 화면 그림이다. 칸을 접거나 열을 재배치하면 실제 제품과 다른 화면이 되고, 목업마다 다른 규칙이 생겨 새 목업마다 반응형을 새로 짜야 한다. 그래서 데스크톱 레이아웃을 그대로 두고 `zoom`으로 통째로 줄인다(`mock-motion.css`가 `--mock-fit`을 한 번만 정의한다).

```css
.journey-mock { --mock-fit-width: 566px; }              /* 데스크톱에서 갖던 폭 */
@media (max-width: 560px) { .journey-mock { zoom: var(--mock-fit); } }
```

- `transform: scale()`이 아니라 `zoom`을 쓴다 — `scale()`은 레이아웃 박스를 원래 크기로 남겨 아래에 빈 공간이 생기고, 그걸 음수 마진으로 일일이 걷어내야 한다.
- **축소 배율에는 0.62 하한이 있다.** 화면 폭에 그대로 맞추면 1184px짜리 화면이 0.27배가 되어 목업 안 글자가 3px이 된다. 하한에 걸려 목업이 화면보다 넓어지면 **감싼 창이** `overflow-x: auto`로 가로 스크롤을 맡는다 — `zoom`이 걸린 요소에 `overflow`를 함께 주면 스크롤 폭까지 축소돼 계산이 어긋나므로, 스크롤은 반드시 부모가 갖는다.
- 축소하는 목업 안에서는 **타이포·배치를 다시 잡지 않는다.** 축소 배율과 겹쳐 위계가 어긋난다.

### 반응형은 눈으로 보지 말고 섹션 범위를 재서 확인한다

"모바일에서 대충 접히는지" 보는 것으로는 부족하다. **섹션마다 좌우 여백이
정확하고 일정한지**를 값으로 확인한다(사용자 지시 — 채널톡 모바일 화면이 기준).
사람 눈에는 3px 어긋남이나 320px에서만 생기는 가로 스크롤이 잘 안 보인다.

**확인 항목 3개** — 정적 서버로 띄우고(`partials/` 때문에 `file://`은 안 된다)
1440 / 900 / 720 / 560 / 390 / **320**px에서 전부 본다.

1. **모든 섹션의 콘텐츠 좌측 시작 x가 같은가** — 한 섹션만 어긋나면 그 섹션이
   `.section-wrap`을 안 쓰거나 자체 padding을 갖고 있다는 뜻이다.
2. **우측 끝도 같은가.**
3. **페이지에 가로 스크롤이 없는가**(`documentElement.scrollWidth <= clientWidth`).

현재 값은 **데스크톱 좌우 80px · 900px 이하 좌우 20px**이고, 세 페이지가 모두 같다.
새 섹션을 추가한 뒤 이 값이 달라지면 그 섹션이 규칙을 벗어난 것이다.

**가로 스크롤이 생겼을 때 원인은 대개 이 셋이다:**

- **`1fr`을 쓴 grid** — grid item의 기본 `min-width`가 `auto`라 긴 제목·목업이
  컬럼을 밀어낸다. **`minmax(0, 1fr)`로 쓴다.** (`.section-wrap.row`가 320px에서
  3px 넘쳤던 원인이 이것이다.)
- **`repeat(auto-fit, minmax(140px, 1fr))`** — 좁은 화면에서 최소폭 합이 컨테이너를
  넘긴다. 모바일에서는 **열 수를 고정**한다(`repeat(2, minmax(0, 1fr))`).
  (footer 링크 열이 390px에서 510px까지 넘쳤던 원인이다.)
- **`zoom`으로 줄인 목업** — 축소에 0.62 하한이 있어 아주 좁은 화면에서는 목업이
  판보다 넓어진다. 이때 **감싼 판이 `overflow-x: auto`와 `min-width: 0`을 함께**
  가져야 한다. `min-width: 0`이 빠지면 판이 grid item으로서 페이지를 밀어낸다.

장식용으로 일부러 넘치는 것(`metric-card__glow`, marquee 트랙)은 조상이
`overflow: hidden`으로 자르므로 페이지 스크롤을 만들지 않는다 — 이건 정상이다.
판단 기준은 "요소가 뷰포트를 넘었는가"가 아니라 **"페이지에 가로 스크롤이 생겼는가"**다.

**아직 남은 것 — GNB.** 현재 GNB는 hover로 열리는 메가 패널이라 터치에서 동작하지 않는다. 실제 운영 GNB로 교체될 예정이라(subpage-guide 참고) 햄버거 메뉴를 새로 만들지 않고, 900px 이하에서 **메뉴를 감추고 로고 + 주요 CTA만** 남겨 두었다. 교체 작업에 들어가면 `header.css`의 그 블록을 지우고 모바일 메뉴를 함께 설계한다.

(`proof-card.css`만 `1023px`/`780px`을 쓰는 예외다. 이 컴포넌트를 손볼 때 900/720/560으로 맞출지 사용자에게 확인한다.)

### @keyframes는 새로 만들지 않는다 — `css/keyframes.css` 라이브러리를 쓴다

**애니메이션을 넣을 때 `@keyframes`부터 쓰지 않는다.** 공용 움직임은
`css/keyframes.css`에 모여 있고 `main.css`가 로드하므로 **모든 페이지에서 바로 쓸 수 있다.**
컴포넌트는 이름만 가져다 `animation`에 넣고, 세기는 변수로 조절한다.

```css
.my-card {
  --motion-rise: 6px;                 /* 기본 12px이 과하면 이것만 덮는다 */
  animation: rise-in var(--duration-scroll) var(--ease-scroll) both;
}
```

| 이름 | 움직임 | 조절 변수 |
|---|---|---|
| `rise-in` | 아래에서 떠오르며 나타난다 (음수면 위에서 내려온다) | `--motion-rise` |
| `pop-in` | 떠오르면서 살짝 커진다 | `--motion-rise` · `--motion-pop-scale` |
| `scale-in` | 이동 없이 크기만 커진다 | `--motion-pop-scale` |
| `pulse` | 투명도가 오갔다 한다 | `--motion-pulse-min` |
| `float` | 위아래로 떠다닌다 | `--motion-float-y` · `--motion-float-x` |
| `nudge` | 좌우로 살짝 민다 | `--motion-nudge-x` |
| `marquee` | 같은 목록 2벌을 옆으로 흘린다 | `--marquee-gap` |
| `gradient-shift` | 배경 그라디언트를 가로로 흘린다 | `--gradient-shift-to` |
| `spin-angle` | 각도 변수를 한 바퀴 돌린다 (conic 테두리) | — |

- **`@keyframes`는 `@layer` 우선순위를 받지 않는다.** 이름이 같으면 나중에 로드된 정의가
  이기므로, 컴포넌트마다 흩어 두면 이름이 겹치는 순간 조용히 다른 애니메이션이 재생된다.
  그래서 공용 움직임은 반드시 이 파일 한 곳에만 둔다.
- **가운데 정렬을 `transform: translate(-50%, …)`로 하는 요소**에 `float`을 쓸 때는
  `--motion-float-x: -50%`를 함께 준다. 안 주면 정렬이 풀린다.
- 라이브러리에 없는 **그 컴포넌트만의 연출**은 해당 컴포넌트 파일에 둔다 — 목업 연출
  5종은 `mock-motion.css`가, 그 변주는 각 컴포넌트가 소유한다(그 파일을 안 쓰면
  따라오지 않게). 새로 만들기 전에 위 표에서 같은 움직임이 있는지 먼저 본다.

### 모션 축소 설정 대응 — 애니메이션을 넣으면 반드시 함께 넣는다

**이 프로젝트에서 예외 없이 지켜지는 규칙이다**(현재 13개 컴포넌트 파일에 적용돼 있다). `transition`이나 `animation`을 새로 추가하면 같은 파일 맨 아래에 이 블록을 함께 둔다 — 빠뜨리면 접근성 설정을 켠 사용자에게 어지러운 화면이 그대로 나간다.

```css
@media (prefers-reduced-motion: reduce) {
  .my-component {
    transition: none;   /* 또는 animation: none / transition-duration: 0.001ms */
  }
}
```

### Fluid Design · 논리 속성 (권장, 강제 아님)

- `clamp()`, `min()`, `max()`, `calc()`로 breakpoint를 늘리지 않고 유연하게 대응할 수 있다. 다만 **현재 컴포넌트에서 거의 쓰이지 않으므로**, 기존 컴포넌트를 수정할 때 이 방식으로 임의 전환하지 않는다. 새로 만드는 것에만 적용을 검토한다.
- 논리 속성(`margin-inline`, `padding-block`)은 좌우/상하를 한 번에 줄 때 쓰면 편하다. 현재 코드는 물리 속성(`margin-top` 등)이 더 많으므로, **주변 코드의 방식을 따르는 것을 우선**한다. 기존 물리 속성을 논리 속성으로 바꾸는 리팩터링을 요청 없이 하지 않는다.

