---
phase: 17-develop-order-recipes
verified: 2026-07-15T00:00:00Z
status: passed
score: 3/3 requirements verified (EDIT-02, RECIPE-01, RECIPE-02)
re_verification: null
gaps: []
human_verification:
  - test: "recipe-*-before.jpg 대비 recipe-*-after.jpg를 나란히 열어 시각적으로 확인"
    expected: "before는 대비·채도가 눌린 밋밋한 상태, after는 톤·색이 살아난 상태로 실제로 달라 보임"
    why_human: "이미지의 시각적 인상(플랫 vs 보정) 차이는 grep으로 확인 불가"
  - test: "Adobe 지원 렌즈 URL 접속 확인"
    expected: "https://helpx.adobe.com/camera-raw/kb/supported-lenses.html 가 실제 Adobe 페이지로 열림"
    why_human: "외부 URL 유효성은 실제 접속 필요 (형식상 정식 Adobe helpx 도메인)"
---

# Phase 17: 필수 보정 순서 + 상황별 레시피 Verification Report

**Phase Goal:** 독자가 LR Classic 표준 편집 순서를 왜 그 순서인지와 함께 따라 하고, 몽골 여행 대표 상황별 레시피를 실제 before/after 예시와 함께 적용한다.
**Verified:** 2026-07-15
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | 독자가 17단계 현상 순서를 각 단계의 "왜"와 함께 따라 할 수 있다 | ✓ VERIFIED | develop-order.md에 1~17단계 헤딩 존재, "왜 여기 오는가" 17회 등장 (단계당 1개) |
| 2 | 순서가 "법칙"이 아닌 "관례"로 정직하게 프레이밍됨 | ✓ VERIFIED | 제5절 "이건 '법칙'이 아니라 '관례'입니다", 널리 통용되는 관례로 명시, 결론부(147행)에서 재강조 |
| 3 | 삼양12mm/RF50mm 렌즈 프로파일을 미확인으로 다루고 이름을 지어내지 않음 | ✓ VERIFIED | 제3절 "집필 시점 기준 미확인", "프로파일명을 지어내지 않겠습니다", 검색→수동 fallback 4단계 제시 |
| 4 | 마스킹(15단계)은 Phase 18로 위임되고 여기서 깊게 가르치지 않음 | ✓ VERIFIED | 124~128행 "이 장에서 깊게 다루지 않습니다", masking-and-detail.md로 링크 |
| 5 | 5개 상황별 레시피가 각각 슬라이더·방향·이유를 제시 | ✓ VERIFIED | (a)대낮 강광 (b)골든아워/황혼 (c)역광/고대비 (d)인물/피부톤 (e)날린 하늘 복원 — 각 항목이 슬라이더+방향(±)+이유 서술 |
| 6 | P3 과보정 경고 박스 존재 | ✓ VERIFIED | 93행 "⚠️ 과보정(P3) 경고" blockquote, 대표 증상 4종 + 예방법 |
| 7 | 최소 2개 before/after 쌍이 임베드되고 각 캡션이 4개 정직성 항목 명시 | ✓ VERIFIED | midday·goldenhour 2쌍, 각 캡션에 (a)CC0 시연 (b)인위적 플랫·RAW 아님 (c)2026-08-13 이후 실제 몽골로 교체 (d)Bernard Gagnon·CC0·Wikimedia 크레딧 |
| 8 | 4개 이미지 파일이 실제 존재하고 유효 | ✓ VERIFIED | recipe-{midday,goldenhour}-{before,after}.jpg 모두 존재, 유효 JPEG 2000px (551~763KB) |

