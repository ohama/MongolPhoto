# 23-02 LINK-CHECK — v1.4 마일스톤 최종 게이트

**실행 일시:** 2026-07-15
**게이트:** 책 전체 빌드 + 내부 링크 무결성 전수 검증 (wave 2 직렬, 23-01 콘텐츠 확정 이후)
**콘텐츠 변경:** 없음 (검증 전용, files_modified: [])

---

## 1. mdbook 전체 빌드

- 명령: `/opt/homebrew/bin/mdbook build src`
- 종료코드: **0**
- 경고: `not found` / `dead` / broken link 관련 경고 **없음**
- `create-missing=false` 이므로 SUMMARY.md의 죽은 링크·누락 파일이 있으면 빌드 실패로 검출됨 — 통과.
- 빌드 산출물 `docs/`: `git restore docs/` + `git clean -fdq docs/` 로 복원, 스테이징에 없음(미커밋).

**결과: 그린(GREEN)**

---

## 2. 내부 링크 전수 스캔

- 스캔 범위: `src/**/*.md` (모든 마크다운 파일)
- 추출 패턴: `](path)` 형태의 마크다운 링크
- 스캔 규칙(제외/정규화):
  - 제외: `http://`, `https://`, `mailto:`, `tel:`, `#`(순수 앵커) 로 시작하는 외부/앵커 URL
  - 각괄호 `<...>` 링크는 껍질 제거 후 검사
  - 앵커(`#...`)는 스트립하고 파일 경로만 검증
  - 각 링크는 해당 파일 위치 기준 상대경로로 정규화(`os.path.normpath`) 후 존재 검증

### 결과

| 지표 | 값 |
|------|-----|
| TOTAL internal links | **715** |
| RAW DEAD (known FP 포함) | **2** |
| DEAD (filtered) | **0** |

- 스크립트 종료코드: **0** (DEAD filtered = 0)

### RAW DEAD 상세 (2건 — 모두 알려진 false-positive)

| # | 파일 | 링크 타깃 | 판정 |
|---|------|-----------|------|
| 1 | `src/introduction.md` | `images/intro/파일명.jpg` | known-FP |
| 2 | `src/03-practice/template.md` | `../images/practice/session-N/xxx.jpg` | known-FP |

---

## 3. 알려진 pre-existing false-positive (DEAD 집계 제외)

1. **`src/introduction.md` → `images/intro/파일명.jpg`**
   - 근거: 인라인 코드 예시의 자리표시자 파일명(placeholder). 실제 이미지 파일이 아니라 문서 내 경로 표기 예시.
2. **`src/03-practice/template.md` → `../images/practice/session-N/xxx.jpg`**
   - 근거: 연습 로그 템플릿의 자리표시자(placeholder). 사용자가 세션별로 실제 파일명으로 치환하도록 남긴 예시 경로.

두 건 모두 스캐너의 `FALSE_POS` 예외 집합에 명시되어 DEAD 집계에서 제외됨. raw_dead에 이 2건 외 항목은 없음 → 실제(real) 죽은 링크 0건.

---

## 4. 최종 판정

**PASS** — `mdbook build src` 그린(create-missing=false) + `src/**/*.md` 내부 링크 전수 스캔 DEAD(filtered) = 0.

- 23-01에서 추가된 스토리보드·크레딧 본문 및 신규 링크(grade-speed·export·storyboard 경유) 포함 전 책 상호링크 무결.
- v1.4 마일스톤(Phase 20~23) 콘텐츠 빌드·링크 게이트 통과.

---

## v1.4 마일스톤 최종 상태

- Phase 20 (2부 재구성 + 스텁): 완료
- Phase 21 (드론 영상 촬영): 21-01 완료 (21-02 움직임 샷 선택적 대기)
- Phase 22 (CapCut 편집 워크플로): 완료
- Phase 23 (예시 스토리보드 + 최종 게이트): 23-01 완료 + 23-02 게이트 **PASS**

빌드·링크 무결성 관점에서 v1.4 콘텐츠는 릴리스 가능 상태(GREEN). 실촬영본·UI 캡처 교체는 트립(8/13) 후속 작업으로 별도 관리.
