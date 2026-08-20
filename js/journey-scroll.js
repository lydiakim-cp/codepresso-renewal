/*
 * Journey Scroll
 * education-journey 섹션에서 우측 스토리 블록(.journey-block) 중
 * 화면에 가장 많이 걸쳐 보이는 블록을 판단해 좌측 단계 인디케이터(.journey-step)의
 * 활성 상태를 동기화한다. 사용자가 스크롤하는 동안 "지금 어느 단계를 보고 있는지"를
 * 잃지 않게 하는 것이 목적이다.
 */
(() => {
  const stepsWrap = document.querySelector('[data-journey-steps]');
  const scrollWrap = document.querySelector('[data-journey-scroll]');
  if (!stepsWrap || !scrollWrap) return;

  const steps = Array.from(stepsWrap.querySelectorAll('.journey-step'));
  const blocks = Array.from(scrollWrap.querySelectorAll('[data-journey-target]'));
  if (!steps.length || !blocks.length || !('IntersectionObserver' in window)) return;

  const activate = (index) => {
    steps.forEach((step) => {
      const isActive = Number(step.dataset.journeyStep) === index;
      step.classList.toggle('is-active', isActive);
    });
  };

  // 뷰포트 중앙 부근에 걸린 블록을 "현재 보는 중"으로 판단한다.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = Number(entry.target.dataset.journeyTarget);
        activate(index);
      });
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  );

  blocks.forEach((block) => observer.observe(block));
  activate(0);
})();
