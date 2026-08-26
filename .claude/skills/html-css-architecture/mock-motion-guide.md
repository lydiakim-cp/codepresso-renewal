# 목업 연출 6종 — Mock Motion

제품 화면 목업을 **정지된 그림이 아니라 실제로 돌아가는 화면처럼** 보여주는 연출 레이어. 읽어야 할 것만 텍스트로 남기고 나머지는 스켈레톤으로 가라앉힌 뒤, 확대·이동·pop으로 시선을 한 곳에 모은다.

- **CSS 파일**: `css/components/mock-motion.css` (공용 — `main.css`가 로드)
- **레이아웃**: `deck`·`detail`의 뼈대(`.mock-deck-*` · `.mock-detail-*`)는 `mock-motion.css`에 함께 있다 — index.html이 쓰게 되면서 컴포넌트 레벨로 올렸다. `ticker` 뼈대도 index.html PART 1(SkillCamp)이 쓰게 되면서 함께 올렸다. `replay` 뼈대만 아직 `css/pages/designsystem.css`의 `08 MOCKUP MOTION` 블록에 남아 있고, 다른 페이지에서 쓰게 되면 같은 방식으로 올린다.
- **카탈로그**: `codepresso-designsystem.html` → `08 · MOCKUP MOTION` 섹션에서 6종이 실제로 돌아간다
- **JS 없음** — 전부 CSS 애니메이션. 스크롤 위치와 무관하게 항상 같은 리듬으로 반복한다.
  단 `stage`만 한 번 재생이라, 다시 보여주려면 쓰는 쪽이 되감아야 한다(F 항목 참고).

## 사용자가 이렇게 말하면 이 문서를 편다

> "B번 목업처럼 디자인해줘" · "카드 덱처럼 넘어가게" · "목업에 애니메이션 넣어줘"
> "단계별로 하나씩 나타나게" · "프레젠테이션처럼 순서대로"
> "스켈레톤으로 하고 중요한 것만 텍스트로" · "실제 웹사이트 돌아가는 것처럼"

번호(A~F)와 이름(focus·replay·deck·detail·ticker·stage)은 **고정**이다. 다시 매기지 않는다.

## 6종 요약 — 무엇을 고를 것인가

| 번호 | `data-mock-motion` | 화면이 하는 일 | 이럴 때 쓴다 |
|---|---|---|---|
| **A** | `focus` | 목록의 나머지는 흐려지고, 현재 항목 하나만 1.055배로 떠올라 텍스트가 드러난다 | 기존 목록형 목업을 크게 바꾸지 않고 생기만 더할 때. **교체 비용이 가장 낮다** |
| **B** | `replay` | 브라우저 창 안에서 커서가 이동하면 화면 전체가 1.42배로 밀고 들어가 한 카드를 확대 | "실제 운영 중인 서비스 화면"임을 보여야 할 때. **가장 정직한 연출** |
| **C** | `deck` | 카드가 덱처럼 쌓였다가 맨 앞 장이 좌상단으로 빠지고 뒤 카드가 당겨진다. 빠지기 직전 배지가 pop | 스크롤 중 눈에 띄어야 할 때. **움직임이 가장 크다** |
| **D** | `detail` | 좌측 목록에서 항목이 선택되면 우측 상세가 밀려 들어오고 도넛 게이지가 그려진다 | 연출과 함께 정보도 전달해야 할 때. **밀도와 연출의 균형** |
| **E** | `ticker` | 수치가 오버슈트로 튀어나오고, 막대가 자라고, 새 행이 위에서 밀려들며 반짝인다 | 숫자로 설득하는 자리. 관리자·대시보드 시점 |
| **F** | `stage` | 나란히 놓인 3단계 칸이 좌→우로 하나씩 켜지고, 칸 안 요소가 이어서 올라오고, 칸 사이 화살표가 다음으로 넘긴다 | 프로세스·확산·전후 흐름. **유일하게 한 번만 재생된다** |

## 공통 규칙

