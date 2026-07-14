---
phase: 12-여행-사진-기초
verified: 2026-07-14T02:13:18Z
status: passed
score: 19/19 must-haves verified
---

# Phase 12: 여행 사진 기초 Verification Report

**Phase Goal:** 독자가 Canon R7 + 삼양 AF 12mm F2.0 + RF 50mm F1.8(+RF-S 18-150mm 추천)로 몽골에서 주간·황혼 여행 사진을 카메라 설정·구도·빛·현지 예절까지 갖춰 촬영할 수 있다.
**Verified:** 2026-07-14T02:13:18Z
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths (from 12-01-PLAN.md and 12-02-PLAN.md `must_haves.truths`)

| # | Truth | Status | Evidence |
|---|---|---|---|
| 1 | index.md 매력 훅 + 1부 배치 이유 | ✓ VERIFIED | index.md L1-13 (은하수/드론 대비, "1부" 배치 이유 명시) |
| 2 | index.md 범위 고지(지상·주간/황혼) + 야간·항공 제외 이유 | ✓ VERIFIED | index.md L15-25 (골든아워~블루아워 범위, 은하수/드론/영상 제외 사유 각각 명시) |
| 3 | camera-settings.md M→Av 언런 명시 | ✓ VERIFIED | camera-settings.md L5-11 ("은하수 파트… M모드 필수는 야간이라는 특수한 조건 때문") |
| 4 | 노출보정(±EV)·측광(평가/스팟) | ✓ VERIFIED | camera-settings.md L13-27 |
| 5 | CR3 RAW 기존 워크플로 재사용(신규 도구 없음) + WB 델타 | ✓ VERIFIED | camera-settings.md L29-41 ("별도의 컨버터나 플러그인을 새로 설치할 필요가 없습니다") |
| 6 | 삼양 12mm 정확 표기(RF-S 마운트·AF·방진·213g·62mm) + Sony E/Fuji X 구분 | ✓ VERIFIED | camera-settings.md L63-69, L55 |
| 7 | 12mm(≈19mm)↔50mm(≈80mm) 화각 공백(≈24–70mm) + 18-150mm(≈29–240mm) 추천 | ✓ VERIFIED | camera-settings.md L71-75 |
| 8 | 방진 차이(바디+12mm O / 50mm·18-150 X) + 렌즈 교체 현장관리 | ✓ VERIFIED | camera-settings.md L77-83 |
| 9 | 초광각(왜곡/수평/선스타/F2.8) + 준망원(압축/인물/디테일) 실전 | ✓ VERIFIED | camera-settings.md L85-98 |
| 10 | IBIS 8단(일반) vs 7단(18-150 실측) 자기모순 없는 정리 + 단렌즈 바디 IBIS 단독 | ✓ VERIFIED | camera-settings.md L43-47(caveat), L61(표 아래 정리 문장) — 두 서술이 "다른 조건의 주장"으로 일관 |
| 11 | 두 페이지 실사진 없음 + 스텁 제거 + build green | ✓ VERIFIED | `![` 없음, "작성 예정" 없음, `mdbook build src` exit 0 |
| 12 | composition-and-light.md 지상 구도(삼분할·레이어링·프레임 속 프레임·리딩라인·스케일) | ✓ VERIFIED | composition-and-light.md L9-28 |
| 13 | 리딩라인·스케일·골든/블루아워는 09-drone/composition.md 상호참조 링크 + 지상 버전 자체 서술(델타) | ✓ VERIFIED | L5, L23-25, L32-34 (링크 후 지상 버전 새로 서술, 순수 재서술 아님) |
| 14 | 빛·타이밍 지상 델타(정오 하드라이트 인물 불리·역광 실루엣·명소 방위별 빛) | ✓ VERIFIED | composition-and-light.md L36-55 |
| 15 | 날씨 델타(흐림/황사 확산광 — 인물 유리/풍경 밋밋 + 보완법) | ✓ VERIFIED | composition-and-light.md L46-51 (이전 검증에서 blocker였던 항목, 이번엔 존재 확인) |
| 16 | 스토리텔링 세트(와이드=12mm/미디엄/디테일=50mm) 체크리스트 | ✓ VERIFIED | composition-and-light.md L57-65 |
| 17 | landscape-and-street.md 몽골 특화 에티켓(동의·게르·오보·아이·가축·라쏘폴·무보수) | ✓ VERIFIED | landscape-and-street.md L9-17 |
| 18 | 에티켓 정직 표기("일반적으로 통용"/가이드 확인) + 출처없는 금액·의식 미단정 + CAAM 동의 원칙 상호 링크(하나의 원칙) | ✓ VERIFIED | L7(정직 표기 서문), L9("별개의 규칙이 아니라… 하나의 원칙"), L15(오보 세부는 "단정하지 않습니다") |
| 19 | 인물/현장 기초(캔디드·피부톤 측광·배경정리·말탄사람 낮은자세) + 사막 먼지·렌즈교체 관리(field-prep 링크) | ✓ VERIFIED | landscape-and-street.md L21-26, L32-38 |

