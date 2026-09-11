# 이미지 자산 가이드

## 고객사 로고: 용도와 명명 규칙

고객사 로고는 회사명이 아니라 **노출 위치와 배경색**으로 구분합니다. 같은 고객사의 원본이
여러 개일 수 있으므로, 앞으로는 다음 구조를 기준으로 합니다.

| 구분 | 폴더 | 사용 위치 | 파일명 규칙 |
| --- | --- | --- | --- |
| 메인/다크 로고 | `clients/dark` | 메인 히어로, 어두운 배경의 로고 월 | `{client}-on-dark.{ext}` |
| 고객사례 로고 | `clients/case-study` | 고객사례 카드·상세 | `{client}-case.{ext}` |

`on-dark`는 흰색 또는 밝은색 로고처럼 **어두운 배경에서만 쓰는 변형**에만 붙입니다. 배경과
무관하게 쓰는 기본 로고는 `{client}-default.{ext}`로 관리합니다. 이 규칙이면 같은 고객사라도
용도를 파일명만 보고 구별할 수 있습니다.

중복 원본은 `clients/case-study`만 보관합니다. `clients/dark`에는 다크 배경용으로 남겨야 하는
비중복 로고만 둡니다.

## 현재 자산 분류

| 폴더/그룹 | 수량 | 분류 | 현재 상태 |
| --- | ---: | --- | --- |
| 루트 이미지 | 15 | 페이지별 히어로·배경·샘플 | 사용/검토 혼재 |
| `brand` | 5 | 코드프레소 CI (화이트·프라이머리·블랙·아이콘) | 브랜드 공통 자산 |
| `clients/dark` | 10 | 메인·다크 배경 고객사 로고 | `case-study`와 중복되지 않는 로고만 보관 |
| `clients/case-study` | 10 | 고객사례용 원본 | 현재 직접 미사용 |
| `clients/trust-badges` | 7 | 인증·수상·파트너 배지 | 사용 여부 확인 필요 |
| `icons/track` | 9 | 기술 트랙 아이콘 | 사용 여부 확인 필요 |
| `company/about` | 3 | 회사 소개 일러스트 | 사용 여부 확인 필요 |
| `company/history` | 5 | 연혁 사진/화면 | `company.html`에서 사용 중 |
| `products/skillfit` | 3 | SkillFit 화면 이미지 | 사용 여부 확인 필요 |
| `products/skillcertify` | 5 | SkillCertify 화면 이미지 | 사용 여부 확인 필요 |
| `mockups` | 4 | 목업 제작용 HTML 원본 | 개발 소스, 배포 이미지 아님 |
| `icons/service` | 36 | 서비스/UI 아이콘 | 현재 인라인 SVG 전환과 함께 미사용 후보 |
| `icons/library` | 126 | 범용 일러스트 아이콘 라이브러리 | 현재 직접 참조 미확인; 재사용 후보 |

## 미사용 자산 처리 기준

다음은 현재 HTML/CSS/JS의 직접 경로 참조가 확인되지 않아 **미사용 후보**로 분류합니다.
삭제하지 말고 `images/_archive/` 아래에 원본 그대로 보관한 뒤, 한 배포 주기 동안 404와 디자인
검수를 거쳐 삭제합니다.

- `clients/case-study/` 전체 10개
- `icons/service/`의 현존 36개
- `icons/library/` 전체 126개
- `clients/trust-badges/`, `icons/track/`, `company/about/`, `products/skillfit/`, `products/skillcertify/` 중 직접 참조가 없는 파일
- 루트의 `bg-gradient.png`, `bg-line.png`, `main_banner_img_pc.avif`, `skillpath01.png` 등 직접 참조가 없는 파일

주석에서 언급된 아이콘은 실제 `img` 경로 사용과 다릅니다. 따라서 주석 언급만으로 사용 중으로
판정하지 않습니다.

## 정리 순서

1. 고객사례 카드는 `case-study` 세트, 메인 다크 로고 월은 `hero-dark` 세트로 확정합니다.
2. 각 파일을 새 이름으로 복사하고 HTML/CSS/JS 참조를 한 번에 변경합니다.
3. 이전 파일은 `_archive/`에 한 배포 주기 보관합니다.
4. 모든 경로가 안정된 뒤에만 중복·미사용 원본을 삭제합니다.
