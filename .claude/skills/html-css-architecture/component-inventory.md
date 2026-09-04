# 컴포넌트 인벤토리 — 실제로 존재하는 모든 컴포넌트

`codepresso-designsystem.html`(컴포넌트 카탈로그)과 이 문서는 **양방향으로 동기화**한다. 이 문서는 CSS 파일·대표 클래스·재사용 경계를 정확히 기록하고, 디자인 가이드는 비개발자가 이름과 용도를 빠르게 확인할 수 있게 보여준다. 새 UI를 만들기 전에 이 표를 먼저 훑고, 없는 것만 새로 만든다 ([SKILL.md](SKILL.md) 0번 제1규칙).

## 가이드 동기화 규칙

- A 범용 컴포넌트와 B 공용 프리미티브는 디자인 가이드의 **04 · Components** 예시 또는 **전체 컴포넌트 인벤토리**에 반드시 표시한다.
- C 메인 전용 섹션은 가이드의 **메인 전용 참조** 목록에도 표시하되, 다른 페이지에서 클래스를 그대로 복사해 재사용하지 않는다.
- 컴포넌트를 추가·삭제·공용 승격하면 같은 변경에서 `codepresso-designsystem.html`과 이 문서를 함께 갱신한다.
- **`partials/` 조각(header·footer)은 컴포넌트가 아니라 마크업 조각이다** — 전 페이지가 그 파일 하나를 `data-include`로 불러온다([references/page-structure.md](references/page-structure.md)). 페이지 HTML에 `<header>`/`<footer>`를 직접 쓰지 않는다.

## 콘텐츠 → 컴포넌트 역인덱스 — 이름보다 먼저 고르는 표

아래 표들은 "이게 뭔지"를 알려주고, 이 표는 **"내 콘텐츠를 어디에 담는지"**를 알려준다.
[SKILL.md](SKILL.md) 4번 어휘표가 섹션 **이름**을 정하고, 이 표가 그 안에 들어갈
**컴포넌트**를 정한다. 둘은 짝이며, 이 표에 있는 것을 골랐으면 새로 만들지 않는다.

| 담을 콘텐츠의 형태 | 고르는 것 | 고르지 않는 것 |
|---|---|---|
| 기능·특징 3~4개, 아이콘 + 한 줄 설명 | `feature-card` (자동 순환은 `data-feature-cycle`) | `content-panel` — 큰 시각 요소가 없으면 과하다 |
| 분류(카테고리)가 있는 20개 이상의 목록 | `tab-catalog` (좌측 rail이 분류, panel이 항목) | 카드 그리드를 새로 만들기 — `__items`가 그리드 + stagger를 이미 갖고 있다 |
| 순서가 있고 **기간·날짜가 붙는** 단계 | `timeline` | `cycle` — 기간 칸이 없다 |
| 순서가 있고 기간이 없는 N단계(선형·순환) | `cycle` (`--cycle-columns`, 순환 결론 칸은 `.is-return`) | `process-steps` — ax-build·ax-grow(다크) 전용이다 |
| 두 갈래 중 하나를 고르게 한다 | `content-panel` + 공용 `start-card` (ax-grow 07 · why-codepresso 06 · axpresso 01) | `compare-panel` — 우열이 아니라 선택지일 때는 대비가 아니다 |
| 지금 vs 바뀐 뒤 (우열이 있는 대비) | `compare-panel` | `content-panel` 2개 나열 |
| 여러 항목 중 하나를 눌러 들어간다 | `choice-list` (아이콘은 공용 `.icon-box`) | `feature-card` — 클릭 대상이면 리스트가 맞다 |
| 자랑할 성과 숫자 | `metric-card` (+ `[data-stat-reveal]`) | 나쁜 수치에 쓰지 않는다 — 큰 숫자+아이콘은 자랑으로 읽힌다 |
| 고객사 로고 + 성과 문장 | `outcome-card` (`.outcome-list > li`) | `media-card` — 로고는 잘리면 안 되므로 contain이다 |
| 스크롤에 따라 판 안 내용만 바뀐다 | `journey-stage` (+`content-panel`·`surface-glass`) | 섹션을 여러 개로 쪼개기 |
| 제품 화면을 보여준다 | `preview-frame` + `product-mock` + `mock-motion` ([mock-motion-guide.md](mock-motion-guide.md)) | 스크린샷 이미지 — 움직이지 않으면 죽은 화면이 된다 |
| 썸네일 + 제목형 콘텐츠(뉴스·아티클) | `media-card` (+`tag.is-solid`) | `content-panel` |
| 한 문장만 던지는 강조 — 화면 끝까지 | `statement` (페이지당 1곳) | `summary-banner.dark` — 1248px 안에서 잘리는 배너다 |
| 섹션의 결론 문장 한 줄 — 본문 폭 안 | `summary-banner`(+`.dark`) | `statement` — 전체 폭은 페이지당 1곳뿐 |
| 질문과 답 | `faq-list` (`<details>` native) | 아코디언 새로 만들기 |
| 설명 + 큰 시각 요소를 한 판에 | `content-panel`(+`--compact`) | 카드 새로 만들기 |
| 자가진단·설문 시작 유도 | `assessment-card` | `cta-final` — 최하단 전환은 따로다 |
| 두 파트를 오가는 내비 / 목록 필터 | `part-nav`(+`--compact`, `js/part-nav.js` 또는 `js/case-filter.js`) | 탭 UI 새로 만들기 |

