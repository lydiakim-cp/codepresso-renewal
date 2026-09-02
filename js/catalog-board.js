/*
 * Catalog Board
 * [data-catalog-board] 안의 분류 버튼을 누르면 같은 key를 가진 판으로 교체한다.
 * - 버튼은 data-catalog-category="{key}", 판은 data-catalog-panel="{key}"로 짝을 맞춘다.
 * - 활성 표시는 .is-active 하나로 버튼과 판 양쪽에 붙는다.
 * - data-catalog-autoplay="{ms}"가 있으면 그 간격으로 자동 순환한다(없으면 클릭으로만 전환).
 * - 자동 순환 중 클릭하면 그 탭부터 다시 시작하고, rail·판 위에 마우스가 있으면 멈춘다.
 */
(() => {
  const boards = document.querySelectorAll('[data-catalog-board]');
  if (!boards.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  boards.forEach((board) => {
    const buttons = Array.from(board.querySelectorAll('[data-catalog-category]'));
    const panels = Array.from(board.querySelectorAll('[data-catalog-panel]'));
    if (!buttons.length || !panels.length) return;

    const activate = (key) => {
      buttons.forEach((button) => {
        button.classList.toggle('is-active', button.dataset.catalogCategory === key);
      });
      panels.forEach((panel) => {
        panel.classList.toggle('is-active', panel.dataset.catalogPanel === key);
      });
    };

    const interval = Number(board.dataset.catalogAutoplay);
    const autoplayEnabled = interval > 0 && !prefersReducedMotion;
    let timer = null;

    const stopAutoplay = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };

    const startAutoplay = () => {
      if (!autoplayEnabled) return;
      stopAutoplay();
      timer = setInterval(() => {
        const currentIndex = buttons.findIndex((button) => button.classList.contains('is-active'));
        const next = buttons[(currentIndex + 1) % buttons.length];
        activate(next.dataset.catalogCategory);
      }, interval);
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        activate(button.dataset.catalogCategory);
        startAutoplay();
      });
    });

    // 마크업에 이미 .is-active가 있으면 그것을 존중하고, 없으면 첫 분야를 켠다.
    const preset = buttons.find((button) => button.classList.contains('is-active'));
    activate(preset ? preset.dataset.catalogCategory : buttons[0].dataset.catalogCategory);

    if (!autoplayEnabled) return;

    const rail = board.querySelector('.catalog-board__rail');
    const main = board.querySelector('.catalog-board__main');
    [rail, main].forEach((area) => {
      if (!area) return;
      area.addEventListener('mouseenter', stopAutoplay);
      area.addEventListener('mouseleave', startAutoplay);
    });

    startAutoplay();
  });
})();
