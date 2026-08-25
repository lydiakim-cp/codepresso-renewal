/*
 * Part Nav
 * PART 1 · 교육 / PART 2 · 진단 두 섹션을 아우르는 상위 앵커 내비게이션.
 * 두 파트 각각의 sticky 컬럼 안에 같은 nav가 하나씩 놓여 있으므로,
 * 클릭 시 두 인스턴스의 활성 표시를 동시에 같은 파트로 맞춘다.
 *
 * tab이 아니라 <a href="#id">로 해당 섹션까지 이동하는 링크다(콘텐츠는 클릭
 * 여부와 무관하게 항상 전부 노출돼 있다). 인디케이터는 슬라이딩하지 않고
 * 즉시 자리를 옮기며(part-nav.css), 이동감은 클릭 시의 부드러운 페이지
 * 스크롤이 담당한다.
 *
 * 활성 표시는 클릭뿐 아니라 스크롤 위치로도 갱신된다 — 지금 화면에 보이는 파트와
 * nav의 표시가 어긋나면 nav가 현재 위치를 알려주는 역할을 못 한다.
 */
(() => {
  const navs = Array.from(document.querySelectorAll('[data-part-nav]'));
  if (!navs.length) return;

  // 각 nav를 { indicator, items } 형태로 정규화한다.
  const instances = navs
    .map((nav) => ({
      indicator: nav.querySelector('[data-part-nav-indicator]'),
      items: Array.from(nav.querySelectorAll('.part-nav-item')),
    }))
    .filter(({ indicator, items }) => indicator && items.length);

  if (!instances.length) return;

  // 활성 파트는 섹션 id로 식별한다(두 nav가 같은 id 목록을 공유한다).
  const partIds = instances[0].items.map((item) => item.dataset.partNavItem);

  const moveIndicator = ({ indicator, items }, item) => {
    indicator.style.width = `${item.offsetWidth}px`;
    indicator.style.transform = `translateX(${item.offsetLeft - items[0].offsetLeft}px)`;
  };

  let activeId = partIds[0];

  const activate = (partId) => {
    if (!partIds.includes(partId)) return;
    activeId = partId;

    instances.forEach((instance) => {
      const target = instance.items.find((item) => item.dataset.partNavItem === partId);
      if (!target) return;

      instance.items.forEach((item) => item.classList.toggle('is-active', item === target));
      moveIndicator(instance, target);
    });
  };

  activate(activeId);

  // 고정 헤더(75px)에 가려지지 않도록 도착 지점을 조금 위로 띄운다.
  const SCROLL_OFFSET = 96;

  /* 브라우저 기본 behavior:'smooth'는 속도와 easing을 지정할 수 없어
     직접 애니메이션으로 스크롤한다. 시작과 끝 모두 완만해야 페이지 이동이
     자연스러우므로 ease-in-out 곡선을 쓴다(디자인 시스템의 ease-out은
     짧은 hover/fade용이라 긴 이동에는 끝이 급하게 느껴진다). */
  const SCROLL_DURATION = 900;
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animateScrollTo = (targetY, onDone) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    if (!distance) {
      onDone?.();
      return;
    }

    let startTime = null;
    let cancelled = false;

    /* 이동 중 사용자가 직접 휠/터치로 스크롤하면 애니메이션을 즉시 포기한다.
       그러지 않으면 매 프레임 위치를 덮어써 스크롤이 잠긴 것처럼 느껴진다. */
    const cancel = () => {
      cancelled = true;
      removeCancelListeners();
      onDone?.();
    };

    const removeCancelListeners = () => {
      window.removeEventListener('wheel', cancel);
      window.removeEventListener('touchstart', cancel);
      window.removeEventListener('keydown', cancel);
    };

    window.addEventListener('wheel', cancel, { passive: true, once: true });
    window.addEventListener('touchstart', cancel, { passive: true, once: true });
    window.addEventListener('keydown', cancel, { once: true });

    const step = (timestamp) => {
      if (cancelled) return;
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / SCROLL_DURATION, 1);

      window.scrollTo(0, startY + distance * easeInOutCubic(progress));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        removeCancelListeners();
        onDone?.();
      }
    };

    requestAnimationFrame(step);
  };

  /*
   * 스크롤 위치 → 활성 파트 판정.
   * 각 파트 섹션의 화면 점유를 보고, 뷰포트 중앙선을 품은 섹션을 활성으로 잡는다.
   * (중앙선 기준이면 활성 섹션이 항상 최대 1개라 경계에서 두 파트가 다투지 않는다 —
   *  journey-stage.js가 스텝을 고르는 것과 같은 방식이다.)
   */
  const parts = partIds
    .map((id) => ({ id, section: document.getElementById(id) }))
    .filter(({ section }) => section);

  const syncToScroll = () => {
    /* 뷰포트 중앙선을 품은 섹션을 활성으로 잡는다 — 중앙선 기준이면 활성 섹션이
       항상 최대 1개라 경계에서 두 파트가 다투지 않는다(journey-stage.js가
       스텝을 고르는 것과 같은 방식). */
    const line = window.innerHeight / 2;

    const current = parts.find(({ section }) => {
      const { top, bottom } = section.getBoundingClientRect();
      return top <= line && bottom > line;
    });

    /* 두 파트 구간을 모두 벗어난 위치(앞뒤 다른 섹션)에서는 마지막 상태를 유지한다 —
       지나온 파트의 표시를 굳이 지울 이유가 없고, 깜빡임만 생긴다. */
    if (!current) return;

    if (current.id !== activeId) activate(current.id);
  };

  /* 스크롤마다 getBoundingClientRect를 부르므로 프레임당 한 번으로 묶는다. */
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
  syncToScroll();

  // 클릭하면 기본 앵커 점프(즉시 이동)를 막고 페이지를 부드럽게 스크롤한다.
  instances.forEach(({ items }) => {
    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        const partId = item.dataset.partNavItem;
        const section = document.getElementById(partId);

        // 활성 표시는 스크롤 완료를 기다리지 않고 즉시 옮긴다(반응성 우선).
        activate(partId);
        if (!section) return;

        event.preventDefault();

        const targetY = section.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

        if (prefersReducedMotion()) {
          window.scrollTo(0, targetY);
          return;
        }

        animateScrollTo(targetY);
      });
    });
  });

  window.addEventListener('resize', () => {
    activate(activeId);
    syncToScroll();
  });
})();
