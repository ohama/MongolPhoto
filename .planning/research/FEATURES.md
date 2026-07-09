# Feature Research

**Domain:** Beginner astrophotography / Milky Way travel tutorial (Korean mdBook, no star tracker, crop-sensor mirrorless)
**Researched:** 2026-07-09
**Confidence:** HIGH — cross-verified against multiple authoritative photography teaching sources (PhotoPills, Photography Life, Lonely Speck, Capture the Atlas, National Parks at Night, AstroBackyard) plus live data for the actual trip dates (moon phase, Bortle rating for Mongolia).

> Note: this is a **content project**, not software. "Feature" below means "content element/section the book must or should contain." Complexity ratings reflect *writing/production effort* (research + drafting + example photos), not code effort.

## Feature Landscape

### Table Stakes (Users Expect These)

Without these, a beginner following the book will fail to get a usable Milky Way photo in Mongolia. These map directly to the "Active" requirements already listed in PROJECT.md.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Gear checklist (body, lens, tripod, intervalometer/remote, spare batteries, headlamp, warm layers, memory cards, lens cloth) | A beginner literally cannot start without knowing what to buy/pack; PROJECT.md explicitly requires portability-first recommendations | LOW | Frame around crop-sensor mirrorless + "no tracker, travel-light" constraint. Recommend one fast wide lens (f/1.8–f/2.8, ~10–20mm equiv) as the single highest-leverage purchase. |
| Manual (M) mode fundamentals — exposure triangle (ISO/aperture/shutter) explained for night use | Auto modes fail completely at night; M mode is non-negotiable for star photography | LOW | Teach conceptually before any numeric rule (NPF/500) is introduced — numeric rules only make sense once shutter/aperture/ISO tradeoffs are understood. |
| Starting-point exposure settings for crop sensor (aperture wide open, ISO 1600–3200 typical starting range, ~15–25s baseline) | Beginners need a concrete "start here" number, not just theory | LOW | Full-frame guides commonly suggest ISO 1600–6400; crop-sensor practice skews slightly lower (ISO 1600–3200) to manage noise — must be stated as crop-specific, not copied from full-frame guides. |
| Shutter-speed limit rule: NPF rule (preferred) with 500-rule fallback, explicitly adapted for crop sensor | Prevents star trailing; the single most-cited "beginner did it wrong" cause | MEDIUM | The 500/400/600 rules are outdated for modern high-MP sensors — cite NPF rule as primary, 500-rule as "quick mental math" fallback. Must show the crop-factor-adjusted calculation (e.g., Canon ×1.6, Nikon/Sony ×1.5) since a 500-rule number for full-frame is wrong on APS-C without adjustment. |
| Focusing on stars at night (manual focus, NOT relying on lens infinity mark or AF) | The #1 cited beginner failure mode — "sharp everything except the stars" | MEDIUM | Concrete method: Live View + digital zoom on brightest star/planet/distant light → adjust ring until pinpoint → take test shot, zoom 100% to verify → gaffer-tape the focus ring so it doesn't shift. Must be taught and *drilled at home* before field nights (dependency: precedes all practice sessions). |
| Shoot in RAW | Enables all the post-processing below (white balance, shadow recovery, noise reduction); JPEG destroys the latitude needed | LOW | One-paragraph explanation of why + how to set it; ties directly into the post-processing chapter. |
| Finding & timing the Milky Way — season, core rise/set time, direction/altitude, use of a planning app (PhotoPills/Stellarium or free alternative) | Beginner cannot "just point the camera up" — galactic core has a season and moves across the sky | MEDIUM | Aug 13–17 in Mongolia is solidly within galactic-core season (peak is June–Aug); the core is visible essentially from dusk onward and stands increasingly vertical in Aug, useful for compositions using a strong vertical foreground. |
| Moon-phase planning | Even a partial moon washes out the faint core; darkest sky = best shot | LOW | Directly relevant and highly favorable for this project: New Moon falls on 2026-08-12 (coincides with a total solar eclipse), meaning the entire Aug 13–17 Mongolia window sits in a thin waxing crescent that sets early each evening — near-ideal, worth calling out explicitly in the day-by-day plan. The 7/17 West Coast practice night is also a thin (~13%) waxing crescent that sets a few hours after sunset — both practice and trip dates were effectively "pre-optimized" by the calendar. |
| Light pollution / Bortle scale awareness + site selection | Explains why "drive 30–60 min from the city" matters; sets expectations for what's achievable near home vs. in Mongolia | LOW–MEDIUM | Home practice sessions (1, 3, 4) will likely be Bortle 5–8 (learning settings/workflow only, core won't be visible well); the 7/17 West Coast session should target the darkest accessible coastal site; Mongolia's southern Gobi is Bortle 1–2 — genuinely one of the darkest accessible skies in the world, worth explicitly contrasting against the home sessions to set correct expectations. |
| Weather/cloud-cover checking (e.g., Windy, Clear Outside, or similar) | A perfectly planned shoot fails if clouds roll in; beginners often skip this | LOW | Short section + link/app recommendation; tie into "day-by-day plan" flexibility (backup night). |
| On-site field workflow/checklist (arrive before full dark, compose in remaining light, lock focus, test-shot & chimp histogram, manage batteries/condensation in cold) | Bridges "I know the settings" to "I actually got the shot" — the actual sequence of actions in the dark | MEDIUM | Should explicitly cover cold-weather battery drain (Mongolia desert nights get cold) and dew/condensation on the lens — both common trip-specific failure points. |
| Basic post-processing (RAW develop: white balance, exposure, highlights/shadows, contrast/dehaze, basic noise reduction, sky vs. foreground balance) | An unprocessed Milky Way RAW file looks flat and grey — beginners expect their photos to look like the reference images that got them into this hobby | MEDIUM–HIGH | Recommend one accessible tool (Lightroom/Adobe Camera Raw or a free equivalent) with a repeatable slider recipe, not a from-scratch color-theory lesson. This is the natural "payoff" chapter — sequence it after all shooting content. |

