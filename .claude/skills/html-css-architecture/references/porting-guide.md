# 이식 가이드 — 다른 프로젝트에 이 스킬 적용하기

> 이 스킬은 코드프레소 리뉴얼 사이트에서 만들어졌지만, 방법론(재사용 우선·토큰
> 승격 기준·값으로 세는 QA·저장 시점 게이트)은 프로젝트 고유가 아니다. 다른 회사
> 사이트에 이 스킬 폴더를 통째로 복사해 쓸 때 **무엇을 반드시 바꿔야 하는지**를
> 순서대로 정리했다.

## 전제

이 스킬의 각 문서는 "🔧 코드프레소 값 — 교체 지점" 마커로 범용 규칙과 실제 값을
구분해 두었다. **이식 작업은 그 마커가 붙은 블록만 자기 값으로 바꾸는 것**이다.
마커 없는 본문(원칙·절차·판단 기준)은 그대로 채택한다 — 다시 쓰지 않는다.

## 이식 순서

### 1단계 — 토큰 재정의
- [ ] `css/tokens.css`를 자사 색상·spacing·radius·타이포·모션 값으로 교체한다.
- [ ] [tokens-typography.md](tokens-typography.md)의 마커 블록(색상표·타이포 스케일)을
      새 `tokens.css`와 동기화해 다시 쓴다.
- [ ] [SKILL.md](../SKILL.md) 3번의 절대 제약값(최소 폰트 크기·breakpoint 등)을
      자사 디자인 정책에 맞게 재확인하고 고친다.

### 2단계 — 섹션 어휘표 재작성
- [ ] [SKILL.md](../SKILL.md) 4번 "섹션 역할 어휘표"를 자사 사이트의 정보구조에
      맞게 다시 짠다(표에 없는 역할을 즉석에서 짓지 않는다는 원칙은 유지).
- [ ] `scripts/page-audit.config.json`의 `sectionVocabulary`를 그 표와 동기화한다.

### 3단계 — 컴포넌트 인벤토리 재작성
- [ ] [component-inventory.md](../component-inventory.md)의 실제 컴포넌트 표를
      자사 컴포넌트 목록으로 교체한다. "콘텐츠 → 컴포넌트 역인덱스"라는 틀과
      "권장 글자 수" 산출 절차(실측 p90 방식)는 그대로 두고 내용만 바꾼다.

### 4단계 — 아이콘·에셋 지정표 재작성
- [ ] [css-patterns.md](../css-patterns.md) 2번의 "아이콘 파일 → 색 배정" 표를
      자사 아이콘셋으로 다시 만든다.
- [ ] [page-structure.md](page-structure.md)의 `images/` 폴더 규칙을 자사 규칙에
      맞추거나(새 에셋 루트를 만들지 않는다는 원칙은 그대로) 그대로 채택한다.

### 5단계 — 실측 기반 문서 재실행
- [ ] [surface-depth.md](surface-depth.md)의 "절차" 섹션을 따라 **자사가 참고하는
      레퍼런스로 실측을 다시 돌려** 자사 worked example을 만든다(코드프레소 예시는
      참고만 하고 그 값을 그대로 쓰지 않는다).
- [ ] [design-qa.md](design-qa.md)의 기준표(어두운 판 개수 등)를 자사 페이지
      3~5장으로 다시 재서 자사 기준을 새로 세운다.

### 6단계 — 게이트 설정 교체
- [ ] `scripts/token-lint.config.json`, `scripts/page-audit.config.json`을 자사
      값으로 새로 작성한다(스크립트 코드 자체는 건드리지 않는다).
- [ ] `.claude/settings.json`의 훅 경로를 확인한다(스킬 폴더째로 복사했다면
      경로는 자동으로 맞는다).
- [ ] `token-lint.baseline.json` / `page-audit.baseline.json`을 지우고
      `node scripts/token-lint.js --write-baseline`으로 "기존 위반"을 처음부터
      다시 기록한다.

### 7단계 — anti-patterns.md 초기화
- [ ] [anti-patterns.md](anti-patterns.md)의 코드프레소 반례 목록은 예시로만
      남기고, 자사 프로젝트의 실제 표는 빈 상태에서 새로 쌓기 시작한다.
- [ ] `scripts/harvest-feedback.js`의 언어 종속 정규식(되돌림 감지 키워드)을
      자사 언어·커밋 컨벤션에 맞게 교체한다.

### 8단계 — 검증
- [ ] 더미 섹션 하나를 만들어 저장해 보고, 훅이 실제로 위반을 막는지 확인한다.
- [ ] `node scripts/token-lint.js --all`로 초기 상태를 전수 확인한 뒤
      `--write-baseline`으로 기록한다.

## 이식 시 건드리지 않는 것

아래는 이미 완전히 범용이라 그대로 채택해도 되는 파일이다.

- `scripts/gate.js`, `scripts/contrast-audit.js` — 프로젝트 고유 설정 없이 동작
- [SKILL.md](../SKILL.md) 0번(제1규칙)·2번(파일 구조)·5번(커밋 규칙)
- [references/naming.md](naming.md), [references/reuse-playbook.md](reuse-playbook.md),
  [references/cleanup.md](cleanup.md) — 방법론 전체
- [css-patterns.md](../css-patterns.md)의 1·3·5·6·9번(색 파생·hover 리듬·상태
  클래스 구분·glass 패턴·컴포넌트 헤더 규칙)

## 초기 적용 비용에 대해

전량 재작성이 필요한 것은 위 8단계뿐이고, 그 대부분은 "마커 표시된 값 블록 채우기"로
좁혀진다. 방법론 문서는 그대로 채택되므로, 이 스킬이 만들어지기까지 든 설계 비용은
이식 시 다시 지불하지 않는다. baseline 메커니즘 덕분에 기존 코드베이스가 완벽하지
않아도 첫날부터 적용할 수 있다 — 자세한 논증은
[references/why-this-skill.md](why-this-skill.md) 참고.
