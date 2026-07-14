# Feature Landscape — Lightroom Classic Travel Photo Editing (사진 보정)

**Domain:** Beginner Lightroom Classic Develop-module tutorial for daytime/twilight TRAVEL photos (Mongolian Gobi)
**Milestone:** v1.3 — new "사진 보정" part of a Korean mdBook photography guide
**Researched:** 2026-07-14
**Confidence:** HIGH (workflow order, slider behavior, recipes) / HIGH (feature names — verified against Adobe helpx, June 2025 / v14.x)

> Scope note: This part is DISTINCT from the existing darktable Milky-Way stacking part. It covers single-frame (plus optional merge) RAW travel edits in Lightroom Classic. Astro/stacking is explicitly out of scope (see Anti-Features).

---

## Feature-name verification (against current Adobe docs)

Feature names change; these are confirmed current as of Lightroom Classic 2025 (v14.x, June 2025 release):

| Concept | Current official Adobe name | Notes |
|---------|----------------------------|-------|
| AI noise removal | **Denoise** (part of the **Enhance** feature set: Denoise, Raw Details, Super Resolution) | As of June 2025 (v14.4) accessible directly in the **Detail** panel, not only via Photo > Enhance. RAW/CR3 only. |
| Selective editing | **Masking** panel (post-2021 overhaul; replaced old "Adjustment Brush / Graduated / Radial Filter" panels) | |
| AI mask types | **Select Subject, Select Sky, Select Background, Select Objects, Select People, Landscape** (Sky, Water, Vegetation, Mountains, Natural Ground, Artificial Ground, Architecture, Snow) | |
| Manual mask types | **Brush, Linear Gradient, Radial Gradient, Range Mask** (Color / Luminance / Depth) | "Linear Gradient" = the old graduated filter; "Radial Gradient" = old radial filter. |
| Merge | **Photo > Photo Merge > Panorama / HDR / HDR Panorama** (Panorama shortcut Ctrl/Cmd+M) | |
| Geometry | **Transform** panel + **Upright** (Auto/Level/Vertical/Full/Guided) | |
| Newer creative tools | **Point Color, Adaptive Presets/Profiles, Generative Remove, Lens Blur** | Advanced — mostly anti-features for a beginner travel chapter (see below). |

Sources listed at bottom. Panel-order "best practice" is a **widely-taught convention, not an Adobe-mandated rule** — flagged as opinion where relevant.

---

## THE PANEL ORDER (chapter spine)

