# 컴포넌트 인벤토리 — 실제로 존재하는 모든 컴포넌트

`codepresso-designsystem.html`(컴포넌트 카탈로그)과 이 문서는 **양방향으로 동기화**한다. 이 문서는 CSS 파일·대표 클래스·재사용 경계를 정확히 기록하고, 디자인 가이드는 비개발자가 이름과 용도를 빠르게 확인할 수 있게 보여준다. 새 UI를 만들기 전에 이 표를 먼저 훑고, 없는 것만 새로 만든다 ([SKILL.md](SKILL.md) 0번 제1규칙).

## 가이드 동기화 규칙

- A 범용 컴포넌트와 B 공용 프리미티브는 디자인 가이드의 **04 · Components** 예시 또는 **전체 컴포넌트 인벤토리**에 반드시 표시한다.
- C 메인 전용 섹션은 가이드의 **메인 전용 참조** 목록에도 표시하되, 다른 페이지에서 클래스를 그대로 복사해 재사용하지 않는다.
- 컴포넌트를 추가·삭제·공용 승격하면 같은 변경에서 `codepresso-designsystem.html`과 이 문서를 함께 갱신한다.
- **`partials/` 조각(header·footer)은 컴포넌트가 아니라 마크업 조각이다** — 전 페이지가 그 파일 하나를 `data-include`로 불러온다([references/page-structure.md](references/page-structure.md)). 페이지 HTML에 `<header>`/`<footer>`를 직접 쓰지 않는다.

## A. 범용 컴포넌트 — `codepresso-designsystem.html`에 카탈로그됨

여러 페이지가 함께 쓰는 것들. `css/main.css`가 항상 로드하므로 어떤 페이지에서도 바로 쓸 수 있다.