**표에 없는 형태일 때** — 가장 가까운 줄을 고르고 안쪽만 덮는다. 그래도 아니면
[references/reuse-playbook.md](references/reuse-playbook.md)를 펴고, 그래도 아니면
새로 만들지 말고 **사용자에게 묻는다.**

## 권장 글자 수 — 문구를 바꿀 사람을 위한 상한

마케팅팀이 문구를 직접 고치는 것을 전제로 한 사이트다. 아래는 **현재 8개 페이지의
실측 분포(p90)** 로 뽑은 상한이며, 넘으면 줄 수가 늘어 카드 높이·형제 열 아래선이
어긋난다. 넘겨야 하면 `<br data-break="desktop">`로 줄바꿈 위치를 직접 정한다.

| 자리 | 권장 상한 | 실측(중앙값 / 최대) | 넘기면 |
|---|---|---|---|
| `h2` 섹션 제목 | 28자 | 20 / 38 | 3줄이 되어 섹션 상단이 밀린다. 38자는 `<br>`로 2줄을 고정한 경우다 |
| `h3` 카드 제목 | 24자 | 10 / 48 | 카드마다 제목 줄 수가 달라져 본문 시작선이 어긋난다 |
| `.desc` 섹션 설명 | 74자 | 55 / 84 | 2줄까지는 안전, 3줄이면 제목과의 위계가 흐려진다 |
| `.tag` eyebrow | 22자 | 13 / 24 | 캡슐이 두 줄로 깨진다 |
| `.text-label` 라벨 | 20자 | 10 / 20 | 수치 카드에서 값보다 라벨이 넓어진다 |

목업 안 텍스트는 이 표의 예외다(`--mock-text-*` 4단, [mock-motion-guide.md](mock-motion-guide.md)).

## A. 범용 컴포넌트 — `codepresso-designsystem.html`에 카탈로그됨

여러 페이지가 함께 쓰는 것들. `css/main.css`가 항상 로드하므로 어떤 페이지에서도 바로 쓸 수 있다.

