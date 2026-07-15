# Domain Pitfalls — Drone Video Shooting + CapCut Editing (v1.4)

**Domain:** Beginner drone videography (DJI Mini 5 Pro) + mobile/desktop editing in CapCut, Gobi desert daytime, Korean mdBook
**Researched:** 2026-07-15
**Overall confidence:** HIGH (music-licensing, 180° rule, ND-for-video, D-Log grading all cross-verified across multiple independent sources)

> **Scope note for roadmap:** This milestone adds a VIDEO shooting chapter + a CapCut editing chapter to the existing drone part. Regulations (daytime-only, VLOS, ~120m AGL, airport 4km, 250g/national-park items 미확인) are **already established** in `src/08-references/drone-mongolia-regulations.md`. Video pitfalls that touch regs must **cross-reference that page, not re-derive**. The existing `src/09-drone/dji-mini5pro-settings.md` already covers ND-filter *selection* for photos and explicitly leaves the 180° shutter rule as a "video 참고" placeholder — the video chapter is where that placeholder gets filled.

> **Version-dependent flag (check-at-write-time):** DJI Mini 5 Pro video specs below are drawn from launch/review coverage, **not** a DJI official spec page hit during this research. CapCut's UI, free-tier limits, Pro-gated features, and music-licensing terms change frequently. Every item tagged `[verify@write]` must be re-checked against the primary source at writing time.

---

## Critical Pitfalls

Mistakes that make footage unusable, cause takedowns/demonetization, or force a re-shoot (impossible once home from the Gobi).

### C1: In-app CapCut music → YouTube copyright claim / mute / demonetization  ⭐ BIGGEST HONESTY LANDMINE
**Owner chapter:** CapCut editing
**What goes wrong:** The beginner drops a track from CapCut's built-in music library onto a Gobi edit, exports, and uploads to YouTube. YouTube's Content ID matches the track; the video gets a copyright claim, ad revenue is redirected to the rights holder, the audio is muted, or the video is blocked in some regions.
**Why it happens:** CapCut's "commercial use" / "사용 가능" label is **platform-scoped**. In practice that license typically covers content published *inside the TikTok + CapCut ecosystem* — it does **not** automatically extend to YouTube, Vimeo, client work, or podcasts. Many library tracks are simultaneously registered by their original rights holders in YouTube's Content ID system, so the same track that is "fine" on TikTok triggers a claim on YouTube. `[verify@write]` — exact label wording and terms shift.
**Consequences:** Claim/mute/block, lost monetization, and for the reader a bad "I followed the tutorial and got a strike" experience — the single most damaging honesty failure this milestone could ship.
**Prevention (concrete safe practice — make this prominent in the chapter):**
  1. **Do not assume CapCut's in-app library is safe for YouTube.** State this plainly.
  2. **Source music that explicitly licenses YouTube/monetization**, e.g.:
     - **YouTube Studio Audio Library** (free, safe *on YouTube* by definition) — the zero-cost default recommendation for beginners.
     - Subscription libraries that explicitly cover YouTube monetization (Epidemic Sound, Artlist, Uppbeat, etc.) — name as options, do not endorse pricing/terms without `[verify@write]`.
  3. **Verify before publishing:** in YouTube Studio, use the copyright/Content-ID check (or upload as Unlisted first) to confirm no claim before going public.
  4. Frame the rule as: *"licensed for TikTok ≠ licensed for YouTube."*
**Detection / warning signs:** A "Copyright claim" banner in YouTube Studio after upload; audio auto-muted on the published video; a "song may be subject to copyright" note in CapCut itself.
**Confidence:** HIGH — consistent across Foximusic, Trademarkia, and multiple creator sources.

