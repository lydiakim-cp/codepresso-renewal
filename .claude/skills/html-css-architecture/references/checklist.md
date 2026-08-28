# 최종 품질 체크리스트

> 작업을 마치기 직전에 편다. 항목마다 근거가 되는 문서를 괄호로 달았다 — 걸리는 항목이 있으면 그 문서를 연다.

작업 완료 후 아래를 확인한다.

**재사용 (0번 제1규칙 — 가장 먼저 확인)**: **다른 페이지에 같은 내용(목업·이미지·설명)이 이미 있는지 봤는가**(있으면 마크업을 가져오고 CSS·JS는 한 벌을 공유하도록 공용으로 올렸는가 / 올린 뒤 원래 페이지가 픽셀로 그대로인지 확인했는가 / 페이지 전용 훅에 의존하던 부분을 새 페이지에서 살렸는가) / 새로 만든 컴포넌트·클래스가 있다면 [component-inventory.md](../component-inventory.md)와 `codepresso-designsystem.html`에서 같은 역할의 것을 먼저 찾아봤는가 / **그 컴포넌트의 CSS 파일을 열어 Markup API를 실제로 읽어봤는가**(한 줄 설명만 보고 "구조가 안 맞다"고 판단하지 않았는가) / 기존 것으로 안 된 이유를 보고에 남겼는가 / 기존 컴포넌트와 값(색·간격·radius·폰트·hover)이 겹치는 선언을 새로 쓰지 않았는가 / 같은 값을 두 번째로 쓰게 됐을 때 토큰·공용 클래스로 올렸는가 / [css-patterns.md](../css-patterns.md)의 관용구(color-mix·chevron·트랜지션 리듬)를 따랐는가 / 새로 만든 범용 컴포넌트를 카탈로그와 인벤토리에 등록했는가 / **기존 섹션과 역할이 비슷한 섹션이면 그 섹션의 컴포넌트와 모션까지 함께 가져왔는가**(카드 모양만 비슷하게 맞추고 동작을 다르게 두지 않았는가)

**디자인 QA — 값으로 세어 확인** ([design-qa.md](design-qa.md)): **강조 섬션(어두운 판)이 페이지당 1~2곳 있는가**(0곳이면 강조가 없고, 3곳 이상이면 강조가 죽는다 / 최하단 `cta-final`이 이미 어둡다 / 어두운 판 둘 사이에 흰 면을 두었는가) / **강조 배경이 화면 끝까지 닿는가**(배경은 `<section>`이 칠하고 `.section-wrap`은 콘텐츠 폭만 맡는다 — `.section-wrap`에 `background`를 주지 않았는가 / 섬션 폭이 뷰포트 폭과 같은지 재 봤는가) / **제품 화면 목업이 움직이는가**(`data-mock-motion` 0개면 검토 대상 / 6종에서 골랐는가 / 빈 프레임을 버그로 단정하지 않았는가) / **애니메이션이 있고 동시에 절제되었는가**(섬션마다 `fade-up` / 한 화면에 동시에 움직이는 요소 3개 이하 / 무한 반복은 한 섬션에 1개 이하) / **위계를 배경하나로 만들지 않고 배경·카드·경계선 3층으로 만들었는가**(카드와 섬션 배경이 같은 색이 아닌가) / **비슷한 레이아웃의 섬션이 3개 이상 연달리지 않는가** / **`btn-primary`가 한 화면에 하나인가**(cta-final과 경쟁하지 않는가) / 센 값을 보고에 남겼는가

**시각적 완성도** ([css-patterns.md](../css-patterns.md) 4번): 텍스트 블록만 반복되는 화면으로 끝내지 않았는가 / **화면이 허여멀건하지 않은가 — 위계를 배경 하나로 만들지 않고 배경·카드·경계선 3층으로 만들었는가**(`surface-sunken`과 `brand-tint-1`은 같은 색이고 흰색과 6% 차이뿐이다 / 옅은 면은 `brand-tint-2`, 강조 구간은 어두운 판) / 섹션 배경에 리듬이 있는가(흰 면·옅은 면 교차, 강조 구간 1곳) / 카드와 섹션 배경이 같은 색으로 겹치지 않는가 / 배경색과 `dot-line`을 함께 쓰지 않았는가 / hero·CTA처럼 시선이 머무는 구간에 배경 질감을 검토했는가 / 반복되는 카드 목록에 아이콘을 검토했는가(넣었다면 원본 색을 브랜드 토큰으로 교체했는가) / 진입·hover 모션을 넣었는가 / **적용하지 않기로 한 것은 이유를 보고에 남겼는가**

