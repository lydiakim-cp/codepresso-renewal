# Codepresso Component Library

`css/components`는 재사용 가능한 UI를 보관하며, **재사용 범위**에 따라 두 폴더로 나눈다.
컴포넌트는 콘텐츠의 종류가 아니라 **반복되는 정보 구조와 시각 규칙**을 기준으로 분리한다.

## 폴더 구분 — `ui/` vs `sections/`

| | `ui/` (22개) | `sections/` (8개) |
|---|---|---|
| 무엇 | 어디에나 놓이는 범용 조각 | 페이지의 한 구획을 통째로 이루는 조합 |
| 크기 | 대개 100줄 미만 | 60~1151줄 |
| 로드 | `main.css`가 전부 로드 → **모든 페이지** | 그것을 쓰는 **페이지가 직접** 로드 |
| 예 | `button` `badge` `metric-card` `content-panel` | `hero` `difference` `education-journey` |

**로드 주체가 다른 것이 이 구분의 실익이다.** 941줄짜리 `education-journey`를
`main.css`에 넣으면 그 섹션이 없는 페이지까지 받아 간다. 반대로 `button`을
페이지마다 로드하면 페이지가 늘 때마다 빠뜨릴 수 있다.

### 어느 쪽에 둘지 판단

- 이 조각만 떼어 **다른 맥락에 놓아도 말이 되는가** → `ui/`
- **그 섹션의 서사에 묶여** 있어 떼면 의미가 없는가 → `sections/`
- `sections/`의 파일을 두 페이지 이상이 쓰는 것은 정상이다(현재 8개 중 7개가 그렇다).
  페이지 전용이라는 뜻이 아니라 **섹션 단위 조합**이라는 뜻이다.
- `sections/` 안에서 범용으로 쓸 조각이 생기면 `ui/`로 올리고 `main.css`에 등록한다.

## 카테고리 (`ui/` 안에서)

- Foundation UI: `button`, `link`, `badge`, `surface`, `skeleton`, `text`
- Content UI: `metric-card`, `media-card`, `choice-list`, `assessment-card`, `summary-banner`
- Frame UI: `content-panel`, `preview-frame`, `layout`, `section-body`
- Navigation UI: `header`
- 조합·연출: `feature-card`, `compare-panel`, `timeline`, `faq-list`, `tab-catalog`, `mock-motion`

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
