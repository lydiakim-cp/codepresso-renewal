/*
 * Include Partials
 * `<div data-include="partials/header.html">` 자리에 그 파일의 내용을 fetch해 넣는다.
 * GNB·footer처럼 모든 페이지가 같은 마크업을 쓰는 조각을 페이지마다 복사하지 않기 위한 것이다.
 *
 * - 삽입이 끝나면 wrapper div는 없어지고 조각의 내용만 남는다(불필요한 div를 남기지 않는다).
 * - 삽입 후 `partials:loaded` 이벤트를 document에 한 번 보낸다. GNB를 다루는
 *   header-scroll.js·nav-menu.js는 이 이벤트를 기다렸다가 초기화한다 —
 *   fetch가 비동기라 그 스크립트들이 먼저 돌면 아직 마크업이 없다.
 * - **조각이 없거나 fetch가 실패해도 이벤트는 반드시 한 번 나간다.** 헤더가 외부
 *   패키지로 바뀌어 이 슬롯이 사라져도 대기 중인 스크립트가 멈추지 않게 하기 위한 것이다.
 * - 이벤트가 이미 나간 뒤에 붙는 리스너를 위해 `document.documentElement`에
 *   `data-partials="loaded"`를 남긴다 — 늦게 로드된 스크립트는 이 표식을 보고 바로 초기화한다.
 * - **file:// 로 열면 동작하지 않는다.** fetch가 CORS로 막히므로 로컬에서도
 *   `python -m http.server` 같은 정적 서버로 띄워서 확인한다.
 */
(() => {
  const slots = Array.from(document.querySelectorAll('[data-include]'));

  // 조각이 하나도 없는 페이지(카탈로그 문서 등)에서도 대기 중인 스크립트가
  // 멈추지 않도록 이벤트는 항상 보낸다.
  const done = () => {
    // 늦게 붙는 리스너가 "이미 끝났음"을 알 수 있도록 표식을 먼저 남긴다.
    document.documentElement.dataset.partials = 'loaded';
    document.dispatchEvent(new CustomEvent('partials:loaded'));
  };

  if (!slots.length) {
    done();
    return;
  }

  const load = (slot) => {
    const url = slot.dataset.include;

    return fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.text();
      })
      .then((html) => {
        // wrapper를 남기지 않고 그 자리에 내용만 펼쳐 넣는다.
        const range = document.createRange();
        range.selectNodeContents(slot);
        slot.replaceWith(range.createContextualFragment(html));
      })
      .catch((err) => {
        // 조각을 못 읽어도 페이지 본문은 살려 둔다. 원인을 알 수 있게 남긴다.
        console.error(`[include-partials] ${url} 를 불러오지 못했습니다.`, err);
        slot.remove();
      });
  };

  Promise.all(slots.map(load)).then(done);
})();
