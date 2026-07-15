# Project Research Summary

**Project:** MongolPhoto — 몽골 사진/영상 가이드 mdBook
**Milestone:** v1.4 — 드론 영상(VIDEO) 촬영 + CapCut 편집 파트 추가 (2부)
**Domain:** Korean mdBook CONTENT authoring (writing new drone-video pages)
**Researched:** 2026-07-15
**Confidence:** HIGH (structure, shooting theory, licensing landmines verified) / MEDIUM (CapCut pricing + UI menu locations version-dependent)

## Executive Summary

This milestone adds real VIDEO content to a book whose 2부 is currently photo-only with a dead 12-line video stub. The work is CONTENT authoring — writing new Korean mdBook pages — not software. The research converges on one decisive structural move and a small set of hard-won honesty rules that must survive into the prose. Structurally: rename the part to **`# 2부 · 드론 사진·영상`**, retire the combined `드론 사진·영상 보정` group (and the `video-editing.md` stub + `postprocessing-index.md` landing), promote `drone-postprocessing.md` to a standalone leaf, and add **two new clickable-landing groups** — 드론 영상 촬영 (shooting) and CapCut 영상 편집. CapCut is footage-agnostic, so these pages can be written NOW from the app UI + workflow logic, before the author's real Gobi trip (2026-08-13). Every new `.md` must be created together with its SUMMARY.md entry because `create-missing = false` — a missing file breaks the build.

The recommended approach mirrors patterns already proven elsewhere in the book: describe third-party UI (CapCut, DJI Fly) in prose with `저자 직접 캡처 예정` HTML-comment placeholders (ByteDance/DJI UI is copyrighted — same policy as Adobe UI); do NOT self-host or embed video (GitHub Pages ~1 GB site cap vs 200–400 MB/min of 4K footage makes it non-viable); and present the example edit as a **storyboard table + representative CC0 stills + text**, labeled a "대표 시나리오" until real clips exist post-trip. The content spine is well-defined: a shooting chapter (framerate → 180° shutter → ND-for-video → D-Log M vs Normal → WB lock) plus 7 cinematic movement shots, then an 11-step CapCut workflow, then a ~50-second 6-clip example edit with one speed ramp and two beat-sync cuts.

The two biggest risks are honesty landmines, not technical ones. **(1) Music licensing:** CapCut's in-app "commercial" music is scoped to the TikTok/CapCut ecosystem; uploading it to YouTube triggers Content ID claims, muting, or demonetization. The chapter must state this plainly and default beginners to YouTube Studio Audio Library / royalty-free sources. **(2) D-Log M:** Log is a capture format, not a look — beginners who default to it ship flat/muddy or mis-graded footage. The chapter must recommend **Normal profile by default**, offering D-Log M only as an advanced opt-in with an ordered grading workflow. A large set of DJI-spec and CapCut-pricing/UI facts carry `[verify@write]` / 미확인 flags and must NOT be resolved by guessing — they are re-checked against primary sources at writing time.

## Key Findings

### Recommended Stack