### Differentiators (Competitive Advantage)

These are what make *this* book better than a generic "how to shoot the Milky Way" article — they align directly with the Core Value in PROJECT.md ("따라 하며 몽골에서 실제로 성공").

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Day-by-day Mongolia shooting plan (Aug 13–17) | Turns generic advice into a specific, actionable itinerary — no other generic tutorial can do this because it requires the author's actual trip dates/locations | HIGH | Should combine: moon state per night (favorable all 5 nights per research above), galactic-core rise/transit time each night, suggested shooting window, and location-specific foreground ideas if itinerary stops are known (e.g., dune fields, cliffs). Requires the trip's actual site list to be fully useful — flag as needing itinerary input, not just astronomy data. |
| Practice-session logbook format (집→서해안→집→집→몽골) woven into the book's structure | Turns the book into a *training program*, not just a reference — matches the project's real practice arc and gives readers a template to log their own attempts | MEDIUM–HIGH | Each practice chapter should have: goal of the session, settings to drill, a checklist, and space/prompt for "what worked / what to fix" — session 3 and 4 explicitly exist to correct mistakes surfaced in session 2, so the book should structurally reference back to earlier sessions' results. |
| Composition ideas (foreground + Milky Way pairing, leading lines, arch framing, avoiding a "flat" core) | Elevates output from "technically correct" to "actually a good photo" — commonly the gap between tutorial-followers and standouts | MEDIUM | Cheap to add relative to value — fold into the on-site workflow chapter and the Mongolia day-by-day plan rather than a standalone chapter. |
| Noise reduction via image stacking (Sequator on Windows / Starry Landscape Stacker on Mac) without a tracker | This is the direct technical answer to "how do you get tracker-quality noise levels *without* a tracker" — core to the book's whole premise | MEDIUM–HIGH | Must give OS-specific tool guidance (Sequator = Windows only, Starry Landscape Stacker = Mac only) — check which OS the author/friends actually use before committing to one tool as primary. Workflow: 10–20 sub-exposures (~15s, high ISO) + matching dark frames, align in software, blend with a single foreground frame. Depends on: basic RAW post-processing chapter existing first. |
| Troubleshooting FAQ (blurry stars, star trailing, too much noise, flat/no Milky Way visible, dew on lens, batteries dying in cold, condensation, light pollution glow in frame) | Beginners hit predictable failure modes; a FAQ turns frustration into a fast fix instead of abandoning the hobby mid-trip | MEDIUM | Best written *after* the West Coast practice session (7/17) actually happens — real mistakes from that session should populate this FAQ, which is a strong reason to sequence this chapter late in production even though readers may consult it early. |
| Printable field cheat-sheet (one-page settings/workflow/checklist card) | Practical trip artifact — usable at 2am with a headlamp when nobody wants to scroll a phone/book | LOW | Cheap, high-value; effectively a distilled summary of chapters already written, so should be assembled last, once settings/workflow are finalized. |
| Before/after edited photo galleries from actual practice sessions | Proof the method works + calibrates reader expectations of "what's realistically achievable with this gear/skill level," not aspirational stock photos | LOW–MEDIUM (production cost is *taking and editing* the photos, not writing) | Directly required by PROJECT.md ("각 단계별 실제 촬영 사진 수록"). Depends on practice sessions actually happening on schedule — content can't be finished until 7/17 session (and later home sessions) produce real files. |
| Panorama stitching for a full Milky Way arch | Distinctive "wow" shot beyond a single frame — a common differentiator in advanced amateur galleries | HIGH | Needs 30–50% frame overlap, sky-row-first shooting order, and stitching software; meaningfully more complex than single-frame shooting and easy to get wrong (flat-looking arc, missing edges) — good v2 candidate rather than MVP. |
| Star trails technique | Different, visually striking output type reachable with the *same* lightweight gear | MEDIUM | Technique conflicts partially with Milky Way single-frame shooting (star trails wants long stacked intervals, not a single ~15–20s exposure) — should be presented as a clearly separate "bonus technique," not blended into the core Milky Way workflow, to avoid confusing beginners about which settings apply when. |
| Time-lapse (intervalometer sequencing, basic deflicker, video export) | Another distinctive deliverable from the same field session, appealing for social sharing | HIGH | Highest production complexity of the differentiators (equipment endurance, storage, editing software, export pipeline) — lowest priority relative to the book's core "get one great Milky Way photo" promise. |