| 컴포넌트 | CSS 파일 | 대표 클래스 | 용도 |
|---|---|---|---|
| Button | `button.css` | `.btn`, `.btn-primary`, `.btn-ghost`, `.btn-outline-inverse`, `.btn-lg` | 주요/보조 행동 버튼 |
| Link Arrow | `link.css` | `.link-arrow`, `.link-arrow-ink`, `.link-arrow-inverse`, `.link-underline` | 화살표가 붙는 **보조** 텍스트 링크. **색 modifier(`-ink`/`-inverse`) 필수** — 맨몸이면 hover 없는 검은 글씨가 된다. 카드·패널의 행동에는 이것이 아니라 `btn-ghost`를 쓴다 |
| Badge / Tag | `badge.css` | `.tag` | 콘텐츠 분류·상태 라벨 |
| Metric Card | `metric-card.css` | `.metric-card`, `__value`, `__label`, `__visual`, `__glow`, `__icon` | 숫자 성과 지표 카드 (`js/stat-reveal.js`와 짝) |
| Choice List | `choice-list.css` | `.choice-list`, `__item`, `__icon`, `__body`, `__arrow` | 여러 항목 중 하나를 고르는 리스트 |
| Preview Frame | `preview-frame.css` | `.preview-frame`, `__bar`, `__dots` | 제품/서비스 화면을 보여주는 목업 프레임 |
| Skeleton | `skeleton.css` | `.skeleton-block`, `.skeleton-line`, `.skeleton-stack` | 콘텐츠 대기/자리표시 상태 |
| Media Card | `media-card.css` | `.media-card`, `__media`, `__body`, `__meta`, `__title` | 썸네일 + 제목형 콘텐츠 카드 (뉴스·블로그 등) |
| Part Nav | `part-nav.css` | `.part-nav`, `-item`, `-indicator`, `--compact` | 두 파트를 잇는 캡슐형 세그먼트 내비 (`js/part-nav.js`와 짝) |
| Assessment Card | `assessment-card.css` | `.assessment-card`, `__head`, `__title`, `__meta`, `__action` | 자가진단/설문 시작 유도 카드 |
| Content Panel | `content-panel.css` | `.content-panel`, `__item`, `__intro`, `__visual`, `--compact` | 설명 + 큰 시각 요소를 한 판에 담는 패널 |
| Compare Panel | `compare-panel.css` | `.compare-panel`, `__item`(+`.is-after`), `__label`, `__title`, `__desc`, `__arrow` | "지금 → 바뀐 뒤" 두 상태를 좌우로 대비 |
| Timeline | `timeline.css` | `.timeline > li`, `__marker`, `__term`, `__body`, `__title`, `__desc` | 기간이 있는 단계를 세로로 잇는 진행 흐름 |
| FAQ List | `faq-list.css` | `.faq-list > details`, `__question`, `__icon`, `__answer` | 질문을 눌러 답을 펼치는 아코디언 (`<details>` native) |
| Catalog Board | `catalog-board.css` | `.catalog-board`, `__rail`, `__category`, `__count`, `__panel`, `__items > li` | 여러 분류의 항목 묶음을 대시보드처럼 한 판에 (`js/catalog-board.js`와 짝) |
| Product Mock | `product-mock.css` | `.journey-mock`(+`.mock-detail`·`.camp-ticker`), `-head`, `-title`, `-badge`(+`.is-live`), `-progress`, `-list`, `-item`(+`.is-current`·`.is-done`), `-check`, `-speaker`, `-avatar`, `-bubble`, `.journey-app*`(SkillFit 3단 앱 화면) | 제품 학습·강의 화면 목업 셸. index PART 1과 capability 04가 함께 쓴다(원래 index.css에 있던 712줄을 공용으로 올림). 목업 내부는 `opacity: 0`이 기본이고 **쓰는 페이지가 진입 신호로 띄워야 한다** — index는 `journey-stage.js`의 `.is-popping`, capability는 `.catalog-learn.is-visible`. 움직임은 `mock-motion.css`가 담당 |
| Site Footer | `site-footer.css` | `.site-footer`, `-inner`, `-brand`, `-tagline`, `-nav`, `-group`, `-group-title`, `-legal`, `-company`, `-copyright` | 전 페이지 공용 최하단 푸터. 마크업은 `partials/footer.html` 하나이며 `js/include-partials.js`가 삽입한다 |
| Mock Motion | `mock-motion.css` | `.mock-screen`, `[data-mock-motion]`(focus·replay·deck·detail·ticker·stage), `.mock-deck-*`, `.mock-detail-*`, `.is-quiet`, `.is-focus`, `.is-pop`, `.is-shimmer` | 제품 화면 목업을 실제로 돌아가는 화면처럼 연출 (CSS만, JS 없음). 목업 안은 드래그 선택이 꺼져 있다(`user-select: none`). deck·detail의 2단·겹침 뼈대도 여기 있다(index.html이 쓰면서 designsystem.css에서 올림). `stage`만 무한 반복이 아니라 한 번 재생이라, 다시 보여주려면 쓰는 쪽이 되감는다(`difference-cycle.js`의 `replayStage()`). 목업 안 텍스트는 14px 제약의 예외 — **9px는 하한이지 기본값이 아니다**(`--mock-text-title` 15px ~ `--mock-text-sm` 9px 4단). 6종 사용법은 [mock-motion-guide.md](mock-motion-guide.md) |

## B. 레이아웃/텍스트 프리미티브 — 카탈로그에 없지만 전 페이지 공용

