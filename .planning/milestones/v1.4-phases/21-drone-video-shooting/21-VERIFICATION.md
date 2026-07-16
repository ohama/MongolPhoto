---
phase: 21-drone-video-shooting
verified: 2026-07-15T00:00:00Z
status: passed
score: 3/3 must-haves verified
re_verification: null
gaps: []
human_verification:
  - test: "line 59 ISO/bit figures (10-bit 4:2:0 H.265, D-Log M/HLG max ISO 3200, Normal max ISO 12800)"
    expected: "Confirm these are true Mini 5 Pro specs, not carried over from Mini 4 Pro"
    why_human: "Asserted as fact ('검증된 사실만 단정'); not among named must-tag items (fps/true-vertical) nor forbidden Mini-4 numbers, but is a hard DJI figure a verifier cannot independently confirm"
  - test: "Author-deferred captures (DJI Fly screens, real footage frames)"
    expected: "Replaced post-trip (8/13) per [verify@write] notes"
    why_human: "Intentionally deferred by design; not a blocker for the reasoning goal"
---

# Phase 21: 드론 영상 촬영 Verification Report

**Phase Goal:** 독자가 DJI Mini 5 Pro로 편집을 염두에 둔 시네마틱 드론 영상을 왜 그렇게 설정·촬영하는지 이해하며 안전·규제 안에서 찍는다.
**Verified:** 2026-07-15
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
| - | ----- | ------ | -------- |
| 1 | video-shooting.md walks causal chain fps→180° shutter→video ND→D-Log M vs Normal→WB/exposure lock, each with reasoning; Normal=beginner default, D-Log M=advanced opt-in forward-linked to CapCut (VSHOOT-01) | ✓ VERIFIED | §2 fps (24/30 시네마틱·50/60·120 슬로모, l.17-19); §3 shutter ≈1/(2×fps) as convention (l.27-33); §4 ND causal "왜 필수" tied to shutter lock, ~ND32-64 daytime (l.37-50); §5 Normal=기본값 / D-Log M=고급 옵트인 with grading order deferred to capcut-index (l.52-63); §6 AWB off + manual exposure lock (l.65-68) |
| 2 | video-movements.md covers 7 movement shots + smooth-flight craft + editing coverage (VSHOOT-02) | ✓ VERIFIED | 7 shots 리빌·오빗·플라이오버/스루·탑다운·드로니·크레인·사이드트랙 (l.21-68); smooth flight 느린 스틱·Cine/Tripod·샷당 한 움직임·앞뒤 10초 여유 (§1 l.11-15); coverage establishing+움직임+디테일·다양한 길이/앵글 (§3 l.82-85) |
| 3 | video-index.md is a real landing linking both pages; regs/gobi/flight cross-referenced | ✓ VERIFIED | 14-line landing with framing + "이 장에서 다룰 내용" links to both pages + reading order (l.9-12); cross-refs to regulations/flight-and-battery/gobi present in body pages (l.74-76, l.15) |

**Score:** 3/3 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
| -------- | -------- | ------ | ------- |
| `src/09-drone/video-index.md` | landing | ✓ VERIFIED | 14 lines, real prose landing, not a stub; links both pages; wired in SUMMARY.md l.48 |
| `src/09-drone/video-shooting.md` | settings causal chain | ✓ VERIFIED | 82 lines, full 6-section chain + reasoning; wired SUMMARY.md l.49 |
| `src/09-drone/video-movements.md` | 7 shots + craft + coverage | ✓ VERIFIED | 91 lines; wired SUMMARY.md l.50 |

### Key Link Verification

| From | To | Via | Status |
| ---- | -- | --- | ------ |
| SUMMARY.md | 3 video pages | nav entries l.48-50 | ✓ WIRED |
| video-shooting.md | dji-mini5pro-settings.md | ND/aperture defer | ✓ WIRED (build green, create-missing=false) |
| video-shooting.md | capcut-index.md | grading forward-link | ✓ WIRED |
| video-shooting/movements.md | drone-mongolia-regulations.md | regs cross-ref (not re-derived) | ✓ WIRED |
| video-movements.md | flight-and-battery.md, gobi-environment.md | craft/env succession | ✓ WIRED |
| all pages | video-shooting ↔ video-movements | mutual nav | ✓ WIRED |

### Requirements Coverage

| Requirement | Status | Note |
| ----------- | ------ | ---- |
| VSHOOT-01 | ✓ SATISFIED | Truth 1 |
| VSHOOT-02 | ✓ SATISFIED | Truth 2 |

### Honesty Checks

| Check | Result |
| ----- | ------ |
| No Mini 4 numbers (grep 4K/100, 150Mbps, "Mini 4", 100/240fps stray) | ✓ PASS — none found |
| fps ceilings tagged [verify@write] | ✓ PASS — l.11 "예: 4K 최대 120fps, FHD 최대 240fps" inside `[verify@write]`, framed as "예:"/재확인 |
| true-vertical mode 미확인/[verify@write] | ✓ PASS — l.82 "미확인" + verify tag |
| 180° shutter framed as convention | ✓ PASS — l.33 "절대 법칙이 아니라... 관례(convention)" |
| ND-for-video framed, rules deferred not re-derived | ✓ PASS — l.50 defers ND selection rules to settings page; adds only "왜 필수" |
| regs cross-referenced not re-derived | ✓ PASS — links only, no re-statement |
| No fabricated URL | ✓ PASS — only real https://www.dji.com/mini-5-pro/specs (×2, both in verify tags) |
| real-footage post-trip note present | ✓ PASS — all three pages (l.82, l.91, l.14) |
| f/1.8 usage | ✓ PASS — l.41, cites established dji-mini5pro-settings.md |

### Anti-Patterns Found

None blocking. One INFO: line 59 asserts ISO 3200/12800 + 10-bit 4:2:0 H.265 as verified fact — plausible Mini 5 Pro specs, not among forbidden Mini-4 numbers nor named must-tag items; flagged for author spot-check (see human_verification).

### Build Gate

`mdbook build src` (create-missing=false) → exit 0, HTML written, no broken-link warnings. Because create-missing=false, green build confirms all internal cross-ref targets exist. docs/ restored + cleaned; no stray root book/.

### Gaps Summary

No gaps. All three success criteria met, all named honesty fail-conditions pass, build green. Two human_verification items are advisory (author-deferred captures by design + one ISO/bit spec spot-check) and do not block the reasoning-focused phase goal.

---

_Verified: 2026-07-15_
_Verifier: Claude (gsd-verifier)_