Convention: work **top-to-bottom** in the Develop module, doing global/corrective work before creative/local work, because each step changes the baseline the next step reacts to. This is a widely-taught convention (Adobe's own "top-down" guidance + Kloskowski/Kost/mastering-lightroom all teach the same skeleton); exact sequencing of a few middle steps is stylistic.

Ordered list — each line = one chapter section with its one-line rationale:

1. **수입 / 카탈로그 기본 (Import & Catalog)** — Import as DNG or "Copy"; understand that Lightroom is *non-destructive* (edits are instructions in the catalog, CR3 file untouched). Rationale: beginners must trust that nothing is destroyed before they dare to push sliders.
2. **프로파일 (Profile — Basic panel top)** — Pick camera/RAW profile (Adobe Color default; Camera Standard/Landscape for Canon look). Rationale: the profile is the *foundation tone/color curve* everything else sits on; changing it later re-bases every edit.
3. **렌즈 보정 (Lens Corrections)** — Enable "Remove Chromatic Aberration" + "Enable Profile Corrections" (auto-loads Canon RF 50mm / Samyang 12mm profile → fixes distortion + vignette). Rationale: correct optical geometry/vignette *before* cropping or masking so the frame you crop is already the true frame; ultrawide 12mm distortion is severe if left uncorrected.
4. **변환 / 지오메트리 (Transform / Upright)** — Level horizon, fix keystoning (Auto or Level Upright). Rationale: straightens converging verticals from the wide lens before you commit a crop.
5. **크롭 / 수평 (Crop & Straighten)** — Composition, aspect ratio, straighten horizon. Rationale: settle the frame before tonal work so histogram/masks reflect the final image; big Gobi horizons must be dead level.
6. **화이트밸런스 (White Balance — Temp/Tint)** — Set neutral or intentional warmth. Rationale: WB shifts every color; do it first in the Basic panel so exposure/HSL judgments are made on correct color.
7. **노출 / 대비 (Exposure & Contrast)** — Set overall brightness, then global contrast. Rationale: get the midtone anchor right before sculpting the ends of the tonal range.
8. **톤: 하이라이트 · 섀도우 · 화이트 · 블랙 (Highlights / Shadows / Whites / Blacks)** — Recover blown sky (Highlights−), open shadow detail (Shadows+), then set white/black points (Whites/Blacks) using Alt/Option clipping preview. Rationale: recover the extremes and define the true white/black points after exposure sets the middle.
9. **텍스처 / 명료도 / 디헤이즈 (Texture / Clarity / Dehaze)** — Add midtone crunch. Texture (fine detail) > Clarity (midtone contrast, heavy-handed) > Dehaze (cuts atmospheric haze, common in dusty Gobi). Rationale: these are "presence" boosters that build on a correct tonal base; easy to overdo (halos), so late and light.
10. **생동감 / 채도 (Vibrance / Saturation)** — Vibrance (protects skin, boosts muted colors) before Saturation (uniform, blunt). Rationale: last Basic-panel step; global color intensity is judged after tone is final.
11. **톤 곡선 (Tone Curve)** — Fine contrast / faded-film look (lift blacks) beyond the Basic sliders. Rationale: refinement layer over Basic; optional for beginners.
12. **HSL / 컬러 (HSL / Color)** — Per-color Hue/Saturation/Luminance (e.g. deepen desert sky blue via Luminance−, tame orange sand). Rationale: targeted color correction after global color is set.
13. **색보정 (Color Grading)** — Split-tone shadows/midtones/highlights for mood (warm highlights + cool shadows = classic golden-hour grade). Rationale: creative mood layer, applied after literal colors are correct.
14. **디테일: 샤픈 + 노이즈 리덕션 (Detail: Sharpening + Noise Reduction / Denoise)** — Capture sharpening (Amount/Radius/Detail/Masking) + noise. For high-ISO twilight/dust, use **Denoise (AI)** which outputs a new DNG. Rationale: sharpening is resolution/output dependent and amplifies noise, so it comes near the end after tone is locked; AI Denoise ideally *early-ish* if used (it creates a new file), but conceptually taught here.
15. **마스킹 (Masking — local adjustments)** — Select Sky (darken/saturate), Linear Gradient (graduate down a bright sky), Radial Gradient (spotlight a subject), Brush (dodge/burn), Select Subject/People (skin). Rationale: local work comes after global because masks respond to the already-corrected image; this is where a flat travel shot gets dimensional.
16. **프리셋 (Presets)** — Save your recipe; apply on import for batch consistency across a trip. Rationale: taught last because a preset is just a *saved snapshot of steps 2–14*; you can't make a good one until you understand the steps.
17. **내보내기 (Export)** — JPEG sRGB, long-edge px + quality for web; full-res + sharpen-for-print + Adobe RGB/ProPhoto for print. Rationale: final output settings differ per destination; the whole point of the workflow.

> Teaching tip for the book: present this as a single labeled diagram ("보정 순서 한눈에 보기") reused at each section header, so beginners always know where they are. Steps 1–10 + 17 = every-photo core; 11–16 = as-needed.

---

## Table Stakes

Steps every beginner edit needs; a tutorial missing these feels incomplete.

| Feature / Step | Why Expected | Complexity | Notes |
|----------------|--------------|------------|-------|
| Non-destructive / catalog concept | Beginners fear "ruining" the RAW | Low | One paragraph + reassurance; CR3 never altered |
| Profile selection | Foundation of all color/tone | Low | Adobe Color vs Camera Standard/Landscape |
| Lens Corrections (profile + CA) | Canon RF + Samyang 12mm need it badly | Low | One-checkbox win; huge on ultrawide |
| Transform / horizon level | Gobi horizons must be straight | Low–Med | Auto Upright usually enough |
| Crop & straighten | Composition control | Low | Rule-of-thirds overlay |
| White Balance (Temp/Tint) | Fixes every color at once | Low | Eyedropper on neutral; or taste |
| Exposure + Contrast | Core brightness | Low | Read the histogram |
| Highlights/Shadows/Whites/Blacks | Recover harsh-light detail | Med | Alt-drag clipping preview is the key teach |
| Texture/Clarity/Dehaze | Punch + haze removal | Med | High over-use risk — teach restraint |
| Vibrance vs Saturation | Color pop without skin damage | Low | Explain *why Vibrance first* |
| Detail: Sharpening + Noise | Output quality | Med | Masking slider (Alt-drag) is the pro trick |
| Denoise (AI) | Twilight/high-ISO travel frames | Med | Creates new DNG; RAW-only |
| Export (web + print) | The deliverable | Low–Med | sRGB/JPEG for web is the 90% case |

## Differentiators (advanced but high-value for travel)

| Feature / Step | Value Proposition | Complexity | Notes |
|----------------|-------------------|------------|-------|
| Masking → Select Sky | One-click dramatic desert skies | Med | Highest wow-to-effort ratio for travel |
| Masking → Linear/Radial Gradient | Graduate bright skies, spotlight subjects | Med | Mimics an ND grad filter in post |
| Masking → Brush (dodge/burn) | Local sculpting of dunes/light | Med–High | Local exposure control |
| Masking → Select Subject/People + skin | Correct nomad/camel portraits | Med | Amount/Range/component parts |
| **Photo Merge > Panorama** | Stitch wide Gobi vistas beyond 12mm FOV | Med | Ctrl/Cmd+M; outputs editable DNG |
| **Photo Merge > HDR** | Extreme dynamic range (bright sky + dark land) | Med | Ties directly to in-camera bracketing |
| **HDR Panorama** (one step) | Both at once for epic landscapes | High | Advanced; mention, don't dwell |
| Tone Curve / Color Grading | Signature "look" / mood | Med | Optional creative layer |
| Presets (save + apply on import) | Batch a whole trip consistently | Low–Med | The payoff of learning the steps |

## Travel-Specific Recipes (Section 3 gold — sliders + direction + why)

> Directions are relative "push this way" guidance, not fixed values — every frame differs. Teach the *reasoning*, show before/after.

### (a) Harsh bright desert MIDDAY (blown highlights, hard shadows, high contrast)
- Highlights **−−** (recover sky/sand), Shadows **+** (open harsh shadow), Whites **−** slightly, Blacks hold. *Why:* compress the huge midday dynamic range into printable tones.
- Contrast **−** slightly (already contrasty scene), or leave and shape with curve.
- Dehaze **+ small** (cuts midday haze/glare), Clarity **+ small**. *Why:* midday flatness after highlight recovery.
- Vibrance **+**, Saturation neutral. WB often pull Temp **−** (midday light is neutral-to-warm; avoid orange sand).
- Optional: Linear Gradient from top, Exposure **−**, to hold the sky. *Why:* sky is always brightest at noon.

### (b) GOLDEN-HOUR / TWILIGHT warm scene
- WB: **keep it warm** — do NOT neutralize; Temp modest, protect the gold. *Why:* the warmth *is* the subject.
- Exposure to taste (often expose for the sky, lift land with mask). Shadows **+** to keep foreground from going black.
- Highlights **−** to hold the sun glow; Whites gentle.
- Color Grading: warm highlights + slightly cool shadows for depth. HSL: boost orange/red Luminance/Saturation modestly.
- Dehaze **+ tiny** only; twilight noise means watch Shadows lift → consider Denoise. *Why:* lifting twilight shadows reveals noise.

### (c) BACKLIT / high-contrast (sun behind subject, silhouette risk)
- Shadows **++** and/or Blacks **+** to rescue the dark subject; Highlights **−−** to tame the bright rim/sky.
- Or (better) **Mask Select Subject → Exposure +** locally instead of globally lifting shadows. *Why:* local lift avoids muddying the whole frame.
- Watch for **haloing** if Clarity/Dehaze pushed — keep low. Expect flare; Dehaze can reduce veiling flare **+ small**.
- Decide intent: expose for silhouette (crush blacks, keep colorful sky) OR reveal subject (lift shadows). Teach it as a *choice*.

### (d) Photo with PEOPLE (nomads/portraits — skin tones)
- WB slightly warm for pleasing skin; avoid green/magenta cast (Tint check). *Why:* skin is the reference the eye judges.
- **Vibrance not Saturation** (Vibrance protects skin). *Why:* Saturation makes skin orange/unnatural.
- HSL: Orange Luminance **+ small** to brighten/smooth skin; Saturation Orange **−** if too ruddy.
- Mask **Select People** → reduce Texture/Clarity slightly on skin, +Exposure to lift faces (backlit nomads). *Why:* Clarity emphasizes skin texture unflatteringly.
- Keep Clarity **low/negative** on skin; positive Clarity ages/hardens faces.

### (e) Recovering a slightly-BLOWN SKY
- First check the histogram / Alt-drag Highlights + Whites to see clipping. Highlights **−−**, Whites **−**. *Why:* RAW holds ~1 stop of recoverable highlight; JPEG does not — teach shoot-RAW payoff here.
- If detail truly clipped (pure white, no data): recovery impossible → **Mask Select Sky → lower Exposure/Highlights**, add blue via Temp/Tint or Saturation to *simulate* tone, or accept it. *Why:* honesty — blown = gone; masking can only tone what little remains.
- Prevention callback: bracket + HDR merge, or expose-to-the-right, or a grad ND. *Why:* connects editing back to shooting.

---

## Merge features ↔ shooting connection (Section 4)

| Feature | Menu path | Shooting requirement | Travel use |
|---------|-----------|----------------------|-----------|
| **Panorama** | Photo > Photo Merge > Panorama (Ctrl/Cmd+M) | Overlap frames ~30%, consistent exposure, level pan | Gobi vistas wider than Samyang 12mm; outputs editable DNG (edit *after* merge) |
| **HDR** | Photo > Photo Merge > HDR | Exposure-bracketed set (e.g. −2/0/+2), tripod ideal | Bright sky + dark land in one frame; each frame needs exposure metadata |
| **HDR Panorama** | Photo > Photo Merge > HDR Panorama | Bracketed sets, equal count + equal offsets per position | Epic landscapes; advanced |

Key teaching link: **bracketing in-camera (AEB on the R7) is what makes HDR merge possible.** Merge outputs a DNG you then run through the normal panel order (steps 2–17). Bracket 2 stops apart, RAW, adjust shutter only — ties the shooting part of the book to the editing part.

---

## Anti-Features (deliberately NOT covered — keep beginner + non-duplicative)

| Anti-Feature | Why Avoid | Do Instead |
|--------------|-----------|-----------|
| **Astro stacking / Milky-Way processing** | Already the separate darktable part | Cross-reference it; state this part = daytime/twilight only |
| Heavy retouching / Generative Remove / AI sky replacement | Not beginner "travel editing"; changes reality; steep | Mention Generative Remove exists in one sentence, defer |
| Lens Blur (fake bokeh) | Gimmick for this audience; AI-heavy | Skip; real aperture in shooting part |
| Point Color / advanced color theory | Overkill for beginners | HSL covers 95% |
| Calibration panel deep-dive | Legacy/expert; confusing | Profiles replace it for beginners |
| Print module / soft-proofing internals | Big topic; most travel output is web/Instagram | One export-for-print preset, no soft-proof chapter |
| Extreme HDR "grunge" look | Ugly, dated, over-processed | Teach natural HDR restraint |
| Tethering, catalog optimization, keywording systems | Library-management, not editing | Out of scope for an editing part |
| Photoshop round-trip / compositing | Different app, advanced | Stay in Lightroom Classic |
| Video editing | Not the goal | Skip |

---

## Beginner pitfalls per step (Section 2 — condensed; full detail in PITFALLS.md)

| Step | Over-use failure | Symptom | Fix / guardrail |
|------|-----------------|---------|-----------------|
| Clarity | Over-clarity | Gritty, HDR-grunge, dark halos at edges | Keep < +20 globally; use Texture instead; negative on skin |
| Dehaze | Over-dehaze | Cyan/dark halos on horizon, muddy sky | Small amounts; local via mask on haze only |
| Saturation | Over-saturation | Radioactive orange sand, orange skin | Prefer Vibrance; watch the "gamut warning" garishness |
| Blacks | Crushed blacks | Lost shadow detail, muddy | Alt-drag to just-touch clipping, then back off |
| Highlights | Over-recovery | Grey flat sky, "dead" look | Recover only until detail returns, keep some brightness |
| Sharpening | Over-sharpen | Halos, crunchy noise | Use Masking slider (Alt-drag); moderate Amount |
| Exposure via Shadows | Lifting shadows too far | Noise + flat, washed image | Use local mask, or Denoise first |
| WB | Auto-WB trust | Wrong mood (kills golden hour) | Set by intent, not just "neutral" |
| Presets | One-click preset over RAW | Inconsistent per lighting | Presets = starting point, always adjust exposure/WB after |

---

## Feature Dependencies

```
Non-destructive/catalog understanding  →  (unlocks courage for) all sliders
Profile  →  Basic panel (re-bases if changed later)
Lens Corrections + Transform  →  Crop  →  everything downstream (frame is fixed)
White Balance  →  Exposure/Tone  →  HSL/Color Grading (color judged on correct base)
Global edits (2–14)  →  Masking (masks react to corrected image)
Understanding steps 2–14  →  Presets (a preset is just saved steps)
In-camera bracketing (shooting part)  →  HDR / HDR Panorama merge
Any edit  →  Export (the deliverable)
```

## MVP / chapter-priority recommendation

Every-photo core (teach first, deeply): **1 → 10, + 14 (basic sharpen), + 17 (export web).**
Then differentiators (one section each): **15 Masking (Select Sky + Gradient + Brush), 16 Presets, Denoise, Panorama/HDR merge.**
Defer/skip: everything in Anti-Features.

Suggested chapter split for roadmap:
1. 준비 & 개념 (import, non-destructive, panel-order map)
2. 필수 보정 순서 (profile → lens → transform/crop → WB → tone → presence → vibrance → export) ← the spine
3. 여행 상황별 레시피 (recipes a–e)
4. 국소 보정: 마스킹 (Select Sky, Gradient, Brush, Select People/skin)
5. 디테일 & 노이즈 (sharpening + AI Denoise)
6. 합치기: 파노라마 & HDR (ties to bracketing/shooting part)
7. 프리셋 & 내보내기 (batch a trip, web vs print)

---

## Sources

- Adobe helpx — Develop module tools: https://helpx.adobe.com/lightroom-classic/help/develop-module-tools.html (HIGH)
- Adobe helpx — Enhance / Denoise (Raw Details, Super Resolution): https://helpx.adobe.com/in/lightroom-classic/help/enhance-details.html (HIGH)
- Adobe helpx — What's new June 2025 (14.4, Denoise in Detail panel): https://helpx.adobe.com/lightroom-classic/help/whats-new/2025-4.html (HIGH)
- Adobe helpx — Masking tool (Select Subject/Sky/Background/Objects/People, Landscape, Brush, Linear/Radial Gradient, Range Mask): https://helpx.adobe.com/lightroom-classic/help/masking.html (HIGH)
- Adobe helpx — Panorama / HDR / HDR Panorama merge: https://helpx.adobe.com/lightroom-classic/help/panorama.html , https://helpx.adobe.com/lightroom-classic/help/hdr-photo-merge.html (HIGH)
- Julieanne Kost (Adobe) — Develop module overview & masking: https://jkost.com/blog/2024/07/an-overview-of-the-develop-module-in-lightroom-classic.html , https://jkost.com/blog/2024/09/making-selective-edits-using-the-masking-tools-in-lightroom-classic.html (HIGH)
- mastering-lightroom.com — 15-step workflow & Denoise: https://mastering-lightroom.com/lightroom-classic-workflow/ (MED — corroborating convention)
- Matt Kloskowski — Best Lightroom workflow order: https://mattk.com/the-best-lightroom-workflow-order/ (MED — corroborating convention)
- jholko.com — Order of operations with AI editing, July 2025: https://blog.jholko.com/2025/07/11/lightroom-order-of-operations-with-a-i-editing-july-2025/ (MED)
- Michael Frye — Denoise practical use: https://www.michaelfrye.com/2023/04/23/lightrooms-powerful-new-denoise-tool-2/ (MED)

**Confidence flags:** Feature NAMES and menu paths = HIGH (Adobe docs). Panel ORDER = HIGH as *convention* (multiple authoritative sources agree; explicitly labeled convention not law). Recipe slider directions = HIGH (widely-taught, physics of RAW tone) but values are per-image judgment.
