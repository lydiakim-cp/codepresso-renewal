/*
 * Case Filter
 * [data-case-filter]의 분류 버튼으로 [data-case-list] 안의 카드를 걸러 보여준다.
 * - 버튼은 data-case-tab="{key}", 카드는 data-case-axis="{key}"로 짝을 맞춘다.
 *   "all"은 예약어로 전부 보여준다.
 * - 컨트롤 자체는 공용 part-nav(캡슐형 segmented control)를 그대로 쓴다. part-nav.js는
 *   앵커로 페이지를 스크롤하는 전용 스크립트라 여기에 쓸 수 없어, 필터 동작만
 *   이 파일이 맡는다. 인디케이터를 옮기는 계산은 part-nav.js와 같은 방식이다.
 * - 자동 순환하지 않는다. 사용자가 보고 싶은 갈래를 직접 고르는 화면이라,
 *   읽는 중에 목록이 바뀌면 방해가 된다(catalog-board.js와 같은 판단).
 * - 걸러진 뒤 남은 카드는 순차 지연으로 다시 떠오른다. 지연값은 CSS가
 *   --case-index로 받아 쓴다(모션 자체는 cases.css 소유).
 */
(() => {
  const roots = document.querySelectorAll('[data-case-filter]');
  if (!roots.length) return;

  roots.forEach((root) => {
    const nav = root.querySelector('.part-nav');
    const indicator = root.querySelector('.part-nav-indicator');
    const tabs = Array.from(root.querySelectorAll('[data-case-tab]'));
    if (!nav || !indicator || !tabs.length) return;

    /* 목록은 필터 컨트롤 바깥(같은 .section-content 안)에 있다 —
       컨트롤과 목록이 형제라 root가 아니라 문서에서 찾는다. */
    const list = document.querySelector('[data-case-list]');
    if (!list) return;

    const cards = Array.from(list.children);
    const countEl = root.querySelector('[data-case-count]');

    const moveIndicator = (tab) => {
      indicator.style.width = `${tab.offsetWidth}px`;
      indicator.style.transform = `translateX(${tab.offsetLeft - tabs[0].offsetLeft}px)`;
    };

    let activeKey = 'all';

    const activate = (key) => {
      activeKey = key;

      const target = tabs.find((tab) => tab.dataset.caseTab === key) || tabs[0];
      tabs.forEach((tab) => {
        const isActive = tab === target;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-pressed', String(isActive));
      });
      moveIndicator(target);

      /* 남은 카드에만 0부터 다시 순번을 매긴다 — 원래 인덱스를 쓰면 앞쪽이 걸러졌을 때
         첫 카드가 늦게 나타나 목록이 비어 보이는 순간이 생긴다. */
      let visibleIndex = 0;
      cards.forEach((card) => {
        const matched = key === 'all' || card.dataset.caseAxis === key;
        card.hidden = !matched;
        if (matched) {
          card.style.setProperty('--case-index', visibleIndex);
          visibleIndex += 1;
        }
      });

      if (countEl) countEl.textContent = `${visibleIndex}개 사례`;
    };

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => activate(tab.dataset.caseTab));
    });

    // 마크업에 이미 .is-active가 있으면 그것을 존중하고, 없으면 첫 분류를 켠다.
    const preset = tabs.find((tab) => tab.classList.contains('is-active'));
    activate(preset ? preset.dataset.caseTab : tabs[0].dataset.caseTab);

    /* 폰트가 늦게 로드되면 버튼 폭이 바뀌어 인디케이터가 어긋난다. 폭이 확정된 뒤 한 번 더 맞춘다. */
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => activate(activeKey));
    }

    window.addEventListener('resize', () => activate(activeKey));
  });
})();