### Anti-Features (Commonly Requested, Often Problematic)

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|------------------|-------------|
| Deep-sky/telescope imaging (nebulae, galaxies via telescope) | "Perfect" astrophotography content often shows deep-sky targets; feels like the "real" hobby | Requires a telescope, tracking mount, guiding, and specialized stacking software (e.g., PixInsight) — an entirely different gear class and skill tree; directly contradicts the "no tracker, travel-light" trip concept | Stay scoped to wide-field nightscape Milky Way photography only (already explicitly Out of Scope in PROJECT.md) |
| Star-tracker-dependent techniques (equatorial mount, autoguiding, polar alignment) | Produces cleaner, longer exposures and is the "next step up" many tutorials push toward | Adds significant weight/cost/setup time, requires a real learning curve (polar alignment) that doesn't fit a handful of practice nights before travel, and directly conflicts with the trip's travel-light premise | Use image stacking software (Sequator / Starry Landscape Stacker) on a static tripod to reduce noise instead — same noise-reduction goal, zero extra hardware |
| Heavy/complex gear (multiple lenses, dew heaters, filter wheels, laptop tethering, lighting rigs) | "Better gear = better photos" is a common beginner assumption | Adds travel luggage weight, cost, and setup complexity that overwhelms beginners and doesn't match a walking/travel itinerary | One fast wide-angle lens + minimal accessories (spare batteries, headlamp, hand warmers for dew control) |
| Deep astrophysics/science theory (galactic structure, stellar magnitude math, etc.) | Feels educational and "complete" | Distracts beginners from actionable shooting skill and bloats a book meant to get someone a good photo in a limited number of practice nights | One short sidebar ("왜 은하수가 이렇게 보이나요") rather than a science chapter |
| Advanced pixel-level editing (manual luminosity masking, complex Photoshop layering) | Seen in pro astrophotographer post-processing breakdowns, feels like the "real" skill | Too advanced for the book's practice timeline and audience; risks readers giving up on post-processing entirely | A repeatable RAW-develop slider recipe (Lightroom/Camera Raw) plus, if pursued, a simple one-tool stacking step — no manual masking required |

## Feature Dependencies

