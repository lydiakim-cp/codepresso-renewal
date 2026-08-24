/*
 * Part Nav
 * PART 1 · 교육 / PART 2 · 진단 두 섹션을 아우르는 상위 앵커 내비게이션.
 * 두 파트 각각의 sticky 컬럼 안에 같은 nav가 하나씩 놓여 있으므로,
 * 스크롤 위치가 바뀌면 두 인스턴스의 활성 표시를 동시에 같은 파트로 맞춘다.
 *
 * tab이 아니라 <a href="#id">로 해당 섹션까지 이동하는 링크다(콘텐츠는 클릭
 * 여부와 무관하게 항상 전부 노출돼 있다). 인디케이터는 슬라이딩하지 않고
 * 즉시 자리를 옮기며(part-nav.css), 이동감은 클릭 시의 부드러운 페이지
 * 스크롤이 담당한다.
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

  /* 클릭으로 시작한 스크롤이 진행되는 동안에는 아래 IntersectionObserver가
     지나치는 섹션마다 활성 표시를 바꿔버려 깜빡이므로, 목적지에 도착할 때까지
     observer의 갱신을 무시한다. 애니메이션을 직접 돌리므로 해제 시점도
     타이머 추측 없이 완료 콜백으로 정확히 맞춘다. */
  let lockedId = null;

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

        // 이동이 끝날 때까지 observer의 활성 표시 갱신을 잠근다.
        lockedId = partId;
        animateScrollTo(targetY, () => {
          lockedId = null;
        });
      });
    });
  });

  window.addEventListener('resize', () => activate(activeId));

  // 사용자가 직접 스크롤할 때는 뷰포트 중앙에 걸린 섹션을 기준으로 동기화한다.
  const sections = partIds.map((id) => document.getElementById(id)).filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (lockedId && entry.target.id !== lockedId) return;
          activate(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();
