# Project Research Summary

**Project:** MongolPhoto
**Domain:** Korean-language mdBook tutorial — untracked Milky Way / night-sky photography for a crop-sensor mirrorless beginner, built around two fixed real-world shoot events
**Researched:** 2026-07-09
**Confidence:** HIGH

## Executive Summary

MongolPhoto is a content project, not a software product: the "build" is a Korean mdBook tutorial that teaches a beginner to shoot untracked Milky Way photos on a crop-sensor mirrorless camera, structured as a training arc (4 home/coastal practice sessions -> 5 days in Mongolia) rather than a static reference article. Experts in this genre sequence content gear -> fundamentals -> field application -> post-processing, and this project's own PROJECT.md practice arc (집 1차 -> 서해안 2차 -> 집 3차 -> 집 4차 -> 몽골 Day1-5) already matches that pattern almost exactly -- the research confirms this is the right shape, not something that needs inventing.

**The single most important cross-cutting finding is a time dependency, not a content gap.** Today is 2026-07-09. The 서해안 (West Coast) practice shoot is 2026-07-17 -- only 8 days away -- and it is a hard, unrepeatable calendar gate: there is no "redo" slot before the Mongolia trip (8/13-8/17). Because Korean gear retailers need ~2-5 business days for delivery, gear must be finalized and ordered essentially immediately (by ~7/11) for it to be in hand, tested, and rehearsed at home (집 연습 1차) before 7/17. This means the **gear chapter, the fundamentals/settings chapter (manual mode, crop-corrected 500/NPF rule, manual-focus-at-infinity), and a usable practice-log template must all exist -- even in checklist/draft form -- before any other content work**, because Session 1 and Session 2 cannot be logged or rehearsed without them. The good news that offsets this pressure: moon phase is unusually favorable and should be stated explicitly rather than assumed -- 7/17 is a thin (~13%) waxing crescent that sets early, and 8/12 is a new moon (coinciding with a solar eclipse), so the entire 8/13-8/17 Mongolia window sits in near-ideal thin-crescent dark-sky conditions. This is a fortunate, externally-fixed coincidence the book should surface but not silently rely on (teach readers *how* to check moon phase themselves, per Pitfall 4).

