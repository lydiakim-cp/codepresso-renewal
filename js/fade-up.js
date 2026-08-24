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

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  targets.forEach((el) => observer.observe(el));
})();
