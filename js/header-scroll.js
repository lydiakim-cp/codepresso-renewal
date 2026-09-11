/*
 * Header Scroll Behavior
 * - 스크롤을 내리면 header를 위로 슬라이드아웃해 숨기고, 올리면 다시 슬라이드다운해 보여준다.
 * - 최상단(hero)에서는 header 배경을 투명하게 두고, 스크롤을 내리면 반투명 배경을 입힌다.
 * prefers-reduced-motion 사용자에게는 숨김/등장 모션 없이 header를 항상 보이게 둔다.
 *
 * main 배경 전환(--scroll-progress)은 js/scroll-progress.js가 따로 맡는다 —
 * 헤더가 교체돼도 배경이 같이 죽지 않게 분리했다.
 *
 * Nuxt의 SiteHeader 컴포넌트가 먼저 렌더되므로 mount 뒤에 바로 초기화한다.
 */
(() => {
  const init = () => {
  const header = document.querySelector(".header");
  if (!header) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // header를 숨기기 시작하는 최소 스크롤 위치(상단 근처에서는 계속 보이게 둔다).
  const HIDE_THRESHOLD = 80;
  // header에 반투명 배경을 입히기 시작하는 스크롤 위치.
  const SCROLLED_THRESHOLD = 8;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const update = () => {
    const scrollY = window.scrollY;

    // 1) header 배경(최상단 투명 → 스크롤 시 반투명)
    header.classList.toggle("is-scrolled", scrollY > SCROLLED_THRESHOLD);

    // 2) header 숨김/등장
    if (!prefersReducedMotion) {
      const scrollingDown = scrollY > lastScrollY;
      if (scrollingDown && scrollY > HIDE_THRESHOLD) {
        header.classList.add("is-hidden");
      } else {
        header.classList.remove("is-hidden");
      }
    }

    lastScrollY = scrollY;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );

  update();
  };

  init();
})();