| 컴포넌트 | CSS 파일 | 대표 클래스 | 용도 |
|---|---|---|---|
| Button | `button.css` | `.btn`, `.btn-primary`, `.btn-ghost`, `.btn-outline-inverse`, `.btn-lg` | 주요/보조 행동 버튼 |
| Link Arrow | `link.css` | `.link-arrow`, `.link-arrow-ink`, `.link-arrow-inverse`, `.link-underline` | 화살표가 붙는 **보조** 텍스트 링크. **색 modifier(`-ink`/`-inverse`) 필수** — 맨몸이면 hover 없는 검은 글씨가 된다. 카드·패널의 행동에는 이것이 아니라 `btn-ghost`를 쓴다 |
| Icon Size | `icon.css` | `.icon-sm`(20) · `.icon-md`(24) · `.icon-lg`(32) · `.icon-box`(48, 이미지용) | **아이콘 크기는 이 세 클래스로만 정한다.** 감싼 span에 붙이면 안쪽 svg·img가 따라온다. 제품 로고처럼 이미지를 담는 48px 박스는 `.icon-box`(안쪽 `img`가 contain으로 채워진다) — choice-list·skills 제품 카드가 함께 쓴다. 배경 있는 아이콘 박스(`--icon-box` 48 / `--icon-box-sm` 32)는 다른 개념이라 박스가 아니라 안쪽 그림에 붙인다. **박스와 글리프는 짝** — sm↔32/radius-sm, md↔48/radius-md |
| Badge / Tag | `badge.css` | `.tag`(+`.is-solid`) | 콘텐츠 분류·상태 라벨. `is-solid`는 브랜드 파랑을 채운 11px 작은 라벨(썸네일 있는 미디어 카드용) |
| Hero | `hero.css` | `.hero`, `.hero-wrap`, `.hero-copy`, `.hero-title`, `.hero-desc`, `.hero-actions`, `.hero-questions`(+`surface-glass`), `.hero-facts`(+`surface-glass`) | 서브페이지 첫 화면 공통 골격(태그+h1+desc+CTA 중앙정렬, sunken 배경, bg-line2 텍스처, 상단 광원). 보조 정보 밴드는 유리 띠 1장 안에 세로 구분선으로 나뉜 3칸이 표준 외피다 — 질문형은 `.hero-questions`(아이콘+제목+설명), 수치형은 `.hero-facts`(**칸이 `li.metric-card`** — 전용 클래스를 두지 않고 `metric-card__value`+`.unit`+`metric-card__label.text-label` 슬롯을 그대로 쓴다. 유리 띠가 면을 가지므로 카드 껍데기(sunken 면·min-height·padding)는 `.hero-facts li.metric-card`가 무력화하고, 크기만 20/14/14px로 한 단 낮춘다 — hero는 h1이 주역이라 `metric-card` 기본값 40/20보다 작다. 칸이 `.metric-card`라 `stat-reveal.js`의 기본 대상에 그대로 걸린다). 독립 카드로 늘어놓지 않는다. 보조 콘텐츠 내용 자체는 페이지 CSS가 `.hero-wrap` 안에 이어 붙인다. **hero 안에서는 그림자를 쓰지 않는다**(hover 제외) — `.hero-questions`/`.hero-facts`가 `surface-glass`의 평소 그림자를 무력화하는 이유. 배경 텍스처 위치는 `--hero-texture-position`으로 페이지마다 반복을 피한다 |
| Metric Card | `metric-card.css` | `.metric-card`, `__value`, `__label`, `__visual`, `__glow`, `__icon` | 숫자 **성과** 지표 카드 (`js/stat-reveal.js`와 짝). **나쁜 수치에는 쓰지 않는다** — 큰 숫자+아이콘이 자랑으로 읽힌다(difference 01이 `problem-card`를 따로 만든 이유). `stat-reveal.js`는 그룹에 `data-stat-card="{선택자}"`를 주면 다른 카드도 카운트업한다. **껍데기 없이 슬롯만 쓸 수도 있다** — hero의 `.hero-facts`가 유리 띠 안에서 카드 면·min-height·padding을 무력화하고 타이포·카운트업 슬롯만 물려받는다 |
| Choice List | `choice-list.css` | `.choice-list`, `__item`, `__body`, `__arrow` (아이콘은 공용 `.icon-box`) | 여러 항목 중 하나를 고르는 리스트 |
| Preview Frame | `preview-frame.css` | `.preview-frame`, `__bar`, `__dots` | 제품/서비스 화면을 보여주는 목업 프레임 |
| Skeleton | `skeleton.css` | `.skeleton-block`, `.skeleton-line`, `.skeleton-stack` | 콘텐츠 대기/자리표시 상태 |
| Media Card | `media-card.css` | `.media-card`, `__media`, `__body`, `__meta`, `__title` | 썸네일 + 제목형 콘텐츠 카드 (뉴스·블로그 등) |
| Outcome Card | `outcome-card.css` | `.outcome-list > li`, `.outcome-logo`(+`--tall`·`--invert`), `.outcome-body`, `.outcome-client`, `.outcome-industry` | 고객사 로고 판 + 성과 카드. 로고는 고정 높이(132px) 판 안에서 `object-fit: contain`(잘리면 안 되므로 `media-card`의 cover와 다름). cases.html·skillcertify.html이 공용으로 쓰고, 그리드 열 수·카드 테두리/hover 색·본문 gap·`outcome-headline` 등 수치 표시부는 페이지 스코프가 정한다. `outcome-shift`·`outcome-before`·`outcome-arrow`는 ax-build·cases가 같은 값으로 중복돼 컴포넌트로 올렸다 |
| Part Nav | `part-nav.css` | `.part-nav`, `-item`, `-indicator`, `--compact` | 두 파트를 잇는 캡슐형 세그먼트 내비 (`js/part-nav.js`와 짝) |
| Assessment Card | `assessment-card.css` | `.assessment-card`, `__head`, `__title`, `__meta`, `__action` | 자가진단/설문 시작 유도 카드 |
| Content Panel | `content-panel.css` | `.content-panel`, `__item`, `__intro`, `__visual`, `--compact` | 설명 + 큰 시각 요소를 한 판에 담는 패널 |
| Product Feature | `product-feature.css` | `.product-feature`, `.feature-copy`, `.is-sunken`(공용 — `layout.css`) | 제품 기능 하나를 좌 설명 · 우 화면으로 눕히는 2단 섹션. 골격(2단 정렬·설명 칸 폭·본문 간격)만 갖고 **화면 칸은 쓰는 페이지가 고른다**(현재 skillcertify·skillfit 모두 `content-panel bg`). 원래 skillcertify.css에만 있던 것을 skillfit이 같은 값을 쓰게 되어 공용으로 올렸다 |
| Pain Card | `pain-card.css` | `.pain-grid`(열 수는 `--pain-columns`, 기본 3), `.pain-card`(+`--detail`), `.pain-card__icon`, `.pain-card__title` | "이런 고민이 있다면"을 한 줄씩 담는 문제 제기 카드. 뒤의 해결책이 답으로 읽히게 하는 자리다. **자랑하는 수치가 아니므로 `metric-card`를 쓰지 않는다.** 한 줄로 문제가 안 읽히면 `--detail`(아이콘 + 소제목, 아이콘만 critical 톤)을 쓴다 — 카드에 색 띠는 두르지 않는다. skillcertify(기본)·skillfit(--detail) 공용 |
| Start Card | `start-card.css` | `.start-grid`(열 수는 `--start-columns`, 기본 2), `.start-card`, `.start-icon`, `.start-desc` | content-panel을 "둘 중 어디서 시작할지" 고르는 갈래 카드로 배치하는 골격. 우열이 아니라 선택지일 때 쓴다(우열 대비는 `compare-panel`). **면(배경)만 쓰는 페이지가 정한다** — ax-grow 07·why-codepresso 06·axpresso 01(다크 box)·skills 04(수치 4열)가 같은 골격을 공유한다 |
| Journey Stage | `journey-stage.css` | `.journey-stage`, `.journey-track`, `.journey-viewport`, `.journey-step`(+`.is-active`) | **스크롤로 판 안의 내용만 교차 페이드**되는 스테이지. 보이지 않는 트랙이 스크롤 길이를 만들고 `js/journey-stage.js`가 활성 스텝을 옮긴다. 판은 `.content-panel` + `.surface-glass` 조합. 좌측 `.choice-list__item`에 `data-journey-program="n"`을 주면 표시이자 이동 버튼이 된다. index PART 1·PART 2(진단 쇼케이스)와 skills 04가 함께 쓴다. 페이지는 `--stage-panel-height`(판 실측 높이)와 `--stage-tail`만 넘긴다 — data 접두사만 다르면(`data-diagnosis-*`) 같은 컴포넌트로 두 번째 스테이지를 만든다 |
| Compare Panel | `compare-panel.css` | `.compare-panel`, `__item`(+`.is-after`), `__label`, `__title`, `__desc`, `__arrow` | "지금 → 바뀐 뒤" 두 상태를 좌우로 대비 |
| Timeline | `timeline.css` | `.timeline > li`, `__marker`, `__term`, `__body`, `__title`, `__desc` | 기간이 있는 단계를 세로로 잇는 진행 흐름 |
| Cycle | `cycle.css` | `.cycle > li`(+`.is-return`·`.blue`·`.dark`), `.cycle-head`, `.cycle-no`, `.cycle-en`, `.cycle-desc`, `.cycle-arrow`, `.cycle-note` | N단계 순서/순환을 가로 칸 + 경계 화살표로. 열 수는 `--cycle-columns`(기본 4). 순환형 결론 칸은 `.is-return`(유리 표면), 화살표는 반투명 글래스모피즘 노드. 칸별 컬러 테마는 `.blue`(하늘색 카드+브랜드 파랑 번호)·`.dark`(잉크 카드+흰 번호), 무클래스는 기본(흰 카드+하늘색 번호). why-codepresso.html 03(4단계 순환)·skillcertify.html 05(5단계 선형)·cases.html 공통점(3단계 선형)이 함께 쓰며 공용 승격 — 선형 페이지 둘 다 결론 칸도 기본 배경 그대로 둔다 |
| FAQ List | `faq-list.css` | `.faq-list > details`, `__question`, `__icon`, `__answer` | 질문을 눌러 답을 펼치는 아코디언 (`<details>` native) |
| Catalog Board | `catalog-board.css` | `.tab-catalog`, `__rail`, `__category`, `__count`, `__panel`, `__items > li` | 여러 분류의 항목 묶음을 대시보드처럼 한 판에 (`js/catalog-board.js`와 짝). **`__items`는 auto-fill 그리드 + nth-child 진입 stagger를 이미 갖고 있다** — 카드 나열이 필요하면 새로 만들지 말고 이걸 쓰고 `li` 안쪽만 덮는다(difference 07이 그렇게 했다) |
| Product Mock | `product-mock.css` | `.journey-mock`(+`.mock-detail`·`.camp-ticker`), `-head`, `-title`, `-badge`(+`.is-live`), `-progress`, `-list`, `-item`(+`.is-current`·`.is-done`), `-check`, `-speaker`, `-avatar`, `-bubble`, `.journey-app*`(SkillFit 3단 앱 화면) | 제품 학습·강의 화면 목업 셸. index PART 1과 skills 04가 함께 쓴다(원래 index.css에 있던 712줄을 공용으로 올림). 목업 내부는 `opacity: 0`이 기본이고 **쓰는 페이지가 진입 신호로 띄워야 한다** — index는 `journey-stage.js`의 `.is-popping`, skills는 `.catalog-learn.is-visible`. 움직임은 `mock-motion.css`가 담당 |
| Statement | `statement.css` | `.statement`(+`.is-ink`), `-inner`, `-eyebrow`, `-title`, `-desc` | 한 문장만 던지는 **전체 폭 강조 띠**. 섹션 자체가 배경을 칠해 화면 끝까지 닿는다(`summary-banner.dark`는 1248px 안에서 잘리는 배너라 역할이 다르다). 어두운 판 위 글씨는 흰색. **페이지마다 본문 중간 강조 1곳**의 표준 후보 — index·cases가 쓴다 |
| Site Footer | `site-footer.css` | `.site-footer`, `-inner`, `-brand`, `-tagline`, `-nav`, `-group`, `-group-title`, `-legal`, `-company`, `-copyright` | 전 페이지 공용 최하단 푸터. 마크업은 `partials/footer.html` 하나이며 `js/include-partials.js`가 삽입한다 |
| Mock Motion | `mock-motion.css` | `.mock-screen`, `[data-mock-motion]`(focus·replay·deck·detail·ticker·stage·run), `.mock-deck-*`, `.mock-detail-*`, `.is-quiet`, `.is-focus`, `.is-pop`, `.is-shimmer`, `.is-task`/`.is-line`/`.is-hold`(run) | 제품 화면 목업을 실제로 돌아가는 화면처럼 연출 (CSS만, JS 없음). 목업 안은 드래그 선택이 꺼져 있다(`user-select: none`). deck·detail의 2단·겹침 뼈대도 여기 있다(index.html이 쓰면서 designsystem.css에서 올림). `stage`·`run`은 무한 반복이 아니라 한 번 재생이라, 다시 보여주려면 쓰는 쪽이 되감는다(`difference-cycle.js`의 `replayStage()`). `run`은 작업 큐를 Agent가 처리하고 마지막 1건만 `is-hold`로 멈추는 연출(ax-build 01) — 뼈대(`.run-*`)는 페이지 CSS가 갖고 여기는 움직임만 정의한다. 목업 안 텍스트는 14px 제약의 예외 — **9px는 하한이지 기본값이 아니다**(`--mock-text-title` 15px ~ `--mock-text-sm` 9px 4단). 7종 사용법은 [mock-motion-guide.md](mock-motion-guide.md) |

