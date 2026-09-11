<template><span hidden aria-hidden="true" /></template>

<script setup lang="ts">
import caseFilter from '~/js/case-filter.js?raw'
import catalogBoard from '~/js/catalog-board.js?raw'
import designsystemScrollspy from '~/js/designsystem-scrollspy.js?raw'
import fadeUp from '~/js/fade-up.js?raw'
import featureCardCycle from '~/js/feature-card-cycle.js?raw'
import floatingCta from '~/js/floating-cta.js?raw'
import headerScroll from '~/js/header-scroll.js?raw'
import journeyStage from '~/js/journey-stage.js?raw'
import journeyTrackMock from '~/js/journey-track-mock.js?raw'
import navMenu from '~/js/nav-menu.js?raw'
import partNav from '~/js/part-nav.js?raw'
import proofCardSlider from '~/js/proof-card-slider.js?raw'
import scenarioSwitch from '~/js/scenario-switch.js?raw'
import scrollProgress from '~/js/scroll-progress.js?raw'
import statReveal from '~/js/stat-reveal.js?raw'
import trackCarousel from '~/js/track-carousel.js?raw'

const props = defineProps<{ scripts: string[] }>()
const modules: Record<string, string> = {
  'js/case-filter.js': caseFilter,
  'js/catalog-board.js': catalogBoard,
  'js/designsystem-scrollspy.js': designsystemScrollspy,
  'js/fade-up.js': fadeUp,
  'js/feature-card-cycle.js': featureCardCycle,
  'js/floating-cta.js': floatingCta,
  'js/header-scroll.js': headerScroll,
  'js/journey-stage.js': journeyStage,
  'js/journey-track-mock.js': journeyTrackMock,
  'js/nav-menu.js': navMenu,
  'js/part-nav.js': partNav,
  'js/proof-card-slider.js': proofCardSlider,
  'js/scenario-switch.js': scenarioSwitch,
  'js/scroll-progress.js': scrollProgress,
  'js/stat-reveal.js': statReveal,
  'js/track-carousel.js': trackCarousel,
}

// 기존 IIFE 알고리즘은 그대로 두고 Vue의 mount 경계 안에서만 평가한다.
// 따라서 SSR에서 window·IntersectionObserver·matchMedia에 접근하지 않는다.
onMounted(() => {
  for (const src of props.scripts) {
    const source = modules[src]
    if (source) new Function(source)()
  }
})
</script>
