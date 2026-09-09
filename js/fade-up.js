/*
 * Fade Up
 * .fade-up이 붙은 요소를 스크롤 진입 시 관찰하다 화면에 들어오는 순간 .is-visible을 붙인다.
 * - 한 번 나타나면 다시 숨기지 않는다(관찰 해제).
 * - IntersectionObserver가 없는 환경, prefers-reduced-motion 사용자는 애니메이션 없이 바로 보이게 둔다.
 */
(() => {
  const targets = document.querySelectorAll('.fade-up');
  if (!targets.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // 면적 비율(threshold)이 아니라 위치로 판정한다 — 뷰포트보다 훨씬 긴 섹션은
  // 교차 비율이 15%에 영원히 못 닿아 opacity: 0으로 남는다(cases.html 사례 목록 5120px).
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });

  targets.forEach((el) => observer.observe(el));
})();
