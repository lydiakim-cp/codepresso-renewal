# 버튼과 링크

> 버튼은 이 프로젝트에서 가장 자주 잘못 복제되는 UI다. 버튼·링크를 놓을 때 편다.

버튼은 이 프로젝트에서 **가장 자주 복제되는 UI**라 규칙을 좁게 못 박는다.
아래 둘은 협의 없이 깨지 않는다(사용자 지시).

**① `codepresso-designsystem.html`에 있는 버튼 디자인만 쓴다.**

`css/components/ui/button.css`가 정의한 조합이 전부다. 새 배경색·높이·radius를
가진 버튼을 페이지 CSS에서 만들지 않는다.

| 클래스 | 쓰는 자리 |
|---|---|
| `.btn.btn-primary` | 화면의 주요 행동 하나 |
| `.btn.btn-ghost` | 밝은 배경 위 보조 행동 |
| `.btn.btn-outline-inverse` | **어두운 배경** 위 보조 행동 |
| `.btn.btn-pill` | 이미지·그라디언트 배경 위 플로팅 CTA |
| `+ .btn-lg` | 위 어느 것에든 붙여 크게(52px) |

- 크기는 기본(40px)과 `.btn-lg`(52px) 두 단뿐이다. 세 번째 크기를 만들지 않는다.
- **페이지 CSS는 버튼의 생김새를 덮지 않는다** — 배치(`margin`, `align-self`)만 한다.
  색·높이·radius·font-size를 덮고 싶으면 그건 새 변형이므로, 만들기 전에
  카탈로그에 추가할지 사용자에게 확인한다(0번 제1규칙).
- 링크처럼 보여야 하면 버튼이 아니라 `.link-arrow` 계열을 쓴다.
- **`.link-arrow`는 맨몸으로 쓰지 않는다 — 색 modifier가 필수다.** 컴포넌트 자체는
  색을 정하지 않고(`link.css` 주석: "색상은 modifier가 맡는다") 배경에 따라 갈린다:
  밝은 배경엔 `.link-arrow-ink`, 어두운·브랜드 배경엔 `.link-arrow-inverse`.
  빼먹으면 부모의 `color`를 물려받아 **hover도 없는 그냥 검은 글씨**가 된다.
  카탈로그의 표기(`link-arrow link-arrow-ink` + 안쪽 `.link-underline`)를 그대로 복사한다.
- **카드·패널의 행동은 링크가 아니라 버튼이다.** 카드 하단 "자세히" 같은 자리에
  맨 텍스트 링크를 두면 그 카드의 행동이 눌릴 것처럼 보이지 않는다. 밝은 배경 위
  카드라면 `.btn.btn-ghost`가 기본값이다 — `btn-primary`는 페이지 최하단 CTA와
  경쟁하므로 쓰지 않는다. (실제로 서브페이지의 제품 카드 5개가 modifier 없는
  `link-arrow`였고, `btn-ghost`로 바꾸니 페이지 CSS를 한 줄도 안 쓰고
  fit-content 폭·16px chevron·hover translateX(3px)를 그대로 얻었다.)
- `.link-arrow`를 쓰는 자리는 **보조 안내**다(hero 아래 "전체 보기", cta-final 아래
  "문의가 궁금하신가요"). 행동의 무게가 그보다 크면 버튼으로 올린다.

**② `.btn`의 width는 항상 `fit-content`다. 모바일에서도 폭을 채우지 않는다.**

`button.css`가 `width: fit-content`를 갖고 있으므로 **아무것도 하지 않는 것이 정답**이다.
`width: 100%`로 덮지 않는다 — 버튼이 화면 폭을 꽉 채우면 배너처럼 보여 "누를 것"으로
읽히지 않는다.

```css
/* 나쁨 — 모바일에서 버튼을 늘린다 */
@media (max-width: 560px) {
  .my-section .btn { width: 100%; }
}

/* 좋음 — 버튼 2개가 한 줄에 안 들어가면 세로로 쌓되 폭은 글자에 맞춘다 */
@media (max-width: 560px) {
  .my-section-actions {
    flex-direction: column;
    align-items: center;
    width: fit-content;
    margin-inline: auto;
  }
}
```

- 터치 타깃은 폭이 아니라 **높이**로 확보한다(모바일 44px — [responsive-motion.md](responsive-motion.md)).
- 이 규칙 때문에 `hero-cta`·`cta-final-actions`가 위 "좋음" 방식을 쓴다. 새 CTA 묶음도
  같은 방식을 따른다.