**Score:** 8/8 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `src/13-editing/develop-order.md` | 17단계 순서 각 WHY | ✓ VERIFIED | 148줄, 17단계 헤딩 + 요약표 + "왜 여기 오는가" 17회 |
| `src/13-editing/travel-recipes.md` | 5 레시피 + P3 경고 | ✓ VERIFIED | 108줄, 5개 레시피 + 과보정 경고 박스 + 2 before/after 표 |
| `src/images/editing/recipe-midday-before.jpg` | 인위적 플랫 예시 | ✓ VERIFIED | 유효 JPEG 2000x1269, 552KB |
| `src/images/editing/recipe-midday-after.jpg` | 보정 예시 | ✓ VERIFIED | 유효 JPEG 2000x1269, 603KB |
| `src/images/editing/recipe-goldenhour-before.jpg` | 인위적 플랫 예시 | ✓ VERIFIED | 유효 JPEG 2000x1333, 652KB |
| `src/images/editing/recipe-goldenhour-after.jpg` | 보정 예시 | ✓ VERIFIED | 유효 JPEG 2000x1333, 763KB |

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|----|--------|---------|
| SUMMARY.md | develop-order.md | 목차 항목 30행 | ✓ WIRED | mdbook 목차에 등록 |
| SUMMARY.md | travel-recipes.md | 목차 항목 31행 | ✓ WIRED | mdbook 목차에 등록 |
| travel-recipes.md | recipe-*.jpg | 마크다운 이미지 임베드 | ✓ WIRED | 4개 이미지 상대경로 `../images/editing/` 참조, 파일 존재 |
| develop-order.md | travel-recipes.md / masking-and-detail.md / lightroom-workflow.md | 상대 링크 | ✓ WIRED | 대상 파일 모두 존재 |
| travel-recipes.md | camera-settings.md / av-mode-auto-iso.md / shoot-for-edit.md / credits.md | 상대 링크 | ✓ WIRED | 대상 파일 모두 존재 |
| mdbook build | 전체 책 | `mdbook build src` (create-missing=false) | ✓ GREEN | 에러 없이 HTML 생성, docs/ restore·clean 완료, 스트레이 book/ 없음 |

### Requirements Coverage

| Requirement | Status | Notes |
|-------------|--------|-------|
| EDIT-02 (17단계 현상 순서 + WHY, 관례 프레이밍, 렌즈 미확인, 마스킹 위임) | ✓ SATISFIED | Truth 1~4 |
| RECIPE-01 (5 레시피 슬라이더·방향·이유 + P3 경고) | ✓ SATISFIED | Truth 5~6 |
| RECIPE-02 (≥2 before/after CC0 + 4항목 캡션 + 파일 존재) | ✓ SATISFIED | Truth 7~8 |

### Honesty Checks

| Check | Result |
|-------|--------|
| 렌즈 프로파일명 지어내지 않음 | ✓ PASS — "미확인" 명시, 프로파일명 없음 |
| 조작된 Adobe 기능명/URL 없음 | ✓ PASS — 유일한 URL은 정식 Adobe helpx 도메인(supported-lenses.html) |
| before/after를 진짜 RAW 현상 결과라 주장하지 않음 | ✓ PASS — "실제 RAW 파일이 아니라 인위적으로 밋밋하게 만든 파생본" 명시 |
| 마스킹을 Phase 18에서 중복하지 않음 | ✓ PASS — 도구명만 언급, 조작은 masking-and-detail.md로 위임 |
| 정확한 가격 없음 | ✓ PASS — 가격 패턴(원/달러/$) 미검출 |

### Anti-Patterns Found

없음. TODO/FIXME/placeholder 스텁 패턴 미검출. 두 문서 모두 실질 내용(148줄/108줄).

### Human Verification Required

1. **이미지 시각 비교** — before/after JPEG를 열어 실제로 플랫 vs 보정 차이가 보이는지 확인 (grep 불가).
2. **Adobe 렌즈 URL** — supported-lenses.html 실제 접속 확인 (도메인은 정식 Adobe helpx).

### Gaps Summary

기능적 갭 없음. 참고 사항(비차단): travel-recipes.md는 "예시 사진 출처·라이선스 상세는 credits.md에 정리"라고 안내하나 현재 credits.md(10줄)에는 recipe 이미지 항목이 아직 없음. 그러나 RECIPE-02(d) 크레딧 요건은 각 이미지 캡션에 인라인(Bernard Gagnon·CC0·Wikimedia)으로 충족되며, credits.md 채우기는 ROADMAP상 Phase 19(참고·크레딧) 범위이므로 Phase 17 갭이 아님.

---

_Verified: 2026-07-15_
_Verifier: Claude (gsd-verifier)_
