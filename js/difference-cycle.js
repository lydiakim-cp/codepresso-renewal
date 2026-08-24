/*
 * Difference Cycle
 * .difference-showcase[data-difference-showcase] 안에서 탭(.difference-tab)과
 * 패널(.difference-panel)을 짝지어 전환한다.
 * - 평소: data-interval(ms)마다 다음 탭으로 자동 전환된다.
 * - 쇼케이스 안에 마우스가 있거나 포커스가 들어오면 자동 전환이 멈추고, 벗어나면 재개된다.
 * - 탭 클릭/좌우 방향키로 직접 전환할 수 있다(role="tablist" 키보드 규약).
 * - prefers-reduced-motion 사용자에게는 자동 전환 없이 첫 탭만 열어둔다.
 *
 * 자동 순환의 리듬·hover 일시정지 규칙은 journey-program-cycle.js와 같다.
 */
(() => {
  const groups = document.querySelectorAll('[data-difference-showcase]');
  if (!groups.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  groups.forEach((group) => {
    const tabs = Array.from(group.querySelectorAll('[data-difference-tab]'));
    const panels = Array.from(group.querySelectorAll('[data-difference-panel]'));
    if (tabs.length !== panels.length || !tabs.length) return;

    const interval = Number(group.dataset.interval) || 3000;

    let activeIndex = 0;
    let isPaused = false;
    let timerId = null;

    function activate(index) {
      activeIndex = index;

      tabs.forEach((tab, i) => {
        const isActive = i === index;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
        // tablist 안에서는 활성 탭만 Tab 키 순서에 남긴다.
        tab.tabIndex = isActive ? 0 : -1;
      });

      panels.forEach((panel, i) => {
        const isActive = i === index;
        panel.classList.toggle('is-active', isActive);
        panel.hidden = !isActive;
      });
    }

    function startTimer() {
      stopTimer();
      if (prefersReducedMotion || isPaused) return;
      timerId = window.setTimeout(() => {
        activate((activeIndex + 1) % tabs.length);
        startTimer();
      }, interval);
    }

    function stopTimer() {
      if (timerId !== null) {
        window.clearTimeout(timerId);
        timerId = null;
      }
    }

    // 일시정지는 쇼케이스 전체 기준 — 패널 안 카드로 마우스를 옮겨도 계속 멈춰 있는다.
    group.addEventListener('mouseenter', () => {
      isPaused = true;
      stopTimer();
    });
    group.addEventListener('mouseleave', () => {
      isPaused = false;
      startTimer();
    });
    group.addEventListener('focusin', () => {
      isPaused = true;
      stopTimer();
    });
    group.addEventListener('focusout', () => {
      isPaused = false;
      startTimer();
    });

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        activate(index);
        startTimer();
      });

      tab.addEventListener('keydown', (event) => {
        const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
        if (!step) return;
        event.preventDefault();
        const next = (index + step + tabs.length) % tabs.length;
        activate(next);
        tabs[next].focus();
      });
    });

    activate(0);
    startTimer();
  });
})();
