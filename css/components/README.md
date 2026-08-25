# Codepresso Component Library

`css/components`는 페이지와 무관하게 재사용할 수 있는 UI 디자인을 보관한다.
컴포넌트는 콘텐츠의 종류가 아니라 **반복되는 정보 구조와 시각 규칙**을 기준으로 분리한다.

## 카테고리

- Foundation UI: `button`, `link`, `badge`, `surface`, `skeleton`
- Content UI: `metric-card`, `media-card`, `choice-list`, `assessment-card`, `summary-banner`
- Frame UI: `content-panel`, `preview-frame`, `layout`
- Navigation UI: `header`, `part-nav`
- Feature compositions: `feature-card`, `proof-card`, `insight`, `education-journey`, `diagnosis-showcase`, `difference`, `cta-final`

## 책임 분리 원칙

1. 컴포넌트 CSS는 생김새와 내부 슬롯을 담당한다.
2. 페이지·기능 CSS는 위치, sticky, 화면 전환, 데이터 시각화를 담당한다.
3. 색상·간격·서체·radius는 `tokens.css`의 토큰을 사용한다.
4. 상태는 `is-*`, 크기·표현 변형은 `컴포넌트--modifier` 형식을 사용한다.
5. JS 선택자는 가능하면 `data-*`를 사용하고 디자인 클래스에 의존하지 않는다.

## Section layout API

- `section-wrap col` + `section-title text-center`: 제목과 콘텐츠를 위아래로 배치하고 제목을 중앙 정렬
- `section-wrap col` + `section-title text-left`: 제목과 콘텐츠를 위아래로 배치하고 제목을 좌측 정렬
- `section-wrap row`: 좌우 2컬럼 배치, sticky 없음
- `section-wrap row is-sticky`: 좌우 2컬럼 배치, `.section-aside` sticky

`text-center`/`text-left`는 섹션 전체가 아니라 해당 `.section-title`에 붙인다. 따라서
섹션 안의 카드·목록·CTA는 각 컴포넌트의 고유 정렬을 유지하면서 제목 블록만 정렬할 수 있다.
- 섹션 고유 간격은 클래스 추가 대신 `--section-gap`만 재정의
- `row`는 900px 이하에서 1컬럼으로 접히고 sticky가 자동 해제됨

## Section body API

반복되는 카드·패널의 텍스트 배치는 `section-body` 슬롯을 사용한다.

- `.section-body`: 텍스트 영역의 세로 흐름
- `.section-body-heading`: 라벨과 보조 아이콘을 한 줄에 배치
- `.section-body-title`: 작은 제목/라벨
- `.section-body-subtitle`: 큰 보조 제목
- `.section-body-description`: 설명 영역

기본 배치와 타이포그래피는 공통 CSS가 제공하고, 색상·상태는
`.how-it-works .section-body-title`처럼 사용처에서 재정의한다. 카드 고유의 애니메이션이나 여백만
`.feature-card .section-body-description`처럼 컴포지션 CSS에서 추가한다.

## 문서화

재사용 컴포넌트를 추가하거나 API를 변경하면 `codepresso-designsystem.html`에 다음을 함께 기록한다.

- 실제 렌더링 예제
- 마크업 슬롯 구조
- modifier와 상태
- 재사용하지 말아야 하는 경우
- 접근성 요구사항