**Score:** 19/19 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|---|---|---|---|
| `src/11-travel/index.md` | 여행 사진 개요·매력·범위 (GEAR-01) | ✓ VERIFIED | 35 lines, "황혼" present, no stub, exports N/A (markdown page) |
| `src/11-travel/camera-settings.md` | R7 설정 + 렌즈 활용 (GEAR-02/03, SHOOT-02) | ✓ VERIFIED | 103 lines, "RF-S" present (5×), no stub |
| `src/11-travel/composition-and-light.md` | 지상 구도·빛·날씨 델타 + 스토리텔링 (SHOOT-01) | ✓ VERIFIED | 70 lines, "골든아워" present, no stub |
| `src/11-travel/landscape-and-street.md` | 몽골 에티켓 + 인물/현장 기초 + 현장관리 (SHOOT-03) | ✓ VERIFIED | 43 lines, "오보" present, no stub |

Level 2/3 substance check: all four files pass — no TODO/FIXME/placeholder/coming-soon patterns, no empty returns, all internal markdown links resolve to files that exist on disk (checked below), and each page is inbound-linked from at least one sibling page (index.md → all three; each page links forward/back to siblings), so none are orphaned within the phase.

### Key Link Verification

| From | To | Via | Status | Details |
|---|---|---|---|---|
| camera-settings.md | ../02-fundamentals/exposure-basics.md | 노출 삼각형/M모드 이론 재사용 | ✓ WIRED | file exists; linked at L7, L11; no re-explanation of triangle, only "다시 설명하지 않습니다" + link |
| camera-settings.md | ../02-fundamentals/raw-and-wb.md | RAW/WB 이론 재사용 | ✓ WIRED | file exists; linked at L31, L41 |
| camera-settings.md | ../03-practice/field-prep-and-hazards.md | 먼지·저온 재사용, 렌즈 교체 델타만 | ✓ WIRED | file exists; linked at L83 |
| camera-settings.md | ../07-appendix/camera-lens-picks.md | 크롭 배율 산식 재사용 | ✓ WIRED | file exists; linked at L59 |
| composition-and-light.md | ../09-drone/composition.md | 리딩라인·스케일·골든/블루아워 상호참조 | ✓ WIRED | file exists; linked at L5, L25, L34 (incl. anchor `#항공-특유의-빛-읽기`) |
| landscape-and-street.md | ../08-references/drone-mongolia-regulations.md | CAAM 사람 위 동의 규정과 상호 링크 | ✓ WIRED | file exists; linked at L9; target file confirmed to contain "사람·재산 상공… 동의 필요" (verified against source, not just claimed) |
| landscape-and-street.md | ../03-practice/field-prep-and-hazards.md | 먼지·저온 재사용, 렌즈교체 델타만 | ✓ WIRED | file exists; linked at L34 |
| index.md | ../09-drone/index.md | 항공 파트로 안내(야간/항공 제외 사유) | ✓ WIRED | file exists; linked at L22 |
| index.md → camera-settings.md → composition-and-light.md → landscape-and-street.md | 형제 페이지 순서 | 읽는 순서 체인 | ✓ WIRED | forward links present at end of each page, and index.md lists full reading order |

All 9 key links resolve to existing files; no broken relative paths found.

### Requirements Coverage

| Requirement | Status | Evidence |
|---|---|---|
| GEAR-01 | ✓ SATISFIED | index.md 매력·범위·제외 이유 |
| GEAR-02 | ✓ SATISFIED | camera-settings.md Av↔M·노출보정·측광·CR3·WB, 이론 링크 재사용 |
| GEAR-03 | ✓ SATISFIED | camera-settings.md 12mm/50mm/18-150·공백·방진·현장관리·IBIS 정리 |
| SHOOT-01 | ✓ SATISFIED | composition-and-light.md 지상 델타(골든아워·날씨·전경/배경) |
| SHOOT-02 | ✓ SATISFIED | camera-settings.md 초광각/준망원 실전 |
| SHOOT-03 | ✓ SATISFIED | landscape-and-street.md 에티켓·CAAM 상호링크·현장관리 |