## B. 레이아웃/텍스트 프리미티브 — 카탈로그에 없지만 전 페이지 공용

| 컴포넌트 | CSS 파일 | 대표 클래스 | 용도 |
|---|---|---|---|
| Section 뼈대 | `layout.css` | `.section-wrap`, `.col`, `.row`, `.is-sticky`, `.section-title`, `.section-content`, `.section-header`, `.section-cta` | 모든 섹션의 기본 골격. [subpage-guide.md](subpage-guide.md) 3번 참고 |
| Section Body | `section-body.css` | `.section-body`, `-heading`, `-title`, `-subtitle`, `-description` | 카드/패널 내부 텍스트 묶음(제목+부제+설명) |
| Text 유틸리티 | `text.css` | `.text-label`, `.text-caption`, `.desc`, `.description` 등 | 자잘한 보조 텍스트 스타일. **14px/ink-light 카드 설명은 `.description` 하나로 통일**(cycle·problem·industry 카드가 각자 갖고 있던 같은 3줄을 걷어냈다) |
| Surface | `surface.css` | `.surface-glass` 등 | 배경 표면(유리 질감 등) 유틸리티 |
| Summary Banner | `summary-banner.css` | `.summary-banner`, `.dark`, `.stats-light`, `.bridge-inner`/`.bridge-copy`/`.bridge-title`/`.bridge-desc` | 한 줄 강조 배너, 통계 묶음 배경. **브릿지 변형** — 어두운 배너 안에서 좌 문구 · 우 CTA로 갈라 다음 페이지로 넘긴다(skills 07 · aifluent 06이 같은 값을 쓰고 있어 페이지 스코프에서 공용으로 올렸다). 진입 시 CTA 화살표가 두 번 튀는 연출과 `prefers-reduced-motion` 대응도 컴포넌트가 갖는다 |
| Feature Card | `feature-card.css` | `.feature-card`, `-icon-row`, `-icon`, `-arrow`, `-progress` | 아이콘+제목+설명형 카드 (자동 순환 가능, `js/feature-card-cycle.js`) |
| Card / Grid | `layout.css` | `.card`, `.grid`, `.flex-row` | 카탈로그 문서에서 쓰는 범용 카드/그리드 (서비스 페이지에도 쓸 수 있음) |
| Dot Line | `layout.css` | `.dot-line` | 섹션 사이 점선 구분선 |
| Fade Up | `layout.css` | `.fade-up`, `.is-visible` | 스크롤 진입 모션 (`js/fade-up.js`와 짝, [subpage-guide.md](subpage-guide.md) 4번) |
| Header/GNB | `header.css` | `.header`, `-inner`, `.nav`, `-item`, `-trigger`, `-panel`, `.header-actions` | 최상단 GNB — [subpage-guide.md](subpage-guide.md) 2번 참고 |