The recommended approach: use mdBook 0.4.x (not 0.5.0, to avoid absorbing migration risk against a hard deadline) with GitHub Actions -> GitHub Pages deploy, self-hosted Noto Sans KR + `keep-all` line-breaking for Korean typography, and a repeatable practice-log / two-pass field-day template (plan pass pre-trip, results pass post-trip) so Mongolia day chapters can ship useful pre-trip planning content instead of sitting empty until 8/17. Key risks beyond the 7/17 gate: crop-factor errors in the 500 rule (star trailing invisible until 100% zoom), missed infinity focus (the #1 beginner failure, must be drilled at home before any field night), and treating gear recommendations as low-priority when they actually have the longest external lead time in the whole project and directly serve the "지인들도 따라 구매할 수 있게" goal.

## Key Findings

### Recommended Stack

Two independent stacks: a **publishing toolchain** (mdBook 0.4.4x + GitHub Actions/Pages, self-hosted Korean web fonts, resized/EXIF-stripped JPEGs, no Git LFS at this scale) and an **untracked wide-field gear/software kit** (fast APS-C wide lens, lightweight carbon tripod, built-in intervalometer, PhotoPills/Stellarium for planning, Sequator/Starry Landscape Stacker for noise-reduction stacking, free frame-stacking taught before any paid denoiser).

**Core technologies:**
- mdBook 0.4.4x (not 0.5.0) -- battle-tested, zero migration risk against the hard deadline; already scaffolded via existing `/mdbook`/`/pages` skills
- GitHub Actions -> GitHub Pages (OIDC-based `actions/deploy-pages`) -- the 2026 GitHub-blessed build+deploy pattern, matches the repo's existing `/pages` skill
- Self-hosted Noto Sans KR (woff2) + `word-break: keep-all` -- prevents inconsistent CJK rendering across readers' OS/browsers and mid-syllable line breaks
- Sigma 10-18mm F2.8 DC DN (or mount equivalent) as the default single-lens gear pick -- widest one-lens value for both Milky Way and daytime travel use; **camera mount is unconfirmed and is the single biggest open gear variable -- must be resolved before finalizing the gear chapter**
- Sequator (Windows) / Starry Landscape Stacker (Mac) -- the correct, purpose-built tool category for untracked star+foreground stacking; OS choice must be confirmed with the actual editing machine

### Expected Features

This is a content project -- "features" mean chapters/sections. Full detail in FEATURES.md; all P1 items are already implied by PROJECT.md's Active requirements.

**Must have (table stakes):**
- Gear checklist (crop mirrorless, travel-light, one fast wide lens as the highest-leverage purchase)
- Manual-mode/exposure-triangle fundamentals, taught before any numeric rule
- Crop-corrected NPF rule (primary) with 500-rule as mental-math fallback -- must show worked examples with the actual recommended lens's focal length
- Manual-focus-at-infinity method -- drilled at home before any field night, not learned live
- RAW shooting, Milky Way timing/moon-phase/Bortle awareness, weather checking, on-site field workflow, basic RAW post-processing, the 4-session practice logbook, day-by-day Mongolia plan, composition ideas, and real photos from each stage

**Should have (competitive differentiators):**
- Day-by-day Mongolia shooting plan tied to actual dates/moon/core-position data (no generic tutorial can replicate this)
- Image stacking for noise reduction (the direct technical answer to "no tracker")
- Troubleshooting FAQ -- best drafted *after* the 7/17 session produces real failure cases
- Printable field cheat-sheet -- assembled last, once settings/workflow are stable
- Before/after photo galleries from actual practice sessions (required by PROJECT.md, gated by sessions happening on schedule)

**Defer (v2+):**
- Panorama stitching, star trails technique, time-lapse -- all meaningfully harder, distinct workflows from the core "one great Milky Way photo" promise, and not needed to succeed on this trip

### Architecture Approach

A content architecture organized as six parts mirroring the reader's learning path and the author's photo pipeline in parallel: 소개 -> 1부 장비+기초 -> 2부 연습 로그(x4, repeatable template) -> 3부 몽골(x5 days, two-pass plan/results template) -> 4부 후보정 -> 부록. mdBook's `src/` tree should mirror this 1:1 with numbered folders (`01-gear/` ... `06-appendix/`) and an `images/` tree that mirrors the chapter tree (not a flat photo dump). RAW files never enter `src/` or the repo.

**Major components:**
1. **장비 + 기초 (Gear + Fundamentals)** -- hard prerequisite gate; must exist (even as a checklist) before Practice Session 1 can be logged
2. **연습 로그 x4 (Practice logbook, repeatable template)** -- goal -> setup -> settings -> results -> lessons; each session's lessons feed the next
3. **몽골 Day1-5 (two-pass field-day template)** -- plan pass (date-independent: moon, GPS, core position) written pre-trip; results pass written post-trip, since this content cannot exist before 8/13
4. **후보정 (Post-processing)** -- written in two passes: an early skeleton (needed for Session 4's rehearsal) and a fully-illustrated final pass using Mongolia RAWs
5. **부록 (Appendices)** -- terminal, distillation-only, finalized last

### Critical Pitfalls

1. **Gear/fundamentals not ready before 7/17 (PRODUCTION, unrecoverable if missed)** -- order gear by ~7/11, draft (not polish) gear + settings + focus checklists before 7/17, and complete a home rehearsal (연습 1차) before the West Coast night. This is the highest-leverage risk in the entire project.
2. **500-rule crop-factor miscalculation (star trailing)** -- must teach the crop-corrected formula with the *actual* recommended lens's focal length, prefer NPF rule/PhotoPills over the raw 500 rule for modern high-MP APS-C sensors.
3. **Missed infinity focus** -- the #1 cited beginner failure mode; must be taught as Live View 5-10x magnify + manual adjust + gaffer-tape lock, and rehearsed at home before any real night sky.
4. **Gear chapter shipped too late for friends to buy their own kit (PRODUCTION)** -- treat the gear chapter as a standalone, earliest-possible, independently-shippable unit, decoupled from the rest of the book's completion.
5. **High-ISO noise with no stacking strategy** -- teach 10-20 frame bursts + Sequator/Starry Landscape Stacker as the free, tracker-free noise-reduction lever; validate the full stacking workflow end-to-end in 연습 4차, before Mongolia's unrepeatable nights.

## Implications for Roadmap

Based on research, suggested phase structure -- driven by hard external dates (7/17, 8/12-8/17), not just logical content dependency:

### Phase 1: mdBook Skeleton + Gear + Fundamentals (URGENT -- must complete before 7/17)
**Rationale:** This is the single highest-leverage, time-critical phase in the project. Gear must be ordered within ~1-2 days of roadmap start (assume 2-5 business day delivery) to arrive with margin before 7/17. Fundamentals (manual mode, crop-corrected NPF/500 rule, manual-focus-at-infinity, planning apps) is a hard prerequisite for logging Practice Session 1 -- readers/the author cannot describe settings they haven't been taught. The practice-log template must also exist before Session 1 so its "설정" section matches the vocabulary just defined.
**Delivers:** `book.toml`/`SUMMARY.md` skeleton with stub chapters, 소개, 1부 장비 (with mount confirmed), 1부 기초, and the reusable `_template.md` practice-log skeleton -- at minimum as checklists, not polished prose.
**Addresses:** Gear checklist, manual-mode fundamentals, crop-sensor starting settings, NPF/500 rule, manual-focus method, RAW shooting, planning-app guidance (all P1 in FEATURES.md).
**Avoids:** Pitfall 1 (gear/settings not ready before 7/17 -- unrecoverable), Pitfall 14 (gear chapter published too late for friends), Pitfall 2 (500-rule crop-factor error), Pitfall 3 (missed infinity focus), Pitfall 9 (forgetting RAW).

### Phase 2: Practice Session 1 (집) + West Coast Session 2 (7/17, hard date gate)
**Rationale:** Session 1 (home) should land before 7/17 so its lessons inform Session 2; Session 2 is a hard, unrepeatable calendar gate on 2026-07-17 -- content for this session literally cannot be written before that date, and there is no do-over before Mongolia.
**Delivers:** 연습 1차 (home, rehearse manual focus + intervalometer + settings on distant lights) and 연습 2차 (서해안, first real field test) chapters, using the Phase 1 template; first real sample photos.
**Uses:** Fundamentals content and gear from Phase 1; PhotoPills/Stellarium for moon/core timing (favorable: 7/17 is a thin ~13% waxing crescent setting early).
**Implements:** Repeatable Practice-Log Template pattern (ARCHITECTURE.md Pattern 1).
**Avoids:** Pitfall 6 (dew/condensation -- coastal-specific risk, needs explicit callout), Pitfall 8 (tripod wind instability on open beach), Pitfall 15 (missing supporting content -- bring a content-capture checklist to the shoot itself).

### Phase 3: Practice Sessions 3-4 (집, review + final rehearsal) + Post-processing Skeleton
**Rationale:** Session 3 reviews/corrects Session 2's real mistakes (must follow 7/17). Session 4 is the final rehearsal and explicitly needs to rehearse the post-processing/stacking workflow per PROJECT.md, so a post-processing skeleton (RAW develop -> stacking -> editing -> export outline, using Session 1-3 RAWs as examples) must exist by this point -- it doesn't yet need Mongolia photos.
**Delivers:** 연습 3차, 연습 4차 chapters; 4부 후보정 skeleton pass (structure + Sequator/Starry Landscape Stacker workflow, validated end-to-end).
**Addresses:** Image stacking for noise reduction (differentiator), basic RAW post-processing (P1).
**Avoids:** Pitfall 5 (high-ISO noise with no stacking strategy -- validated here, not first-tried on unrepeatable Mongolia photos), Pitfall 18 (battery/card sizing for the stacking workflow's higher frame count).

### Phase 4: Mongolia Trip Planning (pre-trip, date-independent content)
**Rationale:** Per-date content (moon phase table, GPS waypoints, galactic-core azimuth/altitude per night, general itinerary) is stable regardless of what's actually shot, so it should be written well before 8/13 -- this is also the differentiator PROJECT.md most explicitly requires (day-by-day plan) and needs the trip's actual site list to be fully useful.
**Delivers:** `04-mongolia/overview.md` + Day1-5 "사전 계획" (plan pass only) using the two-pass field-day template.
**Addresses:** Day-by-day Mongolia plan, composition ideas (differentiators).
**Avoids:** Pitfall 4 (bright-moon timing -- state the favorable 8/12 new-moon coincidence explicitly, but teach the underlying check method), Pitfall 12 (core position/timing not adjusted for Mongolia's latitude and specific August dates), Pitfall 13 (no light-pollution/site scouting).

### Phase 5: Mongolia Trip Results + Full Post-Processing + Troubleshooting FAQ (after 8/17)
**Rationale:** Results content (real photos, field notes) cannot exist before the trip happens; the post-processing chapter's final polish needs the trip's best RAWs to be compelling; the troubleshooting FAQ is best populated with real failures from 7/17 (and any Mongolia mistakes) rather than hypothetical ones.
**Delivers:** Day1-5 "촬영 결과" (results pass), 4부 후보정 full/final pass with real before/after screenshots, troubleshooting FAQ.
**Addresses:** Before/after photo galleries (P1, required by PROJECT.md), troubleshooting FAQ (differentiator).
**Avoids:** Pitfall 15 (missing supporting content -- should already be mitigated if the content-capture checklist from Phase 2 was used consistently across all sessions).

### Phase 6: Appendix + Final Polish + Deploy Verification
**Rationale:** Appendices are pure distillation of everything above and should reflect what *actually* mattered across all sessions/the trip, not a guess made in Phase 1 -- must be last.
**Delivers:** 치트시트, 촬영 전 체크리스트, 앱 가이드, 용어사전; final SUMMARY.md<->filesystem sync check, image alt-text/caption audit, GitHub Pages deploy verification.
**Addresses:** Printable field cheat-sheet (differentiator).
**Avoids:** Pitfall 17 (Korean typography/unoptimized image sizes -- should be caught here, but the image-export preset decision itself belongs in Phase 1's technical setup, not deferred to this phase).

### Phase Ordering Rationale

- **Ordering is date-driven, not just dependency-driven.** The 7/17 West Coast session and the 8/13-8/17 Mongolia trip are fixed, unrepeatable real-world gates; Phase 1 has only ~8 days of runway from project start and is flagged by research as the project's single biggest risk if it slips.
- **Content dependency also happens to match date order here**, which is fortunate: gear -> fundamentals -> practice -> field-plan -> field-results -> post-processing -> appendix is both the logical reader path (ARCHITECTURE.md Data Flow) and the necessary write order given the calendar.
- **Two-pass field-day and practice-log templates avoid the "write nothing until the trip is over" anti-pattern** -- planning content ships pre-trip, results content ships post-trip, so the book is never blocked entirely on a future date.
- **Gear and post-processing are each split into an early minimal version and a later refined version** specifically to unblock the phases that depend on them without waiting for full polish.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 1 (Gear):** Camera mount is unconfirmed (biggest open variable in STACK.md) -- needs a quick research/confirmation pass before lens/tripod recommendations can be finalized; Korean retail pricing/availability (11번가, 쿠팡 등) should be verified since STACK.md pricing is US-retail-approximate.
- **Phase 4 (Mongolia planning):** Per-date galactic-core azimuth/altitude and moonrise/moonset times for Ulaanbaatar-area coordinates were blocked (403) during research and should be re-verified with PhotoPills/Stellarium/timeanddate.com closer to the trip, not taken solely from this research.
- **Phase 3 (Stacking):** OS split (Sequator/Windows vs. Starry Landscape Stacker/Mac) depends on which machine the author/friends actually edit on -- confirm before writing the stacking chapter.

Phases with standard patterns (skip research-phase):
- **Phase 1 (mdBook skeleton/toolchain):** mdBook + GitHub Actions/Pages pattern is well-documented and already partially scaffolded via existing repo skills.
- **Phase 2/3 (Practice templates):** Repeatable logbook template is fully specified in ARCHITECTURE.md with a ready-to-use skeleton.
- **Phase 6 (Appendix):** Pure distillation, low ambiguity.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH (publishing toolchain) / MEDIUM-HIGH (gear) | mdBook/GitHub Pages toolchain verified against official docs and CHANGELOG; gear/software prices are US-retail approximations and camera mount is unconfirmed -- needs validation before the gear chapter is finalized |
| Features | HIGH | Cross-verified against multiple authoritative photography-teaching sources plus live moon-phase/Bortle data for the actual trip dates |
| Architecture | HIGH | mdBook structural mechanics are simple and well-documented; content ordering is derived directly from PROJECT.md's own stated practice->trip timeline and cross-checked against a published beginner astrophotography book's structure |
| Pitfalls | HIGH (shooting technique, date-driven production risk) / MEDIUM (Mongolia-specific conditions) | Shooting pitfalls cross-verified across multiple photography sources; Mongolia-specific conditions (temperature, humidity) aggregated from travel-blog sources, not personal fieldwork; moonrise/moonset time lookups for Ulaanbaatar were blocked during research |

**Overall confidence:** HIGH

### Gaps to Address

- **Camera mount unconfirmed** -- the single biggest open variable across STACK.md and FEATURES.md; resolve in Phase 1 before finalizing lens/tripod recommendations.
- **Korean retail pricing/availability** -- STACK.md pricing is US-retail-approximate; verify against 11번가/쿠팡/B&H 해외구매 before publishing the gear chapter, since friends following along will use it to actually buy gear.
- **Ulaanbaatar-area moonrise/moonset and per-date core azimuth/altitude** -- lookups were blocked (403) during research; re-verify with PhotoPills/Stellarium/timeanddate.com closer to Phase 4.
- **Editing OS (Windows vs. Mac)** -- determines whether Sequator or Starry Landscape Stacker is taught as the default stacking tool in Phase 3; confirm with the author/friend group.
- **Mongolia itinerary site list** -- the day-by-day plan (Phase 4) needs actual stop locations/GPS to be maximally useful, not just generic astronomy data; flag as an input needed from the user, not purely a research gap.

## Sources

### Primary (HIGH confidence)
- [rust-lang/mdBook CHANGELOG](https://github.com/rust-lang/mdBook/blob/master/CHANGELOG.md) -- 0.5.0 breaking-change scope
- [actions/starter-workflows pages/mdbook.yml](https://github.com/actions/starter-workflows/blob/main/pages/mdbook.yml) -- GitHub Actions build+deploy pattern
- [SUMMARY.md - mdBook Documentation](https://rust-lang.github.io/mdBook/format/summary.html) -- chapter grammar, nesting, draft-chapter syntax
- [500 Rule vs NPF Rule -- Photography Life](https://photographylife.com/500-rule-vs-npf-rule)
- [Focusing at Night: A Tutorial -- Lonely Speck](https://www.lonelyspeck.com/focusing-at-night/)
- [Moon Phase on July 17, 2026 -- TheSkyLive](https://theskylive.com/moon/2026-07-17) / [Moon Phase for August 13, 2026 -- nineplanets.org](https://nineplanets.org/moon/phase/8-13-2026/) / [New Moon of August 2026 -- TheSkyLive](https://theskylive.com/new-moon-august-2026)
- Repo-local skills: `mdbook-docs-images.skill.md`, `markdown-image-insertion.skill.md`, `mdbook-utils.skill.md`
- `.planning/PROJECT.md` -- authoritative source for practice-session structure, trip dates, scope constraints

### Secondary (MEDIUM confidence)
- [Sigma 10-18mm F2.8 DC DN product page](https://www.sigmaphoto.com/10-18mm-f2-8-dc-dn-c), [Viltrox AF 13mm F1.4 product page](https://viltrox.com/products/af-13mmf14-z-mount-aps-c-prime-lens-for-nikon-z) -- lens specs/pricing (US retail, region-dependent)
- [astrobackyard.com Milky Way lens guide](https://astrobackyard.com/best-milky-way-lens/), [capturetheatlas.com lens guide](https://capturetheatlas.com/best-lenses-milky-way-photography/) -- gear consensus
- [The Beginner's Guide to Astrophotography (Mike Shaw) -- structure summary](https://astro.pics/book-review-the-beginners-guide-to-astrophotography/) -- confirms genre structural pattern
- [몽골 은하수 시기 총정리 -- 트립스토어 블로그](https://www.tripstore.kr/blog/%EB%AA%BD%EA%B3%A8-%EC%9D%80%ED%95%98%EC%88%98-%EC%8B%9C%EA%B8%B0-%EB%82%A0%EC%94%A8-%EA%BF%80%ED%8C%81) -- Mongolia-specific conditions

### Tertiary (LOW confidence)
- Ulaanbaatar moonrise/moonset direct lookups -- blocked (403) during research; needs re-verification with an interactive tool before Phase 4
- Korean retail pricing for gear -- not directly checked, US pricing used as a proxy

---
*Research completed: 2026-07-09*
*Ready for roadmap: yes*
