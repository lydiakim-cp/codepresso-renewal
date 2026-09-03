/*
 * Stack Scroll
 * [data-stack-scroll] 컨테이너의 직계 section이 sticky로 쌓일 때, 뒤 섹션이
 * 덮어오는 만큼 앞 섹션은 흐려지고 안쪽 이미지/박스가 살짝 접히듯 기운다.
 * 진행률(0~1)만 --stack-progress로 넘기고, 흐림·기울임은 CSS가 담당한다.
 */
(() => {
  const containers = document.querySelectorAll('[data-stack-scroll]');
  if (!containers.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  /* 900px 이하는 mobile.css가 스택 자체를 끈다 — 계산도 하지 않는다. */
  if (window.matchMedia('(max-width: 900px)').matches) return;

  const sections = [];
  containers.forEach((container) => {
    Array.from(container.children).forEach((el) => {
      if (el.tagName === 'SECTION') sections.push(el);
    });
  });
  if (sections.length < 2) return;

  let ticking = false;

  /* 다음 섹션이 뷰포트 아래(top = 뷰포트 높이)에서 위(top = 0)로 올라와
     현재 섹션을 덮는 동안의 진행률 — sticky가 겹치는 구간과 정확히 겹친다. */
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    for (let i = 0; i < sections.length - 1; i++) {
      const nextTop = sections[i + 1].getBoundingClientRect().top;
      const progress = Math.min(Math.max(1 - nextTop / vh, 0), 1);
      sections[i].style.setProperty('--stack-progress', progress.toFixed(3));
    }
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