## B-2. 테마 층 — 다크모드

| 층 | CSS 파일 | 대표 클래스 | 용도 |
|---|---|---|---|
| Main Dark | `css/main-dark.css` | `.main-dark` | AXpresso 다크모드. `<main class="{페이지명} main-dark">`에 붙여 시맨틱 토큰(`--color-ink`·`--color-line`·`--color-surface-*`)을 axpresso 값으로 remap하고, hero·feature-card·process-steps·deliverable-list·faq-list·tag·cta-final을 다크로 반전한다. 페이지 CSS가 맨 위에서 `@import url("../main-dark.css") layer(components)`로 켠다(`<link>`를 늘리지 않는다). 현재 사용: `ax-build.html`, `ax-grow.html`, `axpresso.html` |

다크 페이지를 새로 만들 때는 `main` 태그에 `main-dark`를 붙이고 `@import` 한 줄만 추가한다.
페이지 CSS에는 **그 페이지에만 있는 것**(섹션 배경 리듬·전용 섹션)만 남긴다.
다크에서는 테두리를 최소로 쓴다 — 공간은 면이 만들고, 선은 실제로 나누는 자리에만 둔다.

## C. index.html 전용 대형 섹션 컴포넌트 — 카탈로그에 없음

**메인 랜딩 한 곳에서만 쓰도록 만들어진 컴포넌트**다. 겉모습이 비슷해 보여도 서브페이지에서 그대로 재사용하기보다, 구조(아이콘+제목+설명+CTA 같은 패턴)만 참고해서 새 페이지 전용 CSS로 만드는 것이 맞다. 다만 완전히 같은 목적(예: 다른 페이지에도 "고객 도입 사례 슬라이더"가 또 필요함)이면 그때는 이 컴포넌트를 공용으로 승격할지 사용자에게 확인한다.

**섹션 클래스는 어휘표 이름을 쓴다**([SKILL.md](SKILL.md) 4번 어휘표). 아래 "섹션 클래스"가
현재 마크업의 실제 이름이고, 안쪽 요소명(`difference-*`·`journey-mock-*` 등)은
`codepresso-designsystem.html`이 함께 쓰고 있어 옛 이름을 유지한다.

| 섹션 클래스 | 역할 | 정의 위치 | 짝이 되는 JS |
|---|---|---|---|
| `main-hero` | 메인 첫 화면(메인 전용 — 서브페이지는 `sub-hero`, `components/ui/hero.css`를 쓴다) | `css/pages/index.css` | — |
| `outcomes` | 도입 사례 슬라이더(안쪽은 `proof-card`) | `css/pages/index.css` | `js/proof-card-slider.js` |
| `features` | 3단 카드 자동 순환 | `css/pages/index.css` | `js/feature-card-cycle.js` |
| `journey` | PART 1 교육 여정 | `css/pages/index.css` (스테이지 골격은 `components/ui/journey-stage.css`) | `js/journey-stage.js` |
| `diagnosis` | PART 2 진단 쇼케이스 | `css/pages/index.css` | `js/journey-stage.js` |
| `difference` | PART 3 차별점 3화면 순환 | `css/pages/index.css` | `js/difference-cycle.js` |
| `insight` | 콘텐츠·아티클 | `css/pages/index.css` | — |
| `cta-final` | 최하단 전환 (공용 — `components/ui/`) | `css/main.css` | — |
| Floating CTA | `floating-cta.css` | `.floating-cta`, `-link`, `-mock`, `-copy`, `-action`, `-close`, `.is-shown` | hero CTA가 화면 밖으로 나가면 우측 하단에 따라붙는 배너. `js/floating-cta.js`와 짝 (`data-floating-cta="{기준 요소 id}"`) |

