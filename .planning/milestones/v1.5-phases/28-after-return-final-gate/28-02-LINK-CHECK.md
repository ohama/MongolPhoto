# 28-02 LINK-CHECK — v1.5 마일스톤 최종 게이트

**실행 일시:** 2026-07-21
**게이트:** 책 전체 빌드 + 내부 링크 무결성 전수 검증 (wave 2 직렬, 28-01 콘텐츠 확정 이후)
**콘텐츠 변경:** 없음 (검증 전용, files_modified: [])

---

## 1. mdbook 전체 빌드

- 명령: `/opt/homebrew/bin/mdbook build src`
- 종료코드: **0**
- 경고: `not found` / `dead` / broken link 관련 경고 **없음**
- `create-missing=false` 이므로 SUMMARY.md의 죽은 링크·누락 파일이 있으면 빌드 실패로 검출됨 — 통과.
- 교차 확인을 위해 빌드를 두 번 실행(Task 1 + Task 2), 두 번 모두 그린.
- 빌드 산출물 `docs/`: 매 빌드 후 `git restore docs/` + `git clean -fdq docs/` 로 복원, 스테이징에 없음(미커밋).

**결과: 그린(GREEN)**

---

## 2. 내부 링크 전수 스캔

- 스캔 범위: `src/**/*.md` (모든 파트 — 1부·2부·3부·4부(신규) + SUMMARY·introduction·about 등 전부)
- 추출 패턴: `](path)` 형태의 마크다운 링크
- 스캔 규칙(제외/정규화):
  - 제외: `http://`, `https://`, `mailto:`, `tel:`, `#`(순수 앵커) 로 시작하는 외부/앵커 URL
  - 각괄호 `<...>` 링크는 껍질 제거 후 검사
  - 앵커(`#...`)는 스트립하고 파일 경로만 검증
  - 각 링크는 해당 파일 위치 기준 상대경로로 정규화(`os.path.normpath`) 후 존재 검증

### 결과

| 지표 | 값 |
|------|-----|
| TOTAL internal links | **957** |
| RAW DEAD (known FP 포함) | **2** |
| REAL DEAD (filtered) | **0** |

- 스크립트 종료코드: **0** (REAL DEAD filtered = 0)

### RAW DEAD 상세 (2건 — 모두 알려진 false-positive)

| # | 파일 | 링크 타깃 | 판정 |
|---|------|-----------|------|
| 1 | `src/about.md` | `images/intro/파일명.jpg` | known-FP |
| 2 | `src/3-astro/3-practice/template.md` | `../../images/practice/session-N/xxx.jpg` | known-FP |

raw_dead에 이 2건 외 항목 없음 — 신규 4부(`src/4-workflow/**`)가 추가한 라우팅 링크 포함 전 책 상호링크 무결.

---

## 3. 알려진 pre-existing false-positive (REAL DEAD 집계 제외)

1. **`src/about.md` → `images/intro/파일명.jpg`**
   - 근거: 인라인 예시의 자리표시자 파일명(placeholder). 실제 이미지 파일이 아니라 문서 내 경로 표기 예시.
   - 필터 키: 경로에 `파일명` 포함.
2. **`src/3-astro/3-practice/template.md` → `../../images/practice/session-N/xxx.jpg`**
   - 근거: 연습 로그 템플릿의 자리표시자(placeholder). 사용자가 세션별로 실제 파일명으로 치환하도록 남긴 예시 경로.
   - 필터 키: 경로에 `session-N` 포함.

두 건 모두 스캐너의 `FALSE_POS_SUBSTR` 예외 집합에 명시되어 REAL DEAD 집계에서 제외됨.

---

## 4. 최종 판정

**PASS** — `mdbook build src` 그린(create-missing=false, 2회 교차 확인) + `src/**/*.md` 전체(모든 파트 incl. 신규 4부) 내부 링크 전수 스캔 REAL DEAD(filtered) = 0.

- 28-01에서 확정된 귀국 후 정리(after-return.md: POST-01 3-2-1 백업, POST-02 선별·편집 순서 허브) 본문 및 신규 라우팅 링크 포함, 책 전체(1·2·3·4부) 상호링크 무결.
- 28-01 baseline(957 links, REAL DEAD 0) 대비 링크 수 동일 — 28-02는 콘텐츠 변경 없이 재검증만 수행했으므로 예상된 결과.
- v1.5 마일스톤(Phase 24~28) 전체 콘텐츠 빌드·링크 게이트 통과.

---

## v1.5 마일스톤 최종 상태

- Phase 24 (4부 신설 + 개요 랜딩 + 전 챕터 스텁): 완료
- Phase 25 (여행 전 준비 — 통합 패킹, 촬영 계획·앱 오프라인): 완료
- Phase 26 (하루 현장 운용 — 타임라인, 세 카메라 오케스트레이션): 완료
- Phase 27 (데이터·전원 운용 — 카드·현장 백업, 멀티데이 전원): 완료
- Phase 28 (귀국 후 정리 — 3-2-1 백업, 선별·편집 순서 허브) + 최종 게이트: 완료 + 28-02 게이트 **PASS**

빌드·링크 무결성 관점에서 v1.5 콘텐츠는 릴리스 가능 상태(GREEN). 저자 실촬영본·UI 캡처·하루 실사례는 트립(8/13) 이후 교체 예정으로 별도 관리(텍스트/템플릿 위주 작성은 계획대로).
