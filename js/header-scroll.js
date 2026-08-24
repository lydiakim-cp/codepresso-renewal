/*
 * Header Scroll Behavior
 * - 스크롤을 내리면 header를 위로 슬라이드아웃해 숨기고, 올리면 다시 슬라이드다운해 보여준다.
 * - 최상단(hero)에서는 header 배경을 투명하게 두고, 스크롤을 내리면 반투명 배경을 입힌다.
 * - main 배경(하늘색 → 흰색) 전환 진행률을 --scroll-progress CSS 변수로 넘겨준다.
 * prefers-reduced-motion 사용자에게는 숨김/등장 모션 없이 header를 항상 보이게 둔다.
 */
(() => {
  const header = document.querySelector(".header");
  const main = document.querySelector("main");
  if (!header || !main) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // main 배경 전환이 완료되는 스크롤 거리(px). main-content.css의 그라디언트 640px 구간과 맞춘다.
  const FADE_DISTANCE = 640;
  // header를 숨기기 시작하는 최소 스크롤 위치(상단 근처에서는 계속 보이게 둔다).
  const HIDE_THRESHOLD = 80;
  // header에 반투명 배경을 입히기 시작하는 스크롤 위치.
  const SCROLLED_THRESHOLD = 8;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const update = () => {
    const scrollY = window.scrollY;

    // 1) main 배경 전환 진행률(0~1)
    const progress = Math.min(Math.max(scrollY / FADE_DISTANCE, 0), 1);
    main.style.setProperty("--scroll-progress", progress.toFixed(3));

    // 2) header 배경(최상단 투명 → 스크롤 시 반투명)
    header.classList.toggle("is-scrolled", scrollY > SCROLLED_THRESHOLD);

    // 3) header 숨김/등장
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
})();
