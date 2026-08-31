/*
 * Scenario Switch
 * [data-scenario-steps] 안의 단계 중 화면에 들어온 것을 활성으로 보고,
 * [data-scenario-screens] 안의 같은 순서 목업으로 교체한다.
 * - 단계는 data-scenario-step="{key}", 목업 판은 data-scenario-panel="{key}"로 짝을 맞춘다.
 * - 활성 표시는 .is-active 하나로 단계와 판 양쪽에 붙는다(catalog-board와 같은 규약).
 * - 자동 순환은 하지 않는다. 읽는 사람이 스크롤로 진행을 정하는 화면이라,
 *   가만히 있는데 판이 바뀌면 방해가 된다.
 */
(() => {
  const groups = document.querySelectorAll('[data-scenario-steps]');
  if (!groups.length) return;

  groups.forEach((group) => {
    const screens = document.querySelector(
      group.dataset.scenarioSteps || '[data-scenario-screens]'
    );
    if (!screens) return;

    const steps = Array.from(group.querySelectorAll('[data-scenario-step]'));
    const panels = Array.from(screens.querySelectorAll('[data-scenario-panel]'));
    if (!steps.length || !panels.length) return;

    const activate = (key) => {
      steps.forEach((step) => {
        step.classList.toggle('is-active', step.dataset.scenarioStep === key);
      });
      panels.forEach((panel) => {
        panel.classList.toggle('is-active', panel.dataset.scenarioPanel === key);
      });
    };

    // 중앙선에 "가장 가까운" 단계를 활성으로 본다.
    //
    // 처음엔 "중앙선을 지난 마지막 단계"로 했는데 이 타임라인에서는 동작하지 않았다 —
    // 3단계가 세로로 130px 간격이라 세 개가 늘 같은 반쪽 화면 안에 있고,
    // 그러면 항상 마지막 단계가 선택된다(실측: top 164/309/430, 중앙선 450).
    // 짧은 목록에서는 "지나갔는가"가 아니라 "지금 어느 단계를 보고 있는가"가 기준이다.
    const sync = () => {
      const line = window.innerHeight * 0.45;
      let current = steps[0];
      let best = Infinity;
      steps.forEach((step) => {
        const box = step.getBoundingClientRect();
        const distance = Math.abs(box.top + box.height / 2 - line);
        if (distance < best) {
          best = distance;
          current = step;
        }
      });
      activate(current.dataset.scenarioStep);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        sync();
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    sync();
  });
})();
