/*
 * Difference Cycle
 * PART 3 목업의 3개 화면(정량적 관리 · 문화 정착 · 현장 검증)을 일정 주기로 교체한다.
 *
 * - 주기는 CSS 토큰 --duration-cycle이 단일 진실 소스다(difference.css에서 5s로 둔다).
 *   legend 진행바의 transition-duration도 같은 토큰을 읽으므로 둘이 어긋나지 않는다.
 * - 화면 전환은 .is-active 토글만 하고, 실제 교차 페이드는 CSS가 담당한다.
 * - legend 항목은 인디케이터를 겸한다 — 활성 항목만 진하게 두고 진행바가 차오른다.
 *   클릭·포커스하면 그 화면으로 바로 이동하고 주기가 다시 시작된다.
 * - 목업이나 legend에 마우스를 올리면 그 지점에서 일시정지한다. 진행바를 0으로
 *   되돌리지 않고 멈춘 지점부터 이어서 재생하므로, 잠깐 올렸다 내려도 방금 보던
 *   화면이 갑자기 처음부터 다시 시작하지 않는다.
 *   (그래서 setInterval이 아니라 남은 시간만큼의 setTimeout으로 굴린다.)
 * - 섹션이 화면 밖일 때도 멈춘다. 보이지도 않는 화면이 계속 돌면 사용자가
 *   스크롤해 왔을 때 몇 번째인지 알 수 없는 상태로 만난다.
 * - 목업 안의 stage 연출(②의 3단계 등장)은 한 번만 재생되는 연출이라,
 *   화면이 자기 차례로 돌아올 때 여기서 되감아 다시 재생시킨다.
 * - prefers-reduced-motion에서는 순환하지 않고 첫 화면만 둔다.
 */
