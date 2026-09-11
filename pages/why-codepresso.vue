<template>
  <SiteHeader />
<!-- GNB는 partials/header.html 하나로 관리한다. js/include-partials.js가 fetch해 삽입한다.
       (fetch를 쓰므로 file:// 직접 열기로는 안 보인다 — 로컬 정적 서버로 확인한다) -->
  

  <main class="difference-page">
    <!--
      Hero — "도구 회사도, 교육 회사도 아니다"가 이 페이지 전체의 주장이다.
      첫 화면이라 fade-up을 붙이지 않는다.

      3칸 대비(hero-compare)는 뺐다 — hero 배경 위 surface-glass 판이 텍스처와
      겹쳐 탁하게 보였고, 그 설명 자체가 hero-desc 한 문장과 중복이라 굳이
      따로 펼쳐 둘 필요가 없었다.
    -->
    <section class="sub-hero">
      <div class="hero-wrap">
        <div class="sub-hero-copy">
          <p class="tag" data-i18n="why-codepresso-hero-eyebrow">The Difference · 데이터 선순환</p>
          <h1 class="hero-title" data-i18n="why-codepresso-hero-title">도구 회사도,<br>교육 회사도 아닙니다</h1>
          <p class="hero-desc" data-i18n="why-codepresso-hero-desc">도구 전문 회사는 사람을 못 바꾸고, 교육 회사는 도구가 없습니다. <br data-break="desktop">Codepresso는 <strong>둘 다, 그리고 연결까지</strong> 합니다.</p>
        </div>
      </div>
    </section>

    <!--
      01 The Problem — 수치 4개로 문제를 세운다.

      metric-card를 쓰지 않는다. 그 컴포넌트는 "성과 지표"용이라 큰 숫자 + 아이콘이
      전부 자랑처럼 읽힌다 — 네 수치 중 셋은 나쁜 수치인데 카드가 좋은 소식처럼
      보였다(실제로 지적받았다). 대신 도형이 숫자와 같은 방향을 말하게 한다.

      1행 4열이 아니라 2x2다 — 넷은 "많다 / 그런데 안 된다" 두 쌍이라,
      한 줄로 늘어놓으면 그 짝이 안 보인다. 각 행이 한 쌍이다.
      좌 제목 sticky + 우 2x2 — 본문 첫 섹션을 비대칭으로 열어 가운데 정렬이
      끝까지 이어지는 것을 막는다. 출처 각주는 뺐다(사용자 지시).
    -->
    <section class="outcomes fade-up">
      <div class="section-wrap row is-sticky">
        <div class="section-aside">
          <div class="section-title text-left">
            <p class="tag" data-i18n="why-codepresso-outcomes-eyebrow">The Problem</p>
            <h2 data-i18n="why-codepresso-outcomes-title">AI를 도입한 기업은 많지만,<br data-break="desktop"> 성과를 내는 기업은 드뭅니다</h2>
            <p class="desc" data-i18n="why-codepresso-outcomes-desc">도입률과 성과율 사이의 간극은 예산이 아니라 구조의 문제입니다.</p>
          </div>
        </div>

        <div class="section-content">
          <ul class="problem-grid" data-stat-reveal="" data-stat-card=".problem-card">
            <!-- 1행 — 도입은 88%인데, 성과는 6%다. is-fact / is-gap 한 쌍. -->
            <li class="problem-card is-fact">
              <div class="problem-visual" aria-hidden="true">
                <!-- 막대 그래프 — 109.막대 그래프.svg. "도입은 이미 보편적"인 확산을 뜻한다 -->
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15H3C2.44772 15 2 15.4477 2 16V20C2 20.5523 2.44772 21 3 21H6C6.55228 21 7 20.5523 7 20V16C7 15.4477 6.55228 15 6 15Z" fill="color-mix(in srgb, var(--color-brand) 45%, var(--color-surface))"></path>
                  <path d="M13 9H10C9.44772 9 9 9.44772 9 10V20C9 20.5523 9.44772 21 10 21H13C13.5523 21 14 20.5523 14 20V10C14 9.44772 13.5523 9 13 9Z" fill="color-mix(in srgb, var(--color-brand) 70%, var(--color-surface))"></path>
                  <path d="M20 3H17C16.4477 3 16 3.44772 16 4V20C16 20.5523 16.4477 21 17 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z" fill="var(--color-brand)"></path>
                </svg>
              </div>
              <div class="problem-card-body">
                <p class="problem-label" data-i18n="why-codepresso-outcomes-item-label-01">기업의 AI 도입률</p>
                <p class="problem-value"><span class="num" data-target="88">0</span><span class="unit">%</span></p>
                <p class="description" data-i18n="why-codepresso-outcomes-item-desc-01">도입 자체는 이미 보편적입니다</p>
              </div>
            </li>

            <li class="problem-card is-gap">
              <div class="problem-visual" aria-hidden="true">
                <!-- 원형 그래프 — 111.원형 그래프.svg. 성과를 재는 지표인데 값이 작다는 뜻 -->
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.49 12.0098H22C22 9.3576 20.9464 6.81408 19.0711 4.93872C17.1957 3.06336 14.6522 2.00977 12 2.00977V9.50977C12.3278 9.50976 12.6524 9.5745 12.9552 9.70026C13.258 9.82602 13.5329 10.0103 13.7643 10.2426C13.9956 10.4749 14.1788 10.7506 14.3033 11.0538C14.4279 11.3571 14.4913 11.6819 14.49 12.0098Z" fill="var(--color-critical)"></path>
                  <path d="M11.9902 14.5098C11.3272 14.5098 10.6913 14.2464 10.2225 13.7775C9.75363 13.3087 9.49023 12.6728 9.49023 12.0098C9.49023 11.3467 9.75363 10.7108 10.2225 10.242C10.6913 9.77316 11.3272 9.50977 11.9902 9.50977V2.00977C9.33807 2.00977 6.79452 3.06336 4.91916 4.93872C3.0438 6.81408 1.99023 9.3576 1.99023 12.0098C1.99023 14.6619 3.0438 17.2054 4.91916 19.0808C6.79452 20.9562 9.33807 22.0098 11.9902 22.0098C14.6422 22.0092 17.1853 20.9553 19.0602 19.0798L13.7502 13.7698C13.5213 14.0046 13.2476 14.1911 12.9453 14.3182C12.643 14.4454 12.3182 14.5105 11.9902 14.5098Z" fill="color-mix(in srgb, var(--color-critical) 16%, var(--color-surface))"></path>
                  <path d="M14.4908 12.0098C14.4911 12.3368 14.4268 12.6606 14.3015 12.9626C14.1762 13.2647 13.9924 13.539 13.7607 13.7698L19.0707 19.0798C20.9462 17.2048 22.0002 14.6617 22.0007 12.0098H14.4908Z" fill="color-mix(in srgb, var(--color-critical) 40%, var(--color-surface))"></path>
                </svg>
              </div>
              <div class="problem-card-body">
                <p class="problem-label" data-i18n="why-codepresso-outcomes-item-label-02">AI로 고성과를 내는 기업</p>
                <p class="problem-value"><span class="num" data-target="6">0</span><span class="unit">%</span></p>
                <p class="description" data-i18n="why-codepresso-outcomes-item-desc-02">도입한 곳의 대부분은 성과가 없습니다</p>
              </div>
            </li>

            <!-- 2행 — 파일럿은 도는데 95%가 손익에 안 닿고, 배운 것은 12%만 현업으로 간다.
                 둘 다 "거의 다 새어 나간다"는 같은 이야기라 같은 행에 둔다. -->
            <li class="problem-card is-gap">
              <div class="problem-visual" aria-hidden="true">
                <!-- 취소·거절 — 114.취소,거절.svg. 파일럿이 손익까지 못 간 실패를 뜻한다 -->
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="var(--color-critical)"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.884 8.88389L8.88398 16.8839L7.11621 15.1161L15.1162 7.11612L16.884 8.88389Z" fill="var(--color-surface)"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.88398 7.11612L16.884 15.1161L15.1162 16.8839L7.11621 8.88389L8.88398 7.11612Z" fill="var(--color-surface)"></path>
                </svg>
              </div>
              <div class="problem-card-body">
                <p class="problem-label" data-i18n="why-codepresso-outcomes-item-label-03">P&amp;L 성과 없는 GenAI 파일럿</p>
                <p class="problem-value"><span class="num" data-target="95">0</span><span class="unit">%</span></p>
                <p class="description" data-i18n="why-codepresso-outcomes-item-desc-03">파일럿에서 실제 손익으로 넘어가지 못합니다</p>
              </div>
            </li>

            <li class="problem-card is-gap">
              <div class="problem-visual" aria-hidden="true">
                <!-- 차단·금지 — 121.차단,금지.svg. 배운 것이 현업까지 못 가고 막힌다는 뜻 -->
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.66016 18.3401L18.4202 5.58008" stroke="var(--color-critical)" stroke-width="2.5" stroke-miterlimit="10"></path>
                  <path d="M12 4.5C13.9883 4.50265 15.8944 5.29368 17.3004 6.69963C18.7063 8.10558 19.4974 10.0117 19.5 12C19.5 13.9891 18.7098 15.8968 17.3033 17.3033C15.8968 18.7098 13.9891 19.5 12 19.5C10.0109 19.5 8.10322 18.7098 6.6967 17.3033C5.29018 15.8968 4.5 13.9891 4.5 12C4.50265 10.0117 5.29367 8.10558 6.69962 6.69963C8.10557 5.29368 10.0117 4.50265 12 4.5ZM12 2C10.6868 2 9.38642 2.25867 8.17317 2.76122C6.95991 3.26376 5.85752 4.00035 4.92893 4.92894C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7363 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92894C17.1957 3.05358 14.6522 2 12 2Z" fill="var(--color-critical)"></path>
                </svg>
              </div>
              <div class="problem-card-body">
                <p class="problem-label" data-i18n="why-codepresso-outcomes-item-label-04">현업에 적용되는 교육 내용</p>
                <p class="problem-value"><span class="num" data-target="12">0</span><span class="unit">%</span></p>
                <p class="description" data-i18n="why-codepresso-outcomes-item-desc-04">배운 것의 대부분이 업무에 닿지 않습니다</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!--
      02 Diagnosis — 좌우 비교 레이아웃(사용자 지시로 위아래 두 줄 → 좌우 두 열로 전환).

      좌열 "한쪽만 바꾼 회사" · 우열 "코드프레소"가 나란히 놓여 실패와 우리를 한눈에
      대비시킨다. 좌열은 카드 두 장이 세로로 쌓이고, 우열은 카드 두 장 사이에 join을
      가로로 끼운다(아래 "두 열의 높이가 어긋났던 원인" 참고).
      좌열의 ✕ 연결 노드는 뺐다(사용자 지적) — 두 카드는 서로 다른 회사의 독립된
      실패 사례라 "끊어진 연결"이 아니었다. 우열의 화살표+데이터 알약만 남긴다 —
      그건 slide-note가 명시하는 실제 데이터 흐름이라 근거가 있다.

      좌측에 캡슐 라벨을 두고 오른쪽으로 얇은 레일을 뽑는다 — 슬라이드의
      섹션 머리처럼 읽히고, 두 열이 같은 문법을 쓰므로 두 번 배우지 않아도 된다.

      감싸는 판을 두지 않고 열 단위로 나눈다 — 판 안에 판이 겹치면
      프레젠테이션이 아니라 카드 더미가 된다. 720px 이하에서는 두 열이 나란히
      두기엔 좁아 다시 위아래로 쌓인다(mobile.css).

      두 열의 높이가 어긋났던 원인 — "코드프레소" 열만 slide-pair 안에 card·join·card를
      세로로 쌓아 join 높이(알약 96px)만큼 "한쪽만 바꾼 회사" 열보다 길어졌고,
      맺음말 slide-note까지 그 열에만 붙어 있었다. join을 두 카드 사이 가로 배치로
      바꾸고(.slide-pair.is-joined), slide-note는 두 열 바깥으로 빼 전체 폭 각주로
      공유한다 — 이제 두 열 다 카드 2장 높이로만 맞춰진다.

      카드 안 목업 4장은 뺐다 — 카드 폭 277px에 눌려 11~12px 텍스트가 회색 덩어리로만
      읽혔고, 실패한 남의 회사 화면을 우리 제품 목업 셸로 그리는 것도 의미가 맞지 않았다.
      실패 카드는 수치·결말 배지도 뺐다(사용자 지시) — 설명 한 문장만 남고, 시각 무게는
      가운데 ✕ 노드가 진다. "우리" 카드는 slide-fact 한 줄이 남아 수치로 실체를 보탠다.

      레퍼런스의 "카드 상단 파란 띠"는 쓰지 않는다(SKILL 3번: 카드에 accent 선 금지).
      border-top이든 같은 자리에 놓은 요소든 보이는 결과가 같으므로 둘 다 안 쓴다 —
      우리 카드라는 표시는 흰 면 · 브랜드 아이콘 · 그림자로 한다.
      와이어프레임은 배치만 참고하고 스타일은 이 프로젝트 규칙으로 다시 만든다.
    -->
    <section class="intro fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="why-codepresso-intro-eyebrow">Diagnosis</p>
          <h2 data-i18n="why-codepresso-intro-title">원인은 하나, <br data-break="desktop">도구와 사람이 따로 가기 때문입니다</h2>
          <p class="desc" data-i18n="why-codepresso-intro-desc">AI를 쓰는 사람과 AI를 다루는 사람은 다릅니다. <br data-break="desktop">도구(일하는 방식)와 사람(역량)이 연결되지 않으면 전환은 완성되지 않습니다.</p>
        </div>

        <div class="section-content diagnosis-slide">
          <!-- ── 1행: 한쪽만 바꾼 회사 — 2행(코드프레소)과 대비되게 폭을 줄여 왼쪽에 작게 둔다 ── -->
          <div class="slide-row is-fail">
            <p class="slide-rail"><span class="slide-rail-label" data-i18n="why-codepresso-intro-label-01">한쪽만 바꾼 회사</span></p>

            <div class="slide-pair">
              <article class="slide-card is-muted">
                <div class="slide-card-head">
                  <h3 data-i18n="why-codepresso-intro-item-title-01">도구만 산 회사</h3>
                </div>
                <p class="slide-card-desc" data-i18n="why-codepresso-intro-item-desc-01">라이선스는 샀지만 활용률은 바닥인 <strong>"서랍 속 AI"</strong>. 결재만 AI로 하고 실무는 그대로.</p>
              </article>

              <article class="slide-card is-muted">
                <div class="slide-card-head">
                  <h3 data-i18n="why-codepresso-intro-item-title-02">교육만 한 회사</h3>
                </div>
                <p class="slide-card-desc" data-i18n="why-codepresso-intro-item-desc-02">특강과 수료증은 쌓였지만 <strong>업무는 바뀌지 않는</strong> 현업 단절. 배운 것을 적용할 자리가 없습니다.</p>
              </article>
            </div>
          </div>

          <!-- ── 2행: 코드프레소 ── -->
          <div class="slide-row">
            <p class="slide-rail"><span class="slide-rail-label is-dark" data-i18n="why-codepresso-intro-label-02">코드프레소는 도구와 사람을 데이터로 잇습니다</span></p>

            <div class="slide-pair is-joined">
              <article class="slide-card is-ours">
                <p class="tag slide-card-tag" data-i18n="why-codepresso-intro-item-tag-01">업무 자동화 · AXpresso</p>
                <div class="slide-card-head">
                  <span class="start-icon" aria-hidden="true">
                    <!-- 일하는 방식(도구) — images/icons/library/027.설정,관리.svg, 색을 브랜드 토큰으로 교체 -->
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 19.75C16.2802 19.75 19.75 16.2802 19.75 12C19.75 7.71979 16.2802 4.25 12 4.25C7.71979 4.25 4.25 7.71979 4.25 12C4.25 16.2802 7.71979 19.75 12 19.75Z" fill="var(--color-brand)"></path>
                      <path d="M10 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3V5H9V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2Z" fill="var(--color-brand)"></path>
                      <path d="M2.34082 8.73944L4.34082 5.27534C4.47343 5.04566 4.69187 4.87805 4.94805 4.80941C5.20423 4.74077 5.47716 4.77671 5.70685 4.90932L7.4389 5.90932L4.4389 11.1055L2.70685 10.1055C2.47716 9.97286 2.30958 9.75444 2.24094 9.49826C2.1723 9.24208 2.20821 8.96913 2.34082 8.73944Z" fill="var(--color-brand)"></path>
                      <path d="M4.3418 18.7394L2.3418 15.2753C2.20919 15.0457 2.17326 14.7727 2.2419 14.5165C2.31054 14.2603 2.47814 14.0419 2.70782 13.9093L4.43987 12.9093L7.43987 18.1055L5.70782 19.1055C5.47814 19.2381 5.20519 19.274 4.94901 19.2053C4.69283 19.1367 4.47441 18.9691 4.3418 18.7394Z" fill="var(--color-brand)"></path>
                      <path d="M13.9902 22H9.99023C9.72502 22 9.47068 21.8946 9.28314 21.7071C9.09561 21.5196 8.99023 21.2652 8.99023 21V19H14.9902V21C14.9902 21.2652 14.8849 21.5196 14.6974 21.7071C14.5098 21.8946 14.2555 22 13.9902 22Z" fill="var(--color-brand)"></path>
                      <path d="M21.6533 15.2762L19.6533 18.7403C19.5207 18.97 19.3023 19.1376 19.0461 19.2062C18.7899 19.2749 18.517 19.2389 18.2873 19.1063L16.5552 18.1063L19.5552 12.9102L21.2873 13.9102C21.517 14.0428 21.6846 14.2612 21.7532 14.5174C21.8218 14.7735 21.7859 15.0465 21.6533 15.2762Z" fill="var(--color-brand)"></path>
                      <path d="M19.6543 5.27618L21.6543 8.74028C21.7869 8.96997 21.8228 9.24294 21.7542 9.49912C21.6855 9.7553 21.518 9.9737 21.2883 10.1063L19.5562 11.1063L16.5562 5.91016L18.2883 4.91016C18.518 4.77755 18.7909 4.74163 19.0471 4.81028C19.3033 4.87892 19.5217 5.0465 19.6543 5.27618Z" fill="var(--color-brand)"></path>
                      <path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill="var(--color-surface)"></path>
                    </svg>
                  </span>
                  <h3 data-i18n="why-codepresso-intro-item-title-03">일하는 방식의 전환</h3>
                </div>
                <p class="slide-card-desc" data-i18n="why-codepresso-intro-item-desc-03"><strong>AXpresso</strong>가 일하는 방식을 AI 중심으로 재설계합니다.</p>
              </article>

              <!--
                가운데 "데이터" 라벨. 양쪽에서 화살표가 이 지점으로 모인다 —
                두 카드가 각각 서 있는 게 아니라 데이터에서 만난다는 뜻이다.
                원형 알약(96px)이 세로 공간을 과하게 차지해 가로 pill 한 줄로 줄였다.
              -->
              <div class="slide-join" aria-hidden="true">

                <span class="slide-join-pill">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="12" cy="6" rx="7" ry="2.6" stroke="currentColor" stroke-width="1.8"></ellipse>
                    <path d="M5 6V12C5 13.4 8.1 14.6 12 14.6C15.9 14.6 19 13.4 19 12V6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
                    <path d="M5 12V18C5 19.4 8.1 20.6 12 20.6C15.9 20.6 19 19.4 19 18V12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
                  </svg>
                  <span>데이터</span>
                </span>
  
              </div>

              <article class="slide-card is-ours">
                <p class="tag slide-card-tag" data-i18n="why-codepresso-intro-item-tag-02">역량 진단·교육</p>
                <div class="slide-card-head">
                  <span class="start-icon" aria-hidden="true">
                    <!-- 일하는 사람 — images/icons/library/112.영업,외근.svg(서류가방), 색을 브랜드 톤으로 교체 -->
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 5H3C2.44772 5 2 5.44772 2 6V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19V6C22 5.44772 21.5523 5 21 5Z" fill="var(--color-brand-dark)"></path>
                      <path d="M10 3H14C14.2652 3 14.5196 3.10537 14.7071 3.29291C14.8946 3.48044 15 3.73478 15 4V5H9V4C9 3.73478 9.10534 3.48044 9.29288 3.29291C9.48041 3.10537 9.73478 3 10 3Z" fill="var(--color-brand-dark)"></path>
                      <path d="M21 5.00977H3C2.73478 5.00977 2.48043 5.11512 2.29289 5.30266C2.10536 5.49019 2 5.74455 2 6.00977V12.0098C2 12.5402 2.21071 13.0489 2.58578 13.424C2.96086 13.7991 3.46957 14.0098 4 14.0098H20C20.5304 14.0098 21.0391 13.7991 21.4142 13.424C21.7893 13.0489 22 12.5402 22 12.0098V6.00977C22 5.74455 21.8946 5.49019 21.7071 5.30266C21.5196 5.11512 21.2652 5.00977 21 5.00977Z" fill="var(--color-brand)"></path>
                      <path d="M7 9H5V12H7V9Z" fill="var(--color-surface)"></path>
                      <path d="M19 9H17V12H19V9Z" fill="var(--color-surface)"></path>
                    </svg>
                  </span>
                  <h3 data-i18n="why-codepresso-intro-item-title-04">일하는 사람의 전환</h3>
                </div>
                <p class="slide-card-desc" data-i18n="why-codepresso-intro-item-desc-04"><strong>역량 진단·교육</strong>이 진단·학습·분석·개선의 성장 루프를 만듭니다.</p>

              </article>
            </div>
          </div>
        </div>

        <!-- 두 열 다 카드 2장 높이로 끝나도록 맺음말은 열 안이 아니라 바깥 전체 폭으로 뺐다 -->
        <p class="slide-note" data-i18n="why-codepresso-intro-note">어디서부터 시작해도 좋습니다. 자동화에서 쌓인 활용 데이터가 역량 진단으로, 진단 결과가 다시 업무 개선으로 이어질 때 전환이 완성됩니다.</p>
      </div>
    </section>

    <!--
      05 Position — 경쟁 구도 좌표.
      어휘표에 없던 역할이라 `positioning`으로 새로 등록했다(사용자 확인 2026-08-31).
      2축 좌표(가로 = 도구 역량, 세로 = 사람 역량)에 경쟁 유형 4개와 우리를 놓는다.
      좌표는 그림이므로 스크린리더에는 숨기고, 바로 아래 설명문이 같은 내용을 글로 전한다.

      어두운 판이다 — 이 페이지에서 강조 구간 하나를 갖는 자리이고(subpage-guide 7-1),
      좌표 위 점이 배경과 대비돼야 "우리가 오른쪽 위"가 한눈에 읽힌다.
    -->
    <section class="positioning is-dark fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="why-codepresso-positioning-eyebrow">Position</p>
          <h2 data-i18n="why-codepresso-positioning-title">경쟁 구도에서 우리의 자리</h2>
          <p class="desc" data-i18n="why-codepresso-positioning-desc">진단만 하는 회사는 처방이 없고, 교육만 하는 회사는 실행 도구가 없습니다. <br data-break="desktop">우리는 진단, 교육, 도구, 그리고 연결까지 전부입니다.</p>
        </div>
        <div class="section-content">
          <div class="position-map" aria-hidden="true">
            <span class="position-axis is-y">사람 역량 ↑</span>
            <span class="position-axis is-x">도구 역량 →</span>

            <!-- 각 점의 자리는 --pos-x·--pos-y(%)로 준다. 값이 마크업에 보여야
                 비개발자가 좌표를 옮길 수 있다(마케팅팀 인수인계 전제). -->
            <span class="position-dot" style="--pos-x: 22%; --pos-y: 68%" data-i18n="why-codepresso-positioning-item-01">교육 단독형</span>
            <span class="position-dot" style="--pos-x: 34%; --pos-y: 42%" data-i18n="why-codepresso-positioning-item-02">진단 단독형</span>
            <span class="position-dot" style="--pos-x: 72%; --pos-y: 22%" data-i18n="why-codepresso-positioning-item-03">도구 단독형</span>
            <span class="position-dot" style="--pos-x: 50%; --pos-y: 52%" data-i18n="why-codepresso-positioning-item-04">컨설팅형</span>
            <span class="position-dot is-us" style="--pos-x: 82%; --pos-y: 84%">Codepresso</span>
          </div>
        </div>
      </div>
    </section>

    <!--
      03 The Cycle — 4단계 순환.
      skills 01의 .loop과 같은 역할(4칸 + 칸 사이 화살표 + 마지막 ↺ 한 줄)이라
      그 구조를 그대로 본뜬다. 다만 .loop은 .skills 스코프 안에 있어 이 페이지에서는
      로드되지 않으므로(인벤토리 C·D 항목의 판단 순서 3번), 같은 방식으로 이 페이지 CSS에
      .cycle로 만든다. 4칸은 전부 같은 흰 카드다 — 결론 칸 강조(is-return)와 ↺ 마무리 줄은
      뺐다(사용자 지시). 순환은 섹션 제목이 말하고, 칸은 단계만 보여준다.
    -->
    <section class="process fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="why-codepresso-process-eyebrow">The Cycle</p>
          <h2 data-i18n="why-codepresso-process-title">순환할수록 정교해지는 구조</h2>
        </div>
        <div class="section-content">
          <ol class="cycle">
            <li>
              <div class="cycle-head">
                <span class="cycle-no">1</span>
                <p class="cycle-en" data-i18n="why-codepresso-process-item-en-01">Data</p>
              </div>
              <h3 data-i18n="why-codepresso-process-item-title-01">도구 사용 데이터</h3>
              <p class="description" data-i18n="why-codepresso-process-item-desc-01">누가 무엇을 얼마나 쓰는가</p>
              <span class="cycle-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </li>
            <li>
              <div class="cycle-head">
                <span class="cycle-no">2</span>
                <p class="cycle-en" data-i18n="why-codepresso-process-item-en-02">Assess</p>
              </div>
              <h3 data-i18n="why-codepresso-process-item-title-02">역량 진단 반영</h3>
              <p class="description" data-i18n="why-codepresso-process-item-desc-02">데이터가 진단을 정확하게</p>
              <span class="cycle-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </li>
            <li>
              <div class="cycle-head">
                <span class="cycle-no">3</span>
                <p class="cycle-en" data-i18n="why-codepresso-process-item-en-03">Learn</p>
              </div>
              <h3 data-i18n="why-codepresso-process-item-title-03">맞춤 학습</h3>
              <p class="description" data-i18n="why-codepresso-process-item-desc-03">부족한 것만 정확히 채움</p>
              <span class="cycle-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </li>
            <li>
              <div class="cycle-head">
                <span class="cycle-no">4</span>
                <p class="cycle-en" data-i18n="why-codepresso-process-item-en-04">Improve</p>
              </div>
              <h3 data-i18n="why-codepresso-process-item-title-04">도구 활용 극대화</h3>
              <p class="description" data-i18n="why-codepresso-process-item-desc-04">성과가 다시 데이터로</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!--
      04 Scenario — 김 대리의 3개월.
      "기간 라벨 + 제목 + 설명"이 그대로 공용 timeline의 Markup API다(1개월차 → term).
      진입 시 단계가 순서대로 들어오는 stagger도 컴포넌트가 이미 갖고 있어 손대지 않는다.
      이 페이지에서는 각 단계에 "무엇이 근거였는가"를 한 줄 더 붙이므로
      timeline__body 안에 근거 칩만 페이지 CSS로 추가한다.
    -->
    <section class="journey fade-up">
      <div class="section-wrap col">
        <div class="section-title text-left">
          <p class="tag" data-i18n="why-codepresso-journey-eyebrow">Scenario</p>
          <h2 data-i18n="why-codepresso-journey-title">김 대리의 3개월</h2>
          <p class="desc" data-i18n="why-codepresso-journey-desc">실제 고객 여정들을 한 사람의 이야기로 재구성했습니다. <br data-break="desktop">선순환이 어떻게 작동하는지 따라가 보세요.</p>
        </div>
        <!-- 좌: 3개월 타임라인 · 우: 그 3개월이 실제로 어떤 화면으로 보이는지.
             이야기만 글로 두면 "재구성한 사례"라는 말이 증거 없이 떠 있으므로,
             관리자가 보는 대시보드를 한 장 함께 둔다.
             연출은 공용 6종 중 ticker — "숫자로 설득하는 자리·관리자 시점"이고,
             김 대리의 활용률·진단 점수·재진단이 전부 수치라 맞는다.
             목업 루트는 .journey-mock이 아니라 .mock-screen이다(journey-stage.js가
             없는 페이지에서 .journey-mock을 쓰면 자식이 opacity 0으로 남아
             빈 상자가 된다 — mock-motion-guide 공통규칙 3번). -->
        <div class="section-content scenario-layout">
          <ol class="timeline scenario" data-scenario-steps="">
            <li data-scenario-step="data">
              <span class="timeline__term" data-i18n="why-codepresso-journey-item-term-01">1개월차</span>
              <span class="timeline__marker" aria-hidden="true"></span>
              <div class="timeline__body">
                <p class="scenario-stage" data-i18n="why-codepresso-journey-item-stage-01">데이터</p>
                <h3 class="timeline__title" data-i18n="why-codepresso-journey-item-title-01">에이전트 사용 로그, 하위 20%</h3>
                <p class="timeline__desc" data-i18n="why-codepresso-journey-item-desc-01">AXpresso 도입 후에도 김 대리의 활용률은 낮았습니다. 도구 탓일까요, 역량 탓일까요? 데이터가 답합니다.</p>
              </div>
            </li>
            <li data-scenario-step="assess">
              <span class="timeline__term" data-i18n="why-codepresso-journey-item-term-02">2개월차</span>
              <span class="timeline__marker" aria-hidden="true"></span>
              <div class="timeline__body">
                <p class="scenario-stage" data-i18n="why-codepresso-journey-item-stage-02">진단 → 학습</p>
                <h3 class="timeline__title" data-i18n="why-codepresso-journey-item-title-02">AI Fluent 진단: "프롬프트 설계 역량 부족"</h3>
                <p class="timeline__desc" data-i18n="why-codepresso-journey-item-desc-02">진단 결과에 따라 SkillFit이 김 대리만의 학습 경로를 생성하고, 1:1 AI 튜터가 취약점을 집중 보완합니다.</p>
              </div>
            </li>
            <li data-scenario-step="outcome">
              <span class="timeline__term" data-i18n="why-codepresso-journey-item-term-03">3개월차</span>
              <span class="timeline__marker" aria-hidden="true"></span>
              <div class="timeline__body">
                <p class="scenario-stage" data-i18n="why-codepresso-journey-item-stage-03">성과</p>
                <h3 class="timeline__title" data-i18n="why-codepresso-journey-item-title-03">활용률 상승, 성과로 증명</h3>
                <p class="timeline__desc" data-i18n="why-codepresso-journey-item-desc-03">재진단으로 역량 변화를 숫자로 확인하고, 팀 전체의 확산 근거가 됩니다.</p>
              </div>
            </li>
          </ol>

          <!--
            우측 목업 — 좌측 타임라인 3단계와 1:1로 짝을 이룬다.
            공용 tab-catalog와 같은 방식으로 key를 맞추고(data-scenario-panel),
            scenario-switch.js가 스크롤 위치에 따라 .is-active를 옮긴다.
            연출은 단계마다 다르게 골랐다 — 1개월차는 "낮은 활용률"이라 focus,
            2개월차는 "진단 결과 → 학습 경로"라 detail, 3개월차는 수치라 ticker.
          -->
          <div class="scenario-screens" data-scenario-screens="">

            <!-- ① 1개월차 · 데이터 — 사용 로그에서 김 대리가 하위 20%로 잡힌다 -->
            <div class="preview-frame mock-screen scenario-mock is-active" data-scenario-panel="data" data-mock-motion="focus" aria-hidden="true">
              <div class="journey-mock-head">
                <span class="journey-mock-title">에이전트 사용 로그</span>
                <span class="journey-mock-badge">1개월차</span>
              </div>

              <ul class="journey-mock-list">
                <li class="journey-mock-item is-quiet">
                  <span class="journey-mock-item-name">이 차장</span>
                  <span style="flex: 1"></span>
                  <span class="text-caption strong">일 42회</span>
                </li>
                <li class="journey-mock-item is-quiet">
                  <span class="journey-mock-item-name">박 과장</span>
                  <span style="flex: 1"></span>
                  <span class="text-caption strong">일 31회</span>
                </li>
                <li class="journey-mock-item is-focus">
                  <span class="journey-mock-avatar">김</span>
                  <span class="journey-mock-item-name">김 대리</span>
                  <span style="flex: 1"></span>
                  <span class="text-caption strong">일 3회</span>
                </li>
              </ul>

              <div class="journey-mock-progress">
                <div class="journey-mock-progress-bar"><span style="width: 20%"></span></div>
                <span class="text-caption strong">하위 20%</span>
              </div>
            </div>

            <!--
              ② 2개월차 · 진단 → 학습 — 부족한 항목이 그대로 학습 경로가 된다.
              연출을 detail에서 focus로 바꿨다. mock-detail은 좌측 aside 190px +
              우측 패널 2단 구조라 **프레임 폭이 넓을 때**를 전제한다(다른 페이지에서는
              mock-detail이 프레임 루트다 — preview-frame--flush mock-detail).
              여기는 420px 사이드 칼럼이라 우측 패널이 228px로 눌리고, 안쪽 여백이
              다른 두 판(L25)과 어긋났다(head L17 · mock-detail L1). 세 판이 번갈아
              나타나는 자리라 판마다 여백이 다르면 전환할 때 경계가 튄다.
            -->
            <div class="preview-frame mock-screen scenario-mock" data-scenario-panel="assess" data-mock-motion="focus" aria-hidden="true">
              <div class="journey-mock-head">
                <span class="journey-mock-title">AI Fluent 진단 결과</span>
                <span class="journey-mock-badge">2개월차</span>
              </div>

              <!-- 진단 점수 3항목 — 부족한 항목만 is-focus로 떠오른다 -->
              <ul class="journey-mock-list">
                <li class="journey-mock-item is-quiet">
                  <span class="journey-mock-item-name">데이터 해석</span>
                  <span style="flex: 1"></span>
                  <span class="text-caption strong">78점</span>
                </li>
                <li class="journey-mock-item is-quiet">
                  <span class="journey-mock-item-name">도구 활용</span>
                  <span style="flex: 1"></span>
                  <span class="text-caption strong">65점</span>
                </li>
                <li class="journey-mock-item is-focus">
                  <span class="journey-mock-item-name">프롬프트 설계</span>
                  <span style="flex: 1"></span>
                  <span class="text-caption strong">32점</span>
                </li>
              </ul>

              <!-- 그 결과가 곧 학습 경로가 된다 -->
              <p>SkillFit 학습 경로</p>
              <ul class="journey-mock-list">
                <li class="journey-mock-item is-current">
                  <span class="journey-mock-item-name">프롬프트 설계 기초</span>
                </li>
              </ul>
            </div>

            <!-- ③ 3개월차 · 성과 — 재진단 점수와 활용률이 함께 오른다 -->
            <div class="preview-frame mock-screen scenario-mock" data-scenario-panel="outcome" data-mock-motion="ticker" aria-hidden="true">
              <div class="journey-mock-head">
                <span class="journey-mock-title">AI 역량·활용 대시보드</span>
                <span class="journey-mock-badge is-live"><i class="is-pulse"></i>실시간</span>
              </div>

              <div class="mock-ticker-stats">
                <article>
                  <span class="text-caption">진단 전</span>
                  <b class="is-pop">41<em>점</em></b>
                </article>
                <article>
                  <span class="text-caption">재진단</span>
                  <b class="is-pop is-current" style="animation-delay: .1s">72<em>점</em></b>
                </article>
              </div>

              <!-- 재진단에서 올라간 막대 하나만 is-current로 강조한다 -->
              <div class="mock-ticker-chart">
                <span class="is-bar" style="--mock-bar-h: 24%"></span>
                <span class="is-bar" style="--mock-bar-h: 38%"></span>
                <span class="is-bar" style="--mock-bar-h: 46%"></span>
                <span class="is-bar" style="--mock-bar-h: 62%"></span>
                <span class="is-bar is-current" style="--mock-bar-h: 88%"></span>
              </div>

              <ul class="journey-mock-list">
                <li class="journey-mock-item is-feed">
                  <span class="journey-mock-avatar">김</span>
                  <span class="journey-mock-item-name">재진단 완료 · 프롬프트 설계 +28</span>
                  <span class="text-caption strong">방금</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--
      06 Industry — 업종별 적용.
      "분류를 골라 그 분야 내용을 본다"가 그대로 공용 tab-catalog의 역할이고
      전환은 js/catalog-board.js가 맡는다(data-catalog-autoplay를 안 붙였으므로
      자동 순환 없이 클릭으로만 전환 — 읽는 중 판이 바뀌면 방해라 이 페이지는 opt-in 안 함).
      탭 줄은 index.html part-nav와 동일한 마크업(슬라이딩 인디케이터 포함) —
      인디케이터 이동만 catalog-board.js가 맡는다(data-catalog-indicator).
      판 안은 4블록을 "문제 → 처방(AXpresso 적용·역량 교육 매핑) → 기대 효과" 3단
      인과 구조로 재배치했다 — compare-panel__arrow를 재사용해 흐름을 화살표로 잇는다.
    -->
    <section class="catalog fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="why-codepresso-catalog-eyebrow">Industry</p>
          <h2 data-i18n="why-codepresso-catalog-title">우리 회사에선 어떻게 쓰나요</h2>
        </div>
        <div class="section-content">
          <div class="tab-catalog" data-catalog-board="">
            <nav class="part-nav" data-catalog-nav="" aria-label="업종 선택">
              <span class="part-nav-indicator" data-catalog-indicator="" aria-hidden="true"></span>
              <a class="part-nav-item is-active" href="#industry-manufacturing" data-catalog-category="manufacturing"><span data-i18n="why-codepresso-catalog-tab-01">제조</span></a>
              <a class="part-nav-item" href="#industry-finance" data-catalog-category="finance"><span data-i18n="why-codepresso-catalog-tab-02">금융</span></a>
              <a class="part-nav-item" href="#industry-retail" data-catalog-category="retail"><span data-i18n="why-codepresso-catalog-tab-03">유통</span></a>
              <a class="part-nav-item" href="#industry-it" data-catalog-category="it"><span data-i18n="why-codepresso-catalog-tab-04">IT서비스</span></a>
            </nav>

            <div class="tab-catalog__panels preview-frame">
              <div class="tab-catalog__panel is-active" id="industry-manufacturing" data-catalog-panel="manufacturing">
                <div class="industry-flow">
                  <div class="industry-stage industry-stage--pain">
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- 주의,강조 — flat_icon_svg/117.주의,강조.svg -->
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill="color-mix(in srgb, var(--color-critical) 25%, var(--color-surface))"></path>
                          <path d="M12.702 6.5H11.2976C11.1616 6.49978 11.027 6.52424 10.9021 6.57186C10.7772 6.61947 10.6646 6.68924 10.5713 6.77687C10.478 6.86449 10.406 6.96812 10.3596 7.08136C10.3132 7.1946 10.2934 7.31506 10.3016 7.43531L10.7398 14H13.2498L13.698 7.43531C13.7062 7.31506 13.6864 7.1946 13.64 7.08136C13.5937 6.96812 13.5216 6.86449 13.4283 6.77687C13.335 6.68924 13.2224 6.61947 13.0975 6.57186C12.9726 6.52424 12.838 6.49978 12.702 6.5Z" fill="var(--color-critical)"></path>
                          <path d="M12 18.3604C12.8284 18.3604 13.5 17.6888 13.5 16.8604C13.5 16.0319 12.8284 15.3604 12 15.3604C11.1716 15.3604 10.5 16.0319 10.5 16.8604C10.5 17.6888 11.1716 18.3604 12 18.3604Z" fill="var(--color-critical)"></path>
                        </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-01">Pain Point</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-01">설비·품질 데이터는 쌓이는데 보고서·검사·발주는 여전히 수작업.</p>
                    </div>
                  </div>

                  <span class="industry-flow-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>

                  <div class="industry-stage industry-stage--fix">
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- AXpresso 적용 — images/icons/service/ic_axBuild.svg의 실제 path -->
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.5001 5L12.0001 1L2.50007 5V9C2.49107 12.0185 3.39297 14.9695 5.08786 17.4672C6.78276 19.9649 9.19179 21.8932 12.0001 23C14.8083 21.8932 17.2174 19.9649 18.9123 17.4672C20.6072 14.9695 21.5091 12.0185 21.5001 9V5Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4089 11.5203L15.2373 7.70001L17.0032 9.46964L11.3316 15.1293L7.7002 11.181L9.54027 9.48864L11.4089 11.5203Z" fill="var(--color-brand)"></path>
                        </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-02">AXpresso 적용</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-02">품질 리포트 자동화, 이슈 모니터링 에이전트, 회의록 자동화.</p>
                    </div>
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- 역량 교육 매핑 — images/icons/library/006.화상회의.svg의 실제 path. 배경 rect는 빼고
                              viewBox를 그림 범위로 잘랐다(다른 24-grid 아이콘과 광학 크기를 맞춤). -->
                        <svg viewBox="3 1 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.9998 18H14.9998L16.7198 22.3199C16.7514 22.3951 16.7638 22.477 16.7558 22.5581C16.7478 22.6392 16.7197 22.7171 16.674 22.7846C16.6283 22.8521 16.5665 22.9072 16.4942 22.9448C16.4219 22.9824 16.3413 23.0014 16.2598 23H7.72981C7.6483 23.0014 7.56773 22.9824 7.4954 22.9448C7.42307 22.9072 7.36127 22.8521 7.31559 22.7846C7.26991 22.7171 7.2418 22.6392 7.23381 22.5581C7.22581 22.477 7.23819 22.3951 7.26982 22.3199L8.9998 18Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                          <path d="M12 19C16.9706 19 21 14.9706 21 10C21 5.02944 16.9706 1 12 1C7.02944 1 3 5.02944 3 10C3 14.9706 7.02944 19 12 19Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                          <path d="M12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z" fill="var(--color-brand)"></path>
                        </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-03">역량 교육 매핑</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-03">현장 관리자 AI Fluent 진단 → 실무 프롬프트·에이전트 활용 교육.</p>
                    </div>
                  </div>

                  <span class="industry-flow-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>

                  <div class="industry-stage industry-stage--result">
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- 기대 효과 — images/icons/service/ic_lineChart.svg의 실제 path -->
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.8824 3H5.11765C3.9481 3 3 3.89543 3 5V19C3 20.1046 3.9481 21 5.11765 21H18.8824C20.0519 21 21 20.1046 21 19V5C21 3.89543 20.0519 3 18.8824 3Z" fill="color-mix(in srgb, var(--color-brand) 15%, var(--color-surface))"></path>
                          <path d="M18.5 13H16.5V9.5H13V7.5H18.5V13Z" fill="var(--color-brand)"></path>
                          <path d="M16.3 8.21973L11 13.5097L8 10.5097L3 15.5V18.49L8 13.4997L11 16.4997L17.71 9.79973L16.3 8.21973Z" fill="var(--color-brand)"></path>
                        </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-04">기대 효과</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-04">반복 문서 업무 절감, 데이터 기반 의사결정 정착.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-catalog__panel" id="industry-finance" data-catalog-panel="finance">
                <div class="industry-flow">
                  <div class="industry-stage industry-stage--pain">
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- 주의,강조 — flat_icon_svg/117.주의,강조.svg -->
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill="color-mix(in srgb, var(--color-critical) 25%, var(--color-surface))"></path>
                        <path d="M12.702 6.5H11.2976C11.1616 6.49978 11.027 6.52424 10.9021 6.57186C10.7772 6.61947 10.6646 6.68924 10.5713 6.77687C10.478 6.86449 10.406 6.96812 10.3596 7.08136C10.3132 7.1946 10.2934 7.31506 10.3016 7.43531L10.7398 14H13.2498L13.698 7.43531C13.7062 7.31506 13.6864 7.1946 13.64 7.08136C13.5937 6.96812 13.5216 6.86449 13.4283 6.77687C13.335 6.68924 13.2224 6.61947 13.0975 6.57186C12.9726 6.52424 12.838 6.49978 12.702 6.5Z" fill="var(--color-critical)"></path>
                        <path d="M12 18.3604C12.8284 18.3604 13.5 17.6888 13.5 16.8604C13.5 16.0319 12.8284 15.3604 12 15.3604C11.1716 15.3604 10.5 16.0319 10.5 16.8604C10.5 17.6888 11.1716 18.3604 12 18.3604Z" fill="var(--color-critical)"></path>
                      </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-01">Pain Point</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-05">규제·보안 요건 탓에 AI 도입 시도가 번번이 멈춘다.</p>
                    </div>
                  </div>

                  <span class="industry-flow-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>

                  <div class="industry-stage industry-stage--fix">
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- AXpresso 적용 — images/icons/service/ic_axBuild.svg의 실제 path -->
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5001 5L12.0001 1L2.50007 5V9C2.49107 12.0185 3.39297 14.9695 5.08786 17.4672C6.78276 19.9649 9.19179 21.8932 12.0001 23C14.8083 21.8932 17.2174 19.9649 18.9123 17.4672C20.6072 14.9695 21.5091 12.0185 21.5001 9V5Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4089 11.5203L15.2373 7.70001L17.0032 9.46964L11.3316 15.1293L7.7002 11.181L9.54027 9.48864L11.4089 11.5203Z" fill="var(--color-brand)"></path>
                      </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-02">AXpresso 적용</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-06">국내 클라우드·거버넌스 기반의 심사·보고 업무 자동화.</p>
                    </div>
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- 역량 교육 매핑 — images/icons/library/006.화상회의.svg의 실제 path. 배경 rect는 빼고
                            viewBox를 그림 범위로 잘랐다(다른 24-grid 아이콘과 광학 크기를 맞춤). -->
                      <svg viewBox="3 1 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.9998 18H14.9998L16.7198 22.3199C16.7514 22.3951 16.7638 22.477 16.7558 22.5581C16.7478 22.6392 16.7197 22.7171 16.674 22.7846C16.6283 22.8521 16.5665 22.9072 16.4942 22.9448C16.4219 22.9824 16.3413 23.0014 16.2598 23H7.72981C7.6483 23.0014 7.56773 22.9824 7.4954 22.9448C7.42307 22.9072 7.36127 22.8521 7.31559 22.7846C7.26991 22.7171 7.2418 22.6392 7.23381 22.5581C7.22581 22.477 7.23819 22.3951 7.26982 22.3199L8.9998 18Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                        <path d="M12 19C16.9706 19 21 14.9706 21 10C21 5.02944 16.9706 1 12 1C7.02944 1 3 5.02944 3 10C3 14.9706 7.02944 19 12 19Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                        <path d="M12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z" fill="var(--color-brand)"></path>
                      </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-03">역량 교육 매핑</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-07">컴플라이언스를 고려한 전사 AI 리터러시 진단·교육.</p>
                    </div>
                  </div>

                  <span class="industry-flow-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>

                  <div class="industry-stage industry-stage--result">
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- 기대 효과 — images/icons/service/ic_lineChart.svg의 실제 path -->
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8824 3H5.11765C3.9481 3 3 3.89543 3 5V19C3 20.1046 3.9481 21 5.11765 21H18.8824C20.0519 21 21 20.1046 21 19V5C21 3.89543 20.0519 3 18.8824 3Z" fill="color-mix(in srgb, var(--color-brand) 15%, var(--color-surface))"></path>
                        <path d="M18.5 13H16.5V9.5H13V7.5H18.5V13Z" fill="var(--color-brand)"></path>
                        <path d="M16.3 8.21973L11 13.5097L8 10.5097L3 15.5V18.49L8 13.4997L11 16.4997L17.71 9.79973L16.3 8.21973Z" fill="var(--color-brand)"></path>
                      </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-04">기대 효과</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-08">보안 요건을 지키면서 안전하게 확산하는 AX.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-catalog__panel" id="industry-retail" data-catalog-panel="retail">
                <div class="industry-flow">
                  <div class="industry-stage industry-stage--pain">
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- 주의,강조 — flat_icon_svg/117.주의,강조.svg -->
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill="color-mix(in srgb, var(--color-critical) 25%, var(--color-surface))"></path>
                        <path d="M12.702 6.5H11.2976C11.1616 6.49978 11.027 6.52424 10.9021 6.57186C10.7772 6.61947 10.6646 6.68924 10.5713 6.77687C10.478 6.86449 10.406 6.96812 10.3596 7.08136C10.3132 7.1946 10.2934 7.31506 10.3016 7.43531L10.7398 14H13.2498L13.698 7.43531C13.7062 7.31506 13.6864 7.1946 13.64 7.08136C13.5937 6.96812 13.5216 6.86449 13.4283 6.77687C13.335 6.68924 13.2224 6.61947 13.0975 6.57186C12.9726 6.52424 12.838 6.49978 12.702 6.5Z" fill="var(--color-critical)"></path>
                        <path d="M12 18.3604C12.8284 18.3604 13.5 17.6888 13.5 16.8604C13.5 16.0319 12.8284 15.3604 12 15.3604C11.1716 15.3604 10.5 16.0319 10.5 16.8604C10.5 17.6888 11.1716 18.3604 12 18.3604Z" fill="var(--color-critical)"></path>
                      </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-01">Pain Point</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-09">상품 등록·CS·정산 업무가 사람 손에 몰려 병목이 된다.</p>
                    </div>
                  </div>

                  <span class="industry-flow-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>

                  <div class="industry-stage industry-stage--fix">
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- AXpresso 적용 — images/icons/service/ic_axBuild.svg의 실제 path -->
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5001 5L12.0001 1L2.50007 5V9C2.49107 12.0185 3.39297 14.9695 5.08786 17.4672C6.78276 19.9649 9.19179 21.8932 12.0001 23C14.8083 21.8932 17.2174 19.9649 18.9123 17.4672C20.6072 14.9695 21.5091 12.0185 21.5001 9V5Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4089 11.5203L15.2373 7.70001L17.0032 9.46964L11.3316 15.1293L7.7002 11.181L9.54027 9.48864L11.4089 11.5203Z" fill="var(--color-brand)"></path>
                      </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-02">AXpresso 적용</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-10">CS 에이전트, 정산·콘텐츠 제작 자동화.</p>
                    </div>
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- 역량 교육 매핑 — images/icons/library/006.화상회의.svg의 실제 path. 배경 rect는 빼고
                            viewBox를 그림 범위로 잘랐다(다른 24-grid 아이콘과 광학 크기를 맞춤). -->
                      <svg viewBox="3 1 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.9998 18H14.9998L16.7198 22.3199C16.7514 22.3951 16.7638 22.477 16.7558 22.5581C16.7478 22.6392 16.7197 22.7171 16.674 22.7846C16.6283 22.8521 16.5665 22.9072 16.4942 22.9448C16.4219 22.9824 16.3413 23.0014 16.2598 23H7.72981C7.6483 23.0014 7.56773 22.9824 7.4954 22.9448C7.42307 22.9072 7.36127 22.8521 7.31559 22.7846C7.26991 22.7171 7.2418 22.6392 7.23381 22.5581C7.22581 22.477 7.23819 22.3951 7.26982 22.3199L8.9998 18Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                        <path d="M12 19C16.9706 19 21 14.9706 21 10C21 5.02944 16.9706 1 12 1C7.02944 1 3 5.02944 3 10C3 14.9706 7.02944 19 12 19Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                        <path d="M12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z" fill="var(--color-brand)"></path>
                      </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-03">역량 교육 매핑</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-11">CS·MD 직군별 역량 진단과 직무 맞춤 학습 경로.</p>
                    </div>
                  </div>

                  <span class="industry-flow-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>

                  <div class="industry-stage industry-stage--result">
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- 기대 효과 — images/icons/service/ic_lineChart.svg의 실제 path -->
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8824 3H5.11765C3.9481 3 3 3.89543 3 5V19C3 20.1046 3.9481 21 5.11765 21H18.8824C20.0519 21 21 20.1046 21 19V5C21 3.89543 20.0519 3 18.8824 3Z" fill="color-mix(in srgb, var(--color-brand) 15%, var(--color-surface))"></path>
                        <path d="M18.5 13H16.5V9.5H13V7.5H18.5V13Z" fill="var(--color-brand)"></path>
                        <path d="M16.3 8.21973L11 13.5097L8 10.5097L3 15.5V18.49L8 13.4997L11 16.4997L17.71 9.79973L16.3 8.21973Z" fill="var(--color-brand)"></path>
                      </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-04">기대 효과</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-12">응대 속도 향상, 정산·콘텐츠 리드타임 단축.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-catalog__panel" id="industry-it" data-catalog-panel="it">
                <div class="industry-flow">
                  <div class="industry-stage industry-stage--pain">
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- 주의,강조 — flat_icon_svg/117.주의,강조.svg -->
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill="color-mix(in srgb, var(--color-critical) 25%, var(--color-surface))"></path>
                        <path d="M12.702 6.5H11.2976C11.1616 6.49978 11.027 6.52424 10.9021 6.57186C10.7772 6.61947 10.6646 6.68924 10.5713 6.77687C10.478 6.86449 10.406 6.96812 10.3596 7.08136C10.3132 7.1946 10.2934 7.31506 10.3016 7.43531L10.7398 14H13.2498L13.698 7.43531C13.7062 7.31506 13.6864 7.1946 13.64 7.08136C13.5937 6.96812 13.5216 6.86449 13.4283 6.77687C13.335 6.68924 13.2224 6.61947 13.0975 6.57186C12.9726 6.52424 12.838 6.49978 12.702 6.5Z" fill="var(--color-critical)"></path>
                        <path d="M12 18.3604C12.8284 18.3604 13.5 17.6888 13.5 16.8604C13.5 16.0319 12.8284 15.3604 12 15.3604C11.1716 15.3604 10.5 16.0319 10.5 16.8604C10.5 17.6888 11.1716 18.3604 12 18.3604Z" fill="var(--color-critical)"></path>
                      </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-01">Pain Point</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-13">개발 조직 안에서도 AI 활용 편차가 크다.</p>
                    </div>
                  </div>

                  <span class="industry-flow-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>

                  <div class="industry-stage industry-stage--fix">
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- AXpresso 적용 — images/icons/service/ic_axBuild.svg의 실제 path -->
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5001 5L12.0001 1L2.50007 5V9C2.49107 12.0185 3.39297 14.9695 5.08786 17.4672C6.78276 19.9649 9.19179 21.8932 12.0001 23C14.8083 21.8932 17.2174 19.9649 18.9123 17.4672C20.6072 14.9695 21.5091 12.0185 21.5001 9V5Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4089 11.5203L15.2373 7.70001L17.0032 9.46964L11.3316 15.1293L7.7002 11.181L9.54027 9.48864L11.4089 11.5203Z" fill="var(--color-brand)"></path>
                      </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-02">AXpresso 적용</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-14">회의록·태스크 관리·지식베이스 에이전트로 협업 자동화.</p>
                    </div>
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- 역량 교육 매핑 — images/icons/library/006.화상회의.svg의 실제 path. 배경 rect는 빼고
                            viewBox를 그림 범위로 잘랐다(다른 24-grid 아이콘과 광학 크기를 맞춤). -->
                      <svg viewBox="3 1 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.9998 18H14.9998L16.7198 22.3199C16.7514 22.3951 16.7638 22.477 16.7558 22.5581C16.7478 22.6392 16.7197 22.7171 16.674 22.7846C16.6283 22.8521 16.5665 22.9072 16.4942 22.9448C16.4219 22.9824 16.3413 23.0014 16.2598 23H7.72981C7.6483 23.0014 7.56773 22.9824 7.4954 22.9448C7.42307 22.9072 7.36127 22.8521 7.31559 22.7846C7.26991 22.7171 7.2418 22.6392 7.23381 22.5581C7.22581 22.477 7.23819 22.3951 7.26982 22.3199L8.9998 18Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                        <path d="M12 19C16.9706 19 21 14.9706 21 10C21 5.02944 16.9706 1 12 1C7.02944 1 3 5.02944 3 10C3 14.9706 7.02944 19 12 19Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                        <path d="M12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z" fill="var(--color-brand)"></path>
                      </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-03">역량 교육 매핑</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-15">AI Fluent로 편차를 진단하고 SkillFit으로 개인별 보완.</p>
                    </div>
                  </div>

                  <span class="industry-flow-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>

                  <div class="industry-stage industry-stage--result">
                    <div class="industry-card">
                      <span class="industry-card-icon icon-md" aria-hidden="true">
                        <!-- 기대 효과 — images/icons/service/ic_lineChart.svg의 실제 path -->
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8824 3H5.11765C3.9481 3 3 3.89543 3 5V19C3 20.1046 3.9481 21 5.11765 21H18.8824C20.0519 21 21 20.1046 21 19V5C21 3.89543 20.0519 3 18.8824 3Z" fill="color-mix(in srgb, var(--color-brand) 15%, var(--color-surface))"></path>
                        <path d="M18.5 13H16.5V9.5H13V7.5H18.5V13Z" fill="var(--color-brand)"></path>
                        <path d="M16.3 8.21973L11 13.5097L8 10.5097L3 15.5V18.49L8 13.4997L11 16.4997L17.71 9.79973L16.3 8.21973Z" fill="var(--color-brand)"></path>
                      </svg>
                      </span>
                      <p class="industry-card-label" data-i18n="why-codepresso-catalog-item-label-04">기대 효과</p>
                      <p class="description" data-i18n="why-codepresso-catalog-item-desc-16">조직 전체의 AI 생산성 표준화.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--
      06 Start Anywhere — 두 갈래 시작점.
      "조건 2가지를 나열하고 하나를 고르게" 하는 자리라 공용 content-panel 2장을 쓴다.
      마지막 한 줄(어느 쪽에서 시작해도 → 데이터 연결 → 전환 완성)은 결론이므로
      공용 summary-banner를 그대로 쓴다.
    -->
    <section class="features fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="why-codepresso-features-eyebrow">Start Anywhere</p>
          <h2 data-i18n="why-codepresso-features-title">둘 다 있어야 완성되지만, <br data-break="desktop">시작은 더 급한 쪽부터</h2>
          <p class="desc" data-i18n="why-codepresso-features-desc">한쪽만 먼저 도입해도 됩니다. 데이터는 나중에 이어집니다.</p>
        </div>
        <div class="section-content">
          <ul class="start-grid">
            <li>
              <div class="content-panel start-card">
                <div class="content-panel__intro">
                  <p class="text-label brand" data-i18n="why-codepresso-features-item-label-01">도구가 급하다면</p>
                  <h3 data-i18n="why-codepresso-features-item-title-01">AXpresso 먼저</h3>
                  <p class="start-desc" data-i18n="why-codepresso-features-item-desc-01">업무 자동화로 즉시 시간을 회수하고, 쌓인 사용 데이터가 이후 역량 진단의 근거가 됩니다.</p>
                </div>
                <a class="btn btn-ghost" href="/ax-build">
                  <span data-i18n="why-codepresso-features-item-cta-01">업무 자동화 보기</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
              </div>
            </li>
            <li>
              <div class="content-panel start-card">
                <div class="content-panel__intro">
                  <p class="text-label brand" data-i18n="why-codepresso-features-item-label-02">사람이 급하다면</p>
                  <h3 data-i18n="why-codepresso-features-item-title-02">Platform 먼저</h3>
                  <p class="start-desc" data-i18n="why-codepresso-features-item-desc-02">역량 진단과 교육으로 조직을 준비시키고, 역량 데이터가 이후 도구 도입의 설계도가 됩니다.</p>
                </div>
                <a class="btn btn-ghost" href="/skills">
                  <span data-i18n="why-codepresso-features-item-cta-02">역량 진단·교육 보기</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
              </div>
            </li>
          </ul>

          <p class="summary-banner start-note" data-i18n="why-codepresso-features-banner">어디서 시작해도 <strong class="brand">데이터로 이어지면</strong> <strong>전환은 완성됩니다</strong></p>
        </div>
      </div>
    </section>

    <section class="cta-final fade-up">
      <div class="section-wrap col cta-final-inner">
        <h2 class="cta-final-title" data-i18n="why-codepresso-cta-final-title">어디가 더 급한지부터<br>진단하세요</h2>
        <p class="cta-final-desc" data-i18n="why-codepresso-cta-final-desc">진단 결과가 도입 순서를 알려드립니다.</p>
        <div class="cta-final-actions">
          <a href="#" class="btn btn-primary btn-lg" id="hero-diagnosis-cta">
            <span data-i18n="why-codepresso-cta-final-cta-01">3분 AI 활용 진단 시작</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
          <a href="#" class="btn btn-outline-inverse btn-lg" data-i18n="why-codepresso-cta-final-cta-02">도입 문의</a>
        </div>
      </div>
    </section>
  </main>

  

  <!-- include-partials.js를 가장 먼저 둔다(GNB·footer를 삽입한 뒤 나머지가 붙는다).
       stat-reveal은 01의 metric-card 카운트업, tab-catalog는 07의 업종 탭 전환용.
       이 페이지는 feature-card 순환·part-nav·journey-stage·floating-cta를 쓰지 않으므로
       그 스크립트는 넣지 않는다(subpage-guide 4번 판단 기준). -->
  <SiteFooter />
  <ClientInteractions :scripts='["js/fade-up.js","js/header-scroll.js","js/nav-menu.js","js/stat-reveal.js","js/catalog-board.js","js/scenario-switch.js"]' />
</template>

<script setup>
useSeoMeta({ title: "코드프레소 차별점 — 도구도 교육도, 그리고 연결까지 | 코드프레소", description: "도구 전문 회사는 사람을 못 바꾸고, 교육 회사는 도구가 없습니다. Codepresso는 둘 다, 그리고 연결까지 합니다." })
import '~/css/pages/why-codepresso.css'
import '~/css/mobile.css'
</script>