### C2: No ND filter in bright Gobi sun → shutter too fast → "video-game" stutter (violates 180° rule)
**Owner chapter:** Video shooting (setup/exposure)
**What goes wrong:** In harsh midday Gobi light, auto-exposure drives shutter speed very high (e.g. 1/1000–1/4000s). Each frame is frozen razor-sharp with no motion blur; on playback the motion looks stuttery, staccato, "like a video game" — and it cannot be fixed in post.
**Why it happens:** The **180° shutter rule** — for natural cinematic motion blur, shutter speed should be ≈ **1 / (2 × frame rate)** (24fps → 1/48–1/50s, 30fps → 1/60s, 60fps → 1/120s). To hold that slow shutter in bright light without overexposing, you must cut incoming light with an **ND filter**. Without ND, the only way to avoid a blown-out image is a fast shutter, which breaks the rule.
**Consequences:** Jittery, un-cinematic footage; over-sharp/harsh look; unrecoverable in editing (motion blur cannot be added back convincingly).
**Prevention:**
  - Cross-reference the ND-selection rule **already in** `dji-mini5pro-settings.md` (약한 ND at twilight, 강한 ND at midday; ND8/32/128 set). For video, add the *reason*: ND exists to keep shutter near the 180° target. Midday Gobi harsh sun commonly wants ~ND32 (5 stops) or ND64 (6 stops); 3–6 stops is the working range.
  - Teach: set frame rate first → set shutter to ~2× that → choose ND strength that lets you hit it while correctly exposed.
  - Lock shutter manually rather than trusting auto.
**Detection / warning signs:** Shutter reading in DJI Fly far above 2× frame rate; on-screen preview looks unnaturally crisp on fast pans; playback "steps" instead of glides.
**Confidence:** HIGH — 180° rule and ND-for-video cross-verified (uavbc, markus-hagner, dronenestle, mavicpilots).

