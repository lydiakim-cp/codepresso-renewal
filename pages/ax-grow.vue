<template>
  <SiteHeader />
<!-- GNB는 partials/header.html 하나로 관리한다. js/include-partials.js가 fetch해 삽입한다.
       (fetch를 쓰므로 file:// 직접 열기로는 안 보인다 — 로컬 정적 서버로 확인한다) -->
  

  <main class="ax-grow main-dark">
    <!-- Hero — 제품 한 줄 정의 + CTA + 핵심 조건 3개. 첫 화면이라 fade-up을 붙이지 않는다. -->
    <section class="sub-hero">
      <div class="hero-wrap">
        <div class="sub-hero-copy">
          <p class="tag" data-i18n="ax-grow-hero-eyebrow">AX Grow</p>
          <h1 class="hero-title" data-i18n="ax-grow-hero-title">현장에서 가르치고, 함께 만들고,<br>조직에 남깁니다</h1>
          <p class="hero-desc" data-i18n="ax-grow-hero-desc">우리 회사 업무로 팀을 교육하고, 바로 쓰는 AI Agent와 확산 로드맵을 함께 만듭니다.</p>
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="#">
              <span data-i18n="ax-grow-hero-cta">우리 팀 내재화 상담</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </div>
        </div>

        <!-- 제품의 핵심 약속 3개. ax-build hero-facts와 같은 유리 띠 외피(1장 + 세로
             구분선 + 그림자 없음)에 수치를 담는다. -->
        <ul class="hero-facts surface-glass">
          <li class="metric-card is-visible">
            <span class="hero-fact-icon icon-lg" aria-hidden="true">
              <!-- 캘린더 — ic_calendar.svg 기반, 하드코딩 색을 강조 톤으로 교체 -->
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 4H4.5C3.39543 4 2.5 4.89543 2.5 6V19C2.5 20.1046 3.39543 21 4.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V6C21.5 4.89543 20.6046 4 19.5 4Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                <path d="M8.48 3H7.5C7.22386 3 7 3.22386 7 3.5V5.5C7 5.77614 7.22386 6 7.5 6H8.48C8.75614 6 8.98 5.77614 8.98 5.5V3.5C8.98 3.22386 8.75614 3 8.48 3Z" fill="var(--color-brand)"></path>
                <path d="M16.5 3H15.5C15.2239 3 15 3.22386 15 3.5V5.5C15 5.77614 15.2239 6 15.5 6H16.5C16.7761 6 17 5.77614 17 5.5V3.5C17 3.22386 16.7761 3 16.5 3Z" fill="var(--color-brand)"></path>
                <path d="M2.5 9H21.5V10.5H2.5V9Z" fill="var(--color-brand)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2 17.6L8.4 14.8L9.6 13.6L11.2 15.2L14.9 11.5L16.1 12.7L11.2 17.6Z" fill="var(--color-brand-dark)"></path>
              </svg>
            </span>
            <div>
              <div class="metric-card__value"><span>16</span><span class="unit">일</span></div>
              <p class="metric-card__label text-label" data-i18n="ax-grow-hero-fact-label-01">교육부터 공동 구축과 확산 설계까지</p>
            </div>
          </li>
          <li class="metric-card is-visible">
            <span class="hero-fact-icon icon-lg" aria-hidden="true">
              <!-- 졸업모자 형태 대신 사람+체크 — 현업 맞춤 학습. ic_shield.svg 뼈대 재사용 -->
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 5L12 1L2.5 5V9C2.49 12.02 3.39 14.97 5.09 17.47C6.78 19.96 9.19 21.89 12 23C14.81 21.89 17.22 19.96 18.91 17.47C20.61 14.97 21.51 12.02 21.5 9V5Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.41 11.52L15.24 7.7L17 9.47L11.33 15.13L7.7 11.18L9.54 9.49L11.41 11.52Z" fill="var(--color-brand)"></path>
              </svg>
            </span>
            <div>
              <div class="metric-card__value"><span data-i18n="ax-grow-hero-fact-value-02">현업 맞춤</span></div>
              <p class="metric-card__label text-label" data-i18n="ax-grow-hero-fact-label-02">우리 업무와 데이터를 기준으로 학습</p>
            </div>
          </li>
          <li class="metric-card is-visible">
            <span class="hero-fact-icon icon-lg" aria-hidden="true">
              <!-- 사내 확산 — images/icons/library/074.통신.svg -->
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9997 7.9405C14.817 7.93178 17.5598 8.84488 19.8097 10.5405C19.9792 10.6675 20.1901 10.7267 20.401 10.7063C20.6119 10.686 20.8076 10.5876 20.9497 10.4305L22.4697 8.6305C22.5423 8.54685 22.5972 8.44937 22.631 8.34393C22.6649 8.23849 22.6771 8.12728 22.6668 8.01701C22.6565 7.90674 22.624 7.79969 22.5712 7.70233C22.5184 7.60496 22.4465 7.5193 22.3597 7.45051C19.391 5.16438 15.7466 3.92967 11.9997 3.9405C8.23591 3.93166 4.57649 5.17727 1.5997 7.48051C1.51291 7.5493 1.44095 7.63496 1.38817 7.73232C1.33539 7.82969 1.30288 7.93674 1.2926 8.04701C1.28232 8.15728 1.29449 8.26849 1.32837 8.37393C1.36224 8.47937 1.41712 8.57685 1.4897 8.6605L3.0097 10.4505C3.14921 10.6118 3.34544 10.7132 3.55769 10.7336C3.76994 10.7541 3.98193 10.6921 4.1497 10.5605C6.41111 8.85538 9.16749 7.93541 11.9997 7.9405Z" fill="#DBECFF"></path>
                <path d="M5.15951 12.9699L6.67952 14.7699C6.80986 14.9229 6.99187 15.0227 7.19098 15.0504C7.39008 15.0781 7.59241 15.0316 7.75952 14.9199C9.00265 14.0515 10.4831 13.5871 11.9995 13.5899C13.5085 13.585 14.9823 14.046 16.2195 14.9099C16.3862 15.0198 16.5877 15.0642 16.7851 15.0347C16.9826 15.0052 17.1622 14.9037 17.2895 14.7499L18.8095 12.9499C18.8846 12.8616 18.9403 12.7585 18.9731 12.6473C19.006 12.5361 19.0151 12.4193 19.0001 12.3044C18.985 12.1895 18.946 12.079 18.8856 11.98C18.8253 11.8811 18.7448 11.7959 18.6495 11.7299C16.7139 10.3333 14.3864 9.5843 11.9995 9.58989C9.60009 9.58308 7.26069 10.3395 5.31952 11.7499C5.22421 11.8159 5.14378 11.9011 5.0834 12C5.02303 12.099 4.98403 12.2095 4.96896 12.3244C4.95389 12.4393 4.96306 12.5562 4.99588 12.6673C5.0287 12.7785 5.08444 12.8816 5.15951 12.9699Z" fill="#B8D3FB"></path>
                <path d="M8.91971 17.3896L11.3697 20.2696C11.4476 20.3588 11.5437 20.4302 11.6515 20.4792C11.7593 20.5281 11.8763 20.5535 11.9947 20.5535C12.1131 20.5535 12.2301 20.5281 12.3379 20.4792C12.4457 20.4302 12.5418 20.3588 12.6197 20.2696L15.0597 17.3796C15.1384 17.2897 15.1965 17.1836 15.2299 17.0689C15.2633 16.9542 15.2713 16.8335 15.2532 16.7154C15.2351 16.5973 15.1914 16.4845 15.1251 16.3851C15.0589 16.2856 14.9717 16.2018 14.8697 16.1396C14.002 15.6217 13.0102 15.3487 11.9997 15.3496C10.9818 15.3506 9.9832 15.627 9.10971 16.1496C9.0077 16.2119 8.92053 16.2956 8.85429 16.3951C8.78806 16.4946 8.74436 16.6073 8.72626 16.7254C8.70816 16.8435 8.71609 16.9642 8.74951 17.0789C8.78293 17.1936 8.84101 17.2997 8.91971 17.3896Z" fill="#5096FF"></path>
              </svg>
            </span>
            <div>
              <div class="metric-card__value"><span data-i18n="ax-grow-hero-fact-value-03">사내 확산</span></div>
              <p class="metric-card__label text-label" data-i18n="ax-grow-hero-fact-label-03">한 팀의 경험을 조직의 실행 체계로</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- 01 How AX Grow Works — 세 단계가 하나의 프로그램으로 이어진다. -->
    <section class="process fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="ax-grow-process-eyebrow">01 · How AX Grow Works</p>
          <h2 data-i18n="ax-grow-process-title">배우고, 함께 만들고, <br>조직으로 확산합니다</h2>
          <p class="desc" data-i18n="ax-grow-process-desc">세 단계가 하나의 프로그램으로 이어져야 실제 내재화가 일어납니다.</p>
        </div>
        <div class="section-content">
          <ol class="cycle">
            <li>
              <div class="cycle-head">
                <span class="cycle-no">1</span>
                <p class="cycle-en" data-i18n="ax-grow-process-item-en-01">Step 1</p>
              </div>
              <h3 data-i18n="ax-grow-process-item-title-01">현장 맞춤 교육</h3>
              <p class="description" data-i18n="ax-grow-process-item-desc-01">범용 AI 이론 대신, 참여자의 직무와 실제 업무를 기준으로 <br data-break="desktop"> 필요한 개념과 활용 방식을 교육합니다.</p>
              <span class="cycle-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </li>
            <li>
              <div class="cycle-head">
                <span class="cycle-no">2</span>
                <p class="cycle-en" data-i18n="ax-grow-process-item-en-02">Step 2</p>
              </div>
              <h3 data-i18n="ax-grow-process-item-title-02">실제 업무 공동 구축</h3>
              <p class="description" data-i18n="ax-grow-process-item-desc-02">AXpresso의 FDE와 사내 핵심 팀이 <br data-break="desktop"> 실제 업무를 수행하는 AI Agent를 함께 설계하고 구축합니다.</p>
              <span class="cycle-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </li>
            <li class="is-return">
              <div class="cycle-head">
                <span class="cycle-no">3</span>
                <p class="cycle-en" data-i18n="ax-grow-process-item-en-03">Step 3</p>
              </div>
              <h3 data-i18n="ax-grow-process-item-title-03">사내 확산 설계</h3>
              <p class="description" data-i18n="ax-grow-process-item-desc-03">첫 프로젝트의 기준과 경험을 정리해 <br data-break="desktop"> 다음 적용 업무, 담당 체계, 확산 순서를 실행 로드맵으로 만듭니다.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- 02 Why It Works — "일회성 교육"과 "AX Grow"를 좌우로 대비. 공용 compare-panel. -->
    <section class="intro fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="ax-grow-intro-eyebrow">02 · Why It Works</p>
          <h2 data-i18n="ax-grow-intro-title">교육만 듣는 것과, 우리 힘으로 실행하는 것은 다릅니다</h2>
        </div>
        <div class="section-content">
          <div class="compare-panel">
            <div class="compare-panel__item">
              <p class="compare-panel__label" data-i18n="ax-grow-intro-label-01">일회성 교육</p>
              <h3 class="compare-panel__title" data-i18n="ax-grow-intro-item-title-01">개념은 알지만, <br> 실제 업무 적용에서 멈춥니다</h3>
              <p class="compare-panel__desc" data-i18n="ax-grow-intro-item-desc-01">교육 내용과 현장 업무 사이의 간격을 참여자가 혼자 해결해야 합니다.</p>
            </div>
            <span class="compare-panel__arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>
            <div class="compare-panel__item is-after">
              <p class="compare-panel__label" data-i18n="ax-grow-intro-label-02">AX Grow</p>
              <h3 class="compare-panel__title" data-i18n="ax-grow-intro-item-title-02">우리 업무로 만들면서 배우고 <br> 다음 과제까지 이어갑니다</h3>
              <p class="compare-panel__desc" data-i18n="ax-grow-intro-item-desc-02">교육, 공동 구축, 확산 계획이 연결되어 경험과 실행 기준이 조직 안에 남습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 Best Fit -->
    <section class="features fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="ax-grow-features-eyebrow">03 · Best Fit</p>
          <h2 data-i18n="ax-grow-features-title">이런 조직이라면 AX Grow가 맞습니다</h2>
        </div>
        <div class="section-content">
          <!-- 메인 How it works와 같은 feature-card 자동 순환. -->
          <div class="feature-card-grid">
            <article class="feature-card">
              <div class="feature-card-icon-row">
                <span class="feature-card-icon" aria-hidden="true">
                  <!-- 핵심 팀 — images/icons/library/103.팀.svg -->
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9C7.06087 9 8.07827 9.42142 8.82841 10.1716C9.57856 10.9217 10 11.9391 10 13V18C10 18.2652 9.89464 18.5196 9.70711 18.7071C9.51957 18.8946 9.26522 19 9 19H3C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18V13C2 11.9391 2.42142 10.9217 3.17157 10.1716C3.92172 9.42142 4.93913 9 6 9Z" fill="#C7CED5"></path>
                    <path d="M6 8C7.38071 8 8.5 6.88071 8.5 5.5C8.5 4.11929 7.38071 3 6 3C4.61929 3 3.5 4.11929 3.5 5.5C3.5 6.88071 4.61929 8 6 8Z" fill="#C7CED5"></path>
                    <path d="M21 19H15C14.7348 19 14.4804 18.8946 14.2929 18.7071C14.1053 18.5196 14 18.2652 14 18V13C14 11.9391 14.4214 10.9217 15.1716 10.1716C15.9217 9.42142 16.9391 9 18 9C19.0609 9 20.0783 9.42142 20.8284 10.1716C21.5786 10.9217 22 11.9391 22 13V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19Z" fill="#C7CED5"></path>
                    <path d="M18 8C19.3807 8 20.5 6.88071 20.5 5.5C20.5 4.11929 19.3807 3 18 3C16.6193 3 15.5 4.11929 15.5 5.5C15.5 6.88071 16.6193 8 18 8Z" fill="#C7CED5"></path>
                    <path d="M11.1201 12H12.8701C13.931 12 14.9484 12.4214 15.6985 13.1716C16.4487 13.9217 16.8701 14.9391 16.8701 16V21C16.8701 21.2652 16.7648 21.5196 16.5772 21.7071C16.3897 21.8946 16.1353 22 15.8701 22H8.12012C7.8549 22 7.60055 21.8946 7.41301 21.7071C7.22547 21.5196 7.12012 21.2652 7.12012 21V16C7.12012 14.9391 7.54154 13.9214 8.29169 13.1716C9.04183 12.4214 10.0593 12 11.1201 12Z" fill="#6B758F"></path>
                    <path d="M12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.6193 6 9.5 7.11929 9.5 8.5C9.5 9.88071 10.6193 11 12 11Z" fill="#6B758F"></path>
                  </svg>
                </span>
              </div>
              <div class="section-body">
                <div class="section-body-heading">
                  <p class="section-body-title" data-i18n="ax-grow-features-item-label-01">01 · 핵심 팀</p>
                  <span class="feature-card-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>
                </div>
                <p class="section-body-subtitle" data-i18n="ax-grow-features-item-title-01">내부에 실행을 이어갈 <br> 핵심 팀이 있습니다</p>
                <div class="feature-card-desc-row">
                  <div class="section-body-description">
                    <p data-i18n="ax-grow-features-item-desc-01">IT, 데이터, 디지털 전환 또는 현업 혁신 담당자가 AI 실행 역량을 직접 갖추려 합니다.</p>
                  </div>
                </div>
              </div>
            </article>

            <article class="feature-card">
              <div class="feature-card-icon-row">
                <span class="feature-card-icon" aria-hidden="true">
                  <!-- 실무 성과 — images/icons/library/022.메달.svg -->
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11H16L21.99 1H15.99L10 11Z" fill="#F57C75"></path>
                    <path d="M13.99 11H7.98999L2 1H8L13.99 11Z" fill="#F57C75"></path>
                    <path d="M12 23C15.866 23 19 19.866 19 16C19 12.134 15.866 9 12 9C8.13401 9 5 12.134 5 16C5 19.866 8.13401 23 12 23Z" fill="#E7ECEF"></path>
                  </svg>
                </span>
              </div>
              <div class="section-body">
                <div class="section-body-heading">
                  <p class="section-body-title" data-i18n="ax-grow-features-item-label-02">02 · 실무 성과</p>
                  <span class="feature-card-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>
                </div>
                <p class="section-body-subtitle" data-i18n="ax-grow-features-item-title-02">교육과 실제 성과를 <br> 함께 만들고 싶습니다</p>
                <div class="feature-card-desc-row">
                  <div class="section-body-description">
                    <p data-i18n="ax-grow-features-item-desc-02">수료로 끝나는 교육보다, 프로그램 기간 안에 <br data-break="desktop">실무 결과물까지 확보하고 싶습니다.</p>
                  </div>
                </div>
              </div>
            </article>

            <article class="feature-card">
              <div class="feature-card-icon-row">
                <span class="feature-card-icon" aria-hidden="true">
                  <!-- 조직 확산 — images/icons/library/074.통신.svg -->
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9997 7.9405C14.817 7.93178 17.5598 8.84488 19.8097 10.5405C19.9792 10.6675 20.1901 10.7267 20.401 10.7063C20.6119 10.686 20.8076 10.5876 20.9497 10.4305L22.4697 8.6305C22.5423 8.54685 22.5972 8.44937 22.631 8.34393C22.6649 8.23849 22.6771 8.12728 22.6668 8.01701C22.6565 7.90674 22.624 7.79969 22.5712 7.70233C22.5184 7.60496 22.4465 7.5193 22.3597 7.45051C19.391 5.16438 15.7466 3.92967 11.9997 3.9405C8.23591 3.93166 4.57649 5.17727 1.5997 7.48051C1.51291 7.5493 1.44095 7.63496 1.38817 7.73232C1.33539 7.82969 1.30288 7.93674 1.2926 8.04701C1.28232 8.15728 1.29449 8.26849 1.32837 8.37393C1.36224 8.47937 1.41712 8.57685 1.4897 8.6605L3.0097 10.4505C3.14921 10.6118 3.34544 10.7132 3.55769 10.7336C3.76994 10.7541 3.98193 10.6921 4.1497 10.5605C6.41111 8.85538 9.16749 7.93541 11.9997 7.9405Z" fill="#DBECFF"></path>
                    <path d="M5.15951 12.9699L6.67952 14.7699C6.80986 14.9229 6.99187 15.0227 7.19098 15.0504C7.39008 15.0781 7.59241 15.0316 7.75952 14.9199C9.00265 14.0515 10.4831 13.5871 11.9995 13.5899C13.5085 13.585 14.9823 14.046 16.2195 14.9099C16.3862 15.0198 16.5877 15.0642 16.7851 15.0347C16.9826 15.0052 17.1622 14.9037 17.2895 14.7499L18.8095 12.9499C18.8846 12.8616 18.9403 12.7585 18.9731 12.6473C19.006 12.5361 19.0151 12.4193 19.0001 12.3044C18.985 12.1895 18.946 12.079 18.8856 11.98C18.8253 11.8811 18.7448 11.7959 18.6495 11.7299C16.7139 10.3333 14.3864 9.5843 11.9995 9.58989C9.60009 9.58308 7.26069 10.3395 5.31952 11.7499C5.22421 11.8159 5.14378 11.9011 5.0834 12C5.02303 12.099 4.98403 12.2095 4.96896 12.3244C4.95389 12.4393 4.96306 12.5562 4.99588 12.6673C5.0287 12.7785 5.08444 12.8816 5.15951 12.9699Z" fill="#B8D3FB"></path>
                    <path d="M8.91971 17.3896L11.3697 20.2696C11.4476 20.3588 11.5437 20.4302 11.6515 20.4792C11.7593 20.5281 11.8763 20.5535 11.9947 20.5535C12.1131 20.5535 12.2301 20.5281 12.3379 20.4792C12.4457 20.4302 12.5418 20.3588 12.6197 20.2696L15.0597 17.3796C15.1384 17.2897 15.1965 17.1836 15.2299 17.0689C15.2633 16.9542 15.2713 16.8335 15.2532 16.7154C15.2351 16.5973 15.1914 16.4845 15.1251 16.3851C15.0589 16.2856 14.9717 16.2018 14.8697 16.1396C14.002 15.6217 13.0102 15.3487 11.9997 15.3496C10.9818 15.3506 9.9832 15.627 9.10971 16.1496C9.0077 16.2119 8.92053 16.2956 8.85429 16.3951C8.78806 16.4946 8.74436 16.6073 8.72626 16.7254C8.70816 16.8435 8.71609 16.9642 8.74951 17.0789C8.78293 17.1936 8.84101 17.2997 8.91971 17.3896Z" fill="#5096FF"></path>
                    <path d="M20.6667 16H17.3333C16.8731 16 16.5 16.3731 16.5 16.8333V20.1667C16.5 20.6269 16.8731 21 17.3333 21H20.6667C21.1269 21 21.5 20.6269 21.5 20.1667V16.8333C21.5 16.3731 21.1269 16 20.6667 16Z" fill="var(--color-brand)"></path>
                  </svg>
                </span>
              </div>
              <div class="section-body">
                <div class="section-body-heading">
                  <p class="section-body-title" data-i18n="ax-grow-features-item-label-03">03 · 조직 확산</p>
                  <span class="feature-card-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>
                </div>
                <p class="section-body-subtitle" data-i18n="ax-grow-features-item-title-03">한 팀의 성공을 <br> 조직 전체로 넓히려 합니다</p>
                <div class="feature-card-desc-row">
                  <div class="section-body-description">
                    <p data-i18n="ax-grow-features-item-desc-03">첫 프로젝트를 기준으로 다음 대상 업무와 <br data-break="desktop">참여 조직을 체계적으로 확장하려 합니다.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- 04 16-Day Process — 좌측 sticky 요약 + 우측 단계 목록. ax-build 04와 같은 공용 골격. -->
    <section class="process-days fade-up">
      <div class="section-wrap row is-sticky">
        <div class="section-aside">
          <div class="section-title text-left">
            <p class="tag" data-i18n="ax-grow-process-days-eyebrow">04 · 16-Day Process</p>
            <h2 data-i18n="ax-grow-process-days-title">16일 동안, 지식이 실행 역량이 됩니다</h2>
            <p class="desc" data-i18n="ax-grow-process-days-desc">조직과 업무를 이해한 뒤 교육하고, <br data-break="desktop">실제 과제를 함께 완성해 다음 확산 계획까지 연결합니다.</p>
          </div>

          <a class="btn btn-primary" href="#">
            <span data-i18n="ax-grow-process-days-cta">16일 프로그램 상담받기</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>

          <!-- AI Fluent 진단 유도 — 공용 summary-banner.dark 한 줄 배너로 흐름을 끊지 않는다. -->
          <p class="summary-banner dark fluent-note" data-i18n="ax-grow-process-days-banner">교육 설계 전, 팀의 <strong class="brand">준비도</strong>를 확인하세요<br>&lt;a class="link-underline" href="skills.html"&gt;AI Fluent 보기&lt;/a&gt;</p>
        </div>

        <ol class="process-steps">
          <li>
            <div class="step-head">
              <span class="step-term">Day 1~3</span>
              <span class="step-no" aria-hidden="true">01</span>
            </div>
            <span class="step-icon" aria-hidden="true">
              <!-- 진단과 교육 설계 — images/icons/library/025.검색.svg -->
              <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 17.21C14.2059 17.21 17.2101 14.2059 17.2101 10.5C17.2101 6.79422 14.2059 3.79004 10.5 3.79004C6.7942 3.79004 3.79004 6.79422 3.79004 10.5C3.79004 14.2059 6.7942 17.21 10.5 17.21Z" fill="color-mix(in srgb, var(--color-brand) 26%, var(--color-axpresso-bg-2))"></path>
                <path d="M10.5 4.5C12.0913 4.5 13.6174 5.13214 14.7426 6.25735C15.8678 7.38257 16.5 8.9087 16.5 10.5C16.5 12.0913 15.8678 13.6174 14.7426 14.7426C13.6174 15.8679 12.0913 16.5 10.5 16.5C8.9087 16.5 7.38257 15.8679 6.25735 14.7426C5.13214 13.6174 4.5 12.0913 4.5 10.5C4.5 8.9087 5.13214 7.38257 6.25735 6.25735C7.38257 5.13214 8.9087 4.5 10.5 4.5ZM10.5 2C8.24647 2.00265 6.08599 2.89904 4.49251 4.49252C2.89902 6.08601 2.00265 8.24647 2 10.5C2 11.6162 2.21985 12.7215 2.64702 13.7528C3.07418 14.7841 3.7003 15.7211 4.48959 16.5104C5.27889 17.2997 6.21592 17.9258 7.24719 18.353C8.27846 18.7801 9.38376 19 10.5 19C11.6166 19.0013 12.7225 18.7824 13.7544 18.3557C14.7862 17.929 15.7238 17.3029 16.5133 16.5133C17.3029 15.7238 17.929 14.7862 18.3557 13.7544C18.7824 12.7225 19.0013 11.6166 19 10.5C19 8.24566 18.1045 6.08365 16.5104 4.48959C14.9163 2.89553 12.7543 2 10.5 2Z" fill="var(--color-axpresso-ink-light)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4852 14.7068L21.8852 20.1168L20.1158 21.8829L14.7158 16.4729L16.4852 14.7068Z" fill="var(--color-brand)"></path>
              </svg>
            </span>
            <div class="step-body">
              <h3 data-i18n="ax-grow-process-days-step-title-01">진단과 교육 설계</h3>
              <p class="step-desc" data-i18n="ax-grow-process-days-step-desc-01">참여 팀의 역량과 업무를 진단하고, 학습 목표와 공동 구축 과제를 정합니다.</p>
            </div>
          </li>

          <li>
            <div class="step-head">
              <span class="step-term">Day 4~5</span>
              <span class="step-no" aria-hidden="true">02</span>
            </div>
            <span class="step-icon" aria-hidden="true">
              <!-- 집중 학습 — 캘린더 뼈대 재사용 -->
              <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 4H4.5C3.39543 4 2.5 4.89543 2.5 6V19C2.5 20.1046 3.39543 21 4.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V6C21.5 4.89543 20.6046 4 19.5 4Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                <path d="M8.48 3H7.5C7.22386 3 7 3.22386 7 3.5V5.5C7 5.77614 7.22386 6 7.5 6H8.48C8.75614 6 8.98 5.77614 8.98 5.5V3.5C8.98 3.22386 8.75614 3 8.48 3Z" fill="var(--color-brand)"></path>
                <path d="M16.5 3H15.5C15.2239 3 15 3.22386 15 3.5V5.5C15 5.77614 15.2239 6 15.5 6H16.5C16.7761 6 17 5.77614 17 5.5V3.5C17 3.22386 16.7761 3 16.5 3Z" fill="var(--color-brand)"></path>
                <path d="M2.5 9H21.5V10.5H2.5V9Z" fill="var(--color-brand)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2 17.6L8.4 14.8L9.6 13.6L11.2 15.2L14.9 11.5L16.1 12.7L11.2 17.6Z" fill="var(--color-brand-dark)"></path>
              </svg>
            </span>
            <div class="step-body">
              <h3 data-i18n="ax-grow-process-days-step-title-02">현업 맞춤 교육</h3>
              <p class="step-desc" data-i18n="ax-grow-process-days-step-desc-02">실제 과제 해결에 필요한 AI 활용 방식과 Agent 설계 원리를 집중 학습합니다.</p>
            </div>
          </li>

          <li>
            <div class="step-head">
              <span class="step-term">Day 6~15</span>
              <span class="step-no" aria-hidden="true">03</span>
            </div>
            <span class="step-icon" aria-hidden="true">
              <!-- Agent 공동 구축 — ic_axBuild.svg 기반 -->
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
              <h3 data-i18n="ax-grow-process-days-step-title-03">실제 업무 공동 구축</h3>
              <p class="step-desc" data-i18n="ax-grow-process-days-step-desc-03">전문가와 사내 팀이 함께 AI Agent를 설계하고 구현하며 실행 경험을 쌓습니다.</p>
            </div>
          </li>

          <li>
            <div class="step-head">
              <span class="step-term">Day 16</span>
              <span class="step-no" aria-hidden="true">04</span>
            </div>
            <span class="step-icon" aria-hidden="true">
              <!-- 성과 공유·확산 — ic_lineChart.svg 기반 -->
              <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8824 3H5.11765C3.9481 3 3 3.89543 3 5V19C3 20.1046 3.9481 21 5.11765 21H18.8824C20.0519 21 21 20.1046 21 19V5C21 3.89543 20.0519 3 18.8824 3Z" fill="color-mix(in srgb, var(--color-brand) 22%, var(--color-surface))"></path>
                <path d="M18.5 13H16.5V9.5H13V7.5H18.5V13Z" fill="var(--color-brand-dark)"></path>
                <path d="M16.3 8.21973L11 13.5097L8 10.5097L3 15.5V18.49L8 13.4997L11 16.4997L17.71 9.79973L16.3 8.21973Z" fill="var(--color-brand)"></path>
              </svg>
            </span>
            <div class="step-body">
              <h3 data-i18n="ax-grow-process-days-step-title-04">성과 공유와 확산 설계</h3>
              <p class="step-desc" data-i18n="ax-grow-process-days-step-desc-04">완성된 결과와 학습을 정리하고, 다음 업무와 조직으로 넓힐 로드맵을 확정합니다.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- 05 What Remains -->
    <section class="deliverables fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="ax-grow-deliverables-eyebrow">05 · What Remains</p>
          <h2 data-i18n="ax-grow-deliverables-title">프로그램이 끝나면 네 가지가 조직에 남습니다</h2>
        </div>
        <div class="section-content">
          <ul class="deliverable-list">
            <li>
              <span class="deliverable-icon" aria-hidden="true">
                <!-- 조직 역량 진단 -->
                <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" fill="currentColor" fill-opacity="0.14"></path>
                  <path d="M10.49 8H6.5C6.22386 8 6 8.22386 6 8.5V9.5C6 9.77614 6.22386 10 6.5 10H10.49C10.7661 10 10.99 9.77614 10.99 9.5V8.5C10.99 8.22386 10.7661 8 10.49 8Z" fill="currentColor" fill-opacity="0.45"></path>
                  <path d="M10.5 14H6.51C6.23 14 6.01 14.22 6.01 14.5V15.53C6.01 15.81 6.23 16.03 6.51 16.03H10.5C10.78 16.03 11 15.81 11 15.53V14.5C11 14.22 10.78 14 10.5 14Z" fill="currentColor" fill-opacity="0.45"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 8.59L17.29 6.29L18.71 7.71L15 11.41L12.29 8.71L13.71 7.29L15 8.59Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 14.59L17.29 12.29L18.71 13.71L15 17.41L12.29 14.71L13.71 13.29L15 14.59Z" fill="currentColor"></path>
                </svg>
              </span>
              <h3 data-i18n="ax-grow-deliverables-item-title-01">조직 역량 진단</h3>
              <p class="deliverable-desc" data-i18n="ax-grow-deliverables-item-desc-01">현재 팀이 잘하는 것과 보완할 역량, 우선 적용할 업무가 명확해집니다.</p>
            </li>
            <li>
              <span class="deliverable-icon" aria-hidden="true">
                <!-- 직무 맞춤 교육 자료 -->
                <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.88 3H5.12C3.95 3 3 3.9 3 5V19C3 20.1 3.95 21 5.12 21H18.88C20.05 21 21 20.1 21 19V5C21 3.9 20.05 3 18.88 3Z" fill="currentColor" fill-opacity="0.14"></path>
                  <path d="M8 8H16V9.5H8V8Z" fill="currentColor" fill-opacity="0.45"></path>
                  <path d="M8 12H16V13.5H8V12Z" fill="currentColor" fill-opacity="0.45"></path>
                  <path d="M8 16H13V17.5H8V16Z" fill="currentColor" fill-opacity="0.45"></path>
                </svg>
              </span>
              <h3 data-i18n="ax-grow-deliverables-item-title-02">직무 맞춤 교육 자료</h3>
              <p class="deliverable-desc" data-i18n="ax-grow-deliverables-item-desc-02">우리 조직의 업무와 사례를 반영한 학습 내용과 활용 기준이 남습니다.</p>
            </li>
            <li>
              <span class="deliverable-icon" aria-hidden="true">
                <!-- 함께 구축한 AI Agent -->
                <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 9H7C5.89543 9 5 9.89543 5 11V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V11C19 9.89543 18.1046 9 17 9Z" fill="currentColor" fill-opacity="0.16"></path>
                  <path d="M12 2C11.4477 2 11 2.44772 11 3V6H13V3C13 2.44772 12.5523 2 12 2Z" fill="currentColor"></path>
                  <path d="M15 6H9C7.89543 6 7 6.89543 7 8V9H17V8C17 6.89543 16.1046 6 15 6Z" fill="currentColor"></path>
                  <path d="M10 13C10.5523 13 11 13.4477 11 14V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V14C9 13.4477 9.44772 13 10 13Z" fill="currentColor"></path>
                  <path d="M14 13C14.5523 13 15 13.4477 15 14V15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15V14C13 13.4477 13.4477 13 14 13Z" fill="currentColor"></path>
                  <path d="M9.5 18H14.5V19.5H9.5V18Z" fill="currentColor"></path>
                </svg>
              </span>
              <h3 data-i18n="ax-grow-deliverables-item-title-03">함께 구축한 AI Agent</h3>
              <p class="deliverable-desc" data-i18n="ax-grow-deliverables-item-desc-03">교육용 예제가 아니라, 참여 팀이 구조와 작동 방식을 이해하는 실제 결과물입니다.</p>
            </li>
            <li>
              <span class="deliverable-icon" aria-hidden="true">
                <!-- 사내 확산 로드맵 -->
                <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 16V7H13.25V16H10.75Z" fill="currentColor" fill-opacity="0.35"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 12.2598V16H3.75L3.75 11.5098C3.75 11.0458 3.9342 10.6006 4.26254 10.2723C4.59088 9.94397 5.03608 9.75977 5.5 9.75977H18.5C18.9641 9.75977 19.4092 9.94408 19.7374 10.2723C20.0655 10.6004 20.25 11.0455 20.25 11.5098V16H17.75V12.2598H6.25Z" fill="currentColor" fill-opacity="0.25"></path>
                  <path d="M6.66667 16H3.33333C2.8731 16 2.5 16.3731 2.5 16.8333V20.1667C2.5 20.6269 2.8731 21 3.33333 21H6.66667C7.1269 21 7.5 20.6269 7.5 20.1667V16.8333C7.5 16.3731 7.1269 16 6.66667 16Z" fill="currentColor"></path>
                  <path d="M13.6667 16H10.3333C9.8731 16 9.5 16.3731 9.5 16.8333V20.1667C9.5 20.6269 9.8731 21 10.3333 21H13.6667C14.1269 21 14.5 20.6269 14.5 20.1667V16.8333C14.5 16.3731 14.1269 16 13.6667 16Z" fill="currentColor"></path>
                  <path d="M20.6667 16H17.3333C16.8731 16 16.5 16.3731 16.5 16.8333V20.1667C16.5 20.6269 16.8731 21 17.3333 21H20.6667C21.1269 21 21.5 20.6269 21.5 20.1667V16.8333C21.5 16.3731 21.1269 16 20.6667 16Z" fill="currentColor"></path>
                </svg>
              </span>
              <h3 data-i18n="ax-grow-deliverables-item-title-04">사내 확산 로드맵</h3>
              <p class="deliverable-desc" data-i18n="ax-grow-deliverables-item-desc-04">다음 대상 업무, 참여 조직, 담당 역할과 실행 순서를 구체적인 계획으로 정리합니다.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 06 Internal Capability — 한 문장 강조 + 근거 3개. 공용 statement + content-panel. -->
    <section class="statement fade-up">
      <div class="section-wrap col">
        <div class="statement-inner">
          <p class="statement-eyebrow" data-i18n="ax-grow-statement-eyebrow">06 · Internal Capability</p>
          <h2 class="statement-title" data-i18n="ax-grow-statement-title">첫 Agent보다 중요한 것은,<br data-break="desktop"> 두 번째를 <strong>우리 팀이 시작하는 힘</strong>입니다</h2>
          <p class="statement-desc" data-i18n="ax-grow-statement-desc">프로젝트 하나를 납품하는 것이 아니라, 조직이 AI 과제를 반복해서 실행할 수 있게 만드는 것이 목표입니다.</p>
        </div>
        <ul class="capability-grid">
          <li class="content-panel">
            <div class="content-panel__intro">
              <p class="text-label" data-i18n="ax-grow-statement-item-label-01">과제를 고르는 기준</p>
              <p class="capability-desc" data-i18n="ax-grow-statement-item-desc-01">어떤 업무가 AI 적용에 적합한지 팀이 스스로 판단합니다.</p>
            </div>
          </li>
          <li class="content-panel">
            <div class="content-panel__intro">
              <p class="text-label" data-i18n="ax-grow-statement-item-label-02">함께 만드는 경험</p>
              <p class="capability-desc" data-i18n="ax-grow-statement-item-desc-02">Agent를 설계하고 검증하는 전 과정을 내부 팀이 직접 경험합니다.</p>
            </div>
          </li>
          <li class="content-panel">
            <div class="content-panel__intro">
              <p class="text-label" data-i18n="ax-grow-statement-item-label-03">확산하는 실행 체계</p>
              <p class="capability-desc" data-i18n="ax-grow-statement-item-desc-03">다른 팀으로 넓힐 순서와 담당 역할을 조직 안에서 이어갑니다.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- 07 Build vs Grow — 두 제품 중 우리 조직에 맞는 쪽을 고르게 한다.
         why-codepresso.html 06 start-grid와 같은 역할 · 같은 마크업(content-panel 기반). -->
    <section class="positioning fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="ax-grow-positioning-eyebrow">07 · Build vs Grow</p>
          <h2 data-i18n="ax-grow-positioning-title">우리 조직의 목표에 맞게 시작하세요</h2>
        </div>
        <div class="section-content">
          <ul class="start-grid">
            <li>
              <div class="content-panel start-card">
                <span class="start-icon" aria-hidden="true">
                  <!-- 톱니바퀴 — flat_icon_svg/027.설정,관리.svg 기반, 색만 브랜드 톤으로 -->
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
                  <p class="text-label" data-i18n="ax-grow-positioning-item-label-01">빠른 구축이 우선이라면</p>
                  <h3>AX Build</h3>
                  <p class="start-desc" data-i18n="ax-grow-positioning-item-desc-01">AXpresso가 20일 안에 업무를 진단하고, 운영 가능한 AI Agent를 구축합니다.</p>
                </div>
                <a class="btn btn-outline-inverse" href="/ax-build">
                  <span data-i18n="ax-grow-positioning-item-cta-01">AX Build 보기</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
              </div>
            </li>
            <li>
              <div class="content-panel start-card is-here">
                <span class="start-icon" aria-hidden="true">
                  <!-- 깃발 — flat_icon_svg/034.깃발,목표.svg 기반, 색만 브랜드 톤으로 -->
                  <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16H5V4H22L18 10L22 16Z" fill="color-mix(in srgb, var(--color-brand) 45%, var(--color-surface))"></path>
                    <path d="M3.75 3H4.25C4.51522 3 4.76962 3.10534 4.95715 3.29288C5.14469 3.48041 5.25 3.73478 5.25 4V22H2.75V4C2.75 3.73478 2.85537 3.48041 3.04291 3.29288C3.23044 3.10534 3.48478 3 3.75 3Z" fill="var(--color-surface)"></path>
                  </svg>
                </span>
                <div class="content-panel__intro">
                  <p class="text-label" data-i18n="ax-grow-positioning-item-label-02">조직의 내재화가 목표라면</p>
                  <h3>AX Grow</h3>
                  <p class="start-desc" data-i18n="ax-grow-positioning-item-desc-02">현장 맞춤 교육과 공동 구축으로 팀의 실행 역량을 만들고, 사내 확산까지 설계합니다.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 08 FAQ -->
    <section class="faq fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="ax-grow-faq-eyebrow">08 · FAQ</p>
          <h2 data-i18n="ax-grow-faq-title">도입 전에 많이 묻는 질문</h2>
        </div>
        <div class="section-content">
          <div class="faq-list">
            <details>
              <summary class="faq-list__question">
                <span data-i18n="ax-grow-faq-question-01">일반적인 AI 교육과 무엇이 다른가요?</span>
                <span class="faq-list__icon" aria-hidden="true">
                  <svg class="icon-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
              </summary>
              <p class="faq-list__answer" data-i18n="ax-grow-faq-answer-01">우리 회사의 실제 업무를 학습 과제로 사용하고, 교육 직후 전문가와 사내 팀이 실제 AI Agent를 함께 구축합니다. 교육과 실무 적용이 분리되지 않습니다.</p>
            </details>
            <details>
              <summary class="faq-list__question">
                <span data-i18n="ax-grow-faq-question-02">누가 참여하는 것이 좋나요?</span>
                <span class="faq-list__icon" aria-hidden="true">
                  <svg class="icon-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
              </summary>
              <p class="faq-list__answer" data-i18n="ax-grow-faq-answer-02">업무를 잘 아는 현업 담당자와, 이후 실행을 이어갈 IT·데이터·디지털 전환 담당자가 함께 참여할 때 효과가 가장 큽니다.</p>
            </details>
            <details>
              <summary class="faq-list__question">
                <span data-i18n="ax-grow-faq-question-03">16일이 끝나면 우리 팀은 무엇을 할 수 있나요?</span>
                <span class="faq-list__icon" aria-hidden="true">
                  <svg class="icon-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
              </summary>
              <p class="faq-list__answer" data-i18n="ax-grow-faq-answer-03">적합한 업무를 고르고, Agent의 구조와 검증 기준을 이해하며, 다음 적용 과제를 확산 로드맵에 따라 직접 시작할 수 있습니다.</p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-final fade-up">
      <div class="section-wrap col cta-final-inner">
        <h2 class="cta-final-title" data-i18n="ax-grow-cta-final-title">이번 프로젝트로 끝내지 않고,<br data-break="desktop"> 다음 프로젝트를 우리 팀이 시작합니다</h2>
        <p class="cta-final-desc" data-i18n="ax-grow-cta-final-desc">교육 대상과 공동 구축 과제를 함께 진단해, 조직에 맞는 16일 프로그램을 설계합니다.</p>
        <div class="cta-final-actions">
          <a href="#" class="btn btn-primary btn-lg">
            <span data-i18n="ax-grow-hero-cta">우리 팀 내재화 상담</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer도 partials/footer.html 하나로 관리한다. -->
  

  <!-- 공용 스크립트 — GNB(header-scroll·nav-menu), 섹션 진입 모션(fade-up). -->
  <SiteFooter />
  <ClientInteractions :scripts='["js/fade-up.js","js/header-scroll.js","js/nav-menu.js"]' />
</template>

<script setup>
useSeoMeta({ title: "AX Grow: AI 자동화 내재화 교육 | 코드프레소", description: "현장 맞춤 교육, 실제 업무 공동 구축, 사내 확산 설계까지 세 단계로 조직 스스로 AI 자동화를 실행하는 역량을 남깁니다." })
import '~/css/pages/ax-grow.css'
import '~/css/mobile.css'
</script>
