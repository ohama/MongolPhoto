---
phase: 16-concepts-catalog-tools
verified: 2026-07-15T00:00:00Z
status: passed
score: 4/4 must-haves verified
re_verification:
  previous_status: none
  note: initial verification (no prior VERIFICATION.md)
gaps: []
human_verification:
  - test: "Insert real Develop-module screenshot in lightroom-workflow.md"
    expected: "저자 직접 캡처 예정 placeholder (line 34/36) replaced with an author-captured image before publish"
    why_human: "Screenshot capture is an intentional future author task, not a code gap. Placeholder is correct for now (Adobe UI must not be rehosted)."
---

# Phase 16: 개념·카탈로그·도구 선택 Verification Report

**Phase Goal:** 독자가 왜/무엇을 편집하는지(비파괴·카탈로그)를 이해하고, 자신에게 맞는 편집 도구(LR Classic 구독 또는 무료/영구 대안)를 고른 뒤 편집을 시작할 준비를 한다.
**Verified:** 2026-07-15
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth (Requirement) | Status | Evidence |
|---|---------------------|--------|----------|
| 1 | (EDIT-01) index.md explains why editing improves photos (RAW 관용도·비파괴) framed for daytime/twilight, differentiates from Milky-Way 은하수 후보정, RAW cross-linked (not re-taught) | ✓ VERIFIED | index.md L5-13 RAW 관용도/하이라이트·섀도/WB for 낮·황혼; L15-19 비파괴; L11 cross-links `../02-fundamentals/raw-and-wb.md` ("이미 다뤘습니다"); L21-25 explicit "은하수 후보정(7부)과의 구분" linking `../05-postprocessing/raw-develop.md` |
| 2 | (EDIT-03) lightroom-workflow.md explains catalog↔original relationship with TWO pitfalls; Adobe screenshots are placeholders only | ✓ VERIFIED | L11-19 Import/catalog reference model; L42-48 함정1 파일 이동→"사진 없음(missing photo)"; L50-58 함정2 카탈로그 백업 ≠ 원본 백업; L34/36 screenshot = "저자 직접 캡처 예정" placeholder (no rehosted Adobe image) |
| 3 | (TOOL-01) LR Classic subscription-only, in Photography plan NOT standalone LR CC; 8-app comparison table | ✓ VERIFIED | L5-15 구독 전용·영구판 없음, Photography 플랜 포함 vs 단독 LR CC 미포함 경고; comparison table L41-49 lists all 8 apps (LR Classic, LR CC, Capture One, DxO PhotoLab, ON1, darktable, RawTherapee, Snapseed) with license/price/platform/CR3/why columns |
| 4 | (TOOL-02) free (darktable 최신 4.x, RawTherapee R7 CR3) + perpetual (DxO/ON1/Capture One) alternative paths | ✓ VERIFIED | L53-61 "무료 대안": darktable 최신 4.x 필수 + RawTherapee 5.9 R3/R7/R10; L63-69 "영구 라이선스 대안": DxO PhotoLab(영구 전용)/ON1/Capture One |

**Score:** 4/4 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `src/13-editing/index.md` | EDIT-01 overview | ✓ VERIFIED | 41 lines, substantive, no stubs; wired via internal links (SUMMARY.md stubs replaced) |
| `src/13-editing/lightroom-workflow.md` | EDIT-03 catalog + pitfalls | ✓ VERIFIED | 62 lines, both pitfalls present, screenshot placeholder-only |
| `src/13-editing/software-comparison.md` | TOOL-01/02 tool selection | ✓ VERIFIED | 80 lines, 8-app table, free + perpetual paths |

### Key Link Verification

| From | To | Via | Status |
|------|----|----|--------|
| index.md | 02-fundamentals/raw-and-wb.md | RAW basics cross-link ("이미 다뤘습니다") | ✓ WIRED (target exists) |
| index.md / workflow | 05-postprocessing/raw-develop.md | 은하수 후보정 differentiation link | ✓ WIRED (target exists) |
| index.md / workflow | software-comparison.md, develop-order.md | next-chapter links | ✓ WIRED (targets exist) |
| software-comparison.md | 07-appendix/app-software.md, 08-references/software-references.md | "더 자세한 정보" links | ✓ WIRED (targets exist) |
| software-comparison.md | Adobe KR compare-plans URL | KRW routed to official page | ✓ WIRED (URL traces to STACK.md L35/L139) |

All internal links resolve — confirmed by `mdbook build` with `create-missing = false` (src/book.toml L10) exiting green (code 0). A broken link would have failed the build.

### Requirements Coverage

| Requirement | Status | Notes |
|-------------|--------|-------|
| EDIT-01 | ✓ SATISFIED | Truth 1 |
| EDIT-03 | ✓ SATISFIED | Truth 2 |
| TOOL-01 | ✓ SATISFIED | Truth 3 |
| TOOL-02 | ✓ SATISFIED | Truth 4 |

### Honesty Checks

| Check | Result | Evidence |
|-------|--------|----------|
| NO hard KRW price printed | ✓ PASS | grep found no ₩/원 price. Sole "원" hit = "3-2-1 원칙" (principle word 원칙), not currency. KRW routed to official Adobe KR URL (software-comparison L32-34) |
| USD figures verified in STACK.md | ✓ PASS | $14.99/$19.99 (STACK L23/25), ON1 $99.99 (L60), DxO PL8 $229/$139 (L59) all confirmed; Capture One ~$299 hedged "+6% 인상·재확인 필요" (matches STACK L58/L131); standalone LR CC hedged "미확인" (STACK L57/L129); DxO PL9 hedged "미확인" (STACK L59/L130) |
| No fabricated URLs | ✓ PASS | Only external URL is Adobe KR compare-plans, present in STACK.md L35/L139. Others are internal .md links to existing files |
| No "준비 중" stub markers | ✓ PASS | grep: zero matches across all 3 files; no TODO/FIXME/placeholder either |
| darktable "최신 4.x" phrasing present | ✓ PASS | software-comparison L47 (table) and L57 (body): "최신 4.x 이상" |
| Adobe UI screenshots placeholder-only (not rehosted) | ✓ PASS | Only screenshot ref is "저자 직접 캡처 예정" comment/caption (workflow L34/36); no image files embedded |

### Anti-Patterns Found

None. No TODO/FIXME/placeholder/stub markers; no empty renders; all three files substantive.

### Build Verification

- `/opt/homebrew/bin/mdbook build src` → exit code 0 (green)
- `create-missing = false` (src/book.toml L10) — all cross-links resolve or build fails
- docs/ restored and cleaned (`git restore docs/; git clean -fdq docs/`)
- No stray root `book/` dir created
- Nothing committed

### Human Verification Required

1. **Develop-module screenshot** — placeholder "저자 직접 캡처 예정" (workflow L34/36) is intentionally unfilled; author must capture and insert a real screenshot before publish. This is a known future task, not a gap.

### Gaps Summary

No gaps. All 4 requirements (EDIT-01, EDIT-03, TOOL-01, TOOL-02) satisfied. All honesty constraints upheld: no hard KRW price, all USD figures traceable to STACK.md with unverified ones hedged as 미확인/재확인, no fabricated URLs, no stub markers, darktable 최신 4.x phrasing present, screenshots are placeholders only. Build green with create-missing=false. Phase goal achieved.

---

_Verified: 2026-07-15_
_Verifier: Claude (gsd-verifier)_