**`index.css`는 스코프로 감싸지 않는다** — `designsystem.css`가 통째로
`@import`해서 카탈로그 페이지가 같은 규칙을 쓰기 때문이다. 대신 `ax-build.css`·
`skills.css`는 각각 `.ax-build`·`.skills` 스코프로 감싸, 여러 페이지가
같은 `features`·`outcomes` 이름을 써도 서로에게 새지 않는다. hero만은 스코프로
가르지 않고 메인·서브페이지가 아예 클래스명 자체를 나눴다(`main-hero` vs `sub-hero`) —
서브페이지 hero는 공용 골격(`components/ui/hero.css`)이라 `main.css`가 전역 로드하므로
스코프만으로는 메인 hero와의 충돌을 막을 수 없었다.
모든 페이지가 함께 로드하는 `mobile.css`에서도 페이지 전용 블록에 스코프를 붙인다.

## D. skills.html(역량 진단·교육) 전용 섹션 컴포넌트

`css/pages/skills.css`가 정의하고 `.skills` 스코프 안에만 있다. 서브페이지의
섹션 구성은 대부분 공용 컴포넌트 조합으로 해결되므로, 아래는 **공용 컴포넌트로
표현되지 않은 것만** 남은 목록이다.

| 클래스 | 역할 | 재사용한 공용 컴포넌트 |
|---|---|---|
| `hero-questions` | hero의 질문 카드 3개(유리 표면) | — (수치가 없어 `metric-card` 부적합) |
| 공용 `cycle` 재사용 | 01 Growth Loop 4단계 순환 | 디자인은 공용 그대로 — 번호(`cycle-no`) 자리에 단계 아이콘만 넣는다 |
| `product-grid` · `product-points` | 03·04 제품 카드 배치와 특징 목록 | `content-panel`(카드 자체) |
| `analyze-grid` · `analyze-points` | 06 분석·보고 2블록 | `content-panel` |
| `analyze-mock-*` | 06 대시보드·성과 보고 목업(직무×역량 히트맵 · 전후 상승폭) | `preview-frame` · `mock-screen` · `journey-mock-badge` · `data-mock-motion="ticker"` |
| `learn-products` | 04 sticky 좌측 학습 방식 목록 묶음(라벨 + 목록). 목록 자체는 공용 `choice-list`이고 `data-journey-program`으로 스테이지와 연결된다 — index PART 1의 `diagnosis-products`와 같은 구성 |
| `blend-combo` | 05 가운데 단계의 하위 제품 배지 | `timeline`(단계 골격) · `tag` |
| `bridge-inner` · `bridge-title` | 도구 연결 브릿지 좌우 배치 | `summary-banner.dark` |
| 07 `start-grid` 재사용 | 07 누적 수치 4칸 배치 | `content-panel`+`start-card`(ax-grow 07 배치) — 숫자·라벨은 `metric-card__value`/`__label` 슬롯만 물려받고 `stat-reveal.js`에는 `data-stat-card=".start-card"`로 알린다 |

## E. why-codepresso.html(코드프레소 차별점) 전용 섹션 컴포넌트

`css/pages/why-codepresso.css`가 정의하고 `.difference-page` 스코프 안에만 있다.
**스코프가 `.difference`가 아닌 이유** — `index.css`의 PART 3 섹션이 이미 스코프 없이
`.difference`를 쓰고 있고 그 파일은 `designsystem.css`가 통째로 `@import`하므로,
같은 이름을 쓰면 두 규칙이 섞인다.

아래는 **공용 컴포넌트로 표현되지 않은 것만** 남은 목록이다.

