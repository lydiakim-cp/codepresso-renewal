/*
 * GNB 2depth Mega Menu
 * - nav-trigger에 hover하거나 키보드 포커스가 들어오면 해당 .nav-item에 is-open을 붙인다.
 * - hover와 키보드를 한 상태(is-open + aria-expanded)로 통합해, CSS :hover만으로 열 때
 *   생기는 문제(키보드 사용자가 열 수 없음, 패널 밖으로 나가도 안 닫힘)를 피한다.
 * - 마우스가 트리거와 패널 사이 빈 공간을 지날 때 깜빡이지 않도록 닫기에만 짧은 지연을 둔다.
 * - 패널이 열려 있는 동안에는 header에도 is-nav-open을 붙여, 헤더 배경을 패널과 같은
 *   흰색 서피스로 맞춘다(헤더+패널이 한 덩어리로 보이게).
 *
 * GNB는 partials/header.html에서 fetch로 삽입되므로(js/include-partials.js) 이 스크립트가
 * 먼저 돌면 [data-nav-item]이 아직 없다. 그래서 `partials:loaded`를 기다렸다가 초기화한다.
 */
(() => {
  const init = () => {
  const items = Array.from(document.querySelectorAll("[data-nav-item]"));
  if (!items.length) return;

  const header = document.querySelector(".header");

  // 트리거 → 패널로 마우스를 옮기는 동안 닫히지 않게 하는 유예 시간(ms).
  const CLOSE_DELAY = 120;
  let closeTimer = null;

  const setOpen = (item, open) => {
    const trigger = item.querySelector(".nav-trigger");
    item.classList.toggle("is-open", open);
    if (trigger) trigger.setAttribute("aria-expanded", String(open));
  };

  // 하나라도 열려 있으면 header를 패널과 같은 서피스로 전환한다.
  const syncHeader = () => {
    if (!header) return;
    const anyOpen = items.some((item) => item.classList.contains("is-open"));
    header.classList.toggle("is-nav-open", anyOpen);
  };

  const closeAll = () => {
    items.forEach((item) => setOpen(item, false));
    syncHeader();
  };

  const open = (item) => {
    clearTimeout(closeTimer);
    items.forEach((other) => setOpen(other, other === item));
    syncHeader();
  };

  const scheduleClose = () => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(closeAll, CLOSE_DELAY);
  };

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => open(item));
    item.addEventListener("mouseleave", scheduleClose);

    // 키보드: 포커스가 이 item 안에 있으면 열고, 밖으로 나가면 닫는다.
    item.addEventListener("focusin", () => open(item));
    item.addEventListener("focusout", (event) => {
      if (!item.contains(event.relatedTarget)) scheduleClose();
    });

    const trigger = item.querySelector(".nav-trigger");
    if (trigger) {
      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");
        if (isOpen) {
          closeAll();
        } else {
          open(item);
        }
      });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openItem = items.find((item) => item.classList.contains("is-open"));
    if (!openItem) return;
    closeAll();
    openItem.querySelector(".nav-trigger")?.focus();
  });

  // 스크롤로 header가 숨겨지면 열린 패널도 함께 닫는다.
  window.addEventListener("scroll", closeAll, { passive: true });
  };

  document.addEventListener("partials:loaded", init, { once: true });
})();
