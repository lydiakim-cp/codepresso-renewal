/*
 * Stat Reveal
 * [data-stat-reveal] 안의 .metric-card를 스크롤 진입 시 fade-up시킨다.
 * - 화면에 들어오는 순간 .is-visible이 붙어 아래에서 위로 올라오며 나타난다.
 * - 카드끼리 순차 지연(stagger)을 줘서 왼쪽에서 오른쪽으로 차례로 등장한다.
 * - 동시에 숫자(.num)는 0에서 목표값까지 카운트업되고, progress bar는 실측 달성률까지 채워진다.
 * - 한 번 나타난 카드는 다시 숨기지 않는다(관찰 해제).
 * - prefers-reduced-motion 사용자에게는 애니메이션 없이 바로 최종 상태로 보이게 둔다.
 */
(() => {
  const STAGGER_MS = 100;
  const COUNT_DURATION_MS = 1200;

  const groups = document.querySelectorAll('[data-stat-reveal]');
  if (!groups.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 숫자를 0에서 target까지 ease-out으로 카운트업하며 천 단위 콤마를 붙인다.
  const animateCount = (el, target, duration) => {
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(target * eased).toLocaleString('ko-KR');
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toLocaleString('ko-KR');
      }
    };
    requestAnimationFrame(tick);
  };

  const revealCard = (card) => {
    card.classList.add('is-visible');

    const numEl = card.querySelector('.num');
    if (numEl) {
      const target = Number(numEl.dataset.target);
      if (prefersReducedMotion) {
        numEl.textContent = target.toLocaleString('ko-KR');
      } else {
        animateCount(numEl, target, COUNT_DURATION_MS);
      }
    }

  };

  groups.forEach((group) => {
    const cards = Array.from(group.querySelectorAll('.metric-card'));
    if (!cards.length) return;

    // 모션을 원하지 않는 사용자, 또는 IntersectionObserver가 없는 환경에서는
    // 애니메이션 없이 최종 상태(보이는 상태)로 고정한다.
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      cards.forEach((card) => revealCard(card));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = cards.indexOf(entry.target);
        window.setTimeout(() => {
          revealCard(entry.target);
        }, Math.max(0, index) * STAGGER_MS);

        observer.unobserve(entry.target);
      });
    }, { threshold: 0.2 });

    cards.forEach((card) => observer.observe(card));
  });
})();
