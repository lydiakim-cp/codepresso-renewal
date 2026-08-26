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
 *
 * 좌측 프로그램 리스트(.choice-list__item)는 이 판정의 결과를 보여주는 표시일 뿐
 * 아니라 입력이기도 하다 — 항목을 클릭하면 해당 트랙 구간까지 부드럽게 스크롤해
 * 그 스텝을 활성화한다. 활성 전환 자체는 스크롤이 끝나면 옵저버가 알아서 하지만,
 * 반응성을 위해 클릭 즉시 한 번 앞당겨 켠다(part-nav.js와 같은 방식).
 */
/* 고정 헤더(75px)에 가려지지 않도록 도착 지점을 조금 위로 띄운다(part-nav.js와 동일). */
const SCROLL_OFFSET = 96;
const SCROLL_DURATION = 900;

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* 브라우저 기본 behavior:'smooth'는 속도·easing을 지정할 수 없어 직접 애니메이션한다.
   이동 중 사용자가 휠/터치/키로 스크롤하면 즉시 포기한다 — 매 프레임 위치를 덮어쓰면
   스크롤이 잠긴 것처럼 느껴진다. (part-nav.js의 animateScrollTo와 같은 구현이다.) */
const animateScrollTo = (targetY) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (!distance) return;

  let startTime = null;
  let cancelled = false;

  const removeCancelListeners = () => {
    window.removeEventListener('wheel', cancel);
    window.removeEventListener('touchstart', cancel);
    window.removeEventListener('keydown', cancel);
  };

  function cancel() {
    cancelled = true;
    removeCancelListeners();
  }

  window.addEventListener('wheel', cancel, { passive: true, once: true });
  window.addEventListener('touchstart', cancel, { passive: true, once: true });
  window.addEventListener('keydown', cancel, { once: true });

  const step = (timestamp) => {
    if (cancelled) return;
    if (startTime === null) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / SCROLL_DURATION, 1);

    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) requestAnimationFrame(step);
    else removeCancelListeners();
  };

  requestAnimationFrame(step);
};

/* name은 data 속성 접두사이자 dataset 키의 어근이다 — 'journey' → data-journey-step /
   dataset.journeyStep. sectionSelector는 좌측 프로그램 리스트를 찾을 범위,
   panelSelector는 sticky로 고정되는 우측 판(클릭 이동의 도착 지점 계산에 쓴다),
   pop은 스텝 내부 요소의 pop-in 연출 사용 여부(PART 1 목업 전용). */
const setupStage = ({ name, sectionSelector, panelSelector, pop = false }) => {
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

  /* sticky로 고정되는 우측 판. 클릭 이동이 "판이 자리를 잡은 뒤"에 멈추도록
     도착 지점의 하한을 계산하는 데 쓴다(scrollToStep 참고). */
  const panel = stage.querySelector(panelSelector);

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

  const scrollTo = (targetY) => {
    if (prefersReducedMotion()) window.scrollTo(0, targetY);
    else animateScrollTo(targetY);
  };

  /* 좌측 프로그램 클릭 → 해당 트랙 구간으로 이동.
     활성 판정선이 뷰포트 중앙(-50%/-50%)이므로, 도착 지점도 "그 구간이 중앙선을
     지나는 위치"로 계산해야 한다 — 구간 위쪽 경계에 정확히 맞추면 판정선이 아직
     이전 구간에 있어 클릭한 스텝이 켜지지 않는다. 구간 높이의 1/4만큼 안쪽으로
     들여 넣어 경계에서 넉넉히 떨어뜨린다.

     여기에 더해 판이 sticky로 자리를 잡은 뒤에 멈춰야 한다. 판은 트랙보다 늦게
     고정되므로(top 오프셋만큼 아래에서 붙는다), 첫 구간은 "1/4 지점"이 아직 판이
     제자리로 올라오는 도중이다 — 첫 항목만 판이 살짝 위에 뜬 채로 멈춰 보이는
     이유가 이것이다. 판이 붙는 지점(panelRestY)을 하한으로 두어 첫 구간도 뒤
     구간들과 같은 화면 구도에서 멈추게 한다.
     (1단으로 접히는 900px 이하에서는 트랙이 display:none이라 높이가 0이다.
      이때는 스텝 자체로 이동한다 — 스텝들이 세로로 쌓여 있으므로 그게 맞다.) */
  const scrollToStep = (index) => {
    const trackStep = trackSteps[index];
    const trackHeight = trackStep.offsetHeight;

    if (!trackHeight) {
      scrollTo(steps[index].getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET);
      return;
    }

    const segmentY =
      trackStep.getBoundingClientRect().top +
      window.scrollY +
      trackHeight / 4 -
      window.innerHeight / 2;

    if (!panel) {
      scrollTo(segmentY);
      return;
    }

    /* 판이 sticky 오프셋에 닿는 스크롤 위치.
       판 자신의 현재 위치로 재면 안 된다 — 이미 붙어 있을 때는 그 값이 곧
       "지금 스크롤 위치"라, 뒤 단계에서 앞 단계를 눌렀을 때 제자리에 머문다.
       판은 스테이지 안에서 흐름상 맨 위에 놓이므로, 고정되지 않았을 때의 위치는
       스테이지 상단과 같다 — 스크롤에 영향받지 않는 이 기준으로 계산한다. */
    const stickyTop = parseFloat(getComputedStyle(panel).top) || 0;
    const panelRestY = stage.getBoundingClientRect().top + window.scrollY - stickyTop;

    scrollTo(Math.max(segmentY, panelRestY));
  };

  programs.forEach((program) => {
    program.addEventListener('click', () => {
      const index = Number(program.dataset[key('Program')]);
      if (!Number.isInteger(index) || !trackSteps[index]) return;

      /* 활성 표시는 스크롤 완료를 기다리지 않고 즉시 옮긴다(반응성 우선).
         이후 스크롤이 끝나면 옵저버가 같은 인덱스를 다시 잡아 상태가 유지된다. */
      activate(index);
      scrollToStep(index);
    });
  });

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

setupStage({
  name: 'journey',
  sectionSelector: '.education-journey',
  panelSelector: '.journey-viewport',
  pop: true,
});

setupStage({
  name: 'diagnosis',
  sectionSelector: '.diagnosis-showcase',
  panelSelector: '.diagnosis-preview-panel',
});
