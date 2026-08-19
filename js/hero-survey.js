/*
 * Hero Survey Interaction
 * - 옵션 클릭 시: 선택 표시(그라디언트 채움 + 체크) + 나머지 옵션 dim + 짧은 bubble 모션.
 * - 선택 후 잠시 멈췄다가 질문/옵션 블록을 페이드아웃 → 다음 문항으로 교체 → 페이드인.
 * - progress bar/dot도 다음 문항 위치로 함께 이동한다.
 * prefers-reduced-motion 사용자에게는 bubble 애니메이션과 전환 애니메이션을 생략하고 즉시 갱신한다.
 */
(() => {
  // 시안 비교 페이지처럼 .hero-survey가 여러 개 있을 수 있으므로,
  // 이 스크립트가 다루는 전체 마크업(뒤로가기 버튼까지 포함)을 갖춘 첫 요소를 찾는다.
  const survey = Array.from(document.querySelectorAll(".hero-survey")).find(
    (el) => el.querySelector(".hero-survey-back")
  );
  if (!survey) return;

  const optionsList = survey.querySelector(".hero-survey-options");
  const questionEl = survey.querySelector(".hero-survey-question");
  const progressBar = survey.querySelector(".hero-survey-progress-bar");
  const progressDot = survey.querySelector(".hero-survey-progress-dot");
  const backButton = survey.querySelector(".hero-survey-back");
  if (!optionsList || !questionEl || !progressBar || !progressDot || !backButton) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 데모용 문항 데이터. 실 서비스 연동 시 서버 응답으로 대체한다.
  const QUESTIONS = [
    {
      text: "새로운 업무나 과제를 맡았을 때, 어떤 방식으로 시작하시나요?",
      options: [
        "익숙한 기존 방식대로 시작하며, AI 활용은 특별히 고려하지 않는다.",
        "업무를 직접 진행하다가 막히거나 궁금한 점이 생길 때 AI를 활용한다.",
        "자료 조사, 초안 작성 등의 업무 보조 도구로 AI를 습관적으로 활용한다.",
        "업무의 특성에 맞춰 AI를 어떻게 활용할지 구상하고, 그에 맞게 계획해 실행한다.",
      ],
    },
    {
      text: "업무 중 AI가 내놓은 결과물을 받았을 때, 다음 행동은 무엇에 가장 가깝나요?",
      options: [
        "결과물을 그대로 사용한다.",
        "핵심 오류만 빠르게 훑어보고 사용한다.",
        "근거와 맥락을 확인한 뒤 필요한 부분을 다시 다듬는다.",
        "결과물을 바탕으로 더 나은 프롬프트나 방향을 다시 설계한다.",
      ],
    },
    {
      text: "동료가 AI 활용법을 물어본다면, 어떤 조언을 해줄 수 있나요?",
      options: [
        "잘 몰라서 특별히 해줄 조언이 없다.",
        "내가 쓰는 도구 한두 가지를 알려줄 수 있다.",
        "상황별로 어떤 도구·프롬프트가 적합한지 알려줄 수 있다.",
        "업무 프로세스 전체를 함께 재설계해줄 수 있다.",
      ],
    },
  ];

  const TOTAL = QUESTIONS.length;
  let index = 0;
  let isTransitioning = false;
  // 문항별로 선택했던 옵션 인덱스를 기억해, 뒤로 돌아갔을 때 선택 상태를 복원한다.
  const answers = new Array(TOTAL).fill(null);

  function renderProgress() {
    const pct = Math.round(((index + 1) / TOTAL) * 100);
    progressBar.style.width = pct + "%";
    progressDot.style.left = pct + "%";
    survey
      .querySelector(".hero-survey-progress")
      ?.setAttribute("aria-valuenow", String(pct));
  }

  function renderBackButton() {
    // 2번째 문항(index 1)부터만 뒤로가기 버튼을 노출한다.
    backButton.hidden = index === 0;
  }

  function renderQuestion() {
    const q = QUESTIONS[index];
    questionEl.textContent = q.text;

    const items = optionsList.querySelectorAll(".hero-survey-option");
    items.forEach((btn, i) => {
      const label = btn.querySelector("span");
      if (label) label.textContent = q.options[i] ?? "";
      btn.classList.toggle("is-selected", answers[index] === i);
      btn.classList.remove("is-bubbling");
    });
    optionsList.classList.toggle("has-selection", answers[index] !== null);
  }

  function render() {
    renderQuestion();
    renderProgress();
    renderBackButton();
  }

  function goToNext() {
    index = index >= TOTAL - 1 ? 0 : index + 1;
    render();
  }

  function goToPrev() {
    if (index === 0) return;
    index -= 1;
    render();
  }

  function withTransition(step) {
    if (prefersReducedMotion) {
      step();
      return;
    }
    isTransitioning = true;
    survey.classList.add("is-transitioning");

    // CSS transition(--survey-duration = --duration-scroll의 50%)과 시간을 맞춰 페이드아웃이 끝난 뒤 내용을 교체한다.
    const fadeMs = 250;
    window.setTimeout(() => {
      step();
      // 다음 프레임에서 is-transitioning을 제거해 페이드인 트랜지션이 걸리게 한다.
      requestAnimationFrame(() => {
        survey.classList.remove("is-transitioning");
        isTransitioning = false;
      });
    }, fadeMs);
  }

  optionsList.addEventListener("click", (event) => {
    if (isTransitioning) return;
    const button = event.target.closest(".hero-survey-option");
    if (!button) return;

    const items = Array.from(optionsList.querySelectorAll(".hero-survey-option"));
    items.forEach((btn) => btn.classList.remove("is-selected", "is-bubbling"));

    button.classList.add("is-selected");
    optionsList.classList.add("has-selection");
    answers[index] = items.indexOf(button);

    if (!prefersReducedMotion) {
      button.classList.add("is-bubbling");
      button.addEventListener(
        "animationend",
        () => button.classList.remove("is-bubbling"),
        { once: true }
      );
    }

    // 선택 피드백을 잠시 보여준 뒤 다음 문항으로 넘어간다.
    window.setTimeout(() => withTransition(goToNext), prefersReducedMotion ? 0 : 275);
  });

  backButton.addEventListener("click", () => {
    if (isTransitioning) return;
    withTransition(goToPrev);
  });

  render();
})();
