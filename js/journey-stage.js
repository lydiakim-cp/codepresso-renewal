/*
 * Journey Stage
 * 스크롤에 따라 우측 판의 내용이 교차 페이드로 바뀌는 스테이지.
 * PART 1(교육 · journey)과 PART 2(진단 · diagnosis)가 같은 구조를 쓴다.
 *
 * 판은 CSS sticky로 고정돼 있고, 이 스크립트는 "지금 몇 번째 단계를 보고 있는지"만
 * 판단해 해당 스텝에 .is-active를 옮긴다. 실제 페이드 인/아웃은 CSS transition이
 * 담당한다(education-journey.css · diagnosis-showcase.css).
 *
 * 스크롤 위치는 보이지 않는 트랙 구간으로 읽는다 — IntersectionObserver로 각 구간의
 * 교차를 보되, 화면 중앙을 지나는 한 구간만 활성으로 잡기 위해 rootMargin으로
 * 판정선을 뷰포트 중앙에 둔다.
 * (구간마다 threshold를 비교하면 전환 지점에서 두 구간이 동시에 잡혀 깜빡인다.)
 */
/* name은 data 속성 접두사이자 dataset 키의 어근이다 — 'journey' → data-journey-step /
   dataset.journeyStep. sectionSelector는 좌측 프로그램 리스트를 찾을 범위,
   pop은 스텝 내부 요소의 pop-in 연출 사용 여부(PART 1 목업 전용). */
const setupStage = ({ name, sectionSelector, pop = false }) => {
  const key = (suffix) => name + suffix;
  const attr = (suffix) => `[data-${name}${suffix}]`;

  const stage = document.querySelector(attr('-stage'));
  if (!stage) return;

  const steps = Array.from(stage.querySelectorAll(attr('-step')));
  const trackSteps = Array.from(stage.querySelectorAll(attr('-track-step')));
  if (!steps.length || steps.length !== trackSteps.length) return;

  /* 좌측 제품 리스트 — 우측 스텝과 같은 순서(0·1·…)로 짝지어져 있다.
     스테이지 밖(좌측 sticky 컬럼)에 있으므로 섹션 기준으로 찾는다. */
  const section = stage.closest(sectionSelector) || document;
  const programs = Array.from(section.querySelectorAll(attr('-program')));

  let activeIndex = 0;

  /* pop-in 재생. 같은 클래스를 다시 붙이는 것만으로는 이미 끝난 CSS 애니메이션이
     되감기지 않으므로, 클래스를 뗀 뒤 reflow를 한 번 강제해 재생 상태를 끊어준다. */
  const replayPop = (step) => {
    step.classList.remove('is-popping');
    void step.offsetWidth;
    step.classList.add('is-popping');
  };

  const activate = (index) => {
    if (index === activeIndex) return;
    activeIndex = index;
    steps.forEach((step, i) => {
      step.classList.toggle('is-active', i === index);
      if (!pop) return;
      if (i === index) replayPop(step);
      else step.classList.remove('is-popping');
    });
    programs.forEach((program) =>
      program.classList.toggle('is-active', Number(program.dataset[key('Program')]) === index)
    );
  };

  /* pop-in 순서(--pop-order)를 마크업 순서대로 매긴다. 마크업에 인라인
     style로 박아두면 항목을 하나 넣고 뺄 때마다 숫자를 다시 세어야 해서,
     구조를 아는 이곳에서 한 번에 계산한다. CSS는 이 값에 지연시간만 곱한다. */
  const POP_PARENTS =
    '.journey-mock, .journey-app-rail, .journey-app-side, .journey-app-main, .journey-app-tutor, .journey-app-skills';

  if (pop) {
    steps.forEach((step) => {
      step.querySelectorAll(POP_PARENTS).forEach((parent) => {
        Array.from(parent.children).forEach((child, i) =>
          child.style.setProperty('--pop-order', i)
        );
      });
    });
  }

  /* 첫 프로그램의 활성 표시는 로드 시점에 한 번 직접 켠다 —
     activate(0)은 이미 0번이라 조기 반환하므로 여기서 처리하지 않으면
     첫 스크롤 전까지 좌측이 전부 흐린 상태로 보인다. */
  programs.forEach((program) =>
    program.classList.toggle('is-active', Number(program.dataset[key('Program')]) === 0)
  );

  /* 첫 스텝의 pop도 같은 이유로 여기서 한 번 켠다. 단, 섹션이 화면에 들어왔을 때
     재생돼야 의미가 있으므로 처음 교차하는 시점까지 미룬다 — 페이지 상단에서
     이미 다 끝나버리면 사용자는 조립되는 과정을 보지 못한다. */
  if (pop) {
    const stageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          replayPop(steps[activeIndex]);
          observer.disconnect();
        });
      },
      { threshold: 0.2 }
    );

    stageObserver.observe(stage);
  }

  /* 판정선을 뷰포트 중앙에 두면(위아래를 50%씩 깎으면) 교차 중인 구간이
     항상 최대 1개라, 어느 구간이 활성인지 다투지 않는다. */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        activate(Number(entry.target.dataset[key('TrackStep')]));
      });
    },
    { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
  );

  trackSteps.forEach((trackStep) => observer.observe(trackStep));
};

setupStage({ name: 'journey', sectionSelector: '.education-journey', pop: true });
setupStage({ name: 'diagnosis', sectionSelector: '.diagnosis-showcase' });
