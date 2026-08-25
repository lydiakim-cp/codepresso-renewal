/*
 * Journey Stage
 * PART 1 · 교육 섹션 우측의 목업 스테이지.
 * 판(.journey-viewport)은 CSS sticky로 고정돼 있고, 이 스크립트는 "지금 몇 번째
 * 단계를 보고 있는지"만 판단해 해당 .journey-step에 .is-active를 옮긴다.
 * 실제 페이드 인/아웃은 CSS transition이 담당한다(education-journey.css).
 *
 * 스크롤 위치는 보이지 않는 .journey-track-step 구간으로 읽는다 —
 * IntersectionObserver로 각 구간의 교차를 보되, 화면 중앙을 지나는 한 구간만
 * 활성으로 잡기 위해 rootMargin으로 판정선을 뷰포트 중앙에 둔다.
 * (구간마다 threshold를 비교하면 전환 지점에서 두 구간이 동시에 잡혀 깜빡인다.)
 */
(() => {
  const stage = document.querySelector('[data-journey-stage]');
  if (!stage) return;

  const steps = Array.from(stage.querySelectorAll('[data-journey-step]'));
  const trackSteps = Array.from(stage.querySelectorAll('[data-journey-track-step]'));
  if (!steps.length || steps.length !== trackSteps.length) return;

  /* 좌측 교육 프로그램 리스트 — 우측 스텝과 같은 순서(0·1·2)로 짝지어져 있다.
     스테이지 밖(좌측 sticky 컬럼)에 있으므로 섹션 기준으로 찾는다. */
  const section = stage.closest('.education-journey') || document;
  const programs = Array.from(section.querySelectorAll('[data-journey-program]'));

  let activeIndex = 0;

  const activate = (index) => {
    if (index === activeIndex) return;
    activeIndex = index;
    steps.forEach((step, i) => step.classList.toggle('is-active', i === index));
    programs.forEach((program) =>
      program.classList.toggle('is-active', Number(program.dataset.journeyProgram) === index)
    );
  };

  /* 첫 프로그램의 활성 표시는 로드 시점에 한 번 직접 켠다 —
     activate(0)은 이미 0번이라 조기 반환하므로 여기서 처리하지 않으면
     첫 스크롤 전까지 좌측이 전부 흐린 상태로 보인다. */
  programs.forEach((program) =>
    program.classList.toggle('is-active', Number(program.dataset.journeyProgram) === 0)
  );

  /* 판정선을 뷰포트 중앙에 두면(위아래를 50%씩 깎으면) 교차 중인 구간이
     항상 최대 1개라, 어느 구간이 활성인지 다투지 않는다. */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        activate(Number(entry.target.dataset.journeyTrackStep));
      });
    },
    { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
  );

  trackSteps.forEach((trackStep) => observer.observe(trackStep));
})();
