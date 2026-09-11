<template>
  <SiteHeader />
<!-- GNB는 partials/header.html 하나로 관리한다. js/include-partials.js가 fetch해 삽입한다.
       (fetch를 쓰므로 file:// 직접 열기로는 안 보인다 — 로컬 정적 서버로 확인한다) -->
  

  <main class="index">
    <section class="main-hero">
      <div class="section-wrap">
        <a class="hero-banner" href="https://codepresso.io/home/news" target="_blank" rel="noopener">
          <span class="tag">LATEST</span>
          <span class="hero-banner-text" data-i18n="index-hero-banner">이동훈 대표, KBS 뉴스9 출연 · AI 역량 평가를 말하다</span>
          <svg class="hero-banner-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>

        <div class="hero-content">
          <div class="main-hero-copy">
            <div class="hero-copy-wrap">
              <h1 data-i18n="index-hero-title">전 직원을<br>AI 네이티브 개발자로</h1>
              <p class="hero-description" data-i18n="index-hero-desc">AI 인재, 밖에서 찾지 마세요.<br data-break="desktop"> 우리 일을 가장 잘 아는 사람이, AI 인재가 될 수 있습니다.</p>
            </div>
            <div class="hero-copy-wrap">
              <div class="hero-cta">
                <a class="btn btn-primary btn-lg" href="#"><span data-i18n="index-hero-cta-primary">도입 문의</span></a>
              </div>

              <div class="hero-links">
                <a class="link-arrow link-arrow-ink" href="/skills">
                  <span class="link-underline" data-i18n="index-hero-link-01">우리 조직에 맞는 교육이 궁금하신가요?</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
                <a class="link-arrow link-arrow-ink" href="/axpresso">
                  <span class="link-underline" data-i18n="index-hero-link-02">업무 자동화가 먼저 필요하신가요?</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <aside class="assessment-card-frame" aria-label="AI 리터러시 자가진단">
            <span class="assessment-card-frame__glow" aria-hidden="true"></span>
            <div class="assessment-card-stack">
              <span class="assessment-card-eyebrow">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"></circle><path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3Z" stroke="currentColor" stroke-width="1.6"></path></svg>
                <span data-i18n="index-hero-assessment-eyebrow">AI 역량 1분 진단</span>
              </span>

              <article class="assessment-card">
                <div class="assessment-card__head">
                  <h3 data-i18n="index-hero-assessment-title">업무에서 AI를 얼마나<br>잘 활용하고 있나요?</h3>
                  <p class="description" data-i18n="index-hero-assessment-desc">3분 진단으로<br data-break="desktop"> 나의 AI 활용 수준을 확인해 보세요.</p>
                </div>

                <ul class="assessment-card__meta" aria-label="진단 정보">
                  <li class="pill"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 4h7l4 4v12H7zM10 12h5M10 16h3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg><span data-i18n="index-hero-assessment-meta-01">11문항</span></li>
                  <li class="pill"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.6"></circle><path d="M12 8v4l3 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg><span data-i18n="index-hero-assessment-meta-02">약 1분</span></li>
                  <li class="pill"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg><span data-i18n="index-hero-assessment-meta-03">즉시 결과</span></li>
                </ul>

                <div class="assessment-card__action">
                  <a class="btn btn-primary btn-lg assessment-card__cta" href="#"><span data-i18n="index-hero-assessment-cta">AI 역량 진단 시작하기</span><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                  <span class="assessment-card__hint"><span class="assessment-card__hint-tail" aria-hidden="true"></span><span class="assessment-card__hint-text" data-i18n="index-hero-assessment-hint">지금 진단을 하고 바로 결과를 받아 보세요</span></span>
                </div>
              </article>
            </div>
          </aside>

        </div>
      </div>

      <div class="hero-clients">
        <h3 class="hero-clients-title" data-i18n="index-hero-clients-title"><strong>코드프레소</strong>와 함께하는 기업들</h3>
        <div class="hero-clients-marquee">
          <ul class="hero-clients-track">
            <li><img src="/images/clients/dark/logo_4_현대_(h36).svg" alt="현대"></li>
            <li><img src="/images/clients/dark/logo_5_벡터_(h36).svg" alt="벡터"></li>
            <li><img src="/images/clients/dark/logo_6_서강대_(h36).svg" alt="서강대"></li>
            <li><img src="/images/clients/dark/logo_1_삼성_(h36).svg" alt="삼성"></li>
            <li><img src="/images/clients/dark/logo_2_기획재정부_(h36).svg" alt="기획재정부"></li>
            <li><img src="/images/clients/dark/logo_3_롯데_(h36).svg" alt="롯데"></li>
          </ul>
          <!-- 끊김 없이 이어지도록 같은 목록을 한 벌 더 둔다. 시각적 복제일
               뿐이라 스크린리더에는 감춘다. -->
          <ul class="hero-clients-track" aria-hidden="true">
            <li><img src="/images/clients/dark/logo_4_현대_(h36).svg" alt="현대"></li>
            <li><img src="/images/clients/dark/logo_5_벡터_(h36).svg" alt="벡터"></li>
            <li><img src="/images/clients/dark/logo_6_서강대_(h36).svg" alt="서강대"></li>
            <li><img src="/images/clients/dark/logo_1_삼성_(h36).svg" alt="삼성"></li>
            <li><img src="/images/clients/dark/logo_2_기획재정부_(h36).svg" alt="기획재정부"></li>
            <li><img src="/images/clients/dark/logo_3_롯데_(h36).svg" alt="롯데"></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="features fade-up">
      <div class="section-wrap col">
        <div class="section-header">
          <div class="section-title text-left">
            <p class="tag" data-i18n="index-features-eyebrow">How it works</p>
            <h2 data-i18n="index-features-title">교육으로 AI역량을 키우고, <br data-break="mobile"> 진단으로 변화를 증명합니다</h2>
            <p class="desc" data-i18n="index-features-desc">핵심은 교육입니다. <br data-break="mobile">외부 채용 대신 내부 직원을 사내 FDE로 키웁니다. <br data-break="desktop"> 그리고 교육이 잘 됐는지는 숫자로 확인합니다.</p>
          </div>
          <div class="section-cta">
            <a href="/skills" class="btn btn-ghost"><span data-i18n="index-features-cta">역량 진단·교육 알아보기</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          </div>
        </div>
        <div class="section-content">
          <!-- 진단 → 교육 → 재진단. 흰 섹션이라 칸은 틴트(.blue)로 가라앉히고,
               순환이 닫히는 마지막 칸만 .is-return으로 채운다. -->
          <ol class="cycle">
            <li class="blue">
              <span class="cycle-icon" aria-hidden="true">
                <!-- 교육 전 · 진단 — images/icons/library/025.검색.svg의 실제 path.
                     하드코딩 색만 currentColor로 바꿨다(옅은 판은 fill-opacity로 눌렀다). -->
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 17.21C14.2059 17.21 17.2101 14.2059 17.2101 10.5C17.2101 6.79422 14.2059 3.79004 10.5 3.79004C6.7942 3.79004 3.79004 6.79422 3.79004 10.5C3.79004 14.2059 6.7942 17.21 10.5 17.21Z" fill="currentColor" fill-opacity="0.35"></path>
                  <path d="M10.5 4.5C12.0913 4.5 13.6174 5.13214 14.7426 6.25735C15.8678 7.38257 16.5 8.9087 16.5 10.5C16.5 12.0913 15.8678 13.6174 14.7426 14.7426C13.6174 15.8679 12.0913 16.5 10.5 16.5C8.9087 16.5 7.38257 15.8679 6.25735 14.7426C5.13214 13.6174 4.5 12.0913 4.5 10.5C4.5 8.9087 5.13214 7.38257 6.25735 6.25735C7.38257 5.13214 8.9087 4.5 10.5 4.5ZM10.5 2C8.24647 2.00265 6.08599 2.89904 4.49251 4.49252C2.89902 6.08601 2.00265 8.24647 2 10.5C2 11.6162 2.21985 12.7215 2.64702 13.7528C3.07418 14.7841 3.7003 15.7211 4.48959 16.5104C5.27889 17.2997 6.21592 17.9258 7.24719 18.353C8.27846 18.7801 9.38376 19 10.5 19C11.6166 19.0013 12.7225 18.7824 13.7544 18.3557C14.7862 17.929 15.7238 17.3029 16.5133 16.5133C17.3029 15.7238 17.929 14.7862 18.3557 13.7544C18.7824 12.7225 19.0013 11.6166 19 10.5C19 8.24566 18.1045 6.08365 16.5104 4.48959C14.9163 2.89553 12.7543 2 10.5 2Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4852 14.7068L21.8852 20.1168L20.1158 21.8829L14.7158 16.4729L16.4852 14.7068Z" fill="currentColor"></path>
                </svg>
              </span>
              <div class="cycle-head">
                <p class="cycle-en" data-i18n="index-features-cycle-en-01">교육 전</p>
              </div>
              <h3 data-i18n="index-features-cycle-title-01">역량을 점수로 진단합니다</h3>
              <p class="description" data-i18n="index-features-cycle-desc-01">누구에게 무엇을 가르쳐야 할지가 명확해집니다.</p>

              <div class="step-products-group">
                <p class="step-products-label" data-i18n="index-features-cycle-label-01">진단 도구</p>
                <ul class="step-products">
                  <li class="tag sm">AI Fluent</li>
                  <li class="tag sm">SkillCertify</li>
                </ul>
              </div>
              <span class="cycle-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </li>
            <li class="blue">
              <span class="cycle-icon" aria-hidden="true">
                <!-- 교육 중 · 교육 — images/icons/library/015.할일.svg의 실제 path.
                     하드코딩 색만 currentColor로 바꿨다(옅은 판은 fill-opacity로 눌렀다). -->
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" fill="currentColor" fill-opacity="0.35"></path>
                  <path d="M10.49 8H6.5C6.22386 8 6 8.22386 6 8.5V9.5C6 9.77614 6.22386 10 6.5 10H10.49C10.7661 10 10.99 9.77614 10.99 9.5V8.5C10.99 8.22386 10.7661 8 10.49 8Z" fill="currentColor" fill-opacity="0.35"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0001 8.58579L17.293 6.29289L18.7072 7.70711L15.0001 11.4142L12.293 8.70711L13.7072 7.29289L15.0001 8.58579Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0001 14.5858L17.293 12.2929L18.7072 13.7071L15.0001 17.4142L12.293 14.7071L13.7072 13.2929L15.0001 14.5858Z" fill="currentColor"></path>
                  <path d="M10.4998 14H6.50977C6.23362 14 6.00977 14.2239 6.00977 14.5V15.53C6.00977 15.8061 6.23362 16.03 6.50977 16.03H10.4998C10.7759 16.03 10.9998 15.8061 10.9998 15.53V14.5C10.9998 14.2239 10.7759 14 10.4998 14Z" fill="currentColor" fill-opacity="0.35"></path>
                </svg>
              </span>
              <div class="cycle-head">
                <p class="cycle-en" data-i18n="index-features-cycle-en-02">교육 중</p>
              </div>
              <h3 data-i18n="index-features-cycle-title-02">부족한 역량만 선별해 교육합니다</h3>
              <p class="description" data-i18n="index-features-cycle-desc-02">모두에게 같은 교육이 아니라, 필요한 교육만 제공합니다.</p>

              <div class="step-products-group">
                <p class="step-products-label" data-i18n="index-features-cycle-label-02">교육 프로그램</p>
                <ul class="step-products">
                  <li class="tag sm">SkillPath</li>
                  <li class="tag sm">SkillCamp</li>
                  <li class="tag sm">SkillFit</li>
                </ul>
              </div>
              <span class="cycle-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </li>
            <li class="is-return">
              <span class="cycle-icon" aria-hidden="true">
                <!-- 교육 후 · 증명 — images/icons/library/109.막대 그래프.svg의 실제 path.
                     하드코딩 색만 currentColor로 바꿨다(옅은 판은 fill-opacity로 눌렀다). -->
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15H3C2.44772 15 2 15.4477 2 16V20C2 20.5523 2.44772 21 3 21H6C6.55228 21 7 20.5523 7 20V16C7 15.4477 6.55228 15 6 15Z" fill="currentColor"></path>
                  <path d="M13 9H10C9.44772 9 9 9.44772 9 10V20C9 20.5523 9.44772 21 10 21H13C13.5523 21 14 20.5523 14 20V10C14 9.44772 13.5523 9 13 9Z" fill="currentColor"></path>
                  <path d="M20 3H17C16.4477 3 16 3.44772 16 4V20C16 20.5523 16.4477 21 17 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z" fill="currentColor"></path>
                </svg>
              </span>
              <div class="cycle-head">
                <p class="cycle-en" data-i18n="index-features-cycle-en-03">교육 후</p>
              </div>
              <h3 data-i18n="index-features-cycle-title-03">결과를 다시 숫자로 증명합니다</h3>
              <p class="description" data-i18n="index-features-cycle-desc-03">교육 전후 점수를 비교해 얼마나 늘었는지 확인합니다.</p>

              <div class="step-products-group">
                <p class="step-products-label" data-i18n="index-features-cycle-label-03">축적 자산</p>
                <ul class="step-products">
                  <li class="tag sm">공유 허브</li>
                  <li class="tag sm">라이브러리</li>
                </ul>
              </div>
            </li>
          </ol>

          <p class="summary-banner dark" data-i18n="index-features-banner">조직을 바꾸는 건 <strong class="brand">교육</strong>입니다. <br data-break="mobile"> <strong class="brand">진단</strong>은 그 변화를 증명합니다.</p>
        </div>
      </div>
    </section>

    <div class="dot-line"></div>

    <section class="outcomes fade-up">
      <div class="section-wrap col">
        <div class="section-header">
          <div class="section-title text-left">
            <p class="tag" data-i18n="index-outcomes-eyebrow">02 · Proof</p>
            <h2 data-i18n="index-outcomes-title">도입한 기업에서는 <br data-break="mobile"> 이렇게 달라졌습니다</h2>
            <p class="desc" data-i18n="index-outcomes-desc">역량을 진단하고 키운 조직은 채용과 교육의 낭비가 줄었고, <br data-break="desktop"> 업무를 자동화한 조직은 실행 속도가 빨라졌습니다.</p>
          </div>
          <div class="section-cta">
            <a href="/cases" class="btn btn-ghost"><span data-i18n="index-outcomes-cta-01">고객 사례 더 보기</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
            <a href="#" class="btn btn-primary"><span data-i18n="index-outcomes-cta-02">도입 상담하기</span></a>
          </div>
        </div>
        <div class="section-content">
          <div class="summary-banner stats-light">
            <div class="summary-banner-stats" data-stat-reveal="">
              <article class="metric-card">
                <div class="metric-card__value">
                  <span class="num" data-target="39355">0</span><span class="unit">명</span>
                </div>
                <p class="metric-card__label text-label" data-i18n="index-outcomes-metric-label-01">누적 수강</p>
                <div class="metric-card__visual" aria-hidden="true">
                  <span class="metric-card__glow"></span>
                  <span class="metric-card__glow"></span>
                  <svg class="metric-card__icon" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9C7.06087 9 8.07827 9.42142 8.82841 10.1716C9.57856 10.9217 10 11.9391 10 13V18C10 18.2652 9.89464 18.5196 9.70711 18.7071C9.51957 18.8946 9.26522 19 9 19H3C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18V13C2 11.9391 2.42142 10.9217 3.17157 10.1716C3.92172 9.42142 4.93913 9 6 9Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                    <path d="M6 8C7.38071 8 8.5 6.88071 8.5 5.5C8.5 4.11929 7.38071 3 6 3C4.61929 3 3.5 4.11929 3.5 5.5C3.5 6.88071 4.61929 8 6 8Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                    <path d="M21 19H15C14.7348 19 14.4804 18.8946 14.2929 18.7071C14.1053 18.5196 14 18.2652 14 18V13C14 11.9391 14.4214 10.9217 15.1716 10.1716C15.9217 9.42142 16.9391 9 18 9C19.0609 9 20.0783 9.42142 20.8284 10.1716C21.5786 10.9217 22 11.9391 22 13V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                    <path d="M18 8C19.3807 8 20.5 6.88071 20.5 5.5C20.5 4.11929 19.3807 3 18 3C16.6193 3 15.5 4.11929 15.5 5.5C15.5 6.88071 16.6193 8 18 8Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                    <path d="M11.1201 12H12.8701C13.931 12 14.9484 12.4214 15.6985 13.1716C16.4487 13.9217 16.8701 14.9391 16.8701 16V21C16.8701 21.2652 16.7648 21.5196 16.5772 21.7071C16.3897 21.8946 16.1353 22 15.8701 22H8.12012C7.8549 22 7.60055 21.8946 7.41301 21.7071C7.22547 21.5196 7.12012 21.2652 7.12012 21V16C7.12012 14.9391 7.54154 13.9217 8.29169 13.1716C9.04183 12.4214 10.0593 12 11.1201 12Z" fill="var(--color-brand)"></path>
                    <path d="M12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.6193 6 9.5 7.11929 9.5 8.5C9.5 9.88071 10.6193 11 12 11Z" fill="var(--color-brand)"></path>
                  </svg>
                </div>
              </article>
              <article class="metric-card">
                <div class="metric-card__value">
                  <span class="num" data-target="1531">0</span><span class="unit">회</span>
                </div>
                <p class="metric-card__label text-label" data-i18n="index-outcomes-metric-label-02">교육 운영</p>
                <div class="metric-card__visual" aria-hidden="true">
                  <span class="metric-card__glow"></span>
                  <span class="metric-card__glow"></span>
                  <svg class="metric-card__icon" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5 4.01953H4.5C3.39543 4.01953 2.5 4.91496 2.5 6.01953V19.0195C2.5 20.1241 3.39543 21.0195 4.5 21.0195H19.5C20.6046 21.0195 21.5 20.1241 21.5 19.0195V6.01953C21.5 4.91496 20.6046 4.01953 19.5 4.01953Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                    <path d="M8.48001 3.01953H7.5C7.22386 3.01953 7 3.24339 7 3.51953V5.51953C7 5.79567 7.22386 6.01953 7.5 6.01953H8.48001C8.75615 6.01953 8.98001 5.79567 8.98001 5.51953V3.51953C8.98001 3.24339 8.75615 3.01953 8.48001 3.01953Z" fill="var(--color-brand)"></path>
                    <path d="M8.74023 9.5H7.24023C6.96409 9.5 6.74023 9.72386 6.74023 10V11.5C6.74023 11.7761 6.96409 12 7.24023 12H8.74023C9.01638 12 9.24023 11.7761 9.24023 11.5V10C9.24023 9.72386 9.01638 9.5 8.74023 9.5Z" fill="var(--color-surface)"></path>
                    <path d="M12.75 9.5H11.25C10.9739 9.5 10.75 9.72386 10.75 10V11.5C10.75 11.7761 10.9739 12 11.25 12H12.75C13.0261 12 13.25 11.7761 13.25 11.5V10C13.25 9.72386 13.0261 9.5 12.75 9.5Z" fill="var(--color-surface)"></path>
                    <path d="M16.7598 9.5H15.2598C14.9836 9.5 14.7598 9.72386 14.7598 10V11.5C14.7598 11.7761 14.9836 12 15.2598 12H16.7598C17.0359 12 17.2598 11.7761 17.2598 11.5V10C17.2598 9.72386 17.0359 9.5 16.7598 9.5Z" fill="var(--color-surface)"></path>
                    <path d="M16.5 3.01953H15.5C15.2239 3.01953 15 3.24339 15 3.51953V5.51953C15 5.79567 15.2239 6.01953 15.5 6.01953H16.5C16.7761 6.01953 17 5.79567 17 5.51953V3.51953C17 3.24339 16.7761 3.01953 16.5 3.01953Z" fill="var(--color-brand)"></path>
                    <path d="M8.74023 14H7.24023C6.96409 14 6.74023 14.2239 6.74023 14.5V16C6.74023 16.2761 6.96409 16.5 7.24023 16.5H8.74023C9.01638 16.5 9.24023 16.2761 9.24023 16V14.5C9.24023 14.2239 9.01638 14 8.74023 14Z" fill="var(--color-surface)"></path>
                    <path d="M12.75 14H11.25C10.9739 14 10.75 14.2239 10.75 14.5V16C10.75 16.2761 10.9739 16.5 11.25 16.5H12.75C13.0261 16.5 13.25 16.2761 13.25 16V14.5C13.25 14.2239 13.0261 14 12.75 14Z" fill="var(--color-surface)"></path>
                    <path d="M16.7598 14H15.2598C14.9836 14 14.7598 14.2239 14.7598 14.5V16C14.7598 16.2761 14.9836 16.5 15.2598 16.5H16.7598C17.0359 16.5 17.2598 16.2761 17.2598 16V14.5C17.2598 14.2239 17.0359 14 16.7598 14Z" fill="var(--color-surface)"></path>
                  </svg>
                </div>
              </article>
              <article class="metric-card">
                <div class="metric-card__value">
                  <span class="num" data-target="80">0</span><span class="unit">%</span>
                </div>
                <p class="metric-card__label text-label" data-i18n="index-outcomes-metric-label-03">재구매율</p>
                <div class="metric-card__visual" aria-hidden="true">
                  <span class="metric-card__glow"></span>
                  <span class="metric-card__glow"></span>
                  <svg class="metric-card__icon" viewBox="0 0 24 24" fill="none">
                    <path d="M18.8824 3H5.11765C3.9481 3 3 3.89543 3 5V19C3 20.1046 3.9481 21 5.11765 21H18.8824C20.0519 21 21 20.1046 21 19V5C21 3.89543 20.0519 3 18.8824 3Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                    <path d="M18.5 13H16.5V9.5H13V7.5H18.5V13Z" fill="var(--color-brand)"></path>
                    <path d="M16.3 8.21973L11 13.5097L8 10.5097L3 15.5V18.49L8 13.4997L11 16.4997L17.71 9.79973L16.3 8.21973Z" fill="var(--color-brand)"></path>
                  </svg>
                </div>
              </article>
            </div>
          </div>

          <div class="proof-card-stage">
            <div class="proof-card-deck" data-proof-deck="">
              <button type="button" class="proof-card-nav" aria-label="다른 사례 보기"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
              <div class="proof-card-deck-list">
                <article class="proof-card">
                  <img src="/images/clients/dark/logo-cj.svg" alt="CJ올리브네트웍스 로고">
                  <h3 data-i18n="index-outcomes-proof-title-01">검증 비용이 1/3로 줄어든 채용</h3>
                  <blockquote data-i18n="index-outcomes-proof-quote-01">"서류 합격 150명을 실기 평가로 검증해 30명, 최종 3명을 선발했습니다.<br data-break="desktop"> 채용 검증에 들던 비용은 1/3로 줄었습니다."</blockquote>
                  <cite data-i18n="index-outcomes-proof-cite-01">CJ올리브네트웍스 | SkillCertify 채용 검증</cite>
                </article>
                <article class="proof-card">
                  <img src="/images/clients/dark/logo-translink.svg" alt="트랜스링크인베스트먼트 로고">
                  <h3 data-i18n="index-outcomes-proof-title-02">심사 소요 시간<br data-break="mobile"> 3~5일 → 1시간</h3>
                  <blockquote data-i18n="index-outcomes-proof-quote-02">"3~5일 걸리던 기업 실사가 1시간으로 줄었습니다. <br data-break="desktop"> 의사결정 속도가 완전히 달라졌습니다."</blockquote>
                  <cite data-i18n="index-outcomes-proof-cite-02">트랜스링크인베스트먼트 | 박희덕 대표</cite>
                </article>
              </div>
              <button type="button" class="proof-card-nav" aria-label="다음 사례 보기"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- PART 1(교육) + PART 2(진단) 묶음 — 두 파트가 하나의 흐름으로 읽히도록
         배경 그라디언트를 이 래퍼가 한 번만 소유한다. -->
    <div class="parts-group">
      <section class="journey fade-up" id="part1-education">
        <div class="section-wrap row is-sticky">
          <div class="section-aside">
            <div class="section-title text-left">
              <nav class="part-nav" data-part-nav="" aria-label="교육·진단 섹션 이동">
                <span class="part-nav-indicator" data-part-nav-indicator="" aria-hidden="true"></span>
                <a class="part-nav-item" href="#part1-education" data-part-nav-item="part1-education"><span data-i18n="index-journey-nav-01">PART 1 · 교육</span></a>
                <a class="part-nav-item" href="#part2-diagnosis" data-part-nav-item="part2-diagnosis"><span data-i18n="index-journey-nav-02">PART 2 · 진단</span></a>
              </nav>
              <h2 data-i18n="index-journey-title">업무를 아는 직원을<br>AI로 일하는 인재로 키웁니다</h2>
              <p class="desc" data-i18n="index-journey-desc">코드프레소의 중심은 교육입니다. <br data-break="mobile">개발부터 비개발 직군까지 수준과 직무에 맞게, <br data-break="desktop"> 일회성 특강이 아닌 현장 적용까지 이어지는 사내 FDE 양성 여정입니다.</p>
            </div>

            <div class="diagnosis-products">
              <p class="text-label brand" data-i18n="index-journey-products-label">교육 프로그램</p>

              <ul class="choice-list">
                <li>
                  <button class="choice-list__item" type="button" data-journey-program="0">
                    <span class="icon-box" aria-hidden="true">
                      <img src="/images/icons/service/ic_skillPath.svg" alt="">
                    </span>
                    <span class="choice-list__body">
                      <span class="section-body-title">SkillPath </span>
                      <span class="text-caption" data-i18n="index-journey-item-caption-01">온라인 이러닝</span>
                    </span>
                    <svg class="choice-list__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </button>
                </li>
                <li>
                  <button class="choice-list__item" type="button" data-journey-program="1">
                    <span class="icon-box" aria-hidden="true">
                      <img src="/images/icons/service/ic_edu.svg" alt="">
                    </span>
                    <span class="choice-list__body">
                      <span class="section-body-title">SkillCamp </span>
                      <span class="text-caption" data-i18n="index-journey-item-caption-02">강사 주도형 교육</span>
                    </span>
                    <svg class="choice-list__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </button>
                </li>
                <li>
                  <button class="choice-list__item" type="button" data-journey-program="2">
                    <span class="icon-box" aria-hidden="true">
                      <img src="/images/icons/service/ic_skillFit.svg" alt="">
                    </span>
                    <span class="choice-list__body">
                      <span class="section-body-title">SkillFit</span>
                      <span class="text-caption" data-i18n="index-journey-item-caption-03">AI 기반 적응형 학습</span>
                    </span>
                    <svg class="choice-list__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </button>
                </li>
              </ul>
            </div>

            <a href="/skills" class="btn btn-primary"><span data-i18n="index-journey-cta">교육 과정 자세히 보기</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          </div>

          <div class="journey-stage" data-journey-stage="">
            <!-- 스크롤 길이를 만드는 트랙. 각 구간에 진입하면 같은 index의
                 .journey-step이 활성화된다(js/journey-stage.js). -->
            <div class="journey-track" data-journey-track="">
              <div data-journey-track-step="0"></div>
              <div data-journey-track-step="1"></div>
              <div data-journey-track-step="2"></div>
            </div>

            <!-- 판은 하나로 고정되고, 안의 내용만 교차 페이드된다.
                 PART 2의 진단 프리뷰와 같은 .content-panel + .surface-glass 조합이며,
                 스텝 순서도 같다(목업 → 설명). -->
            <div class="content-panel journey-viewport surface-glass">
              <article class="content-panel__item journey-step is-active" data-journey-step="0">
                <!-- 목업: 8개 분야 트랙 중 하나를 고르면 STEP 학습 경로가 펼쳐지는 화면.
                     연출은 공용 detail(mock-motion.css) — 좌측 트랙 목록에서 선택이 켜지고
                     우측 STEP 상세가 밀려 들어온다. -->
                <div class="content-panel__visual preview-frame preview-frame--flush journey-mock mock-detail" data-mock-motion="detail" aria-hidden="true" style="--mock-gauge-to: 117">
                  <div class="mock-detail-aside">
                    <span class="text-caption">분야 트랙 8</span>
                    <ul class="mock-detail-list">
                      <li class="mock-detail-row">
                        <span class="journey-mock-check"></span>
                        <span class="skeleton-line is-shimmer" style="width: 104px"></span>
                      </li>
                      <li class="mock-detail-row is-selected">
                        <span class="journey-mock-check" style="border-color: var(--color-brand)"></span>
                        <span class="journey-mock-item-name">데이터 사이언스</span>
                      </li>
                      <li class="mock-detail-row">
                        <span class="journey-mock-check"></span>
                        <span class="skeleton-line is-shimmer" style="width: 88px; animation-delay: .3s"></span>
                      </li>
                      <li class="mock-detail-row">
                        <span class="journey-mock-check"></span>
                        <span class="skeleton-line is-shimmer" style="width: 116px; animation-delay: .6s"></span>
                      </li>
                      <li class="mock-detail-row">
                        <span class="journey-mock-check"></span>
                        <span class="skeleton-line is-shimmer" style="width: 76px; animation-delay: .9s"></span>
                      </li>
                    </ul>
                  </div>
                  <div class="mock-detail-panel is-panel">
                    <div class="mock-detail-head">
                      <span class="mock-detail-gauge">
                        <svg viewBox="0 0 64 64" aria-hidden="true">
                          <circle cx="32" cy="32" r="28" fill="none" stroke="var(--color-brand-tint-2)" stroke-width="7"></circle>
                          <circle class="is-gauge" cx="32" cy="32" r="28" fill="none" stroke="var(--color-brand)" stroke-width="7" stroke-linecap="round" stroke-dasharray="176" stroke-dashoffset="59"></circle>
                        </svg>
                        <b class="text-caption strong">7/21</b>
                      </span>
                      <span class="mock-detail-head-body">
                        <p class="section-body-title">STEP 21 학습 경로</p>
                        <span class="text-caption">입문 → 중급 · 구독으로 이용</span>
                      </span>
                    </div>
                    <ul class="journey-mock-list">
                      <li class="journey-mock-item is-stagger">
                        <span class="journey-mock-check is-done"></span>
                        <span class="journey-mock-item-name">STEP 1~3 · 파이썬 · SQL 입문</span>
                      </li>
                      <li class="journey-mock-item is-stagger" style="animation-delay: .12s">
                        <span class="journey-mock-check is-done"></span>
                        <span class="journey-mock-item-name">STEP 4~7 · 통계 분석</span>
                      </li>
                      <li class="journey-mock-item is-current is-stagger" style="animation-delay: .24s">
                        <span class="journey-mock-check"></span>
                        <span class="journey-mock-item-name">STEP 8~13 · 머신러닝 구현</span>
                      </li>
                      <li class="journey-mock-item is-stagger" style="animation-delay: .36s">
                        <span class="journey-mock-check"></span>
                        <span class="skeleton-line" style="width: 132px"></span>
                        <span style="flex: 1"></span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="content-panel__intro">
                  <p class="text-label brand" data-i18n="index-journey-step-label-01">SkillPath · 온라인 이러닝</p>
                  <h3 class="stage-step-title" data-i18n="index-journey-step-title-01">각자의 속도로, <br data-break="mobile">기초부터 탄탄하게</h3>
                  <p class="desc" data-i18n="index-journey-step-desc-01">직무별 커리큘럼을 온라인으로 학습합니다. <br data-break="desktop"> 진도와 이수율이 자동으로 기록되어 관리자가 한눈에 봅니다.</p>
                </div>
              </article>

              <article class="content-panel__item journey-step" data-journey-step="1">
                <!-- 목업: 라이브 강의가 지금 돌아가는 현황판.
                     연출은 공용 ticker(mock-motion.css) — 수치가 pop 되고,
                     막대가 자라고, 새 이수 기록이 위에서 밀려들며 반짝인다.
                     한눈에 들어와야 하는 자리라 읽을 것은 수치 3개와 최근
                     기록 2줄로 줄이고, 나머지는 스켈레톤으로 접는다. -->
                <div class="content-panel__visual preview-frame journey-mock mock-ticker camp-ticker" data-mock-motion="ticker" aria-hidden="true">
                  <div class="journey-mock-head">
                    <span class="journey-mock-speaker">
                      <span class="journey-mock-avatar">김</span>
                      <span class="journey-mock-speaker-body">
                        <span class="journey-mock-item-name">김강사 · 현직 전문가</span>
                        <span class="text-caption">3기 · 팀 프로젝트 진행 중</span>
                      </span>
                    </span>
                    <span class="journey-mock-badge is-live">LIVE</span>
                  </div>

                  <!-- 강의가 돌아가는 것을 증명하는 수치 3개. 가운데(참여율)만
                       is-current로 강조해 어디를 보라는지 하나로 좁힌다. -->
                  <div class="mock-ticker-stats">
                    <article>
                      <span class="text-caption">수강</span>
                      <b class="is-pop">24<em>명</em></b>
                    </article>
                    <article>
                      <span class="text-caption">실시간 참여율</span>
                      <b class="is-pop is-current" style="animation-delay: .1s">92<em>%</em></b>
                    </article>
                    <article>
                      <span class="text-caption">제출 과제</span>
                      <b class="is-pop" style="animation-delay: .2s">18<em>건</em></b>
                    </article>
                  </div>

                  <!-- 회차별 과제 제출 추이. 마지막(이번 회차)만 강조한다. -->
                  <div class="mock-ticker-chart">
                    <span class="is-bar" style="--mock-bar-h: 38%"></span>
                    <span class="is-bar" style="--mock-bar-h: 52%; animation-delay: .08s"></span>
                    <span class="is-bar" style="--mock-bar-h: 46%; animation-delay: .16s"></span>
                    <span class="is-bar" style="--mock-bar-h: 71%; animation-delay: .24s"></span>
                    <span class="is-bar is-current" style="--mock-bar-h: 94%; animation-delay: .32s"></span>
                  </div>

                  <!-- 방금 들어온 기록 — 맨 위 한 줄만 밀려들며 반짝인다. -->
                  <ul class="journey-mock-list">
                    <li class="journey-mock-item is-feed">
                      <span class="journey-mock-avatar">박</span>
                      <span class="journey-mock-item-name">과제 제출 · 팀 프로젝트 2차</span>
                      <span class="text-caption strong">방금</span>
                    </li>
                    <li class="journey-mock-item">
                      <span class="journey-mock-avatar">정</span>
                      <span class="skeleton-line" style="width: 132px"></span>
                      <span class="text-caption">2분 전</span>
                    </li>
                  </ul>
                </div>

                <div class="content-panel__intro">
                  <p class="text-label brand" data-i18n="index-journey-step-label-02">SkillCamp · 라이브 교육</p>
                  <h3 class="stage-step-title" data-i18n="index-journey-step-title-02">현업 전문가와 <br data-break="mobile">실전처럼 부딪힙니다</h3>
                  <p class="desc" data-i18n="index-journey-step-desc-02">강사 주도 라이브 세션에서 실제 업무 과제로 프로젝트를 수행합니다. <br data-break="desktop"> 질문하고, 막히고, 해결하며 배웁니다.</p>
                </div>
              </article>

              <article class="content-panel__item journey-step" data-journey-step="2">
                <!-- 목업: 실제 SkillFit 학습 화면(레일 · 스킬 목록 · 레슨)을 UI로 옮기고,
                     AI 튜터 채팅만 실제 제품처럼 우하단에 팝업으로 겹친다.
                     읽혀야 하는 것(트랙명 · 진도 · 현재 스킬 · 레슨 제목)만 텍스트로 남기고
                     본문은 스켈레톤으로 접는다.
                     채팅은 무한 반복 relay(skillfit-chat-relay)로 질문→답변이 순서대로
                     쌓였다가 함께 리셋된다 — 스크롤 진입 팝인(journey-stage.js)과는 별개. -->
                <div class="content-panel__visual preview-frame preview-frame--flush journey-mock skillfit-mock" aria-hidden="true">
                  <div class="preview-frame__bar">
                    <span class="preview-frame__dots"><i></i><i></i><i></i></span>
                    <span class="text-caption">skillpath.codepresso.io</span>
                  </div>

                  <div class="skillfit-mock-screen">
                    <!-- 최좌측 — 아이콘 메뉴 레일. -->
                    <div class="journey-app-rail">
                      <span class="journey-app-rail-logo"></span>

                      <!-- 홈 -->
                      <svg class="journey-app-rail-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 10.5 12 4l8 6.5V20H4v-9.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
                      </svg>

                      <!-- 탐색 -->
                      <svg class="journey-app-rail-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2"></circle>
                        <path d="m15 9-2 4-4 2 2-4 4-2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
                      </svg>

                      <!-- 학습(현재 위치) -->
                      <svg class="journey-app-rail-icon is-current" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect x="4" y="4" width="16" height="16" rx="5" fill="currentColor"></rect>
                        <path d="m10.5 9 5 3-5 3V9Z" fill="#fff"></path>
                      </svg>

                      <!-- 검색 -->
                      <svg class="journey-app-rail-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2"></circle>
                        <path d="m16 16 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                      </svg>

                      <!-- 설정 -->
                      <svg class="journey-app-rail-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"></circle>
                        <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                      </svg>
                    </div>

                    <!-- 좌 — 학습 중인 트랙 + 스킬 목록. 지금 보는 스킬만 이름을 남긴다. -->
                    <div class="journey-app-side">
                      <div class="journey-app-track">
                        <span class="journey-app-track-badge">진행중</span>
                        <span class="journey-app-level">Beginner</span>

                        <span class="journey-app-track-name">AI 에이전트 활용</span>
                        <span class="journey-app-progress-bar"><span style="width: 39%"></span></span>
                        <span class="text-caption">39% · 7 / 18 스킬</span>
                      </div>

                      <ul class="journey-app-skills">
                        <li class="journey-app-skill is-done">
                          <span class="journey-app-num">1</span>
                          <span class="skeleton-line"></span>
                          <span class="journey-app-rate">100%</span>
                        </li>
                        <li class="journey-app-skill is-done">
                          <span class="journey-app-num">2</span>
                          <span class="skeleton-line"></span>
                          <span class="journey-app-rate">83%</span>
                        </li>
                        <li class="journey-app-skill is-current">
                          <span class="journey-app-num">3</span>
                          <span class="journey-mock-item-name">RICJ 프레임워크</span>
                        </li>
                        <li class="journey-app-skill">
                          <span class="journey-app-num">4</span>
                          <span class="skeleton-line"></span>
                          <span class="journey-app-rate">0%</span>
                        </li>
                      </ul>
                    </div>

                    <!-- 중앙 — 실무 시나리오가 레슨 본문 위에 먼저 온다. -->
                    <div class="journey-app-main">
                      <div class="journey-app-scenario">
                        <span class="journey-app-scenario-label">실무 시나리오</span>
                        <span class="skeleton-line"></span>
                        <span class="skeleton-line is-short"></span>
                      </div>

                      <!-- 난이도가 실력에 맞춰 올라갔다는 것이 이 목업의 핵심 메시지라,
                           레슨 라벨 옆에 칩으로 붙여 팝업에 가리지 않게 둔다. -->
                      <div class="skillfit-mock-lesson-meta">
                        <p class="journey-app-eyebrow">LESSON 1</p>
                        <p class="journey-app-adapt">난이도 <strong>심화</strong></p>
                      </div>

                      <p class="journey-app-lesson">AI와 대화하는<br>가장 확실한 지도</p>

                      <!-- 본문은 튜터 팝업이 덮는 자리라 스켈레톤으로만 둔다. -->
                      <div class="skeleton-stack">
                        <span class="skeleton-line"></span>
                        <span class="skeleton-line is-short"></span>
                      </div>

                      <!-- 실력에 맞춰 난이도가 조정됐다는 것이 이 목업의 핵심 메시지다. -->
                      <p class="journey-app-adapt">정답률 92% → 난이도 <strong>심화</strong></p>
                    </div>
                  </div>

                  <!-- 우하단 — AI 튜터. 실제 제품처럼 화면 위에 떠서 겹친다. -->
                  <div class="journey-app-tutor skillfit-mock-tutor">
                    <div class="journey-app-tutor-head">
                      <span class="journey-app-tutor-name">AI 튜터</span>
                      <span class="journey-app-tutor-status">답변 중</span>
                    </div>

                    <p class="journey-mock-bubble is-mine is-chat" style="--mock-chat-step: 0">RICJ가 뭐예요?</p>
                    <p class="journey-mock-bubble is-chat" style="--mock-chat-step: 1">역할 · 지시 · 배경 · 판단 기준 4단 공식이에요</p>
                    <!-- 타이핑 인디케이터 — 지금 답하는 중이라는 신호. -->
                    <p class="journey-mock-bubble journey-app-typing is-chat" style="--mock-chat-step: 2">
                      <span></span><span></span><span></span>
                    </p>
                  </div>
                </div>

                <div class="content-panel__intro">
                  <p class="text-label brand" data-i18n="index-journey-step-label-03">SkillFit · AI 적응형 학습</p>
                  <h3 class="stage-step-title" data-i18n="index-journey-step-title-03">실력에 맞춘 난이도가 <br data-break="mobile">따라옵니다</h3>
                  <p class="desc" data-i18n="index-journey-step-desc-03">진단 결과와 학습 데이터에 맞추어 <br data-break="desktop"> AI가 문제 난이도와 경로를 실시간으로 조정합니다.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="diagnosis fade-up" id="part2-diagnosis">
        <div class="section-wrap row is-sticky">
          <div class="section-aside">
            <div class="section-title text-left">
              <nav class="part-nav" data-part-nav="" aria-label="교육·진단 섹션 이동">
                <span class="part-nav-indicator" data-part-nav-indicator="" aria-hidden="true"></span>
                <a class="part-nav-item" href="#part1-education" data-part-nav-item="part1-education"><span data-i18n="index-journey-nav-01">PART 1 · 교육</span></a>
                <a class="part-nav-item" href="#part2-diagnosis" data-part-nav-item="part2-diagnosis"><span data-i18n="index-journey-nav-02">PART 2 · 진단</span></a>
              </nav>
              <h2 data-i18n="index-diagnosis-title">교육이 잘 됐는지<br>궁금하지 않으세요?</h2>
              <p class="desc" data-i18n="index-diagnosis-desc">그래서 코드프레소는 교육의 전과 후를 진단합니다. <br data-break="desktop"> 시작 전엔 필요한 역량을 파악하고, 끝난 뒤엔 얼마나 성장했는지 증명합니다.</p>
            </div>

            <div class="diagnosis-products">
              <p class="text-label brand" data-i18n="index-diagnosis-products-label">진단 제품</p>

              <ul class="choice-list">
                <li>
                  <button class="choice-list__item" type="button" data-diagnosis-program="0">
                    <span class="icon-box" aria-hidden="true">
                      <img src="/images/icons/service/ic_aiFluent.svg" alt="">
                    </span>
                    <span class="choice-list__body">
                      <span class="section-body-title">AI Fluent</span>
                      <span class="text-caption" data-i18n="index-diagnosis-item-caption-01">전 직군 AI 활용 역량 진단</span>
                    </span>
                    <svg class="choice-list__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </button>
                </li>
                <li>
                  <button class="choice-list__item" type="button" data-diagnosis-program="1">
                    <span class="icon-box" aria-hidden="true">
                      <img src="/images/icons/service/ic_skillCertify.svg" alt="">
                    </span>
                    <span class="choice-list__body">
                      <span class="section-body-title">SkillCertify</span>
                      <span class="text-caption" data-i18n="index-diagnosis-item-caption-02">개발자 IT 실무 역량 평가</span>
                    </span>
                    <svg class="choice-list__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </button>
                </li>
              </ul>
            </div>

            <a href="/skills" class="btn btn-primary"><span data-i18n="index-diagnosis-cta">역량 진단 자세히 보기</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          </div>

          <!-- PART 1과 같은 journey-stage 컴포넌트 — data 접두사만 diagnosis다. -->
          <div class="journey-stage diagnosis-preview" data-diagnosis-stage="">
            <div class="journey-track" data-diagnosis-track="">
              <div data-diagnosis-track-step="0"></div>
              <div data-diagnosis-track-step="1"></div>
            </div>

            <div class="content-panel journey-viewport diagnosis-preview-panel surface-glass">
              <figure class="content-panel__item journey-step is-active" data-diagnosis-step="0">
                <img class="content-panel__visual diagnosis-preview-image" src="/images/products/aifluent/aifluent-sample.svg" alt="AI Fluent 전 직군 AI 활용 역량 진단 리포트 화면">
                <figcaption class="content-panel__intro diagnosis-preview-caption">
                  <p class="text-label brand" data-i18n="index-diagnosis-preview-label-01">AI Fluent</p>
                  <h3 class="stage-step-title" data-i18n="index-diagnosis-preview-title-01">전 직원의 AI 활용 수준을 <br data-break="mobile"> 한눈에 진단합니다</h3>
                  <p class="desc" data-i18n="index-diagnosis-preview-desc-01">직군과 무관하게 모든 구성원의 AI 활용 역량을 <br data-break="desktop"> 레벨로 진단해 무엇을 가르칠지가 명확해집니다.</p>
                </figcaption>
              </figure>

              <figure class="content-panel__item journey-step" data-diagnosis-step="1">
                <img class="content-panel__visual diagnosis-preview-image" src="/images/products/skillcertify/skillcertify-sample.svg" alt="SkillCertify 개발자 IT 실무 역량 평가 리포트 화면">
                <figcaption class="content-panel__intro diagnosis-preview-caption">
                  <p class="text-label brand" data-i18n="index-diagnosis-preview-label-02">SkillCertify</p>
                  <h3 class="stage-step-title" data-i18n="index-diagnosis-preview-title-02">이력서가 아니라 <br data-break="mobile">실기로 검증합니다</h3>
                  <p class="desc" data-i18n="index-diagnosis-preview-desc-02">실제 업무와 같은 환경에서 코드를 작성하고, <br data-break="desktop"> 실행 결과와 품질까지 채점해 채용과 배치가 정확해집니다.</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- PART 3 · 차별점. 좌우 2단 sticky가 아니라 상하 배치다 —
         상단에 섹션 카피 + CTA, 가운데에 세 가지 차이를 한 화면에 담은 제품 목업,
         하단에 그 화면을 ①②③로 풀어 읽는 설명 3열.
         목업 안의 본문은 스켈레톤 바로 접고, 세 가지 차이를 증명하는 수치·라벨만
         실제 텍스트로 남긴다 — 읽을 것을 줄여야 무엇을 보라는 건지 전달된다. -->
    <section class="difference fade-up" id="part3-difference">
      <div class="section-wrap col difference-layout">

        <!-- 상단 헤더 — proof 섹션과 같은 구성. 타이틀·설명은 좌, CTA는 우. -->
        <div class="section-header">
          <div class="section-title text-left">
            <p class="tag" data-i18n="index-difference-eyebrow">03 · The Difference</p>
            <h2 data-i18n="index-difference-title">교육으로<br>끝내지 않습니다</h2>
            <p class="desc" data-i18n="index-difference-desc">진단으로 확인하고, 라이브러리로 쌓고, 현장에서 검증합니다.</p>
          </div>
          <div class="section-cta">
            <a href="/why-codepresso" class="btn btn-primary"><span data-i18n="index-difference-cta">코드프레소의 차별점 보기</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          </div>
        </div>

        <!-- 세 가지 차이를 카드 세 장으로 나눠 위에서 아래로 펼친다.
             카드마다 제품 화면이 먼저 오고 그 아래 제목·설명이 화면을 글로 푼다.
             화면은 장식이라 스크린리더에는 숨기고, 제목·설명만 읽힌다. -->
        <ul class="difference-blocks">

              <!-- ① 정량적 관리 — 진단 → 교육 → 재진단 3단계를 한 화면에 나란히 두고
                   좌에서 우로 하나씩 켠다(mock-motion의 stage 연출, ②와 같은 문법).
                   1단계에서 낮게 찬 영역별 막대가 3단계에서 같은 자리에 한 번 더
                   차오르는 것이 이 화면의 전부다 — "같은 잣대로 두 번 쟀다". -->
            <li>
              <div class="preview-frame preview-frame--flush" aria-hidden="true">
                <div class="preview-frame__bar">
                  <span class="preview-frame__dots"><i></i><i></i><i></i></span>
                </div>

                <div class="difference-screen">
                <div class="difference-screen-body is-cycle">

                  <!-- 1단계 · 진단 — 문항에 답하면 영역별 점수가 낮게 찬다. -->
                  <div class="difference-card is-step is-first">
                    <div class="difference-step-head">
                      <span class="difference-step-no">1</span>
                      <span class="difference-card-label">진단</span>
                      <span class="difference-step-desc">IT·AI 실무역량 확인</span>
                    </div>

                    <!-- 채점 결과 — 3단계에서 이 막대가 그대로 다시 등장한다. -->
                    <ul class="difference-bars">
                      <li>
                        <span class="difference-gauge-bar">
                          <span style="--bar-h: 44%"></span>
                        </span>
                        <span class="difference-bar-value is-weak">44</span>
                        <span class="difference-bar-name">프롬프트 설계</span>
                      </li>
                      <li>
                        <span class="difference-gauge-bar">
                          <span style="--bar-h: 32%"></span>
                        </span>
                        <span class="difference-bar-value is-weak">32</span>
                        <span class="difference-bar-name">에이전트 구축</span>
                      </li>
                      <li>
                        <span class="difference-gauge-bar">
                          <span style="--bar-h: 48%"></span>
                        </span>
                        <span class="difference-bar-value is-weak">48</span>
                        <span class="difference-bar-name">데이터 분석</span>
                      </li>
                    </ul>

                    <span class="difference-card-foot">평균 <strong>41점</strong> · 취약 영역 2개</span>

                    <span class="difference-flow-arrow">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                  </div>

                  <!-- 2단계 · 교육 — 1단계에서 낮았던 영역이 그대로 커리큘럼이 된다. -->
                  <div class="difference-card is-step is-mid">
                    <div class="difference-step-head">
                      <span class="difference-step-no">2</span>
                      <span class="difference-card-label">교육</span>
                      <span class="difference-step-desc">수준과 직무에 맞는 학습 제공</span>
                    </div>

                    <!-- 배정된 과정 — 취약 영역 2개가 먼저, 나머지는 가라앉힌다. -->
                    <ul class="difference-stack">
                      <li class="difference-course">
                        <span class="difference-course-mark">1</span>
                        <span class="difference-asset-body">
                          <span class="difference-asset-name">에이전트 구축 실습</span>
                        </span>
                        <span class="difference-chip is-brand">배정</span>
                      </li>
                      <li class="difference-course">
                        <span class="difference-course-mark">2</span>
                        <span class="difference-asset-body">
                          <span class="difference-asset-name">프롬프트 설계 기초</span>
                        </span>
                        <span class="difference-chip is-brand">배정</span>
                      </li>
                      <li class="difference-course is-quiet">
                        <span class="difference-course-mark">3</span>
                        <span class="difference-asset-body">
                          <span class="skeleton-line" style="width: 96px"></span>
                        </span>
                      </li>
                    </ul>

                    <!-- 수강 진행률 — 교육이 실제로 돌아가고 있다는 신호. -->
                    <div class="difference-progress">
                      <span class="difference-track"><span style="width: 82%"></span></span>
                      <span class="difference-bar-value">82%</span>
                    </div>

                    <span class="difference-card-foot">직무별 <strong>4개 과정</strong> 배정</span>

                    <span class="difference-flow-arrow">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                  </div>

                  <!-- 3단계 · 재진단 — 1단계와 같은 영역·같은 자리 막대가 한 번 더 찬다. -->
                  <div class="difference-card is-step is-last">
                    <div class="difference-step-head">
                      <span class="difference-step-no">3</span>
                      <span class="difference-card-label">재진단</span>
                      <span class="difference-step-desc">교육 전후 역량 변화 확인</span>
                    </div>

                    <!-- 진단 막대(회색)를 깔고 그 위에 재진단 막대(브랜드)가 덮어쓰며 뻗는다.
                         1단계와 같은 영역·같은 순서라야 "같은 잣대"가 읽힌다. -->
                    <ul class="difference-bars">
                      <li>
                        <span class="difference-gauge-bar">
                          <span style="--bar-h: 44%"></span>
                          <span class="is-after" style="--bar-h: 86%"></span>
                        </span>
                        <span class="difference-bar-value">+42</span>
                        <span class="difference-bar-name">프롬프트 설계</span>
                      </li>
                      <li>
                        <span class="difference-gauge-bar">
                          <span style="--bar-h: 32%"></span>
                          <span class="is-after" style="--bar-h: 71%"></span>
                        </span>
                        <span class="difference-bar-value">+39</span>
                        <span class="difference-bar-name">에이전트 구축</span>
                      </li>
                      <li>
                        <span class="difference-gauge-bar">
                          <span style="--bar-h: 48%"></span>
                          <span class="is-after" style="--bar-h: 74%"></span>
                        </span>
                        <span class="difference-bar-value">+26</span>
                        <span class="difference-bar-name">데이터 분석</span>
                      </li>
                    </ul>

                    <span class="difference-legend-key">
                      <span class="difference-key"><i></i>교육 전 진단</span>
                      <span class="difference-key is-brand"><i></i>교육 후 재진단</span>
                    </span>

                    <!-- 이 화면의 결론. 흐름에서 빼내 우측 상단에 띄운다 —
                         칸 아래에 두면 기둥이 그만큼 짧아져 1단계와 눈높이가
                         어긋난다. 배지 하나로 줄여 "얼마나 올랐나"만 남긴다. -->
                    <span class="difference-verdict">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      평균 <b>90%</b> 상승
                    </span>
                  </div>

                </div>
                </div>
              </div>

              <div class="difference-block-head">
                <span class="difference-block-no">01</span>
                <h3 class="stage-step-title" data-i18n="index-difference-block-title-01">정량적 관리</h3>
                <p class="desc" data-i18n="index-difference-block-desc-01">교육 전후를 같은 기준으로 진단해<br>무엇이 얼마나 달라졌는지 확인합니다.</p>
              </div>
            </li>

            <!-- ② 문화 정착 — 공유 허브 → 라이브러리 → 전사 확산 3단계. -->
            <li>
              <div class="preview-frame preview-frame--flush" aria-hidden="true">
                <div class="preview-frame__bar">
                  <span class="preview-frame__dots"><i></i><i></i><i></i></span>
                </div>

                <div class="difference-screen">
                <div class="difference-screen-body is-library">

                  <!-- 1단계 · 공유 허브 — 동료에게 프롬프트를 보내는 메시지 창. -->
                  <div class="difference-card is-step is-first">
                    <div class="difference-step-head">
                      <span class="difference-step-no">1</span>
                      <span class="difference-card-label">공유 허브</span>
                      <span class="difference-step-desc">에이전트·프롬프트를 사내에 공유</span>
                    </div>

                    <!-- 메신저 창 — 받는 사람 줄 + 말풍선 + 첨부 파일. -->
                    <div class="difference-chat">
                      <div class="difference-chat-head">
                        <span class="journey-mock-avatar">마</span>
                        <span class="difference-asset-name">마케팅팀</span>
                      </div>

                      <!-- 상대 말풍선 — 읽을 필요 없는 배경이라 스켈레톤으로 둔다. -->
                      <div class="difference-bubble is-them">
                        <span class="skeleton-line" style="width: 84px"></span>
                      </div>

                      <!-- 내 말풍선 — 이 단계에서 유일하게 읽혀야 하는 문장. -->
                      <div class="difference-bubble is-me">
                        <span class="difference-bubble-text">마케팅 문구 프롬프트 공유드립니다</span>

                        <!-- 첨부 파일 카드 — 대화 첨부 UI 그대로. -->
                        <span class="difference-attach">
                          <span class="difference-asset-icon">
                            <!-- 문서 — 첨부된 프롬프트 파일 -->
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.5 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5.5-5.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
                              <path d="M13.5 3.5V9H19" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
                            </svg>
                          </span>
                          <span class="difference-attach-body">
                            <span class="difference-asset-name">캠페인_문구.md</span>
                            <span class="difference-attach-meta">프롬프트 · 4.2KB</span>
                          </span>
                        </span>
                      </div>

                      <!-- 방금 전송됐다는 신호. 말풍선보다 늦게 떠야 순서가 읽힌다. -->
                      <span class="difference-chat-foot">전송됨 · 방금</span>
                    </div>

                    <!-- 다음 칸으로 넘긴다는 신호. 칸 오른쪽 경계에 걸친다. -->
                    <span class="difference-flow-arrow">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                  </div>

                  <!-- 2단계 · 라이브러리 — 공유된 자산이 목록으로 차곡차곡 쌓인다. -->
                  <div class="difference-card is-step is-mid">
                    <div class="difference-step-head">
                      <span class="difference-step-no">2</span>
                      <span class="difference-card-label">라이브러리</span>
                      <span class="difference-step-desc">자주 쓰이는 자산을 차곡차곡 축적</span>
                    </div>

                    <ul class="difference-stack">
                      <!-- 맨 위 = 방금 들어온 자산. 1단계에서 보낸 그 파일이다. -->
                      <li class="difference-asset">
                        <span class="difference-asset-icon">
                          <!-- 대화 — 프롬프트 -->
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 15a3 3 0 0 1-3 3H8l-4 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="difference-asset-body">
                          <span class="difference-asset-name">캠페인 문구 프롬프트</span>
                        </span>
                        <span class="difference-chip is-brand">추가</span>
                      </li>

                      <li class="difference-asset">
                        <span class="difference-asset-icon">
                          <!-- 톱니 — 에이전트 -->
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.7"></circle>
                            <path d="M12 3v2.5m0 13V21M3 12h2.5m13 0H21M5.6 5.6l1.8 1.8m9.2 9.2 1.8 1.8M18.4 5.6l-1.8 1.8m-9.2 9.2-1.8 1.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path>
                          </svg>
                        </span>
                        <span class="difference-asset-body">
                          <span class="difference-asset-name">계약서 리스크 검토</span>
                        </span>
                        <span class="difference-chip">에이전트</span>
                      </li>

                      <li class="difference-asset">
                        <span class="difference-asset-icon">
                          <!-- 표 — 데이터 워크플로우 -->
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="currentColor" stroke-width="1.7"></rect>
                            <path d="M3.5 9.5h17M9.5 9.5v10" stroke="currentColor" stroke-width="1.7"></path>
                          </svg>
                        </span>
                        <span class="difference-asset-body">
                          <span class="difference-asset-name">매출 데이터 파이프라인</span>
                        </span>
                        <span class="difference-chip">워크플로우</span>
                      </li>

                      <!-- 아래로 갈수록 가라앉는 스켈레톤 행 — "더 쌓여 있다"를 형태로 보여준다. -->
                      <li class="difference-asset is-quiet">
                        <span class="difference-asset-icon"></span>
                        <span class="difference-asset-body">
                          <span class="skeleton-line" style="width: 108px"></span>
                        </span>
                      </li>
                    </ul>

                    <span class="difference-card-foot">쌓인 자산 <strong>438건</strong> 누적</span>

                    <span class="difference-flow-arrow">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                  </div>

                  <!-- 3단계 · 전사 확산 — 한 팀에 있던 자산이 다른 본부로 퍼진다. -->
                  <div class="difference-card is-step is-last">
                    <div class="difference-step-head">
                      <span class="difference-step-no">3</span>
                      <span class="difference-card-label">전사 확산</span>
                      <span class="difference-step-desc">팀을 넘어 조직 전체의 문화로</span>
                    </div>

                    <!-- 가운데 원본 팀에서 바깥 본부로 파장이 번지는 방사형 그림.
                         노드 위치는 --node-x/--node-y로 마크업이 직접 정한다. -->
                    <div class="difference-spread-map">
                      <span class="difference-spread-wave"></span>
                      <span class="difference-spread-wave" style="animation-delay: 1.3s"></span>

                      <span class="difference-spread-core">마케팅팀</span>

                      <span class="difference-spread-node" style="--node-x: 76%; --node-y: 14%">영업본부</span>
                      <span class="difference-spread-node" style="--node-x: 78%; --node-y: 86%">개발본부</span>
                      <span class="difference-spread-node" style="--node-x: 22%; --node-y: 14%">인사팀</span>
                      <span class="difference-spread-node" style="--node-x: 20%; --node-y: 86%">재무팀</span>
                    </div>

                    <span class="difference-card-foot">한 팀의 자산이 <strong>7개 본부</strong>로 확산</span>
                  </div>

                </div>
                </div>
              </div>

              <div class="difference-block-head">
                <span class="difference-block-no">02</span>
                <h3 class="stage-step-title" data-i18n="index-difference-block-title-02">문화 정착</h3>
                <p class="desc" data-i18n="index-difference-block-desc-02">잘 쓰는 한 사람이 만든 프롬프트와 에이전트를 라이브러리에 축적하고, 전사로 확산합니다. <br> 교육이 끝난 뒤에도 조직 안에서 계속 활용이 가능합니다.</p>
              </div>
            </li>

            <!-- ③ 현장 검증 — 현장 투입 → 검증 → 커리큘럼 반영 3단계.
                 섹션의 결론이라 이 판만 다크로 둔다. -->
            <li>
              <div class="preview-frame preview-frame--flush" aria-hidden="true">
                <div class="preview-frame__bar">
                  <span class="preview-frame__dots"><i></i><i></i><i></i></span>
                </div>

                <div class="difference-screen is-dark">
                <div class="difference-screen-body is-field">

                  <!-- 1단계 · 현장 투입 — 우리가 실제로 어디에 들어가 있는지. -->
                  <div class="difference-card is-step is-first">
                    <div class="difference-step-head">
                      <span class="difference-step-no">1</span>
                      <span class="difference-card-label">현장 투입</span>
                      <span class="difference-step-desc">FDE가 고객사 현장에서 직접 만듭니다</span>
                    </div>

                    <ul class="difference-stack">
                      <li class="difference-asset">
                        <span class="difference-asset-icon">
                          <!-- 공장 — 제조 -->
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 20V10l5 3V10l5 3V6l6 3v11H4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="difference-asset-body">
                          <span class="difference-asset-name">제조 · 품질 검사 자동화</span>
                        </span>
                      </li>
                      <li class="difference-asset">
                        <span class="difference-asset-icon">
                          <!-- 카드 — 금융 -->
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="6" width="18" height="12" rx="2.5" stroke="currentColor" stroke-width="1.7"></rect>
                            <path d="M3 10.5h18" stroke="currentColor" stroke-width="1.7"></path>
                          </svg>
                        </span>
                        <span class="difference-asset-body">
                          <span class="difference-asset-name">금융 · 여신 심사 보조</span>
                        </span>
                      </li>
                      <li class="difference-asset">
                        <span class="difference-asset-icon">
                          <!-- 카트 — 유통 -->
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 4h2.2l2.3 10.5h9.6L19 7H6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
                            <circle cx="9" cy="19" r="1.4" stroke="currentColor" stroke-width="1.7"></circle>
                            <circle cx="17" cy="19" r="1.4" stroke="currentColor" stroke-width="1.7"></circle>
                          </svg>
                        </span>
                        <span class="difference-asset-body">
                          <span class="difference-asset-name">유통 · 수요 예측</span>
                        </span>
                      </li>
                    </ul>

                    <span class="difference-card-foot"><strong>12개 산업</strong>에 투입 중</span>

                    <span class="difference-flow-arrow">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                  </div>

                  <!-- 2단계 · 검증 — 현장에서 통한 것만 남기고 나머지는 버린다.
                       "걸러낸다"가 이 칸의 전부라, 통과와 탈락을 함께 보여준다. -->
                  <div class="difference-card is-step is-mid">
                    <div class="difference-step-head">
                      <span class="difference-step-no">2</span>
                      <span class="difference-card-label">검증</span>
                      <span class="difference-step-desc">현장에서 실제로 통한 것만 남깁니다</span>
                    </div>

                    <ul class="difference-stack">
                      <li class="difference-trial is-pass">
                        <span class="difference-trial-mark">
                          <!-- 체크 — 현장에서 통과 -->
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="difference-asset-body">
                          <span class="difference-asset-name">현장에서 통한 방식</span>
                        </span>
                        <span class="difference-trial-count">38</span>
                      </li>
                      <li class="difference-trial is-fail">
                        <span class="difference-trial-mark">
                          <!-- 가위표 — 현장에서 탈락 -->
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 7l10 10M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"></path>
                          </svg>
                        </span>
                        <span class="difference-asset-body">
                          <span class="difference-asset-name">써 보니 안 되던 방식</span>
                        </span>
                        <span class="difference-trial-count">14</span>
                      </li>
                    </ul>

                    <!-- 안 되던 것도 버리지 않는다 — 이게 왜 남다른지의 핵심이라 강조한다. -->
                    <p class="difference-trial-note">
                      안 되던 <strong>14건</strong>도 <strong>“이건 왜 안 되는지”</strong>로 함께 가르칩니다
                    </p>

                    <span class="difference-flow-arrow">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                  </div>

                  <!-- 3단계 · 커리큘럼 반영 — ①의 교육으로 되돌아가며 순환이 닫힌다. -->
                  <div class="difference-card is-step is-last">
                    <div class="difference-step-head">
                      <span class="difference-step-no">3</span>
                      <span class="difference-card-label">커리큘럼 반영</span>
                      <span class="difference-step-desc">검증된 사례가 그대로 교육이 됩니다</span>
                    </div>

                    <ul class="difference-stack">
                      <li class="difference-asset">
                        <span class="difference-asset-icon">
                          <!-- 책 — 교육 콘텐츠 -->
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H5.5A1.5 1.5 0 0 1 4 15.5v-10Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
                            <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h4.5a1.5 1.5 0 0 0 1.5-1.5v-10Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="difference-asset-body">
                          <span class="difference-asset-name">제조 품질 검사 실습</span>
                        </span>
                        <span class="difference-chip is-brand">신규</span>
                      </li>
                      <li class="difference-asset">
                        <span class="difference-asset-icon">
                          <!-- 책 — 교육 콘텐츠 -->
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H5.5A1.5 1.5 0 0 1 4 15.5v-10Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
                            <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h4.5a1.5 1.5 0 0 0 1.5-1.5v-10Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="difference-asset-body">
                          <span class="difference-asset-name">여신 심사 자동화</span>
                        </span>
                        <span class="difference-chip is-brand">신규</span>
                      </li>
                    </ul>

                    <!-- 순환이 닫히는 지점. ①의 2단계 교육으로 되돌아간다. -->
                    <div class="difference-loop">
                      <span class="difference-loop-mark">
                        <!-- 되돌아가는 화살표 — 다시 교육으로 -->
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 11a8 8 0 1 0-2.3 5.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                          <path d="M20 4.5V11h-6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                      <p class="difference-loop-text">다시 <strong>진단·교육</strong>으로<br>현장이 바뀌면 교육도 바뀝니다</p>
                    </div>
                  </div>

                </div>
                </div>
              </div>

              <div class="difference-block-head">
                <span class="difference-block-no">03</span>
                <h3 class="stage-step-title" data-i18n="index-difference-block-title-03">현장 검증</h3>
                <p class="desc" data-i18n="index-difference-block-desc-03">AXMOS 얼라이언스와 함께 실제 현장에서 AI를 적용하고 검증합니다.<br>현장에서 검증된 사례를 교육에 반영합니다.</p>
              </div>
            </li>
        </ul>

        <!-- 모바일 전용 대체 뷰(560px 이하) — 위 목업은 그대로 두고
             CSS가 이 범위에서만 서로 보임/숨김을 맞바꾼다(mobile.css).
             목업이 세로로 접히면 카드 3장이 너무 길어져(사용자 확인) 순환
             없이 9개 항목을 정적으로 다 나열하는 별도 마크업을 쓴다. -->
        <div class="difference-mobile">
          <div class="difference-mobile-group">
            <p class="difference-mobile-heading" data-i18n="index-difference-m-heading-01">① 정량적 관리</p>
            <ul class="difference-mobile-row">
              <li>
                <span class="difference-mobile-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6 19V11M12 19V5M18 19v-6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <span class="difference-mobile-title" data-i18n="index-difference-m-item-title-01">진단</span>
                <span class="difference-mobile-desc" data-i18n="index-difference-m-item-desc-01">IT·AI 실무역량 확인</span>
              </li>
              <li>
                <span class="difference-mobile-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H5.5A1.5 1.5 0 0 1 4 15.5v-10Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
                    <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h4.5a1.5 1.5 0 0 0 1.5-1.5v-10Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <span class="difference-mobile-title" data-i18n="index-difference-m-item-title-02">교육</span>
                <span class="difference-mobile-desc" data-i18n="index-difference-m-item-desc-02">수준과 직무에 맞는 학습 제공</span>
              </li>
              <li>
                <span class="difference-mobile-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M20 11a8 8 0 1 0-2.3 5.7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path>
                    <path d="M20 4.5V11h-6.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <span class="difference-mobile-title" data-i18n="index-difference-m-item-title-03">재진단</span>
                <span class="difference-mobile-desc" data-i18n="index-difference-m-item-desc-03">교육 전후 역량 변화 확인</span>
              </li>
            </ul>
            <p class="difference-mobile-note" data-i18n="index-difference-m-note-01">무엇이 얼마나 달라졌는지 확인합니다.</p>
          </div>

          <div class="difference-mobile-group">
            <p class="difference-mobile-heading" data-i18n="index-difference-m-heading-02">② 문화 정착</p>
            <ul class="difference-mobile-row">
              <li>
                <span class="difference-mobile-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M20 15a3 3 0 0 1-3 3H8l-4 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <span class="difference-mobile-title" data-i18n="index-difference-m-item-title-04">공유 허브</span>
                <span class="difference-mobile-desc" data-i18n="index-difference-m-item-desc-04">에이전트·프롬프트를 사내에 공유</span>
              </li>
              <li>
                <span class="difference-mobile-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="currentColor" stroke-width="1.7"></rect>
                    <path d="M3.5 9.5h17M9.5 9.5v10" stroke="currentColor" stroke-width="1.7"></path>
                  </svg>
                </span>
                <span class="difference-mobile-title" data-i18n="index-difference-m-item-title-05">라이브러리</span>
                <span class="difference-mobile-desc" data-i18n="index-difference-m-item-desc-05">자주 쓰이는 자산을 차곡차곡 축적</span>
              </li>
              <li>
                <span class="difference-mobile-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="1.7"></circle>
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path>
                  </svg>
                </span>
                <span class="difference-mobile-title" data-i18n="index-difference-m-item-title-06">전사 확산</span>
                <span class="difference-mobile-desc" data-i18n="index-difference-m-item-desc-06">팀을 넘어 조직 전체의 문화로</span>
              </li>
            </ul>
            <p class="difference-mobile-note" data-i18n="index-difference-m-note-02">교육이 끝난 뒤에도 조직 안에서 계속 활용이 가능합니다.</p>
          </div>

          <!-- ③ 현장 검증 — 데스크톱은 다크 목업 한 판, 모바일은 다크 띠 + 같은 3단 구성. -->
          <div class="difference-mobile-group">
            <p class="difference-mobile-heading" data-i18n="index-difference-m-heading-03">③ 현장 검증</p>
            <ul class="difference-mobile-row">
              <li>
                <span class="difference-mobile-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.7"></circle>
                  </svg>
                </span>
                <span class="difference-mobile-title" data-i18n="index-difference-m-item-title-07">현장 투입</span>
                <span class="difference-mobile-desc" data-i18n="index-difference-m-item-desc-07">12개 산업 현장에 직접 참여</span>
              </li>
              <li>
                <span class="difference-mobile-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 12.5 9.5 18 20 6.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <span class="difference-mobile-title" data-i18n="index-difference-m-item-title-08">효과 검증</span>
                <span class="difference-mobile-desc" data-i18n="index-difference-m-item-desc-08">먼저 만들어 보며 시행착오</span>
              </li>
              <li>
                <span class="difference-mobile-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"></path>
                    <path d="M8 9.5h8M8 14h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path>
                  </svg>
                </span>
                <span class="difference-mobile-title" data-i18n="index-difference-m-item-title-09">커리큘럼 반영</span>
                <span class="difference-mobile-desc" data-i18n="index-difference-m-item-desc-09">최신 사례로 교육에 반영</span>
              </li>
            </ul>
            <p class="difference-mobile-note" data-i18n="index-difference-m-note-03">현장에서 검증된 사례를 교육에 반영합니다.</p>
          </div>

          <p class="difference-mobile-field" data-i18n="index-difference-m-field">그리고 우리는 <strong>AXMOS 얼라이언스</strong>와 함께 실제 현장에서 AI를 적용하고 검증합니다.</p>
        </div>

      </div>
    </section>

    <div class="dot-line"></div>

    <section class="insight fade-up" id="insight">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="index-insight-eyebrow">Insight</p>
          <h2 data-i18n="index-insight-title">최근 인사이트</h2>
          <p class="desc" data-i18n="index-insight-desc">AI 역량 진단과 교육, 업무 자동화에 관한 코드프레소의 최신 사례와 분석을 확인하세요.</p>
        </div>

        <div class="section-content">
          <InsightList />

          <div class="insight-more">
            <a href="https://www.codepresso.kr/news" class="btn btn-primary" target="_blank" rel="noopener"><span data-i18n="index-insight-cta">인사이트 더보기</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-final fade-up">
      <div class="section-wrap col cta-final-inner">
        <h2 class="cta-final-title" data-i18n="index-cta-final-title">AI 인재 채용 공고를 내기 전에,<br data-break="desktop"> 내부에서 먼저 찾아보세요</h2>
        <p class="cta-final-desc" data-i18n="index-cta-final-desc">가장 유력한 AI 인재 후보는 이미 회사에 출근해 있습니다.<br data-break="desktop"> 진단부터 교육, 문화 정착까지, 내재화의 첫걸음을 함께 설계합니다.</p>
        <div class="cta-final-actions">
          <a href="#" class="btn btn-primary btn-lg">
            <span data-i18n="index-cta-final-btn-01">도입 상담하기</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
          <a href="/skills" class="btn btn-outline-inverse btn-lg">
            <span data-i18n="index-cta-final-btn-02">서비스 전체 보기</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
        </div>
        <a href="#" class="link-arrow link-arrow-inverse">
          <span class="link-underline" data-i18n="index-cta-final-link">개인의 AI 활용 수준이 궁금한가요? 3분 AI 진단 시작하기</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>
      </div>
    </section>
  </main>

  <!-- Footer도 partials/footer.html 하나로 관리한다. -->
  <SiteFooter />
  <ClientInteractions :scripts='["js/fade-up.js","js/scroll-progress.js","js/header-scroll.js","js/nav-menu.js","js/proof-card-slider.js","js/stat-reveal.js","js/part-nav.js","js/journey-stage.js"]' />
</template>

<script setup>
useSeoMeta({ title: "기업 AI 역량 진단·교육·업무 자동화 | 코드프레소", description: "업무를 가장 잘 아는 건 이미 우리 직원입니다. AI 활용 역량 진단부터 맞춤 교육, 업무 자동화까지 하나의 플랫폼에서 연결합니다." })
import '~/css/pages/index.css'
</script>