### C3: D-Log M shot then left ungraded or wrongly graded → flat/muddy footage a beginner can't rescue
**Owner chapter:** Both (shoot decision in Video; grading in CapCut)
**What goes wrong:** Beginner enables D-Log M because it "looks pro," then either (a) publishes the flat, grey, desaturated footage un-graded, or (b) slaps a random "cinematic" LUT on top and gets crushed blacks, broken skies, and weird saturation.
**Why it happens:** Log is a **capture** format, not a **look** — it deliberately looks flat/low-contrast to preserve dynamic range for grading. It requires a deliberate post workflow the beginner doesn't yet have. Two compounding errors: **underexposed** D-Log M amplifies shadow noise when lifted; stacking a "look LUT" onto unconverted Log fights the gamma and clips shadows.
**Consequences:** Muddy, noisy, or crushed footage; the reader concludes "Log is broken" when the real issue is workflow.
**Prevention:**
  - **Default recommendation for beginners: DON'T use D-Log M.** Use a standard/normal color profile — Gobi daytime is not so high-contrast that a normal profile risks clipping, and normal footage looks good straight out of camera (SOOC) with minimal CapCut work.
  - Offer D-Log M only as an **advanced opt-in**, and if used: (1) expose slightly bright / protect shadows (don't underexpose), (2) grade in the correct order — **technical Log→Rec.709 conversion first, then exposure/WB, then creative look** — never a look-LUT on raw Log, (3) treat the DJI official LUT with caution (known to crush shadows on some footage).
  - Note D-Log M practical limits: 10-bit 4:2:0 H.265, max ISO 3200. `[verify@write]` against DJI official.
**Consequences of getting the chapter's recommendation wrong:** sending beginners into Log by default would generate exactly the "I can't fix my footage" failure.
**Confidence:** HIGH — mavicpilots, zebgardner, aaapresets, DPReview all align.

### C4: Wrong frame rate for intent → no slow-mo headroom, or mixed fps judder
**Owner chapter:** Video shooting (pre-flight decision)
**What goes wrong:** Reader shoots everything at 24/30fps, then in CapCut tries to make a "cinematic slow" reveal and it stutters — there's no headroom to slow it down. Or they mix 24, 30, 60, 120fps clips carelessly on one timeline and get inconsistent motion cadence and judder.
**Why it happens:** Slow motion requires **shooting at a higher fps than the project timeline** (e.g. shoot 60/120fps, conform to a 24/30fps timeline). You cannot add smooth slow-mo after the fact from 24fps. Mixed base rates also fight the timeline's frame rate. Mini 5 Pro supports 4K up to 120fps and 1080p up to 240fps `[verify@write]`, so the headroom exists if planned.
**Consequences:** Stuttery fake slow-mo; inconsistent motion across a cut; re-shoot needed (impossible from home).
**Prevention:**
  - Decide intent **before the flight**: normal-speed cinematic → 24/30fps; want slow-mo option → shoot 60fps (or 120fps for stronger slow-mo).
  - Pick **one project frame rate** for the edit and keep source clips consistent with it.
  - This is a pre-flight planning item — put it in the shooting chapter, not editing.
**Confidence:** HIGH (fps behavior is general video theory; Mini 5 Pro numbers `[verify@write]`).

---

## Moderate Pitfalls

Cause amateur-looking results or rework, but recoverable.

### M1: Jerky / too-fast drone movements → unusable clips
**Owner chapter:** Video shooting
**What goes wrong:** Abrupt stick inputs cause snappy starts/stops and jitter; movement looks nervous, not cinematic.
**Prevention:** Cross-reference the existing **비행 기초** page (`flight-and-battery.md`) which already teaches "낮고 천천히 / 부드럽게" and recommends **Cine/Tripod mode** (lowered sensitivity). For video add: reduce gimbal/stick **EXP** sensitivity, feather inputs, start-and-hold before/after each move, and let clips run a few seconds of clean lead-in/out for editing. Warning sign: preview shows sudden jolts at move start/stop.
**Confidence:** HIGH (general craft; book already establishes the smooth-input principle for photos).

### M2: Not locking WB / exposure → flicker and color shift across a clip
**Owner chapter:** Video shooting
**What goes wrong:** Auto WB and auto exposure hunt mid-clip; the sky/sand brightness "pumps" and color temperature drifts within a single continuous shot.
**Prevention:** **Lock white balance to a fixed value** (don't leave AWB) and use manual/locked exposure so a pan across bright sand → dark cliff doesn't cause the whole frame to re-expose. Warning sign: brightness or color visibly "breathing" during playback of one shot. (Ties to C2 — manual shutter is part of this.)
**Confidence:** HIGH.

### M3: CapCut export settings wrong → low bitrate softness, fps judder, resolution mismatch
**Owner chapter:** CapCut editing (export)
**What goes wrong:** Exporting at a low bitrate (mushy 4K), or exporting at a **higher fps than the source** (CapCut interpolates artificial frames → stutter), or a resolution that mismatches the footage/target.
**Prevention:**
  - Match export resolution to footage (1080p or 4K); don't upscale.
  - **Never export a higher fps than you shot** — export at the source/timeline fps to avoid interpolation judder.
  - Bitrate: ~8–12 Mbps for 1080p social, ~35–60 Mbps for 4K `[verify@write]` (CapCut defaults and ranges change).
**Detection:** Blocky motion/gradients (bitrate); periodic stutter (fps mismatch).
**Confidence:** HIGH (miracamp, accio, CapCut help).

### M4: Over-transitions / over-effects / too-fast cuts → amateur look
**Owner chapter:** CapCut editing
**What goes wrong:** Flashy transitions on every cut, trendy effects/zoom-punches everywhere, and rapid-fire cuts that don't let the Gobi landscape breathe.
**Prevention:** Prefer simple cuts and occasional cross-dissolves; let wide landscape shots hold longer; reserve effects for intent, not decoration. Warning sign: a transition on every single cut. (Craft guidance, low technical risk.)
**Confidence:** HIGH (universal editing convention).

### M5: Over-stabilization in CapCut → heavy crop / warping
**Owner chapter:** CapCut editing
**What goes wrong:** Cranking CapCut stabilization to fix shaky footage crops in aggressively (lost framing/resolution) and can introduce warping/jello, especially on already-gimbal-stabilized drone clips that don't need it.
**Prevention:** Drone footage is usually already gimbal-stabilized — apply stabilization sparingly or not at all; if used, keep it low to limit crop. Fix shake at the source (smooth flying, M1) rather than in post. Warning sign: edges bending/wobbling, visible re-framing/zoom-in after enabling stabilization.
**Confidence:** HIGH.

### M6: Free-tier watermark & Pro-only surprises in CapCut
**Owner chapter:** CapCut editing
**What goes wrong:** Reader uses a template or a specific feature, then discovers a watermark on export or that the feature (some 4K/HEVC export options, certain effects/templates, advanced color tools) is Pro-gated.
**Prevention:** Flag up front which parts of the workflow are free vs Pro. Known pattern: templates and certain premium effects/export options can carry watermarks or be Pro-gated; Pro removes watermark and unlocks unrestricted 4K/HEVC/advanced color. **Exact free-vs-Pro boundary is `[verify@write]`** — it changes often; do not assert specific gated features without re-checking.
**Confidence:** MEDIUM — direction confirmed (watermark/Pro exist), exact 2026 feature list must be verified at write time; template-gating specifics were not confirmable in this research.

---

## Minor Pitfalls

Annoyances, easily fixed.

### N1: Battery / wind / heat cutting clips short; RTH triggering mid-clip
**Owner chapter:** Video shooting (but mostly cross-reference)
**What goes wrong:** A long cinematic move gets truncated when RTH fires at the low-battery threshold, or afternoon Gobi wind/heat shortens usable flight.
**Prevention:** **Cross-reference existing pages — do not re-derive.** `flight-and-battery.md` already covers RTH thresholds (20–30%), RTH altitude above canyon walls/dune crests, and battery cold/heat behavior; `gobi-environment.md` covers wind rising through the day and morning-flight priority. Video-specific add-on only: plan long moves early in the battery (before the RTH threshold looms) and early in the day (calmer wind), and keep individual clips short enough to finish before RTH.
**Confidence:** HIGH (already established in book).

### N2: Distance / VLOS / daytime regulation while chasing a shot
**Owner chapter:** Video shooting (cross-reference only)
**What goes wrong:** Reader pushes the drone far for a dramatic reveal and breaks VLOS, or lingers past sunset for "golden light" video.
**Prevention:** **Cross-reference `drone-mongolia-regulations.md`** — daytime-only (sunrise–sunset), VLOS mandatory, ~120m AGL, 4km from airports (CAAM Part 101, 확인됨). Do **not** restate as new rules; link. Video-specific note only: cinematic "fly away" reveals are the shot type most likely to tempt a VLOS/distance breach.
**Confidence:** HIGH (regs already established; treat as cross-reference).

### N3: No consistent color/look across clips (even without Log)
**Owner chapter:** CapCut editing
**What goes wrong:** Clips shot at different times of day don't match; edit looks patchy.
**Prevention:** Do a light, consistent grade pass (exposure/WB match) across clips; keep looks subtle. Minor because it's cosmetic and fixable.
**Confidence:** MEDIUM.

---

## Shooting-time vs Editing-time Placement Table

| # | Pitfall | Owner | Placement rationale |
|---|---------|-------|---------------------|
| C1 | In-app music → YouTube copyright claim | **CapCut editing** | Music is added in the edit; must be a prominent callout box in the editing chapter |
| C2 | No ND → fast shutter → stutter (180° rule) | **Video shooting** | Fixed at capture; unrecoverable in post; extends existing ND page |
| C3 | D-Log M ungraded/mis-graded | **Both** | Shoot-vs-not decision in shooting chapter; grading workflow in CapCut chapter |
| C4 | Wrong fps for intent / mixed fps | **Video shooting** | Frame rate is a pre-flight decision; slow-mo headroom can't be added later |
| M1 | Jerky / too-fast movement | **Video shooting** | Capture craft; cross-ref existing 비행 기초 |
| M2 | Unlocked WB/exposure → flicker | **Video shooting** | Set at capture; can't undo drift in post |
| M3 | Export bitrate/fps/resolution wrong | **CapCut editing** | Pure export-stage setting |
| M4 | Over-transitions / fast cuts | **CapCut editing** | Editorial craft |
| M5 | Over-stabilization crop/warp | **CapCut editing** | Post-processing effect |
| M6 | Watermark / Pro-only surprise | **CapCut editing** | Tool/UX reality of the editor |
| N1 | Battery/wind/heat/RTH mid-clip | **Video shooting (cross-ref)** | Reuse flight-and-battery + gobi-environment |
| N2 | Distance/VLOS/daytime regs | **Video shooting (cross-ref)** | Reuse drone-mongolia-regulations; do not re-derive |
| N3 | Inconsistent look across clips | **CapCut editing** | Grading-stage cosmetic match |

---

## Phase-Specific Warnings (for roadmap)

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|----------------|------------|
| Video shooting chapter | C2/C4/M2 are capture-only and unrecoverable | Front-load ND+180°, fps intent, and WB/exposure lock; make them non-skippable |
| CapCut editing chapter | C1 music licensing is the honesty landmine | Dedicated prominent callout + concrete safe-source list (YouTube Audio Library default) |
| CapCut editing chapter | C3 D-Log grading complexity | Recommend NO D-Log for beginners by default; Log grading as advanced opt-in with ordered workflow |
| Both chapters | Version drift | Every `[verify@write]` item (DJI specs, CapCut UI/limits/music terms) re-checked at writing time |
| Both chapters | Duplication risk with existing pages | N1/N2/M1 must cross-reference existing reg/flight/gobi pages, not restate |

---

## Sources

**Music licensing (C1) — HIGH confidence, cross-verified:**
- [Foximusic — Music Licensing for CapCut: Avoid YouTube Copyright Claims](https://www.foximusic.com/royalty-free-music-licensing-for-capcut-videos/)
- [Trademarkia — Is CapCut Music Copyrighted? Creator Guide](https://www.trademarkia.com/news/business/capcut-music-copyright-guide)
- [Artyfile — CapCut Music Commercial Use Guide](https://artyfile.com/blog/capcut-music-commercial-use-guide)

**180° rule / ND for video (C2) — HIGH:**
- [UAVBC — The Ultimate Drone Guide to Shutter Speed](https://uavbc.com/shutter-speed/)
- [Markus Hagner — ND Filters for Drones Explained (May 2026)](https://markus-hagner-photography.com/nd-filters-for-drones-explained-and-when-you-actually-need-them/)
- [DroneNestle — Cinematic Drone Filming Tutorial 2026](https://dronenestle.com/drone-filming-for-cinematic-effect-tutorial/)
- [MavicPilots — 180 rule: fact or fantasy?](https://mavicpilots.com/threads/180-rule-fact-or-fantasy-i-put-it-to-the-test.121427/)

**D-Log M grading (C3) — HIGH:**
- [MavicPilots — Grading D-Log M in Resolve](https://mavicpilots.com/threads/grading-d-log-m-in-resolve.141460/)
- [Zeb Gardner — DJI D-Log-M Color Grading](https://www.zebgardner.com/photo-and-video-editing/dji-d-log-m-colorgrading)
- [aaapresets — Ultimate Guide to Grading DJI D-Log / D-Log M 2026](https://aaapresets.com/blogs/camera-specific-color-grading-series/unlock-cinematic-magic-the-ultimate-guide-to-grading-dji-d-log-d-log-m-footage-for-aerial-brilliance-in-2026)
- [DPReview — How to shoot Log video using DJI's D-Log](https://www.dpreview.com/articles/4978813437/how-to-shoot-log-video-using-dji-s-d-log-color-profile/)

**CapCut export / watermark / stabilization (M3/M5/M6) — HIGH/MEDIUM:**
- [Miracamp — CapCut Stabilization & Best Export/Render Settings](https://www.miracamp.com/learn/capcut/how-to-render)
- [Accio — Ultimate Guide to Exporting Videos from CapCut (2026)](https://www.accio.com/blog/the-ultimate-guide-to-exporting-videos-from-capcut)
- [CapCut Help — Export 2K/4K Videos](https://www.capcut.com/help/export-videos-in-capcut)

**DJI Mini 5 Pro video specs (C4/C3 numbers) — `[verify@write]`, review sources not DJI official:**
- [CineD — DJI Mini 5 Pro Released: 4K up to 120fps, 1-inch 50MP](https://www.cined.com/dji-mini-5-pro-released-250g-drone-with-1-inch-type-50mp-sensor-4k-up-to-120fps-and-rotatable-gimbal/)
- [Oscar Liang — DJI Mini 5 Pro](https://oscarliang.com/dji-mini-5-pro/)
- [DIYPhotography — DJI Mini 5 Pro Specs Guide](https://www.diyphotography.net/dji-mini-5-pro-specs-guide/)

**Cross-referenced existing book pages (do not re-derive):**
- `src/08-references/drone-mongolia-regulations.md` (CAAM Part 101: daytime/VLOS/120m/4km; 250g & national-park 미확인)
- `src/09-drone/dji-mini5pro-settings.md` (ND selection rule; 180° placeholder)
- `src/09-drone/flight-and-battery.md` (RTH thresholds/altitude, battery)
- `src/09-drone/gobi-environment.md` (wind/heat/sand)
