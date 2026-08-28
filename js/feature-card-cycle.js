/*
 * Feature Card Cycle
 * [data-feature-cycle] 안의 자식 요소를 순서대로 자동 activate한다.
 * 카드 자체가 무엇인지는 이 스크립트가 몰라도 된다 — 직계 자식을 그대로 순회하고
 * 진행 바(.feature-card-progress-bar)가 그 자식 안에 있으면 함께 채운다.
 * .feature-card-grid(02 Why It Matters)와 .blend-cycle(05 Blended Design)이 공유한다.
 * - 평소: data-interval(ms)마다 다음 카드로 넘어가며, 각 카드 상단 progress bar가
 *   0%→100%로 채워져 다음 전환까지 남은 시간을 보여준다.
 * - 자동 순환 중이던 카드에 마우스를 올리면 진행률이 그 지점에서 그대로 멈춘다
 *   (리셋되지 않는다). 다른(비활성) 카드에 마우스를 올리면 그 카드가 즉시
 *   0%부터 activate된다. 마우스가 벗어나면 원래 카드로 돌아가 멈췄던
 *   진행률부터 이어서 재생되고 자동 순환도 재개된다.
 * - prefers-reduced-motion 사용자에게는 자동 순환 없이 첫 카드만 activate 상태로 둔다.
 */
