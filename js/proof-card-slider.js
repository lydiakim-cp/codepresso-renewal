/*
 * Proof Card Deck
 * 카드가 겹쳐 쌓이고, 좌우 버튼을 누르면 맨 앞 카드가 위로 fade 되며 사라지고
 * 뒤에 옅게 대기하던 카드가 커지면서 그 자리로 올라온다.
 * 5초마다 자동으로 다음 카드로 넘어가며, 마지막 카드 다음은 첫 카드로 순환한다.
 * 마우스를 올린 동안은 자동 전환을 멈춘다.
 */
(() => {
  const AUTOPLAY_MS = 5000;

  const deck = document.querySelector('[data-proof-deck]');
  if (!deck) return;

  const cards = Array.from(deck.querySelectorAll('.proof-card'));
  const stage = document.querySelector('.proof-card-stage');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (cards.length <= 1) return;

  let activeIndex = 0;
  let timerId = null;

  // is-exiting 인 카드는 그대로 두고, 나머지만 active/waiting 으로 정리한다.
  const render = (exitingCard) => {
    cards.forEach((card, i) => {
      if (card === exitingCard) return;
      card.classList.remove('is-active', 'is-waiting');
      card.classList.toggle('is-active', i === activeIndex);
      card.classList.toggle('is-waiting', i !== activeIndex);
    });
  };

  const advance = () => {
    const current = cards[activeIndex];
    activeIndex = (activeIndex + 1) % cards.length;

    current.classList.remove('is-active');
    current.classList.add('is-exiting');
    current.addEventListener(
      'transitionend',
      () => {
        current.classList.remove('is-exiting');
        current.classList.add('is-waiting');
      },
      { once: true }
    );

    render(current);
  };

  const startAutoplay = () => {
    if (prefersReducedMotion) return;
    stopAutoplay();
    timerId = window.setInterval(advance, AUTOPLAY_MS);
  };

  const stopAutoplay = () => {
    if (timerId) window.clearInterval(timerId);
    timerId = null;
  };

  render();

  document.querySelectorAll('.proof-card-nav').forEach((button) => {
    button.addEventListener('click', () => {
      advance();
      startAutoplay();
    });
  });

  if (stage) {
    stage.addEventListener('mouseenter', stopAutoplay);
    stage.addEventListener('mouseleave', startAutoplay);
  }

  startAutoplay();
})();