1. **부모에 `data-mock-motion="{값}"`을 준다.** 자식의 `is-*` 클래스는 그 값 안에서만 동작한다.
2. **기존 컴포넌트를 그대로 쓴다** — `.preview-frame`, `.journey-mock-*`, `.skeleton-line`, `.text-caption`, `.journey-mock-badge`. mock-motion.css는 **움직임만** 정의하고 색·간격·radius를 다시 쓰지 않는다.
3. **목업 루트에는 `.journey-mock`이 아니라 `.mock-screen`을 쓴다.** 둘 다 같은 세로 flex지만, `.journey-mock`은 education-journey.css에서 `> * { opacity: 0 }`으로 자식을 숨겨두고 스크롤 시 `journey-stage.js`가 `.is-popping`을 붙여야 나타난다 — 그 스크립트가 없는 곳에서 쓰면 **목업이 통째로 빈 상자로 보인다**(실제로 겪은 버그). 자식 클래스(`.journey-mock-head` 등)는 이름만 같을 뿐 무관하므로 그대로 써도 된다.
4. **읽혀야 하는 것만 텍스트로.** 나머지는 `.skeleton-line`으로 두고 폭을 `style="width: 148px"`처럼 직접 준다 — 폭이 제각각이어야 실제 데이터처럼 보인다.
5. **목업 안 텍스트는 14px 제약의 예외다 — 9px는 하한이지 기본값이 아니다.**
   목업은 읽는 UI가 아니라 '화면 그림'이라, 14px로 두면 실제 제품 화면 대비
   글자가 과하게 커서 축소된 화면으로 보이지 않는다.

   **그렇다고 전부 9/11px로 깔면 안 된다**(실제로 한 번 그렇게 만들었다가 지적받았다).
   목업 안에도 제목·본문·보조의 위계가 있어야 실제 제품 화면처럼 보인다 —
   전부 최소 크기로 눌러 담으면 정보가 평평해져 어디를 봐야 할지 알 수 없다.
   **하한만 9px로 풀린 것이고, 어울리는 크기는 그 위에서 자유롭게 고른다.**

   `.difference-screen-body`(①②)가 쓰는 4단이 표준 예시다:

   ```css
   --mock-text-title: 15px;  --mock-leading-title: 20px;  /* 칸 제목 */
   --mock-text-lg:    13px;  --mock-leading-lg:    18px;  /* 본문·항목 이름 */
   --mock-text:       11px;  --mock-leading:       15px;  /* 설명·각주 */
   --mock-text-sm:     9px;  --mock-leading-sm:    13px;  /* 하한. 칩·메타 */
   ```

   결론 수치처럼 더 커야 하는 것은 이 스케일 위로 올려도 된다(`.difference-verdict-score` 20px).
   SkillFit 목업(`.journey-app`, `education-journey.css`)은 프레임이 더 작아 9/11px 2단만 쓴다.

   **변수는 그 목업 루트 안에만 선언한다** — 전역 토큰으로 올리지 않는다
   (9px가 실제 UI로 새어나가면 타이포 체계가 깨진다).
   글자만 줄이지 말고 아이콘·패딩도 함께 줄인다 — 행이 빈 것처럼 보인다.
6. **장식이므로 `aria-hidden="true"`** 를 목업 루트에 붙인다.
   드래그 선택은 이미 꺼져 있다 — `mock-motion.css`가 `.mock-screen`·`.journey-mock`·`[data-mock-motion]`에 `user-select: none`을 건다. 목업마다 다시 쓰지 않는다.
7. **모션 축소 설정에서는 전부 완성된 화면으로 정지한다** — mock-motion.css 맨 아래 블록이 처리한다. 새 연출을 추가하면 그 블록에도 함께 넣는다.

### 애니메이션에만 상태를 두지 않는다

`transform`·`height`처럼 **형태를 만드는 값**은 레이아웃 CSS에 기본값으로 두고, keyframes는 그것을 변주만 한다. keyframes에만 두면 모션 축소 설정에서 덱이 한 장으로 포개지고 막대가 납작해진다(실제로 겪은 버그).