| 클래스 | 역할 | 재사용한 공용 컴포넌트 |
|---|---|---|
| `problem-grid` · `problem-card` | 01 나쁜 수치 4개를 1행 4열로(도형이 본문 위). `is-fact`(사실) / `is-gap`(문제) 두 톤 — 문제 표시는 **좌측 accent 띠가 아니라** 수치 색·도형·설명 한 줄로만 한다 | — (`metric-card`는 **성과 지표용**이라 큰 숫자+아이콘이 전부 자랑으로 읽혀 부적합했다 — 나쁜 수치를 좋은 소식처럼 보이게 했다) |
| `source-note` | 01 인용 수치의 출처 각주(번호는 `counter()`가 만든다) | — |
| `diagnosis-slide` · `slide-row`(+`.is-fail`/`.is-link`) | 02 프레젠테이션 슬라이드형 2줄. 줄마다 캡슐 라벨 + 레일(`slide-rail`) | — |
| `slide-pair` · `slide-card`(+`.is-ours`) | 줄 안의 카드 2장 + 가운데 노드(3열 그리드) | — |
| `slide-break` | 실패 두 카드 사이의 끊긴 연결(64px 점선 ✕ 원 + 좌우 점선). 카드 안 아이콘(48px)보다 커야 노드로 읽힌다 | — |
| `slide-join` · `slide-join-pill` | 우리 두 카드가 만나는 **96px 원형** 어두운 "데이터" 노드(아이콘+글자 2단, 브랜드 링) + 위아래 화살표. 레퍼런스의 가로 알약은 132px 열 안에서 셋이 나눠 가져 전부 작아졌다 | — |
| `slide-verdict` | 실패 카드의 결말 배지("전환 실패") | — |
| `diagnosis-mock` | 02 카드 4장 안의 목업(라이선스·수료·자동화·역량). 카드 안이라 목업 타이포는 13/11px 2단 | `preview-frame` · `mock-screen` · `journey-mock-*` · `skeleton-line` · `data-mock-motion="focus"`×3 · `"ticker"`×1 |
| ~~`cycle` · `cycle-arrow`~~ | 03 4단계 순환 + 경계 화살표 + ↺ 마무리 | **공용 승격됨** → `css/components/ui/cycle.css`(skillcertify.html 05가 함께 쓰게 되며 승격). 페이지 스코프에는 entrance stagger delay만 남음 |
| `scenario-stage` | 04 각 단계의 국면 라벨(데이터 / 진단→학습 / 성과) | `timeline` 전부. 라벨 한 줄만 추가 |
| `position-map` · `position-dot` | 05 경쟁 구도 2축 좌표. 점 자리는 마크업의 `--pos-x`·`--pos-y`(%)가 정한다 | — (비개발자가 좌표를 옮길 수 있게 값을 마크업에 노출) |
| `start-grid` · `start-card` | 06 두 갈래 시작점 | `content-panel` · `summary-banner`(결론 한 줄) |
| `industry-cards` · `industry-card-label` · `industry-card-body` | 07 업종별 4블록을 1행 4열 카드로(Pain Point → 적용 → 교육 매핑 → 기대 효과 순서가 한 줄로 흐른다). 900px 2열 · 720px 1열 | `item-grid`를 그대로 씀(auto-fill 그리드 + 진입 stagger를 컴포넌트가 이미 가짐). 그 `li`는 "한 줄 칩"이라 라벨+본문 2단만 페이지에서 덮는다 |
| `scenario-screens` | 04 목업 3장을 grid 한 칸에 겹쳐 두고 활성 판만 보여줌(높이 튐 방지) | `js/scenario-switch.js`와 짝. 규약은 `tab-catalog`와 같음(key 짝 + `.is-active`) |

**이 페이지에서 처음 실제로 쓰인 공용 컴포넌트** — `timeline`(04)과 `compare-panel`(hero)은
그전까지 카탈로그에만 있고 서비스 페이지에서 쓰이지 않았다.

**`position-map`의 높이를 `aspect-ratio`로 주지 않는다** — 이 판은 `.section-content`
(세로 flex)의 자식이고 안이 전부 absolute라 내용 높이가 0이다. `aspect-ratio`는 그 0을
기준으로 계산해 판이 통째로 접힌다(실제로 겪었다 — 점 5개가 한 자리에 포개졌다).
높이는 px로 주고 반응형에서 단계로 낮춘다(520 → 440 → 400px).


**시간차 등장(stagger)은 이 페이지 CSS가 소유한다** — `.skills .fade-up.is-visible`
아래에서 `cycle`·`product-grid`·`analyze-grid`와 그 안쪽 목록에 `transition-delay`를
단계로 준다. `timeline`은 컴포넌트가 이미 같은 방식을 갖고 있어 건드리지 않는다.

## E. cases.html(고객 사례 목록) 전용 섹션 컴포넌트

`css/pages/cases.css`가 정의하고 `.cases` 스코프 안에만 있다. 이 페이지는 섹션이
hero·catalog·cta-final 셋뿐이라 대부분 공용 컴포넌트 조합으로 끝났고, 아래만 남았다.

| 클래스 | 역할 | 재사용한 공용 컴포넌트 |
|---|---|---|
| `case-filter` · `case-count` | 두 갈래(업무 자동화 · 역량 진단·교육)로 사례를 거르는 컨트롤 줄 + 결과 건수 | `part-nav`(`--compact --animated` segmented control)를 그대로 씀. `js/case-filter.js`와 짝 |
| `outcome-list` · `outcome-headline` · `outcome-person` · `tag-industry` | 고객사별 로고 판 + "이전 → 이후" 사례 카드 12장, 이 페이지만의 배치·톤 차이(브랜드 틴트 테두리·auto-fill 그리드) | 카드 껍데기·로고 판·본문 골격은 `components/ui/outcome-card.css`(공용, 아래 참고). `tag`·chevron SVG도 재사용. `outcome-headline`은 before→after가 없는 사례가 `outcome-shift` 자리를 대신 채우는 한 줄 |
| `tag-industry` | 업종 배지 — 서비스 배지와 나란히 서는 테두리형 변형 | `tag`(채움형)를 테두리형으로 덮음. 업종별 색을 만들지 않은 이유는 아래 참고 |

**`outcome-card`는 `components/ui/outcome-card.css`로 공용 승격했다** — cases(12장)와
skillcertify(3장 축소판) 두 페이지가 카드 껍데기·로고 판(`outcome-logo`(`--tall`·`--invert`))·
본문 골격(`outcome-body`)·고객사 텍스트(`outcome-client`·`outcome-industry`)를 완전히
같은 값으로 쓰고 있어 하나로 합쳤다. 그리드 열 수·카드 테두리 색·hover 색·본문 gap·
`outcome-headline`/`outcome-detail` 크기처럼 페이지마다 다른 값만 `.cases`/`.skillcertify`
스코프에 남아 있다.

