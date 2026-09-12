export default defineNuxtConfig({
  ssr: true,
  // 디자인 시스템의 단일 원본은 css/다. public/css 복제본을 전역 입력으로 쓰지 않는다.
  // mobile.css는 여기 두지 않는다 — 원본 HTML의 로딩 순서(main → 페이지 전용 → mobile)를
  // 지키려면 페이지 전용 CSS 다음에 와야 하므로, 각 page.vue의 <script setup>에서
  // 페이지 CSS 바로 뒤에 import한다.
  css: ['~/css/layers.css', '~/css/main.css', '~/css/main-dark.css'],
  nitro: {
    prerender: {
      routes: ['/', '/aifluent', '/ax-build', '/ax-grow', '/axpresso', '/cases', '/company', '/skillcamp', '/skillcertify', '/skillfit', '/skillpath', '/skills', '/why-codepresso']
    }
  },
  // Nuxt 3.21의 dev 서버에서 #app-manifest 가상 모듈 해석이 실패하는 것을 막는다.
  // 이 정적 마케팅 사이트는 앱 매니페스트 기반 payload 탐색을 사용하지 않는다.
  experimental: { appManifest: false },
  compatibilityDate: '2025-02-01'
})