**그리고 keyframes의 0% 프레임은 "보이는" 상태여야 한다.** 헤드리스 렌더·캡처 도구·첫 페인트 지연처럼 애니메이션이 진행되지 않는 환경에서는 0% 프레임이 그대로 남는데, 그것이 `opacity: 0`이면 요소가 영영 보이지 않는다. 사라졌다 나타나는 구간은 사이클 **중간**에 두고 0%·100%를 완성 상태로 맞춘다. (커서·덱에서 빠져나가는 카드처럼 "평소에 없는 것이 맞는" 요소만 예외다.)

## 공통 훅 클래스

| 클래스 | 하는 일 |
|---|---|
| `is-quiet` | 배경으로 가라앉는다(opacity 1 → .38). 스켈레톤 행에 붙인다 |
| `is-shimmer` | 스켈레톤이 데이터를 기다리듯 호흡한다. `animation-delay`를 달리 줘서 어긋나게 한다 |
| `is-focus` | 지금 읽어야 하는 것. `focus`에서는 확대, `replay`에서는 브랜드 테두리 |
| `is-pop` | 오버슈트로 튀어나온다. `deck`에서는 배지, `ticker`에서는 수치 |
| `is-pulse` | 깜빡인다. `.journey-mock-badge.is-live` 안의 점에 쓴다 |
| `is-step` | 단계 칸 하나가 통째로 올라온다. `stage` 전용. `--mock-step`(0·1·2)으로 순서를 준다 |
| `is-cue` | 칸 안의 요소가 칸보다 조금 늦게 올라온다. `--mock-cue-delay`로 칸 안 순서를 준다 |
| `is-flow` | 칸과 칸 사이 화살표가 한 번 밝아졌다 가라앉는다 |

## 조절 변수

마크업에서 CSS 변수로 덮는다. 전부 fallback이 있어 안 줘도 동작한다.

| 변수 | 기본값 | 쓰는 곳 |
|---|---|---|
| `--mock-cycle` | 5~6.5s | 한 사이클 길이 |
| `--mock-bar-h` | 50% | `ticker` 막대의 목표 높이 (막대마다 다르게) |
| `--mock-gauge-from` / `--mock-gauge-to` | 176 / 56 | `detail` 도넛 게이지의 시작·도착 `stroke-dashoffset` |
| `--mock-cursor-from-x/y`, `--mock-cursor-to-x/y` | 212/168, 150/118 | `replay` 커서의 이동 좌표 |
| `--mock-step` | 0 | `stage` 칸의 순서(0·1·2). 칸마다 0.34s씩 늦게 켜진다 |
| `--mock-cue-delay` | 0s | `stage` 칸 **안**에서 그 요소가 늦는 정도 |

## 마크업 골격

전체 예시는 `codepresso-designsystem.html`의 `08 · MOCKUP MOTION` 섹션을 그대로 복사해서 내용만 바꾸는 것이 가장 빠르다. 아래는 각 연출의 최소 뼈대다.

### A · focus

```html
<div class="preview-frame mock-screen" data-mock-motion="focus" aria-hidden="true">
  <div class="journey-mock-head">
    <span class="journey-mock-title">업무 자동화 기초 과정</span>
    <span class="journey-mock-badge">수강 중</span>
  </div>
  <div class="journey-mock-progress">
    <div class="journey-mock-progress-bar"><span style="width: 68%"></span></div>
    <span class="text-caption strong">68%</span>
  </div>
  <ul class="journey-mock-list">
    <!-- 흐려질 행: 텍스트 대신 스켈레톤 -->
    <li class="journey-mock-item is-done is-quiet">
      <span class="journey-mock-check"></span>
      <span class="skeleton-line is-shimmer" style="width: 148px"></span>
      <span style="flex: 1"></span>
    </li>
    <!-- 떠오를 행 하나만 텍스트 -->
    <li class="journey-mock-item is-current is-focus">
      <span class="journey-mock-check"></span>
      <span class="journey-mock-item-name">반복 업무 자동화 실습</span>
      <span class="text-caption">24분</span>
    </li>
  </ul>
</div>
```

진도 막대는 `clip-path`로 덮었다 걷어내는 방식이라, 도착 폭은 마크업의 `width`가 그대로 정한다.

### B · replay

