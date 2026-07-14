# Feature Research

**Domain:** Beginner drone photography travel guide (DJI Mini 5 Pro, Korean mdBook, Mongolia Gobi desert, photo-first + brief video, daytime/twilight only)
**Researched:** 2026-07-13
**Confidence:** HIGH — cross-verified against multiple drone-teaching sources (PhotoPills, Adobe, Canva, DJI official guides, Photography Life, dronegenuity, Pilot Institute) plus DJI Mini 5 Pro's actual spec sheet and current Mongolia drone-law summaries. MEDIUM on the Mongolia-regulation specifics — sources are third-party aggregators (drone-laws.com, propelrc.com), not the CAAM's own published rulebook, so this content must ship with the same "미검증 시 정직 표기" practice the v1.0 book already uses for links.

> Note: this is a **content project**, not software. "Feature" below means "content element/section the drone part must or should contain." Complexity ratings reflect *writing/research/production effort*, not code effort.

## Feature Landscape

### Table Stakes (Users Expect These)

Without these, a beginner following the book cannot legally or technically get a usable drone photo in Mongolia. Ordered roughly by the dependency chain (regulations/safety → settings → composition/flight → light → battery → processing).

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| 드론 사진이란·왜 매력적인가 (intro/hook) | Every drone-photography guide surveyed opens by framing what changes when you shoot from the air — new perspective, scale, pattern-reading — before touching gear; sets reader expectations and mirrors the existing book's "매력적인 소개 페이지" pattern from v1.0 | LOW | Net-new but cheap — short, editorial, reuses the intro tone already established in `src/introduction.md`. Also the natural place to reframe the book as "몽골 사진 가이드" per PROJECT.md's v1.1 goal. |
| **비행 규제·허가 (Mongolia CAAM rules)** | Drones carry real legal risk — flying without knowing the rules can mean confiscation, fines, or diplomatic trouble for a tourist; this must be taught *before* any flight-technique content | MEDIUM–HIGH | Grounded facts to state: CAAM (Civil Aviation Authority of Mongolia) governs drone ops; max altitude ~120 m (400 ft) AGL; min 4 km from any aerodrome; **flight only from sunrise to sunset (no night flying is a legal rule, not just a technical one — directly supports the "no night drone" anti-feature below)**; drone must stay within visual line of sight (no FPV without a spotter); registration required over 250 g (Mini 5 Pro is 249.9 g — flag this as a borderline case worth restating, not a loophole to lean on); commercial use or flight above 400 ft needs a permit; contact `ops@mcaa.gov.mn` / +976-11-285013 for authoritative confirmation. Sources are third-party summaries, not the CAAM rulebook itself — **mark as "미검증, 출발 전 재확인 필수"** exactly like the v1.0 book already does for other links (see PROJECT.md Key Decisions). |
| 비행 전 체크리스트 & 안전 (pre-flight) | Standard practice across every drone-teaching source: a repeatable at-home + on-location checklist prevents crashes and lost drones, which is the #1 beginner failure mode | LOW–MEDIUM | Two-phase pattern is well established: **at-home** (battery charge, firmware update, props intact, SD card space, RTH altitude set) + **on-location** (wind check, people/animals/obstacles nearby, GPS lock, compass calibration). Gobi-specific additions: livestock/herder etiquette (drones can spook animals — a real local-etiquette point, not generic advice), remote-location awareness (no rescue infrastructure). |
| DJI Mini 5 Pro 카메라 설정 기본 (RAW/DNG, 노출, ND필터, 히스토그램) | A beginner cannot use "auto everything" and get a good still — needs to know the settings that actually exist on this drone | MEDIUM | Concrete, drone-specific facts: 1-inch 50MP CMOS, fixed f/1.8 aperture (no aperture control — differs from the astro book's exposure-triangle teaching, must be explained as "2 of 3 variables" not 3), DNG RAW up to 8192×6144, JPEG+RAW simultaneous capture. ND filter set available (ND8/32/128) — teach the workflow "set frame rate/shutter reference first → weakest ND that gets correct exposure," and for stills, use ND to avoid a too-fast/too-slow shutter in bright desert daylight. Enable histogram in DJI Fly app; expose to protect highlights (push right without clipping) — directly reusable teaching pattern from the astro book's histogram concept, adapted for bright daylight instead of dark skies. |
| 항공 구도 기초 (top-down/45°/leading lines/scale) | The single most cited "what makes a drone photo good vs. just high up" lesson across every source surveyed | MEDIUM | Core techniques to cover: nadir/top-down (90°, flattens scene into pattern/texture — dunes, cliff tops, canyon floor), 45° oblique (retains depth + horizon, most versatile "default" angle), leading lines (ridgelines, canyon walls, dune crests — explicitly *more* important in aerial work than ground-level because most aerial subjects look flat without them), rule of thirds, patterns/symmetry, and using a human/vehicle silhouette for scale (a technique the astro book's site guide already uses at ground level — natural bridge). |
| 사진 촬영을 위한 비행 기초 (hover, orbit, reveal) | Composition requires stable, deliberate flight — a shaky or rushed drone ruins a well-planned shot | MEDIUM | Beginner-appropriate subset only: stable hover for a still shot, slow deliberate stick movement ("fly low and slow" — cited as the single biggest beginner-vs-pro difference), basic orbit (keep subject centered while circling — useful for scouting a composition even for a still), basic reveal (rise/tilt to build a "big reveal" moment — good fit for cliff/dune subjects). Cine/tripod mode recommended for smoother slow movement. Video-shot vocabulary (push-in, pull-out, tracking, parallax) is differentiator/video territory — keep this section to what a *photographer* needs, not a videographer. |
| 빛 읽기 — 골든아워/블루아워 (aerial-specific) | Low sun angle creates long shadows that reveal texture in dunes/cliffs from above in a way flat midday light cannot — directly ties to why this part is "주간·황혼 중심" per PROJECT.md | LOW–MEDIUM | Aerial-specific angle beyond the astro book's existing golden/blue-hour content: shadows read very differently from directly overhead vs. ground level (midday = flat/no shadow = good for pure pattern shots; golden hour = long shadows = good for texture/relief shots of dune ridges and cliff erosion lines). Blue hour is short (15–25 min) — drone must already be airborne. AEB/exposure bracketing recommended for the high-dynamic-range moments at both golden and blue hour. |
| 배터리 관리 & 안전 귀환 (RTH) | Running out of battery mid-flight in the remote Gobi (no rescue infrastructure, no spare-parts shop) is a much higher-stakes failure than in an urban park | MEDIUM | Concrete numbers: set RTH trigger ~20–30%, land with ≥20% buffer, set RTH altitude high enough to clear terrain (cliffs/canyon walls at Yolyn Am specifically). Cold reduces LiPo capacity — this is a *direct reuse* of the lesson the astro book already teaches for camera batteries in cold Gobi nights (`03-practice/field-prep-and-hazards.md`), just re-applied to drone batteries. Desert heat also matters (daytime flying): avoid leaving batteries in a hot vehicle, expect 15–25% reduced flight time above ~38°C. |
| 드론 정지 사진 기초 RAW 보정 | An unprocessed drone DNG looks flat, same as an unprocessed astro RAW — beginners expect a "finished" look | LOW | **Reuse, not rebuild**: link directly to the existing `05-postprocessing/raw-develop.md` chapter for the WB/exposure/contrast slider recipe — the workflow is the same tool, same sliders. Add only the *delta* specific to drone stills: lens distortion/perspective correction (wide FOV lens profile), dust-spot removal (sensor dust shows more on flat sky/sand than on a starry sky), and that drone DNG needs no noise-reduction-heavy workflow the way high-ISO astro RAW does (daylight ISO is low). |
| 고비 사막 환경 대응 (바람·모래·저온·원격지) | Desert flying has specific failure modes a generic drone guide won't cover, and the Gobi trip context makes this non-optional | MEDIUM–HIGH | Grounded facts: Mini 5 Pro wind resistance rated 12 m/s — recommend a lower personal margin for a beginner in gusty open desert; fine sand/dust clogs motors/gimbal/sensors — carry a blower/cleaning kit, use a landing pad, clean after every flight; fly early morning/late afternoon to avoid both midday heat *and* the worst wind (also matches golden-hour timing — a nice teaching synergy); no grid power at Gobi camps — plan battery count and charging (power bank/car charger) for multi-day legs *before* leaving Ulaanbaatar. This partially reuses the astro book's existing "야외 준비와 현장 워크플로" cold/dust lessons but the sand/wind/heat profile for a flying object is materially different from a stationary tripod, so it needs its own treatment, not just a cross-link. |

### Differentiators (Competitive Advantage)

These are what make *this* drone part better than a generic "how to fly a drone" article — they align with the book's existing strength (trip-specific, site-specific guidance) and the Core Value of getting a beginner to *actually succeed* in Mongolia.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| 명소별 항공 구도 아이디어 (5곳) | No generic drone tutorial can give angle/light/composition advice for 차강소브라가·바양작·홍고린엘스·욜링암·바가가즈링 촐로 specifically — this is the book's signature move, already proven at ground level in v1.0's 04-mongolia chapters | HIGH | **Reuse the existing terrain research, add the aerial layer.** The v1.0 site chapters already describe exactly the terrain features that matter for aerial composition: 차강소브라가 = 30–60m vertical eroded cliff, 400m long, sedimentary layers → top-down/45° reveals striation patterns, cliff-edge leading line; 바양작 = curved red sandstone ridge + scattered saxaul + famous sunset color → 45° oblique for ridge-line leading lines, golden-hour color emphasis; 홍고린엘스 = 80–300m dunes, "singing sand," open desert → nadir for pure ripple-pattern shots, 45° with human silhouette on a ridge crest for scale, strong wind/sand caution already flagged in that chapter; 욜링암 = slot canyon up to 200m walls, ice fields → top-down reveals the canyon's narrow slot shape from above (a angle ground-level photography *cannot* get, genuinely drone-exclusive value), caution on flying within a narrow canyon (GPS/obstacle-sensing degraded near tall walls); 바가가즈링 촐로 = granite boulder field with arches → 45° oblique + orbit around a distinctive arch/formation. Each site page should add a short "항공 구도" subsection to the existing page rather than duplicate the GPS/access info already there. |
| 항공 파노라마 | A distinctive "wow" shot beyond a single frame, same differentiator role panorama already plays in the astro book (`06-bonus/panorama.md`) | MEDIUM–HIGH | Manual exposure locked across all frames, ~40% overlap, 20–30 images typical, fast shutter/low ISO/f-stop equivalent via ND choice since Mini 5 Pro has fixed aperture. DJI Fly app has a built-in Pano mode (Sphere/180°/Wide) with auto-stitch — much lower floor for a beginner than the astro panorama workflow, worth flagging as *easier* than the existing astro panorama chapter, not harder. Best sites: 홍고린엘스 (open dune sea) and 차강소브라가 (long cliff face) reward panorama most. |
| 하이퍼랩스 (간략) | A distinctive, shareable output reachable with almost no extra gear, but explicitly kept brief per PROJECT.md's "영상 간략" scope decision | LOW–MEDIUM (kept intentionally shallow) | DJI's built-in Hyperlapse mode (Free/Circle/Course Lock/Waypoint) removes the hard part (steady long-duration flight) via intelligent flight modes — recommend Circle mode only as the beginner starting point, ~3–4s interval, ~13s result. Wind is the main enemy of a clean hyperlapse (<10 mph recommended) — ties back to the desert-wind caution above. Should be one short page, not a chapter tree — matches the "영상 간략" decision, unlike the deep astro timelapse chapter (`06-bonus/timelapse.md`) which can stay as the book's only *deep* time-based-video content. |
| 전/후 보정 비교 (드론 정지 사진) | Mirrors the astro book's proven `05-postprocessing/before-after.md` pattern — calibrates a beginner's expectations of what's achievable, not aspirational stock photos | LOW–MEDIUM (writing effort low; blocked on real photos) | Same production dependency the astro book already has: needs actual drone stills from a real flight before/after pair can be assembled — cannot be finalized until the author flies the Mini 5 Pro in the field (practice flight or the actual Mongolia trip). |
| 원격지 패킹·충전 전략 (고비) | Turns generic "bring spare batteries" advice into a concrete answer for a 5-day, multi-camp trip with no grid power — directly useful, cheap to write | LOW | Concrete recommendation: battery count per shooting day × 5 days, power bank/car-charger capacity math, dust-proof hard case, given the trip's actual Day 1–5 itinerary already documented in PROJECT.md's Context section. |
| 드론 참고 자료 부록 (규제·사양·튜토리얼·갤러리) | Mirrors the existing `08-references/` pattern (5 reference pages already in v1.0) — a dedicated, curated link appendix is expected once the book has a regulation-heavy topic like drone flight | LOW | Must include: DJI Mini 5 Pro official spec page, Mongolia CAAM contact info and any official rulebook found, 2–3 vetted tutorial sources (PhotoPills drone guide, DJI's own guides), example galleries for aerial-desert composition inspiration. Same "미검증 표기" honesty practice as v1.0's reference pages — several regulation sources found during this research are third-party aggregators, not the primary CAAM source. |

### Anti-Features (Commonly Requested, Often Problematic)

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|------------------|-------------|
| 야간/은하수 드론 촬영 | Readers doing this trip specifically for Milky Way photography may assume "why not combine drone + stars?" | **Doubly out of scope, not just a gear limitation**: (1) Mongolia's CAAM rule restricts flight to sunrise–sunset — night flying is a *legal* violation, not just a quality tradeoff; (2) even where legal, Mini-class drones lack the sensor/exposure control (no long-exposure manual shutter comparable to a tripod camera, fixed aperture, no star-tracking) to get a usable night sky shot — a beginner would fail even if they tried. | Keep drone content strictly daytime/twilight (ends at blue hour, before full dark); Milky Way photography stays entirely in the existing ground-based astro part later in the book — no crossover chapter. |
| FPV/레이싱 드론 콘텐츠 | FPV footage looks exciting and readers may have seen viral FPV desert/canyon flythrough videos | Entirely different gear class (dedicated FPV drone/goggles/controller), different skill tree (acro flying), and explicitly requires a visual observer/spotter under the same Mongolia rules noted above — nothing here transfers to a Mini 5 Pro travel-photography reader | Stay with standard GPS-assisted flight modes on the Mini 5 Pro; the "reveal"/orbit techniques already covered give most of the *visual* excitement of FPV without the gear/skill requirement |
| 시네마틱 영상 제작 심화 (컬러그레이딩·다중 클립 편집·스토리텔링) | Drone footage is closely associated with cinematic travel videos, and "make it look like a pro travel film" is a common aspiration | Requires an entirely separate skill set (editing software, color grading, pacing/story structure, music licensing) disproportionate to a photo-first book that explicitly scoped video as "간략" only | One short page covering the *minimum* useful video literacy (shutter-angle rule of thumb, basic clip selection) — no editing/grading chapter |
| 고급 영상 촬영 기법 (다중 드론 협업, 전문 촬영 리그, 트래킹 샷 심화) | Seen in professional aerial cinematography showcases, feels like "the real skill" once basics are covered | Massively disproportionate to a solo traveler with one Mini-class drone on a 5-day trip; adds no value toward the book's stated goal of a good *still photo* | Redirect ambition toward the composition/per-site differentiators above, which deliver more visual payoff per unit of reader effort for a photo-first book |

## Feature Dependencies

```
비행 규제·허가 (Mongolia CAAM)
    └──must precede──> ALL flight-technique content (legal literacy before "how to fly")
    └──constrains──> 빛 읽기 골든/블루아워 (sunset flight-end rule caps how late shooting can run)
    └──enables (by exclusion)──> 야간/은하수 드론 촬영 anti-feature (regulation is part of *why* it's excluded, not just gear)

비행 전 체크리스트 & 안전
    └──requires──> 비행 규제·허가 (need to know legal constraints before building a checklist)
    └──must precede──> ALL field flights (practice or Mongolia)

DJI Mini 5 Pro 카메라 설정 (RAW/노출/ND/히스토그램)
    └──requires──> (device-specific facts; independent)
    └──enables──> 항공 구도 기초
    └──enables──> 드론 정지 사진 RAW 보정
    └──enables──> 항공 파노라마 [DIFFERENTIATOR] (needs locked manual exposure across frames)

항공 구도 기초 (top-down/45°/leading lines/scale)
    └──requires──> DJI Mini 5 Pro 카메라 설정
    └──enables──> 명소별 항공 구도 아이디어 [DIFFERENTIATOR]

사진 촬영을 위한 비행 기초 (hover/orbit/reveal)
    └──requires──> 비행 전 체크리스트 & 안전
    └──enables──> 항공 구도 기초 (stable flight needed to execute a composition)
    └──enables──> 하이퍼랩스 [DIFFERENTIATOR] (needs deliberate slow/circle flight)

빛 읽기 — 골든/블루아워 (aerial)
    └──enhances──> 항공 구도 기초, 명소별 항공 구도 아이디어 [DIFFERENTIATOR]
    └──constrained by──> 비행 규제·허가 (blue hour must fit inside sunrise–sunset window)

배터리 관리 & RTH
    └──requires──> 비행 전 체크리스트 & 안전
    └──enhances──> 고비 사막 환경 대응 (wind/heat/cold compound battery risk)

고비 사막 환경 대응 (바람·모래·저온·원격지)
    └──requires──> 배터리 관리 & RTH
    └──enables──> 원격지 패킹·충전 전략 [DIFFERENTIATOR]
    └──enables──> 명소별 항공 구도 아이디어 [DIFFERENTIATOR] (site-specific wind/sand cautions, e.g. 홍고린엘스)

드론 정지 사진 RAW 보정
    └──requires──> DJI Mini 5 Pro 카메라 설정
    └──requires (reuse)──> existing 05-postprocessing/raw-develop.md (link, not rebuild)
    └──enables──> 전/후 보정 비교 [DIFFERENTIATOR]

명소별 항공 구도 아이디어 [DIFFERENTIATOR]
    └──requires──> 항공 구도 기초
    └──requires (reuse)──> existing 04-mongolia/*.md terrain descriptions (add aerial subsection, don't duplicate GPS/access info)

드론 참고 자료 부록 [DIFFERENTIATOR]
    └──requires──> 비행 규제·허가 (must include verified/unverified regulation links)
    └──assembled last, mirrors existing 08-references/ pattern
```

### Dependency Notes

- **Regulations must precede everything flight-related:** unlike the astro book (where the first hard gate is a technical skill — focusing), the drone part's first hard gate is legal — a beginner needs to know Mongolia's sunrise-to-sunset/altitude/registration rules before any flight-technique content, because getting this wrong has real consequences (confiscation, fines) that a bad Milky Way photo does not.
- **The sunrise–sunset rule is both a regulation fact and the anti-feature justification:** the "no night drone" scope decision in PROJECT.md is reinforced by an actual legal constraint, not just a Mini-class sensor limitation — this should be stated explicitly in the book so readers understand it's not an arbitrary editorial choice.
- **Camera settings must precede composition:** same pattern as the astro book's "manual mode before NPF rule" — a beginner can't apply top-down/45°/leading-line composition rules meaningfully without first understanding what RAW/ND/histogram control they have (and don't have — fixed aperture) on this specific drone.
- **Per-site aerial composition is the single highest-leverage differentiator and it's cheap relative to its value:** the terrain research already exists in the shipped v1.0 `04-mongolia/*.md` chapters — this content should *add* an aerial subsection to each existing page rather than write new standalone drone-site chapters, minimizing duplication and keeping the GPS/timing/hazard info as single-sourced.
- **RAW processing of drone stills should link, not duplicate:** the slider recipe in `05-postprocessing/raw-develop.md` is tool-and-workflow-identical for a drone DNG; only the delta (lens distortion correction, dust spots, lower noise-reduction need at daylight ISO) needs new content.
- **Before/after galleries and site photo consideration both depend on real drone flights happening** (practice or the actual Mongolia trip) — a production-timeline dependency identical to the one v1.0 already had for astro practice-session photos.
- **Hyperlapse and video-adjacent content must stay deliberately shallow:** PROJECT.md already scoped video as "간략" — treat hyperlapse as the one small exception (it's really a photography-adjacent interval technique, not full videography) and resist expanding it into a video-production chapter.

## MVP Definition

### Launch With (v1.1)

Matches PROJECT.md's "Active (v1.1 드론 사진)" requirements — the table-stakes list plus the differentiators PROJECT.md already commits to:

- [ ] 드론 사진 개요·매력 + 책을 "몽골 사진 가이드"로 재구성 (제목·소개·SUMMARY)
- [ ] 비행 규제·허가 (Mongolia CAAM) — must ship even if marked partially unverified, per project's honesty practice
- [ ] 비행 전 체크리스트 & 안전
- [ ] DJI Mini 5 Pro 카메라 설정 (RAW/DNG, 노출, ND필터, 히스토그램)
- [ ] 항공 구도 기초 (top-down/45°/leading lines/scale)
- [ ] 사진 촬영을 위한 비행 기초 (hover/orbit/reveal)
- [ ] 빛 읽기 — 골든/블루아워 (aerial-specific)
- [ ] 배터리 관리 & RTH
- [ ] 고비 사막 환경 대응 (바람·모래·저온·원격지)
- [ ] 드론 정지 사진 RAW 보정 (link to existing raw-develop.md + delta notes)
- [ ] 명소별 항공 구도 아이디어 (5곳) — added as subsections to existing site pages
- [ ] 항공 파노라마 (brief chapter)
- [ ] 하이퍼랩스 (간략, one page)
- [ ] 원격지 패킹·충전 전략
- [ ] 드론 참고 자료 부록 (규제 링크 반드시 포함)

### Add After Validation (v1.x)

- [ ] 전/후 보정 비교 (드론 정지 사진) — trigger: after a real practice or Mongolia flight produces actual drone RAW files to edit
- [ ] 명소별 실제 항공 사진 채우기 — trigger: same as above, mirrors v1.0's existing backlog item for ground-level Mongolia galleries

### Future Consideration (v2+)

- [ ] 시네마틱 영상 제작 심화 (편집·컬러그레이딩) — defer: explicitly out of scope per PROJECT.md's photo-first decision, disproportionate production cost
- [ ] FPV 콘텐츠 — defer: different gear class entirely, no reader has this hardware
- [ ] 야간 드론 촬영 — defer indefinitely unless Mongolia regulation changes or the drone fleet upgrades beyond Mini-class (both currently false)

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| 비행 규제·허가 (CAAM) | HIGH | MEDIUM-HIGH | P1 |
| 비행 전 체크리스트 & 안전 | HIGH | LOW-MEDIUM | P1 |
| DJI Mini 5 Pro 카메라 설정 | HIGH | MEDIUM | P1 |
| 항공 구도 기초 | HIGH | MEDIUM | P1 |
| 사진 촬영을 위한 비행 기초 | HIGH | MEDIUM | P1 |
| 빛 읽기 (golden/blue hour aerial) | MEDIUM-HIGH | LOW-MEDIUM | P1 |
| 배터리 관리 & RTH | HIGH | MEDIUM | P1 |
| 고비 사막 환경 대응 | HIGH | MEDIUM-HIGH | P1 |
| 드론 정지 사진 RAW 보정 (link) | MEDIUM | LOW | P1 |
| 명소별 항공 구도 아이디어 | HIGH | HIGH | P1 |
| 드론 참고 자료 부록 | MEDIUM | LOW | P1 |
| 항공 파노라마 | MEDIUM | MEDIUM-HIGH | P1 |
| 하이퍼랩스 (간략) | LOW-MEDIUM | LOW-MEDIUM | P1 (kept intentionally shallow) |
| 원격지 패킹·충전 전략 | MEDIUM | LOW | P1 |
| 전/후 보정 비교 | MEDIUM-HIGH | LOW-MEDIUM* | P2 |
| 명소별 실제 항공 사진 | HIGH | LOW-MEDIUM* | P2 |
| 시네마틱 영상 심화 | LOW | HIGH | P3 |
| FPV 콘텐츠 | LOW | HIGH | P3 |

*Cost is mostly production-timeline-bound (waiting on real flights), not writing effort.

**Priority key:**
- P1: Must have for v1.1 launch
- P2: Should have, add when possible
- P3: Nice to have, future consideration

## Competitor Feature Analysis

| Feature | Generic web tutorials (PhotoPills, Adobe, Canva, dronegenuity) | DJI's own official guides | Our Approach |
|---------|------------------------------------------------------------------|----------------------------|--------------|
| Composition technique | Comprehensive and well-taught, but generic (any landscape, any location) | Focused on the DJI Fly app's own tools (Pano mode, ActiveTrack), light on composition theory | Same core techniques (top-down/45°/leading lines), applied specifically to the 5 documented Gobi sites — no generic source can do this |
| Regulations | Usually country-agnostic or US/EU-focused (FAA Part 107, EASA) | DJI provides a general "know your local laws" disclaimer, not country-specific detail | Mongolia-specific CAAM rules researched and flagged honestly as needing pre-trip re-verification, same practice as v1.0's astro links |
| Camera settings depth | Often video-first (frame rate, shutter-angle, LUTs) since most drone content creators are videographers | Detailed but scattered across manual/support pages | Photo-first: RAW/DNG, ND-for-stills, histogram — video settings kept to one brief page |
| Desert/remote-location specifics | A handful of niche sites cover desert flying generally, none cover Mongolia | Not covered | Gobi-specific wind/sand/heat/remote-charging guidance tied to the actual Aug 13–17 itinerary |
| Trip/site-specific planning | Never — generic composition articles only | Never | Per-site aerial composition ideas for the 5 exact Gobi locations already researched in v1.0 — the book's core competitive moat, extended into the air |
| RAW processing | Usually a separate learning curve from ground-level RAW workflows | Not covered (DJI doesn't teach post-processing) | Explicitly linked to the existing astro RAW-develop chapter — one workflow, two capture sources |

## Sources

- [Drone Photography: The Definitive Guide (2026) — PhotoPills](http://www.photopills.com/articles/drone-photography-guide)
- [Drone photography: A beginner's guide — Adobe](https://www.adobe.com/creativecloud/photography/type/drone-photography.html)
- [The complete beginner's guide to drone photography — Canva](https://www.canva.com/learn/the-complete-beginners-guide-to-drone-photography/)
- [15 Drone Photography Tips for Better Aerial Shots (2026) — DronesGator](https://dronesgator.com/drone-photography-tips)
- [6 Composition Techniques for Drone Photography — Beart Presets](https://www.beart-presets.com/blog/six-composition-techniques-for-drone-photography)
- [Drone Photography: Captivating Compositions With Leading Lines — AAI-Drones](https://aai-drones.com/drone-photography-captivating-compositions-with-leading-lines/)
- [7 Powerful Composition Techniques to Elevate Your Drone Photography — Canon Outside of Auto](https://www.canonoutsideofauto.ca/2024/10/20/7-powerful-composition-techniques-to-elevate-your-drone-photography/)
- [DJI Mini 5 Pro review — Tom's Guide](https://www.tomsguide.com/cameras-photography/drones/dji-mini-5-pro-review)
- [DJI Mini 5 Pro Released — 250g Drone with 1-Inch Type 50MP Sensor — CineD](https://www.cined.com/dji-mini-5-pro-released-250g-drone-with-1-inch-type-50mp-sensor-4k-up-to-120fps-and-rotatable-gimbal/)
- [DJI Mini 5 Pro Review: 1-Inch Sensor Game-Changer — Fstoppers](https://fstoppers.com/reviews/review-dji-mini-5-pro-drone-redefines-mini-standard-714487)
- [DJI Mini 5 Pro Review (2026) — Aerotimelapse](https://aerotimelapse.com/dji-mini-5-pro-review/)
- [Top 10 features of DJI Mini 5 Pro — Heliguy](https://www.heliguy.com/blogs/posts/top-10-features-dji-mini-5-pro/)
- [Mongolia Drone Laws 2026 — drone-laws.com](https://drone-laws.com/drone-laws-in-mongolia/)
- [Drone Laws In Mongolia 2026: Guide For Tourists & Operators — PropelRC](https://www.propelrc.com/drone-laws-in-mongolia/)
- [Drone Regulations in Mongolia — Dani Stan Nomads](https://danistanomads.com/mongolian-culture/drone-regulations-in-mongolia/)
- [Updated Drone Laws In Mongolia — Skyward Wings](https://skywardwings.com/latest-drone-laws-in-mongolia/)
- [Drone Pre-flight Checklist for Beginners — Aerotimelapse](https://aerotimelapse.com/drone-pre-flight-checklist-for-beginners/)
- [Free Drone Preflight Checklist — SafetyCulture](https://safetyculture.com/checklists/drone-preflight)
- [Pre-Flight Checklist: 10 Things to Do Before Every Drone Flight — SkyPixelTech](https://skypixeltech.com/beginner-guides/drone-pre-flight-checklist/)
- [Cinematic Drone Movements: 8 Shots for Better Footage — Doc Film Academy](https://www.docfilmacademy.com/blog/8-essential-drone-movements)
- [Film Like a Pro: How to Create Cinematic Orbit Shots — DJI Guides](https://store.dji.com/guides/film-like-a-pro-how-to-create-cinematic-orbit-shots/)
- [Understanding Return-to-Home Features in Modern Drones — CameraDroneHub](https://cameradronehub.com/understanding-return-to-home-features-in-modern-drones/)
- [Mastering Drone Return to Home Feature — SolDrones](https://soldrones.com/blog/drone-return-to-home-feature/)
- [Desert Adventure Drone Photography Guide — Autel Pilot](https://www.autelpilot.com/blogs/tips-tutorials/desert-adventure-drone-photography-guide)
- [Conquering the Desert Skies — CIIWA](https://drone.ciiwa.com/how-to-fly-drones-in-desert-environments-challenges-tips/)
- [How to Shoot Drone Hyperlapse in under 6 minutes — PolarPro](https://www.polarpro.com/blogs/polarpro/drone-hyperlapse-tutorial)
- [Using the Hyperlapse with Your Drone — DJI Support](https://support.dji.com/help/content?customId=en-us03400006781&spaceId=34&re=US&lang=en&documentType=artical&paperDocType=paper)
- [How to Shoot and Stitch Panoramas with a Drone — Photography Life](https://photographylife.com/shooting-drone-panoramas)
- [How to Make 360 Degree Interactive, Aerial Panoramas with a Drone — dronegenuity](https://www.dronegenuity.com/make-360-degree-interactive-drone-panoramas/)
- [ND Filters for Drones Explained and When You Actually Need Them — Markus Hagner Photography](https://markus-hagner-photography.com/nd-filters-for-drones-explained-and-when-you-actually-need-them/)
- [How to Use ND Filters on a Drone — Goodiesrc](https://www.goodiesrc.com/how-to-use-nd-filters-on-a-drone/)
- [Golden hour & blue hour: how to capture the most beautiful drone footage — Drone License](https://www.dronelicense.eu/blogs/popular/golden-hour-blue-hour)
- [Drone Aerial Photography at the Golden Hour — Droneflyers.com](https://www.droneflyers.com/drone-aerial-photography-at-the-golden-hour/)
- MongolPhoto `PROJECT.md`, `MILESTONES.md` (v1.0 delivered scope, v1.1 active requirements)
- MongolPhoto `src/04-mongolia/*.md` (existing terrain/GPS/hazard research for the 5 Gobi sites — reused as the grounding for per-site aerial composition ideas)
- MongolPhoto `src/05-postprocessing/raw-develop.md`, `src/03-practice/field-prep-and-hazards.md` (existing RAW-develop and cold-weather-battery content identified for reuse/linking)

---
*Feature research for: Beginner drone photography travel guide (DJI Mini 5 Pro, Mongolia Gobi, Korean mdBook)*
*Researched: 2026-07-13*
