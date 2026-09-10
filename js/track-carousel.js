/*
 * SkillFit 모바일 트랙 캐러셀
 * 560px 이하에서만 동작한다. 첫·마지막 복제 카드를 이용해 끊김 없이 순환하고,
 * 모션 축소 환경에서는 자동 넘김을 멈춘다.
 */
(() => {
  const mobileQuery = window.matchMedia('(max-width: 560px)');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const autoplayDelay = 2500;

  document.querySelectorAll('[data-track-carousel]').forEach((viewport) => {
    const track = viewport.querySelector('.track-grid');
    if (!track) return;

    const originalCards = Array.from(track.children);
    if (originalCards.length < 2) return;

    let cards = originalCards;
    let index = 0;
    let timerId = null;
    let isReady = false;
    let startX = 0;
    let deltaX = 0;

    const getGap = () => Number.parseFloat(getComputedStyle(track).gap) || 0;

    const updatePosition = (animate = true) => {
      const card = cards[index];
      if (!card) return;

      // 흐린 양옆 카드는 scale(.9)가 적용된다. 화면상 크기를 쓰면 다음 카드가
      // 중앙에 오기 전에 작은 폭으로 계산돼 잘리므로, 변형 전 레이아웃 폭을 쓴다.
      const cardWidth = card.offsetWidth;
      const offset = (viewport.clientWidth - cardWidth) / 2 - index * (cardWidth + getGap());
      track.style.setProperty('--track-translate', `${offset}px`);
      track.classList.toggle('is-transitioning', animate);
      cards.forEach((item, itemIndex) => item.classList.toggle('is-current', itemIndex === index));
    };

    const stopAutoplay = () => {
      if (timerId) window.clearInterval(timerId);
      timerId = null;
    };

    const startAutoplay = () => {
      stopAutoplay();
      if (!isReady || reducedMotionQuery.matches) return;
      timerId = window.setInterval(() => move(1), autoplayDelay);
    };

    const move = (direction) => {
      if (!isReady) return;
      index += direction;
      updatePosition(true);
    };

    const initialise = () => {
      if (!mobileQuery.matches || isReady) return;

      const firstClone = originalCards[0].cloneNode(true);
      const lastClone = originalCards[originalCards.length - 1].cloneNode(true);
      firstClone.setAttribute('aria-hidden', 'true');
      lastClone.setAttribute('aria-hidden', 'true');
      track.append(firstClone);
      track.prepend(lastClone);

      cards = Array.from(track.children);
      index = 1;
      isReady = true;
      updatePosition(false);
      startAutoplay();
    };

    const destroy = () => {
      if (!isReady) return;
      stopAutoplay();
      cards.filter((card) => card.getAttribute('aria-hidden') === 'true').forEach((card) => card.remove());
      cards = originalCards;
      cards.forEach((card) => card.classList.remove('is-current'));
      track.classList.remove('is-transitioning');
      track.style.removeProperty('--track-translate');
      index = 0;
      isReady = false;
    };

    track.addEventListener('transitionend', (event) => {
      if (event.propertyName !== 'transform' || !isReady) return;
      if (index !== 0 && index !== cards.length - 1) return;

      index = index === 0 ? cards.length - 2 : 1;
      updatePosition(false);
    });

    viewport.addEventListener('pointerdown', (event) => {
      if (!isReady) return;
      startX = event.clientX;
      deltaX = 0;
      stopAutoplay();
    });

    viewport.addEventListener('pointermove', (event) => {
      if (!isReady || !startX) return;
      deltaX = event.clientX - startX;
    });

    viewport.addEventListener('pointerup', () => {
      if (!isReady) return;
      if (Math.abs(deltaX) > 32) move(deltaX < 0 ? 1 : -1);
      startX = 0;
      startAutoplay();
    });

    viewport.addEventListener('pointercancel', () => {
      startX = 0;
      startAutoplay();
    });

    viewport.addEventListener('mouseenter', stopAutoplay);
    viewport.addEventListener('mouseleave', startAutoplay);
    viewport.addEventListener('focusin', stopAutoplay);
    viewport.addEventListener('focusout', startAutoplay);

    window.addEventListener('resize', () => {
      if (mobileQuery.matches) {
        initialise();
        if (isReady) updatePosition(false);
      } else {
        destroy();
      }
    });

    initialise();
  });
})();