**`part-nav`는 필터로도 쓸 수 있다** — 다만 `js/part-nav.js`는 앵커 스크롤 전용이라
필터 동작에는 쓸 수 없다. 컨트롤(CSS)만 재사용하고 동작은 `js/case-filter.js`가 맡는다.
필터로 쓸 때는 `<a>`가 아니라 `<button>`이므로 버튼 기본값 초기화가 필요하다.

**로고 판(`outcome-logo`)은 고정 높이 + `object-fit: contain`이다** — 로고는 비율이
제각각(아모레퍼시픽 10:1 ~ 우하컴퍼니 1:1)이라 판을 고정하고 안에서 맞춘다.
**`media-card`를 쓰지 않는다** — 그쪽 `__media img`는 `object-fit: cover`라 로고가 잘린다.

**고객사 로고를 받으면 세 가지를 먼저 확인한다** (실제로 다 겪었다):

| 확인 | 처리 |
|---|---|
| 캔버스에 빈 여백이 큰가 | **파일을 잉크 범위로 자른다.** CSS로 키워 맞추면 판 밖으로 넘치고 파일마다 다른 값을 외워야 한다 (SK텔레콤 1600×1600 중 세로 32%만 잉크 → 454×176으로 자름, 83KB→26KB) |
| 흰 글자(어두운 배경용)인가 | **로고 색을 고치지 않는다**(브랜드 훼손). 그 카드의 판만 `outcome-logo--invert`로 어둡게 깐다 (체인로지스는 잉크의 88%가 흰색) |
| 세로로 쌓인 2단 로고인가 | `outcome-logo--tall`로 높이 허용치를 올린다(44→76px). 가로형과 같은 값으로 묶으면 글자가 절반 크기로 보인다 |

`img`의 `max-width`는 100%가 아니라 **76%** 다 — 100%면 가로로 긴 로고가 판 좌우를 꽉 채워
혼자 두 배 커 보인다.

**배지 색을 업종별로 만들지 않는다** — 이 프로젝트의 색 토큰은 브랜드 1계열 + 잉크 4단이라
업종 7종에 색을 배정하면 없는 색을 새로 만들게 된다. 배지 두 개의 역할 차이는
**채움(서비스) vs 테두리(업종)** 로 가른다.

**화면 문구는 GNB 메뉴명을 그대로 쓴다** — 기획서의 "도구 축 / 사람 축"은 내부 분류
용어라 방문자에게는 번역투로 읽힌다. 배지·필터·각주 모두 GNB와 같은 말
(**업무 자동화** / **역량 진단·교육**)을 쓴다. 마크업의 `data-case-axis="tool|people"`은
화면에 안 나오는 내부 식별자라 그대로 둔다.

## F. skillpath.html(이러닝) — 새 컴포넌트 없음

`css/pages/skillpath.css`가 `.skillpath` 스코프 안에서 **배치와 면만** 정한다. 섹션
다섯 개가 전부 공용 컴포넌트 조합으로 끝나 새 컴포넌트를 만들지 않았고, 아래 세
클래스만 페이지 전용으로 남았다(모두 여백·정렬만 갖는다).

| 클래스 | 역할 | 재사용한 공용 컴포넌트 |
|---|---|---|
| `journey-note` | 02 아래 운영 주체 각주 한 줄(정렬만) | 타이포는 공용 `text-caption` |
| `diagnose-banner` | 진단 연계 유도 배너를 세로로 쌓는 배치 | `summary-banner`(흰 면) + `btn-ghost` — 어두운 판은 페이지에 bridge 한 곳뿐이라 `.dark`를 쓰지 않았다 |
| `bridge-actions` | 어두운 배너 우측 CTA 2개를 한 줄로 | `summary-banner.dark` + 공용 `bridge-*`(우측 칸에 요소 하나를 전제하므로 감싸는 칸만 추가) |

- 01은 `catalog-group--stacked` + `item-grid`(4열 타일) + `catalog-group__note`,
  02는 `scenario-layout` + `timeline`(term 칸 사용) + `journey-mock` 목업 4장 +
  `start-card` 3열, 이용 방식은 `feature-card`(자동 순환), 03은 `start-card` 3열이다.
- 섹션 이름이 두 번째 `features`라 `features-enterprise`로 한 단어를 붙였다
  (aifluent의 `features-mode`·`catalog-level`과 같은 방식).

## 판단 순서 (요약)

> **표의 한 줄 설명만 보고 "구조가 안 맞다"고 판단하지 않는다.** 후보를 찾았으면 그 CSS 파일을 열어 상단의 Markup API 주석을 실제로 읽는다 — 대개 필요한 구조가 그 안에 이미 있다. (실패 사례는 [references/reuse-playbook.md](references/reuse-playbook.md) 함정 ①)

1. 만들려는 UI가 **A(범용, 카탈로그됨)** 에 있는가 → 그대로 재사용.
2. **B(레이아웃/텍스트 프리미티브)** 에 있는가 → 그대로 재사용.
3. **C(index 전용)** 와 비슷한가 → 구조만 참고해서 새 컴포넌트로 만들되, `css/pages/{새페이지}.css`에 둔다. index 전용 클래스를 그대로 가져다 쓰지 않는다(다른 페이지 CSS가 로드 안 되어 스타일이 깨진다).
4. 어디에도 없다 → 새로 만들고, 범용이 될 만하면 [SKILL.md](SKILL.md) 0번 규칙대로 `codepresso-designsystem.html`에도 등록한다.