(() => {
  /* 모바일에서는 카드를 순환시키지 않고 전부 펼쳐 둔다(사용자 확인) —
     좁은 화면에서 카드가 세로로 쌓이면 순환이 오히려 "다른 카드가 왜
     닫혀 있는지" 헷갈리게 한다. 뷰포트 폭은 리사이즈에 반응하지 않고
     스크립트 로드 시점에 한 번만 확인한다 — 다른 스크립트의
     prefersReducedMotion과 같은 방식이다. */
  const isMobile = window.matchMedia('(max-width: 560px)').matches;

  function parseCssDuration(value) {
    if (!value) return 0;
    const trimmed = value.trim();
    if (trimmed.endsWith('ms')) return parseFloat(trimmed);
    if (trimmed.endsWith('s')) return parseFloat(trimmed) * 1000;
    return 0;
  }

  const groups = document.querySelectorAll('[data-feature-cycle]');
  if (!groups.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  groups.forEach((group) => {
    const cards = Array.from(group.children);
    if (!cards.length) return;

    if (isMobile) {
      cards.forEach((card) => card.classList.add('is-active'));
      return;
    }

    // 순환 주기는 CSS 토큰(--duration-cycle)이 단일 진실 소스다.
    // progress bar의 transition-duration과 항상 같은 값을 쓰도록 여기서 읽어온다.
    const cycleToken = getComputedStyle(group).getPropertyValue('--duration-cycle').trim();
    const interval = parseCssDuration(cycleToken) || Number(group.dataset.interval) || 5000;

    // 카드별 진행 상태. elapsed는 "이 카드가 마지막으로 멈췄을 때까지 흐른 시간(ms)".
    // homeIndex는 자동 순환이 실제로 activate하고 있는 카드(=hover가 없을 때의 카드).
    const state = cards.map(() => ({ elapsed: 0 }));
    let homeIndex = 0;
    let hoveredIndex = null; // 현재 마우스가 올라가 있는 카드 인덱스(없으면 null)
    let timerId = null;
    let segmentStartedAt = performance.now();

    function getBar(card) {
      return card.querySelector('.feature-card-progress-bar');
    }

    // progress bar를 0%부터 durationMs 동안 채운다(새 구간 시작).
    function playBar(card, durationMs) {
      const bar = getBar(card);
      if (!bar) return;
      bar.style.transitionDuration = '0ms';
      bar.style.width = '0%';
      // eslint-disable-next-line no-unused-expressions
      bar.offsetWidth; // 리셋을 강제로 반영시켜 다음 transition이 0%부터 시작하게 한다.
      bar.style.transitionDuration = `${durationMs}ms`;
      bar.style.transitionTimingFunction = 'linear';
      bar.style.width = '100%';
    }

    // 현재 width(멈춘 지점)는 그대로 두고, 그 지점에서 100%까지를
    // durationMs 동안 이어서 채운다(0%로 되돌리지 않음).
    function resumeBar(card, durationMs) {
      const bar = getBar(card);
      if (!bar) return;
      bar.style.transitionDuration = '0ms';
      // eslint-disable-next-line no-unused-expressions
      bar.offsetWidth; // 현재 width를 확정시킨다.
      bar.style.transitionDuration = `${durationMs}ms`;
      bar.style.transitionTimingFunction = 'linear';
      bar.style.width = '100%';
    }

    // 진행 중인 progress bar를 현재 채워진 지점(%)에서 그대로 멈춘다.
    function pauseBarAt(card, ratioPercent) {
      const bar = getBar(card);
      if (!bar) return;
      bar.style.transitionDuration = '0ms';
      bar.style.width = `${Math.min(100, Math.max(0, ratioPercent))}%`;
    }

    function resetBar(card) {
      const bar = getBar(card);
      if (!bar) return;
      bar.style.transitionDuration = '0ms';
      bar.style.width = '0%';
    }

    function readBarRatioPercent(card) {
      const bar = getBar(card);
      if (!bar) return 0;
      const currentWidth = parseFloat(getComputedStyle(bar).width);
      const trackWidth = parseFloat(getComputedStyle(bar.parentElement).width);
      return trackWidth > 0 ? (currentWidth / trackWidth) * 100 : 0;
    }

    // homeIndex 카드를 activate하고, 그 카드의 저장된 elapsed부터 이어서 재생한다.
    // elapsed가 0이면(새로 시작하는 경우) 0%부터 재생한다.
    function renderHome() {
      cards.forEach((card, i) => {
        card.classList.toggle('is-active', i === homeIndex);
        if (i !== homeIndex) resetBar(card);
      });

      const homeCard = cards[homeIndex];
      const elapsed = state[homeIndex].elapsed;
      const remaining = Math.max(0, interval - elapsed);
      segmentStartedAt = performance.now() - elapsed;

      if (elapsed > 0) {
        resumeBar(homeCard, remaining);
      } else {
        playBar(homeCard, interval);
      }
    }

    function goToNext() {
      state[homeIndex].elapsed = 0;
      homeIndex = (homeIndex + 1) % cards.length;
      state[homeIndex].elapsed = 0;
      renderHome();
    }

    function startTimer() {
      stopTimer();
      if (prefersReducedMotion || hoveredIndex !== null) return;
      const remaining = Math.max(0, interval - state[homeIndex].elapsed);
      timerId = window.setTimeout(() => {
        goToNext();
        startTimer();
      }, remaining);
    }

    function stopTimer() {
      if (timerId !== null) {
        window.clearTimeout(timerId);
        timerId = null;
      }
    }

    function enterCard(index) {
      hoveredIndex = index;
      stopTimer();

      if (index === homeIndex) {
        // 자동 순환 중이던 카드 위로 올라온 경우: 진행률을 현재 지점에서 그대로 멈춘다.
        state[homeIndex].elapsed = Math.min(interval, performance.now() - segmentStartedAt);
        pauseBarAt(cards[homeIndex], readBarRatioPercent(cards[homeIndex]));
      } else {
        // 다른(비활성) 카드 위로 올라온 경우: 그 카드를 즉시 0%부터 activate한다.
        // homeIndex는 지금 이 순간의 진행률을 스냅샷으로 저장해 두고 progress
        // bar도 그 지점에서 고정해서, 나중에 되돌아왔을 때 이어갈 수 있게 한다.
        state[homeIndex].elapsed = Math.min(interval, performance.now() - segmentStartedAt);
        pauseBarAt(cards[homeIndex], readBarRatioPercent(cards[homeIndex]));

        cards.forEach((card, i) => {
          card.classList.toggle('is-active', i === index);
          if (i !== index && i !== homeIndex) resetBar(card);
        });
        playBar(cards[index], interval);
      }
    }

    function leaveCard(index) {
      if (hoveredIndex !== index) return; // 이미 다른 카드로 옮겨간 뒤의 stale 이벤트는 무시
      hoveredIndex = null;

      if (index !== homeIndex) {
        // 임시로 훑어보던 카드였을 뿐이니 그 카드의 진행은 버리고 원래 카드로 되돌린다.
        resetBar(cards[index]);
      }
      renderHome();
      startTimer();
    }

    cards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => enterCard(index));
      card.addEventListener('mouseleave', () => leaveCard(index));
      card.addEventListener('focusin', () => enterCard(index));
      card.addEventListener('focusout', () => leaveCard(index));
    });

    renderHome();
    startTimer();
  });
})();