```
Gear checklist
    └──requires──> (nothing; entry point)

Manual mode / exposure triangle
    └──requires──> Gear checklist (need to know what body/lens you're using)
    └──enables──> Starting-point exposure settings (crop sensor)
                       └──enables──> NPF/500-rule shutter limit (crop-adjusted)

Focusing on stars (manual focus method)
    └──requires──> Manual mode understanding
    └──must precede──> ALL field practice sessions (drill at home first)

Finding/timing the Milky Way (season/time/direction)
    └──requires──> (astronomy fact, independent)
    └──enables──> Moon-phase planning
    └──enables──> On-site field workflow (need to know when/where before "how to act on site")
    └──enables──> Day-by-day Mongolia plan [DIFFERENTIATOR]

Light pollution / Bortle awareness
    └──enables──> Site selection for practice sessions 2 (서해안) and Mongolia plan

Weather/cloud checking
    └──enhances──> On-site field workflow, Day-by-day Mongolia plan (backup-night logic)

On-site field workflow
    └──requires──> Manual mode + settings + focusing + finding-the-MilkyWay
    └──enables──> Practice-session logbook (연습 1~4차) [DIFFERENTIATOR]
                       └──enables──> Before/after photo galleries [DIFFERENTIATOR]
                       └──enables──> Troubleshooting FAQ [DIFFERENTIATOR] (needs real mistakes from session 2)

RAW shooting
    └──enables──> Basic post-processing (RAW develop)
                       └──enables──> Image stacking for noise reduction [DIFFERENTIATOR]
                       └──enables──> Panorama stitching [DIFFERENTIATOR]

Composition ideas [DIFFERENTIATOR]
    └──enhances──> On-site field workflow, Day-by-day Mongolia plan

Printable field cheat-sheet [DIFFERENTIATOR]
    └──requires──> Settings + on-site workflow chapters finalized (it's a distilled summary — write last)

Star trails technique [DIFFERENTIATOR]
    └──conflicts (partially)──> core Milky Way single-frame settings (different exposure/interval logic — present as separate bonus technique)

Time-lapse [DIFFERENTIATOR]
    └──requires──> Gear checklist (intervalometer) + On-site workflow
```

### Dependency Notes

- **Focusing must precede all field sessions:** the single most common beginner failure is soft stars from bad focus — this must be taught and drilled at home (practice 1) before the West Coast night (practice 2), not discovered live in the field.
- **Manual mode must precede the NPF/500 rule:** the numeric shutter-limit rule is meaningless without first understanding why shutter speed, ISO, and aperture trade off against each other.
- **Finding/timing the Milky Way must precede on-site workflow and the Mongolia day-by-day plan:** you cannot write a "what to do when you get there" chapter, or a night-by-night Mongolia itinerary, without first establishing season/time/direction/moon logic.
- **Troubleshooting FAQ should be drafted *after* the 7/17 West Coast session:** real failures from that session are more valuable content than hypothetical ones, even though the FAQ will logically sit early in the book's navigation for readers.
- **Before/after photo galleries depend on the practice sessions actually happening on schedule:** this content cannot be finalized until session photos exist — a production-timeline dependency, not just a content dependency.
- **Stacking and panorama both depend on basic post-processing existing first:** they're advanced extensions of the RAW-develop workflow, not standalone techniques.
- **Star trails conflicts with core Milky Way settings:** star trails wants a different exposure/interval strategy (long stacked sequences) vs. the ~15–20s single-frame Milky Way shot — keep as a clearly separated "bonus" section so beginners don't blend the two workflows by mistake.

## MVP Definition

### Launch With (v1)

Everything already listed as "Active" in PROJECT.md, i.e., the full table-stakes list plus the differentiators PROJECT.md already commits to:

