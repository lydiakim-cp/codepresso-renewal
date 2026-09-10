/*
 * Scroll Progress
 * <main>에 --scroll-progress(0~1)를 써 준다. css/pages/index.css가 이 값으로
 * 메인 배경을 하늘색 → 흰색으로 전환한다.
 *
 * 헤더와 무관한 기능이라 header-scroll.js에서 떼어냈다. 헤더가 외부 패키지로
 * 교체돼도 배경 전환이 같이 죽지 않게 하기 위한 것이다 — <main>만 있으면 돈다.
 */
(() => {
  const main = document.querySelector("main");
  if (!main) return;

  // 배경 전환이 완료되는 스크롤 거리(px). index.css의 그라디언트 구간과 맞춘다.
  const FADE_DISTANCE = 640;

  let ticking = false;

  const update = () => {
    const progress = Math.min(Math.max(window.scrollY / FADE_DISTANCE, 0), 1);
    main.style.setProperty("--scroll-progress", progress.toFixed(3));
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