**HTML**: Semantic HTML 적절히 사용 / div 대체 가능한 native element 미사용 / heading hierarchy 정상 / link·button 역할 명확 / `<header>`는 GNB 하나뿐인가(섹션 상단 블록은 `div`) / 새 섹션이 `<section class="{이름} fade-up">` + 안쪽 `.section-wrap` 구조를 따르는가

**CSS**: Design Token 사용(존재하는 이름인지 `tokens.css`에서 확인) / raw color 하드코딩 없음(필요하면 `color-mix`로 파생) / 반복 UI가 Component로 추출됨 / specificity 과도하지 않음(`@layer` 활용) / 새 컴포넌트 CSS가 `main.css` 또는 `css/pages/*.css`에 `@import`됐는가(HTML에 세 번째 `<link>`를 붙이지 않았는가) / 컴포넌트 파일 안에 `@layer`를 직접 쓰지 않았는가 / 애니메이션을 넣었다면 `css/keyframes.css`에 같은 움직임이 있는지 먼저 봤는가(새 `@keyframes`를 만들었다면 그 컴포넌트 전용인 근거가 있는가) / `prefers-reduced-motion` 대응을 함께 넣었는가

**버튼** ([buttons.md](buttons.md)): 카탈로그에 있는 변형(`btn-primary`·`btn-ghost`·`btn-outline-inverse`·`btn-pill` + `btn-lg`)만 썼는가 / **`.link-arrow`에 색 modifier(`-ink`/`-inverse`)를 붙였는가**(맨 `link-arrow`는 hover 없는 검은 글씨가 된다) / **카드·패널의 행동을 맨 텍스트 링크로 두지 않았는가**(밝은 배경 카드면 `btn-ghost`) / 페이지 CSS가 버튼의 색·높이·radius·font-size를 덮지 않았는가 / **`.btn`의 width를 `100%`로 덮은 곳이 없는가**(버튼 2개가 안 들어가면 감싼 묶음을 세로로 쌓고 `width: fit-content`를 준다) / 어두운 배경 위 보조 버튼에 `btn-outline-inverse`를 썼는가

**아이콘** ([css-patterns.md](../css-patterns.md) 2번): chevron이 `images/icon/chevron-right.svg`·`chevron-down.svg`의 path와 **정확히 같은 표기**인가(같은 모양의 다른 표기를 새로 쓰지 않았는가) / **path를 손으로 그리지 않고 파일에서 그대로 복사했는가**("~ 기반"이라는 주석만 달고 좌표를 지어내지 않았는가) / **같은 제품·같은 지표에 index.html이 쓰는 것과 같은 아이콘 파일을 썼는가**(제품·지표 이름으로 index를 먼저 grep했는가 / index에 같은 지표가 있으면 그 SVG 블록을 통째로 복사했는가) / **아이콘 이름만 보고 그림을 짐작하지 않고 실제로 렌더해 확인했는가**(`ic_proof`는 돋보기가 아니라 트로피다) / 한 페이지 안에서 같은 아이콘을 뜻이 다른 두 자리에 쓰지 않았는가 / `images/icon/`의 아이콘을 인라인으로 옮기고 하드코딩 색을 브랜드 토큰으로 바꿨는가 / **40 그리드 파일은 배경 판 rect를 빼고 viewBox를 그림 범위로 잘라 광학 크기를 맞췄는가**(24 파일과 섞으면 크기가 들쭉날쭉해진다) / **원본이 단색인 파일에 색 단계를 만들지 않았는가**(첫 path가 옅어지면 형태가 희미해진다) / 장식용 SVG에 `aria-hidden="true"`가 있는가

**타이포 제약** ([SKILL.md](../SKILL.md) 3번): 메인페이지에 14px 미만 폰트가 없는가 / heading이 Semibold(600) 고정인가 / 700 Bold를 새로 썼다면 근거가 있는가 / 자간을 컴포넌트에서 임의로 새로 정하지 않았는가

