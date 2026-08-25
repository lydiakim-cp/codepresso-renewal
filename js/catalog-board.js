/*
 * Catalog Board
 * [data-catalog-board] 안의 분류 버튼을 누르면 같은 key를 가진 판으로 교체한다.
 * - 버튼은 data-catalog-category="{key}", 판은 data-catalog-panel="{key}"로 짝을 맞춘다.
 * - 활성 표시는 .is-active 하나로 버튼과 판 양쪽에 붙는다.
 * - 자동 순환은 하지 않는다. 사용자가 보고 싶은 분야를 직접 고르는 화면이라,
 *   읽는 중에 판이 바뀌면 방해가 된다.
 */
(() => {
  const boards = document.querySelectorAll('[data-catalog-board]');
  if (!boards.length) return;

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

    buttons.forEach((button) => {
      button.addEventListener('click', () => activate(button.dataset.catalogCategory));
    });

    // 마크업에 이미 .is-active가 있으면 그것을 존중하고, 없으면 첫 분야를 켠다.
    const preset = buttons.find((button) => button.classList.contains('is-active'));
    activate(preset ? preset.dataset.catalogCategory : buttons[0].dataset.catalogCategory);
  });
})();