The "stack" here is verified DJI Mini 5 Pro video specs + CapCut tooling facts that go into the prose. DJI hardware facts are HIGH confidence (from the official spec page); CapCut pricing is MEDIUM (official pricing page 404'd — 2nd-hand only → treat as 미확인).

**Core facts to write from:**
- **DJI Mini 5 Pro video (HIGH):** 4K up to **120fps**, FHD up to **240fps**; **D-Log M / HLG = 10-bit 4:2:0 H.265**; max bitrate **130 Mbps**; H.264 = 8-bit standard FHD only; digital zoom 4K 1–3× / FHD 1–4×; D-Log M/HLG max ISO 3200, Normal ISO 12800. ⚠️ Do NOT mix in Mini 4 Pro numbers (4K/100, 150Mbps).
- **DJI Mini 5 Pro 미확인:** **True Vertical video mode** — not confirmed on official spec page (rotatable gimbal makes vertical physically possible per CineD, but the dedicated "true vertical" claim is LOW confidence → re-verify at write). Exact fps limits carry `[verify@write]`.
- **CapCut (HIGH function / MEDIUM price):** Free tier direct-exports **1080p with no watermark** for self-edited (non-template) content; **4K, HDR, and premium templates require Pro**; Pro-labeled templates/effects add a watermark on free export. **Pricing 미확인** (~$9.99/mo Standard, ~$19.99/mo Pro from 2nd-hand sources; **KRW 미확인**). **LUT (.cube/.3dl) import = desktop-only** (Win/Mac) → D-Log M grading path requires desktop.
- **CapCut region caveat:** ByteDance-owned; US removal/restore saga (2025) resolved, available in KR/US as of 2026-07, but availability/ToS/pricing can change → include a "정책 변동 가능" caveat sentence.
- **DaVinci Resolve (free):** the serious-grading alternative for D-Log M; steeper learning curve. Guide should present "easy = CapCut, serious color = DaVinci."

### Expected Features

**Must have (table stakes):**
- Video settings logic — 4K default, framerate intent (24/30 cinematic, 50/60 smooth, 120 slow-mo source), **180° shutter rule** (≈ 1/(2×fps)), **ND-for-video** (why video needs ND when photo doesn't), **D-Log M vs Normal** decision, **WB lock**.
- 7 cinematic movement shots: Reveal · Orbit(POI) · Fly-over/through · Top-down(Nadir) · Dronie · Crane · Side-track — with "fly smoothly" craft (slow feathered sticks, Cine/Tripod mode, one-move-per-shot, 10s+ lead/out).
- Coverage/sequence thinking (establishing + movement + detail per location).
- The **11-step CapCut workflow** spine: Import → Arrange → Cut/Trim → Story order → Speed → Stabilize → Color → Music+beat-sync → Text → Transitions → Export.

**Should have (differentiators):**
- **Detailed example edit (storyboard → final)** — the killer content. ~50s, 6 clips, **1 speed ramp** (shot 1 reveal), **2 beat-sync cuts** (shots 1→2, into shot 4), light slow-mo on shots 3/5, ending ramp on shot 6.
- Platform export preset table (YouTube 16:9 vs Shorts/Reels 9:16).
- License-safe music guidance.
- Gobi-specific shot ideas cross-linked to site chapters.

**Defer / anti-features (exclude):** heavy Hollywood grading, complex keyframe animation, night video, FPV/acrobatic, multicam, re-explaining composition/flight/regs (link-succeed from v1.1 photo part), fabricated CapCut menu screenshots.

### Architecture Approach

CONTENT structure inside `src/`. The decisive layout re-splits the mixed group into two parallel top-level groups (shooting ≠ post is how 1부/3부 already treat siblings), placed shoot → sites → **video-shoot → edit** → photo-post → references.

**File actions (create SUMMARY entry + file together — `create-missing = false`):**
1. `09-drone/video-index.md` — CREATE (shooting landing: why video ≠ photo, read-order, "실제 영상은 트립 후")
2. `09-drone/video-shooting.md` — CREATE (framerate/shutter-angle/D-Log/HDR/ND)
3. `09-drone/video-movements.md` — CREATE (7 cinematic moves)
4. `09-drone/capcut-index.md` — CREATE (editing landing, replaces stub role)
5. `09-drone/capcut-basics.md` — CREATE (install/interface/project)
6. `09-drone/capcut-cut.md` — CREATE (cut/trim/story order)
7. `09-drone/capcut-grade-speed.md` — CREATE (color/stabilize/speed)
8. `09-drone/capcut-export.md` — CREATE (music/text/export)
9. `09-drone/capcut-storyboard.md` — CREATE (example edit storyboard)
10. `09-drone/video-editing.md` — RETIRE stub (delete + drop from SUMMARY, or 1-line redirect)
11. `09-drone/postprocessing-index.md` — RETIRE combined landing
12. `09-drone/drone-postprocessing.md` — PROMOTE to standalone leaf
13. `src/SUMMARY.md` — edit part heading `# 2부 · 드론 사진·영상` + 2부 block
14. `src/introduction.md` (~line 114) — update "영상 보정은 추후 보강" → real chapter

**Presentation policy (confirmed):** NO self-hosted/embedded video; representative example = link-only to tutorials (not iframe, per book convention); storyboard uses **3 Bernard Gagnon CC0 stills** (khongoryn-els / bayanzag / yolyn-am) as shot thumbnails with caption "지상 촬영 예시 — 실제 드론 영상 프레임은 트립 후 교체." Never label Pexels/Pixabay/Coverr clips "CC0." CapCut/DJI UI = `<!-- 이미지: src/images/drone/capcut-<step>.png — 저자 직접 캡처 예정 -->` placeholders.

**Lean fallback:** if the full split feels heavy pre-trip, collapse CapCut into `capcut-workflow.md` + `capcut-storyboard.md` — but still re-split photo-post out of the combined group.

### Critical Pitfalls

1. **CapCut in-app music → YouTube copyright claim (BIGGEST honesty landmine).** "commercial" label is TikTok/CapCut-scoped, not YouTube. → Prominent callout: default to **YouTube Studio Audio Library** (free, safe on YT by definition); name Epidemic Sound/Artlist/Uppbeat as paid options (no pricing without `[verify@write]`); verify via YouTube Studio / Unlisted-first before publishing. Frame: "licensed for TikTok ≠ licensed for YouTube."
2. **No ND in bright Gobi sun → fast shutter → "video-game" stutter (breaks 180° rule).** Unrecoverable at capture. → Cross-ref existing ND page in `dji-mini5pro-settings.md`; add the *reason* (ND holds shutter near 2×fps). Midday wants ~ND32–ND64. Teach order: framerate → shutter ≈ 2×fps → ND strength.
3. **D-Log M ungraded/mis-graded → flat/muddy footage beginners can't rescue.** → **Default recommendation: DON'T use D-Log M.** Normal profile looks good SOOC. Offer Log as advanced opt-in with ordered workflow (Log→Rec.709 conversion FIRST, then exposure/WB, then look) — never a look-LUT on raw Log.
4. **Wrong fps for intent / mixed fps judder.** Slow-mo needs higher-fps-than-timeline; can't add after the fact. → Pre-flight decision in shooting chapter: normal → 24/30, slow-mo → 60/120. Pick one project fps.
5. **CapCut export mistakes (bitrate/fps/resolution) + over-stabilization crop + over-transitions.** → Match export res to footage, never export higher fps than shot, apply stabilization sparingly (drone is gimbal-stabilized), prefer simple cuts.

## Implications for Roadmap

This is a single-milestone content build. Suggested phase structure follows the causal teaching chain (shooting must precede editing, because editing needs footage/material) and the confirmed file layout.

### Phase 1: 2부 재구성 (structure + landing pages)
**Rationale:** `create-missing = false` means files + SUMMARY entries must land together; the part re-split is the foundation everything else attaches to. Do the skeleton first so the build stays green.
**Delivers:** Edited `src/SUMMARY.md` (`# 2부 · 드론 사진·영상`), retired stub + combined landing, promoted `drone-postprocessing.md`, updated `introduction.md`, and the two new landing pages (`video-index.md`, `capcut-index.md`) with read-order prose.
**Addresses:** ToC/navigation table stakes.
**Avoids:** Broken-build pitfall (missing file), buried-video anti-pattern.

### Phase 2: 드론 영상 촬영 chapter
**Rationale:** Capture logic is prerequisite to editing and contains the unrecoverable-at-capture pitfalls (C2/C4/M2) — teach them first, non-skippable.
**Delivers:** `video-shooting.md` (framerate → 180° shutter → ND-for-video → D-Log M vs Normal → WB lock) + `video-movements.md` (7 cinematic shots + smooth-flying craft).
**Uses:** Verified DJI Mini 5 Pro specs (4K120/FHD240, D-Log M 10-bit H.265, 130Mbps) with `[verify@write]` on fps + true-vertical.
**Avoids:** C2 (ND/180°), C4 (fps intent), C3 shoot-side (recommend Normal), M2 (WB lock); cross-references (not re-derives) regs/flight/gobi pages.

### Phase 3: CapCut 편집 workflow chapters
**Rationale:** Editing applies the 11-step spine to the footage; footage-agnostic so writable pre-trip. Contains the music-licensing honesty landmine.
**Delivers:** `capcut-basics.md`, `capcut-cut.md`, `capcut-grade-speed.md`, `capcut-export.md`.
**Uses:** CapCut facts (free 1080p no-watermark / Pro for 4K·HDR·templates; LUT desktop-only; pricing 미확인; DaVinci alternative).
**Avoids:** C1 (music — prominent callout, YT Audio Library default), C3 grade-side (Log ordered workflow), M3/M5/M6 (export/stabilization/watermark). All UI = prose + `저자 직접 캡처 예정` placeholders.

### Phase 4: 예시 편집 스토리보드 (killer content)
**Rationale:** The differentiator — teaches "완성 감각" without real footage. Depends on the workflow spine (it's the applied version) and the CC0 stills already in-repo.
**Delivers:** `capcut-storyboard.md` — ~50s / 6-clip storyboard table (shot # · movement · seconds · CC0 still · edit note), 1 speed ramp + 2 beat-sync cuts mapped to the 11 steps, "대표 시나리오" honesty label.
**Uses:** 3 Bernard Gagnon CC0 stills; storyboard-not-video presentation policy.
**Avoids:** Self-hosted-video pitfall, fake-completeness (fabricated URLs), mislabeling stock as CC0.

### Phase Ordering Rationale
- **Structure first** because the build breaks on any missing file (`create-missing = false`); skeleton + landings must exist before leaves.
- **Shooting before editing** follows the book's causal chain (editing needs material) and front-loads unrecoverable capture pitfalls.
- **Storyboard last** because it depends on the workflow spine and the confirmed CC0 asset inventory.
- Phases 3–4 are writable NOW (footage-agnostic); Phase 2 and all storyboard clips carry "실제 영상은 트립(2026-08-13) 이후 교체" notes.

### Research Flags

Phases likely needing `[verify@write]` re-checks during writing (do NOT resolve by guessing):
- **Phase 2:** DJI Mini 5 Pro official spec re-confirm — exact fps limits, and **true-vertical video mode** (LOW confidence, official page did not confirm the dedicated claim).
- **Phase 3:** CapCut **pricing (USD + KRW 미확인)** from official pricing page (2nd-hand only, 404'd in research); free-vs-Pro exact boundary; LUT/color menu locations (version-dependent); music-license label wording; region availability.

Phases with standard/verified patterns (no external research needed):
- **Phase 1:** repo structure read directly — HIGH confidence, mechanical.
- **Phase 4:** storyboard construction from confirmed in-repo CC0 stills — HIGH; 180° rule, ND-for-video, music-landmine, D-Log advice all cross-verified.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | MEDIUM-HIGH | DJI video specs HIGH (official page); CapCut function HIGH; CapCut pricing MEDIUM (official page 404 → 2nd-hand, 미확인); true-vertical LOW |
| Features | HIGH | Shooting theory, CapCut core functions, 11-step workflow, license landmine cross-verified; CapCut menu names MEDIUM (version drift) |
| Architecture | HIGH | Repo structure + licenses read directly; GitHub Pages / mdBook limits web-verified |
| Pitfalls | HIGH | Music licensing, 180° rule, ND-for-video, D-Log grading all cross-verified across independent sources |

**Overall confidence:** HIGH (for what to write and how to structure it) with bounded MEDIUM/LOW islands quarantined behind explicit `[verify@write]` / 미확인 flags.

### Gaps to Address

- **CapCut pricing (USD + KRW):** official pricing page not obtained → re-verify in-app/on-site at write time; state as "약 …, 확인 필요" if unresolved. Do not assert a KRW figure.
- **DJI true-vertical video mode + exact fps ceilings:** re-confirm on official spec page before writing; if unconfirmed, describe rotatable-gimbal vertical capability without claiming a named "true vertical" mode.
- **CapCut free-vs-Pro boundary + LUT/color menu locations:** version-dependent; author confirms in-app, use `저자 직접 캡처 예정` placeholders.
- **Real Gobi footage:** does not exist until after 2026-08-13 trip → all example clips are placeholders labeled "대표 시나리오 / 트립 후 교체."
- **Region/ToS volatility:** include a "ByteDance 소유, 정책 변동 가능" caveat sentence.

## Sources

### Primary (HIGH confidence)
- DJI Mini 5 Pro official specs — https://www.dji.com/mini-5-pro/specs (video res/fps/codec/bitrate/color)
- Repo files read directly — `src/SUMMARY.md`, `src/09-drone/*`, `src/10-drone-sites/overview.md`, `src/images/drone{,-sites}/`, `src/book.toml`, existing credit captions
- GitHub Pages limits — https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (1 GB site, 100 GB/mo)
- Pexels License / Pixabay Content License — stock licenses are NOT CC0
- Music licensing (C1): Foximusic, Trademarkia, Artyfile — CapCut music YouTube Content ID risk
- 180°/ND-for-video (C2): UAVBC, Markus Hagner, DroneNestle, MavicPilots
- D-Log M grading (C3): MavicPilots, Zeb Gardner, aaapresets, DPReview

### Secondary (MEDIUM confidence)
- CapCut features (speed curve, auto-captions, stabilization, keyframe, optical-flow) — capcutguide, App Store listing
- CineD / Heliguy / DIYPhotography / Oscar Liang — DJI Mini 5 Pro review coverage (cross-check)
- CapCut export/watermark/stabilization — Miracamp, Accio, CapCut Help
- CapCut region saga — Async, Clixie, NodeMaven

### Tertiary (LOW confidence — 미확인 / [verify@write])
- CapCut pricing — bigvu, gamsgo (official pricing page 404; USD approximate, KRW 미확인)
- DJI Mini 5 Pro true-vertical video mode — media reports only, official page unconfirmed
- CapCut LUT/color menu locations & free-vs-Pro exact boundary — version-dependent, author in-app confirm

---
*Research completed: 2026-07-15*
*Ready for roadmap: yes*
