/*
 * Stat Reveal
 * [data-stat-reveal] 안의 .metric-card를 스크롤 진입 시 fade-up시킨다.
 * - 화면에 들어오는 순간 .is-visible이 붙어 아래에서 위로 올라오며 나타난다.
 * - 카드끼리 순차 지연(stagger)을 줘서 왼쪽에서 오른쪽으로 차례로 등장한다.
 * - 동시에 숫자(.num)는 0에서 목표값까지 카운트업되고, progress bar는 실측 달성률까지 채워진다.
 *   소수점 값은 .num에 data-decimals="{자릿수}"를 달아 알린다(없으면 정수).
 * - 한 번 나타난 카드는 다시 숨기지 않는다(관찰 해제).
 * - prefers-reduced-motion 사용자에게는 애니메이션 없이 바로 최종 상태로 보이게 둔다.
 */
(() => {
  const STAGGER_MS = 100;
  const COUNT_DURATION_MS = 1200;

  const groups = document.querySelectorAll('[data-stat-reveal]');
  if (!groups.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 소수점 자릿수 — 기본은 0(정수)이다. 소수점 값(예: 만족도 4.5)은 마크업에서
     data-decimals="1"로 알린다. 정수만 쓰던 기존 카드는 이 속성이 없어 그대로 동작한다.
     자릿수를 마크업이 정하는 이유 — 4.5를 렌더 중에 추정하면 4.50·4.5가 섞인다. */
  const formatCount = (value, decimals) =>
    value.toLocaleString('ko-KR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  // 숫자를 0에서 target까지 ease-out으로 카운트업하며 천 단위 콤마를 붙인다.
  const animateCount = (el, target, duration, decimals) => {
    const start = performance.now();
    /* 소수점 자리를 살려 내림한다 — Math.floor를 그대로 쓰면 4.5가 카운트업 내내
       4로 표시되다 끝에서만 4.5가 되어 자릿수가 튄다. */
    const step = Math.pow(10, decimals);
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatCount(Math.floor(target * eased * step) / step, decimals);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = formatCount(target, decimals);
      }
    };
    requestAnimationFrame(tick);
  };

  const revealCard = (card) => {
    card.classList.add('is-visible');

    const numEl = card.querySelector('.num');
    if (numEl) {
      const target = Number(numEl.dataset.target);
      const decimals = Number(numEl.dataset.decimals) || 0;
      if (prefersReducedMotion) {
        numEl.textContent = formatCount(target, decimals);
      } else {
        animateCount(numEl, target, COUNT_DURATION_MS, decimals);
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
