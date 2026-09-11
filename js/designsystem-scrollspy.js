/* Design Guide v2 전용 — IntersectionObserver로 목차(대분류+하위 항목)에
   is-active를 토글한다. 상태 토글이라 prefers-reduced-motion과는 무관하다. */
(() => {
  const nav = document.querySelector('[data-scrollspy-nav]');
  if (!nav) return;

  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const targets = links
    .map((link) => ({ link, el: document.getElementById(link.getAttribute('href').slice(1)) }))
    .filter((entry) => entry.el);
  if (!targets.length) return;

  const setActive = (id) => {
    links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`));
    const activeLink = nav.querySelector(`a[href="#${id}"]`);
    if (activeLink) activeLink.scrollIntoView({ block: 'nearest' });
  };

  const visible = new Map();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
      });
      let bestId = null;
      let bestRatio = 0;
      visible.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });
      if (bestId) setActive(bestId);
    },
    { rootMargin: '-96px 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  targets.forEach(({ el }) => observer.observe(el));
})();