**토큰 승격** ([tokens-typography.md](tokens-typography.md)): 2곳 이상에서 쓰이는 값이 하드코딩으로 남아 있지 않은가 / 반대로 1회성 치수를 불필요하게 토큰으로 올리지 않았는가 / 컴포넌트에 남긴 매직넘버에 근거 주석이 있는가

**중복·무효 선언** ([cleanup.md](cleanup.md) — 매 작업 필수): 태그 전역 스타일과 겹치는 폰트 재선언 없음 / 같은 요소의 공용 유틸리티와 100% 중복된 클래스 없음(있으면 CSS·마크업 양쪽에서 제거) / modifier가 base 값을 되풀이하지 않음 / 상속되는 속성을 자식이 같은 값으로 재선언하지 않음 / flex 기능을 쓰지 않거나 자식 1개로 무효한 `display:flex`·`gap`·`flex-direction` 없음 / 값 비교는 토큰 체인을 펼친 실제 값으로 했는지 / 같은 패턴을 프로젝트 전체에서 훑었는지 / 삭제한 클래스가 `js/`·`css/`에서 참조되지 않는지 확인했는지

**마크업 · CSS · JS 3자 정합성** ([cleanup.md](cleanup.md) — 섹션 재구성·CSS 30줄 이상 수정 시 필수)**: HTML이 쓰는 클래스가 CSS에 전부 정의됐는가 / **CSS가 정의했는데 마크업이 안 쓰는 클래스가 없는가**(있으면 마크업 누락인지 죽은 CSS인지 판단해 처리) / `js/`의 각 스크립트가 HTML `<script>` 목록에 들어 있는가(의도적 보류는 보고에 명시) / 스크립트의 `querySelector` 셀렉터가 마크업에 실제로 존재하는가

**에셋** ([page-structure.md](page-structure.md)): `images/` 밖에 새 에셋 루트를 만들지 않았는가 / 아이콘이 `ic_` + camelCase인가 / 한글·공백·쉼표 파일명이 없는가 / `-v1`·`-v2` 같은 버전 접미사가 커밋에 남지 않았는가 / 교체한 구본을 같은 커밋에서 삭제했는가

**Responsive**: **1440/900/720/560/390/320px에서 섹션마다 좌우 여백이 정확하고 일정한지 값으로 재 봤는가**(데스크톱 80px · 900px 이하 20px) / **페이지에 가로 스크롤이 없는가**(grid를 `minmax(0, 1fr)`로 썼는가 / `auto-fit`을 모바일에서 고정 열로 바꿨는가 / `zoom` 목업을 감싼 판에 `overflow-x: auto`와 `min-width: 0`을 함께 줬는가) / 900/720/560 3단 안에서 처리했는가(새 breakpoint를 만들지 않았는가) / 모바일 제목 크기를 컴포넌트가 아니라 `tokens.css`의 560px 블록으로 처리했는가 / 이웃과 눈높이를 맞추려던 고정 높이를 모바일에서 풀었는가 / 다단 그리드가 `minmax(0, 1fr)`이라 넘치지 않는가 / 고정 px 레이아웃에 근거 주석을 남겼는가

**Accessibility**: keyboard navigation 가능 / `:focus-visible` 제공 / 이미지 `alt` 적절 / form label 연결 / screen reader 유틸리티 적용

**Maintainability**: HTML만 읽어도 구조 이해 가능 / 스타일 복사 없음 / 기존 Component 재사용 우선(0번) / 프로젝트 CSS Architecture 준수

**Design System 동기화**: 새 컴포넌트를 만들기 전 `codepresso-designsystem.html`에 이미 있는지 확인했는가 / 있으면 그 컴포넌트를 재사용했는가(색상·spacing·radius·shadow가 기존 값과 통일됨) / 새로 만든 컴포넌트를 `codepresso-designsystem.html`에도 추가했는가

**보고**: 지운 것과 **의도적으로 남긴 것(및 이유)** 을 함께 보고했는가 / 기존부터 깨져 있던 것과 이번 작업으로 깨진 것을 구분했는가
