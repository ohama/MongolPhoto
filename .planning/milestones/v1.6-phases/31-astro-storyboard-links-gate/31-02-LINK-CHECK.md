# 31-02 LINK-CHECK — v1.6 마일스톤 최종 게이트

**실행 일시:** 2026-07-21
**게이트:** 책 전체 빌드 + 내부 링크 무결성 전수 검증 (wave 2 직렬, 31-01 콘텐츠 확정 이후)
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

- 스캔 범위: `src/**/*.md` (모든 파트 — 1부·2부(스토리보드 6종 포함)·3부(은하수 타임랩스 배치된 timelapse.md 포함)·4부 + 고비 5곳 × 1·2·3부 = 15개 명소 역링크 + SUMMARY·introduction·about 등 전부)
- 추출 패턴: `](path)` 형태의 마크다운 링크
- 스캔 규칙(제외/정규화):
  - 제외: `http://`, `https://`, `mailto:`, `tel:`, `#`(순수 앵커) 로 시작하는 외부/앵커 URL
  - 각괄호 `<...>` 링크는 껍질 제거 후 검사
  - 앵커(`#...`)는 스트립하고 파일 경로만 검증
  - 각 링크는 해당 파일 위치 기준 상대경로로 정규화(`os.path.normpath`) 후 존재 검증

### 결과

| 지표 | 값 |
|------|-----|
| TOTAL internal links | **1080** |
| RAW DEAD (known FP 포함) | **2** |
| REAL DEAD (filtered) | **0** |

- 스크립트 종료코드: **0** (REAL DEAD filtered = 0)

### RAW DEAD 상세 (2건 — 모두 알려진 false-positive)

| # | 파일 | 링크 타깃 | 판정 |
|---|------|-----------|------|
| 1 | `src/about.md` | `images/intro/파일명.jpg` | known-FP |
| 2 | `src/3-astro/3-practice/template.md` | `../../images/practice/session-N/xxx.jpg` | known-FP |

raw_dead에 이 2건 외 항목 없음 — Phase 29~31이 추가한 2부 스토리보드 6종(드론 2 + 통합 4), 3부 은하수 타임랩스 배치(timelapse.md), 15개 명소→스토리보드 역링크, 4부 field-day 상향 링크 4개 등 v1.6 신규 링크를 포함해 책 전체 상호링크 무결.

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

**PASS** — `mdbook build src` 그린(create-missing=false, 2회 교차 확인) + `src/**/*.md` 전체(모든 파트 incl. v1.6 신규 스토리보드 6종 + 은하수 타임랩스 배치 + 15개 명소 역링크) 내부 링크 전수 스캔 REAL DEAD(filtered) = 0.

- 31-01에서 확정된 은하수 타임랩스 스토리보드(3부 `3-astro/6-bonus/timelapse.md` 섹션, SB-03)와 고비 5곳(차강소브라·바양작·홍고린엘스·욜링암·바가가즈링촐로) × 1·2·3부 = 15개 명소→스토리보드 역링크(LINK-01) 포함, 책 전체(1·2·3·4부 + 스토리보드) 상호링크 무결.
- v1.5 baseline(957 links) 대비 TOTAL internal links가 1080으로 증가 — Phase 29(스토리보드 스캐폴드·장비 대조표 앵커)~31(스토리보드 콘텐츠·역링크)이 추가한 v1.6 신규 링크가 반영된 결과이며, 증가분 전량이 REAL DEAD 없이 해소됨.
- v1.6 마일스톤(Phase 29~31) 전체 콘텐츠 빌드·링크 게이트 통과.

---

## v1.6 마일스톤 최종 상태

- Phase 29 (자산 리사이즈·정직 대조 + 2부 스캐폴드/스텁 + SUMMARY 배선): 완료 — ASSET-01, ASSET-02
- Phase 30 (드론 영상 2종 + 드론지상 통합 4종 콘텐츠 + 4부 역링크): 완료 — SB-01, SB-02
- Phase 31 (은하수 타임랩스 3부 배치 + 전체 교차/역링크 + 최종 게이트): 완료 — SB-03, LINK-01 + 31-02 게이트 **PASS**

요건 커버: SB-01(드론 전용 스토리보드 2종) · SB-02(드론지상 통합 스토리보드 4종 + 4부 역링크) · SB-03(은하수 타임랩스 3부 배치) · ASSET-01(자산 리사이즈) · ASSET-02(장비 정직 대조표) · LINK-01(전체 교차/역링크 + 최종 게이트) — **6/6 완료**.

빌드·링크 무결성 관점에서 v1.6 콘텐츠는 릴리스 가능 상태(GREEN). 스토리보드 콘셉트 이미지·저자 실촬영본·UI 캡처는 트립(8/13) 이후 실촬영/완성 영상으로 교체 예정(기존 v1.5 원칙 승계, 텍스트/템플릿 위주 작성은 계획대로).

**v1.6 영상 스토리보드 마일스톤 완결.**
