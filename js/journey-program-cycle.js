/*
 * Journey Program Cycle
 * .journey-program-showcase[data-program-showcase] 안에서 우측 프로그램 리스트
 * (.journey-program)와 좌측 썸네일 미리보기(.journey-program-thumb)를 짝지어 전환한다.
 * - 평소: data-interval(ms)마다 다음 항목이 자동으로 activate된다.
 * - 리스트 항목에 마우스를 올리면(또는 포커스) 그 항목이 즉시 activate되고 자동 순환은 멈춘다.
 * - 마우스가 벗어나면(포커스 아웃) 자동 순환이 이어서 재개된다.
 * - prefers-reduced-motion 사용자에게는 자동 순환 없이 첫 항목만 activate 상태로 둔다.
 */
(() => {
  const groups = document.querySelectorAll('[data-program-showcase]');
  if (!groups.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  groups.forEach((group) => {
    const items = Array.from(group.querySelectorAll('[data-program-item]'));
    const thumbs = Array.from(group.querySelectorAll('[data-program-thumb]'));
    if (!items.length || !thumbs.length) return;

    const interval = Number(group.dataset.interval) || 3200;

    let activeIndex = 0;
    let isHovering = false;
    let timerId = null;

    function activate(index) {
      activeIndex = index;
      items.forEach((item, i) => item.classList.toggle('is-active', i === index));
      thumbs.forEach((thumb, i) => thumb.classList.toggle('is-active', i === index));
    }

    function startTimer() {
      stopTimer();
      if (prefersReducedMotion || isHovering) return;
      timerId = window.setTimeout(() => {
        activate((activeIndex + 1) % items.length);
        startTimer();
      }, interval);
    }

    function stopTimer() {
      if (timerId !== null) {
        window.clearTimeout(timerId);
        timerId = null;
      }
    }

    items.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        isHovering = true;
        stopTimer();
        activate(index);
      });
      item.addEventListener('mouseleave', () => {
        isHovering = false;
        startTimer();
      });
      item.addEventListener('focusin', () => {
        isHovering = true;
        stopTimer();
        activate(index);
      });
      item.addEventListener('focusout', () => {
        isHovering = false;
        startTimer();
      });
    });

    activate(0);
    startTimer();
  });
})();
