/*
 * Difference Reveal
 * [data-difference-reveal] 안의 .difference-card를 스크롤 진입 시 fade-up시킨다.
 * - stat-reveal.js와 동일한 리듬(IntersectionObserver + stagger)을 공유한다.
 * - 한 번 나타난 카드는 다시 숨기지 않는다(관찰 해제).
 * - prefers-reduced-motion 사용자에게는 애니메이션 없이 바로 최종 상태로 보이게 둔다.
 */
(() => {
  const STAGGER_MS = 100;

  const groups = document.querySelectorAll('[data-difference-reveal]');
  if (!groups.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  groups.forEach((group) => {
    const cards = Array.from(group.querySelectorAll('.difference-card'));
    if (!cards.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = cards.indexOf(entry.target);
        window.setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, Math.max(0, index) * STAGGER_MS);

        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    cards.forEach((card) => observer.observe(card));
  });
})();
