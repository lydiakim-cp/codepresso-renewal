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

## 문서화

재사용 컴포넌트를 추가하거나 API를 변경하면 `codepresso-designsystem.html`에 다음을 함께 기록한다.

- 실제 렌더링 예제
- 마크업 슬롯 구조
- modifier와 상태
- 재사용하지 말아야 하는 경우
- 접근성 요구사항
