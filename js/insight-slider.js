/*
 * Insight Slider
 * 인사이트 카드 트랙을 좌우 버튼으로 한 페이지씩(보이는 카드 수만큼) 밀어 움직인다.
 * 카드 폭은 반응형으로 달라지므로 실측값(offsetWidth + gap)으로 이동량을 계산하고,
 * 끝에서 다음으로 넘기면 처음으로, 처음에서 이전으로 넘기면 끝으로 순환한다.
 */
(() => {
  const slider = document.querySelector('[data-insight-slider]');
  if (!slider) return;

  const track = slider.querySelector('.insight-track');
  const cards = Array.from(track.querySelectorAll('.insight-card'));
  const prevButton = slider.querySelector('.insight-nav.prev');
  const nextButton = slider.querySelector('.insight-nav.next');

  if (cards.length <= 1) return;

  let offset = 0;

  // 카드 하나가 차지하는 실제 가로 길이(카드 폭 + gap).
  const stepSize = () => {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return cards[0].offsetWidth + gap;
  };

  // 트랙이 왼쪽으로 밀 수 있는 최대 거리 — 마지막 카드가 오른쪽 끝에 맞는 지점.
  const maxOffset = () => Math.max(0, track.scrollWidth - slider.querySelector('.insight-track-viewport').clientWidth);

  const render = () => {
    offset = Math.min(offset, maxOffset());
    track.style.transform = `translateX(${-offset}px)`;
  };

  // 한 번에 화면에 보이는 카드 수만큼 이동한다.
  // 끝(또는 처음)에서 한 번 더 누르면 반대쪽 끝으로 순환한다 — 버튼은 항상 활성 상태를 유지한다.
  const move = (direction) => {
    const step = stepSize();
    const perView = Math.max(1, Math.round(slider.querySelector('.insight-track-viewport').clientWidth / step));
    const max = maxOffset();
    const next = offset + direction * step * perView;

    if (direction > 0 && offset >= max - 1) {
      offset = 0;
    } else if (direction < 0 && offset <= 0) {
      offset = max;
    } else {
      offset = Math.max(0, Math.min(next, max));
    }
    render();
  };

  prevButton.addEventListener('click', () => move(-1));
  nextButton.addEventListener('click', () => move(1));

  // 카드 폭이 바뀌면 현재 위치가 어긋나므로 처음으로 되돌린다.
  window.addEventListener('resize', () => {
    offset = 0;
    render();
  });

  render();
})();