```html
<div class="preview-frame preview-frame--flush" data-mock-motion="replay" aria-hidden="true">
  <div class="preview-frame__bar">
    <span class="preview-frame__dots"><i></i><i></i><i></i></span>
    <span class="text-caption">skillpath.codepresso.io</span>
  </div>
  <div class="mock-replay-viewport">
    <div class="mock-replay-stage is-camera">
      <div class="mock-replay-aside">…사이드바 스켈레톤…</div>
      <div class="mock-replay-main">
        <div class="mock-replay-grid">
          <article class="journey-mock-item is-focus">…확대될 카드…</article>
          <article class="journey-mock-item is-quiet">…스켈레톤 카드…</article>
        </div>
      </div>
    </div>
    <svg class="mock-replay-cursor is-cursor" viewBox="0 0 24 24" fill="none" aria-hidden="true">…</svg>
  </div>
</div>
```

`transform-origin: 22% 30%`가 확대 대상 위치와 맞아야 한다 — 대상이 오른쪽에 있으면 origin도 함께 옮긴다. `.mock-replay-viewport`가 `overflow: hidden`으로 잘라 주므로 확대해도 창 밖으로 새지 않는다.

### C · deck

```html
<div class="preview-frame mock-deck" data-mock-motion="deck" aria-hidden="true">
  <div class="journey-mock-head">…</div>
  <div class="mock-deck-stage">
    <article class="mock-deck-card is-deck-back">…</article>
    <article class="mock-deck-card is-deck-mid">…</article>
    <article class="mock-deck-card is-deck-front">
      <div class="mock-deck-card-head">
        <span class="text-label brand">LESSON 03</span>
        <span class="journey-mock-badge is-pop">완료</span>
      </div>
      <p class="section-body-title">반복 업무 자동화 실습</p>
    </article>
  </div>
</div>
```

세 장을 `position: absolute`로 같은 자리에 겹치고 `z-index`로 순서를 세운다. 계단 겹침(38/22 · 74/44)은 **레이아웃 CSS의 기본 transform**에 있다.

### D · detail

`index.html`의 SkillPath 스텝이 이 연출을 쓴다(8개 분야 트랙 → STEP 학습 경로). `.journey-mock`과 함께 붙일 때는 `.journey-mock.mock-detail`로 세로 flex를 가로로 되돌려야 한다 — `education-journey.css`가 `mock-motion.css`보다 나중에 로드돼 `flex-direction: column`이 이긴다.

```html
<div class="preview-frame preview-frame--flush mock-detail" data-mock-motion="detail" aria-hidden="true">
  <div class="mock-detail-aside">
    <ul class="mock-detail-list">
      <li class="mock-detail-row">…스켈레톤…</li>
      <li class="mock-detail-row is-selected">
        <span class="journey-mock-check" style="border-color: var(--color-brand)"></span>
        <span class="journey-mock-item-name">반복 업무 자동화</span>
      </li>
    </ul>
  </div>
  <div class="mock-detail-panel is-panel">
    <span class="mock-detail-gauge">
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="none" stroke="var(--color-brand-tint-2)" stroke-width="7"/>
        <circle class="is-gauge" cx="32" cy="32" r="28" fill="none" stroke="var(--color-brand)"
                stroke-width="7" stroke-linecap="round" stroke-dasharray="176" stroke-dashoffset="56"/>
      </svg>
      <b class="text-caption strong">68%</b>
    </span>
    <ul class="journey-mock-list">
      <li class="journey-mock-item is-stagger">…</li>
      <li class="journey-mock-item is-stagger" style="animation-delay: .12s">…</li>
    </ul>
  </div>
</div>
```

게이지 `stroke-dasharray="176"`은 반지름 28의 둘레(2π×28≒176)다. 반지름을 바꾸면 이 값과 `--mock-gauge-to`도 함께 바꾼다. 계단식 등장은 `animation-delay`를 0.12s씩 준다.

### E · ticker

