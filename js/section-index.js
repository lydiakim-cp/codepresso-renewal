/*
 * Section Index
 * 한 섹션 안에서 "지금 보고 있는 항목"을 sticky 좌측 인덱스에 표시한다.
 * [data-section-index] 안의 [data-section-index-item]이 가리키는 요소를 관찰하다,
 * 뷰포트 중앙선을 품은 항목에 .is-current를 옮긴다.
 *
 * 활성 판정을 중앙선으로 하는 이유 — 중앙선을 품는 요소는 항상 최대 1개라
 * 항목 경계에서 둘이 다투지 않는다(part-nav.js·journey-stage.js와 같은 방식).
 *
 * 클릭하면 해당 항목까지 스크롤한다. 브라우저 기본 앵커 점프는 고정 헤더에
 * 가려지므로 scroll-margin-top 없이 직접 offset을 계산해 옮긴다.
 *
 * - prefers-reduced-motion 사용자와 IntersectionObserver가 없는 환경에서는
 *   첫 항목만 표시해 두고 스크롤 추적을 하지 않는다(표시가 사라지진 않는다).
 */
(() => {
  const groups = document.querySelectorAll('[data-section-index]');
  if (!groups.length) return;

  /* 고정 헤더(75px)에 가려지지 않도록 도착 지점을 조금 위로 띄운다 —
     part-nav.js와 같은 값을 쓴다. */
  const SCROLL_OFFSET = 96;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  groups.forEach((group) => {
    const links = Array.from(group.querySelectorAll('[data-section-index-item]'));
    if (!links.length) return;

    // 인덱스 항목 ↔ 그것이 가리키는 실제 카드를 짝지어 둔다.
    const entries = links
      .map((link) => ({ link, target: document.getElementById(link.dataset.sectionIndexItem) }))
      .filter(({ target }) => target);

    if (!entries.length) return;

    let currentLink = null;

    const activate = (link) => {
      if (link === currentLink) return;
      currentLink = link;
      links.forEach((item) => item.classList.toggle('is-current', item === link));
    };

    activate(entries[0].link);

    // 클릭 — 해당 카드로 이동한다. 표시는 스크롤 추적이 알아서 맞춘다.
    entries.forEach(({ link, target }) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const y = window.scrollY + target.getBoundingClientRect().top - SCROLL_OFFSET;
        window.scrollTo({
          top: y,
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
      });
    });

    if (prefersReducedMotion) return;

    const syncToScroll = () => {
      const line = window.innerHeight / 2;

      const current = entries.find(({ target }) => {
        const { top, bottom } = target.getBoundingClientRect();
        return top <= line && bottom > line;
      });

      /* 섹션 앞뒤(다른 섹션)에서는 마지막 상태를 유지한다 — 지나온 항목의 표시를
         지울 이유가 없고 깜빡임만 생긴다(part-nav.js와 같은 판단). */
      if (current) activate(current.link);
    };

    /* 스크롤마다 getBoundingClientRect를 부르므로 rAF로 프레임당 1회로 묶는다. */
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        syncToScroll();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    syncToScroll();
  });
})();
