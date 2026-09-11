<template>
  <SiteHeader />
<header class="guide-topbar">
    <a class="guide-brand" href="#overview" aria-label="Codepresso Design Guide 처음으로">
      <span class="guide-brand-mark">C</span>
      <span>CODEPRESSO</span><em>Design Guide v2</em>
    </a>
    <p>누구나 같은 화면을 만들 수 있도록 정리한 기준</p>
  </header>

  <div class="guide-v2-shell">
    <aside class="guide-v2-sidebar" aria-label="디자인 가이드 목차">
      <p class="guide-sidebar-label">GUIDE</p>
      <nav class="guide-v2-nav" data-scrollspy-nav="">
        <div class="guide-v2-nav-group">
          <a href="#overview"><span>01</span>처음 보기</a>
        </div>
        <div class="guide-v2-nav-group">
          <a href="#foundation"><span>02</span>기본 규칙</a>
          <div class="guide-v2-sub">
            <a href="#foundation-color">색상</a>
            <a href="#foundation-type">글자 크기</a>
            <a href="#foundation-spacing">여백</a>
            <a href="#foundation-radius">모서리 · 그림자</a>
          </div>
        </div>
        <div class="guide-v2-nav-group">
          <a href="#layout"><span>03</span>섹션 구성</a>
          <div class="guide-v2-sub">
            <a href="#layout-stack">기본 소개형</a>
            <a href="#layout-columns">설명 + 콘텐츠형</a>
            <a href="#layout-sticky">여정 안내형</a>
          </div>
        </div>
        <div class="guide-v2-nav-group">
          <a href="#components"><span>04</span>자주 쓰는 카드</a>
          <div class="guide-v2-sub">
            <a href="#c-hero">Hero</a>
            <a href="#c-section-title">Section Title</a>
            <a href="#c-metric-card">Metric Card</a>
            <a href="#c-choice-list">Choice List</a>
            <a href="#c-preview-frame">Preview Frame</a>
            <a href="#c-insight-card">Insight Card</a>
            <a href="#c-outcome-card">Outcome Card</a>
            <a href="#c-button-link">Button &amp; Link</a>
            <a href="#c-icon-size">Icon Size</a>
            <a href="#c-tag">Tag</a>
            <a href="#c-part-nav">Part Nav</a>
            <a href="#c-assessment-card">Assessment Card</a>
            <a href="#c-skeleton">Skeleton</a>
            <a href="#c-content-panel">Content Panel</a>
            <a href="#c-pain-card">Pain Card</a>
            <a href="#c-product-feature">Product Feature</a>
            <a href="#c-start-card">Start Card</a>
            <a href="#c-statement">Statement</a>
            <a href="#c-compare-panel">Compare Panel</a>
            <a href="#c-timeline">Timeline</a>
            <a href="#c-cycle">Cycle</a>
            <a href="#c-faq-list">FAQ List</a>
            <a href="#c-catalog-board">Catalog Board</a>
            <a href="#c-feature-card">Feature Card</a>
            <a href="#c-feature-points">Feature Points</a>
            <a href="#c-summary-banner">Summary Banner</a>
            <a href="#c-cta-final">CTA Final</a>
            <a href="#inventory">전체 인벤토리</a>
          </div>
        </div>
        <div class="guide-v2-nav-group">
          <a href="#motion"><span>05</span>움직임과 전환</a>
          <div class="guide-v2-sub">
            <a href="#m-fade-up">Fade Up</a>
            <a href="#m-stat-reveal">Stat Reveal</a>
            <a href="#m-proof-card">Proof Card Slider</a>
            <a href="#m-journey-stage">Journey Stage</a>
            <a href="#m-difference">Difference Blocks</a>
            <a href="#m-header">Header &amp; Menu</a>
            <a href="#m-marquee">Client Marquee</a>
          </div>
        </div>
        <div class="guide-v2-nav-group">
          <a href="#rules"><span>06</span>이름과 상태 규칙</a>
          <div class="guide-v2-sub">
            <a href="#rules-class">클래스 이름</a>
            <a href="#rules-state">상태와 동작</a>
            <a href="#rules-breakpoint">화면 폭 기준</a>
          </div>
        </div>
        <div class="guide-v2-nav-group">
          <a href="#patterns"><span>07</span>화면 패턴</a>
        </div>
        <div class="guide-v2-nav-group">
          <a href="#mockup-motion"><span>08</span>목업 연출</a>
          <div class="guide-v2-sub">
            <a href="#mm-focus">A · focus</a>
            <a href="#mm-replay">B · replay</a>
            <a href="#mm-deck">C · deck</a>
            <a href="#mm-detail">D · detail</a>
            <a href="#mm-ticker">E · ticker</a>
            <a href="#mm-stage">F · stage</a>
            <a href="#mm-run">G · run</a>
          </div>
        </div>
        <div class="guide-v2-nav-group">
          <a href="#usage"><span>09</span>컴포넌트 활용법</a>
        </div>
        <div class="guide-v2-nav-group">
          <a href="#nuxt"><span>10</span>Nuxt 전환 가이드</a>
          <div class="guide-v2-sub">
            <a href="#nuxt-mapping">섹션 → 컴포넌트 매핑</a>
            <a href="#nuxt-tokens">토큰 이관</a>
            <a href="#nuxt-partials">partials → components</a>
            <a href="#nuxt-css">페이지 CSS 전략</a>
            <a href="#nuxt-js">바닐라 JS → Vue</a>
            <a href="#nuxt-routing">라우팅 · 빌드</a>
          </div>
        </div>
        <div class="guide-v2-nav-group">
          <a href="#porting"><span>11</span>다른 사이트에 이식하기</a>
          <div class="guide-v2-sub">
            <a href="#porting-why">왜 이 스킬을 쓰는가</a>
            <a href="#porting-rebuttal">반박에 대한 대응</a>
            <a href="#porting-order">이식 순서</a>
            <a href="#porting-table">바꾸는 것</a>
          </div>
        </div>
        <div class="guide-v2-nav-group">
          <a href="#skill-meta"><span>12</span>Skill 구조와 사용법</a>
          <div class="guide-v2-sub">
            <a href="#skill-trigger">호출 방법</a>
            <a href="#skill-rule-01">0-1 · "A를 B로" 규칙</a>
            <a href="#skill-files">폴더 구조</a>
            <a href="#skill-gate">게이트 메커니즘</a>
            <a href="#skill-always">항상 하는 것</a>
            <a href="#skill-docs">작업별로 여는 문서</a>
          </div>
        </div>
      </nav>
      <div class="guide-v2-sidebar-note">
        <strong>현재 버전</strong>
        <span>v2 · 2026.09</span>
        <p>새 화면을 만들기 전, 이 가이드의 구조를 먼저 확인하세요.</p>
      </div>
    </aside>

    <main class="guide-main guide-v2-main">
      <section class="guide-v2-hero" id="overview">
        <p class="guide-eyebrow">CODEPRESSO DESIGN SYSTEM</p>
        <h1>일관된 화면을<br>더 빠르게 만듭니다.</h1>
        <p>문서·표·목차 구조로 다듬은 v2입니다. 왼쪽 목차는 스크롤 위치에 맞춰 자동으로 움직입니다.</p>
      </section>

      <section class="guide-v2-section" id="foundation">
        <div class="guide-v2-section-head">
          <p class="guide-kicker">FOUNDATION</p>
          <h2>기본 규칙</h2>
          <p>모든 화면의 분위기를 결정하는 가장 작은 약속입니다. 새 색상이나 임의의 간격을 추가하기 전에 아래 기준을 먼저 사용합니다.</p>
        </div>

        <div class="guide-v2-subhead" id="foundation-color">
          <h3>색상</h3>
          <p>브랜드를 가장 빠르게 인식시키는 요소</p>
        </div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>색상 팔레트</caption>
            <thead><tr><th scope="col">색</th><th scope="col">이름</th><th scope="col">값</th><th scope="col">용도</th></tr></thead>
            <tbody>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-brand"></i></span></td><th scope="row">Brand</th><td><code>#1A61EA</code></td><td>주요 행동</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-brand-dark"></i></span></td><th scope="row">Brand Dark</th><td><code>#0D33A3</code></td><td>강조 텍스트</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-brand-tint"></i></span></td><th scope="row">Brand Tint</th><td><code>#E9EFFF</code></td><td>선택 상태</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-ink-heavy"></i></span></td><th scope="row">Ink Heavy</th><td><code>#04091A</code></td><td>큰 제목 · Dark Mode BG</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-ink"></i></span></td><th scope="row">Ink</th><td><code>#0E1B3D</code></td><td>기본 텍스트</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-ink-light"></i></span></td><th scope="row">Ink Light</th><td><code>#41496B</code></td><td>본문 설명</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-ink-lighter"></i></span></td><th scope="row">Ink Lighter</th><td><code>#7C88A3</code></td><td>보조 정보</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-surface"></i></span></td><th scope="row">Surface</th><td><code>#FFFFFF</code></td><td>카드 배경</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-sunken"></i></span></td><th scope="row">Sunken</th><td><code>#F5F8FF</code></td><td>옅은 영역 · 페이지 배경</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-line"></i></span></td><th scope="row">Line</th><td><code>#EAECF3</code></td><td>구분선 · 로그인후페이지 BG</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-raised"></i></span></td><th scope="row">Surface Raised</th><td><code>1.267×</code></td><td>진한 면 1단</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-deep"></i></span></td><th scope="row">Surface Deep</th><td><code>1.510×</code></td><td>진한 면 2단</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-success"></i></span></td><th scope="row">Success</th><td><code>#1C9A6C</code></td><td>긍정 상태</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-warning"></i></span></td><th scope="row">Warning</th><td><code>#D98A1B</code></td><td>주의 상태</td></tr>
              <tr><td><span class="is-swatch"><i class="guide-v2-swatch-critical"></i></span></td><th scope="row">Critical</th><td><code>#E1435A</code></td><td>부정 상태</td></tr>
            </tbody>
          </table>
        </div>

        <div class="guide-v2-subhead" id="foundation-type">
          <h3>글자 크기</h3>
          <p>읽는 순서가 보이도록</p>
        </div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>타이포 스케일</caption>
            <thead><tr><th scope="col">이름</th><th scope="col">크기</th><th scope="col">용도</th></tr></thead>
            <tbody>
              <tr><th scope="row">Hero</th><td>56px</td><td>첫 화면의 핵심 메시지</td></tr>
              <tr><th scope="row">H1</th><td>44px</td><td>페이지 대표 제목</td></tr>
              <tr><th scope="row">Metric</th><td>40px</td><td>핵심 수치</td></tr>
              <tr><th scope="row">H2</th><td>36px</td><td>주요 섹션 제목</td></tr>
              <tr><th scope="row">Stage</th><td>32px</td><td>제품 화면의 큰 제목</td></tr>
              <tr><th scope="row">H3</th><td>24px</td><td>카드와 소단락 제목</td></tr>
              <tr><th scope="row">List Title</th><td>20px</td><td>목록 항목의 제목</td></tr>
              <tr><th scope="row">Body Large</th><td>18px</td><td>설명 강조 문장</td></tr>
              <tr><th scope="row">Body</th><td>16px</td><td>기본 본문</td></tr>
              <tr><th scope="row">Body Small</th><td>14px</td><td>버튼과 보조 안내 · 최소 크기</td></tr>
            </tbody>
          </table>
        </div>
        <div class="guide-inline-note">
          <strong>14px 아래로 내리지 않습니다.</strong>
          <span>서비스 페이지의 최소 글자 크기는 14px입니다. 더 작아 보이게 하려면 크기를 줄이는 대신 색을 <code>ink-lighter</code>로 낮추거나 굵기를 내립니다. 굵기는 Regular·Medium·Semibold 3단만 쓰고, 제목은 항상 Semibold입니다.</span>
        </div>

        <div class="guide-v2-subhead" id="foundation-spacing">
          <h3>여백</h3>
          <p>답답하지 않게 구분하는 방법</p>
        </div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>spacing 스케일</caption>
            <thead><tr><th scope="col">이름</th><th scope="col">미리보기</th><th scope="col">값</th></tr></thead>
            <tbody>
              <tr><th scope="row">작은 간격</th><td><span class="guide-v2-mini-bar" style="width:24px"></span></td><td>8px</td></tr>
              <tr><th scope="row">기본 간격</th><td><span class="guide-v2-mini-bar" style="width:56px"></span></td><td>24px</td></tr>
              <tr><th scope="row">기본 padding</th><td><span class="guide-v2-mini-bar" style="width:100px"></span></td><td>48px</td></tr>
              <tr><th scope="row">섹션 간격</th><td><span class="guide-v2-mini-bar" style="width:150px"></span></td><td>96px</td></tr>
            </tbody>
          </table>
        </div>

        <div class="guide-v2-subhead" id="foundation-radius">
          <h3>모서리 둥글기 · 그림자</h3>
          <p>형태와 상호작용 신호</p>
        </div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>radius 스케일</caption>
            <thead><tr><th scope="col">이름</th><th scope="col">미리보기</th><th scope="col">값</th></tr></thead>
            <tbody>
              <tr><th scope="row">radius-sm</th><td><span class="guide-v2-mini-radius is-sm"></span></td><td>6px</td></tr>
              <tr><th scope="row">radius-md</th><td><span class="guide-v2-mini-radius is-md"></span></td><td>8px</td></tr>
              <tr><th scope="row">radius-lg</th><td><span class="guide-v2-mini-radius is-lg"></span></td><td>12px</td></tr>
              <tr><th scope="row">radius-xl</th><td><span class="guide-v2-mini-radius is-xl"></span></td><td>20px</td></tr>
              <tr><th scope="row">radius-full</th><td><span class="guide-v2-mini-radius is-full"></span></td><td>999px</td></tr>
            </tbody>
          </table>
        </div>
        <div class="guide-v2-table-wrap" style="margin-top: var(--space-16)">
          <table class="guide-v2-table">
            <caption>그림자 2단</caption>
            <thead><tr><th scope="col">이름</th><th scope="col">미리보기</th><th scope="col">용도</th></tr></thead>
            <tbody>
              <tr><th scope="row">shadow-sm</th><td><span class="guide-v2-mini-shadow is-sm"></span></td><td>기본 카드</td></tr>
              <tr><th scope="row">shadow-md</th><td><span class="guide-v2-mini-shadow is-md"></span></td><td>hover 강조</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="guide-v2-section" id="layout">
        <div class="guide-v2-section-head">
          <p class="guide-kicker">LAYOUT</p>
          <h2>섹션을 구성하는 세 가지 방식</h2>
          <p>내용의 성격에 따라 배치만 고르면 됩니다. 제목의 정렬과 sticky 여부는 별도의 옵션으로 조합합니다.</p>
        </div>
        <div class="guide-layout-grid">
          <article class="guide-layout-card" id="layout-stack">
            <div class="guide-layout-preview is-stack"><i></i><i></i><i></i></div>
            <p class="tag">위아래 배치</p><h3>기본 소개형</h3>
            <p>제목을 먼저 보여주고, 아래에 카드·목록·이미지를 이어 붙입니다.</p>
            <code>section-wrap col</code>
          </article>
          <article class="guide-layout-card" id="layout-columns">
            <div class="guide-layout-preview is-columns"><i></i><i></i></div>
            <p class="tag">좌우 배치</p><h3>설명 + 콘텐츠형</h3>
            <p>왼쪽에는 설명을, 오른쪽에는 제품 화면이나 상세 콘텐츠를 둡니다.</p>
            <code>section-wrap row</code>
          </article>
          <article class="guide-layout-card" id="layout-sticky">
            <div class="guide-layout-preview is-sticky"><i></i><i></i></div>
            <p class="tag">스크롤 고정</p><h3>여정 안내형</h3>
            <p>설명은 왼쪽에 남겨두고, 오른쪽 내용만 스크롤에 따라 보여줍니다.</p>
            <code>row is-sticky</code>
          </article>
        </div>
        <div class="guide-callout"><strong>기억하기</strong><span>제목 정렬은 바깥 영역이 아니라 <code>section-title</code>에 적용합니다. 그래서 카드나 버튼의 정렬은 영향을 받지 않습니다.</span></div>
      </section>

      <section class="guide-v2-section" id="components">
        <div class="guide-v2-section-head">
          <p class="guide-kicker">COMPONENTS</p>
          <h2>자주 쓰는 카드와 정보 단위</h2>
          <p>비슷한 정보를 보여줄 때는 이미 준비된 디자인을 사용합니다. 내용만 바꿔도 화면의 일관성이 유지됩니다. 아래는 실물 마크업 그대로의 프리뷰입니다.</p>
        </div>
        <div class="guide-v2-component-list">
          <article class="guide-v2-component-row" id="c-hero">
            <div class="guide-component-demo">
              <div class="sub-hero" style="border-radius: var(--radius-lg); padding: var(--space-40) var(--space-24)">
                <div class="hero-wrap" style="padding: 0; max-width: none">
                  <div class="sub-hero-copy">
                    <p class="tag">People Axis · 일하는 사람의 전환</p>
                    <h1 class="hero-title" style="font-size: var(--text-heading-32); line-height: var(--leading-heading-32)">역량 진단·교육</h1>
                    <p class="hero-desc">진단하고, 부족한 영역만 학습하고, 재진단으로 성장을 증명합니다.</p>
                    <div class="hero-actions">
                      <a class="btn btn-primary" href="#components">3분 AI 활용 진단 시작<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                    </div>
                  </div>
                  <ul class="hero-facts surface-glass">
                    <li class="metric-card">
                      <span class="hero-fact-icon icon-lg" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 15H3C2.44772 15 2 15.4477 2 16V20C2 20.5523 2.44772 21 3 21H6C6.55228 21 7 20.5523 7 20V16C7 15.4477 6.55228 15 6 15Z" fill="var(--color-brand)"></path><path d="M13 9H10C9.44772 9 9 9.44772 9 10V20C9 20.5523 9.44772 21 10 21H13C13.5523 21 14 20.5523 14 20V10C14 9.44772 13.5523 9 13 9Z" fill="var(--color-brand)"></path><path d="M20 3H17C16.4477 3 16 3.44772 16 4V20C16 20.5523 16.4477 21 17 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z" fill="var(--color-brand)"></path></svg>
                      </span>
                      <div>
                        <div class="metric-card__value">현재 수준은 어디인가?</div>
                        <p class="metric-card__label text-label">감이 아니라 실무 데이터로 진단합니다</p>
                      </div>
                    </li>
                    <li class="metric-card">
                      <span class="hero-fact-icon icon-lg" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" fill="color-mix(in srgb, var(--color-brand) 35%, var(--color-surface))"></path><path d="M2 17L12 22L22 17" stroke="var(--color-brand)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12L12 17L22 12" stroke="var(--color-brand)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      </span>
                      <div>
                        <div class="metric-card__value">무엇을 배워야 하는가?</div>
                        <p class="metric-card__label text-label">부족한 영역만 골라 학습합니다</p>
                      </div>
                    </li>
                    <li class="metric-card">
                      <span class="hero-fact-icon icon-lg" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 17L9 11L13 15L21 7" stroke="var(--color-brand)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 7H15" stroke="var(--color-brand)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 7V13" stroke="var(--color-brand)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      </span>
                      <div>
                        <div class="metric-card__value">성장이 증명됐는가?</div>
                        <p class="metric-card__label text-label">재진단으로 변화를 숫자로 확인합니다</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div><p class="tag">서브페이지 첫 화면</p><h3>Hero</h3><p>서브페이지 첫 화면에 그대로 재사용하는 골격입니다. 태그 + 제목 + 설명(+ 버튼)이 가운데 정렬되고, 아래에 보조 정보 3칸(<code>hero-facts</code>)을 유리 띠 하나에 담습니다.</p><code>sub-hero · hero-wrap · hero-facts</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-section-title">
            <div class="guide-component-demo">
              <div class="section-title text-left">
                <p class="tag">How it works</p>
                <h2>교육으로 바꾸고,<br>진단으로 증명합니다</h2>
                <p class="desc">핵심은 교육입니다. 그리고 교육이 잘 됐는지는, 앞뒤로 붙는 진단이 숫자로 확인합니다.</p>
              </div>
            </div>
            <div><p class="tag">섹션 제목</p><h3>Section Title</h3><p>페이지의 각 큰 영역을 시작하는 제목 블록입니다. <code>text-left</code> 또는 <code>text-center</code>를 붙여 제목·설명만 정렬합니다.</p><code>section-title · text-left · text-center</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-metric-card">
            <div class="guide-component-demo">
              <div class="summary-banner stats-light guide-metric-sample">
                <div class="summary-banner-stats">
                  <article class="metric-card is-visible">
                    <div class="metric-card__value"><span class="num">39,355</span><span class="unit">명</span></div>
                    <p class="metric-card__label text-label">누적 수강</p>
                    <div class="metric-card__visual" aria-hidden="true">
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
                </div>
              </div>
            </div>
            <div><p class="tag">수치 카드</p><h3>Metric Card</h3><p>성과, 인원, 비율처럼 가장 중요한 숫자를 보여줄 때 사용합니다.</p><code>metric-card</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-choice-list">
            <div class="guide-component-demo">
              <ul class="choice-list">
                <li>
                  <a class="choice-list__item" href="#components">
                    <span class="icon-box" aria-hidden="true"><img src="/images/icons/service/ic_skillPath.svg" alt=""></span>
                    <span class="choice-list__body">
                      <span class="section-body-title">SkillPath</span>
                      <span class="text-caption">온라인 이러닝</span>
                    </span>
                    <svg class="choice-list__arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </a>
                </li>
                <li>
                  <a class="choice-list__item" href="#components">
                    <span class="icon-box" aria-hidden="true"><img src="/images/icons/service/ic_edu.svg" alt=""></span>
                    <span class="choice-list__body">
                      <span class="section-body-title">SkillCamp</span>
                      <span class="text-caption">강사 주도형 교육</span>
                    </span>
                    <svg class="choice-list__arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </a>
                </li>
                <li>
                  <a class="choice-list__item" href="#components">
                    <span class="icon-box" aria-hidden="true"><img src="/images/icons/service/ic_skillFit.svg" alt=""></span>
                    <span class="choice-list__body">
                      <span class="section-body-title">SkillFit</span>
                      <span class="text-caption">AI 기반 적응형 학습</span>
                    </span>
                    <svg class="choice-list__arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </a>
                </li>
              </ul>
            </div>
            <div><p class="tag">선택 목록</p><h3>Choice List</h3><p>제품·프로그램처럼 여러 항목 중 하나를 고르게 할 때 씁니다. 지금 선택된 항목에 <code>is-active</code>를 붙입니다.</p><code>choice-list · choice-list__item · is-active</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-preview-frame">
            <div class="guide-component-demo">
              <div class="preview-frame journey-mock">
                <div class="preview-frame__bar"><span class="preview-frame__dots"><i></i><i></i><i></i></span></div>
                <div class="journey-mock-head">
                  <span class="journey-mock-title">업무 자동화 기초 과정</span>
                  <span class="journey-mock-badge">수강 중</span>
                </div>
                <div class="journey-mock-progress">
                  <div class="journey-mock-progress-bar"><span style="width: 68%"></span></div>
                  <span class="text-caption strong">68%</span>
                </div>
                <ul class="journey-mock-list">
                  <li class="journey-mock-item is-done"><span class="journey-mock-check"></span><span class="journey-mock-item-name">AI 도구 이해하기</span><span class="text-caption">12분</span></li>
                  <li class="journey-mock-item is-current"><span class="journey-mock-check"></span><span class="journey-mock-item-name">반복 업무 자동화 실습</span><span class="text-caption">24분</span></li>
                </ul>
              </div>
            </div>
            <div><p class="tag">제품 화면</p><h3>Preview Frame</h3><p>서비스 화면, 리포트, 교육 콘텐츠 등 실제 화면의 느낌을 보여주는 창 틀입니다.</p><code>preview-frame · preview-frame__bar</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-insight-card">
            <div class="guide-component-demo">
              <InsightList>
            </InsightList></div>
            <div><p class="tag">콘텐츠 목록</p><h3>Insight List</h3><p><code>data/insight-links.json</code>에 링크만 추가하면 기사 정보를 가져와 최신순으로 정렬합니다. 첫 항목은 대표 카드로 배치되며 이미지 오류 시 placeholder를 사용합니다.</p><code>InsightList · insight-list · insight-card</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-outcome-card">
            <div class="guide-component-demo">
              <ul class="outcome-list" style="max-width: 320px;">
                <li>
                  <div class="outcome-logo">
                    <img src="/images/clients/case-study/체인로지스.png" alt="체인로지스 로고" loading="lazy">
                  </div>
                  <div class="outcome-body">
                    <p class="outcome-shift">
                      <span class="outcome-before">2~4시간</span>
                      <span class="outcome-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                      <span class="outcome-after">3분</span>
                    </p>
                    <p class="outcome-detail">월 <strong>80시간</strong> 절감. "풀타임 1명"</p>
                    <p class="outcome-client">체인로지스 <span class="outcome-person">김동현 대표</span></p>
                  </div>
                </li>
              </ul>
            </div>
            <div><p class="tag">고객 사례 카드</p><h3>Outcome Card</h3><p>고객사 로고 판(고정 높이, <code>object-fit: contain</code>) + "이전 → 이후" 성과 카드입니다.</p><code>outcome-list · outcome-logo · outcome-body</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-button-link"><div class="guide-component-demo"><a class="btn btn-primary" href="#components">주요 행동<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2"></path></svg></a><a class="btn btn-ghost" href="#components">보조 행동</a><a class="link-arrow link-arrow-ink" href="#components"><span class="link-underline">자세히 보기</span></a></div><div><p class="tag">버튼과 링크</p><h3>Button &amp; Link</h3><p>주요 행동에는 Primary, 보조 행동에는 Ghost와 밑줄 링크를 사용합니다.</p><code>btn · link-arrow</code></div></article>

          <article class="guide-v2-component-row" id="c-icon-size"><div class="guide-component-demo" style="display:flex;align-items:flex-end;gap:24px"><span class="icon-sm"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="var(--color-brand)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span class="icon-md"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="var(--color-brand)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span class="icon-lg"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="var(--color-brand)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div><p class="tag">아이콘 크기</p><h3>Icon Size</h3><p>아이콘 크기는 이 세 단계만 씁니다 — <code>icon-sm</code> 작게, <code>icon-md</code> 기본, <code>icon-lg</code> 크게.</p><code>icon-sm · icon-md · icon-lg</code></div></article>

          <article class="guide-v2-component-row" id="c-tag"><div class="guide-component-demo"><span class="tag">How it works</span><span class="tag">Proof</span><span class="tag">뉴스</span><span class="tag">LATEST</span><span class="tag solid sm">뉴스</span><span class="tag solid sm">공지</span><span class="tag sm">약 3분</span><span class="tag sm">회원가입 없음</span><span class="tag dark">개발 직군</span><span class="tag dark sm">출시 예정</span><span class="tag outline">ISO 27001</span></div><div><p class="tag">분류 라벨</p><h3>Tag</h3><p>콘텐츠의 종류나 짧은 상태를 제목 앞에 붙일 때 씁니다.</p><code>tag · dark · solid · sm · outline</code></div></article>

          <article class="guide-v2-component-row" id="c-part-nav"><div class="guide-component-demo"><div class="guide-part-nav-variants"><div><p class="text-label">최대 radius · 기본</p><nav class="part-nav part-nav--animated" data-guide-part-nav="" aria-label="캡슐형 Part Nav"><span class="part-nav-indicator" aria-hidden="true"></span><a class="part-nav-item is-active" href="#components">PART 1 · 교육</a><a class="part-nav-item" href="#components">PART 2 · 진단</a></nav></div><div><p class="text-label">최소 radius · compact</p><nav class="part-nav part-nav--compact part-nav--animated" data-guide-part-nav="" aria-label="사각형 Part Nav"><span class="part-nav-indicator" aria-hidden="true"></span><a class="part-nav-item is-active" href="#components">PART 1 · 교육</a><a class="part-nav-item" href="#components">PART 2 · 진단</a></nav></div></div></div><div><p class="tag">파트 이동</p><h3>Part Nav</h3><p>코드프레소의 기본은 부드러운 캡슐형입니다. 더 정돈된 제품 UI에는 8px compact 변형을 사용합니다.</p><code>part-nav · part-nav--compact</code></div></article>

          <article class="guide-v2-component-row" id="c-assessment-card"><div class="guide-component-demo"><div class="assessment-card-frame"><span class="assessment-card-frame__glow" aria-hidden="true"></span><div class="assessment-card-stack"><span class="assessment-card-eyebrow">AI 리터러시 자가 진단 (3분 소요)</span><article class="assessment-card"><div class="assessment-card__head"><h3 class="assessment-card__title">당신은 AI를 쓰는 사람인가요,<br>다루는 사람인가요?</h3><p class="description">AI를 쓰는 사람과 다루는 사람은 다릅니다.<br>지금 나의 AI 활용 수준을 확인해보세요.</p></div><ul class="assessment-card__meta" aria-label="진단 정보"><li class="pill">11문항</li><li class="pill">약 3분</li><li class="pill">즉시 결과</li></ul><div class="assessment-card__action"><a class="btn btn-primary btn-lg assessment-card__cta" href="#components">AI 역량 진단 시작하기<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div></article></div></div></div><div><p class="tag">자가 진단 CTA</p><h3>Assessment Card</h3><p>Hero나 캠페인 화면에서 진단 시작을 유도할 때 사용합니다.</p><code>assessment-card</code></div></article>

          <article class="guide-v2-component-row" id="c-skeleton">
            <div class="guide-component-demo">
              <div class="guide-skeleton-sample">
                <div class="skeleton-stack">
                  <span class="skeleton-block is-tag"></span>
                  <span class="skeleton-block is-title"></span>
                  <span class="skeleton-block is-title is-short"></span>
                  <span class="skeleton-line"></span>
                  <span class="skeleton-line is-short"></span>
                </div>
                <div class="skeleton-block is-thumbnail"></div>
              </div>
            </div>
            <div><p class="tag">콘텐츠 대기 상태</p><h3>Skeleton</h3><p>목업 안에서 읽을 필요가 없는 텍스트, 또는 아직 채워지지 않은 자리를 표현합니다.</p><code>skeleton-block · skeleton-line · skeleton-stack</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-content-panel">
            <div class="guide-component-demo">
              <div class="content-panel content-panel--compact surface-glass">
                <div class="content-panel__item">
                  <div class="content-panel__intro">
                    <p class="text-label brand">SkillCamp · 라이브 교육</p>
                    <p class="section-body-title">현업 전문가와 실전처럼 부딪힙니다</p>
                  </div>
                  <div class="content-panel__visual">
                    <div class="preview-frame preview-frame--quiet journey-mock">
                      <div class="journey-mock-head">
                        <span class="journey-mock-title">실전 프로젝트 세션</span>
                        <span class="journey-mock-badge is-live">LIVE</span>
                      </div>
                      <ul class="journey-mock-chat">
                        <li class="journey-mock-bubble">방금 만든 에이전트, 실제 업무에 바로 써봐도 되나요?</li>
                        <li class="journey-mock-bubble is-mine">네, 지금 화면 공유로 같이 붙여볼게요</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div><p class="tag">콘텐츠 패널</p><h3>Content Panel</h3><p>소개 문구와 제품 화면·차트처럼 큰 시각 요소를 한 판에 담습니다.</p><code>content-panel · content-panel--compact</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-pain-card">
            <div class="guide-component-demo">
              <ul class="pain-grid" style="--pain-columns: 2">
                <li class="pain-card">전원이 같은 강의를 듣습니다. 아는 사람은 지루하고, 모르는 사람은 따라가지 못합니다</li>
                <li class="pain-card">수료율은 나오는데, 그것이 실력인지는 아무도 모릅니다</li>
              </ul>
            </div>
            <div><p class="tag">문제 제기</p><h3>Pain Card</h3><p>"이런 고민이 있다면"을 한 줄씩 담아 뒤의 해결책이 답으로 읽히게 합니다.</p><code>pain-grid · pain-card · pain-card--detail</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-product-feature">
            <div class="guide-component-demo">
              <div class="section-wrap row" style="padding: 0">
                <div class="feature-copy">
                  <p class="tag">실습 환경</p>
                  <h3>읽고 넘어가는 학습이 아닙니다</h3>
                  <p class="desc">브라우저에서 코드를 쓰고, 실제로 실행하고, 결과로 채점받습니다.</p>
                </div>
                <div class="content-panel bg"><span class="skeleton-block"></span></div>
              </div>
            </div>
            <div><p class="tag">제품 기능</p><h3>Product Feature</h3><p>제품 기능 하나를 좌 설명 · 우 화면으로 눕히는 2단 섹션입니다.</p><code>product-feature · feature-copy · is-sunken</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-start-card">
            <div class="guide-component-demo">
              <ul class="start-grid" style="--start-columns: 2">
                <li>
                  <div class="content-panel start-card surface-glass">
                    <div class="content-panel__intro">
                      <p class="text-label">빠른 구축이 우선이라면</p>
                      <h3>AX Build</h3>
                      <p class="start-desc">20일 안에 업무를 진단하고 운영 가능한 AI Agent를 배포합니다.</p>
                    </div>
                    <a class="btn btn-ghost" href="#components">AX Build 보기</a>
                  </div>
                </li>
                <li>
                  <div class="content-panel start-card surface-glass">
                    <div class="content-panel__intro">
                      <p class="text-label">조직의 내재화가 목표라면</p>
                      <h3>AX Grow</h3>
                      <p class="start-desc">현장 교육과 공동 구축으로 팀의 실행 역량을 남깁니다.</p>
                    </div>
                    <a class="btn btn-ghost" href="#components">AX Grow 보기</a>
                  </div>
                </li>
              </ul>
            </div>
            <div><p class="tag">시작 갈래 카드</p><h3>Start Card</h3><p>content-panel을 "둘 중 어디서 시작할지" 고르는 갈래 카드로 배치합니다.</p><code>start-grid · start-card · start-icon · start-desc</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-statement">
            <div class="guide-component-demo">
              <div class="statement" style="border-radius: var(--radius-lg)">
                <div class="section-wrap col">
                  <div class="statement-inner">
                    <p class="statement-eyebrow">도구만 사면 안 바뀌고, 교육만 해도 안 바뀝니다</p>
                    <h2 class="statement-title">그래서 우리는 <strong>둘을 데이터로 잇습니다</strong></h2>
                  </div>
                </div>
              </div>
            </div>
            <div><p class="tag">강조 띠</p><h3>Statement</h3><p>한 문장만 던지는 화면 전체 폭 강조 구간입니다. 페이지 본문 중간에 하나만 둡니다.</p><code>statement · statement-title · is-ink</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-compare-panel">
            <div class="guide-component-demo">
              <div class="compare-panel">
                <div class="compare-panel__item">
                  <p class="compare-panel__label">Before</p>
                  <h3 class="compare-panel__title">사람이 자료를 모으고<br>보고서를 만듭니다</h3>
                </div>
                <span class="compare-panel__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
                <div class="compare-panel__item is-after">
                  <p class="compare-panel__label">After</p>
                  <h3 class="compare-panel__title">Agent가 수행하고<br>사람은 결과를 확인합니다</h3>
                </div>
              </div>
            </div>
            <div><p class="tag">전후 대비</p><h3>Compare Panel</h3><p>"지금은 이렇지만, 바뀐 뒤에는 이렇습니다"를 좌우로 놓고 보여줍니다.</p><code>compare-panel · compare-panel__item is-after</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-timeline">
            <div class="guide-component-demo">
              <ol class="timeline">
                <li>
                  <span class="timeline__term">Day 1</span>
                  <span class="timeline__marker" aria-hidden="true"></span>
                  <div class="timeline__body">
                    <h3 class="timeline__title">현장 진단</h3>
                    <p class="timeline__desc">실제 업무를 관찰하고 자동화 목표를 찾습니다.</p>
                  </div>
                </li>
                <li>
                  <span class="timeline__term">Day 2~5</span>
                  <span class="timeline__marker" aria-hidden="true"></span>
                  <div class="timeline__body">
                    <h3 class="timeline__title">설계와 목표 합의</h3>
                    <p class="timeline__desc">맡길 범위와 측정할 KPI를 함께 정합니다.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div><p class="tag">단계 흐름</p><h3>Timeline</h3><p>기간이 있는 단계를 위에서 아래로 잇습니다.</p><code>timeline &gt; li</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-cycle">
            <div class="guide-component-demo">
              <ol class="cycle" style="--cycle-columns: 3;">
                <li>
                  <div class="cycle-head"><span class="cycle-no">1</span><p class="cycle-en">Data</p></div>
                  <h3>도구 사용 데이터</h3>
                  <p class="description">누가 무엇을 얼마나 쓰는가</p>
                  <span class="cycle-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                </li>
                <li>
                  <div class="cycle-head"><span class="cycle-no">2</span><p class="cycle-en">Assess</p></div>
                  <h3>역량 진단 반영</h3>
                  <p class="description">데이터가 진단을 정확하게</p>
                  <span class="cycle-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                </li>
                <li class="is-return">
                  <div class="cycle-head"><span class="cycle-no">3</span><p class="cycle-en">Improve</p></div>
                  <h3>도구 활용 극대화</h3>
                  <p class="description">성과가 다시 데이터로</p>
                </li>
              </ol>
            </div>
            <div><p class="tag">순서 · 순환</p><h3>Cycle</h3><p>N단계 순서나 순환을 가로 칸 + 경계 화살표로 보여줍니다.</p><code>cycle &gt; li · cycle-arrow</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-faq-list">
            <div class="guide-component-demo">
              <div class="faq-list">
                <details open="">
                  <summary class="faq-list__question">
                    어떤 업무를 먼저 골라야 하나요?
                    <span class="faq-list__icon" aria-hidden="true"><svg class="icon-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  </summary>
                  <p class="faq-list__answer">반복되고, 결과가 맞았는지 판단할 기준이 분명한 업무가 첫 대상으로 적합합니다.</p>
                </details>
                <details>
                  <summary class="faq-list__question">
                    사내 개발팀이 없어도 가능한가요?
                    <span class="faq-list__icon" aria-hidden="true"><svg class="icon-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  </summary>
                  <p class="faq-list__answer">가능합니다. 구축은 FDE가 담당하고 현업은 결과 확인만 맡습니다.</p>
                </details>
              </div>
            </div>
            <div><p class="tag">질문과 답</p><h3>FAQ List</h3><p>질문을 눌러 답을 펼칩니다. <code>&lt;details&gt;</code> 기본 동작을 그대로 씁니다.</p><code>faq-list &gt; details</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-catalog-board">
            <div class="guide-component-demo">
              <div class="preview-frame preview-frame--flush">
                <div class="tab-catalog" data-catalog-board="">
                  <div class="tab-catalog__tabs">
                    <button class="tab-catalog__tab is-active" type="button" data-catalog-category="guide-common">
                      <span class="tab-catalog__tab-label">공통</span><span class="tab-catalog__tab-count">3</span>
                    </button>
                    <button class="tab-catalog__tab" type="button" data-catalog-category="guide-sales">
                      <span class="tab-catalog__tab-label">영업</span><span class="tab-catalog__tab-count">2</span>
                    </button>
                  </div>
                  <div class="tab-catalog__panels">
                    <div class="tab-catalog__panel is-active" data-catalog-panel="guide-common">
                      <p class="tab-catalog__panel-desc">전 부서가 함께 쓰는 자동화</p>
                      <ul class="item-grid">
                        <li>회의록 자동 작성</li>
                        <li>태스크 관리</li>
                        <li>다국어 번역</li>
                      </ul>
                    </div>
                    <div class="tab-catalog__panel" data-catalog-panel="guide-sales">
                      <p class="tab-catalog__panel-desc">리드 발굴부터 계약까지</p>
                      <ul class="item-grid">
                        <li>고객 데이터 관리</li>
                        <li>제안서 자동 작성</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div><p class="tag">분류별 목록</p><h3>Catalog Board</h3><p>항목이 많고 분류가 여러 개일 때, 실제 관리 화면처럼 한 판에 담습니다.</p><code>tab-catalog · catalog-board.js</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-feature-card">
            <div class="guide-component-demo">
              <div class="feature-card-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr))">
                <article class="feature-card">
                  <div class="feature-card-icon-row">
                    <span class="feature-card-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9C7.06087 9 8.07827 9.42142 8.82841 10.1716C9.57856 10.9217 10 11.9391 10 13V18C10 18.5523 9.55228 19 9 19H3C2.44772 19 2 18.5523 2 18V13C2 11.9391 2.42142 10.9217 3.17157 10.1716C3.92172 9.42142 4.93913 9 6 9Z" fill="var(--color-brand)"></path><path d="M6 8C7.38071 8 8.5 6.88071 8.5 5.5C8.5 4.11929 7.38071 3 6 3C4.61929 3 3.5 4.11929 3.5 5.5C3.5 6.88071 4.61929 8 6 8Z" fill="var(--color-brand)"></path><path d="M21 19H15C14.4477 19 14 18.5523 14 18V13C14 11.9391 14.4214 10.9217 15.1716 10.1716C15.9217 9.42142 16.9391 9 18 9C19.0609 9 20.0783 9.42142 20.8284 10.1716C21.5786 10.9217 22 11.9391 22 13V18C22 18.5523 21.5523 19 21 19Z" fill="var(--color-ink-lighter)"></path><path d="M18 8C19.3807 8 20.5 6.88071 20.5 5.5C20.5 4.11929 19.3807 3 18 3C16.6193 3 15.5 4.11929 15.5 5.5C15.5 6.88071 16.6193 8 18 8Z" fill="var(--color-ink-lighter)"></path></svg>
                    </span>
                  </div>
                  <div class="section-body">
                    <div class="section-body-heading">
                      <p class="section-body-title">핵심 팀</p>
                      <span class="feature-card-arrow" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      </span>
                    </div>
                    <p class="section-body-subtitle">내부에 실행을 이어갈<br>핵심 팀이 있습니다</p>
                    <div class="section-body-description">현장에서 직접 문제를 정의할 담당자를 정합니다.</div>
                  </div>
                </article>
                <article class="feature-card">
                  <div class="feature-card-icon-row">
                    <span class="feature-card-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" fill="var(--color-brand)"></path><path d="M2 17L12 22L22 17" stroke="var(--color-ink-lighter)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12L12 17L22 12" stroke="var(--color-ink-lighter)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </span>
                  </div>
                  <div class="section-body">
                    <div class="section-body-heading">
                      <p class="section-body-title">대상 업무</p>
                      <span class="feature-card-arrow" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      </span>
                    </div>
                    <p class="section-body-subtitle">반복되는 업무가<br>이미 정해져 있습니다</p>
                    <div class="section-body-description">매주 되풀이되는 작업부터 자동화 대상으로 잡습니다.</div>
                  </div>
                </article>
              </div>
            </div>
            <div><p class="tag">기능 · 조건 카드</p><h3>Feature Card</h3><p>아이콘 + 번호 라벨 + 제목 + 설명을 한 장에 담는 기본 카드입니다.</p><code>feature-card-grid · feature-card · section-body</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-feature-points">
            <div class="guide-component-demo">
              <ul class="feature-points">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <span>직무별 현업 시나리오와 실제 데이터</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <span>AI 협업 과정과 산출물 동시 평가</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <span>진단 결과와 이어지는 학습 경로</span>
                </li>
              </ul>
            </div>
            <div><p class="tag">근거 목록</p><h3>Feature Points</h3><p>체크 아이콘 + 한 줄 문장으로 근거·조건·특징을 세우는 목록입니다.</p><code>feature-points &gt; li</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-summary-banner">
            <div class="guide-component-demo">
              <div class="summary-banner dark" style="width: 100%; padding: var(--space-32)">
                <div class="bridge-inner">
                  <div class="bridge-copy">
                    <p class="bridge-title">역량 데이터는, <strong class="brand">도구 활용</strong>의 출발점이 됩니다</p>
                    <p class="bridge-desc">진단 결과가 어떤 에이전트와 자동화가 필요한지 알려줍니다.</p>
                  </div>
                  <a class="btn btn-outline-inverse" href="#components">차별점 보기<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                </div>
              </div>
            </div>
            <div><p class="tag">결론 한 줄 · 다음 페이지</p><h3>Summary Banner</h3><p>섹션의 결론 문장을 본문 폭 안에서 한 줄로 맺습니다.</p><code>summary-banner · dark · bridge-inner · stats-light</code></div>
          </article>

          <article class="guide-v2-component-row" id="c-cta-final">
            <div class="guide-component-demo">
              <div class="cta-final" style="width: 100%; min-height: 0; padding: var(--space-48) var(--space-24); border-radius: var(--radius-lg)">
                <div class="section-wrap col cta-final-inner">
                  <h2 class="cta-final-title" style="font-size: var(--text-heading-32); line-height: var(--leading-heading-32)">다음 분기 교육은 몰입형으로 바꿔보세요</h2>
                  <p class="cta-final-desc">목표와 일정에 맞는 커리큘럼을 제안해 드립니다.</p>
                  <div class="cta-final-actions">
                    <a class="btn btn-primary btn-lg" href="#components">커리큘럼 제안 받기<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                  </div>
                </div>
              </div>
            </div>
            <div><p class="tag">최하단 전환</p><h3>CTA Final</h3><p>모든 페이지의 마지막에 한 번 놓는 전환 유도 섹션입니다.</p><code>cta-final · cta-final-title · cta-final-actions</code></div>
          </article>
        </div>

        <div class="guide-inventory" id="inventory">
          <div class="guide-block-head"><h3>전체 컴포넌트 인벤토리</h3><span>위에서 예시로 보여준 것을 포함한 전체 목록</span></div>
          <div class="guide-v2-table-wrap" style="margin-top: var(--space-20)">
            <table class="guide-v2-table">
              <caption>범용 컴포넌트</caption>
              <thead><tr><th scope="col">컴포넌트</th><th scope="col">설명</th><th scope="col">대표 클래스</th></tr></thead>
              <tbody>
                <tr><th scope="row">Hero</th><td>서브페이지 첫 화면. 보조 정보는 유리 띠 한 장(질문형 · 수치형)으로 넣습니다.</td><td><code>sub-hero · hero-facts</code></td></tr>
                <tr><th scope="row">Button &amp; Link</th><td>주요 행동은 Primary, 보조는 Ghost와 화살표 링크입니다.</td><td><code>btn · link-arrow</code></td></tr>
                <tr><th scope="row">Icon Size</th><td>아이콘 크기는 세 단계와 이미지용 48px 박스만 씁니다.</td><td><code>icon-sm · icon-md · icon-lg · icon-box</code></td></tr>
                <tr><th scope="row">Tag</th><td>콘텐츠 분류와 짧은 상태 라벨입니다.</td><td><code>tag · dark · solid · sm · outline</code></td></tr>
                <tr><th scope="row">Metric Card</th><td>자랑할 성과 수치. 나쁜 수치에는 쓰지 않습니다.</td><td><code>metric-card · stat-reveal.js</code></td></tr>
                <tr><th scope="row">Feature Card</th><td>아이콘 + 제목 + 설명 카드. 기능·조건 3~4개를 나열합니다.</td><td><code>feature-card-grid · feature-card</code></td></tr>
                <tr><th scope="row">Feature Points</th><td>체크 아이콘 + 한 줄 문장 목록.</td><td><code>feature-points &gt; li</code></td></tr>
                <tr><th scope="row">Content Panel</th><td>설명 + 큰 시각 요소를 한 판에 담습니다.</td><td><code>content-panel · --compact</code></td></tr>
                <tr><th scope="row">Start Card</th><td>우열이 아니라 둘 중 하나를 고르는 갈래 카드입니다.</td><td><code>start-grid · start-card</code></td></tr>
                <tr><th scope="row">Compare Panel</th><td>지금 → 바뀐 뒤, 우열이 있는 두 상태를 대비합니다.</td><td><code>compare-panel · is-after</code></td></tr>
                <tr><th scope="row">Pain Card</th><td>"이런 고민이 있다면"을 세우는 문제 제기 카드입니다.</td><td><code>pain-grid · pain-card · --detail</code></td></tr>
                <tr><th scope="row">Choice List</th><td>여러 항목 중 하나를 눌러 들어가는 목록입니다.</td><td><code>choice-list · is-active</code></td></tr>
                <tr><th scope="row">Timeline</th><td>기간·날짜가 붙는 단계를 세로로 잇습니다.</td><td><code>timeline &gt; li</code></td></tr>
                <tr><th scope="row">Cycle</th><td>기간 없는 N단계. 순환의 결론 칸은 <code>is-return</code>입니다.</td><td><code>cycle &gt; li · --cycle-columns</code></td></tr>
                <tr><th scope="row">Catalog Board</th><td>분류가 여러 개인 20개 이상의 목록을 한 판에 담습니다.</td><td><code>tab-catalog · catalog-board.js</code></td></tr>
                <tr><th scope="row">FAQ List</th><td>질문을 눌러 답을 펼칩니다. native <code>details</code>입니다.</td><td><code>faq-list &gt; details</code></td></tr>
                <tr><th scope="row">Outcome Card</th><td>고객사 로고 판 + 성과 문장. 로고는 잘리지 않습니다.</td><td><code>outcome-list · outcome-logo</code></td></tr>
                <tr><th scope="row">Insight Card</th><td>썸네일 + 제목형 콘텐츠(뉴스 · 아티클) 카드입니다.</td><td><code>insight-card</code></td></tr>
                <tr><th scope="row">Assessment Card</th><td>자가진단 · 설문 시작을 유도하는 카드입니다.</td><td><code>assessment-card</code></td></tr>
                <tr><th scope="row">Part Nav</th><td>두 파트를 오가는 캡슐형 세그먼트 내비입니다.</td><td><code>part-nav · --compact</code></td></tr>
                <tr><th scope="row">Preview Frame</th><td>제품 화면을 담는 목업 프레임입니다.</td><td><code>preview-frame · --flush</code></td></tr>
                <tr><th scope="row">Product Mock</th><td>제품 학습·강의 화면 목업 셸. 진입 신호는 쓰는 페이지가 줍니다.</td><td><code>journey-mock · journey-app</code></td></tr>
                <tr><th scope="row">Mock Motion</th><td>목업을 실제로 돌아가는 화면처럼 연출합니다(CSS만).</td><td><code>data-mock-motion</code></td></tr>
                <tr><th scope="row">Skeleton</th><td>콘텐츠 대기 · 자리표시 상태입니다.</td><td><code>skeleton-block · skeleton-line</code></td></tr>
                <tr><th scope="row">Journey Stage</th><td>스크롤에 따라 판 안 내용만 교차 페이드됩니다.</td><td><code>journey-stage · journey-stage.js</code></td></tr>
                <tr><th scope="row">Scenario Switch</th><td>좌측 단계를 읽어 내리면 우측 목업이 그 화면으로 바뀝니다.</td><td><code>scenario-layout · scenario-switch.js</code></td></tr>
                <tr><th scope="row">Statement</th><td>화면 끝까지 닿는 강조 띠. 페이지당 1곳입니다.</td><td><code>statement · is-ink</code></td></tr>
                <tr><th scope="row">Summary Banner</th><td>본문 폭 안의 결론 한 줄. <code>bridge-inner</code>로 다음 페이지에 넘깁니다.</td><td><code>summary-banner · dark</code></td></tr>
                <tr><th scope="row">Product Feature</th><td>제품 기능 하나를 좌 설명 · 우 화면 2단으로 눕힙니다.</td><td><code>product-feature · is-sunken</code></td></tr>
                <tr><th scope="row">Proof Card</th><td>도입 사례를 덱으로 넘겨 보여줍니다.</td><td><code>proof-card · proof-card-slider.js</code></td></tr>
                <tr><th scope="row">CTA Final</th><td>페이지 최하단 전환 유도. 페이지마다 문구만 바꿉니다.</td><td><code>cta-final</code></td></tr>
                <tr><th scope="row">Floating CTA</th><td>hero CTA가 화면 밖으로 나가면 따라붙는 배너입니다.</td><td><code>floating-cta · floating-cta.js</code></td></tr>
              </tbody>
            </table>
          </div>
          <div class="guide-v2-table-wrap" style="margin-top: var(--space-20)">
            <table class="guide-v2-table">
              <caption>공용 프리미티브</caption>
              <thead><tr><th scope="col">컴포넌트</th><th scope="col">설명</th><th scope="col">대표 클래스</th></tr></thead>
              <tbody>
                <tr><th scope="row">Layout</th><td>모든 섹션의 기본 골격과 정렬입니다.</td><td><code>section-wrap · col · row · is-sticky</code></td></tr>
                <tr><th scope="row">Section Body</th><td>카드 안 제목 + 부제 + 설명 묶음입니다.</td><td><code>section-body-title · -subtitle</code></td></tr>
                <tr><th scope="row">Text 유틸리티</th><td>라벨 · 캡션 · 카드 설명 등 보조 텍스트입니다.</td><td><code>text-label · text-caption · description</code></td></tr>
                <tr><th scope="row">Surface</th><td>유리 질감 등 배경 표면 유틸리티입니다.</td><td><code>surface-glass</code></td></tr>
                <tr><th scope="row">Fade Up</th><td>스크롤 진입 모션입니다.</td><td><code>fade-up · is-visible</code></td></tr>
                <tr><th scope="row">Dot Line</th><td>섹션 사이 점선 구분선입니다.</td><td><code>dot-line</code></td></tr>
                <tr><th scope="row">Item Grid</th><td>한 줄 칩을 auto-fill로 깔고 진입 stagger를 갖습니다.</td><td><code>item-grid &gt; li</code></td></tr>
                <tr><th scope="row">Header / GNB</th><td>최상단 내비게이션. 마크업은 <code>partials/header.html</code> 하나입니다.</td><td><code>header · nav-panel</code></td></tr>
                <tr><th scope="row">Site Footer</th><td>전 페이지 공용 푸터. 마크업은 <code>partials/footer.html</code> 하나입니다.</td><td><code>site-footer</code></td></tr>
                <tr><th scope="row">Main Dark</th><td>AXpresso 계열 다크 톤. <code>main</code>에 붙여 토큰을 뒤집습니다.</td><td><code>main-dark</code></td></tr>
              </tbody>
            </table>
          </div>
          <p class="guide-inventory-note">여기에 없는 화면이 필요하면 새로 만들기 전에 먼저 물어봐 주세요. 같은 역할의 컴포넌트를 두 벌 만들면 이후 문구를 고칠 때 두 곳을 고쳐야 합니다.</p>
        </div>
      </section>

      <section class="guide-v2-section" id="motion">
        <div class="guide-v2-section-head">
          <p class="guide-kicker">MOTION</p>
          <h2>현재 화면에 사용 중인 움직임</h2>
          <p>움직임은 정보를 더 잘 읽게 만드는 경우에만 사용합니다. 아래 목록은 메인 페이지에서 실제로 구동되는 모션과 이를 담당하는 컴포넌트입니다.</p>
        </div>
        <div class="guide-v2-motion-list">
          <article class="guide-motion-item" id="m-fade-up">
            <div><p class="tag">스크롤 진입</p><h3>Fade Up</h3></div>
            <p>섹션이 화면에 들어오면 아래에서 자연스럽게 나타납니다. sticky 섹션은 위치가 깨지지 않도록 opacity만 전환합니다.</p>
            <div class="guide-motion-live-preview">
              <div class="section-title text-left fade-up">
                <p class="tag">How it works</p>
                <h2>교육으로 바꾸고,<br>진단으로 증명합니다</h2>
                <p class="desc">핵심은 교육입니다. 그리고 교육이 잘 됐는지는, 앞뒤로 붙는 진단이 숫자로 확인합니다.</p>
              </div>
              <button class="btn btn-ghost" type="button" data-motion-replay=".fade-up">다시 보기</button>
            </div>
            <code>fade-up · fade-up.js</code>
          </article>
          <article class="guide-motion-item" id="m-stat-reveal">
            <div><p class="tag">수치 공개</p><h3>Stat Reveal</h3></div>
            <p>Proof의 수치 카드는 화면 진입 후 왼쪽에서 오른쪽으로 순서대로 나타나고, 숫자가 목표 값까지 카운트됩니다.</p>
            <div class="guide-motion-live-preview">
              <div class="summary-banner stats-light">
                <div class="summary-banner-stats" data-stat-reveal="">
                  <article class="metric-card">
                    <div class="metric-card__value"><span class="num" data-target="39355">0</span><span class="unit">명</span></div>
                    <p class="metric-card__label text-label">누적 수강</p>
                    <div class="metric-card__visual" aria-hidden="true"><img class="metric-card__icon" src="/images/icons/service/ic_barChart.svg" alt=""></div>
                  </article>
                  <article class="metric-card">
                    <div class="metric-card__value"><span class="num" data-target="1531">0</span><span class="unit">회</span></div>
                    <p class="metric-card__label text-label">교육 운영</p>
                    <div class="metric-card__visual" aria-hidden="true"><img class="metric-card__icon" src="/images/icons/service/ic_barChart.svg" alt=""></div>
                  </article>
                  <article class="metric-card">
                    <div class="metric-card__value"><span class="num" data-target="80">0</span><span class="unit">%</span></div>
                    <p class="metric-card__label text-label">재구매율</p>
                    <div class="metric-card__visual" aria-hidden="true"><img class="metric-card__icon" src="/images/icons/service/ic_barChart.svg" alt=""></div>
                  </article>
                </div>
              </div>
            </div>
            <code>metric-card · stat-reveal.js</code>
          </article>
          <article class="guide-motion-item" id="m-proof-card">
            <div><p class="tag">카드 덱</p><h3>Proof Card Slider</h3></div>
            <p>고객 사례 카드를 5초마다 자동으로 넘기고, 좌우 버튼으로도 넘길 수 있습니다.</p>
            <div class="guide-motion-live-preview">
              <div class="proof-card-stage">
                <div class="proof-card-deck" data-proof-deck="">
                  <button type="button" class="proof-card-nav" aria-label="다른 사례 보기"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                  <div class="proof-card-deck-list">
                    <article class="proof-card">
                      <img src="/images/clients/dark/logo-cj.svg" alt="CJ올리브네트웍스 로고">
                      <h3>검증 비용이 1/3로 줄어든 채용</h3>
                      <blockquote>"서류 합격 150명을 실기 평가로 검증해 30명, 최종 3명을 선발했습니다.<br>채용 검증에 들던 비용은 1/3로 줄었습니다."</blockquote>
                      <cite>CJ올리브네트웍스 | SkillCertify 채용 검증</cite>
                    </article>
                    <article class="proof-card">
                      <img src="/images/clients/dark/logo-translink.svg" alt="트랜스링크인베스트먼트 로고">
                      <h3>심사 소요 시간 3~5일 → 1시간</h3>
                      <blockquote>"3~5일 걸리던 기업 실사가 1시간으로 줄었습니다.<br>의사결정 속도가 완전히 달라졌습니다."</blockquote>
                      <cite>트랜스링크인베스트먼트 | 박희덕 대표</cite>
                    </article>
                  </div>
                  <button type="button" class="proof-card-nav" aria-label="다음 사례 보기"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                </div>
              </div>
            </div>
            <code>proof-card · proof-card-slider.js</code>
          </article>
          <article class="guide-motion-item" id="m-journey-stage">
            <div><p class="tag">스크롤 연동</p><h3>Journey Stage</h3></div>
            <p>PART 1 교육과 PART 2 진단은 스크롤 위치에 맞춰 왼쪽 설명과 오른쪽 제품 화면을 함께 교체합니다.</p>
            <div class="guide-motion-static-preview">
              <div class="content-panel content-panel--compact surface-glass">
                <div class="content-panel__item journey-step is-active">
                  <div class="content-panel__intro">
                    <p class="text-label brand">SkillPath · 온라인 이러닝</p>
                    <p class="section-body-title">각자의 속도로, 기초부터 탄탄하게</p>
                  </div>
                  <div class="content-panel__visual">
                    <div class="preview-frame preview-frame--quiet journey-mock">
                      <div class="journey-mock-head">
                        <span class="journey-mock-title">업무 자동화 기초 과정</span>
                        <span class="journey-mock-badge">수강 중</span>
                      </div>
                      <div class="journey-mock-progress">
                        <div class="journey-mock-progress-bar"><span style="width: 68%"></span></div>
                        <span class="text-caption strong">68%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <code>journey-stage · journey-track · journey-viewport · journey-step · journey-stage.js</code>
          </article>
          <article class="guide-motion-item" id="m-difference">
            <div><p class="tag">카드 나열</p><h3>Difference Blocks</h3></div>
            <p>PART 3의 세 가지 차이를 카드 세 장에 나눠 담습니다. 카드마다 제품 화면이 먼저 오고 그 아래 제목·설명이 화면을 글로 풉니다.</p>
            <div class="guide-motion-static-preview">
              <ul class="difference-blocks">
                <li>
                  <div class="preview-frame preview-frame--flush">
                    <div class="preview-frame__bar">
                      <span class="preview-frame__dots"><i></i><i></i><i></i></span>
                    </div>
                    <div class="difference-screen">
                      <div class="difference-screen-body">
                        <div class="difference-card"></div>
                        <div class="difference-card"></div>
                        <div class="difference-card"></div>
                      </div>
                    </div>
                  </div>
                  <div class="difference-block-head">
                    <h3 class="stage-step-title">정량적 관리</h3>
                    <p class="desc">교육 전후 역량을 같은 문항·같은 기준으로 두 번 잽니다.</p>
                  </div>
                </li>
              </ul>
            </div>
            <code>difference-blocks · difference-block-head</code>
          </article>
          <article class="guide-motion-item" id="m-header">
            <div><p class="tag">헤더 상태</p><h3>Header &amp; Menu</h3></div>
            <p>스크롤을 내리면 헤더가 숨고 올리면 다시 나타납니다. 메뉴는 hover·키보드 focus에서 패널을 엽니다.</p>
            <div class="guide-motion-static-preview">
              <div class="preview-frame preview-frame--quiet">
                <button class="nav-trigger" type="button" aria-expanded="true">역량 진단·교육
                  <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
                <div class="skeleton-stack"><span class="skeleton-line"></span><span class="skeleton-line is-short"></span></div>
              </div>
            </div>
            <code>header · header-scroll.js · nav-menu.js</code>
          </article>
          <article class="guide-motion-item" id="m-marquee">
            <div><p class="tag">연속 흐름</p><h3>Client Marquee</h3></div>
            <p>Hero의 고객사 로고는 끊기지 않고 옆으로 흐릅니다. 움직임 줄이기 설정에서는 정지합니다.</p>
            <div class="guide-motion-static-preview">
              <div class="hero-clients-marquee">
                <ul class="hero-clients-track">
                  <li><img src="/images/clients/dark/logo_4_현대_(h36).svg" alt="현대"></li>
                  <li><img src="/images/clients/dark/logo_5_벡터_(h36).svg" alt="벡터"></li>
                  <li><img src="/images/clients/dark/logo_6_서강대_(h36).svg" alt="서강대"></li>
                  <li><img src="/images/clients/dark/logo_1_삼성_(h36).svg" alt="삼성"></li>
                  <li><img src="/images/clients/dark/logo_2_기획재정부_(h36).svg" alt="기획재정부"></li>
                  <li><img src="/images/clients/dark/logo_3_롯데_(h36).svg" alt="롯데"></li>
                </ul>
                <ul class="hero-clients-track" aria-hidden="true">
                  <li><img src="/images/clients/dark/logo_4_현대_(h36).svg" alt=""></li>
                  <li><img src="/images/clients/dark/logo_5_벡터_(h36).svg" alt=""></li>
                  <li><img src="/images/clients/dark/logo_6_서강대_(h36).svg" alt=""></li>
                  <li><img src="/images/clients/dark/logo_1_삼성_(h36).svg" alt=""></li>
                  <li><img src="/images/clients/dark/logo_2_기획재정부_(h36).svg" alt=""></li>
                  <li><img src="/images/clients/dark/logo_3_롯데_(h36).svg" alt=""></li>
                </ul>
              </div>
            </div>
            <code>hero-clients-marquee · hero.css</code>
          </article>
        </div>
        <div class="guide-callout"><strong>접근성</strong><span>모든 자동 모션은 <code>prefers-reduced-motion</code> 환경에서 멈추거나 즉시 표시됩니다. 새 모션도 같은 기준을 따라야 합니다.</span></div>
      </section>

      <section class="guide-v2-section" id="rules">
        <div class="guide-v2-section-head">
          <p class="guide-kicker">RULES</p>
          <h2>이름과 상태를 붙이는 규칙</h2>
          <p>같은 것에는 같은 이름을 씁니다. 아래는 이미 코드에 정착된 규칙이라, 새 화면을 만들 때도 그대로 따릅니다.</p>
        </div>

        <div class="guide-v2-subhead" id="rules-class"><h3>클래스 이름</h3><p>두 방식이 역할에 따라 갈립니다</p></div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>클래스 네이밍 규칙</caption>
            <thead><tr><th scope="col">상황</th><th scope="col">규칙</th><th scope="col">예시</th></tr></thead>
            <tbody>
              <tr><th scope="row">여러 페이지가 쓰는 공용 컴포넌트</th><td>밑줄 두 개로 부분을 구분합니다.</td><td><code>metric-card__value · choice-list__item</code></td></tr>
              <tr><th scope="row">한 페이지의 특정 섹션 전용</th><td>하이픈으로만 이어 씁니다.</td><td><code>hero-banner-text · proof-card-nav</code></td></tr>
              <tr><th scope="row">변형(색·크기 차이)</th><td>클래스를 나란히 붙입니다. 새 이름을 만들지 않습니다.</td><td><code>summary-banner dark · text-label brand</code></td></tr>
            </tbody>
          </table>
        </div>

        <div class="guide-v2-subhead" id="rules-state"><h3>상태와 동작</h3><p>스타일과 기능을 분리합니다</p></div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>상태·동작 규칙</caption>
            <thead><tr><th scope="col">상황</th><th scope="col">규칙</th><th scope="col">예시</th></tr></thead>
            <tbody>
              <tr><th scope="row">화면이 바뀌는 상태</th><td><code>is-</code>로 시작합니다. 이미 있는 이름을 먼저 찾아 씁니다.</td><td><code>is-active · is-visible · is-open · is-current</code></td></tr>
              <tr><th scope="row">기능을 붙이는 자리</th><td><code>data-</code>로 표시합니다. 스크립트가 이 표시를 찾아 동작을 겁니다.</td><td><code>data-feature-cycle · data-stat-reveal</code></td></tr>
              <tr><th scope="row">움직임을 넣었다면</th><td>움직임 줄이기 설정에서 멈추도록 항상 함께 처리합니다.</td><td><code>prefers-reduced-motion</code></td></tr>
              <tr><th scope="row">PC·모바일 줄바꿈 위치가 다를 때</th><td>class가 아니라 data 속성으로 표시합니다.</td><td><code>&lt;br data-break="desktop"&gt;</code></td></tr>
            </tbody>
          </table>
        </div>

        <div class="guide-v2-subhead" id="rules-breakpoint"><h3>화면 폭 기준</h3><p>두 지점만 씁니다</p></div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>브레이크포인트</caption>
            <thead><tr><th scope="col">기준</th><th scope="col">변화</th></tr></thead>
            <tbody>
              <tr><th scope="row">900px 이하</th><td>좌우 2단 배치가 위아래 1단으로 접힙니다.</td></tr>
              <tr><th scope="row">720px 이하</th><td>카드 안의 요소가 다시 배치됩니다.</td></tr>
              <tr><th scope="row">560px 이하</th><td>타이포·그리드 열 수가 추가로 한 단 줄어듭니다.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="guide-inline-note">
          <strong>지금은 데스크톱(1440px) 기준을 확정하는 단계입니다.</strong>
          <span>요청하지 않은 화면 폭 대응을 미리 넣지 않습니다. 새로운 폭 기준을 만들지 말고 위 세 지점을 사용합니다.</span>
        </div>
      </section>

      <section class="guide-v2-section" id="patterns">
        <div class="guide-v2-section-head">
          <p class="guide-kicker">PATTERNS</p>
          <h2>화면을 만들 때의 순서</h2>
          <p>처음부터 예쁜 화면을 만들려고 하기보다, 정보의 순서와 필요한 패턴을 먼저 고르면 훨씬 빠릅니다.</p>
        </div>
        <ol class="guide-steps">
          <li><span>01</span><div><h3>무엇을 가장 먼저 보여줄지 정합니다</h3><p>이 화면에서 사용자가 가장 먼저 알아야 할 한 문장을 고릅니다.</p></div></li>
          <li><span>02</span><div><h3>내용에 맞는 섹션 배치를 고릅니다</h3><p>소개형, 좌우형, 스크롤 고정형 중 정보의 흐름에 가장 맞는 방식을 선택합니다.</p></div></li>
          <li><span>03</span><div><h3>기존 컴포넌트에 내용을 넣습니다</h3><p>새 카드부터 만들기보다 Metric, Choice List, Preview 같은 공통 디자인을 먼저 사용합니다.</p></div></li>
          <li><span>04</span><div><h3>색상은 강조가 필요한 한 곳에만 씁니다</h3><p>브랜드 블루는 행동을 유도하거나 중요한 변화를 보여줄 때만 사용합니다.</p></div></li>
        </ol>
      </section>

      <section class="guide-v2-section" id="mockup-motion">
        <div class="guide-v2-section-head">
          <p class="guide-kicker">MOCKUP MOTION</p>
          <h2>목업을 살아 있는 화면으로</h2>
          <p>제품 화면을 보여줄 때, 정지된 그림 대신 실제로 돌아가는 화면처럼 연출합니다. 여섯 가지 연출은 부모에 <code>data-mock-motion</code> 값만 바꿔 고릅니다.</p>
        </div>
        <div class="guide-v2-motion-list">
          <article class="guide-motion-item" id="mm-focus">
            <div><p class="tag">A · 포커스</p><h3>현재 항목 확대 (focus)</h3></div>
            <p>목록의 나머지 행은 스켈레톤으로 흐려지고, 지금 학습 중인 행 하나만 1.055배로 떠올라 텍스트가 드러납니다.</p>
            <div class="guide-motion-live-preview">
                <div class="preview-frame mock-screen" data-mock-motion="focus" aria-hidden="true">
                  <div class="journey-mock-head">
                    <span class="journey-mock-title">업무 자동화 기초 과정</span>
                    <span class="journey-mock-badge">수강 중</span>
                  </div>
                  <div class="journey-mock-progress">
                    <div class="journey-mock-progress-bar"><span style="width: 68%"></span></div>
                    <span class="text-caption strong">68%</span>
                  </div>
                  <ul class="journey-mock-list">
                    <li class="journey-mock-item is-done is-quiet">
                      <span class="journey-mock-check"></span>
                      <span class="skeleton-line is-shimmer" style="width: 148px"></span>
                      <span style="flex: 1"></span>
                    </li>
                    <li class="journey-mock-item is-done is-quiet">
                      <span class="journey-mock-check"></span>
                      <span class="skeleton-line is-shimmer" style="width: 186px; animation-delay: .3s"></span>
                      <span style="flex: 1"></span>
                    </li>
                    <li class="journey-mock-item is-current is-focus">
                      <span class="journey-mock-check"></span>
                      <span class="journey-mock-item-name">반복 업무 자동화 실습</span>
                      <span class="text-caption">24분</span>
                    </li>
                    <li class="journey-mock-item is-quiet">
                      <span class="journey-mock-check"></span>
                      <span class="skeleton-line is-shimmer" style="width: 132px; animation-delay: .6s"></span>
                      <span style="flex: 1"></span>
                    </li>
                  </ul>
                </div>
            </div>
            <code>data-mock-motion="focus" · is-quiet · is-focus · is-shimmer</code>
          </article>
          <article class="guide-motion-item" id="mm-replay">
            <div><p class="tag">B · 리플레이</p><h3>브라우저 화면 확대 (replay)</h3></div>
            <p>주소창과 사이드바까지 갖춘 실제 제품 화면입니다. 커서가 카드로 이동하면 화면 전체가 1.42배로 밀고 들어갑니다.</p>
            <div class="guide-motion-live-preview">
                <div class="preview-frame preview-frame--flush" data-mock-motion="replay" aria-hidden="true">
                  <div class="preview-frame__bar">
                    <span class="preview-frame__dots"><i></i><i></i><i></i></span>
                    <span class="text-caption">skillpath.codepresso.io</span>
                  </div>
                  <div class="mock-replay-viewport">
                    <div class="mock-replay-stage is-camera">
                      <div class="mock-replay-aside">
                        <span class="skeleton-line" style="width: 62px"></span>
                        <span class="text-caption strong">내 학습</span>
                        <span class="skeleton-line" style="width: 54px"></span>
                        <span class="skeleton-line" style="width: 68px"></span>
                      </div>
                      <div class="mock-replay-main">
                        <span class="skeleton-line" style="width: 118px"></span>
                        <div class="mock-replay-grid">
                        <article class="journey-mock-item is-focus" style="flex-direction: column; align-items: stretch; gap: var(--space-10); background: var(--color-surface); border: 1px solid var(--color-line)">
                          <span class="journey-mock-item-name" style="flex: none">업무 자동화 기초</span>
                          <span class="journey-mock-progress-bar"><span style="width: 68%"></span></span>
                          <span class="text-caption strong">68% 이수</span>
                        </article>
                        <article class="journey-mock-item is-quiet" style="flex-direction: column; align-items: stretch; gap: var(--space-10); background: var(--color-surface); border: 1px solid var(--color-line)">
                          <span class="skeleton-line" style="width: 76px"></span>
                          <span class="journey-mock-progress-bar"><span style="width: 34%"></span></span>
                          <span class="skeleton-line" style="width: 40px"></span>
                        </article>
                        <article class="journey-mock-item is-quiet" style="flex-direction: column; align-items: stretch; gap: var(--space-10); background: var(--color-surface); border: 1px solid var(--color-line)">
                          <span class="skeleton-line" style="width: 88px"></span>
                          <span class="journey-mock-progress-bar"><span style="width: 52%"></span></span>
                          <span class="skeleton-line" style="width: 40px"></span>
                        </article>
                        <article class="journey-mock-item is-quiet" style="flex-direction: column; align-items: stretch; gap: var(--space-10); background: var(--color-surface); border: 1px solid var(--color-line)">
                          <span class="skeleton-line" style="width: 70px"></span>
                          <span class="journey-mock-progress-bar"><span style="width: 18%"></span></span>
                          <span class="skeleton-line" style="width: 40px"></span>
                        </article>
                        </div>
                      </div>
                    </div>
                    <svg class="mock-replay-cursor is-cursor" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 3l14 8.5-6.2 1.4L10 19.5 5 3z" fill="var(--color-ink-heaviest)" stroke="var(--color-surface)" stroke-width="1.4" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>
            </div>
            <code>data-mock-motion="replay" · is-camera · is-cursor · is-focus</code>
          </article>
          <article class="guide-motion-item" id="mm-deck">
            <div><p class="tag">C · 카드 덱</p><h3>카드가 넘어간다 (deck)</h3></div>
            <p>레슨 카드가 덱처럼 쌓여 있다가 맨 앞 카드가 좌상단으로 빠지고, 뒤 카드가 앞으로 당겨집니다.</p>
            <div class="guide-motion-live-preview">
                <div class="preview-frame mock-deck" data-mock-motion="deck" aria-hidden="true">
                  <div class="journey-mock-head">
                    <span class="journey-mock-title">업무 자동화 기초 과정</span>
                    <span class="journey-mock-badge">3 / 12</span>
                  </div>
                  <div class="mock-deck-stage">
                    <article class="mock-deck-card is-deck-back">
                      <span class="skeleton-line" style="width: 64px"></span>
                      <span class="skeleton-line" style="width: 176px"></span>
                      <span class="journey-mock-progress-bar"><span style="width: 20%"></span></span>
                    </article>
                    <article class="mock-deck-card is-deck-mid">
                      <span class="skeleton-line" style="width: 72px"></span>
                      <span class="skeleton-line" style="width: 198px"></span>
                      <span class="journey-mock-progress-bar"><span style="width: 40%"></span></span>
                    </article>
                    <article class="mock-deck-card is-deck-front">
                      <div class="mock-deck-card-head">
                        <span class="text-label brand">LESSON 03</span>
                        <span class="journey-mock-badge is-pop">완료</span>
                      </div>
                      <p class="section-body-title">반복 업무 자동화 실습</p>
                      <span class="journey-mock-progress-bar"><span style="width: 100%"></span></span>
                      <span class="text-caption strong">24분 · 학습 완료</span>
                    </article>
                  </div>
                </div>
            </div>
            <code>data-mock-motion="deck" · is-deck-front · is-deck-mid · is-deck-back · is-pop</code>
          </article>
          <article class="guide-motion-item" id="mm-detail">
            <div><p class="tag">D · 상세 팝인</p><h3>고르면 상세가 열린다 (detail)</h3></div>
            <p>좌측 목록은 스켈레톤으로 두고, 한 항목이 선택되면 우측 상세 패널이 밀려 들어옵니다.</p>
            <div class="guide-motion-live-preview">
                <div class="preview-frame preview-frame--flush mock-detail" data-mock-motion="detail" aria-hidden="true">
                  <div class="mock-detail-aside">
                    <span class="text-caption">커리큘럼</span>
                    <ul class="mock-detail-list">
                      <li class="mock-detail-row">
                        <span class="journey-mock-check is-done"></span>
                        <span class="skeleton-line" style="width: 118px"></span>
                      </li>
                      <li class="mock-detail-row">
                        <span class="journey-mock-check is-done"></span>
                        <span class="skeleton-line" style="width: 96px"></span>
                      </li>
                      <li class="mock-detail-row is-selected">
                        <span class="journey-mock-check" style="border-color: var(--color-brand)"></span>
                        <span class="journey-mock-item-name">반복 업무 자동화</span>
                      </li>
                      <li class="mock-detail-row">
                        <span class="journey-mock-check"></span>
                        <span class="skeleton-line" style="width: 108px"></span>
                      </li>
                      <li class="mock-detail-row">
                        <span class="journey-mock-check"></span>
                        <span class="skeleton-line" style="width: 84px"></span>
                      </li>
                    </ul>
                  </div>
                  <div class="mock-detail-panel is-panel">
                    <div class="mock-detail-head">
                      <span class="mock-detail-gauge">
                        <svg viewBox="0 0 64 64" aria-hidden="true">
                          <circle cx="32" cy="32" r="28" fill="none" stroke="var(--color-brand-tint-2)" stroke-width="7"></circle>
                          <circle class="is-gauge" cx="32" cy="32" r="28" fill="none" stroke="var(--color-brand)" stroke-width="7" stroke-linecap="round" stroke-dasharray="176" stroke-dashoffset="56"></circle>
                        </svg>
                        <b class="text-caption strong">68%</b>
                      </span>
                      <span class="mock-detail-head-body">
                        <p class="section-body-title">반복 업무 자동화 실습</p>
                        <span class="skeleton-line" style="width: 152px"></span>
                      </span>
                    </div>
                    <ul class="journey-mock-list">
                      <li class="journey-mock-item is-stagger">
                        <span class="journey-mock-check is-done"></span>
                        <span class="journey-mock-item-name">실습 과제 제출</span>
                        <span class="text-caption strong">완료</span>
                      </li>
                      <li class="journey-mock-item is-stagger" style="animation-delay: .12s">
                        <span class="journey-mock-check"></span>
                        <span class="skeleton-line" style="width: 140px"></span>
                        <span style="flex: 1"></span>
                      </li>
                      <li class="journey-mock-item is-stagger" style="animation-delay: .24s">
                        <span class="journey-mock-check"></span>
                        <span class="skeleton-line" style="width: 116px"></span>
                        <span style="flex: 1"></span>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            <code>data-mock-motion="detail" · is-selected · is-panel · is-gauge · is-stagger</code>
          </article>
          <article class="guide-motion-item" id="mm-ticker">
            <div><p class="tag">E · 실시간 티커</p><h3>숫자가 갱신된다 (ticker)</h3></div>
            <p>관리자 시점의 대시보드입니다. 핵심 수치가 오버슈트로 튀어나오고, 막대가 바닥에서 자랍니다.</p>
            <div class="guide-motion-live-preview">
                <div class="preview-frame mock-screen mock-ticker" data-mock-motion="ticker" aria-hidden="true">
                  <div class="journey-mock-head">
                    <span class="journey-mock-title">이수 현황 대시보드</span>
                    <span class="journey-mock-badge is-live"><i class="is-pulse"></i>실시간</span>
                  </div>
                  <div class="mock-ticker-stats">
                    <article>
                      <span class="skeleton-line" style="width: 46px"></span>
                      <b class="is-pop">248<em>명</em></b>
                    </article>
                    <article>
                      <span class="skeleton-line" style="width: 52px"></span>
                      <b class="is-pop is-current" style="animation-delay: .1s">68<em>%</em></b>
                    </article>
                    <article>
                      <span class="skeleton-line" style="width: 40px"></span>
                      <b class="is-pop" style="animation-delay: .2s">12<em>개</em></b>
                    </article>
                  </div>
                  <div class="mock-ticker-chart">
                      <span class="is-bar" style="--mock-bar-h: 42%; animation-delay: 0.36s"></span>
                      <span class="is-bar" style="--mock-bar-h: 58%; animation-delay: 0.24s"></span>
                      <span class="is-bar" style="--mock-bar-h: 36%; animation-delay: 0s"></span>
                      <span class="is-bar" style="--mock-bar-h: 74%; animation-delay: 0.12s"></span>
                      <span class="is-bar" style="--mock-bar-h: 62%; animation-delay: 0.48s"></span>
                      <span class="is-bar is-current" style="--mock-bar-h: 88%; animation-delay: 0.42s"></span>
                      <span class="is-bar" style="--mock-bar-h: 54%; animation-delay: 0s"></span>
                      <span class="is-bar" style="--mock-bar-h: 30%; animation-delay: 0.18s"></span>
                  </div>
                  <ul class="journey-mock-list">
                    <li class="journey-mock-item is-feed">
                      <span class="journey-mock-avatar">이</span>
                      <span class="journey-mock-item-name">이수 완료 · 업무 자동화 기초</span>
                      <span class="text-caption strong">방금</span>
                    </li>
                    <li class="journey-mock-item">
                      <span class="journey-mock-check"></span>
                      <span class="skeleton-line" style="width: 224px"></span>
                      <span style="flex: 1"></span>
                    </li>
                  </ul>
                </div>
            </div>
            <code>data-mock-motion="ticker" · is-pop · is-bar · is-feed · is-pulse</code>
          </article>
          <article class="guide-motion-item" id="mm-stage">
            <div><p class="tag">F · 단계 진행</p><h3>단계가 하나씩 켜진다 (stage)</h3></div>
            <p>나란히 놓인 단계 칸이 좌에서 우로 하나씩 등장하고, 칸과 칸 사이의 화살표가 다음으로 넘깁니다. 무한 반복이 아니라 한 번만 재생됩니다.</p>
            <div class="guide-motion-live-preview">
              <div class="difference-screen is-active" aria-hidden="true">
                <div class="difference-screen-body is-library" data-mock-motion="stage">
                  <div class="difference-card is-step" style="--mock-step: 0">
                    <div class="difference-step-head">
                      <span class="difference-step-no">1</span>
                      <span class="difference-card-label">공유</span>
                    </div>
                    <span class="difference-step-desc">한 팀이 자산을 올린다</span>
                    <ul class="difference-stack">
                      <li class="difference-asset is-cue">
                        <span class="difference-asset-icon"></span>
                        <span class="difference-asset-body">
                          <span class="skeleton-line is-shimmer" style="width: 92px"></span>
                        </span>
                      </li>
                    </ul>
                    <span class="difference-flow-arrow is-flow">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                  </div>
                  <div class="difference-card is-step" style="--mock-step: 1">
                    <div class="difference-step-head">
                      <span class="difference-step-no">2</span>
                      <span class="difference-card-label">축적</span>
                    </div>
                    <span class="difference-step-desc">검증된 것만 쌓인다</span>
                    <ul class="difference-stack">
                      <li class="difference-asset is-cue" style="--mock-cue-delay: .1s">
                        <span class="difference-asset-icon"></span>
                        <span class="difference-asset-body">
                          <span class="skeleton-line is-shimmer" style="width: 86px"></span>
                        </span>
                      </li>
                      <li class="difference-asset is-quiet is-cue" style="--mock-cue-delay: .22s">
                        <span class="difference-asset-icon"></span>
                        <span class="difference-asset-body">
                          <span class="skeleton-line is-shimmer" style="width: 64px"></span>
                        </span>
                      </li>
                    </ul>
                    <span class="difference-flow-arrow is-flow">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                  </div>
                  <div class="difference-card is-step" style="--mock-step: 2">
                    <div class="difference-step-head">
                      <span class="difference-step-no">3</span>
                      <span class="difference-card-label">확산</span>
                    </div>
                    <span class="difference-step-desc">조직 전체로 퍼진다</span>
                    <div class="difference-spread-map">
                      <span class="difference-spread-wave"></span>
                      <span class="difference-spread-core is-cue">원본 팀</span>
                      <span class="difference-spread-node is-cue" style="--mock-cue-delay: .14s; --node-x: 76%; --node-y: 16%">A본부</span>
                      <span class="difference-spread-node is-cue" style="--mock-cue-delay: .26s; --node-x: 22%; --node-y: 84%">B본부</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <code>data-mock-motion="stage" · is-step · is-cue · is-flow · --mock-step</code>
          </article>
          <article class="guide-motion-item" id="mm-run">
            <div><p class="tag">G · 작업 처리</p><h3>작업이 자동으로 처리된다 (run)</h3></div>
            <p>작업 큐의 항목을 Agent가 위에서부터 하나씩 처리하고, 마지막 1건만 사람 확인에서 멈춥니다. <code>stage</code>와 같이 한 번만 재생됩니다.</p>
            <p class="guide-inventory-note">움직임만 공용(<code>mock-motion.css</code>)이고 작업 큐 뼈대는 <code>pages/ax-build.css</code>가 갖고 있어, 살아 있는 예시는 <b>ax-build.html 01번 섹션</b>에서 봅니다.</p>
            <code>data-mock-motion="run" · is-task · is-line · is-hold · --mock-run-step</code>
          </article>
        </div>
        <div class="guide-callout"><strong>고르는 기준</strong><span>생기만 더할 때는 <code>focus</code>, 실제 서비스 화면임을 보여야 할 때는 <code>replay</code>, 스크롤 중 눈에 띄어야 할 때는 <code>deck</code>, 정보를 함께 전달해야 할 때는 <code>detail</code>, 숫자로 설득할 때는 <code>ticker</code>, 단계가 순서대로 진행되는 것을 보여줄 때는 <code>stage</code>, 자동 처리가 어디서 멈추는지 보일 때는 <code>run</code>을 씁니다.</span></div>
      </section>

      <section class="guide-v2-section guide-v2-usage" id="usage">
        <p class="guide-kicker">COMPONENT USAGE</p>
        <h2>AI에게 이렇게 요청하면 됩니다.</h2>
        <p class="guide-v2-usage-intro">새 화면을 만들 때 처음부터 디자인을 설명하지 않아도 됩니다. 위에서 확인한 컴포넌트 이름과 넣을 내용, 배치 방식만 함께 전달하세요. 아래 10~12번은 이 원칙을 다른 상황(Nuxt 전환·타 프로젝트 이식·스킬 구조 이해)에 확장한 것입니다.</p>
        <div class="guide-v2-prompt-grid">
          <article class="guide-v2-prompt-card">
            <p class="tag">요청에 꼭 넣을 정보</p>
            <ol>
              <li><b>사용할 컴포넌트</b><span>예: Metric Card, Choice List, Preview Frame</span></li>
              <li><b>배치 방식</b><span>예: section-wrap row is-sticky</span></li>
              <li><b>실제 콘텐츠</b><span>제목, 설명, 버튼 문구, 수치, 이미지</span></li>
            </ol>
          </article>
          <article class="guide-v2-prompt-card is-example">
            <p class="tag">그대로 복사해 쓰는 요청 예시</p>
            <p class="guide-v2-prompt-text">"<strong>Choice List</strong>와 <strong>Preview Frame</strong>을 활용한 교육 프로그램 소개 섹션을 만들어줘. <strong>section-wrap row is-sticky</strong> 구조로, 왼쪽에는 '우리 조직에 맞는 AI 교육'이라는 제목과 세 개의 프로그램 목록을 넣고, 오른쪽에는 각 프로그램의 화면 예시를 보여줘. 기존 컴포넌트 CSS와 hover 효과를 그대로 사용해줘."</p>
          </article>
        </div>
      </section>

      <section class="guide-v2-section" id="nuxt">
        <div class="guide-v2-section-head">
          <p class="guide-kicker">NUXT MIGRATION</p>
          <h2>Nuxt로 변환하는 방법</h2>
          <p>이 프로젝트는 순수 HTML/CSS/바닐라 JS라 Nuxt 공식 마이그레이션 가이드가 없습니다. 대신 이 프로젝트의 구조(partials, css/@layer 아키텍처, 컴포넌트 단위 CSS, js 훅 패턴)에서 논리적으로 도출한 변환 원칙입니다.</p>
        </div>

        <div class="guide-v2-subhead" id="nuxt-mapping"><h3>섹션 → Vue 컴포넌트 매핑</h3><p>클래스 단위가 곧 컴포넌트 경계가 됩니다</p></div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>HTML 구조 → Nuxt 구조 매핑</caption>
            <thead><tr><th scope="col">현재(정적 HTML)</th><th scope="col">Nuxt 대응</th><th scope="col">원칙</th></tr></thead>
            <tbody>
              <tr><th scope="row">범용 컴포넌트(A그룹, <code>css/components/ui/*.css</code>)</th><td><code>components/ui/MetricCard.vue</code> 등</td><td>대표 클래스 하나 = Vue 컴포넌트 하나. props로 슬롯 데이터(수치·라벨)를 받는다</td></tr>
              <tr><th scope="row">페이지 전용 섹션(C~F그룹, <code>css/pages/*.css</code>)</th><td><code>components/sections/{Page}{Section}.vue</code></td><td>섹션 스코프 클래스(<code>.skills .features</code>)를 컴포넌트 파일 경계로 그대로 옮긴다</td></tr>
              <tr><th scope="row"><code>section-wrap col/row</code> 등 레이아웃 프리미티브</th><td><code>components/layout/SectionWrap.vue</code></td><td>slot 기반 래퍼. col/row/is-sticky는 prop variant로</td></tr>
              <tr><th scope="row">한 페이지가 여러 <code>section</code>을 이어 붙인 구조</th><td>페이지 컴포넌트가 섹션 컴포넌트를 순서대로 나열</td><td>섹션 순서 = 마크업 순서를 그대로 유지, 새로 재배치하지 않는다</td></tr>
            </tbody>
          </table>
        </div>

        <div class="guide-v2-subhead" id="nuxt-tokens"><h3>토큰 이관</h3><p>tokens.css는 그대로 전역 CSS로</p></div>
        <div class="guide-v2-prose">
          <p><code>css/tokens.css</code>의 <code>:root</code> 커스텀 프로퍼티는 문법 변경 없이 그대로 옮길 수 있습니다. Nuxt의 <code>assets/css/tokens.css</code>에 두고 <code>nuxt.config.ts</code>의 <code>css</code> 배열에 등록하면 전역에서 <code>var(--color-brand)</code>를 그대로 씁니다. Sass 변수로 바꾸지 않습니다 — 런타임에 다크모드 리매핑(<code>main-dark.css</code>)이 CSS 커스텀 프로퍼티 재정의 방식에 의존하기 때문입니다.</p>
        </div>

        <div class="guide-v2-subhead" id="nuxt-partials"><h3>partials → components</h3><p>header.html · footer.html의 새 자리</p></div>
        <div class="guide-v2-prose">
          <p><code>partials/header.html</code>·<code>footer.html</code>과 이를 삽입하던 <code>js/include-partials.js</code>는 Nuxt에서 더 이상 필요 없습니다. 각각 <code>components/AppHeader.vue</code>·<code>components/AppFooter.vue</code>로 옮기고, <code>layouts/default.vue</code>가 <code>&lt;AppHeader /&gt;&lt;slot /&gt;&lt;AppFooter /&gt;</code> 구조로 감쌉니다. GNB의 스크롤 상태 전환(<code>header-scroll.js</code>)은 컴포넌트의 <code>onMounted</code>에서 스크롤 리스너를 등록하는 방식으로 옮깁니다.</p>
        </div>

        <div class="guide-v2-subhead" id="nuxt-css"><h3>페이지별 CSS 전략</h3><p>scoped style이냐, 유지냐</p></div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>css/pages/*.css 이관 전략</caption>
            <thead><tr><th scope="col">상황</th><th scope="col">전략</th></tr></thead>
            <tbody>
              <tr><th scope="row">그 페이지 컴포넌트 하나에만 쓰이는 규칙</th><td>해당 <code>.vue</code> 파일의 <code>&lt;style scoped&gt;</code>로 이동</td></tr>
              <tr><th scope="row">여러 섹션 컴포넌트가 공유하는 페이지 스코프(<code>.skills</code> 등)</th><td>scoped로 쪼개지 않고 페이지 컴포넌트 레벨 non-scoped <code>&lt;style&gt;</code> 유지 — 쪼개면 섹션 간 공유 값(그리드 열 수 등)이 중복된다</td></tr>
              <tr><th scope="row"><code>@layer components</code> 우선순위</th><td>Nuxt도 전역 CSS에서 <code>@layer reset, tokens, base, components;</code>를 그대로 선언 — scoped style은 자동으로 더 높은 특이성을 가지므로 레이어 경쟁이 일어나지 않는다</td></tr>
            </tbody>
          </table>
        </div>

        <div class="guide-v2-subhead" id="nuxt-js"><h3>바닐라 JS → Vue Composition API</h3><p>DOM 조작 스크립트의 재작성 방향</p></div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>js/*.js → Vue 대응</caption>
            <thead><tr><th scope="col">현재 스크립트</th><th scope="col">Vue 대응</th></tr></thead>
            <tbody>
              <tr><th scope="row"><code>fade-up.js</code>(IntersectionObserver로 <code>.is-visible</code> 토글)</th><td><code>composables/useFadeUp.ts</code> — <code>onMounted</code>에서 observer 등록, <code>onUnmounted</code>에서 해제. 컴포넌트는 <code>ref</code> 하나만 template에 바인딩</td></tr>
              <tr><th scope="row"><code>stat-reveal.js</code>(카운트업)</th><td><code>composables/useStatReveal.ts</code> — 목표값을 prop으로 받고 내부 상태를 reactive로 카운트, template은 <code>{{ count }}</code>만 렌더</td></tr>
              <tr><th scope="row"><code>catalog-board.js</code>·<code>case-filter.js</code>(탭/필터 전환)</th><td>Vue의 <code>ref</code> 상태 + <code>v-show</code>/<code>v-if</code>로 대체 — DOM 클래스를 직접 토글하지 않고 상태가 뷰를 결정하게 뒤집는다</td></tr>
              <tr><th scope="row"><code>journey-stage.js</code>(스크롤 연동 단계 전환)</th><td>VueUse의 <code>useIntersectionObserver</code> 조합, 단계 인덱스를 reactive 상태로 유지</td></tr>
            </tbody>
          </table>
        </div>
        <div class="guide-callout"><strong>공통 원칙</strong><span>바닐라 스크립트가 하던 "클래스를 직접 querySelector로 찾아 토글"하는 방식을 그대로 옮기지 않습니다. Vue에서는 상태(ref/reactive)가 먼저이고 DOM 클래스는 그 상태의 결과로 바인딩합니다.</span></div>

        <div class="guide-v2-subhead" id="nuxt-routing"><h3>라우팅 · 빌드 · 배포</h3><p>정적 다중 페이지 → 파일 기반 라우팅</p></div>
        <div class="guide-v2-prose">
          <p>지금은 <code>skills.html</code>·<code>ax-build.html</code>처럼 루트에 나열된 정적 파일이 곧 URL입니다. Nuxt에서는 <code>pages/skills.vue</code>·<code>pages/ax-build.vue</code>로 옮기면 파일 기반 라우팅이 같은 URL을 자동 생성합니다. 빌드는 정적 서버로 파일을 그대로 올리던 것에서 <code>nuxi build</code>(SSR) 또는 <code>nuxi generate</code>(완전 정적, 이 프로젝트의 현재 배포 방식과 가장 가까움)로 바뀝니다. 카탈로그 성격의 <code>codepresso-designsystem.html</code>은 서비스 라우트가 아니므로 <code>pages/</code>에 넣지 않고 별도 Storybook류 도구로 대체하는 편이 낫습니다.</p>
        </div>
      </section>

      <section class="guide-v2-section" id="porting">
        <div class="guide-v2-section-head">
          <p class="guide-kicker">PORTING</p>
          <h2>다른 웹사이트에 이 디자인 스킬 적용하는 방법</h2>
          <p><code>.claude/skills/html-css-architecture/references/porting.md</code>의 요약입니다(저장소 안 문서라 이 링크는 클릭이 아니라 경로 표기입니다). 토큰과 구체 수치만 자사 값으로 바꾸고, 방법론과 게이트 구조는 그대로 채택합니다.</p>
        </div>

        <div class="guide-v2-subhead" id="porting-why"><h3>왜 이 스킬을 쓰는가</h3><p>판단을 코드와 문서에 영속화한다</p></div>
        <div class="guide-v2-prose">
          <p>AI는 매 세션 새로 판단하므로 "카드에 장식 선을 넣지 않는다" 같은 결정도 세션을 넘기지 못합니다. 이 스킬은 그 판단을 <strong>게이트(저장 시점 자동 검사)</strong>와 <strong>문서(반례 기록)</strong>에 남겨 다음 세션에도 그대로 재생합니다.</p>
          <p><strong>게이트</strong>(<code>token-lint.js</code> + <code>page-audit.js</code>)는 미정의 변수·raw 색·최소 폰트 미달·임의 max-width·CSS에 없는 클래스를 저장 시점에 기계적으로 막습니다 — 판단이 아니라 검사입니다. <strong>baseline 파일</strong>은 기존 위반을 지문으로 기록해 두고 새로 생긴 것만 막아, 레거시 코드베이스에도 첫날부터 적용할 수 있게 합니다. <strong>anti-patterns.md</strong>는 사용자가 실제로 되돌린 것만 기록해 "이론상 나쁘다"가 아니라 "실제로 실패했다"는 근거를 조직 기억으로 남깁니다.</p>
        </div>

        <div class="guide-v2-subhead" id="porting-rebuttal"><h3>반박에 대한 대응</h3><p>자주 나오는 질문 네 가지</p></div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>예상 반박과 대응</caption>
            <thead><tr><th scope="col">반박</th><th scope="col">대응</th></tr></thead>
            <tbody>
              <tr><th scope="row">"Tailwind·shadcn 쓰면 되지 않나"</th><td>그건 문법·뼈대일 뿐 "이 카드엔 장식 선을 안 쓴다" 같은 축적된 판단은 주지 않습니다. 게이트·anti-patterns·토큰 승격 기준은 Tailwind 유무와 무관한 층위에서 작동합니다.</td></tr>
              <tr><th scope="row">"디자인 감각은 AI가 대신 못 하지 않나"</th><td>맞습니다. 그래서 취향을 새로 판단하지 않고 이미 내려진 판단을 기록·재생합니다. 새 판단이 필요하면 "임의로 만들지 말고 묻는다"를 반복 명시합니다(SKILL.md 0번).</td></tr>
              <tr><th scope="row">"게이트가 있어도 사람이 검토 안 하면 소용없지 않나"</th><td>게이트는 검토를 대체하지 않고, 오타·하드코딩처럼 검토할 가치 없는 하위 카테고리를 걸러내 사람의 검토를 design-qa.md의 상위 판단에 집중시킵니다.</td></tr>
              <tr><th scope="row">"새 회사 적용 초기 비용이 크지 않나"</th><td>재작성 대상은 "🔧 코드프레소 값" 마커 블록뿐이고, 방법론 문서는 그대로 채택됩니다. baseline 덕에 완벽한 상태에서 시작할 필요도 없습니다.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="guide-v2-subhead" id="porting-order"><h3>이식 순서</h3><p>토큰에서 시작해 검증으로 끝난다</p></div>
        <ol class="guide-v2-order-list">
          <li><span>01</span><div><h4>토큰</h4><p><code>css/tokens.css</code>를 자사 값으로 바꾸고 SKILL.md 3번의 최소 폰트·breakpoint 수치를 동기화합니다.</p></div></li>
          <li><span>02</span><div><h4>섹션 어휘표</h4><p>SKILL.md 4번을 자사 정보구조로 재작성하고 <code>page-audit.js</code>의 <code>SECTION_VOCAB</code> 상수를 동기화합니다.</p></div></li>
          <li><span>03</span><div><h4>컴포넌트 인벤토리</h4><p><code>component-inventory.md</code> 표 내용을 자사 컴포넌트로 교체합니다(역인덱스 틀은 유지).</p></div></li>
          <li><span>04</span><div><h4>아이콘 · 에셋</h4><p><code>css-patterns.md</code> 2번의 색 배정표를 자사 아이콘셋으로 바꿉니다.</p></div></li>
          <li><span>05</span><div><h4>실측 문서 재실행</h4><p><code>surface-depth.md</code> 절차를 자사 레퍼런스로 다시 돌리고 <code>design-qa.md</code> 기준표를 재측정합니다.</p></div></li>
          <li><span>06</span><div><h4>게이트 설정 교체</h4><p><code>token-lint.js</code>/<code>page-audit.js</code> 상단 상수를 직접 고치고, baseline json을 삭제한 뒤 <code>--write-baseline</code>으로 재시작합니다.</p></div></li>
          <li><span>07</span><div><h4>anti-patterns.md 초기화</h4><p>코드프레소 반례는 예시로만 남기고 빈 표로 시작해 <code>harvest-feedback.js</code>로 새로 쌓습니다.</p></div></li>
          <li><span>08</span><div><h4>검증</h4><p>더미 섹션으로 훅이 실제로 막는지 확인한 뒤 <code>--all</code>로 전수 확인합니다.</p></div></li>
        </ol>

        <div class="guide-v2-subhead" id="porting-table"><h3>바꾸는 것</h3><p>파일별 이식 범위</p></div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>이식 시 파일별 변경 범위</caption>
            <thead><tr><th scope="col">파일</th><th scope="col">이식 시 바꾸는 부분</th></tr></thead>
            <tbody>
              <tr><th scope="row">SKILL.md</th><td>3번 절대 제약의 구체 수치(최소 폰트·breakpoint), 4번 섹션 어휘표</td></tr>
              <tr><th scope="row">css-patterns.md</th><td>2번 아이콘 파일명·색 배정표, 4번 실측 대비표</td></tr>
              <tr><th scope="row">tokens-typography.md</th><td>색상·spacing·radius·타이포·모션 값 전체</td></tr>
              <tr><th scope="row">component-inventory.md</th><td>A~F 표의 컴포넌트 목록 전체, 권장 글자 수 표</td></tr>
              <tr><th scope="row">surface-depth.md · design-qa.md</th><td>실측 대비표·기준 수치 — 자사 페이지로 재측정</td></tr>
              <tr><th scope="row">anti-patterns.md</th><td>표 전체 — 자사는 빈 표로 시작</td></tr>
              <tr><th scope="row">scripts/token-lint.js · page-audit.js</th><td>상단 상수(TOKEN_FILES · SECTION_VOCAB 등)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="guide-callout"><strong>이식 시 건드리지 않는 것</strong><span><code>gate.js</code>·<code>contrast-audit.js</code>, SKILL.md 0번(제1규칙)·2번(파일 구조)·5번(커밋 규칙), <code>naming.md</code>·<code>reuse-playbook.md</code>·<code>cleanup.md</code> 전체, <code>css-patterns.md</code>의 1·3·5·6·9번 — 전부 완전 범용이라 그대로 채택합니다.</span></div>

        <div class="guide-inline-note">
          <strong>porting.md와 porting-guide.md, 두 문서가 있는 이유</strong>
          <span>저장소 안엔 서술형 <code>porting.md</code>(왜 필요한지 논증 포함, SKILL.md가 실제로 링크하는 정본)와 체크리스트형 <code>porting-guide.md</code>(단계별 <code>- [ ]</code> 항목만 나열) 두 버전이 있습니다. 처음 읽을 땐 <code>porting.md</code>로 맥락을 잡고, 실제 이식 작업 중엔 <code>porting-guide.md</code>를 체크리스트로 옆에 켜 두는 방식을 권합니다 — 두 파일을 합치지 않은 것은 아직 정리되지 않은 상태이며, 이 문서가 그 사실 자체를 감추지 않습니다.</span>
        </div>
      </section>

      <section class="guide-v2-section" id="skill-meta">
        <div class="guide-v2-section-head">
          <p class="guide-kicker">SKILL STRUCTURE</p>
          <h2>Skill의 구조와 사용법</h2>
          <p><code>.claude/skills/html-css-architecture/</code> 자체의 구조를 설명합니다. 이 스킬은 문서가 아니라 "새로 만들지 말고 있는 것을 찾아 쓴다"는 제1규칙을 코드(게이트)와 문서(레퍼런스)로 함께 지킵니다. 파일별 이식 범위는 11번 표에서 이미 다뤘으므로, 여기서는 <strong>스킬이 무엇으로 구성되고 어떻게 호출·적용되는지</strong>에 집중합니다.</p>
        </div>

        <div class="guide-v2-subhead" id="skill-trigger"><h3>호출 방법</h3><p>언제 자동으로 로드되는가</p></div>
        <div class="guide-v2-prose">
          <p>이 스킬은 <code>SKILL.md</code> 상단 frontmatter의 <code>description</code>에 적힌 트리거 조건에 걸리면 자동으로 로드됩니다 — HTML/CSS를 쓰거나 고칠 때, 섹션·서브페이지를 만들거나 리디자인할 때, 화면이 심심해 배경·아이콘·모션을 보강할 때, 목업에 연출을 넣을 때, 반응형·CSS 중복 정리·리팩터링·커밋을 할 때, 그리고 작업을 마친 뒤 디자이너 시점으로 QA할 때입니다. 사람이 직접 부를 때는 <code>Skill</code> 도구에 <code>html-css-architecture</code>를 지정합니다.</p>
        </div>

        <div class="guide-v2-subhead" id="skill-rule-01"><h3>0-1번 — "A를 B로 바꿔줘"의 의미</h3><p>클래스명만 바꾸는 것이 아니다</p></div>
        <div class="guide-v2-prose">
          <p>"a를 b가 쓰는 class로 바꿔줘"는 <strong>마크업 구조·CSS·디자인 전부를 B의 것으로 교체하라</strong>는 뜻입니다. 기존 A의 디자인이 B와 다른 것은 당연한 전제이고, 그 다름을 지키려고 페이지 스코프에 A의 값(크기·색·그림자·배경)을 남겨 두면 잘못한 것입니다 — 지시는 "A를 버려라"였습니다. 마크업도 B의 Markup API를 그대로 따르고, 반응형(<code>css/mobile.css</code>)의 수치도 B의 실제 크기로 다시 계산합니다. 페이지 스코프에 남길 수 있는 것은 B의 CSS 주석이 "사용 페이지가 정한다"고 명시한 것과, 사용자가 이번에 따로 지시한 예외뿐입니다.</p>
        </div>

        <div class="guide-v2-subhead" id="skill-files"><h3>폴더 구조</h3><p>필요한 문서만 그때그때 연다</p></div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>스킬 폴더 구조</caption>
            <thead><tr><th scope="col">파일 · 폴더</th><th scope="col">역할</th></tr></thead>
            <tbody>
              <tr><th scope="row">SKILL.md</th><td>매번 지켜야 하는 핵심 규범 — 제1규칙(재사용 우선)·기술 스택·파일 구조·절대 제약·네이밍·커밋 규칙</td></tr>
              <tr><th scope="row">component-inventory.md</th><td>실제로 존재하는 모든 컴포넌트 목록 + "콘텐츠 → 컴포넌트" 역인덱스</td></tr>
              <tr><th scope="row">css-patterns.md</th><td>hover·아이콘·색 파생 등 반복되는 CSS 관용구</td></tr>
              <tr><th scope="row">subpage-guide.md</th><td>새 서브페이지를 만드는 실전 절차서(선례 6개 표 포함)</td></tr>
              <tr><th scope="row">mock-motion-guide.md</th><td>제품 화면 목업에 연출을 넣는 7종 패턴</td></tr>
              <tr><th scope="row">references/*.md</th><td>작업별 세부 규칙(토큰·네이밍·버튼·반응형·QA·이식 등) — 아래 표에서 고른다</td></tr>
              <tr><th scope="row">scripts/gate.js</th><td>저장 시점 훅이 실행하는 진입점. token-lint.js + page-audit.js를 함께 돌린다</td></tr>
              <tr><th scope="row">scripts/token-lint.js · page-audit.js</th><td>값 위반 · 디자인 위반 검사기. 각각 baseline으로 기존 위반을 봐준다</td></tr>
              <tr><th scope="row">scripts/contrast-audit.js</th><td>면 위 텍스트의 WCAG 대비를 재는 수동 실행 스크립트</td></tr>
              <tr><th scope="row">scripts/harvest-feedback.js</th><td>사용자 손수정 중 "넣었다가 지워진 것"을 뽑아 anti-patterns.md에 올리는 회수 스크립트</td></tr>
              <tr><th scope="row">scripts/*.baseline.json</th><td>기존 위반의 지문. 새로 생긴 위반만 걸러내기 위한 기준선</td></tr>
            </tbody>
          </table>
        </div>

        <div class="guide-v2-subhead" id="skill-gate"><h3>게이트 메커니즘</h3><p>문서가 아니라 기계가 지키는 것</p></div>
        <div class="guide-v2-prose">
          <p>HTML·CSS를 저장하면 <code>.claude/settings.json</code>의 <code>PostToolUse</code> 훅이 <code>scripts/gate.js</code>를 실행합니다. 이 스크립트는 <code>token-lint.js</code>(정의 안 된 <code>var()</code>·raw 색·리터럴 font-size/weight/radius·스케일 밖 여백)와 <code>page-audit.js</code>(CSS에 없는 클래스·링크 3개 순서·페이지 스코프·다크 짝·<code>data-*</code> ↔ 스크립트·meta·존재하지 않는 파일 참조·mobile.css 구조)를 함께 돌립니다. 위반이 있으면 저장 시점에 그 자리에서 되돌아옵니다.</p>
          <p>기존 위반은 <code>*.baseline.json</code>에 기록되어 있어 새로 생긴 것만 막습니다. 게이트가 잡지 못하는 것은 <strong>어떤 컴포넌트를 고르는지, 강조를 어디 한 번 주는지, 화면이 지루한지</strong>입니다 — 이건 여전히 문서와 사람의 눈이 판단합니다.</p>
        </div>

        <div class="guide-v2-subhead" id="skill-always"><h3>항상 하는 것</h3><p>지시받지 않아도 매 작업에서 수행한다</p></div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>매 작업 공통 점검 항목</caption>
            <thead><tr><th scope="col">항목</th><th scope="col">내용</th></tr></thead>
            <tbody>
              <tr><th scope="row">주변 CSS 함께 확인</th><td>바꾼 값 하나로 끝내지 않고, 그 값에 기대던 형제·부모·자식 규칙이 깨지지 않는지 본다(열 수 변경 시 높이·여백, min-height 해제 시 대체 높이 기준 등)</td></tr>
              <tr><th scope="row">중복·무효 선언 정리</th><td>base.css의 태그 전역 스타일·공용 유틸리티와 값이 겹치면 지운다 — "몇 줄만 고치는 작업"이라도 건너뛰지 않는다</td></tr>
              <tr><th scope="row">마크업 · CSS · JS 정합성</th><td>한쪽만 고치고 끝내지 않는다. 섹션 재구성 또는 CSS 30줄 이상 변경 시 3자 정합성을 확인한다</td></tr>
              <tr><th scope="row">접근성</th><td>native 태그 우선, 장식 SVG에 <code>aria-hidden</code>, 이미지 <code>alt</code>. <code>:focus-visible</code>은 reset.css가 전역 처리하므로 재정의하지 않는다</td></tr>
              <tr><th scope="row">디자이너 시점 재검수</th><td>페이지·섹션을 새로 만들거나 크게 고쳤으면 강조 섹션·강조 배경 폭·움직이는 목업·애니메이션 절제·색 위계 3층을 값으로 세어 확인한다</td></tr>
              <tr><th scope="row">손수정 회수</th><td>"내가 고친 것 반영해줘"를 들으면 harvest-feedback.js로 변경을 뽑고, 되돌려진 것을 anti-patterns.md에 올린다</td></tr>
              <tr><th scope="row">보고</th><td>지운 것과 의도적으로 남긴 것(및 이유)을 함께 보고한다. 기존부터 깨져 있던 것과 이번에 깨진 것을 구분한다</td></tr>
            </tbody>
          </table>
        </div>

        <div class="guide-inline-note">
          <strong>커밋 규칙(SKILL.md 5번)</strong>
          <span>커밋은 사용자가 명시적으로 요청할 때만 합니다. 작업이 끝났다고 자동으로 커밋하지 않습니다. 메시지는 "무엇을 어떻게" 한 줄 + "무엇이 어떻게 달라졌다" 본문 — 리팩터링·버그 수정이면 무엇이 문제였고 왜 그랬는지를 먼저 쓰고, 수치가 있는 결정은 수치를 남깁니다.</span>
        </div>

        <div class="guide-v2-subhead" id="skill-docs"><h3>작업별로 여는 문서</h3><p>전부 읽지 않고 필요한 것만</p></div>
        <div class="guide-v2-table-wrap">
          <table class="guide-v2-table">
            <caption>작업별 참조 문서</caption>
            <thead><tr><th scope="col">지금 하는 일</th><th scope="col">여는 문서</th></tr></thead>
            <tbody>
              <tr><th scope="row">재사용할지 새로 만들지 판단이 안 선다</th><td><code>references/reuse-playbook.md</code></td></tr>
              <tr><th scope="row">어떤 컴포넌트가 있는지 찾는다</th><td><code>component-inventory.md</code></td></tr>
              <tr><th scope="row">색·간격·폰트 값을 정한다</th><td><code>references/tokens-typography.md</code></td></tr>
              <tr><th scope="row">섹션 안쪽 요소·상태·JS 훅 이름을 짓는다</th><td><code>references/naming.md</code></td></tr>
              <tr><th scope="row">버튼·링크를 놓는다</th><td><code>references/buttons.md</code></td></tr>
              <tr><th scope="row">섹션을 추가한다 · 배경·에셋을 다룬다</th><td><code>references/page-structure.md</code></td></tr>
              <tr><th scope="row">반응형을 손본다 · 애니메이션을 넣는다</th><td><code>references/responsive-motion.md</code></td></tr>
              <tr><th scope="row">화면이 심심하다</th><td><code>css-patterns.md</code> 4번</td></tr>
              <tr><th scope="row">제품 화면 목업에 연출을 넣는다</th><td><code>mock-motion-guide.md</code></td></tr>
              <tr><th scope="row">새 서브페이지를 처음부터 만든다</th><td><code>pages/</code>의 기존 Vue 페이지 구조와 <code>subpage-guide.md</code></td></tr>
              <tr><th scope="row">예전에 걷어낸 것을 다시 넣지 않으려 확인한다</th><td><code>references/anti-patterns.md</code></td></tr>
              <tr><th scope="row">작업을 마친 뒤 디자이너 시점으로 검수한다</th><td><code>references/design-qa.md</code></td></tr>
              <tr><th scope="row">작업을 마치기 직전</th><td><code>references/checklist.md</code></td></tr>
              <tr><th scope="row">다른 프로젝트에 이식한다</th><td><code>references/porting.md</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer class="guide-v2-footer">Codepresso Design Guide v2 · 마지막 업데이트 2026.09</footer>
    </main>
  </div>

  <SiteFooter />
  <ClientInteractions :scripts='["js/fade-up.js","js/stat-reveal.js","js/proof-card-slider.js","js/catalog-board.js","js/designsystem-scrollspy.js"]' />
</template>

<script setup>
useSeoMeta({ title: "Codepresso Design Guide v2", description: "" })

</script>

<style>
@import '~/css/pages/designsystem-v2.css';
@import '~/css/mobile.css';
</style>
