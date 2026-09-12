<template>
  <SiteHeader />

  <main class="axpresso main-dark">
    <section class="sub-hero">
      <div class="hero-wrap">
        <div class="sub-hero-copy">
          <p class="tag" data-i18n="axpresso-hero-eyebrow">Tool Axis · 일하는 방식의 전환</p>
          <h1 class="hero-title">AXpresso</h1>
          <p class="hero-desc" data-i18n="axpresso-hero-desc">흩어진 도구와 수작업을 그대로 두지 않습니다. <br data-break="desktop">업무 시스템을 AI 중심으로 다시 설계하고, 하나의 자동화된 흐름으로 연결해 실제 운영까지 완성합니다.</p>
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="#">
              <span data-i18n="axpresso-hero-cta-01">도입 문의</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
            <a class="btn btn-outline-inverse btn-lg" href="/cases">
              <span data-i18n="axpresso-hero-cta-02">AX 사례 보기</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </div>
        </div>

        <ul class="hero-facts surface-glass">
          <li class="metric-card is-visible">
            <span class="hero-fact-icon icon-lg" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 4H4.5C3.39543 4 2.5 4.89543 2.5 6V19C2.5 20.1046 3.39543 21 4.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V6C21.5 4.89543 20.6046 4 19.5 4Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                <path d="M8.48 3H7.5C7.22386 3 7 3.22386 7 3.5V5.5C7 5.77614 7.22386 6 7.5 6H8.48C8.75614 6 8.98 5.77614 8.98 5.5V3.5C8.98 3.22386 8.75614 3 8.48 3Z" fill="var(--color-brand)"></path>
                <path d="M16.5 3H15.5C15.2239 3 15 3.22386 15 3.5V5.5C15 5.77614 15.2239 6 15.5 6H16.5C16.7761 6 17 5.77614 17 5.5V3.5C17 3.22386 16.7761 3 16.5 3Z" fill="var(--color-brand)"></path>
                <path d="M2.5 9H21.5V10.5H2.5V9Z" fill="var(--color-brand)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2 17.6L8.4 14.8L9.6 13.6L11.2 15.2L14.9 11.5L16.1 12.7L11.2 17.6Z" fill="var(--color-brand-dark)"></path>
              </svg>
            </span>
            <div>
              <div class="metric-card__value"><span>3</span><span class="unit">주</span></div>
              <p class="metric-card__label text-label">평균 운영 도입 기간</p>
            </div>
          </li>
          <li class="metric-card is-visible">
            <span class="hero-fact-icon icon-lg" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 7.5H13.25V11.875L16.75 14.5L15.25 16.5L10.75 13.125V7.5Z" fill="var(--color-brand)"></path>
              </svg>
            </span>
            <div>
              <div class="metric-card__value"><span>99</span><span class="unit">%</span></div>
              <p class="metric-card__label text-label">최대 업무 시간 단축</p>
            </div>
          </li>
          <li class="metric-card is-visible">
            <span class="hero-fact-icon icon-lg" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 17H20C20.2652 17 20.5196 17.1053 20.7071 17.2929C20.8946 17.4804 21 17.7348 21 18V22H3V18C3 17.7348 3.10537 17.4804 3.29291 17.2929C3.48044 17.1053 3.73478 17 4 17Z" fill="var(--color-brand)"></path>
                <path d="M7 3H17C17.2652 3 17.5196 3.10536 17.7071 3.29289C17.8946 3.48043 18 3.73478 18 4V7H6V4C6 3.73478 6.10537 3.48043 6.29291 3.29289C6.48044 3.10536 6.73478 3 7 3Z" fill="var(--color-brand-dark)"></path>
                <path d="M14 18H10V22H14V18Z" fill="var(--color-brand-dark)"></path>
                <path d="M20 7H4V17H20V7Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                <path d="M20 5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5Z" fill="var(--color-brand)"></path>
                <path d="M12.75 8.75H11.25C10.9739 8.75 10.75 8.97386 10.75 9.25V10.75C10.75 11.0261 10.9739 11.25 11.25 11.25H12.75C13.0261 11.25 13.25 11.0261 13.25 10.75V9.25C13.25 8.97386 13.0261 8.75 12.75 8.75Z" fill="var(--color-brand-dark)"></path>
                <path d="M16.75 8.75H15.25C14.9739 8.75 14.75 8.97386 14.75 9.25V10.75C14.75 11.0261 14.9739 11.25 15.25 11.25H16.75C17.0261 11.25 17.25 11.0261 17.25 10.75V9.25C17.25 8.97386 17.0261 8.75 16.75 8.75Z" fill="var(--color-brand-dark)"></path>
                <path d="M8.75 8.75H7.25C6.97386 8.75 6.75 8.97386 6.75 9.25V10.75C6.75 11.0261 6.97386 11.25 7.25 11.25H8.75C9.02614 11.25 9.25 11.0261 9.25 10.75V9.25C9.25 8.97386 9.02614 8.75 8.75 8.75Z" fill="var(--color-brand-dark)"></path>
                <path d="M12.75 12.75H11.25C10.9739 12.75 10.75 12.9739 10.75 13.25V14.75C10.75 15.0261 10.9739 15.25 11.25 15.25H12.75C13.0261 15.25 13.25 15.0261 13.25 14.75V13.25C13.25 12.9739 13.0261 12.75 12.75 12.75Z" fill="var(--color-brand-dark)"></path>
                <path d="M16.75 12.75H15.25C14.9739 12.75 14.75 12.9739 14.75 13.25V14.75C14.75 15.0261 14.9739 15.25 15.25 15.25H16.75C17.0261 15.25 17.25 15.0261 17.25 14.75V13.25C17.25 12.9739 17.0261 12.75 16.75 12.75Z" fill="var(--color-brand-dark)"></path>
                <path d="M8.75 12.75H7.25C6.97386 12.75 6.75 12.9739 6.75 13.25V14.75C6.75 15.0261 6.97386 15.25 7.25 15.25H8.75C9.02614 15.25 9.25 15.0261 9.25 14.75V13.25C9.25 12.9739 9.02614 12.75 8.75 12.75Z" fill="var(--color-brand-dark)"></path>
              </svg>
            </span>
            <div>
              <div class="metric-card__value"><span>10</span><span class="unit">+</span></div>
              <p class="metric-card__label text-label">엔터프라이즈 고객</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="positioning fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="axpresso-positioning-eyebrow">Engagement Models</p>
          <h2 data-i18n="axpresso-positioning-title">목적에 맞는 두 가지 시작 방식</h2>
          <p class="desc" data-i18n="axpresso-positioning-desc">빠른 현장 구축과 내부 실행 역량 중 <br data-break="desktop">지금 조직에 가장 필요한 목표에서 시작합니다.</p>
        </div>
        <div class="section-content">
          <ul class="start-grid">
            <li>
              <div class="content-panel start-card">
                <span class="start-icon" aria-hidden="true">
                  <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 19.75C16.2802 19.75 19.75 16.2802 19.75 12C19.75 7.71979 16.2802 4.25 12 4.25C7.71979 4.25 4.25 7.71979 4.25 12C4.25 16.2802 7.71979 19.75 12 19.75Z" fill="color-mix(in srgb, var(--color-brand) 55%, var(--color-surface))"></path>
                    <path d="M10 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3V5H9V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2Z" fill="color-mix(in srgb, var(--color-brand) 55%, var(--color-surface))"></path>
                    <path d="M2.34082 8.73944L4.34082 5.27534C4.47343 5.04566 4.69187 4.87805 4.94805 4.80941C5.20423 4.74077 5.47716 4.77671 5.70685 4.90932L7.4389 5.90932L4.4389 11.1055L2.70685 10.1055C2.47716 9.97286 2.30958 9.75444 2.24094 9.49826C2.1723 9.24208 2.20821 8.96913 2.34082 8.73944Z" fill="color-mix(in srgb, var(--color-brand) 55%, var(--color-surface))"></path>
                    <path d="M4.3418 18.7394L2.3418 15.2753C2.20919 15.0457 2.17326 14.7727 2.2419 14.5165C2.31054 14.2603 2.47814 14.0419 2.70782 13.9093L4.43987 12.9093L7.43987 18.1055L5.70782 19.1055C5.47814 19.2381 5.20519 19.274 4.94901 19.2053C4.69283 19.1367 4.47441 18.9691 4.3418 18.7394Z" fill="color-mix(in srgb, var(--color-brand) 55%, var(--color-surface))"></path>
                    <path d="M13.9902 22H9.99023C9.72502 22 9.47068 21.8946 9.28314 21.7071C9.09561 21.5196 8.99023 21.2652 8.99023 21V19H14.9902V21C14.9902 21.2652 14.8849 21.5196 14.6974 21.7071C14.5098 21.8946 14.2555 22 13.9902 22Z" fill="color-mix(in srgb, var(--color-brand) 55%, var(--color-surface))"></path>
                    <path d="M21.6533 15.2762L19.6533 18.7403C19.5207 18.97 19.3023 19.1376 19.0461 19.2062C18.7899 19.2749 18.517 19.2389 18.2873 19.1063L16.5552 18.1063L19.5552 12.9102L21.2873 13.9102C21.517 14.0428 21.6846 14.2612 21.7532 14.5174C21.8218 14.7735 21.7859 15.0465 21.6533 15.2762Z" fill="color-mix(in srgb, var(--color-brand) 55%, var(--color-surface))"></path>
                    <path d="M19.6543 5.27618L21.6543 8.74028C21.7869 8.96997 21.8228 9.24294 21.7542 9.49912C21.6855 9.7553 21.518 9.9737 21.2883 10.1063L19.5562 11.1063L16.5562 5.91016L18.2883 4.91016C18.518 4.77755 18.7909 4.74163 19.0471 4.81028C19.3033 4.87892 19.5217 5.0465 19.6543 5.27618Z" fill="color-mix(in srgb, var(--color-brand) 55%, var(--color-surface))"></path>
                    <path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill="var(--color-surface)"></path>
                  </svg>
                </span>
                <div class="content-panel__intro">
                  <p class="text-label" data-i18n="axpresso-positioning-label-01">가장 빠른 구축형</p>
                  <h3 data-i18n="axpresso-positioning-item-title-01">AX Build · 20일</h3>
                  <p class="start-desc" data-i18n="axpresso-positioning-item-desc-01">AXpresso가 현장을 진단하고, 업무에 맞는 AI Agent를 구축해 실제 운영 가능한 상태로 배포합니다.</p>
                </div>
                <a class="btn btn-outline-inverse" href="/ax-build">
                  <span data-i18n="axpresso-positioning-item-cta-01">AX Build 자세히</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
              </div>
            </li>
            <li>
              <div class="content-panel start-card">
                <span class="start-icon" aria-hidden="true">
                  <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16H5V4H22L18 10L22 16Z" fill="color-mix(in srgb, var(--color-brand) 45%, var(--color-surface))"></path>
                    <path d="M3.75 3H4.25C4.51522 3 4.76962 3.10534 4.95715 3.29288C5.14469 3.48041 5.25 3.73478 5.25 4V22H2.75V4C2.75 3.73478 2.85537 3.48041 3.04291 3.29288C3.23044 3.10534 3.48478 3 3.75 3Z" fill="var(--color-surface)"></path>
                  </svg>
                </span>
                <div class="content-panel__intro">
                  <p class="text-label" data-i18n="axpresso-positioning-label-02">팀과 함께 만드는 내재화형</p>
                  <h3 data-i18n="axpresso-positioning-item-title-02">AX Grow · 16일</h3>
                  <p class="start-desc" data-i18n="axpresso-positioning-item-desc-02">현업 팀을 교육하고 AI Agent를 함께 구축하며, 역량 진단과 확산 로드맵까지 조직에 남깁니다.</p>
                </div>
                <a class="btn btn-outline-inverse" href="/ax-grow">
                  <span data-i18n="axpresso-positioning-item-cta-02">AX Grow 자세히</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="process fade-up">
      <div class="section-wrap row is-sticky">
        <div class="section-aside">
          <div class="section-title text-left">
            <p class="tag" data-i18n="axpresso-process-eyebrow">How It Works</p>
            <h2 data-i18n="axpresso-process-title">연결하고, 배포하고,<br>운영합니다</h2>
            <p class="desc" data-i18n="axpresso-process-desc">진단 보고서에서 끝나지 않습니다. <br data-break="desktop">실제 업무를 수행하는 AI Agent를 3주 안에 운영에 올립니다.</p>
          </div>
        </div>

        <ol class="process-steps">
          <li>
            <div class="step-head">
              <span class="step-term" data-i18n="axpresso-process-step-term-01">Week 1 · Integrate</span>
              <span class="step-no" aria-hidden="true">01</span>
            </div>
            <span class="step-icon" aria-hidden="true">
              <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 17.21C14.2059 17.21 17.2101 14.2059 17.2101 10.5C17.2101 6.79422 14.2059 3.79004 10.5 3.79004C6.7942 3.79004 3.79004 6.79422 3.79004 10.5C3.79004 14.2059 6.7942 17.21 10.5 17.21Z" fill="color-mix(in srgb, var(--color-brand) 20%, var(--color-surface))"></path>
                <path d="M10.5 4.5C12.0913 4.5 13.6174 5.13214 14.7426 6.25735C15.8678 7.38257 16.5 8.9087 16.5 10.5C16.5 12.0913 15.8678 13.6174 14.7426 14.7426C13.6174 15.8679 12.0913 16.5 10.5 16.5C8.9087 16.5 7.38257 15.8679 6.25735 14.7426C5.13214 13.6174 4.5 12.0913 4.5 10.5C4.5 8.9087 5.13214 7.38257 6.25735 6.25735C7.38257 5.13214 8.9087 4.5 10.5 4.5ZM10.5 2C8.24647 2.00265 6.08599 2.89904 4.49251 4.49252C2.89902 6.08601 2.00265 8.24647 2 10.5C2 11.6162 2.21985 12.7215 2.64702 13.7528C3.07418 14.7841 3.7003 15.7211 4.48959 16.5104C5.27889 17.2997 6.21592 17.9258 7.24719 18.353C8.27846 18.7801 9.38376 19 10.5 19C11.6166 19.0013 12.7225 18.7824 13.7544 18.3557C14.7862 17.929 15.7238 17.3029 16.5133 16.5133C17.3029 15.7238 17.929 14.7862 18.3557 13.7544C18.7824 12.7225 19.0013 11.6166 19 10.5C19 8.24566 18.1045 6.08365 16.5104 4.48959C14.9163 2.89553 12.7543 2 10.5 2Z" fill="var(--color-brand)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4852 14.7068L21.8852 20.1168L20.1158 21.8829L14.7158 16.4729L16.4852 14.7068Z" fill="var(--color-brand-dark)"></path>
              </svg>
            </span>
            <div class="step-body">
              <h3 data-i18n="axpresso-process-step-title-01">업무와 시스템 진단</h3>
              <p class="step-desc" data-i18n="axpresso-process-step-desc-01">현장 업무, 데이터, 사용 도구와 수작업 인계 지점을 함께 매핑합니다.</p>
            </div>
          </li>

          <li>
            <div class="step-head">
              <span class="step-term" data-i18n="axpresso-process-step-term-02">Week 2 · Deploy</span>
              <span class="step-no" aria-hidden="true">02</span>
            </div>
            <span class="step-icon" aria-hidden="true">
              <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19.75C16.2802 19.75 19.75 16.2802 19.75 12C19.75 7.71979 16.2802 4.25 12 4.25C7.71979 4.25 4.25 7.71979 4.25 12C4.25 16.2802 7.71979 19.75 12 19.75Z" fill="color-mix(in srgb, var(--color-brand) 30%, var(--color-surface))"></path>
                <path d="M10 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3V5H9V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2Z" fill="var(--color-brand)"></path>
                <path d="M2.34082 8.73944L4.34082 5.27534C4.47343 5.04566 4.69187 4.87805 4.94805 4.80941C5.20423 4.74077 5.47716 4.77671 5.70685 4.90932L7.4389 5.90932L4.4389 11.1055L2.70685 10.1055C2.47716 9.97286 2.30958 9.75444 2.24094 9.49826C2.1723 9.24208 2.20821 8.96913 2.34082 8.73944Z" fill="var(--color-brand)"></path>
                <path d="M4.3418 18.7394L2.3418 15.2753C2.20919 15.0457 2.17326 14.7727 2.2419 14.5165C2.31054 14.2603 2.47814 14.0419 2.70782 13.9093L4.43987 12.9093L7.43987 18.1055L5.70782 19.1055C5.47814 19.2381 5.20519 19.274 4.94901 19.2053C4.69283 19.1367 4.47441 18.9691 4.3418 18.7394Z" fill="var(--color-brand)"></path>
                <path d="M13.9902 22H9.99023C9.72502 22 9.47068 21.8946 9.28314 21.7071C9.09561 21.5196 8.99023 21.2652 8.99023 21V19H14.9902V21C14.9902 21.2652 14.8849 21.5196 14.6974 21.7071C14.5098 21.8946 14.2555 22 13.9902 22Z" fill="var(--color-brand)"></path>
                <path d="M21.6533 15.2762L19.6533 18.7403C19.5207 18.97 19.3023 19.1376 19.0461 19.2062C18.7899 19.2749 18.517 19.2389 18.2873 19.1063L16.5552 18.1063L19.5552 12.9102L21.2873 13.9102C21.517 14.0428 21.6846 14.2612 21.7532 14.5174C21.8218 14.7735 21.7859 15.0465 21.6533 15.2762Z" fill="var(--color-brand)"></path>
                <path d="M19.6543 5.27618L21.6543 8.74028C21.7869 8.96997 21.8228 9.24294 21.7542 9.49912C21.6855 9.7553 21.518 9.9737 21.2883 10.1063L19.5562 11.1063L16.5562 5.91016L18.2883 4.91016C18.518 4.77755 18.7909 4.74163 19.0471 4.81028C19.3033 4.87892 19.5217 5.0465 19.6543 5.27618Z" fill="var(--color-brand)"></path>
                <path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill="var(--color-brand-dark)"></path>
              </svg>
            </span>
            <div class="step-body">
              <h3 data-i18n="axpresso-process-step-title-02">AI Agent 구축</h3>
              <p class="step-desc" data-i18n="axpresso-process-step-desc-02">핵심 업무를 수행하는 Agent를 설계하고 기존 시스템과 연결해 배포합니다.</p>
            </div>
          </li>

          <li>
            <div class="step-head">
              <span class="step-term" data-i18n="axpresso-process-step-term-03">Week 3 · Operate</span>
              <span class="step-no" aria-hidden="true">03</span>
            </div>
            <span class="step-icon" aria-hidden="true">
              <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11H16L21.99 1H15.99L10 11Z" fill="color-mix(in srgb, var(--color-brand) 45%, var(--color-surface))"></path>
                <path d="M13.99 11H7.98999L2 1H8L13.99 11Z" fill="color-mix(in srgb, var(--color-brand) 45%, var(--color-surface))"></path>
                <path d="M12 23C15.866 23 19 19.866 19 16C19 12.134 15.866 9 12 9C8.13401 9 5 12.134 5 16C5 19.866 8.13401 23 12 23Z" fill="var(--color-brand)"></path>
              </svg>
            </span>
            <div class="step-body">
              <h3 data-i18n="axpresso-process-step-title-03">검증과 운영</h3>
              <p class="step-desc" data-i18n="axpresso-process-step-desc-03">KPI로 효과를 검증하고, 승인·모니터링 체계와 함께 실제 운영에 안착시킵니다.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="intro fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="axpresso-intro-eyebrow">Redesign</p>
          <h2 data-i18n="axpresso-intro-title">흩어진 도구를 하나의 실행 시스템으로<br>다시 설계합니다</h2>
          <p class="desc" data-i18n="axpresso-intro-desc">단순 연동을 넘어, 도구·데이터·업무 인계를 <br data-break="desktop">AI가 실행할 수 있는 하나의 구조로 바꿉니다.</p>
        </div>
        <div class="section-content">
          <div class="content-panel">
            <div class="content-panel__visual tool-flow">
              <ul class="tool-flow-tools">
                <li class="tool-flow-icon"><img src="/images/slack_icon.svg" alt="Slack" loading="lazy"></li>
                <li class="tool-flow-icon"><img src="/images/gmail_icon.webp" alt="Gmail" loading="lazy"></li>
                <li class="tool-flow-icon"><img src="/images/excel_icon.webp" alt="Excel" loading="lazy"></li>
                <li class="tool-flow-icon"><img src="/images/notion_icon.webp" alt="Notion" loading="lazy"></li>
              </ul>
              <span class="tool-flow-join" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
              <p class="tool-flow-hub" data-i18n="axpresso-intro-hub">AXpresso · 하나의 자동화된 흐름</p>
            </div>

            <div class="intro-pair">
              <div class="content-panel__item">
                <div class="content-panel__intro">
                  <p class="text-label" data-i18n="axpresso-intro-label-01">시스템 재설계</p>
                  <h3 data-i18n="axpresso-intro-item-title-01">읽고, 분류하고, 기록하는 흐름을 하나로</h3>
                  <p class="description" data-i18n="axpresso-intro-item-desc-01">Slack의 요청을 읽고, Gmail을 분류하고, Excel을 구조화하며, Notion을 최신 상태로 유지하는 흐름을 연결합니다.</p>
                </div>
              </div>
              <div class="content-panel__item">
                <div class="content-panel__intro">
                  <p class="text-label" data-i18n="axpresso-intro-label-02">맥락 기반 실행</p>
                  <h3 data-i18n="axpresso-intro-item-title-02">정해진 규칙을 넘어 예외까지 처리합니다</h3>
                  <p class="description" data-i18n="axpresso-intro-item-desc-02">단순 RPA가 멈추는 예외 상황에서도 업무 맥락을 바탕으로 판단하고, 필요한 경우 사람에게 승인을 요청합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="statement fade-up">
      <div class="section-wrap col">
        <div class="statement-inner">
          <p class="statement-eyebrow" data-i18n="axpresso-statement-eyebrow">Forward Deployed Engineer</p>
          <h2 class="statement-title" data-i18n="axpresso-statement-title">도구만 전달하지 않습니다.<br><strong>FDE가 현장에 들어갑니다</strong></h2>
          <p class="statement-desc" data-i18n="axpresso-statement-desc">FDE(Forward Deployed Engineer)는 고객 업무 한가운데서 문제를 찾고, 솔루션을 배포하고, KPI로 효과를 증명하는 AI 엔지니어입니다.</p>
          <a class="btn btn-outline-inverse" href="#">
            <span data-i18n="axpresso-statement-cta">프로젝트 상담</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
        </div>
      </div>
    </section>

    <section class="features fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="axpresso-features-eyebrow">Security &amp; Governance</p>
          <h2 data-i18n="axpresso-features-title">엔터프라이즈 운영을 전제로 설계합니다</h2>
          <p class="desc" data-i18n="axpresso-features-desc">실제 기업의 보안 검토와 컴플라이언스 요구를 반영해 운영 구조를 설계합니다.</p>
        </div>
        <div class="section-content">
          <div class="feature-card-grid">
            <article class="feature-card">
              <div class="feature-card-icon-row">
                <span class="feature-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C7.58 2 4 3.34 4 5C4 6.66 7.58 8 12 8C16.42 8 20 6.66 20 5C20 3.34 16.42 2 12 2Z" fill="var(--color-brand)"></path>
                    <path d="M4 8.5V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V8.5C18.3 9.7 15.4 10.4 12 10.4C8.6 10.4 5.7 9.7 4 8.5Z" fill="color-mix(in srgb, var(--color-brand) 45%, var(--color-surface))"></path>
                    <path d="M4 15.5V19C4 20.66 7.58 22 12 22C16.42 22 20 20.66 20 19V15.5C18.3 16.7 15.4 17.4 12 17.4C8.6 17.4 5.7 16.7 4 15.5Z" fill="color-mix(in srgb, var(--color-brand) 20%, var(--color-surface))"></path>
                  </svg>
                </span>
              </div>
              <div class="section-body">
                <div class="section-body-heading">
                  <p class="section-body-title" data-i18n="axpresso-features-item-title-01">격리</p>
                  <span class="feature-card-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>
                </div>
                <p class="section-body-subtitle" data-i18n="axpresso-features-item-label-01">지역 분리형 클라우드</p>
                <div class="feature-card-desc-row">
                  <div class="section-body-description">
                    <p data-i18n="axpresso-features-item-desc-01">데이터는 지역이 분리된 전용 환경에서 처리되며, 다른 고객의 데이터와 합쳐지거나 공유되지 않습니다.</p>
                  </div>
                </div>
              </div>
            </article>

            <article class="feature-card">
              <div class="feature-card-icon-row">
                <span class="feature-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 5L12 1L2.5 5V9C2.49 12.02 3.39 14.97 5.09 17.47C6.78 19.96 9.19 21.89 12 23C14.81 21.89 17.22 19.96 18.91 17.47C20.61 14.97 21.51 12.02 21.5 9V5Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.41 11.52L15.24 7.7L17 9.47L11.33 15.13L7.7 11.18L9.54 9.49L11.41 11.52Z" fill="var(--color-brand)"></path>
                  </svg>
                </span>
              </div>
              <div class="section-body">
                <div class="section-body-heading">
                  <p class="section-body-title" data-i18n="axpresso-features-item-title-02">정책</p>
                  <span class="feature-card-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>
                </div>
                <p class="section-body-subtitle" data-i18n="axpresso-features-item-label-02">조직 기준에 맞춘 운영</p>
                <div class="feature-card-desc-row">
                  <div class="section-body-description">
                    <p data-i18n="axpresso-features-item-desc-02">기존 보안 정책과 컴플라이언스 체계를 기준으로 배포 방식과 운영 범위를 함께 정의합니다.</p>
                  </div>
                </div>
              </div>
            </article>

            <article class="feature-card">
              <div class="feature-card-icon-row">
                <span class="feature-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 8H5C3.89543 8 3 8.89543 3 10V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V10C21 8.89543 20.1046 8 19 8Z" fill="var(--color-brand)"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C11.0054 3.25 10.0516 3.6451 9.34833 4.34836C8.64508 5.05162 8.25 6.00543 8.25 7V8H5.75V7C5.75 5.34241 6.40845 3.7527 7.58056 2.58059C8.75266 1.40849 10.3424 0.75 12 0.75C13.6576 0.75 15.2473 1.4085 16.4194 2.58059C17.5915 3.75269 18.25 5.34239 18.25 7V8H15.75V7C15.75 6.00545 15.3549 5.05163 14.6516 4.34836C13.9484 3.64509 12.9946 3.25 12 3.25Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                    <path d="M12.25 13H11.75C11.1977 13 10.75 13.4477 10.75 14V16C10.75 16.5523 11.1977 17 11.75 17H12.25C12.8023 17 13.25 16.5523 13.25 16V14C13.25 13.4477 12.8023 13 12.25 13Z" fill="var(--color-brand-dark)"></path>
                  </svg>
                </span>
              </div>
              <div class="section-body">
                <div class="section-body-heading">
                  <p class="section-body-title" data-i18n="axpresso-features-item-title-03">통제</p>
                  <span class="feature-card-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>
                </div>
                <p class="section-body-subtitle" data-i18n="axpresso-features-item-label-03">승인과 모니터링</p>
                <div class="feature-card-desc-row">
                  <div class="section-body-description">
                    <p data-i18n="axpresso-features-item-desc-03">중요 판단에는 사람의 승인을 두고, 운영 결과를 추적할 수 있도록 검증·모니터링 구조를 설계합니다.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="outcomes fade-up">
      <div class="section-wrap col">
        <div class="section-header">
          <div class="section-title text-left">
            <p class="tag" data-i18n="axpresso-outcomes-eyebrow">Results</p>
            <h2 data-i18n="axpresso-outcomes-title">이미 실제 업무에서 <br data-break="desktop">운영되고 있습니다</h2>
            <p class="desc" data-i18n="axpresso-outcomes-desc">발표용 데모가 아니라, 고객 현장에서 반복 업무를 수행하고 있는 결과입니다.</p>
          </div>
          <div class="section-cta">
            <a href="/cases" class="btn btn-outline-inverse">
              <span data-i18n="axpresso-outcomes-cta">고객 사례 전체 보기</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </div>
        </div>
        <div class="section-content">
          <ul class="outcome-list">
            <li>
              <div class="outcome-logo">
                <img src="/images/clients/dark/logo-translink.svg" alt="트랜스링크인베스트먼트 로고" loading="lazy">
              </div>
              <div class="outcome-body">
                <p class="tag">금융·VC</p>
                <p class="outcome-shift">
                  <span class="outcome-before">3~5일</span>
                  <span class="outcome-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  <span class="outcome-after">1시간 이내</span>
                </p>
                <p class="outcome-detail" data-i18n="axpresso-outcomes-item-detail-01">100개 이상 포트폴리오사 실사 자동화 · 월 30시간 절감</p>
                <p class="outcome-client">트랜스링크인베스트먼트</p>
              </div>
            </li>
            <li>
              <div class="outcome-logo outcome-logo--invert">
                <img src="/images/clients/case-study/체인로지스.png" alt="체인로지스 로고" loading="lazy">
              </div>
              <div class="outcome-body">
                <p class="tag">물류·마케팅</p>
                <p class="outcome-shift">
                  <span class="outcome-before">2~4시간</span>
                  <span class="outcome-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  <span class="outcome-after">3분</span>
                </p>
                <p class="outcome-detail" data-i18n="axpresso-outcomes-item-detail-02">분류·게시 자동화 · 처리량 20배 향상</p>
                <p class="outcome-client">체인로지스</p>
              </div>
            </li>
            <li>
              <div class="outcome-logo">
                <img src="/images/clients/case-study/우하컴퍼니.png" alt="우하컴퍼니 로고" loading="lazy">
              </div>
              <div class="outcome-body">
                <p class="tag">이커머스·정산</p>
                <p class="outcome-shift">
                  <span class="outcome-before">2~3시간</span>
                  <span class="outcome-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  <span class="outcome-after">30초</span>
                </p>
                <p class="outcome-detail" data-i18n="axpresso-outcomes-item-detail-03">주문 정산 자동화 · 월 60시간 절감</p>
                <p class="outcome-client">UHA Company</p>
              </div>
            </li>
          </ul>

          <p class="summary-banner">
            <span data-i18n="axpresso-outcomes-banner">도구가 만든 데이터는, <strong class="brand">사람의 성장 근거</strong>가 됩니다</span>
            <span class="description" data-i18n="axpresso-outcomes-banner-sub">에이전트 사용 로그는 역량 진단과 맞춤 학습의 출발점입니다.</span>
            <a class="link-arrow link-arrow-inverse" href="/why-codepresso"><span data-i18n="axpresso-outcomes-cta-02">차별점 보기</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          </p>
        </div>
      </div>
    </section>

    <section class="cta-final fade-up">
      <div class="section-wrap col cta-final-inner">
        <h2 class="cta-final-title" data-i18n="axpresso-cta-final-title">AI 전략에서 실제 운영까지,<br data-break="desktop"> 3주 안에 시작합니다</h2>
        <p class="cta-final-desc" data-i18n="axpresso-cta-final-desc">첫 미팅에서 자동화할 업무와 기대 효과를 함께 정리합니다.</p>
        <div class="cta-final-actions">
          <a href="#" class="btn btn-primary btn-lg">
            <span data-i18n="axpresso-cta-final-cta-01">도입 문의</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
          <a href="/cases" class="btn btn-outline-inverse btn-lg">
            <span data-i18n="axpresso-cta-final-cta-02">AX 사례 보기</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
        </div>
      </div>
    </section>
  </main>

  <SiteFooter />
  <ClientInteractions :scripts='["js/fade-up.js","js/header-scroll.js","js/nav-menu.js"]' />
</template>

<script setup>
useSeoMeta({ title: "AXpresso: AI 업무 자동화 | 코드프레소", description: "흩어진 도구와 수작업을 AI 중심 자동화 흐름으로 연결합니다. 빠른 도입으로 실제 운영까지 연결하는 AI 업무 자동화 플랫폼입니다." })

</script>

<style>
@import '~/css/pages/axpresso.css';
@import '~/css/mobile.css';
</style>
