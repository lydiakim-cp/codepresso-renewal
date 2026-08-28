# 네이밍 — 섹션 안쪽·공용 컴포넌트·상태·JS 훅

> [SKILL.md](../SKILL.md)에 3층 원칙과 섹션 어휘표가 있다. 이 문서는 그 안쪽 세부다.

### 섹션 안쪽 요소 — 짧게, 역할이 드러나게

스코프와 섹션이 이미 맥락을 말해 주므로 **안쪽 이름에 페이지명·섹션명을 반복하지 않는다.**

```css
/* 나쁨 — 맥락을 이름이 다시 반복한다 */
.ax-build .ax-build-process-step-icon { }

/* 좋음 */
.ax-build .process .step-icon { }
```

- **`:nth-child`를 쓰게 되는 순간이 클래스를 달아야 한다는 신호다.** 순서에 의존하는
  선택자는 마크업이 바뀌면 조용히 틀어진다.
- **태그로 유일하면 클래스를 생략한다** — `.process h2`, `.process .step-body p`.
- **한 부모 안의 형제가 전부 같은 역할이면 자식 클래스를 달지 않는다.**
  `부모 > 태그` 자손 선택자로 충분하다(사용자 확인됨). 목록 항목마다 같은 클래스를
  반복하는 것은 마크업만 길어지고 얻는 것이 없다.

  ```html
  <!-- 나쁨 — li마다 같은 클래스를 반복 -->
  <ul class="catalog-board__items">
    <li class="catalog-board__item">회의록 자동 작성</li>
    <li class="catalog-board__item">태스크 관리</li>
  </ul>

  <!-- 좋음 -->
  <ul class="catalog-board__items">
    <li>회의록 자동 작성</li>
    <li>태스크 관리</li>
  </ul>
  ```

  ```css
  .catalog-board__items > li { … }
  .catalog-board__items > li:nth-child(2) { animation-delay: .03s; }
  ```

  **단 아래 셋은 클래스를 유지한다:**
  - **JS가 `querySelectorAll('.그것')`로 잡는 것** — `feature-card`, `metric-card`,
    `proof-card`. 훅을 `data-*`로 옮기기 전에는 클래스를 지우면 동작이 죽는다.
  - **형제마다 모디파이어가 달라지는 것** — `difference-card.is-step`처럼
    자식마다 클래스가 다르면 "전부 같은 역할"이 아니다.
  - **같은 부모 밑에 그 역할이 아닌 같은 태그가 섞일 수 있는 것.**

  **카탈로그에 문서화된 공용 컴포넌트도 예외가 아니다** — `timeline > li`,
  `faq-list > details`, `catalog-board__items > li`가 그렇게 바뀌었다.
  다만 그 컴포넌트의 **Markup API 주석과 `codepresso-designsystem.html`의
  클래스 표기를 같은 변경에서 함께 고친다.** 안 고치면 다음 사람이 카탈로그를
  보고 없어진 클래스를 다시 쓴다.
- **`.title` `.item` `.card`처럼 흔한 한 단어는 피한다.** 그 섹션에 나중에 공용
  컴포넌트를 넣었을 때 오염된다. `.step-icon` `.scale-term`처럼 역할이 드러나는
  두 단어를 쓴다.

### 공용 컴포넌트는 BEM `__`를 유지한다

| 방식 | 쓰는 대상 | 예시 |
|---|---|---|
| **BEM (`__`)** | **여러 페이지가 공유하는 범용 컴포넌트** (`components/ui/`, `main.css`가 로드) | `metric-card__value`, `choice-list__item`, `content-panel__intro`, `preview-frame__bar` |
| **섹션 어휘 + 자손** | **섹션과 그 안쪽** (`components/sections/`, `pages/`) | `.process .step-icon`, `.outcomes .shift` |

이 비대칭이 규칙의 핵심이다 — **공용 컴포넌트는 어느 섹션 안에 놓일지 모르니
자기 이름만으로 서야 하고, 섹션은 자기 안에서만 사니 맥락을 빌려 쓸 수 있다.**

- 범용 컴포넌트를 만들면 파일 상단에 "Markup API" 주석으로 구조를 남긴다
  (`metric-card.css` 상단이 표준 예시).
- 판단이 애매하면 [component-inventory.md](../component-inventory.md)에서 그것이
  A/B(공용)인지 C(섹션)인지 보고 맞춘다.

### 기존 이름은 그 섹션을 고칠 때 함께 정리한다

지금 코드에는 옛 방식(`ax-build-process-step-icon`, `difference-legend-progress-bar`)이
남아 있다. **동작하는 CSS를 이름만 바꾸려고 건드리지 않는다** — 마크업·CSS·JS 3자
정합성을 다시 맞춰야 하는데 얻는 것은 이름 길이뿐이다.

그 섹션을 **어차피 재작성할 때** 새 규칙으로 옮긴다. 그때가 개명 비용이 0에 가까운
유일한 시점이다.

### Modifier — BEM `--`를 쓰지 않고 별도 클래스를 병기한다

이 프로젝트는 `--modifier` 표기를 쓰지 않는다(`part-nav--compact` 하나만 예외적으로 존재). **변형은 클래스를 나란히 붙여 표현한다.**

```html
<!-- 이 프로젝트 방식 -->
<p class="summary-banner dark">…</p>
<p class="text-label brand">…</p>
<span class="text-caption strong">…</span>
```

```css
.summary-banner { /* 공통 */ }
.summary-banner.dark { background: …; }   /* 달라지는 값만 */
```

### 상태 클래스 — `is-` 접두사

JS가 토글하는 상태는 **반드시 `is-` 접두사**를 쓴다. `active`, `selected`, `open` 같은 접두사 없는 이름을 쓰지 않는다.

현재 쓰이는 것: `is-active`, `is-visible`, `is-open`, `is-current`, `is-scrolled`, `is-hidden`, `is-sticky`, `is-waiting`, `is-exiting`, `is-animating`, `is-done`, `is-live` 등.

- 새 상태가 필요하면 위 목록에서 **같은 의미의 것을 먼저 찾아 재사용**한다(0번 제1규칙). 예: "현재 선택됨"은 `is-active`가 이미 있으므로 `is-selected`를 새로 만들지 않는다.
- 어떤 JS가 그 클래스를 붙이는지 컴포넌트 CSS 상단에 한 줄 주석으로 남긴다(`metric-card.css` 예시: `상태 클래스 .is-visible은 stat-reveal.js가 붙인다`).

### JS 훅 — `data-*` 속성

JS가 요소를 찾을 때는 클래스가 아니라 `data-*` 속성을 쓴다. 스타일용 클래스와 동작용 훅을 분리해, CSS를 정리해도 JS가 깨지지 않게 한다.

```html
<div class="feature-card-grid" data-feature-cycle data-interval="5000">
```

- 명명은 `data-{기능}` 또는 `data-{기능}-{부분}` (`data-journey-stage`, `data-journey-track-step`).
- **`data-*` 속성을 지우거나 이름을 바꿀 때는 `js/`에서 반드시 검색해 확인**한다([cleanup.md](cleanup.md) "정리 후 확인").

