# Domain Pitfalls

**Domain:** Korean mdBook tutorial — untracked Milky Way / night-sky photography (crop-sensor mirrorless, no star tracker), produced against two fixed real-world shoot dates
**Researched:** 2026-07-09
**Confidence:** HIGH for shooting technique pitfalls (well-documented, cross-verified across multiple photography sources); HIGH for the date-driven production risk (derived directly from today's date vs. project timeline); MEDIUM for Mongolia-specific conditions (aggregated from travel-blog sources, not personal fieldwork).

This document covers two distinct pitfall domains, since this is a content project with a hard real-world deadline, not just a technical product:

- **(A) Shooting pitfalls** — mistakes beginners make photographing the Milky Way untracked, which the book's content must actively warn readers against.
- **(B) Production pitfalls** — ways *making this book on schedule* can fail, independent of whether the photography advice itself is correct.

---

## ⏱ Time-Critical Finding (read first)

**Today is 2026-07-09. The 서해안(West Coast) practice shoot is 2026-07-17 — only 8 days away.** Per PROJECT.md's own sequencing (집 연습 1차 → 서해안 2차 → 집 3차 → 집 4차 → 몽골), the home practice (1차) must happen, and any gear must be bought and arrived, **before** those 8 days run out, or the West Coast trip happens with untested/absent gear and the book loses its first real content-generation opportunity. This is the single highest-leverage risk in the whole project and is **not primarily a photography-skill risk — it's a scheduling risk**. See Critical Pitfall #1 below.

---

## Critical Pitfalls

### Pitfall 1 (PRODUCTION): Gear/settings chapters not ready before 7/17 collapses the practice-shoot arc

**What goes wrong:**
The book's structure depends on a sequence: 장비 추천 chapter → 촬영 준비 chapter → 촬영법 chapter must exist (even in draft form) *before* 집 연습 1차, which itself must happen before 7/17. If gear hasn't been decided/ordered/arrived, or the manual-mode/500-rule/focus workflow hasn't been drafted and rehearsed at home, the 7/17 West Coast trip becomes an unstructured outing instead of "첫 실전 필드 테스트" — producing no usable sample photos, no validated settings, and no content for the book's practice-2 chapter. Because 7/17 is a fixed calendar date that will not repeat before Mongolia, this failure is **unrecoverable** — there is no "redo the West Coast test" slot before 8/13.

**Why it happens:**
Content projects tied to real-world one-shot events get treated like software features ("we'll finish the chapter later") when they're actually hard deadlines. Writers underestimate how long gear ordering + arrival + at least one home test session takes when compressed into 8 days.

**Consequences:**
- No usable "before" reference photos from the first practice cycle.
- 서해안 chapter has to be written *after the fact* from whatever settings were guessed in the field, undermining the "따라 하며 성공" pedagogical promise.
- Downstream practice sessions (3차, 4차) lose their anchor — they're meant to "복기·보완" against 7/17 results.

**Prevention:**
- Finalize gear decision (camera body confirmed, lens choice, tripod, intervalometer/remote) within 1–2 days from today; order same-day if anything is missing. Assume **2–5 business day delivery** for Korean camera-gear retailers/marketplaces — order by 7/11 at the latest to have working margin before 7/17.
- Draft (not polish) the 장비/준비물 and 촬영법(수동 설정, 500법칙/NPF, 초점) chapters as checklists *before* 7/17 — they don't need prose, just the settings table and a pre-flight checklist the author can literally carry into the field.
- Treat 집 연습 1차 as mandatory before 7/17, even if brief (a single evening testing manual mode, intervalometer, and infinity focus indoors/on a balcony against distant lights).

**Warning signs:**
- It's within a few days of 7/17 and camera/lens/tripod/intervalometer are not all in hand.
- No written settings checklist exists yet (ISO/aperture/shutter starting points, focus procedure).
- No home test of manual-focus-at-infinity has been done — this is the #1 hardest beginner skill and cannot be learned for the first time under a dark sky.

**Phase to address:** Should be the *first* roadmap phase — "장비 확정 및 구매" / "기초 촬영법 정리" — sequenced to complete before any phase representing 7/17 content, with an explicit checkpoint dated against 7/17.

---

### Pitfall 2 (SHOOTING): Star trailing from 500-rule miscalculation on crop sensor

**What goes wrong:**
Beginners apply the "500 rule" using the lens's marked focal length without multiplying by the crop factor, or they apply it correctly but don't realize the classic 500 rule was calibrated for low-megapixel full-frame sensors and is **too permissive** for modern APS-C sensors — resulting in visible star trails (elongated, non-pinpoint stars) at 100% crop even though the shot "looked fine" on the camera's small LCD in the field.

**Why it happens:** The crop-factor multiplication step is easy to forget, and the correct formula is genuinely confusing on a phone in the dark. The formula is:

```
최대 노출시간(초) = 500 ÷ (환산 초점거리) = 500 ÷ (렌즈 초점거리 × 크롭계수)
```

Example (Sony/Fuji-style APS-C, crop 1.5×, 16mm lens): 500 ÷ (16 × 1.5) = 500 ÷ 24 ≈ **20.8초**, not 500 ÷ 16 = 31초 (the wrong, uncorrected number). For Canon APS-C (crop 1.6×) with a 50mm lens: 500 ÷ (50 × 1.6) = **6.25초**.

**Consequences:** Star trails only become obvious when zoomed in during post-processing — by then the trip/session is over and the shot can't be redone.

**Prevention:**
- Book must teach the crop-corrected formula explicitly, not the generic "500/focal length" version, and show worked examples using the *actual* lens focal lengths recommended in the gear chapter.
- Recommend the **NPF rule** (or an app like PhotoPills' Spot Stars calculator) as the more accurate modern alternative, especially since APS-C sensors today are commonly 24–32MP — well above the low-MP assumption the 500 rule was built on. For high-MP crop bodies, NPF often gives noticeably *shorter* max exposure than the 500 rule.
- Teach readers to zoom to 100% on the camera's rear LCD/EVF at the shoot site to visually confirm pinpoint stars, not just trust the calculator.

**Warning signs:** Stars look like short streaks/ovals rather than points when zoomed in; this is invisible on the default LCD preview zoom level.

**Phase to address:** 촬영법 chapter (exposure/shutter-speed section) — must appear before 7/17 per Pitfall 1.

---

### Pitfall 3 (SHOOTING): Missed focus at infinity — the single most common ruined-shot cause

**What goes wrong:** Trusting the lens's printed "∞" infinity mark, which is frequently inaccurate due to manufacturing tolerance and temperature-based focus shift, or using autofocus in near-total darkness where AF simply hunts and fails. Every star in the frame comes out as a soft blob no amount of post-processing can fix — and because the LCD preview at default zoom looks "sharp enough," beginners don't discover this until viewing on a full-size screen back home.

**Why it happens:** Night-sky subjects are pinpoints of light at true infinity with no contrast for AF to lock onto, and manual "acceptable" focus range for pinpoint stars is only a tiny sliver of the focus ring's travel.

**Prevention:**
- Teach the standard technique explicitly: switch to manual focus → point at the brightest star or distant light → magnify 5–10× in Live View → adjust focus ring slowly until the point is smallest/sharpest → lock (gaffer tape over the focus ring, since bumps and temperature drift shift it during the session).
- Do NOT rely solely on the infinity hard-stop or engraved ∞ mark.
- Practice this exact procedure during 집 연습 1차 (before 7/17) on distant streetlights, since this is not learnable for the first time under a real night sky.
- Re-check focus periodically through the session — temperature changes shift focus over hours.

**Warning signs:** Stars look "soft" or "fuzzy" even at moderate zoom on playback; can be caught in-field by zooming to max magnification on a bright star immediately after the first test shot — the book should teach readers to always do this check-shot before committing to a full session.

**Phase to address:** 촬영법 chapter + must be rehearsed in 집 연습 1차 phase (before 7/17).

---

### Pitfall 4 (SHOOTING): Shooting near/around a bright moon without checking phase

**What goes wrong:** A bright moon washes out the Milky Way's faint core detail and can make foreground stars nearly invisible in the frame, ruining an otherwise well-planned shoot night.

**Why it happens:** Beginners plan around weather forecasts and ignore the moon calendar entirely, or don't realize moon *rise/set time* matters as much as phase (a full moon that sets before Milky Way core rises is fine; a thin crescent that's up all evening still matters less than one would think).

**Prevention:** Book should include a moon-phase/moonrise-moonset check as a standard pre-shoot planning step (PhotoPills, timeanddate.com, or a Korean 달력 app), for both the West Coast night and each Mongolia night.

**Verified good news for this specific project (worth stating explicitly in the book so the reader trusts the dates instead of re-deriving them under pressure):**
- **7/17/2026**: Moon is a waxing crescent, ~3.3 days old, ~13% illuminated, visible low in the west shortly after sunset and setting a few hours later — leaves most of the true night dark. Good for the West Coast test.
- **8/12/2026** is a **new moon** (also a solar eclipse). The Mongolia trip (8/13–8/17) falls in the **first 1–5 days after new moon** — the moon is a thin waxing crescent essentially absent from the night sky all five nights. This is close to ideal natural timing for Milky Way visibility, and appears to be a fortunate coincidence rather than something the trip was planned around.
- Because this is a fortunate but *externally fixed* coincidence, the book should not assume it — it should show readers *how* to check moon phase/rise-set themselves (in case travel dates shift), rather than just hard-coding "moon isn't a problem this year" without the underlying method.

**Warning signs:** Milky Way core looks pale/washed out in test shots with a flat, brightened sky background rather than black.

**Phase to address:** 몽골 날짜별 촬영 계획 chapter, and the 서해안 2차 planning note.

---

### Pitfall 5 (SHOOTING): High ISO noise with no stacking strategy

**What goes wrong:** Untracked Milky Way shots require high ISO (often 3200–6400) combined with the crop-corrected short shutter speeds from Pitfall 2, producing significant sensor noise — especially in shadow/foreground areas — that looks acceptable on a phone screen but falls apart in a large-format book image or when readers zoom in.

**Why it happens:** Beginners shoot a single frame per composition instead of a burst, not knowing that stacking 8–20 frames of the same composition and aligning+averaging them in software (Sequator, Starry Landscape Stacker, or manual median-stack in Photoshop) reduces random noise by roughly the square root of frame count — a huge, "free" quality gain that doesn't require any tracking hardware.

**Prevention:**
- Teach shooting a **burst of 10–20 frames** (10–20s each) per key composition specifically for stacking, not just one "hero" shot.
- Recommend free/beginner-friendly untracked stacking tools (Sequator is Windows-only and free; note Mac-equivalent alternatives if the author is on Mac) as part of the 후보정 chapter.
- Note battery/card-space cost of burst shooting — ties into Pitfall 9 below.

**Phase to address:** 후보정 chapter and 촬영법 chapter (shooting workflow) — should be validated in 집 연습 4차 (final rehearsal) so the stacking software workflow is proven before Mongolia, not learned for the first time on unrepeatable Mongolia photos.

---

### Pitfall 6 (SHOOTING): Dew/condensation on the lens ruining a session mid-shoot

**What goes wrong:** On humid nights (the 서해안 coastal test shoot is at much higher risk of this than dry Mongolia steppe/Gobi), moisture condenses on the front element as it cools below the dew point, progressively softening/blurring every subsequent frame — often unnoticed until reviewing images, since a thin dew film doesn't show clearly on the rear LCD.

**Why it happens:** Still, humid coastal air with no breeze is the worst-case condition; beginners don't check for a fogged/wet front element periodically during a session.

**Prevention:**
- Use a lens hood (cheapest, most practical protection — recesses the front element).
- Carry a simple USB-powered dew heater strap for longer sessions if budget allows (relevant to gear chapter's "선택 장비" section).
- Periodically wipe/check the front element with a microfiber cloth through the session — build this into the shooting checklist.
- Note asymmetric risk: 서해안(coastal, humid) >> 몽골 고비/초원(dry) — the book should flag dew as a **West Coast-specific** risk, distinct from Mongolia.

**Phase to address:** 서해안 2차 chapter (specific callout), general 촬영 준비물 chapter (dew heater as optional gear).

---

### Pitfall 7 (SHOOTING): Cold-weather battery drain in Mongolia, especially with no spares plan

**What goes wrong:** Lithium-ion batteries lose a large fraction of their capacity in cold temperatures — Mongolia's Gobi/steppe nights can be cold even in August despite warm daytime highs (20s–30s°C day, dropping sharply at night). A battery that shows "full" at home can die mid-session in the field, cutting a shoot short during a trip that only offers 4–5 total night-shooting opportunities that cannot be repeated.

**Why it happens:** Beginners don't test cold-weather battery behavior beforehand and bring only one or two batteries assuming daytime-charge behavior carries over.

**Prevention:**
- Bring multiple fully-charged spare batteries; keep spares in an inner jacket pocket (body heat) rather than a cold bag pocket.
- A battery that "dies" from cold can often be revived by warming it in a pocket for a few minutes — teach this as a field-recovery trick.
- Because Mongolia nights are genuinely cold, this belongs in the packing-list/장비 준비물 chapter with explicit "몇 개 챙길지" guidance, not left implicit.
- Same principle applies to phone/power bank if used for apps (PhotoPills, star-tracking apps) in the field.

**Phase to address:** 몽골 촬영 계획 chapter + 촬영 준비물 chapter.

---

### Pitfall 8 (SHOOTING): Unstable tripod / wind on open steppe or beach

**What goes wrong:** Both shoot locations are exposed and windy (open Gobi/steppe terrain in Mongolia, open beach on the West Coast) — camera shake from wind-induced tripod vibration during 10–25 second exposures blurs images in a way that's easy to misattribute to focus or star-trail issues instead of the real cause.

**Why it happens:** Beginners use lightweight travel tripods (reasonable given the "가볍고 작은 구성" portability priority in this project) without a stabilization plan, and a common well-intentioned fix — hanging a bag from the tripod's center hook — actually makes things *worse* in wind because the swinging bag adds vibration rather than damping it.

**Prevention:**
- Use tripod's thick leg sections first, avoid extending the center column (biggest source of instability), and keep legs low/wide in windy conditions.
- If weighting the tripod, put the bag/weight **on the ground**, connected to the tripod by a short strap/cord under tension — not hanging and swinging freely.
- Use the camera's 2-second timer or a remote/intervalometer to fire the shutter — never press the shutter button by hand, which itself introduces shake, compounding wind-induced instability.
- This is a direct tension with the "가볍고 작은" gear priority in PROJECT.md — the gear chapter should explicitly address the tradeoff (e.g., recommend a compact but wind-rated tripod, not just the lightest option) rather than silently prioritizing weight over stability.

**Phase to address:** 장비 추천 chapter (tripod section) + 촬영법 chapter (shutter-release technique).

---

## Moderate Pitfalls

### Pitfall 9: Forgetting to shoot RAW
**What goes wrong:** JPEG-only capture bakes in white balance and highly limits noise-reduction/exposure recovery in post — a beginner mistake that's invisible until post-processing begins and it's too late to redo the shot.
**Prevention:** Set RAW (or RAW+JPEG) as a non-negotiable item in the pre-shoot checklist; verify camera setting explicitly during 집 연습 1차, not assumed.
**Phase to address:** 장비/설정 준비 chapter checklist.

### Pitfall 10: Wrong / Auto white balance
**What goes wrong:** Auto WB in mixed light-pollution/night conditions often shifts the sky toward a muddy yellow-orange rather than natural night blue/black, and — more importantly for a beginner audience — the actual WB doesn't matter much *if shooting RAW* (Pitfall 9), since it's fully adjustable in post. Beginners who don't know this waste field time fiddling with WB instead of nailing exposure/focus.
**Prevention:** Teach a fixed starting point (~3400–4400K, "Daylight" or "Tungsten" preset as a rough field default) purely to make the LCD preview usable, while explicitly telling readers WB is finalized in post-processing, not in-camera — this simplifies the beginner's in-field decision load.
**Phase to address:** 촬영법 chapter (settings) + 후보정 chapter.

### Pitfall 11: Foreground too dark / no blending technique taught
**What goes wrong:** A correctly-exposed sky (short exposure, per Pitfall 2) leaves foreground/landscape elements as a black silhouette or pure noise, disappointing beginners who expected postcard-style images with a lit landscape.
**Prevention:** Teach one accessible technique appropriate for beginners — blue-hour blend (shoot foreground during dusk before full dark, blend with the later Milky Way frame in the same composition) is more reliable for beginners than off-camera light painting, which easily produces uneven "hot spot" lighting. Cover both, but recommend blue-hour blend as the default for this book's skill level.
**Phase to address:** 촬영법 chapter (composition/timing) + 후보정 chapter (blending workflow).

### Pitfall 12: Milky Way core position/timing not understood for the specific locations and dates
**What goes wrong:** By August, the galactic core is already past its highest, most "overhead" early-summer position and appears lower/more toward the south-southwest earlier in the evening than in June/July — and Mongolia's higher latitude (roughly 44–52°N vs. Korea's ~37°N) further changes how high the core rises above the horizon compared to what the author may see in generic (often US/lower-latitude) tutorials. If the book's shooting-direction guidance is copied from a generic source without adjusting for latitude and the specific August date, readers may point cameras at the wrong horizon or expect a "straight overhead" core that isn't achievable there.
**Prevention:** Use a planning app (PhotoPills, Stellarium) to derive the actual core azimuth/altitude for each specific date and location (서해안 on 7/17, and each Mongolia date 8/13–8/17 individually, since the core's position shifts noticeably night to night across a 5-day span) rather than reusing generic advice. This should feed directly into the "날짜별 촬영 대상 추천" requirement already in PROJECT.md.
**Phase to address:** 몽골 날짜별 촬영 계획 chapter — this is exactly the chapter PROJECT.md already scopes for this, but the pitfall is doing it generically instead of per-date/per-location.

### Pitfall 13: Not scouting / no light-pollution check before committing to a shoot site
**What goes wrong:** Arriving at a shoot location only to discover nearby lighting (streetlights, a town glow on the horizon, security lights) that wasn't visible on a map, wasting a rare shoot night.
**Prevention:** Use a light-pollution map (e.g., lightpollutionmap.info) during planning for both the 서해안 site and each Mongolia stop, and check satellite/street view for visible light sources near the horizon in the shooting direction determined by Pitfall 12.
**Phase to address:** 서해안 2차 planning + 몽골 날짜별 촬영 계획 chapter.

### Pitfall 14 (PRODUCTION): Recommending gear too late for readers/friends to buy before their own trip
**What goes wrong:** The book's audience includes 지인(초보자) who may want to buy their own gear based on the book's recommendations — if the 장비 추천 chapter isn't published/shareable until after 7/17 or close to 8/13, friends following along lose their own purchase lead time, undermining the "함께 보고 따라 할 수 있게" goal from PROJECT.md.
**Prevention:** Treat the 장비 추천 chapter as a standalone, shippable-early unit — publish/finalize it as early as possible, independent of whether the rest of the book (촬영법, 후보정) is done, since gear decisions have the longest external lead time of any content in the book.
**Phase to address:** Should be the earliest content phase in the roadmap, decoupled from later chapters.

### Pitfall 15 (PRODUCTION): Missing actual sample/before-after photos because shoots aren't treated as content-generation events
**What goes wrong:** If the author treats 7/17 and the Mongolia nights purely as personal photography outings and only thinks about "the book" afterward, they may forget to capture the specific supporting material a tutorial needs beyond final images — e.g., a photo of the gear setup, screenshots of in-camera settings, before/after post-processing comparisons, or notes on what went wrong in the moment. These are very hard to reconstruct after the fact.
**Prevention:** Prepare a lightweight "content capture checklist" (setup photo, settings screenshot or written note, at least one deliberately "bad" reference shot showing a mistake for teaching purposes) to bring on each shoot, treating each practice session as dual-purpose (skill practice + book material generation) from the start.
**Phase to address:** Should be embedded as a checklist item in each practice-session phase (1차–4차 and Mongolia), not a separate late phase.

---

## Minor Pitfalls

### Pitfall 16: Steps not reproducible by a beginner reader
**What goes wrong:** Settings/instructions written from the author's own camera model or muscle memory (e.g., "메뉴에서 그거 누르면") without generalizing menu paths, making it hard for a friend with a different camera brand to follow.
**Prevention:** Where camera-specific, name the exact menu path for the author's model AND describe the setting in general terms (e.g., "노출 모드를 M(수동)으로") so readers on other bodies can translate it.
**Phase to address:** Editorial pass on 촬영법/장비 chapters before publishing each chapter.

### Pitfall 17: Korean typography/image issues in mdBook
**What goes wrong:** mdBook can render extra/inconsistent spacing on lines that wrap mid-CJK-text (a known upstream rendering quirk), and large unoptimized night-sky photos (RAW-derived JPEGs/PNGs straight from Lightroom, easily 5–20MB each) slow page loads badly on GitHub Pages, especially for friends viewing on mobile data.
**Prevention:** Consider the `mdbook-fix-cjk-spacing` preprocessor if CJK line-wrap spacing becomes visibly distracting; standardize an export preset (resize to a reasonable max dimension, compress to a target file size, consider WebP) before dropping images into the book rather than using original export sizes.
**Phase to address:** mdBook 설정/배포 chapter (technical setup phase), and should be decided *before* mass-importing Mongolia photos so every image doesn't need re-processing later.

### Pitfall 18: Battery/card management overlooked for burst+stacking workflow
**What goes wrong:** Adopting the stacking workflow from Pitfall 5 (10–20 frames per composition) multiplies shutter count and storage use several-fold versus single-frame shooting; a beginner packing "enough" batteries/cards for single shots runs out mid-Mongolia-trip.
**Prevention:** Size the packing list (battery count, card capacity) against the stacking workflow's actual frame count, not against a naive "a few photos a night" estimate.
**Phase to address:** 촬영 준비물 chapter.

---

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| #1 Gear/settings not ready before 7/17 | Earliest roadmap phase: "장비 확정+구매 및 기초 촬영법" | Gear physically in hand + settings checklist drafted, both dated before 7/17; 집 연습 1차 completed before 7/17 |
| #2 500-rule crop-factor error | 촬영법(노출) chapter | Worked examples use the actual recommended lens's true crop-corrected focal length; NPF/PhotoPills alternative mentioned |
| #3 Missed infinity focus | 촬영법 chapter + 집 연습 1차 | Manual-focus-at-infinity procedure rehearsed at home before 7/17; check-shot habit taught |
| #4 Bright-moon timing | 몽골 날짜별 계획 + 서해안 2차 note | Moon phase/rise-set explicitly checked and stated per date, not assumed |
| #5 High-ISO noise, no stacking | 후보정 chapter + 촬영법 chapter | Stacking workflow tested end-to-end in 집 연습 4차 before Mongolia |
| #6 Dew/condensation | 서해안 2차 chapter + 준비물 chapter | Lens hood (min.) in packing list; dew flagged as coastal-specific risk |
| #7 Cold battery drain | 몽골 계획 + 준비물 chapter | Spare-battery count and inner-pocket storage explicitly specified |
| #8 Tripod wind instability | 장비 추천(삼각대) + 촬영법(셔터) chapter | Ground-anchored weighting method taught; remote/timer use mandated |
| #9 Forgot RAW | 장비/설정 준비 checklist | RAW setting verified during 집 연습 1차 |
| #10 Wrong WB | 촬영법 + 후보정 chapter | WB explicitly framed as "post-processing decision," not field-critical |
| #11 Dark foreground | 촬영법 + 후보정 chapter | Blue-hour blend technique taught as default beginner method |
| #12 Core position/timing per date | 몽골 날짜별 계획 chapter | Azimuth/altitude derived per-date via app, not copied from generic source |
| #13 No scouting/light-pollution check | 서해안 2차 + 몽골 계획 chapter | Light-pollution map check documented per site |
| #14 Gear chapter published too late | Earliest content phase, decoupled from later chapters | Gear chapter usable/shareable independent of book completion status |
| #15 Missing supporting content from shoots | Embedded in every practice-session phase | Content-capture checklist used at each of the 5 shoot events |
| #16 Non-reproducible steps | Editorial pass per chapter | Menu paths generalized beyond author's specific camera model |
| #17 mdBook CJK/image issues | mdBook 설정/배포 phase | Image export preset decided before bulk Mongolia photo import |
| #18 Battery/card sizing for stacking | 준비물 chapter | Packing list sized against stacking frame counts, not single-shot estimate |

## Sources

- [500 Rule vs NPF Rule: Shutter Speed for Astrophotography — Photography Life](https://photographylife.com/500-rule-vs-npf-rule)
- [Use the 500 Rule for Astrophotography — AstroBackyard](https://astrobackyard.com/the-500-rule/)
- [Free 500 Rule Calculator — Skies & Scopes](https://skiesandscopes.com/500-rule-calculator/)
- [Moon Phase on July 17, 2026 — TheSkyLive](https://theskylive.com/moon/2026-07-17)
- [Moon Phase for August 13, 2026 — nineplanets.org](https://nineplanets.org/moon/phase/8-13-2026/)
- [New Moon of August 2026 — TheSkyLive](https://theskylive.com/new-moon-august-2026)
- [Best Time to See the Milky Way + 2026 Milky Way Chart — Capture the Atlas](https://capturetheatlas.com/best-time-to-see-the-milky-way/)
- [5 Common Mistakes Beginner Astrophotographers Make — Live Science](https://www.livescience.com/space/5-common-mistakes-beginner-astrophotographers-make-and-how-to-avoid-them)
- [Focusing at Night: A Tutorial — Lonely Speck](https://www.lonelyspeck.com/focusing-at-night/)
- [How to avoid condensation on your lens during night photography — Akari Photo Tours](https://akariphototours.com/resources/night-sky-photography-tutorials/dew-condensation/)
- [How to Dew-Proof Your Camera Lens — PhotographingSpace.com](https://www.photographingspace.com/dew-proofing/)
- [Cold-Weather Photography — Digital Photography School](https://digital-photography-school.com/how-to-take-care-of-your-camera-in-cold-weather/)
- [Take Better Night Sky Photos with Image Stacking — Photography Life](https://photographylife.com/night-sky-image-stacking)
- [How to Shoot Milky Way Photos with Image Stacking — PetaPixel](https://petapixel.com/2021/04/17/how-to-shoot-milky-way-photos-with-image-stacking-to-clean-up-noise/)
- [How to Achieve Detailed Foregrounds in Milky Way Photos — Stephen Bay Photography](https://stephenbayphotography.com/blog/how-to-achieve-detailed-foregrounds-in-milky-way-photos/)
- [How to Make Your Tripod More Stable — Photography Life](https://photographylife.com/how-to-make-tripod-more-stable)
- [Setting Your White Balance for Astrophotography — AstroBackyard](https://astrobackyard.com/white-balance-astrophotography/)
- [몽골 은하수 시기 총정리, 6~8월 날씨와 관측 꿀팁 — 트립스토어 블로그](https://www.tripstore.kr/blog/%EB%AA%BD%EA%B3%A8-%EC%9D%80%ED%95%98%EC%88%98-%EC%8B%9C%EA%B8%B0-%EB%82%A0%EC%94%A8-%EA%BF%80%ED%8C%81)
- [밤하늘 은하수 촬영 노하우 최고의 촬영지와 준비물 — Exploring Your Universe](https://www.exploringyouruniverse.org/%EB%B0%A4%ED%95%98%EB%8A%98-%EC%9D%80%ED%95%98%EC%88%98-%EC%B4%AC%EC%98%81-%EB%85%B8%ED%95%98%EC%9A%B0-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EC%B4%AC%EC%98%81%EC%A7%80%EC%99%80-%EC%A4%80%EB%B9%84%EB%AC%BC/)
- [GitHub - lotabout/mdbook-fix-cjk-spacing](https://github.com/lotabout/mdbook-fix-cjk-spacing)
- Note: moon phase percentages/dates cross-verified across TheSkyLive, nineplanets.org, and astro-seek.com; direct moonrise/moonset time lookups for Seoul and Ulaanbaatar were blocked (403) and should be re-verified with an interactive tool (PhotoPills, timeanddate.com) closer to each shoot date rather than relying solely on this document's phase-based estimates.

---
*Pitfalls research for: Korean mdBook tutorial — untracked Milky Way photography (Mongolia trip)*
*Researched: 2026-07-09*
