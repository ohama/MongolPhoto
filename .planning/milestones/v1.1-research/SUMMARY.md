# Project Research Summary

**Project:** MongolPhoto v1.1 — 드론 사진 파트 추가 (몽골 사진 가이드로 확장)
**Domain:** Korean mdBook travel/technique guide — beginner drone aerial photography (DJI Mini 5 Pro), inserted as a new part *before* the existing Milky Way astrophotography content
**Researched:** 2026-07-13
**Confidence:** MEDIUM-HIGH (hardware/architecture/technique are well-grounded; Mongolia drone *legality* specifics are the one genuinely soft spot and must ship with explicit honesty caveats)

## Executive Summary

This is a content-only addition to an already-shipped, working mdBook: a new "드론 사진" part goes in *before* the existing astro part, and the book's title/framing broadens from "몽골 은하수 촬영기" to "몽골 사진 가이드." The hardware premise is real and verified — DJI Mini 5 Pro (launched 2025-09-17) has a 1-inch 50MP sensor, DNG RAW, AEB, and built-in panorama/hyperlapse modes, which is more than enough for a photo-first, daytime/twilight-focused travel guide. Architecturally this is low-risk: mdBook's `SUMMARY.md` fully decouples reading order from folder names (proven by the existing book's own unlabeled trailing parts), so the drone part can be inserted first by adding two new folders (`09-drone/`, `10-drone-sites/`) and editing only `SUMMARY.md` — no renumbering of the existing `01-08` folders, no cascading link breakage. Content should aggressively reuse what v1.0 already built: the RAW-develop workflow, the Gobi GPS table, the cold-battery-drain lesson, the glossary, and the five-site page template — the drone part is additive, not a parallel rebuild.

The one finding that should shape the roadmap more than any other: **Mongolia drone legality is a genuine, only-partially-resolved risk, and it is also an honesty/credibility issue for the book, not just a content-completeness issue.** A primary source (CAAM Part 101) was located and read, confirming altitude (120m/400ft), 4km-from-aerodrome, VLOS-only, daylight-only, and consent-for-overflight rules with moderate-high confidence. But the commonly-repeated "sub-250g tourist exemption," registration fee, and processing time appear *only* in mutually-copying blog aggregator content — no primary-source confirmation exists — and national-park-specific drone rules for Yolyn Am / Gobi Gurvansaikhan (which also covers Khongoryn Els) could not be sourced at all. Compounding this, the Mini 5 Pro's "sub-250g" status is itself fragile: 249.9g on the standard battery but ~297-299g on the Plus battery, with a further +/-4g manufacturing tolerance even on the standard configuration. The book must reuse v1.0's existing "미확인 — 출발 전 재확인 필요" honesty pattern for every unverified legal claim, put this content up front (not buried in an appendix), and explicitly tell the reader that night/Milky Way drone shots are excluded for *two* independent reasons — CAAM's daylight-only rule *and* Mini-class hardware limits (max ~8s exposure, gimbal micro-vibration, no reliable star autofocus) — so the exclusion reads as a taught fact, not a silent gap.

The recommended approach: treat regulations/safety as the mandatory first conceptual gate (stated early in the overview, detailed in a dedicated, heavily-caveated reference page written last for maximum verification time), teach camera settings (RAW/ND/histogram, fixed f/1.8 aperture) before composition, mirror the existing `04-mongolia/` five-site template exactly for `10-drone-sites/`, and land per-site hazard notes (wind at Khongoryn Els, canyon walls/GPS degradation at Yolyn Am, national-park re-verification at both) rather than one generic warning. Software needs almost no new research — darktable/Lightroom/Hugin/PTGui are reused unchanged for drone DNG files, and DJI's own Fly app handles in-drone panorama/hyperlapse, keeping the "few consistent tools" principle from v1.0 intact.

## Key Findings

### Recommended Stack

Full detail: `.planning/research/STACK.md`. The DJI Mini 5 Pro is a real, verified 2025-09 product (confirmed directly against DJI's official spec page): 249.9g on the standard battery (250g+ on the Plus battery — this crossing point matters legally, see Pitfalls), 1-inch 50MP CMOS with DNG RAW and AEB bracketing, 36min/52min flight time, 12 m/s wind-resistance rating, and built-in panorama (Sphere/180°/Wide/Vertical/Free) and hyperlapse modes with in-app auto-stitch. No new post-processing tools are needed — v1.0's existing darktable/Lightroom (RAW develop) and Hugin/PTGui (manual panorama, optional/advanced) stacks apply unchanged to 50MP drone DNG files, since DNG is DNG regardless of source. Only new software surface is DJI Fly (mandatory, free, drone control app) and DJI LightCut (optional, mentioned briefly, video-editing only — out of scope given the book's photo-first/video-light framing).

**Core technologies:**
- DJI Mini 5 Pro (hardware, user-owned): 1" 50MP sensor + DNG RAW + AEB — sufficient for photo-first daytime/golden-hour aerial work without needing a larger drone class
- DJI Fly (app, free): required for flight, in-app panorama/hyperlapse capture, histogram/exposure display
- darktable / Lightroom (reused from v1.0): RAW develop workflow is tool-identical for drone DNG — link to existing chapter, cover only the delta (lens distortion, dust spots, low-noise-need daylight ISO)
- Hugin / PTGui (reused from v1.0, optional): manual high-res panorama stitching, positioned as an "advanced option" beyond DJI Fly's built-in auto-stitch

### Expected Features

Full detail: `.planning/research/FEATURES.md`. The feature set follows a strict dependency chain: regulations/safety -> camera settings -> composition/flight technique -> light -> battery -> processing, with per-site aerial composition as the book's signature differentiator (extends v1.0's proven site-specific-guidance strength into the air).

**Must have (table stakes, P1):**
- 드론 사진 개요/매력 + 책 제목·소개 재구성 ("몽골 사진 가이드")
- 비행 규제·허가 (Mongolia CAAM) — must ship even partially unverified, with honesty caveats
- 비행 전 체크리스트 & 안전 (scannable checklist, not prose)
- DJI Mini 5 Pro 카메라 설정 (RAW/DNG, 노출, ND필터, 히스토그램, fixed f/1.8 aperture)
- 항공 구도 기초 (top-down/45°/leading lines/scale)
- 사진 촬영을 위한 비행 기초 (hover/orbit/reveal — photography subset, not full videography)
- 빛 읽기 — 골든/블루아워 (aerial-specific: shadow behavior from above)
- 배터리 관리 & RTH (cold/heat drain, terrain-aware RTH altitude)
- 고비 사막 환경 대응 (바람·모래·저온·원격지)
- 드론 정지 사진 RAW 보정 (link to existing chapter + delta only)
- 명소별 항공 구도 아이디어 (5곳, added as subsections/pages, reusing existing terrain research)
- 항공 파노라마 (brief — DJI Fly auto-stitch is *easier* than the astro book's manual panorama)
- 하이퍼랩스 (간략, one page only — Circle mode as the beginner default)
- 원격지 패킹·충전 전략 (battery count x 5-day itinerary math)
- 드론 참고 자료 부록 (규제 링크 반드시 포함, heavily caveated)

**Should have (differentiators, already committed for v1.1):**
- Per-site aerial composition ideas grounded in v1.0's existing terrain descriptions (차강소브라가 cliff striation, 바양작 ridge/color, 홍고린엘스 dune pattern+scale, 욜링암 canyon slot-shape — genuinely drone-exclusive angle, 바가가즈링 촐로 arch/orbit)
- 원격지 패킹·충전 전략 tied to the actual Aug 13-17 Gobi itinerary

**Defer (v2+ / P2-P3):**
- 전/후 보정 비교 (드론) — blocked on real flight photos existing
- 명소별 실제 항공 사진 채우기 — same production dependency
- 시네마틱 영상 심화 (편집/컬러그레이딩), FPV 콘텐츠, 야간 드론 촬영 — explicitly out of scope per project decisions (photo-first, video-brief, no night)

### Architecture Approach

Full detail: `.planning/research/ARCHITECTURE.md`. mdBook's `SUMMARY.md` is the sole source of reading order — folder names/numbers are cosmetic and already inconsistent with order in the shipped v1.0 book (`06-bonus`/`07-appendix`/`08-references` are unlabeled trailing parts today). This means the drone part can be inserted as "1부 · 드론 사진" ahead of everything else purely by editing `SUMMARY.md`, adding two new folders, and relabeling the existing parts' `#` headers (2부, 3부, ...) — zero renames of `01-08` and zero cascading relative-link breakage. `book.toml` has `create-missing = false`, so stub files must exist for every `SUMMARY.md` line before the first build — this governs write order (skeleton+stubs first, prose after).

**Major components:**
1. `09-drone/` (index, basics, settings, composition) — parallels `01-gear/` + `02-fundamentals/` structurally; concept -> hardware -> settings -> composition progression
2. `10-drone-sites/` (overview + 5 site files) — mirrors `04-mongolia/` file-for-file; links forward to `04-mongolia/overview.md`'s GPS table rather than duplicating coordinates (single source of truth)
3. `08-references/drone-mongolia-regulations.md` + `drone-gear-and-tutorials.md` — land inside the *existing* references folder (precedent: `mongolia-travel-info.md` is already non-astro-specific there); rendered early in the TOC via a new unnumbered "드론 참고 자료" `SUMMARY.md` part, physically separate from folder location
4. `introduction.md` / `book.toml` / `README.md` — title/description/opening broadened to "몽골 사진 가이드," including a rewrite of the numbered "이 책을 읽는 법" list to reflect the new 6-part structure
5. `07-appendix/glossary.md` — extended in place with drone terms (짐벌, RTH, 탑다운 뷰, ND필터 등), not split into a separate glossary

Recommended write order: (1) SUMMARY.md skeleton + stub files + relabeled parts -> (2) title/intro broadening -> (3) `09-drone/` content -> (4) `10-drone-sites/` content -> (5) `08-references/drone-*.md` last, since regulation content needs the most verification time and should link back to already-stable technique chapters.

### Critical Pitfalls

Full detail: `.planning/research/PITFALLS.md`. Nine pitfalls identified; the first two are the ones with real legal/safety stakes and no clean resolution from research alone.

1. **Treating third-party "Mongolia drone law" blogs as verified fact** — Nearly identical figures (30,000 MNT fee, 5-day processing, sub-250g exemption) repeat verbatim across blog aggregators with no independent corroboration; CAAM's own Part 101 (read directly) confirms altitude/VLOS/4km/daylight-only/consent rules but contains **no sub-250g exemption clause at all**. Fix: state only what the primary source confirms as fact; mark registration fee/process/weight-exemption explicitly as "미확인 — 출발 전 CAAM(ops@mcaa.gov.mn) 재확인 필요," reusing v1.0's existing honesty pattern verbatim.
2. **Assuming (or inventing) national-park drone rules for Yolyn Am / Khongoryn Els** — No source (CAAM, park's own pages, Mongolia's 1994 Special Protected Area law) confirms an explicit drone rule for Gobi Gurvansaikhan National Park (which covers both Yolyn Am and Khongoryn Els). Fix: frame as "현지 관리소/가이드를 통해 도착 즉시 재확인" and always provide a ground-level no-fly fallback (already exists in v1.0), rather than stating either "허용" or "금지" as fact.
3. **Underestimating Gobi wind for a sub-250g airframe** — 12 m/s rated resistance is a survivability ceiling, not a safe operating margin, and afternoon Gobi wind builds through the day. Fix: teach a personal wind ceiling well below rated max, tie fly-early advice to *both* light and wind, and give Khongoryn Els (open dune sea, highest exposure) its own explicit caution rather than one generic warning.
4. **Overpromising night/Milky Way drone capability** — A reader finishing the existing astro chapters may assume the drone extends to night shots; Mini-class hardware (~8s max exposure, gimbal micro-vibration, no reliable star-focus) makes this fail even where legal. Fix: state the daytime/twilight-only scope explicitly and early in the drone overview chapter, tied to *both* the legal reason (CAAM daylight-only) and the hardware reason — cheap to fix, high-cost if silently assumed.
5. **Blown-out highlights / skipping RAW/ND on bright dunes and cliffs** — Bright reflective sand/rock clips highlights in-camera (unrecoverable), and JPEG-only capture breaks the reused RAW-develop workflow. Fix: RAW/DNG as the default instruction from the first settings page (framed explicitly as required to reuse the existing post-processing chapter), teach histogram/zebra-based exposure checks over trusting the glare-affected live-view screen, and recommend AEB for high-contrast scenes.

## Implications for Roadmap

Based on combined research, suggested phase structure (four phases, matching the architecture's recommended write order and the pitfalls' verification-time requirements):

### Phase 1: Structure & Title Broadening
**Rationale:** `book.toml`'s `create-missing = false` requires every `SUMMARY.md` line to resolve to a real file before any build succeeds — skeleton-first avoids build breakage throughout the rest of the milestone. Title/intro broadening should happen early since it reframes reader expectations for everything that follows, not be bolted on at the end.
**Delivers:** Final `SUMMARY.md` shape (drone part first, astro parts relabeled 2부-5부, new "드론 참고 자료" part), stub files for all new pages, `book.toml` title/description updated, `introduction.md` and `README.md` rewritten for the dual-track ("드론 사진과 은하수 사진") framing including the renumbered "이 책을 읽는 법" list.
**Addresses:** 드론 사진 개요·매력 + 제목 재구성 (FEATURES.md table stakes)
**Avoids:** Anti-Pattern 1 from ARCHITECTURE.md (renumbering 01-08 folders) — confirms this is unnecessary before any content work begins

### Phase 2: Drone Fundamentals (09-drone/)
**Rationale:** Concept -> hardware -> settings -> composition is the same progression logic v1.0 already used for 01-gear -> 02-fundamentals; camera settings (RAW/ND/histogram, fixed-aperture) must precede composition teaching, and the scope boundary (no night, why) must be stated here before any flight-technique content, per the UX pitfall of "burying the legal/scope caveat."
**Delivers:** `09-drone/index.md` (overview, magnetism, explicit day/twilight-only scope statement with both legal and hardware reasons), `dji-mini5pro-basics.md` (operation, safety), `dji-mini5pro-settings.md` (RAW/DNG, AEB, ND, histogram, fixed f/1.8), `composition.md` (top-down/45°/leading lines/scale + brief golden/blue hour + brief video literacy).
**Uses:** STACK.md hardware specs (weight/battery/sensor/AEB/panorama modes), reused RAW-develop link to `05-postprocessing/raw-develop.md`
**Implements:** ARCHITECTURE.md Component 1 (`09-drone/`), Pattern 3 (glossary extended in place)

### Phase 3: Site-Specific Aerial Guides (10-drone-sites/)
**Rationale:** This is FEATURES.md's single highest-leverage differentiator and the book's core competitive moat extended into the air — it's cheap because it reuses v1.0's existing terrain research, but it must come after Phase 2 because composition/settings concepts are prerequisites for site-specific application.
**Delivers:** `10-drone-sites/overview.md` (links forward to `04-mongolia/overview.md` GPS table, does not duplicate it) + 5 site pages (차강소브라가, 바양작, 홍고린엘스, 욜링암, 바가가즈링 촐로), each with its own hazard note (not one shared warning) — Khongoryn Els gets explicit wind/sand emphasis, Yolyn Am gets canyon-wall RTH/GPS-degradation emphasis, both Yolyn Am *and* Khongoryn Els get an explicit "국립공원 — 현지 재확인 필요" caveat since both fall inside Gobi Gurvansaikhan National Park.
**Addresses:** 명소별 항공 구도 아이디어 (FEATURES.md differentiator)
**Avoids:** Pitfall 2 (national park uncertainty), Pitfall 3 (generic wind warning instead of per-site), Pitfall 6 (generic RTH instead of terrain-specific), Pitfall 7 (blown highlights at the two brightest sites)

### Phase 4: Drone Reference & Regulations (08-references/)
**Rationale:** This is the milestone's highest-stakes, most verification-dependent content — per ARCHITECTURE.md's recommended build order, reference material should be written last so content chapters are stable to link back into, and per PITFALLS.md this is "the single most important chapter in the entire v1.1 milestone to get the caveat framing right." Writing it last also maximizes the time available to re-verify CAAM Part 102 and any newly-published sources before publish.
**Delivers:** `08-references/drone-mongolia-regulations.md` (CAAM Part 101-confirmed rules stated as fact; registration fee/process/sub-250g exemption explicitly marked "미확인"; national park ambiguity stated plainly with no invented rule) and `drone-gear-and-tutorials.md` (DJI spec citation with +/-4g tolerance caveat, curated tutorial/gallery links); final pass across all four phases confirming every specific legal/weight number carries either a primary citation or a visible caveat tag (the "Looks Done But Isn't" checklist from PITFALLS.md).

### Phase Ordering Rationale

- **Regulations content is written last but must be summarized first to the reader:** ARCHITECTURE.md's build-order logic (verification-heavy content benefits from stable chapters to link into) and FEATURES.md/PITFALLS.md's UX requirement (legal caveats must appear at the entry point, not buried in an appendix) are not in conflict — Phase 2's `09-drone/index.md` carries a short, prominent regulation/scope summary, while Phase 4 produces the full, heavily-caveated detail page it links to.
- **Site-specific content depends on fundamentals being taught first:** composition/settings concepts (Phase 2) are prerequisites the per-site pages (Phase 3) apply, matching FEATURES.md's explicit dependency graph (규제->체크리스트->설정->구도->명소별).
- **This ordering directly avoids Pitfall 1, 2, and the UX "buried legal content" pitfall:** structuring phases this way forces the caveat framing to be decided in Phase 2 (early, reader-facing) and rigorously verified in Phase 4 (late, maximum research time) rather than either omitted or rushed.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 4 (드론 참고 자료):** needs a `/gsd:research-phase` pass specifically to attempt reading CAAM Part 102 (registration/certification — located but not yet text-extracted) and to re-check whether any newer primary-source Mongolia drone regulation has been published since this research pass; also worth attempting to reach Gobi Gurvansaikhan National Park's own administration for a direct drone-policy answer before falling back to the "재확인 필요" framing.
- **Phase 3 (10-drone-sites), Yolyn Am and Khongoryn Els sections specifically:** the national-park ambiguity is unresolved at the research stage — planning should decide the exact caveat wording once, then apply it consistently rather than re-deciding per site.

Phases with standard patterns (skip research-phase):
- **Phase 1 (structure/title):** mechanical `SUMMARY.md`/`book.toml`/`introduction.md` editing, fully specified by ARCHITECTURE.md with concrete before/after examples — no unresolved unknowns.
- **Phase 2 (드론 기초):** DJI Mini 5 Pro hardware facts are HIGH confidence (official spec page verified directly); composition/settings teaching patterns are well-established and cross-verified across many independent tutorial sources.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH (hardware) / MEDIUM (accessories, KRW/USD pricing) / LOW (panorama mode list specifics) | Core drone spec (weight, sensor, RAW, AEB, wind rating) confirmed via direct WebFetch of DJI's official spec page; panorama mode names/counts come only from third-party tutorial sites, not DJI's own page |
| Features | HIGH (content structure/technique) / MEDIUM (Mongolia regulation specifics) | Cross-verified against many independent drone-teaching sources (PhotoPills, Adobe, DJI guides, etc.); the regulation figures share the same third-party-aggregator weakness flagged in Pitfalls |
| Architecture | HIGH | Based on direct read of the actual repo's `SUMMARY.md`, `book.toml`, `introduction.md`, and existing chapter files — not inferred from general mdBook docs |
| Pitfalls | MEDIUM overall — HIGH (Gobi environmental/technique hazards) / MEDIUM-LOW (Mongolia legal specifics) | The legal-specifics weakness is not a research gap that more searching would fix — it reflects a genuine absence of accessible primary-source detail (Part 102 unread, national park law PDF not text-extractable, no park-specific drone policy found anywhere) |

**Overall confidence:** MEDIUM-HIGH — the content, hardware, and structural work is solidly grounded; the one real soft spot (Mongolia drone legal specifics beyond CAAM Part 101) is a bounded, well-understood gap with a clear mitigation (explicit "미확인" tagging), not an open-ended unknown.

### Gaps to Address

- **CAAM Part 102 (registration/certification) unread:** located but not text-extracted during research. Attempt again during Phase 4 planning; if still unreachable, ship with "미확인" framing rather than blocking the milestone.
- **Sub-250g tourist exemption:** appears only in mutually-copying blog content, absent from the primary Part 101 text obtained. Do not state as fact anywhere in the book, including in the hardware/stack pages — always pair the Mini 5 Pro's weight with the +/-4g tolerance and Plus-battery-exceeds-250g facts.
- **Gobi Gurvansaikhan National Park (Yolyn Am, Khongoryn Els) drone policy:** no source found in either direction. Resolve by directing readers to on-site verification (park gate / local guide), not by picking a default assumption.
- **Panorama mode list (Sphere/180°/Wide/Vertical/Free) and exact frame counts:** sourced from a third-party tutorial, not DJI's own spec page. Verify against the DJI Fly app's actual UI when the book author has hands-on access to the drone, before finalizing `09-drone/composition.md` or the panorama chapter.
- **Mongolia Gobi camp charging infrastructure (power availability for battery hubs/power banks):** explicitly out of scope for all four research passes — flag as a planning-stage assumption to validate against the actual trip logistics, not a book-content gap.

## Sources

### Primary (HIGH confidence)
- dji.com/mini-5-pro/specs — official DJI spec page, verified directly via WebFetch (weight, sensor, RAW, AEB, flight time, wind rating, transmission)
- Mongolia CAAM Part 101 (CAA 24101/02, Rev 2(1), Jan 2020) — `backend-api.mcaa.gov.mn` — read directly; confirms altitude/VLOS/4km/daylight-only/consent/mass-limit rules, confirms absence of a sub-250g exemption clause
- Direct read of this repository's `src/SUMMARY.md`, `src/book.toml`, `src/introduction.md`, `src/04-mongolia/*`, `src/07-appendix/*`, `src/08-references/*`, `.planning/PROJECT.md`

### Secondary (MEDIUM confidence)
- DroneXL, DC Rainmaker — Plus-battery weight/regulatory-response cross-verification (independent outlets, consistent figures)
- PhotoPills, Adobe, Canva, DJI official guides, Photography Life, dronegenuity, Pilot Institute — drone photography technique/composition teaching, cross-verified across many independent sources
- Mongolia CAAM Part 102 — located but not text-extracted; likely holds registration/certification detail not covered by Part 101

### Tertiary (LOW confidence, needs validation)
- drone-laws.com, propelrc.com, skywardwings.com, danistanomads.com, canifly.in, droneller.com — Mongolia drone-law figures (fee, processing days, sub-250g exemption) that repeat near-verbatim across sites with no independent primary-source corroboration found; use only as a cross-check starting point, never as the sole citation for a legal claim in the book
- vicvideopic.com panorama tutorial — DJI Mini 5 Pro panorama mode list/frame counts, not confirmed on DJI's own spec page

---
*Research completed: 2026-07-13*
*Ready for roadmap: yes*
