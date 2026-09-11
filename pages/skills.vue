<template>
  <SiteHeader />
<!-- GNB는 partials/header.html 하나로 관리한다. js/include-partials.js가 fetch해 삽입한다.
       (fetch를 쓰므로 file:// 직접 열기로는 안 보인다 — 로컬 정적 서버로 확인한다) -->
  
  <main class="skills">
    <!-- Hero — 한 줄 정의 + 진단 CTA + 교육의 세 가지 질문. 첫 화면이라 fade-up을 붙이지 않는다.
         배경은 sunken 판이고 아래로 갈수록 흰색이 되어, 흰 면인 01 process가 위로 떠오른다. -->
    <section class="sub-hero">
      <div class="hero-wrap">
        <div class="sub-hero-copy">
          <p class="tag" data-i18n="skills-sub-hero-eyebrow">People Axis · 일하는 사람의 전환</p>
          <h1 class="hero-title" data-i18n="skills-sub-hero-title">역량 진단·교육</h1>
          <p class="hero-desc" data-i18n="skills-sub-hero-desc">좋은 교육은 강의 횟수가 아니라, <strong>사람의 변화</strong>로 설명되어야 합니다. <br data-break="desktop">역량을 진단하고, 부족한 영역만 학습하고, 재진단으로 성장을 증명합니다.</p>
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="#" id="hero-diagnosis-cta">
              <span data-i18n="skills-sub-hero-cta">3분 AI 활용 진단 시작</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </div>
        </div>

        <!-- 교육이 답해야 하는 세 가지 질문. hero 보조 정보의 공통 골격인 hero-facts
             (유리 띠 1장 + 세로 구분선 + metric-card 슬롯)를 cases hero와 같은 마크업으로
             그대로 쓴다 — 숫자 대신 질문이 __value 자리에 들어갈 뿐이다.
             hero의 주인공은 제목·CTA이므로, 세 질문은 카드 3장이 아니라 유리 띠 한 장 안의
             세 칸으로 눕혀 보조 역할로 내린다. -->
        <ul class="hero-facts surface-glass">
          <li class="metric-card">
            <span class="hero-fact-icon icon-lg" aria-hidden="true">
              <!-- 현재 수준 · 진단 — images/icons/library/025.검색.svg의 실제 path.
                   하드코딩 색만 브랜드 토큰으로 바꿨다(옅은 판은 35% 섞음). -->
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 17.21C14.2059 17.21 17.2101 14.2059 17.2101 10.5C17.2101 6.79422 14.2059 3.79004 10.5 3.79004C6.7942 3.79004 3.79004 6.79422 3.79004 10.5C3.79004 14.2059 6.7942 17.21 10.5 17.21Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                <path d="M10.5 4.5C12.0913 4.5 13.6174 5.13214 14.7426 6.25735C15.8678 7.38257 16.5 8.9087 16.5 10.5C16.5 12.0913 15.8678 13.6174 14.7426 14.7426C13.6174 15.8679 12.0913 16.5 10.5 16.5C8.9087 16.5 7.38257 15.8679 6.25735 14.7426C5.13214 13.6174 4.5 12.0913 4.5 10.5C4.5 8.9087 5.13214 7.38257 6.25735 6.25735C7.38257 5.13214 8.9087 4.5 10.5 4.5ZM10.5 2C8.24647 2.00265 6.08599 2.89904 4.49251 4.49252C2.89902 6.08601 2.00265 8.24647 2 10.5C2 11.6162 2.21985 12.7215 2.64702 13.7528C3.07418 14.7841 3.7003 15.7211 4.48959 16.5104C5.27889 17.2997 6.21592 17.9258 7.24719 18.353C8.27846 18.7801 9.38376 19 10.5 19C11.6166 19.0013 12.7225 18.7824 13.7544 18.3557C14.7862 17.929 15.7238 17.3029 16.5133 16.5133C17.3029 15.7238 17.929 14.7862 18.3557 13.7544C18.7824 12.7225 19.0013 11.6166 19 10.5C19 8.24566 18.1045 6.08365 16.5104 4.48959C14.9163 2.89553 12.7543 2 10.5 2Z" fill="var(--color-brand)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4852 14.7068L21.8852 20.1168L20.1158 21.8829L14.7158 16.4729L16.4852 14.7068Z" fill="var(--color-brand)"></path>
              </svg>
            </span>
            <div>
              <div class="metric-card__value" data-i18n="skills-sub-hero-fact-value-01">현재 수준은 어디인가?</div>
              <p class="metric-card__label text-label" data-i18n="skills-sub-hero-fact-label-01">감이 아니라 실무 데이터로 진단합니다</p>
            </div>
          </li>
          <li class="metric-card">
            <span class="hero-fact-icon icon-lg" aria-hidden="true">
              <!-- 무엇을 배울지 · 학습 — images/icons/library/015.할일.svg의 실제 path.
                   하드코딩 색만 브랜드 토큰으로 바꿨다(옅은 판은 35% 섞음). -->
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                <path d="M10.49 8H6.5C6.22386 8 6 8.22386 6 8.5V9.5C6 9.77614 6.22386 10 6.5 10H10.49C10.7661 10 10.99 9.77614 10.99 9.5V8.5C10.99 8.22386 10.7661 8 10.49 8Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0001 8.58579L17.293 6.29289L18.7072 7.70711L15.0001 11.4142L12.293 8.70711L13.7072 7.29289L15.0001 8.58579Z" fill="var(--color-brand)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0001 14.5858L17.293 12.2929L18.7072 13.7071L15.0001 17.4142L12.293 14.7071L13.7072 13.2929L15.0001 14.5858Z" fill="var(--color-brand)"></path>
                <path d="M10.4998 14H6.50977C6.23362 14 6.00977 14.2239 6.00977 14.5V15.53C6.00977 15.8061 6.23362 16.03 6.50977 16.03H10.4998C10.7759 16.03 10.9998 15.8061 10.9998 15.53V14.5C10.9998 14.2239 10.7759 14 10.4998 14Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
              </svg>
            </span>
            <div>
              <div class="metric-card__value" data-i18n="skills-sub-hero-fact-value-02">무엇을 배워야 하는가?</div>
              <p class="metric-card__label text-label" data-i18n="skills-sub-hero-fact-label-02">부족한 역량에 맞춰 학습을 조합합니다</p>
            </div>
          </li>
          <li class="metric-card">
            <span class="hero-fact-icon icon-lg" aria-hidden="true">
              <!-- 무엇이 달라졌는가 · 증명 — images/icons/library/109.막대 그래프.svg의 실제 path.
                   하드코딩 색만 브랜드 토큰으로 바꿨다(옅은 판은 35% 섞음). -->
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 15H3C2.44772 15 2 15.4477 2 16V20C2 20.5523 2.44772 21 3 21H6C6.55228 21 7 20.5523 7 20V16C7 15.4477 6.55228 15 6 15Z" fill="var(--color-brand)"></path>
                <path d="M13 9H10C9.44772 9 9 9.44772 9 10V20C9 20.5523 9.44772 21 10 21H13C13.5523 21 14 20.5523 14 20V10C14 9.44772 13.5523 9 13 9Z" fill="var(--color-brand)"></path>
                <path d="M20 3H17C16.4477 3 16 3.44772 16 4V20C16 20.5523 16.4477 21 17 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z" fill="var(--color-brand)"></path>
              </svg>
            </span>
            <div>
              <div class="metric-card__value" data-i18n="skills-sub-hero-fact-value-03">교육 후 무엇이 달라졌는가?</div>
              <p class="metric-card__label text-label" data-i18n="skills-sub-hero-fact-label-03">재진단과 대시보드로 변화를 증명합니다</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- 01 The Growth Loop — Assess → Design → Learn → Prove 4단계 순환.
         index How it works와 같은 cycle 디자인 — 칸 좌상단에 브랜드 글리프를 올리고
         칸은 틴트(.blue)로 가라앉히고, 순환이 닫히는 마지막 칸만 .is-return으로 채운다.
         진입 시 4칸이 순서대로 올라오고, 칸 사이 화살표는 경계에 걸터앉는다. -->
    <section class="process fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="skills-process-eyebrow">01 · The Growth Loop</p>
          <h2 data-i18n="skills-process-title">진단부터 성과 증명까지 <br data-break="desktop">하나의 흐름으로</h2>
          <p class="desc" data-i18n="skills-process-desc">진단 없는 교육도, 교육 없는 평가도 만들지 않습니다.</p>
        </div>
        <div class="section-content">
          <ol class="cycle">
            <li class="blue">
              <span class="cycle-icon" aria-hidden="true">
                <!-- 진단 — images/icons/library/025.검색.svg의 실제 path.
                     하드코딩 색만 currentColor로 바꿨다(옅은 판은 fill-opacity로 눌렀다). -->
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 17.21C14.2059 17.21 17.2101 14.2059 17.2101 10.5C17.2101 6.79422 14.2059 3.79004 10.5 3.79004C6.7942 3.79004 3.79004 6.79422 3.79004 10.5C3.79004 14.2059 6.7942 17.21 10.5 17.21Z" fill="currentColor" fill-opacity="0.35"></path>
                  <path d="M10.5 4.5C12.0913 4.5 13.6174 5.13214 14.7426 6.25735C15.8678 7.38257 16.5 8.9087 16.5 10.5C16.5 12.0913 15.8678 13.6174 14.7426 14.7426C13.6174 15.8679 12.0913 16.5 10.5 16.5C8.9087 16.5 7.38257 15.8679 6.25735 14.7426C5.13214 13.6174 4.5 12.0913 4.5 10.5C4.5 8.9087 5.13214 7.38257 6.25735 6.25735C7.38257 5.13214 8.9087 4.5 10.5 4.5ZM10.5 2C8.24647 2.00265 6.08599 2.89904 4.49251 4.49252C2.89902 6.08601 2.00265 8.24647 2 10.5C2 11.6162 2.21985 12.7215 2.64702 13.7528C3.07418 14.7841 3.7003 15.7211 4.48959 16.5104C5.27889 17.2997 6.21592 17.9258 7.24719 18.353C8.27846 18.7801 9.38376 19 10.5 19C11.6166 19.0013 12.7225 18.7824 13.7544 18.3557C14.7862 17.929 15.7238 17.3029 16.5133 16.5133C17.3029 15.7238 17.929 14.7862 18.3557 13.7544C18.7824 12.7225 19.0013 11.6166 19 10.5C19 8.24566 18.1045 6.08365 16.5104 4.48959C14.9163 2.89553 12.7543 2 10.5 2Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4852 14.7068L21.8852 20.1168L20.1158 21.8829L14.7158 16.4729L16.4852 14.7068Z" fill="currentColor"></path>
                </svg>
              </span>
              <div class="cycle-head">
                <p class="cycle-en" data-i18n="skills-process-item-en-01">Assess</p>
              </div>
              <h3 data-i18n="skills-process-item-title-01">진단</h3>
              <p class="description" data-i18n="skills-process-item-desc-01">실무 과제로 현재 역량과 부족한 영역을 확인</p>
              <span class="cycle-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </li>
            <li class="blue">
              <span class="cycle-icon" aria-hidden="true">
                <!-- 설계 — images/icons/library/023.조직도,구조도.svg의 실제 path.
                     하드코딩 색만 currentColor로 바꿠다(얙은 판은 fill-opacity로 눌렀다). -->
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 16V7H13.25V16H10.75Z" fill="currentColor" fill-opacity="0.35"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 12.2598V16H3.75L3.75 11.5098C3.75 11.0458 3.9342 10.6006 4.26254 10.2723C4.59088 9.94397 5.03608 9.75977 5.5 9.75977H18.5C18.9641 9.75977 19.4092 9.94408 19.7374 10.2723C20.0655 10.6004 20.25 11.0455 20.25 11.5098V16H17.75V12.2598H6.25Z" fill="currentColor" fill-opacity="0.35"></path>
                  <path d="M6.66667 16H3.33333C2.8731 16 2.5 16.3731 2.5 16.8333V20.1667C2.5 20.6269 2.8731 21 3.33333 21H6.66667C7.1269 21 7.5 20.6269 7.5 20.1667V16.8333C7.5 16.3731 7.1269 16 6.66667 16Z" fill="currentColor"></path>
                  <path d="M13.6667 16H10.3333C9.8731 16 9.5 16.3731 9.5 16.8333V20.1667C9.5 20.6269 9.8731 21 10.3333 21H13.6667C14.1269 21 14.5 20.6269 14.5 20.1667V16.8333C14.5 16.3731 14.1269 16 13.6667 16Z" fill="currentColor"></path>
                  <path d="M13.6667 2H10.3333C9.8731 2 9.5 2.3731 9.5 2.83333V6.16667C9.5 6.6269 9.8731 7 10.3333 7H13.6667C14.1269 7 14.5 6.6269 14.5 6.16667V2.83333C14.5 2.3731 14.1269 2 13.6667 2Z" fill="currentColor"></path>
                  <path d="M20.6667 16H17.3333C16.8731 16 16.5 16.3731 16.5 16.8333V20.1667C16.5 20.6269 16.8731 21 17.3333 21H20.6667C21.1269 21 21.5 20.6269 21.5 20.1667V16.8333C21.5 16.3731 21.1269 16 20.6667 16Z" fill="currentColor"></path>
                </svg>
              </span>
              <div class="cycle-head">
                <p class="cycle-en" data-i18n="skills-process-item-en-02">Design</p>
              </div>
              <h3 data-i18n="skills-process-item-title-02">설계</h3>
              <p class="description" data-i18n="skills-process-item-desc-02">조직 목표와 역량 격차에 맞춘 학습 경로</p>
              <span class="cycle-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </li>
            <li class="blue">
              <span class="cycle-icon" aria-hidden="true">
                <!-- 학습 — images/icons/library/015.할일.svg의 실제 path.
                     하드코딩 색만 currentColor로 바꿠다(얙은 판은 fill-opacity로 눌렀다). -->
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" fill="currentColor" fill-opacity="0.35"></path>
                  <path d="M10.49 8H6.5C6.22386 8 6 8.22386 6 8.5V9.5C6 9.77614 6.22386 10 6.5 10H10.49C10.7661 10 10.99 9.77614 10.99 9.5V8.5C10.99 8.22386 10.7661 8 10.49 8Z" fill="currentColor" fill-opacity="0.35"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0001 8.58579L17.293 6.29289L18.7072 7.70711L15.0001 11.4142L12.293 8.70711L13.7072 7.29289L15.0001 8.58579Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0001 14.5858L17.293 12.2929L18.7072 13.7071L15.0001 17.4142L12.293 14.7071L13.7072 13.2929L15.0001 14.5858Z" fill="currentColor"></path>
                  <path d="M10.4998 14H6.50977C6.23362 14 6.00977 14.2239 6.00977 14.5V15.53C6.00977 15.8061 6.23362 16.03 6.50977 16.03H10.4998C10.7759 16.03 10.9998 15.8061 10.9998 15.53V14.5C10.9998 14.2239 10.7759 14 10.4998 14Z" fill="currentColor" fill-opacity="0.35"></path>
                </svg>
              </span>
              <div class="cycle-head">
                <p class="cycle-en" data-i18n="skills-process-item-en-03">Learn</p>
              </div>
              <h3 data-i18n="skills-process-item-title-03">학습</h3>
              <p class="description" data-i18n="skills-process-item-desc-03">이러닝 · 집합교육 · 적응형 학습 조합</p>
              <span class="cycle-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </li>
            <li class="is-return">
              <span class="cycle-icon" aria-hidden="true">
                <!-- 증명 — images/icons/library/109.막대 그래프.svg의 실제 path.
                     하드코딩 색만 currentColor로 바꿠다(얙은 판은 fill-opacity로 눌렀다). -->
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15H3C2.44772 15 2 15.4477 2 16V20C2 20.5523 2.44772 21 3 21H6C6.55228 21 7 20.5523 7 20V16C7 15.4477 6.55228 15 6 15Z" fill="currentColor"></path>
                  <path d="M13 9H10C9.44772 9 9 9.44772 9 10V20C9 20.5523 9.44772 21 10 21H13C13.5523 21 14 20.5523 14 20V10C14 9.44772 13.5523 9 13 9Z" fill="currentColor"></path>
                  <path d="M20 3H17C16.4477 3 16 3.44772 16 4V20C16 20.5523 16.4477 21 17 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z" fill="currentColor"></path>
                </svg>
              </span>
              <div class="cycle-head">
                <p class="cycle-en" data-i18n="skills-process-item-en-04">Prove</p>
              </div>
              <h3 data-i18n="skills-process-item-title-04">증명</h3>
              <p class="description" data-i18n="skills-process-item-desc-04">재진단과 대시보드로 전후 변화 확인</p>
            </li>
          </ol>
          <p class="cycle-note">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 12C4 7.58 7.58 4 12 4C14.5 4 16.73 5.15 18.2 6.95M20 12C20 16.42 16.42 20 12 20C9.5 20 7.27 18.85 5.8 17.05" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M18 3.5V7.5H14M6 20.5V16.5H10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <span data-i18n="skills-process-note">결과는 다음 성장 계획의 출발점이 됩니다</span>
          </p>
        </div>
      </div>
    </section>

    <!-- 02 Why It Matters — 교육이 실패하는 세 가지 이유.
         ax-build 02 Best Fit과 같은 역할("조건 3가지 나열")이므로 같은
         feature-card를 그대로 쓴다(전환 애니메이션 없이 항상 펼친 정적 카드). -->
    <section class="features fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="skills-features-eyebrow">02 · Why It Matters</p>
          <h2 data-i18n="skills-features-title">교육의 출발점과 <br data-break="desktop">성공 기준을 먼저 정합니다</h2>
        </div>
        <div class="section-content">
          <div class="feature-card-grid">
            <article class="feature-card">
              <div class="feature-card-icon-row">
                <span class="feature-card-icon" aria-hidden="true">
                  <!-- 수준 — images/icons/library/103.팀.svg의 실제 path.
                       하드코딩 색만 currentColor로 바꿠다(얙은 판은 fill-opacity로 눌렀다). -->
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9C7.06087 9 8.07827 9.42142 8.82841 10.1716C9.57856 10.9217 10 11.9391 10 13V18C10 18.2652 9.89464 18.5196 9.70711 18.7071C9.51957 18.8946 9.26522 19 9 19H3C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18V13C2 11.9391 2.42142 10.9217 3.17157 10.1716C3.92172 9.42142 4.93913 9 6 9Z" fill="currentColor" fill-opacity="0.35"></path>
                    <path d="M6 8C7.38071 8 8.5 6.88071 8.5 5.5C8.5 4.11929 7.38071 3 6 3C4.61929 3 3.5 4.11929 3.5 5.5C3.5 6.88071 4.61929 8 6 8Z" fill="currentColor" fill-opacity="0.35"></path>
                    <path d="M21 19H15C14.7348 19 14.4804 18.8946 14.2929 18.7071C14.1053 18.5196 14 18.2652 14 18V13C14 11.9391 14.4214 10.9217 15.1716 10.1716C15.9217 9.42142 16.9391 9 18 9C19.0609 9 20.0783 9.42142 20.8284 10.1716C21.5786 10.9217 22 11.9391 22 13V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19Z" fill="currentColor" fill-opacity="0.35"></path>
                    <path d="M18 8C19.3807 8 20.5 6.88071 20.5 5.5C20.5 4.11929 19.3807 3 18 3C16.6193 3 15.5 4.11929 15.5 5.5C15.5 6.88071 16.6193 8 18 8Z" fill="currentColor" fill-opacity="0.35"></path>
                    <path d="M11.1201 12H12.8701C13.931 12 14.9484 12.4214 15.6985 13.1716C16.4487 13.9217 16.8701 14.9391 16.8701 16V21C16.8701 21.2652 16.7648 21.5196 16.5772 21.7071C16.3897 21.8946 16.1353 22 15.8701 22H8.12012C7.8549 22 7.60055 21.8946 7.41301 21.7071C7.22547 21.5196 7.12012 21.2652 7.12012 21V16C7.12012 14.9391 7.54154 13.9217 8.29169 13.1716C9.04183 12.4214 10.0593 12 11.1201 12Z" fill="currentColor"></path>
                    <path d="M12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.6193 6 9.5 7.11929 9.5 8.5C9.5 9.88071 10.6193 11 12 11Z" fill="currentColor"></path>
                  </svg>
                </span>
              </div>
              <div class="section-body">
                <div class="section-body-heading">
                  <p class="section-body-title" data-i18n="skills-features-item-tag-01">01 · 수준</p>
                  <span class="feature-card-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>
                </div>
                <p class="section-body-subtitle" data-i18n="skills-features-item-subtitle-01">수준이 다른 구성원이 <br> 같은 교육을 듣습니다</p>
                <div class="feature-card-desc-row">
                  <div class="section-body-description">
                    <p data-i18n="skills-features-item-desc-01">쉬운 사람과 어려운 사람이 섞이면 학습 효율과 참여도가 모두 낮아집니다.</p>
                  </div>
                </div>
              </div>
            </article>

            <article class="feature-card">
              <div class="feature-card-icon-row">
                <span class="feature-card-icon" aria-hidden="true">
                  <!-- 순서 — images/icons/library/015.할일.svg의 실제 path.
                       하드코딩 색만 currentColor로 바꿠다(얙은 판은 fill-opacity로 눌렀다). -->
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" fill="currentColor" fill-opacity="0.35"></path>
                    <path d="M10.49 8H6.5C6.22386 8 6 8.22386 6 8.5V9.5C6 9.77614 6.22386 10 6.5 10H10.49C10.7661 10 10.99 9.77614 10.99 9.5V8.5C10.99 8.22386 10.7661 8 10.49 8Z" fill="currentColor" fill-opacity="0.35"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0001 8.58579L17.293 6.29289L18.7072 7.70711L15.0001 11.4142L12.293 8.70711L13.7072 7.29289L15.0001 8.58579Z" fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0001 14.5858L17.293 12.2929L18.7072 13.7071L15.0001 17.4142L12.293 14.7071L13.7072 13.2929L15.0001 14.5858Z" fill="currentColor"></path>
                    <path d="M10.4998 14H6.50977C6.23362 14 6.00977 14.2239 6.00977 14.5V15.53C6.00977 15.8061 6.23362 16.03 6.50977 16.03H10.4998C10.7759 16.03 10.9998 15.8061 10.9998 15.53V14.5C10.9998 14.2239 10.7759 14 10.4998 14Z" fill="currentColor" fill-opacity="0.35"></path>
                  </svg>
                </span>
              </div>
              <div class="section-body">
                <div class="section-body-heading">
                  <p class="section-body-title" data-i18n="skills-features-item-tag-02">02 · 순서</p>
                  <span class="feature-card-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>
                </div>
                <p class="section-body-subtitle" data-i18n="skills-features-item-subtitle-02">교육 방식이 <br> 목적보다 먼저 정해집니다</p>
                <div class="feature-card-desc-row">
                  <div class="section-body-description">
                    <p data-i18n="skills-features-item-desc-02">이러닝인지 집합교육인지보다, 어떤 역량을 얼마나 바꿀지가 먼저입니다.</p>
                  </div>
                </div>
              </div>
            </article>

            <article class="feature-card">
              <div class="feature-card-icon-row">
                <span class="feature-card-icon" aria-hidden="true">
                  <!-- 기준 — images/icons/library/020.좋아요.svg의 실제 path.
                       하드코딩 색만 currentColor로 바꿨다(옅은 판은 fill-opacity로 눌렀다). -->
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 8H8V21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8Z" fill="currentColor"></path>
                    <path d="M16.61 21H8V8H18.23C18.6805 8.00063 19.1252 8.10274 19.5308 8.29874C19.9365 8.49474 20.2928 8.77959 20.5734 9.13216C20.8539 9.48473 21.0514 9.89595 21.1512 10.3353C21.251 10.7746 21.2506 11.2308 21.15 11.67L19.54 18.67C19.3881 19.333 19.0154 19.9247 18.483 20.3481C17.9506 20.7714 17.2902 21.0013 16.61 21Z" fill="currentColor" fill-opacity="0.35"></path>
                    <path d="M14.11 1H14C13.681 0.999878 13.3666 1.07606 13.0831 1.22219C12.7995 1.36831 12.555 1.58014 12.37 1.84L8 8H13L15.74 4.16C15.953 3.86081 16.0795 3.50873 16.1057 3.14238C16.1318 2.77603 16.0566 2.40956 15.8882 2.08314C15.7199 1.75673 15.4649 1.48298 15.1512 1.29192C14.8375 1.10086 14.4773 0.999859 14.11 1Z" fill="currentColor" fill-opacity="0.35"></path>
                    <path d="M14 4H12V8H14V4Z" fill="currentColor" fill-opacity="0.35"></path>
                  </svg>
                </span>
              </div>
              <div class="section-body">
                <div class="section-body-heading">
                  <p class="section-body-title" data-i18n="skills-features-item-tag-03">03 · 기준</p>
                  <span class="feature-card-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </span>
                </div>
                <p class="section-body-subtitle" data-i18n="skills-features-item-subtitle-03">만족도만으로 <br> 교육 효과를 판단합니다</p>
                <div class="feature-card-desc-row">
                  <div class="section-body-description">
                    <p data-i18n="skills-features-item-desc-03">좋았다는 반응을 넘어, 실제 업무 역량이 얼마나 달라졌는지 확인해야 합니다.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 Assess — 진단 제품 2개. 공용 content-panel(__intro/__visual)을 그대로 쓰고
         배치(2열 그리드)와 특징 목록만 페이지 CSS가 정의한다. -->
    <section class="catalog fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="skills-catalog-eyebrow">03 · Assess</p>
          <h2 data-i18n="skills-catalog-title">현재 역량을 <br data-break="desktop">실무 기준으로 진단합니다</h2>
          <p class="desc" data-i18n="skills-catalog-desc">AI 활용 역량과 IT 직무 역량을 각각의 실제 업무 방식에 맞춰 측정합니다.</p>
        </div>
        <div class="section-content">
          <ul class="product-grid">
            <li>
              <div class="content-panel">
                <div class="content-panel__item">
                  <div class="content-panel__intro">
                    <div class="product-name">
                      <span class="icon-box" aria-hidden="true">
                        <img src="/images/icons/service/ic_aiFluent.svg" alt="">
                      </span>
                      <div>
                        <p class="text-label" data-i18n="skills-catalog-item-label-01">AI 활용 역량 진단</p>
                        <h3>AI Fluent</h3>
                      </div>
                    </div>
                    <p class="product-desc" data-i18n="skills-catalog-item-desc-01">AI를 아는지를 묻지 않고, AI와 협업해 결과물을 만드는 과정을 실무 과제로 평가합니다.</p>
                  </div>
                  <div class="content-panel__visual">
                    <img src="/images/products/aifluent/aifluent-sample.svg" alt="AI Fluent 전 직군 AI 활용 역량 진단 리포트 화면">
                    <ul class="product-points">
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span data-i18n="skills-catalog-item-point-01-01">실제 현업 시나리오와 데이터 기반의 실무 과제 평가</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span data-i18n="skills-catalog-item-point-01-02">프롬프트 이력부터 산출물까지 다면 평가</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span data-i18n="skills-catalog-item-point-01-03">직군별 문항(마케팅·HR·경영관리·CS·R&amp;D)과 4단계 역량 레벨</span>
                      </li>
                    </ul>
                    <a class="btn btn-ghost" href="/aifluent"><span data-i18n="skills-catalog-item-cta-01">AI Fluent 자세히</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="content-panel">
                <div class="content-panel__item">
                  <div class="content-panel__intro">
                    <div class="product-name">
                      <span class="icon-box" aria-hidden="true">
                        <img src="/images/icons/service/ic_skillCertify.svg" alt="">
                      </span>
                      <div>
                        <p class="text-label" data-i18n="skills-catalog-item-label-02">IT 직무 역량 평가·인증</p>
                        <h3>SkillCertify</h3>
                      </div>
                    </div>
                    <p class="product-desc" data-i18n="skills-catalog-item-desc-02">실제 직무 과제를 기반으로 IT 역량과 문제 해결 과정, 결과물의 품질을 함께 평가합니다.</p>
                  </div>
                  <div class="content-panel__visual">
                    <img src="/images/products/skillcertify/skillcertify-sample.svg" alt="SkillCertify 개발자 IT 실무 역량 평가 리포트 화면">
                    <ul class="product-points">
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span data-i18n="skills-catalog-item-point-02-01">50개 직무 영역 기반 평가</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span data-i18n="skills-catalog-item-point-02-02">채용, 진단, 인증에 활용</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span data-i18n="skills-catalog-item-point-02-03">객관적인 채점 결과와 관리 리포트</span>
                      </li>
                    </ul>
                    <a class="btn btn-ghost" href="/skillcertify"><span data-i18n="skills-catalog-item-cta-02">SkillCertify 자세히</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 04 Learn — 좌측 제목이 sticky로 고정된 채 우측 학습 제품 3개가 흐른다
         (.section-wrap.row.is-sticky는 index PART 1·2와 ax-build 04가 쓰는 공용 골격.
         좌측이 .section-aside여야 sticky가 걸린다). 900px 이하에서는 layout.css가
         sticky를 풀고 1단으로 접는다. -->
    <section class="catalog-learn fade-up">
      <div class="section-wrap row is-sticky">
        <div class="section-aside">
          <div class="section-title text-left">
            <p class="tag" data-i18n="skills-catalog-learn-eyebrow">04 · Learn</p>
            <h2 data-i18n="skills-catalog-learn-title">부족한 역량에<br> 필요한 학습만 설계합니다</h2>
            <p class="desc" data-i18n="skills-catalog-learn-desc">하나의 방식에 조직을 맞추지 않고, <br data-break="desktop"> 진단 결과와 목표에 따라 학습 방식을 조합합니다.</p>
          </div>

          <!-- index.html PART 1의 교육 프로그램 목록과 같은 컴포넌트(choice-list).
               지금 보고 있는 제품에 .is-active가 옮겨 붙고, 누르면 그 제품으로
               스크롤한다 — 표시이자 입력이다(js/journey-stage.js). -->
          <div class="learn-products">
            <p class="text-label brand" data-i18n="skills-catalog-learn-list-label">교육 프로그램</p>

            <ul class="choice-list">
              <li>
                <button class="choice-list__item" type="button" data-journey-program="0">
                  <span class="icon-box" aria-hidden="true">
                    <img src="/images/icons/service/ic_skillPath.svg" alt="">
                  </span>
                  <span class="choice-list__body">
                    <span class="section-body-title">SkillPath</span>
                    <span class="text-caption" data-i18n="skills-catalog-learn-item-caption-01">온라인 이러닝</span>
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
                    <span class="section-body-title">SkillCamp</span>
                    <span class="text-caption" data-i18n="skills-catalog-learn-item-caption-02">강사 주도형 교육</span>
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
                    <span class="text-caption" data-i18n="skills-catalog-learn-item-caption-03">AI 기반 적응형 학습</span>
                  </span>
                  <svg class="choice-list__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
              </li>
            </ul>
          </div>

          <!-- 이 섹션에서 하나뿐인 행동이라 주 버튼으로 둔다. 문구는 최하단
               cta-final과 겹치지 않게 이 섹션의 맥락(조합 상담)으로 좁힌다. -->
          <a class="btn btn-primary" href="#">
            <span data-i18n="skills-catalog-learn-cta">우리 조직의 조합 문의하기</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
        </div>

        <!-- 우측 — index.html PART 1과 같은 스테이지. 판(.journey-viewport)은
             sticky로 고정되고 안의 제품만 교차 페이드로 바뀐다. 스크롤 길이는
             보이지 않는 .journey-track이 만든다(js/journey-stage.js). -->
        <div class="journey-stage" data-journey-stage="">
          <div class="journey-track" data-journey-track="">
            <div data-journey-track-step="0"></div>
            <div data-journey-track-step="1"></div>
            <div data-journey-track-step="2"></div>
          </div>

          <div class="content-panel journey-viewport surface-glass">
          <article class="content-panel__item journey-step is-active" id="learn-skillpath" data-journey-step="0">
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
              <p class="text-label brand" data-i18n="skills-catalog-learn-step-label-01">SkillPath · 온라인 이러닝</p>
              <h3 class="stage-step-title" data-i18n="skills-catalog-learn-step-title-01">각자의 속도로, <br data-break="mobile">기초부터 탄탄하게</h3>
              <p class="desc" data-i18n="skills-catalog-learn-step-desc-01">직무별 커리큘럼을 온라인으로 학습합니다. <br data-break="desktop"> 진도와 이수율이 자동으로 기록되어 관리자가 한눈에 봅니다.</p>
            </div>

            <ul class="product-points">
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span data-i18n="skills-catalog-learn-step-point-01-01">짧은 단위의 학습 콘텐츠</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span data-i18n="skills-catalog-learn-step-point-01-02">실습과 평가가 이어지는 학습 경로</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span data-i18n="skills-catalog-learn-step-point-01-03">기초부터 직무 심화까지 구성</span>
              </li>
            </ul>
            <a class="btn btn-ghost" href="/skillpath"><span data-i18n="skills-catalog-learn-step-cta-01">SkillPath 자세히</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          </article>

          <article class="content-panel__item journey-step" id="learn-skillcamp" data-journey-step="1">
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
              <p class="text-label brand" data-i18n="skills-catalog-learn-step-label-02">SkillCamp · 라이브 교육</p>
              <h3 class="stage-step-title" data-i18n="skills-catalog-learn-step-title-02">현업 전문가와 <br data-break="mobile">실전처럼 부딪힙니다</h3>
              <p class="desc" data-i18n="skills-catalog-learn-step-desc-02">강사 주도 라이브 세션에서 실제 업무 과제로 프로젝트를 수행합니다. <br data-break="desktop"> 질문하고, 막히고, 해결하며 배웁니다.</p>
            </div>

            <ul class="product-points">
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span data-i18n="skills-catalog-learn-step-point-02-01">직무·주제별 집중 과정</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span data-i18n="skills-catalog-learn-step-point-02-02">실습, 프로젝트, 전문가 피드백</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span data-i18n="skills-catalog-learn-step-point-02-03">사내 교육 과정으로 맞춤 운영</span>
              </li>
            </ul>
            <a class="btn btn-ghost" href="/skillcamp"><span data-i18n="skills-catalog-learn-step-cta-02">SkillCamp 자세히</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          </article>

          <article class="content-panel__item journey-step" id="learn-skillfit" data-journey-step="2">
            <!-- 목업: 실제 SkillFit 학습 화면(아이콘 레일 · 스킬 목록 · 레슨 · AI 튜터)을
                 핵심만 남겨 확대한 형태. 본문 텍스트는 스켈레톤 바로 단순화하고,
                 강조할 것(트랙·진행률·실무 시나리오·튜터 대화)만 실제 내용으로 둔다. -->
            <div class="content-panel__visual preview-frame journey-mock journey-app" aria-hidden="true">
              <!-- 최좌측 — 아이콘 메뉴 레일. 실제 앱의 좌측 네비를 그대로 옮긴다. -->
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

              <!-- 좌 — 학습 중인 트랙 + 스킬 목록. -->
              <div class="journey-app-side">
                <div class="journey-app-track">
                  <span class="journey-app-track-badge">진행중</span>
                  <span class="journey-app-level">Beginner</span>

                  <span class="journey-app-track-name">AI 에이전트의 활용</span>
                  <span class="journey-app-progress-bar"><span style="width: 33%"></span></span>
                  <span class="text-caption">33% · 6 / 18 스킬</span>
                </div>

                <ul class="journey-app-skills">
                  <li class="journey-app-skill is-done">
                    <span class="journey-app-num">1</span>
                    <span class="skeleton-line"></span>
                    <span class="journey-app-rate">100%</span>
                  </li>
                  <li class="journey-app-skill is-current">
                    <span class="journey-app-num">2</span>
                    <span class="skeleton-line"></span>
                    <span class="journey-app-rate">83%</span>
                  </li>
                  <li class="journey-app-skill">
                    <span class="journey-app-num">3</span>
                    <span class="skeleton-line"></span>
                    <span class="journey-app-rate">16%</span>
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

                <p class="journey-app-eyebrow">LESSON 4</p>
                <p class="journey-app-lesson">AI의 기억력에도<br>끝이 있을까?</p>

                <div class="skeleton-stack">
                  <span class="skeleton-line"></span>
                  <span class="skeleton-line"></span>
                  <span class="skeleton-line is-short"></span>
                </div>

                <!-- 실력에 맞춰 난이도가 조정됐다는 것이 이 목업의 핵심 메시지다. -->
                <p class="journey-app-adapt">정답률 92% → 난이도 <strong>심화</strong></p>
              </div>

              <!-- 우 — AI 튜터. 막히는 지점에서 바로 묻고 답이 오는 흐름을 보여준다. -->
              <div class="journey-app-tutor">
                <div class="journey-app-tutor-head">
                  <span class="journey-app-tutor-name">AI 튜터</span>
                  <span class="journey-app-tutor-status">답변 중</span>
                </div>

                <p class="journey-mock-bubble is-mine">컨텍스트 윈도우가 뭐예요?</p>
                <p class="journey-mock-bubble">한 번에 담기는 정보의 크기예요</p>
                <p class="journey-mock-bubble is-mine">넘치면 어떻게 돼요?</p>
                <!-- 타이핑 인디케이터 — 지금 답하는 중이라는 신호. -->
                <p class="journey-mock-bubble journey-app-typing">
                  <span></span><span></span><span></span>
                </p>

                <div class="journey-app-ask">
                  <span class="journey-app-ask-text">궁금한 걸 물어보세요</span>
                  <span class="journey-app-ask-send"></span>
                </div>
              </div>
            </div>

            <div class="content-panel__intro">
              <p class="text-label brand" data-i18n="skills-catalog-learn-step-label-03">SkillFit · AI 적응형 학습</p>
              <h3 class="stage-step-title" data-i18n="skills-catalog-learn-step-title-03">실력에 맞춘 난이도가 <br data-break="mobile">따라옵니다</h3>
              <p class="desc" data-i18n="skills-catalog-learn-step-desc-03">진단 결과와 학습 데이터에 맞추어 <br data-break="desktop"> AI가 문제 난이도와 경로를 실시간으로 조정합니다.</p>
            </div>

            <ul class="product-points">
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span data-i18n="skills-catalog-learn-step-point-03-01">개인별 학습 경로 자동 설계</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span data-i18n="skills-catalog-learn-step-point-03-02">대화형 AI 튜터의 1:1 보완</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span data-i18n="skills-catalog-learn-step-point-03-03">진단 → 학습 → 재진단 순환</span>
              </li>
            </ul>
            <a class="btn btn-ghost" href="#"><span data-i18n="skills-catalog-learn-step-cta-03">SkillFit 자세히</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          </article>
          </div>
        </div>
      </div>
    </section>

    <!-- 05 Blended Design — 사전진단 → 맞춤 학습 조합 → 재진단.
         3단계를 가로로 나열하고 feature-card-cycle.js로 자동 순환시킨다
         (02 Why It Matters와 같은 스크립트를 공유 — js/feature-card-cycle.js 참고).
         activate된 칸만 폭이 2배로 넓어지고, 그 칸의 텍스트 위에 프레젠테이션
         목업이 나타난다. 목업 3종은 각 단계 내용에 맞춰 새로 제작했다(사용자 확인) —
         기존 목업(journey-mock 등)은 SkillPath 학습 화면 전용이라 진단·조합·비교
         화면에는 맞지 않는다. 부품은 기존 것(preview-frame·skeleton-line·
         journey-mock-*)을 그대로 쓰고 조합만 새로 했다.

         연출도 새로 만들지 않고 공용 mock-motion.css의 것을 붙였다
         (data-mock-motion — ticker: 수치 pop·막대 자람·피드 갱신,
         detail: 항목 선택·패널 진입·게이지 채움). 각 목업이 "돌아가는 화면"으로
         보이도록 is-pop·is-bar·is-feed·is-gauge·is-shimmer 훅을 얹었다. -->
    <section class="blend fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="skills-blend-eyebrow">05 · Blended Design</p>
          <h2 data-i18n="skills-blend-title">방식을 고르지 말고, <br data-break="desktop">필요한 조합을 설계하세요</h2>
          <p class="desc" data-i18n="skills-blend-desc">사전 진단을 기준으로 이러닝, 집합교육, 적응형 학습을 조합하고, <br data-break="desktop">교육 후 변화를 다시 측정합니다.</p>
        </div>
        <div class="section-content">
          <ol class="blend-cycle" data-feature-cycle="" data-interval="5000">
            <li class="blend-step">
              <span class="feature-card-progress"><span class="feature-card-progress-bar"></span></span>
              <!-- 진단 리포트 — 점수가 집계되고(is-pop) 역량별 막대가 자라며(is-bar)
                   미응답 항목이 스켈레톤으로 대기한다(is-shimmer). ticker 연출. -->
              <div class="blend-mock" aria-hidden="true">
                <div class="preview-frame preview-frame--flush blend-mock-screen" data-mock-motion="ticker">
                  <div class="preview-frame__bar">
                    <span class="preview-frame__dots"><i></i><i></i><i></i></span>
                    <span class="blend-mock-url">assess.codepresso.io</span>
                  </div>
                  <div class="blend-mock-body">
                    <div class="blend-mock-head">
                      <span class="blend-mock-title">역량 진단 리포트</span>
                      <span class="journey-mock-badge is-live">집계 중</span>
                    </div>
                    <div class="blend-mock-score">
                      <div class="blend-mock-gauge">
                        <svg viewBox="0 0 64 64" aria-hidden="true">
                          <circle cx="32" cy="32" r="28" fill="none" stroke="var(--color-brand-tint-2)" stroke-width="7"></circle>
                          <circle class="is-gauge" cx="32" cy="32" r="28" fill="none" stroke="var(--color-brand)" stroke-width="7" stroke-linecap="round" stroke-dasharray="176" stroke-dashoffset="82" style="--mock-gauge-from: 176; --mock-gauge-to: 82"></circle>
                        </svg>
                        <b class="is-pop">53<em>점</em></b>
                      </div>
                      <ul class="blend-mock-legend">
                        <li><span class="blend-mock-dot"></span>데이터 분석 <b>64</b></li>
                        <li><span class="blend-mock-dot is-mid"></span>자동화 도구 <b>38</b></li>
                        <li class="is-focus"><span class="blend-mock-dot is-low"></span>AI 활용 <b>26</b></li>
                      </ul>
                    </div>
                    <ul class="blend-mock-bars">
                      <li><i class="is-bar" style="--mock-bar-h: 64%"></i><span>분석</span></li>
                      <li><i class="is-bar" style="--mock-bar-h: 38%"></i><span>자동화</span></li>
                      <li><i class="is-bar" style="--mock-bar-h: 26%"></i><span>AI</span></li>
                      <li><i class="is-bar" style="--mock-bar-h: 52%"></i><span>협업</span></li>
                      <li><i class="is-bar" style="--mock-bar-h: 44%"></i><span>보안</span></li>
                    </ul>
                    <div class="blend-mock-row is-feed">
                      <span class="journey-mock-avatar">김</span>
                      <span class="blend-mock-row-name">개발팀 · 응답 완료</span>
                      <span class="blend-mock-row-meta">방금</span>
                    </div>
                  </div>
                </div>
              </div>
              <span class="text-label brand" data-i18n="skills-blend-step-tag-01">STEP 1</span>
              <h3 class="blend-step-title" data-i18n="skills-blend-step-title-01">사전 진단</h3>
              <p class="blend-step-desc" data-i18n="skills-blend-step-desc-01">조직과 개인의 현재 역량, 부족한 영역을 확인</p>
            </li>
            <li class="blend-step">
              <span class="feature-card-progress"><span class="feature-card-progress-bar"></span></span>
              <!-- 조합 설계 — 좌측에서 제품을 고르면(is-selected) 우측 설계 결과가
                   밀려 들어오고(is-panel) 주차별 배치가 계단식으로 뜬다(is-stagger).
                   detail 연출. -->
              <div class="blend-mock" aria-hidden="true">
                <div class="preview-frame preview-frame--flush blend-mock-screen" data-mock-motion="detail">
                  <div class="preview-frame__bar">
                    <span class="preview-frame__dots"><i></i><i></i><i></i></span>
                    <span class="blend-mock-url">design.codepresso.io</span>
                  </div>
                  <div class="blend-mock-split">
                    <div class="blend-mock-aside">
                      <span class="blend-mock-aside-label">학습 방식</span>
                      <ul class="blend-mock-combo">
                        <li class="is-selected"><span class="journey-mock-check is-done"></span>SkillPath<em>이러닝</em></li>
                        <li class="is-selected" style="animation-delay: .1s"><span class="journey-mock-check is-done"></span>SkillCamp<em>집합교육</em></li>
                        <li class="is-selected" style="animation-delay: .2s"><span class="journey-mock-check is-done"></span>SkillFit<em>적응형</em></li>
                        <li class="is-quiet"><span class="journey-mock-check"></span><span class="skeleton-line is-shimmer" style="width: 54px"></span></li>
                      </ul>
                    </div>
                    <div class="blend-mock-panel is-panel">
                      <div class="blend-mock-head">
                        <span class="blend-mock-title">12주 설계안</span>
                        <span class="journey-mock-badge">3종 조합</span>
                      </div>
                      <ul class="blend-mock-plan">
                        <li class="is-stagger">
                          <span class="blend-mock-week">1–4주</span>
                          <span class="blend-mock-track">SkillPath</span>
                          <i style="--blend-track-w: 34%"></i>
                        </li>
                        <li class="is-stagger" style="animation-delay: .12s">
                          <span class="blend-mock-week">5–8주</span>
                          <span class="blend-mock-track is-camp">SkillCamp</span>
                          <i class="is-camp" style="--blend-track-w: 30%; --blend-track-x: 34%"></i>
                        </li>
                        <li class="is-stagger" style="animation-delay: .24s">
                          <span class="blend-mock-week">9–12주</span>
                          <span class="blend-mock-track is-fit">SkillFit</span>
                          <i class="is-fit" style="--blend-track-w: 36%; --blend-track-x: 64%"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <span class="text-label brand" data-i18n="skills-blend-step-tag-02">STEP 2</span>
              <h3 class="blend-step-title" data-i18n="skills-blend-step-title-02">맞춤 학습 조합</h3>
              <p class="blend-step-desc" data-i18n="skills-blend-step-desc-02">SkillPath · SkillCamp · SkillFit을 목표에 맞게 조합</p>
            </li>
            <li class="blend-step">
              <span class="feature-card-progress"><span class="feature-card-progress-bar"></span></span>
              <!-- 전후 비교 — 상승폭이 pop 되고(is-pop) 전후 막대가 자라며(is-bar)
                   역량별 변화량이 행으로 쌓인다. ticker 연출. -->
              <div class="blend-mock" aria-hidden="true">
                <div class="preview-frame preview-frame--flush blend-mock-screen" data-mock-motion="ticker">
                  <div class="preview-frame__bar">
                    <span class="preview-frame__dots"><i></i><i></i><i></i></span>
                    <span class="blend-mock-url">report.codepresso.io</span>
                  </div>
                  <div class="blend-mock-body">
                    <div class="blend-mock-head">
                      <span class="blend-mock-title">전후 비교 분석</span>
                      <span class="journey-mock-badge">12주 경과</span>
                    </div>
                    <div class="blend-mock-compare">
                      <div class="blend-mock-compare-col">
                        <span class="blend-mock-compare-label">진단 전</span>
                        <i class="is-bar" style="--mock-bar-h: 42%"></i>
                        <b>53</b>
                      </div>
                      <div class="blend-mock-delta">
                        <span class="blend-mock-delta-value is-pop">+33</span>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      </div>
                      <div class="blend-mock-compare-col is-after">
                        <span class="blend-mock-compare-label">진단 후</span>
                        <i class="is-bar" style="--mock-bar-h: 86%"></i>
                        <b>86</b>
                      </div>
                    </div>
                    <ul class="blend-mock-delta-list">
                      <li>
                        <span class="blend-mock-row-name">데이터 분석</span>
                        <span class="blend-mock-meter"><i style="--blend-track-w: 88%"></i></span>
                        <span class="blend-mock-up">+29</span>
                      </li>
                      <li>
                        <span class="blend-mock-row-name">자동화 도구</span>
                        <span class="blend-mock-meter"><i style="--blend-track-w: 74%"></i></span>
                        <span class="blend-mock-up">+35</span>
                      </li>
                      <!-- STEP 1에서 가장 낮았던(26점) 항목이 가장 크게 올랐다 —
                           이것이 "진단이 조합을 정하고 조합이 결과를 만든다"는
                           이 섹션의 결론이다. 그래서 이 행만 is-focus로 짚는다. -->
                      <li class="is-focus">
                        <span class="blend-mock-row-name">AI 활용</span>
                        <span class="blend-mock-meter"><i style="--blend-track-w: 88%"></i></span>
                        <span class="blend-mock-up">+41</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span class="text-label brand" data-i18n="skills-blend-step-tag-03">STEP 3</span>
              <h3 class="blend-step-title" data-i18n="skills-blend-step-title-03">재진단과 분석</h3>
              <p class="blend-step-desc" data-i18n="skills-blend-step-desc-03">교육 전후의 변화를 같은 기준으로 측정하고 증명</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- 06 Analyze & Prove — 대시보드·성과 보고 2블록.
         03·04와 같은 content-panel 골격을 쓰되 아이콘은 달지 않는다
         (제품 소개가 아니라 기본 제공 기능이라 아이콘까지 붙이면 제품처럼 읽힌다).
         대신 각 카드에 실제 화면 목업을 둔다 — 앞 세 섹션이 모두 목업을 갖는데
         여기만 텍스트뿐이라 "덜 만든 섹션"으로 읽혔다. 좌측은 현황(히트맵),
         우측은 보고(전후 상승폭)로 역할을 나눈다. -->
    <section class="features-analyze fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="skills-analyze-eyebrow">06 · Analyze &amp; Prove</p>
          <h2 data-i18n="skills-analyze-title">역량 분석은 별도 제품이 아니라 <br data-break="desktop">기본 과정입니다</h2>
          <p class="desc" data-i18n="skills-analyze-desc">모든 진단과 교육 결과를 한곳에서 보고, 다음 교육 계획과 투자 판단에 활용합니다.</p>
        </div>
        <div class="section-content">
          <ul class="analyze-grid">
            <li>
              <div class="content-panel is-primary">
                <div class="content-panel__item">
                  <div class="content-panel__intro">
                    <p class="text-label brand" data-i18n="skills-analyze-item-label-01">조직 역량 대시보드</p>
                    <h3 data-i18n="skills-analyze-item-title-01">개인부터 조직까지,<br>성장 데이터를 한눈에</h3>
                    <p class="analyze-desc" data-i18n="skills-analyze-item-desc-01">진단과 학습 데이터가 자동으로 누적되어, 변화와 격차를 지속적으로 확인할 수 있습니다. 별도 제품도, 추가 비용도 없습니다.</p>
                  </div>
                  <div class="content-panel__visual">
                    <!-- 직무 × 역량 히트맵 — 이 섹션이 말하는 "격차를 한눈에"를
                         글이 아니라 색의 농담으로 보여준다. 칸이 순서대로 켜지고
                         (is-cell) 하단 Skill Gap 막대가 자란다(is-bar). ticker 연출. -->
                    <div class="analyze-mock" aria-hidden="true">
                      <div class="preview-frame preview-frame--flush mock-screen analyze-mock-screen" data-mock-motion="ticker">
                        <div class="preview-frame__bar">
                          <span class="preview-frame__dots"><i></i><i></i><i></i></span>
                          <span class="analyze-mock-url">dashboard.codepresso.io</span>
                        </div>
                        <div class="analyze-mock-body">
                          <div class="analyze-mock-head">
                            <span class="analyze-mock-title">직무 × 역량 격차</span>
                            <span class="journey-mock-badge is-live"><i class="is-pulse"></i>자동 누적</span>
                          </div>

                          <!-- 히트맵 — 첫 열은 직무 이름, 나머지는 역량별 점수 농도.
                               is-low/is-mid가 부족한 영역이라 색이 옅다. -->
                          <div class="analyze-mock-heat">
                            <span class="analyze-mock-axis"></span>
                            <span class="analyze-mock-axis">분석</span>
                            <span class="analyze-mock-axis">자동화</span>
                            <span class="analyze-mock-axis">AI</span>
                            <span class="analyze-mock-axis">협업</span>

                            <span class="analyze-mock-role">개발</span>
                            <i class="is-cell"></i>
                            <i class="is-cell is-mid" style="animation-delay: .04s"></i>
                            <i class="is-cell is-low" style="animation-delay: .08s"></i>
                            <i class="is-cell" style="animation-delay: .12s"></i>

                            <span class="analyze-mock-role">마케팅</span>
                            <i class="is-cell is-mid" style="animation-delay: .16s"></i>
                            <i class="is-cell is-low" style="animation-delay: .2s"></i>
                            <i class="is-cell is-low" style="animation-delay: .24s"></i>
                            <i class="is-cell" style="animation-delay: .28s"></i>

                            <span class="analyze-mock-role">경영관리</span>
                            <i class="is-cell is-low" style="animation-delay: .32s"></i>
                            <i class="is-cell is-mid" style="animation-delay: .36s"></i>
                            <i class="is-cell is-low" style="animation-delay: .4s"></i>
                            <i class="is-cell is-mid" style="animation-delay: .44s"></i>
                          </div>

                          <!-- 가장 큰 격차 3개만 막대로 뽑아 "다음에 무엇을 교육할지"를 만든다 -->
                          <div class="analyze-mock-gap">
                            <span class="analyze-mock-gap-label">우선 보완</span>
                            <ul class="analyze-mock-bars">
                              <li>
                                <span>AI 활용</span>
                                <i class="is-bar" style="--mock-bar-h: 86%"></i>
                                <b>-38</b>
                              </li>
                              <li>
                                <span>자동화</span>
                                <i class="is-bar" style="--mock-bar-h: 62%; animation-delay: .1s"></i>
                                <b>-24</b>
                              </li>
                              <li>
                                <span>데이터</span>
                                <i class="is-bar" style="--mock-bar-h: 34%; animation-delay: .2s"></i>
                                <b>-12</b>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul class="analyze-points">
                      <li data-i18n="skills-analyze-item-point-01-01">조직 · 팀 · 개인별 역량 현황</li>
                      <li data-i18n="skills-analyze-item-point-01-02">직무 · 업계 벤치마크 비교</li>
                      <li data-i18n="skills-analyze-item-point-01-03">교육 전후 변화와 Skill Gap</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="content-panel">
                <div class="content-panel__item">
                  <div class="content-panel__intro">
                    <p class="text-label brand" data-i18n="skills-analyze-item-label-02">성과 보고</p>
                    <h3 data-i18n="skills-analyze-item-title-02">교육 성과를<br>숫자로 보고합니다</h3>
                    <p class="analyze-desc" data-i18n="skills-analyze-item-desc-02">수료율과 만족도로 끝내지 않습니다. 같은 기준으로 재진단해 역량이 어디에서 얼마나 변했는지 보여줍니다.</p>
                  </div>
                  <div class="content-panel__visual">
                    <!-- 성과 보고서 — 좌측 카드가 "현황"이라면 이쪽은 "보고".
                         재진단으로 얼마나 올랐는지를 팀별 한 줄씩 보여준다.
                         수치가 pop 되고(is-pop) 상승 막대가 자란다. ticker 연출. -->
                    <div class="analyze-mock" aria-hidden="true">
                      <div class="preview-frame preview-frame--flush mock-screen analyze-mock-screen" data-mock-motion="ticker">
                        <div class="preview-frame__bar">
                          <span class="preview-frame__dots"><i></i><i></i><i></i></span>
                          <span class="analyze-mock-url">report.codepresso.io</span>
                        </div>
                        <div class="analyze-mock-body">
                          <div class="analyze-mock-head">
                            <span class="analyze-mock-title">교육 성과 보고서</span>
                            <span class="journey-mock-badge">2026 상반기</span>
                          </div>

                          <!-- 전체 상승폭이 이 보고서의 결론이라 가장 크게 둔다 -->
                          <div class="analyze-mock-lift">
                            <b class="is-pop">+31<em>점</em></b>
                            <span class="analyze-mock-lift-note">조직 평균 역량 상승<br>재진단 기준 · 대상 412명</span>
                          </div>

                          <!-- 팀별 전후 비교 — 옅은 막대가 진단 전, 진한 막대가 후 -->
                          <ul class="analyze-mock-bars">
                            <li>
                              <span>개발팀</span>
                              <i class="is-bar" style="--mock-bar-h: 88%"></i>
                              <b>+42</b>
                            </li>
                            <li>
                              <span>마케팅</span>
                              <i class="is-bar" style="--mock-bar-h: 64%; animation-delay: .1s"></i>
                              <b>+28</b>
                            </li>
                            <li>
                              <span>경영관리</span>
                              <i class="is-bar" style="--mock-bar-h: 46%; animation-delay: .2s"></i>
                              <b>+19</b>
                            </li>
                          </ul>

                          <div class="analyze-mock-gap">
                            <span class="analyze-mock-gap-label">다음 투자 우선순위</span>
                            <div class="analyze-mock-row is-feed">
                              <span class="analyze-mock-row-name">AI 활용 · 마케팅 · 경영관리</span>
                              <span class="text-caption strong">ROI 1위</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul class="analyze-points">
                      <li data-i18n="skills-analyze-item-point-02-01">교육 전후 역량 변화 비교</li>
                      <li data-i18n="skills-analyze-item-point-02-02">조직·팀·직무별 격차 분석</li>
                      <li data-i18n="skills-analyze-item-point-02-03">교육 ROI와 우선 투자 영역 확인</li>
                      <li data-i18n="skills-analyze-item-point-02-04">정기 모니터링과 다음 학습 계획</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 07 Proof — 이 페이지에서 유일하게 어두운 섹션.
         ax-build 06과 같은 판단이다(옅은 틴트로는 강조가 서지 않아 어두운 판으로 올림).
         누적 수치는 ax-grow 07과 같은 content-panel start-card 배치로 두고
         stat-reveal 카운트업만 그대로 쓴다. -->
    <section class="outcomes is-dark fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="skills-outcomes-eyebrow">07 · Proof</p>
          <h2 data-i18n="skills-outcomes-title">교육을 했다면, <br data-break="desktop">역량의 변화가 있어야 합니다</h2>
        </div>
        <div class="section-content">
          <!-- data-stat-reveal은 카드를 감싼 grid에 둔다. start-card를 쓰므로
               data-stat-card로 대상 선택자를 알린다(기본값은 .metric-card).
               stat-reveal.js가 .num[data-target]을 0에서 카운트업한다. -->
          <ul class="start-grid" data-stat-reveal="" data-stat-card=".start-card">
            <li>
              <div class="content-panel content-panel--compact start-card">
                <span class="start-icon" aria-hidden="true">
                  <!-- 수강생 — ic_team.svg 기반, 하드코딩 색을 브랜드 토큰으로 교체 -->
                  <svg class="icon-md" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9C7.06087 9 8.07827 9.42142 8.82841 10.1716C9.57856 10.9217 10 11.9391 10 13V18C10 18.2652 9.89464 18.5196 9.70711 18.7071C9.51957 18.8946 9.26522 19 9 19H3C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18V13C2 11.9391 2.42142 10.9217 3.17157 10.1716C3.92172 9.42142 4.93913 9 6 9Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                    <path d="M6 8C7.38071 8 8.5 6.88071 8.5 5.5C8.5 4.11929 7.38071 3 6 3C4.61929 3 3.5 4.11929 3.5 5.5C3.5 6.88071 4.61929 8 6 8Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                    <path d="M21 19H15C14.7348 19 14.4804 18.8946 14.2929 18.7071C14.1053 18.5196 14 18.2652 14 18V13C14 11.9391 14.4214 10.9217 15.1716 10.1716C15.9217 9.42142 16.9391 9 18 9C19.0609 9 20.0783 9.42142 20.8284 10.1716C21.5786 10.9217 22 11.9391 22 13V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                    <path d="M18 8C19.3807 8 20.5 6.88071 20.5 5.5C20.5 4.11929 19.3807 3 18 3C16.6193 3 15.5 4.11929 15.5 5.5C15.5 6.88071 16.6193 8 18 8Z" fill="color-mix(in srgb, var(--color-brand) 25%, var(--color-surface))"></path>
                    <path d="M11.1201 12H12.8701C13.931 12 14.9484 12.4214 15.6985 13.1716C16.4487 13.9217 16.8701 14.9391 16.8701 16V21C16.8701 21.2652 16.7648 21.5196 16.5772 21.7071C16.3897 21.8946 16.1353 22 15.8701 22H8.12012C7.8549 22 7.60055 21.8946 7.41301 21.7071C7.22547 21.5196 7.12012 21.2652 7.12012 21V16C7.12012 14.9391 7.54154 13.9217 8.29169 13.1716C9.04183 12.4214 10.0593 12 11.1201 12Z" fill="var(--color-brand)"></path>
                    <path d="M12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.6193 6 9.5 7.11929 9.5 8.5C9.5 9.88071 10.6193 11 12 11Z" fill="var(--color-brand)"></path>
                  </svg>
                </span>
                <div class="content-panel__intro">
                  <p class="text-label metric-card__label" data-i18n="skills-outcomes-metric-label-01">누적 수강생</p>
                  <p class="metric-card__value"><span class="num" data-target="39355">0</span><span class="unit">명</span></p>
                </div>
              </div>
            </li>
            <li>
              <div class="content-panel content-panel--compact start-card">
                <span class="start-icon" aria-hidden="true">
                  <!-- 운영 횟수 — ic_calendar.svg 기반 -->
                  <svg class="icon-md" viewBox="0 0 24 24" fill="none">
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
                </span>
                <div class="content-panel__intro">
                  <p class="text-label metric-card__label" data-i18n="skills-outcomes-metric-label-02">교육 운영</p>
                  <p class="metric-card__value"><span class="num" data-target="1531">0</span><span class="unit">회</span></p>
                </div>
              </div>
            </li>
            <li>
              <div class="content-panel content-panel--compact start-card">
                <span class="start-icon" aria-hidden="true">
                  <!-- 재구매율 — images/icons/library/026.서명.svg의 실제 path.
                       하드코딩 색만 브랜드 토큰으로 바꿨다(옅은 판은 35% 섞음). -->
                  <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.08664 5.18651C8.22428 6.07383 7.35587 7.50805 6.75858 9.28963L6.75534 9.29929C5.74022 12.2473 5.75033 14.3788 6.11772 15.8818C6.18984 15.7847 6.26165 15.6862 6.33314 15.5865C7.83388 13.4927 9.07523 10.9908 9.82944 8.74653C10.623 6.31921 10.6115 5.03487 10.5026 4.44106C10.4907 4.37621 10.4777 4.31992 10.4645 4.27142C10.1684 4.33009 9.70398 4.55131 9.08664 5.18651ZM11.2029 3.09723L11.8891 2.05244L11.7624 1.96923L11.6195 1.91871C9.98554 1.34102 8.3982 2.30782 7.29384 3.44414C6.11755 4.65447 5.07902 6.43661 4.38988 8.49009C3.02832 12.4469 3.21132 15.4088 4.02481 17.5612C4.08858 17.7299 4.15588 17.8928 4.22613 18.0498C3.33593 18.8967 2.43613 19.5104 1.57178 19.8256L2.42827 22.1743C3.54636 21.7666 4.60958 21.0656 5.59562 20.1869C6.10788 20.7674 6.60902 21.1685 6.97368 21.4206L6.97688 21.4228C7.34507 21.6756 7.79536 21.7843 8.24179 21.7229C8.68768 21.6616 9.0901 21.4363 9.37611 21.0976L11.5982 18.4181L12.2452 20.4048C12.3375 20.6921 12.5045 20.9524 12.7324 21.1567C12.9624 21.3628 13.2454 21.5037 13.5523 21.5612C13.8596 21.6188 14.1761 21.59 14.4672 21.4788C14.758 21.3678 15.0104 21.1797 15.1998 20.9379L15.209 20.9261L16.9498 18.5896L17.5173 20.4432L17.5208 20.4545C17.6126 20.7444 17.7804 21.0072 18.01 21.213C18.24 21.4191 18.523 21.56 18.8299 21.6175C19.1372 21.6751 19.4537 21.6462 19.7448 21.5351C20.0356 21.424 20.288 21.236 20.4774 20.9941L20.4872 20.9816L23.0036 17.5931L20.9965 16.1026L19.4432 18.1942L18.8767 16.3438C18.7894 16.0479 18.6228 15.7783 18.391 15.5672C18.1551 15.3522 17.8615 15.2069 17.5431 15.1518C17.2243 15.0967 16.8973 15.1349 16.6008 15.2606C16.3126 15.3827 16.067 15.5813 15.8876 15.8309L14.1461 18.1683L13.528 16.2708C13.4401 15.9852 13.2778 15.7249 13.0543 15.5193C12.8239 15.3073 12.5381 15.1624 12.2276 15.1034C11.9169 15.0443 11.5961 15.0742 11.3017 15.1893C11.0196 15.2996 10.7753 15.4828 10.591 15.7162L7.89625 18.9658C7.72027 18.806 7.52855 18.6102 7.33578 18.3747C7.69445 17.9457 8.03806 17.4992 8.36509 17.0429C10.0189 14.7356 11.3717 12.0071 12.2009 9.53774L12.204 9.52848C13.0692 6.88392 13.1741 5.14821 12.9615 3.98983C12.8536 3.40202 12.6635 2.96213 12.4505 2.63929C12.3449 2.47931 12.2374 2.35369 12.1387 2.25679C12.0896 2.20854 12.0431 2.16793 12.0009 2.13408C11.9798 2.11717 11.9598 2.10199 11.9411 2.08841C11.9318 2.08163 11.9228 2.07525 11.9141 2.06926L11.9013 2.06056L11.8952 2.05643L11.8921 2.05442C11.8906 2.05342 11.8891 2.05244 11.2029 3.09723Z" fill="var(--color-brand)"></path>
                  </svg>
                </span>
                <div class="content-panel__intro">
                  <p class="text-label metric-card__label" data-i18n="skills-outcomes-metric-label-03">기업 교육 재구매율</p>
                  <p class="metric-card__value"><span class="num" data-target="80">0</span><span class="unit">%</span></p>
                </div>
              </div>
            </li>
            <li>
              <div class="content-panel content-panel--compact start-card">
                <span class="start-icon" aria-hidden="true">
                  <!-- 교육 만족도 — images/icons/library/020.좋아요.svg의 실제 path.
                       하드코딩 색만 브랜드 토큰으로 바꿨다(옅은 판은 35% 섞음). -->
                  <svg class="icon-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 8H8V21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8Z" fill="var(--color-brand)"></path>
                    <path d="M16.61 21H8V8H18.23C18.6805 8.00063 19.1252 8.10274 19.5308 8.29874C19.9365 8.49474 20.2928 8.77959 20.5734 9.13216C20.8539 9.48473 21.0514 9.89595 21.1512 10.3353C21.251 10.7746 21.2506 11.2308 21.15 11.67L19.54 18.67C19.3881 19.333 19.0154 19.9247 18.483 20.3481C17.9506 20.7714 17.2902 21.0013 16.61 21Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                    <path d="M14.11 1H14C13.681 0.999878 13.3666 1.07606 13.0831 1.22219C12.7995 1.36831 12.555 1.58014 12.37 1.84L8 8H13L15.74 4.16C15.953 3.86081 16.0795 3.50873 16.1057 3.14238C16.1318 2.77603 16.0566 2.40956 15.8882 2.08314C15.7199 1.75673 15.4649 1.48298 15.1512 1.29192C14.8375 1.10086 14.4773 0.999859 14.11 1Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                    <path d="M14 4H12V8H14V4Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path>
                  </svg>
                </span>
                <div class="content-panel__intro">
                  <!-- 소수점 값이라 data-decimals="1"을 준다 — 없으면 정수로 카운트업된다. -->
                  <p class="text-label metric-card__label" data-i18n="skills-outcomes-metric-label-04">교육 만족도</p>
                  <p class="metric-card__value"><span class="num" data-target="4.5" data-decimals="1">0.0</span><span class="unit">/5</span></p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 08 FAQ — 어두운 07과 어두운 최하단 CTA 사이에서 숨을 돌리는 흰 면 -->
    <section class="faq fade-up">
      <div class="section-wrap col">
        <div class="section-title text-center">
          <p class="tag" data-i18n="skills-faq-eyebrow">08 · FAQ</p>
          <h2 data-i18n="skills-faq-title">도입 전에 많이 묻는 질문</h2>
        </div>
        <div class="section-content">
          <div class="faq-list">
            <details>
              <summary class="faq-list__question">
                <span data-i18n="skills-faq-question-01">진단만 먼저 진행할 수 있나요?</span>
                <span class="faq-list__icon" aria-hidden="true">
                  <svg class="icon-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
              </summary>
              <p class="faq-list__answer" data-i18n="skills-faq-answer-01">가능합니다. AI 활용 역량(AI Fluent)이나 IT 직무 역량(SkillCertify) 진단만 먼저 진행해 현재 수준과 부족한 영역을 확인할 수 있습니다. 진단 결과는 이후 교육을 설계할 때 그대로 출발점이 되므로, 교육 계획이 아직 없어도 진단부터 시작하는 것이 순서에 맞습니다.</p>
            </details>
            <details>
              <summary class="faq-list__question">
                <span data-i18n="skills-faq-question-02">이러닝과 집합교육 중 무엇이 더 좋은가요?</span>
                <span class="faq-list__icon" aria-hidden="true">
                  <svg class="icon-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
              </summary>
              <p class="faq-list__answer" data-i18n="skills-faq-answer-02">둘 중 하나를 고르는 문제가 아닙니다. 기초 지식을 각자의 속도로 쌓는 구간은 이러닝(SkillPath), 짧게 몰입해 실무 과제를 해결하는 구간은 집합교육(SkillCamp), 개인별 격차를 메우는 구간은 적응형 학습(SkillFit)이 맞습니다. 사전 진단 결과가 어떤 비중으로 조합할지 알려줍니다.</p>
            </details>
            <details>
              <summary class="faq-list__question">
                <span data-i18n="skills-faq-question-03">교육 효과는 어떻게 확인하나요?</span>
                <span class="faq-list__icon" aria-hidden="true">
                  <svg class="icon-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
              </summary>
              <p class="faq-list__answer" data-i18n="skills-faq-answer-03">교육 전과 같은 기준으로 재진단해 역량이 어디에서 얼마나 변했는지 비교합니다. 수료율과 만족도만 보고하지 않고, 조직·팀·직무별 격차와 Skill Gap 변화를 조직 역량 대시보드에서 확인할 수 있습니다. 별도 제품이나 추가 비용 없이 기본 과정으로 제공됩니다.</p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- 도구 연결 브릿지 — 이 페이지(사람의 전환)에서 자동화 페이지(도구의 전환)로 넘긴다.
         공용 summary-banner.dark를 그대로 쓰고 좌우 배치만 페이지 CSS가 정의한다. -->
    <section class="fade-up">
      <div class="section-wrap col">
        <div class="summary-banner dark">
          <div class="bridge-inner">
            <div class="bridge-copy">
              <h2 class="bridge-title" data-i18n="skills-bridge-title">역량 데이터는,<br data-break="mobile"> <strong class="brand">도구 활용</strong>의 출발점이 됩니다</h2>
              <p class="bridge-desc" data-i18n="skills-bridge-desc">진단 결과가 어떤 에이전트와 자동화가 필요한지 알려줍니다.</p>
            </div>
            <a class="btn btn-outline-inverse" href="/why-codepresso">
              <span data-i18n="skills-bridge-cta">차별점 보기</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-final fade-up">
      <div class="section-wrap col cta-final-inner">
        <h2 class="cta-final-title" data-i18n="skills-cta-final-title">진단이 모든 성장의 시작입니다</h2>
        <p class="cta-final-desc" data-i18n="skills-cta-final-desc">우리 조직의 현재 위치를 확인하고, 필요한 교육과 성과 측정 방식부터 함께 설계하세요.</p>
        <div class="cta-final-actions">
          <a href="#" class="btn btn-primary btn-lg">
            <span data-i18n="skills-cta-final-cta">진단·교육 설계 상담</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
        </div>
      </div>
    </section>
    <!-- Floating CTA — hero의 진단 버튼(#hero-diagnosis-cta)이 화면 밖으로 나가면
         우측 상단에 떠서 따라온다. js/floating-cta.js가 표시를 맡는다.
         hidden으로 시작하는 이유 — JS가 없거나 IntersectionObserver가 없는 환경에서는
         hero 안 CTA만 남기고 이 배너는 아예 나타나지 않게 한다. -->
    <aside class="floating-cta" data-floating-cta="hero-diagnosis-cta" aria-label="AI 활용 진단 바로가기" hidden="">
      <button class="floating-cta-close" type="button" data-floating-cta-close="" aria-label="진단 배너 닫기">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>
      </button>
      <a class="floating-cta-link" href="#">
        <!-- 진단 결과 목업 — 질문 아래로 4개 레벨이 차례로 나타났다 사라진다.
             순서는 --mock-slot-index로 준다(0·1·2·3). -->
        <span class="floating-cta-mock" aria-hidden="true">
          <span class="floating-cta-mock-question">나의 AI 활용 레벨은?</span>
          <ul class="floating-cta-mock-levels">
            <li style="--mock-slot-index: 0">
              <span class="floating-cta-mock-emoji">🔍</span>
              <span class="floating-cta-mock-name"><b>Lv.1</b> 탐색자</span>
            </li>
            <li style="--mock-slot-index: 1">
              <span class="floating-cta-mock-emoji">⚡</span>
              <span class="floating-cta-mock-name"><b>Lv.2</b> 실행자</span>
            </li>
            <li style="--mock-slot-index: 2">
              <span class="floating-cta-mock-emoji">📐</span>
              <span class="floating-cta-mock-name"><b>Lv.3</b> 설계자</span>
            </li>
            <li style="--mock-slot-index: 3">
              <span class="floating-cta-mock-emoji">🌟</span>
              <span class="floating-cta-mock-name"><b>Lv.4</b> 선도자</span>
            </li>
          </ul>
        </span>
        <span class="floating-cta-copy" data-i18n="skills-floating-cta-copy"><strong>AI를 쓰는 사람 vs 다루는 사람</strong> 3분이면 내 수준을 알 수 있어요</span>
        <span class="floating-cta-action">
          <span data-i18n="skills-floating-cta-action">진단 시작</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </span>
      </a>
    </aside>
  </main>

  <!-- Footer도 partials/footer.html 하나로 관리한다. -->
  

  <!-- 공용 스크립트 — GNB(header-scroll·nav-menu), 섹션 진입 모션(fade-up),
       02 Why It Matters·05 Blended 카드 자동 순환(feature-card-cycle),
       04 Learn 스크롤 교차 페이드 스테이지(journey-stage),
       07 Proof 수치 카운트업(stat-reveal). -->
  <SiteFooter />
  <ClientInteractions :scripts='["js/fade-up.js","js/header-scroll.js","js/nav-menu.js","js/feature-card-cycle.js","js/journey-stage.js","js/stat-reveal.js","js/floating-cta.js"]' />
</template>

<script setup>
useSeoMeta({ title: "AI 역량 진단·맞춤 교육 플랫폼 | 코드프레소", description: "AI를 얼마나 아는지가 아니라 업무에서 얼마나 잘 쓰는지 진단하고, 부족한 역량만 맞춤 교육으로 채워 재진단으로 성장을 증명합니다." })
import '~/css/pages/skills.css'
</script>