- [ ] Gear checklist (crop mirrorless, travel-light) — trip cannot be prepared for without it
- [ ] Manual mode + exposure triangle + crop-sensor starting settings — core technical literacy
- [ ] NPF/500-rule shutter limit, crop-adjusted — prevents the #1 technical failure (star trailing)
- [ ] Focusing on stars (manual focus method) — prevents the #1 overall failure (soft stars)
- [ ] RAW shooting — enables all post-processing
- [ ] Finding/timing the Milky Way (season/time/direction, moon phase, Bortle/light pollution, weather) — required to plan any session, home or Mongolia
- [ ] On-site field workflow — bridges knowledge to execution
- [ ] Basic RAW post-processing (WB, exposure, contrast, noise) — delivers the "payoff" image
- [ ] Practice-session logbook (연습 1·2·3·4차) — the book's structural backbone per PROJECT.md
- [ ] Day-by-day Mongolia plan (8/13–8/17) — the trip-specific payoff, explicitly required
- [ ] Composition ideas — cheap to fold into workflow/Mongolia chapters, meaningfully raises photo quality
- [ ] Actual photos from each practice stage — explicitly required by PROJECT.md

### Add After Validation (v1.x)

- [ ] Troubleshooting FAQ — trigger: after the 7/17 West Coast session produces real failure cases to document
- [ ] Printable field cheat-sheet — trigger: once settings/workflow chapters are stable (near end of production)
- [ ] Image stacking for noise reduction — trigger: once basic post-processing is validated and the author confirms which OS/tool (Sequator vs. Starry Landscape Stacker) fits the actual editing setup

### Future Consideration (v2+)

- [ ] Panorama stitching — defer: meaningfully harder than single-frame shooting, easy to botch (flat arc, missing edges), not needed to "succeed in Mongolia" on the core promise
- [ ] Star trails — defer: distinct technique/settings from core Milky Way workflow; risks diluting a beginner's focus during limited practice time
- [ ] Time-lapse — defer: highest production complexity (endurance, storage, deflicker, export pipeline) of all differentiators, least essential to the core "one great Milky Way photo" promise

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Gear checklist | HIGH | LOW | P1 |
| Manual mode + crop-sensor settings | HIGH | LOW | P1 |
| NPF/500 rule (crop-adjusted) | HIGH | MEDIUM | P1 |
| Focusing on stars | HIGH | MEDIUM | P1 |
| RAW shooting | HIGH | LOW | P1 |
| Finding/timing Milky Way + moon/Bortle/weather | HIGH | MEDIUM | P1 |
| On-site field workflow | HIGH | MEDIUM | P1 |
| Basic post-processing | HIGH | MEDIUM-HIGH | P1 |
| Practice-session logbook (1–4) | HIGH | MEDIUM-HIGH | P1 |
| Day-by-day Mongolia plan | HIGH | HIGH | P1 |
| Composition ideas | MEDIUM | MEDIUM | P1 |
| Before/after photo galleries | HIGH | LOW-MEDIUM* | P1 |
| Troubleshooting FAQ | MEDIUM | MEDIUM | P2 |
| Printable cheat-sheet | MEDIUM | LOW | P2 |
| Image stacking (noise) | MEDIUM-HIGH | MEDIUM-HIGH | P2 |
| Panorama stitching | LOW-MEDIUM | HIGH | P3 |
| Star trails | LOW-MEDIUM | MEDIUM | P3 |
| Time-lapse | LOW | HIGH | P3 |

*Cost is mostly calendar-bound (waiting for practice sessions), not writing effort.

**Priority key:**
- P1: Must have for launch
- P2: Should have, add when possible
- P3: Nice to have, future consideration

## Competitor Feature Analysis

| Feature | Generic web tutorials (PhotoPills, Photography Life, Lonely Speck) | Typical "gear review" astro blogs | Our Approach |
|---------|--------------------------------------------------------------------|------------------------------------|--------------|
| Exposure settings guidance | Usually full-frame-first, crop-sensor treated as an afterthought footnote | Often skipped in favor of gear talk | Crop-sensor-first throughout, since that's the actual reader's gear |
| Shutter-limit rule | Increasingly cite NPF rule as more accurate than 500 rule | Rarely covered in depth | Teach NPF as primary, 500-rule as mental-math fallback, both crop-adjusted |
| Trip/date-specific planning | Generic "best months" charts, not tied to a specific traveler's itinerary | Not covered | Day-by-day Mongolia plan tied to actual trip dates and moon/core data — no generic source can replicate this |
| Practice progression | Not covered — these are reference articles, not training programs | Not covered | Structured 4-session practice arc is unique to this book's format |
| Noise reduction without tracker | Covered by a handful of specialist sites (Adam Thompson, Stephen Bay, Photofocus) but treated as an advanced/separate topic | Rarely covered | Integrated as the direct answer to "no tracker" constraint, sequenced right after basic post-processing |
| Actual reader's own photos as examples | Never — stock/portfolio images only | Sometimes gear photos only | Before/after galleries from the reader's own practice sessions — directly calibrates expectations |