| 컴포넌트 | CSS 파일 | 대표 클래스 | 용도 |
|---|---|---|---|
| Section 뼈대 | `layout.css` | `.section-wrap`, `.col`, `.row`, `.is-sticky`, `.section-title`, `.section-content`, `.section-header`, `.section-cta` | 모든 섹션의 기본 골격. [subpage-guide.md](subpage-guide.md) 3번 참고 |
| Section Body | `section-body.css` | `.section-body`, `-heading`, `-title`, `-subtitle`, `-description` | 카드/패널 내부 텍스트 묶음(제목+부제+설명) |
| Text 유틸리티 | `text.css` | `.text-label`, `.text-caption` 등 | 자잘한 보조 텍스트 스타일 |
| Surface | `surface.css` | `.surface-glass` 등 | 배경 표면(유리 질감 등) 유틸리티 |
| Summary Banner | `summary-banner.css` | `.summary-banner`, `.dark`, `.stats-light` | 한 줄 강조 배너, 통계 묶음 배경 |
| Feature Card | `feature-card.css` | `.feature-card`, `-icon-row`, `-icon`, `-arrow`, `-progress` | 아이콘+제목+설명형 카드 (자동 순환 가능, `js/feature-card-cycle.js`) |
| Card / Grid | `layout.css` | `.card`, `.grid`, `.flex-row` | 카탈로그 문서에서 쓰는 범용 카드/그리드 (서비스 페이지에도 쓸 수 있음) |
| Dot Line | `layout.css` | `.dot-line` | 섹션 사이 점선 구분선 |
| Fade Up | `layout.css` | `.fade-up`, `.is-visible` | 스크롤 진입 모션 (`js/fade-up.js`와 짝, [subpage-guide.md](subpage-guide.md) 4번) |
| Header/GNB | `header.css` | `.header`, `-inner`, `.nav`, `-item`, `-trigger`, `-panel`, `.header-actions` | 최상단 GNB — [subpage-guide.md](subpage-guide.md) 2번 참고 |

## C. index.html 전용 대형 섹션 컴포넌트 — 카탈로그에 없음

**메인 랜딩 한 곳에서만 쓰도록 만들어진 컴포넌트**다. 겉모습이 비슷해 보여도 서브페이지에서 그대로 재사용하기보다, 구조(아이콘+제목+설명+CTA 같은 패턴)만 참고해서 새 페이지 전용 CSS로 만드는 것이 맞다. 다만 완전히 같은 목적(예: 다른 페이지에도 "고객 도입 사례 슬라이더"가 또 필요함)이면 그때는 이 컴포넌트를 공용으로 승격할지 사용자에게 확인한다.

**섹션 클래스는 어휘표 이름을 쓴다**([SKILL.md](SKILL.md) 4번 어휘표). 아래 "섹션 클래스"가
현재 마크업의 실제 이름이고, 안쪽 요소명(`difference-*`·`journey-mock-*` 등)은
`codepresso-designsystem.html`이 함께 쓰고 있어 옛 이름을 유지한다.

| 섹션 클래스 | 역할 | 정의 위치 | 짝이 되는 JS |
|---|---|---|---|
| `hero` | 첫 화면 | `css/pages/index.css` | — |
| `outcomes` | 도입 사례 슬라이더(안쪽은 `proof-card`) | `css/pages/index.css` | `js/proof-card-slider.js` |
| `features` | 3단 카드 자동 순환 | `css/pages/index.css` | `js/feature-card-cycle.js` |
| `journey` | PART 1 교육 여정 | `css/pages/index.css` | `js/journey-stage.js` |
| `diagnosis` | PART 2 진단 쇼케이스 | `css/pages/index.css` | `js/journey-stage.js` |
| `difference` | PART 3 차별점 3화면 순환 | `css/pages/index.css` | `js/difference-cycle.js` |
| `insight` | 콘텐츠·아티클 | `css/pages/index.css` | — |
| `cta-final` | 최하단 전환 (공용 — `components/ui/`) | `css/main.css` | — |
| Floating CTA | `floating-cta.css` | `.floating-cta`, `-link`, `-mock`, `-copy`, `-action`, `-close`, `.is-shown` | hero CTA가 화면 밖으로 나가면 우측 하단에 따라붙는 배너. `js/floating-cta.js`와 짝 (`data-floating-cta="{기준 요소 id}"`) |

