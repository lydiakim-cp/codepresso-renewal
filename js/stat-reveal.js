/*
 * Stat Reveal
 * [data-stat-reveal] 안의 .summary-banner-stat 카드를 스크롤 진입 시 fade-up시킨다.
 * - 화면에 들어오는 순간 .is-visible이 붙어 아래에서 위로 올라오며 나타난다.
 * - 카드끼리 순차 지연(stagger)을 줘서 왼쪽에서 오른쪽으로 차례로 등장한다.
 * - 한 번 나타난 카드는 다시 숨기지 않는다(관찰 해제).
 * - prefers-reduced-motion 사용자에게는 애니메이션 없이 바로 보이게 둔다.
 */
(() => {
  const STAGGER_MS = 100;

  const groups = document.querySelectorAll('[data-stat-reveal]');
  if (!groups.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  groups.forEach((group) => {
    const cards = Array.from(group.querySelectorAll('.summary-banner-stat'));
    if (!cards.length) return;

    // 모션을 원하지 않는 사용자, 또는 IntersectionObserver가 없는 환경에서는
    // 애니메이션 없이 최종 상태(보이는 상태)로 고정한다.
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
    }, { threshold: 0.2 });

    cards.forEach((card) => observer.observe(card));
  });
})();