```html
<div class="preview-frame mock-screen mock-ticker" data-mock-motion="ticker" aria-hidden="true">
  <div class="journey-mock-head">
    <span class="journey-mock-title">이수 현황 대시보드</span>
    <span class="journey-mock-badge is-live"><i class="is-pulse"></i>실시간</span>
  </div>
  <div class="mock-ticker-stats">
    <article class="mock-ticker-stat">
      <span class="skeleton-line" style="width: 46px"></span>
      <b class="is-pop">248<em>명</em></b>
    </article>
    <article class="mock-ticker-stat">
      <span class="skeleton-line" style="width: 52px"></span>
      <b class="is-pop is-current" style="animation-delay: .1s">68<em>%</em></b>
    </article>
  </div>
  <div class="mock-ticker-chart">
    <span class="is-bar" style="--mock-bar-h: 42%"></span>
    <span class="is-bar is-current" style="--mock-bar-h: 88%"></span>
  </div>
  <ul class="journey-mock-list">
    <li class="journey-mock-item is-feed">
      <span class="journey-mock-avatar">이</span>
      <span class="journey-mock-item-name">이수 완료 · 업무 자동화 기초</span>
      <span class="text-caption strong">방금</span>
    </li>
  </ul>
</div>
```

강조할 막대·수치 하나에만 `is-current`를 준다. 막대의 `is-bar`는 무한 반복이 아니라 `both`로 한 번만 자란다 — 계속 자라면 차트가 불안해 보인다.

### F · stage

`index.html`의 PART 3에서 두 화면이 이 연출을 쓴다 — ① 정량적 관리(진단 → 교육 → 재진단)와
② 문화 정착(공유 허브 → 라이브러리 → 전사 확산). 두 화면이 같은 문법이라, 보는 사람이
①에서 배운 읽는 법을 ②에서 다시 배우지 않아도 된다.
기존 3열 카드(`.difference-screen-body`)를 그대로 쓰고 그 위에 등장 순서만 얹은 것이라,
**3열 레이아웃이 이미 있는 섹션이면 교체 비용이 A(focus) 다음으로 낮다.**

```html
<div class="difference-screen-body is-library" data-mock-motion="stage">
  <div class="difference-card is-step" style="--mock-step: 0">
    <div class="difference-step-head">
      <span class="difference-step-no">1</span>
      <span class="difference-card-label">공유 허브</span>
    </div>
    <span class="difference-step-desc">에이전트·프롬프트를 사내에 공유</span>

    <!-- 칸 안의 요소는 is-cue + --mock-cue-delay로 순서를 준다 -->
    <div class="difference-bubble is-me is-cue" style="--mock-cue-delay: .22s">…</div>

    <!-- 칸 오른쪽 경계에 걸터앉아 다음 칸으로 넘긴다 -->
    <span class="difference-flow-arrow is-flow">…화살표 SVG…</span>
  </div>
  <div class="difference-card is-step" style="--mock-step: 1">…</div>
  <div class="difference-card is-step" style="--mock-step: 2">…</div>
</div>
```

**이 연출만 무한 반복이 아니라 `both`로 한 번만 재생된다.** 단계는 쌓이는 것이라,
다 켜진 뒤 도로 사라지면 방금 읽은 순서가 부정되기 때문이다(사용자 확인됨).

그래서 **다시 보여줘야 하면 쓰는 쪽이 되감아야 한다** — CSS는 클래스를 다시 붙여도
끝난 애니메이션을 되감지 않는다. `js/difference-cycle.js`의 `replayStage()`가
화면을 활성화할 때 `animation: none` → reflow → 원복으로 되감는 것이 그 예다.
되감아 주는 스크립트가 없는 곳(디자인 가이드 카탈로그)에서는 진입 시 한 번
재생되고 완성 상태로 머문다.

## 새 연출을 추가할 때

1. `data-mock-motion`에 새 값을 만들고, `mock-motion.css`에 `[data-mock-motion="{값}"]` 블록으로 둔다.
2. 형태를 만드는 값(`transform`·`height`)은 레이아웃 CSS의 기본값으로, keyframes는 변주만.
3. 파일 맨 아래 `prefers-reduced-motion` 블록에 반드시 추가한다.
4. `codepresso-designsystem.html`의 09 섹션과 이 문서, [component-inventory.md](component-inventory.md)를 함께 갱신한다.