## Sources

- [How to Photograph the Milky Way: A Beginner's Guide — AstroBackyard](https://astrobackyard.com/how-to-photograph-milky-way/)
- [Mastering Milky Way Photography Settings — PhotoPills](https://www.photopills.com/articles/milky-way-photography-settings)
- [Ultimate Milky Way Photography Cheat Sheet — PhotoPills](https://www.photopills.com/articles/milky-way-photography-cheat-sheet)
- [How to Photograph the Milky Way — A Detailed Guide for Beginners — Photography Life](https://photographylife.com/how-to-photograph-the-milky-way)
- [How to Photograph the Milky Way + 2026 Viewing Chart — Capture the Atlas](https://capturetheatlas.com/how-to-photograph-the-milky-way/)
- [Focusing at Night: A Tutorial — Lonely Speck](https://www.lonelyspeck.com/focusing-at-night/)
- [Focus to Infinity — Akari Photo Tours](https://akariphototours.com/resources/night-sky-photography-tutorials/infinity-focus/)
- [How To Stack Milky Way Images In Starry Landscape Stacker — Adam Thompson Photography](https://www.adamthompsonphoto.com/blog/how-to-stack-milky-way-images-in-starry-landscape-stacker)
- [How to Stack Milky Way Photos Using Sequator — Alexios Ntounas Photography](https://www.ntounas.gr/how-to-stack-milky-way-photos-using-sequator/)
- [Take Better Night Sky Photos with Image Stacking — Photography Life](https://photographylife.com/night-sky-image-stacking)
- [Image Stacking vs Tracking for Landscape Astrophotography — Stephen Bay Photography](https://stephenbayphotography.com/blog/image-stacking-vs-tracking-for-landscape-astrophotography/)
- [Best Time to See the Milky Way + 2026 Chart — Capture the Atlas](https://capturetheatlas.com/best-time-to-see-the-milky-way/)
- [Milky Way Photography Calendar — AstroBackyard](https://astrobackyard.com/milky-way-photography-calendar/)
- [Gobi Astrophotography: Desert Stars & Night Skies — Explorer](https://explorer.company/gobi-astrophotography/)
- [Bortle Scale — Wikipedia](https://en.wikipedia.org/wiki/Bortle_scale)
- [Mastering Milky Way Panoramas — CaptureLandscapes](https://www.capturelandscapes.com/milky-way-panorama-guide/)
- [How to Shoot an Award-Winning Milky Way Panorama — Capture the Atlas](https://capturetheatlas.com/how-to-shoot-milky-way-panorama/)
- [How to Plan, Shoot and Edit a Milky Way Arch Panorama — National Parks at Night](https://www.nationalparksatnight.com/blog/2019/8/24/how-to-plan-shoot-and-edit-a-milky-way-arch-panorama-part-i)
- [5 Common Mistakes Beginner Astrophotographers Make — Live Science](https://www.livescience.com/space/5-common-mistakes-beginner-astrophotographers-make-and-how-to-avoid-them)
- [12 Common Astrophotography Mistakes — BBC Sky at Night Magazine](https://www.skyatnightmagazine.com/astrophotography/astrophoto-tips/common-mistakes)
- [Moon Phase for August 13, 2026 — TheSkyLive](https://theskylive.com/moon/2026-08-13)
- [August 2026 Moon Phases Calendar — SpaceWeatherLive](https://www.spaceweatherlive.com/en/moon-phases-calendar/2026/8.html)
- [Moon Phase on July 17, 2026 — TheSkyLive](https://theskylive.com/moon/2026-07-17)
- MongolPhoto PROJECT.md (existing Active requirements and constraints)

---
*Feature research for: Beginner astrophotography / Milky Way travel tutorial (Korean mdBook)*
*Researched: 2026-07-09*