(Note: `.planning/REQUIREMENTS.md` checkboxes still show these as "Pending" — this is a tracking-table update, not a content gap; the orchestrator/planner typically flips these after phase sign-off.)

### Anti-Patterns Found

None. Scanned all four files for TODO/FIXME/XXX/HACK/placeholder/coming-soon/lorem-ipsum/empty-return patterns — zero matches. No `![` real-image markdown references. No "작성 예정" stub text remaining.

### Honesty-Critical Checks (user's hard constraint)

| Check | Result |
|---|---|
| 삼양 12mm = Canon RF-S 마운트 전용(NOT 범용 RF), Sony E/Fuji X 구분, ×1.6 → ≈19mm | ✓ Correct — camera-settings.md L65 explicitly states RF-S-only, crop-mode-only on FF RF bodies, and distinguishes Sony E/Fuji X versions |
| 방진 split: 바디+12mm O / RF50mm·18-150 X | ✓ Correct — table (L53-57) and prose (L79) both consistent, no contradiction |
| CR3 RAW = 기존 darktable/Lightroom 재사용, 신규 도구 없음 | ✓ Correct — L31 explicitly says no new converter/plugin needed |
| M→Av "언런" 명시 | ✓ Correct — explicit contrast with 은하수 M모드, framed as "unlearn" (L5 heading, L9 body) |
| IBIS 8단(일반) vs 7단(RF-S 18-150 협응) reconciled | ✓ Correct — reconciled twice (camera-settings.md L43-47 caveat + L61 explicit "서로 다른 조건의 주장이지, 모순되는 두 주장이 아닙니다"), and 12mm/RF50mm correctly noted as body-IBIS-only both times |
| composition-and-light.md 날씨 델타 present | ✓ Present — L46-51, was previously flagged as a blocker risk, now confirmed written |
| landscape-and-street.md 예절 정직 표기, no unsourced amounts/rituals as fact | ✓ Correct — L7 explicit honesty framing; L15 오보 offering details explicitly marked as not asserted ("단정하지 않습니다"); no specific currency amounts stated anywhere |
| CAAM 동의 link is one unified principle (not two separate rules) | ✓ Correct — L9 explicitly frames as "별개의 규칙이 아니라... 하나의 원칙" |
| Reuse via link not restate (5 target files) | ✓ All 5 link targets exist and resolve; no theory restated (exposure triangle, RAW rationale, drone composition theory, CAAM regs, field-prep all linked with explicit "다시 설명하지 않습니다" framing) |
| No real photos, glossary.md unmodified, relative paths correct | ✓ No `![`, glossary.md untouched (git status clean), all relative paths (`../02-fundamentals/`, `../09-drone/`, `../08-references/`, `../03-practice/`, `../07-appendix/`, `../12-travel-sites/`, sibling filenames) resolve correctly |
| `mdbook build src` exits 0 | ✓ Confirmed — ran build, exit 0, then `git restore docs/ && git clean -fdq docs/` to leave docs/ clean |

### Minor Observation (non-blocking)

- `camera-settings.md` contains **zero** `<!-- 이미지: ... -->` placeholder comments, even though 12-01-PLAN.md Task 2/3 actions called for `exposure-comp-dial.jpg` and `lens-fov-compare.jpg` placeholder comments. This is not a `must_haves` truth violation (the truth only requires no *real* photo files, which holds), but it is a deviation from the task's stated action detail. Does not block phase goal achievement or any of GEAR-01/02/03/SHOOT-01/02/03; flagged for awareness only, not listed as a gap.

### Human Verification Required

None. All must-haves are structurally/textually verifiable via grep and file inspection; this phase produces prose/reference content (no interactive UI, no runtime behavior) so no additional human testing is needed beyond normal editorial proofreading.

### Gaps Summary

No gaps found. All 19 derived truths across both plans verified against actual file content (not SUMMARY claims). All key links resolve to real files with substantively matching content (spot-checked CAAM target file to confirm the "사람·재산 상공 동의 필요" claim is accurate, not just linked). Honesty-critical checks (RF-S mount, dust-seal split, CR3 reuse, M→Av unlearn framing, IBIS 8/7 reconciliation, etiquette honesty framing, CAAM unified-principle framing) all pass. `mdbook build src` exits 0; docs/ build artifacts restored to clean git state afterward.

---

*Verified: 2026-07-14T02:13:18Z*
*Verifier: Claude (gsd-verifier)*
