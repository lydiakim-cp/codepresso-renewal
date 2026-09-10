# 헤더·푸터 교체 지도

현재 `partials/header.html`·`partials/footer.html`은 **기존 코드프레소 헤더·푸터로 통째 교체될 예정**이다.
교체할 때 어디를 건드려야 하는지, 새 헤더가 무엇을 지켜 줘야 하는지 미리 적어 둔다.

교체는 "파일 두 개 갈아끼우기"가 아니다. 아래 **끊어지는 연결 5개**가 있다.

## 1. 교체 대상 — 이 파일만 바뀐다

| 파일 | 성격 |
|---|---|
| `partials/header.html` | 통째 교체 |
| `partials/footer.html` | 통째 교체 |
| `css/components/ui/header.css` | 통째 교체 (새 헤더 CSS로) |
| `css/components/ui/site-footer.css` | 통째 교체 |
| `js/header-scroll.js` | 교체 또는 폐기 — 아래 3번 주의 |
| `js/nav-menu.js` | 교체 또는 폐기 — 새 헤더가 자체 JS를 들고 오면 폐기 |

**건드리지 않는 것:** 14개 페이지의 `<main>` 안쪽, `css/pages/**`, `css/components/sections/**`.

## 2. 슬롯은 14개 페이지에 동일하게 있다 — 형식이 같으면 손 안 대도 된다

```html
<div data-include="partials/header.html"></div>   <!-- <body> 직후 -->
<div data-include="partials/footer.html"></div>   <!-- </body> 직전 -->
```

aifluent · ax-build · ax-grow · axpresso · cases · company · index ·
skillcamp · skillcertify · skillfit · skillpath · skills · why-codepresso
그리고 `templates/subpage.template.html` (뼈대도 같이 고친다).

`js/include-partials.js`가 이 슬롯을 fetch해 채우고 wrapper div는 없앤다.
**새 헤더도 이 주입 방식을 그대로 쓰면 14개 페이지 HTML은 한 줄도 안 고쳐도 된다.**
패키지가 `<script>` 한 줄로 헤더를 그리는 방식이면 슬롯 줄을 그 스크립트로 바꾼다(14곳 + 템플릿).

## 3. 끊어지는 연결 — (1)(2)(4)(5)는 선조치 완료

### ✅ (1) `--scroll-progress` — 헤더에서 떼어냈다
`js/scroll-progress.js`로 분리했다(`<main>`만 있으면 돈다, index.html이 로드).
`header-scroll.js`는 이제 `<main>`을 건드리지 않는다.
**→ 헤더 스크립트를 통째로 지워도 index 배경 전환은 살아 있다.**

### ✅ (2) 헤더 높이 — `--header-height` 토큰으로 통일 (새 헤더 = 80px)
`tokens.css`에 `--header-height: 80px`(신규 헤더 기준), `mobile.css`가 900px 이하에서 60px으로 덮는다.
쓰는 곳: `header.css`(height·드롭다운 top) · `floating-cta.css`(top).
**→ 75px 하드코딩은 전부 사라졌다. 높이가 또 바뀌면 토큰 한 줄만 고친다.**

⚠ 남은 것: `hero.css:46`의 상단 padding **132px**은 아직 하드코딩이다.
헤더가 75→80px으로 5px 커졌으므로 새 헤더 적용 후 hero 상단 여백을 눈으로 확인하고,
필요하면 `calc(var(--header-height) + …)`으로 바꾼다.

### (3) `position: fixed` — 새 헤더도 fixed여야 한다 (미해결·확인 필요)
헤더가 문서 흐름에서 빠져 있어 hero의 상단 padding이 그 자리를 대신 만든다.
새 헤더가 static이면 hero 여백을 다시 계산해야 한다. z-index는 현재 100
(floating-cta 90 위, assessment-card 모달 999 아래).

### ✅ (4) `partials:loaded` — 헤더 없이도 로딩된다
- `include-partials.js`가 이벤트를 쏘기 전에 `<html data-partials="loaded">` 표식을 남긴다.
- `header-scroll.js`·`nav-menu.js`는 **표식 확인 → 없으면 `partials:loaded`와
  `DOMContentLoaded` 양쪽 대기**로 바뀌었다. `started` 플래그로 두 번 초기화되지 않는다.
- 둘 다 대상이 없으면 조용히 반환한다(`if (!header) return` / `if (!items.length) return`).
**→ include-partials.js가 아예 없어져도, 헤더가 없어도 스크립트가 멈추지 않는다.**

### ✅ (5) `page-audit.js` — 공급 방식을 강제하지 않는다
`HEADER_SUPPLY = { required: true }` 설정을 위로 뺐고, 검사는
`data-include="partials/"`가 있을 때만 partials 규칙(슬롯 2개·`<header>` 직접 사용 금지·
첫 스크립트)을 적용한다. 슬롯이 없으면 "헤더를 불러오는 곳이 없다" 한 줄만 본다.
**교체 후 패키지가 헤더를 그리면 `required: false`로 내린다.**
`js/scroll-progress.js`는 `STANDALONE_SCRIPTS`에 등록했다(훅 없이 도는 스크립트).

## 4. 자산 — 새 헤더가 자기 것을 들고 오면 정리 대상

현재 헤더·푸터만 쓰는 이미지:
- `images/brand/codepresso_logo_(primary).png` (헤더·푸터 공용)
- `images/icons/service/ic_*.svg` 13개 — 드롭다운 메뉴 전용
  (aiFluent · axBuild · axGrow · company · companyProfile · contents · edu ·
   meetup · newsroom · proof · skillCertify · skillFit · skillPath)

새 헤더가 자체 아이콘을 쓰면 위 13개는 **다른 곳에서 안 쓰는지 확인 후** 정리한다.

## 5. 외부 링크 — 새 푸터에도 있어야 하는 것

`https://codepresso.io/home/pricing` · `https://blog.codepresso.io/` ·
`https://codepresso.io/home/news` · `https://codepresso.io/home/events`
내부: 12개 페이지 전부 + `href="#"` 미정 1곳.

## 6. 교체 순서

1. 새 헤더·푸터 마크업을 `partials/`에 넣는다 (슬롯 형식 유지하면 페이지 HTML 무수정)
2. `--header-height` 토큰 신설 → `floating-cta.css`·`header.css`의 75px 치환
3. `header.css`·`site-footer.css` 교체 → `css/mobile.css`의 헤더/푸터 블록도 같이
   (11·13·20·334·633·634·958·963행 부근)
4. `--scroll-progress` 공급자 확보 (새 JS가 안 하면 분리 스크립트로 남긴다)
5. `page-audit.js`의 `PARTIAL_SCRIPTS`·첫 스크립트 검사 갱신
6. 14개 페이지 + `templates/subpage.template.html` 육안 확인 — 특히 index 배경 전환,
   floating-cta 위치, 드롭다운 열림

## 7. 교체 후 이 영역은 잠근다

교체가 끝나면 위 파일들은 **외부 패키지 산출물**이 되므로 AI 수정 금지 구역으로 옮긴다
→ `references/protected-areas.md`
