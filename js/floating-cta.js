/*
 * Floating CTA
 * hero의 CTA 버튼이 화면 밖으로 나간 순간부터 우측 하단 배너를 띄운다.
 * hero 버튼이 다시 보이면 배너를 감춘다 — 같은 행동을 두 개가 동시에 권하지 않는다.
 *
 * [data-floating-cta="{기준 요소 id}"]가 훅이다. 기준 요소를 IntersectionObserver로
 * 관찰하다 화면에서 벗어나면 .is-shown을 붙인다.
 *
 * 스크롤 위치(scrollY > 어떤 값)로 판정하지 않는 이유 — hero 높이는 반응형과 문구
 * 길이에 따라 달라져서 고정 숫자가 금방 어긋난다. 버튼 자체를 관찰하면 항상 맞다.
 *
 * 닫으면 sessionStorage에 기록해 그 세션 동안 다시 뜨지 않는다. 페이지를 오갈 때마다
 * 다시 튀어나오는 배너가 가장 성가시다.
 *
 * IntersectionObserver가 없는 환경에서는 배너를 띄우지 않는다 —
 * hero 안에 같은 CTA가 이미 있으므로 기능이 사라지는 것은 아니다.
 */
(() => {
  const banner = document.querySelector('[data-floating-cta]');
  if (!banner) return;

  const anchor = document.getElementById(banner.dataset.floatingCta);
  if (!anchor || !('IntersectionObserver' in window)) return;

  const DISMISS_KEY = 'floating-cta-dismissed';

  let dismissed = false;
  try {
    dismissed = sessionStorage.getItem(DISMISS_KEY) === '1';
  } catch (error) {
    /* 시크릿 모드 등 sessionStorage 접근이 막힌 환경 — 닫기 기억만 포기한다. */
  }
  if (dismissed) return;

  banner.hidden = false;

  const observer = new IntersectionObserver(([entry]) => {
    banner.classList.toggle('is-shown', !entry.isIntersecting);
  }, { threshold: 0 });

  observer.observe(anchor);

  const close = banner.querySelector('[data-floating-cta-close]');
  if (close) {
    close.addEventListener('click', () => {
      observer.disconnect();
      banner.classList.remove('is-shown');
      /* 트랜지션이 끝난 뒤 DOM에서 뺀다 — 사라지는 것이 보여야 눌린 줄 안다. */
      banner.addEventListener('transitionend', () => { banner.hidden = true; }, { once: true });
      try {
        sessionStorage.setItem(DISMISS_KEY, '1');
      } catch (error) {
        /* 위와 같음 — 기억하지 못해도 이번 화면에서 닫히는 것은 동작한다. */
      }
    });
  }
})();