(() => {
  const stage = document.querySelector('[data-difference-screens]');
  const legend = document.querySelector('[data-difference-legend]');
  if (!stage || !legend) return;

  const screens = Array.from(stage.querySelectorAll('[data-difference-screen]'));
  const items = Array.from(legend.querySelectorAll('[data-difference-legend-item]'));
  if (screens.length < 2 || screens.length !== items.length) return;

  /* 주기는 CSS 토큰에서 읽는다. 초/밀리초 단위 표기를 모두 받는다. */
  const parseDuration = (value) => {
    const text = (value || '').trim();
    if (text.endsWith('ms')) return parseFloat(text);
    if (text.endsWith('s')) return parseFloat(text) * 1000;
    return 0;
  };

  const interval =
    parseDuration(getComputedStyle(legend).getPropertyValue('--duration-cycle')) || 5000;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let index = 0;
  let timerId = null;
  /* 현재 화면이 시작된 시각. 일시정지할 때 여기서 경과 시간을 계산한다. */
  let startedAt = 0;
  /* 멈춰 있던 동안 누적된 경과 시간(ms). 재개하면 이 지점부터 이어간다. */
  let elapsed = 0;
  let isHovered = false;
  let isVisible = false;

  const bar = (item) => item.querySelector('.difference-legend-progress-bar');

  /* 진행바를 0%에서 durationMs 동안 채운다(새 구간 시작).
     클래스만 다시 붙여서는 이미 끝난 transition이 되감기지 않으므로,
     width를 0으로 되돌리고 reflow를 한 번 강제한다. */
  const playBar = (item, durationMs) => {
    const el = bar(item);
    if (!el) return;
    el.style.transitionDuration = '0ms';
    el.style.width = '0%';
    void el.offsetWidth;
    el.style.transitionDuration = `${durationMs}ms`;
    el.style.width = '100%';
  };

  /* 현재 채워진 지점은 그대로 두고 100%까지를 durationMs 동안 이어서 채운다. */
  const resumeBar = (item, durationMs) => {
    const el = bar(item);
    if (!el) return;
    el.style.transitionDuration = '0ms';
    void el.offsetWidth;
    el.style.transitionDuration = `${durationMs}ms`;
    el.style.width = '100%';
  };

  /* 진행 중인 진행바를 지금 채워진 지점에서 그대로 멈춘다.
     computed width를 읽어 그 값으로 고정해야 transition이 끊긴다. */
  const freezeBar = (item) => {
    const el = bar(item);
    if (!el) return;
    const filled = parseFloat(getComputedStyle(el).width);
    const track = parseFloat(getComputedStyle(el.parentElement).width);
    el.style.transitionDuration = '0ms';
    el.style.width = track > 0 ? `${(filled / track) * 100}%` : '0%';
  };

  const resetBar = (item) => {
    const el = bar(item);
    if (!el) return;
    el.style.transitionDuration = '0ms';
    el.style.width = '0%';
  };

  /* 목업 안의 stage 연출(mock-motion.css)은 무한 반복이 아니라 한 번만 재생된다 —
     단계는 쌓이는 것이라 다 켜진 뒤 도로 사라지면 방금 읽은 순서가 부정된다.
     대신 그 화면이 자기 차례로 돌아올 때마다 처음부터 다시 보여야 하므로,
     활성화하는 이 지점에서 애니메이션을 되감는다.
     클래스만 다시 붙여서는 이미 끝난 애니메이션이 되감기지 않으므로,
     animation을 잠깐 끄고 reflow를 한 번 강제한다(진행바 playBar와 같은 방식). */
  const replayStage = (screen) => {
    const parts = screen.querySelectorAll(
      '[data-mock-motion="stage"] .is-step, [data-mock-motion="stage"] .is-cue, [data-mock-motion="stage"] .is-flow'
    );
    if (!parts.length) return;
    parts.forEach((el) => { el.style.animation = 'none'; });
    void screen.offsetWidth;
    parts.forEach((el) => { el.style.animation = ''; });
  };

  /* 화면과 legend의 활성 표시를 현재 index에 맞춘다. 진행바는 건드리지 않는다 —
     새로 시작할지 이어서 재생할지는 호출하는 쪽(run/pause)이 정한다. */
  const render = () => {
    screens.forEach((screen, i) => {
      const isCurrent = i === index;
      const wasCurrent = screen.classList.contains('is-active');
      screen.classList.toggle('is-active', isCurrent);
      /* 이미 활성이던 화면을 다시 그릴 때는 되감지 않는다 — hover로 잠깐 멈췄다
         재개할 때마다 연출이 처음부터 다시 돌면 읽던 흐름이 끊긴다. */
      if (isCurrent && !wasCurrent) replayStage(screen);
    });
    items.forEach((item, i) => {
      item.classList.toggle('is-active', i === index);
      if (i !== index) resetBar(item);
    });
  };

  const clearTimer = () => {
    if (timerId === null) return;
    window.clearTimeout(timerId);
    timerId = null;
  };

  /* 남은 시간만큼 타이머를 건다. 멈췄다 재개하면 남은 시간만 다시 센다. */
  const run = () => {
    clearTimer();
    if (prefersReducedMotion || isHovered || !isVisible) return;

    const remaining = Math.max(0, interval - elapsed);
    startedAt = performance.now() - elapsed;

    if (elapsed > 0) resumeBar(items[index], remaining);
    else playBar(items[index], interval);

    timerId = window.setTimeout(() => {
      index = (index + 1) % screens.length;
      elapsed = 0;
      render();
      run();
    }, remaining);
  };

  /* 지금까지 흐른 시간을 저장하고 진행바를 그 지점에서 멈춘다. */
  const pause = () => {
    clearTimer();
    if (prefersReducedMotion) return;
    elapsed = Math.min(interval, performance.now() - startedAt);
    freezeBar(items[index]);
  };

  const goTo = (next) => {
    index = next;
    elapsed = 0;
    render();
    run();
  };

  /* 목업과 legend 어느 쪽에 올려도 멈춘다 — 사용자에게는 하나의 UI다. */
  [stage.closest('.difference-mock') || stage, legend].forEach((zone) => {
    zone.addEventListener('mouseenter', () => {
      isHovered = true;
      pause();
    });
    zone.addEventListener('mouseleave', () => {
      isHovered = false;
      run();
    });
  });

  items.forEach((item, i) => {
    item.addEventListener('click', () => goTo(i));
    item.addEventListener('focusin', () => goTo(i));
  });

  /* 섹션이 보일 때만 돈다. 화면 밖으로 나가면 경과 시간을 저장해 두고 멈춘다. */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
        if (isVisible) run();
        else pause();
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(stage);

  render();
})();