**`index.css`는 스코프로 감싸지 않는다** — `designsystem.css`가 통째로
`@import`해서 카탈로그 페이지가 같은 규칙을 쓰기 때문이다. 대신 `ax-build.css`·
`capability.css`는 각각 `.ax-build`·`.capability` 스코프로 감싸, 여러 페이지가
같은 `hero`·`features`·`outcomes` 이름을 써도 서로에게 새지 않는다.
모든 페이지가 함께 로드하는 `mobile.css`에서도 페이지 전용 블록에 스코프를 붙인다.

## D. capability.html(역량 진단·교육) 전용 섹션 컴포넌트

`css/pages/capability.css`가 정의하고 `.capability` 스코프 안에만 있다. 서브페이지의
섹션 구성은 대부분 공용 컴포넌트 조합으로 해결되므로, 아래는 **공용 컴포넌트로
표현되지 않은 것만** 남은 목록이다.

| 클래스 | 역할 | 재사용한 공용 컴포넌트 |
|---|---|---|
| `hero-questions` | hero의 질문 카드 3개(유리 표면) | — (수치가 없어 `metric-card` 부적합) |
| `loop` · `loop-arrow` | 01 Growth Loop 4단계 순환 + 경계 화살표 | 화살표 방식은 ax-build `.shift-arrow`와 동일 |
| `product-grid` · `product-points` | 03·04 제품 카드 배치와 특징 목록 | `content-panel`(카드 자체) |
| `analyze-grid` · `analyze-points` | 06 분석·보고 2블록 | `content-panel` |
| `analyze-mock-*` | 06 대시보드·성과 보고 목업(직무×역량 히트맵 · 전후 상승폭) | `preview-frame` · `mock-screen` · `journey-mock-badge` · `data-mock-motion="ticker"` |
| `learn-index` | 04 sticky 좌측에서 "지금 보는 제품"을 표시하는 세로 인덱스 | — (`part-nav`는 상위 파트용 가로 캡슐이라 형태·의미가 다름). `js/section-index.js`와 짝 |
| `repurchase-gauge` | 07 재구매율 80%를 링으로 한 번 더 말하는 게이지 | `metric-card__visual` 슬롯 |
| `blend-combo` | 05 가운데 단계의 하위 제품 배지 | `timeline`(단계 골격) · `tag` |
| `bridge-inner` · `bridge-title` | 도구 연결 브릿지 좌우 배치 | `summary-banner.dark` |

**시간차 등장(stagger)은 이 페이지 CSS가 소유한다** — `.capability .fade-up.is-visible`
아래에서 `loop`·`product-grid`·`analyze-grid`와 그 안쪽 목록에 `transition-delay`를
단계로 준다. `timeline`은 컴포넌트가 이미 같은 방식을 갖고 있어 건드리지 않는다.

## 판단 순서 (요약)

> **표의 한 줄 설명만 보고 "구조가 안 맞다"고 판단하지 않는다.** 후보를 찾았으면 그 CSS 파일을 열어 상단의 Markup API 주석을 실제로 읽는다 — 대개 필요한 구조가 그 안에 이미 있다. (실패 사례는 [references/reuse-playbook.md](references/reuse-playbook.md) 함정 ①)

1. 만들려는 UI가 **A(범용, 카탈로그됨)** 에 있는가 → 그대로 재사용.
2. **B(레이아웃/텍스트 프리미티브)** 에 있는가 → 그대로 재사용.
3. **C(index 전용)** 와 비슷한가 → 구조만 참고해서 새 컴포넌트로 만들되, `css/pages/{새페이지}.css`에 둔다. index 전용 클래스를 그대로 가져다 쓰지 않는다(다른 페이지 CSS가 로드 안 되어 스타일이 깨진다).
4. 어디에도 없다 → 새로 만들고, 범용이 될 만하면 [SKILL.md](SKILL.md) 0번 규칙대로 `codepresso-designsystem.html`에도 등록한다.
