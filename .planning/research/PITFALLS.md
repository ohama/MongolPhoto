# Pitfalls Research

**Domain:** Beginner drone photography travel guide (DJI Mini 5 Pro, Korean mdBook, Mongolia Gobi desert, photo-first, daytime/twilight)
**Researched:** 2026-07-13
**Confidence:** MEDIUM overall — HIGH on Gobi physical/environmental hazards and drone-photo technique (cross-verified across multiple independent sources); MEDIUM-LOW on Mongolia legal specifics. See the confidence note inside Pitfall 1 — this is the single most important caveat in this document.

---

## Critical Pitfalls

### Pitfall 1: Treating third-party "Mongolia drone law" blogs as verified fact

**What goes wrong:**
The book states specific numbers (registration fee, altitude limit, weight exemption) as settled fact, a reader trusts them at face value, and either (a) breaks a real rule because the number was wrong, or (b) the book gets a formal complaint/correction after publishing something legally incorrect about a foreign country's aviation law.

**Why it happens:**
Nearly every English-language "Mongolia drone laws" page found in this research (drone-laws.com, propelrc.com, skywardwings.com, droneller.com, danistanomads.com, canifly.in) repeats **the same figures almost verbatim** — CAAM registration fee ₮30,000, 5-day processing, "contact ops@mcaa.gov.mn / +976-11-285013," sub-250g tourist exemption. That level of identical phrasing across "independent" sites is a strong signal they are SEO content-mill articles copying (or AI-generating from) one another, not independently verified against the primary source. They are the *only* accessible English source most writers (including this research pass) will find via search, so it's easy to mistake "many sites agree" for "verified."

**What I could actually verify (primary source):**
I located and read Mongolia CAAM's actual **Part 101 — Gyrogliders and Parasails, Unmanned Aircraft (including Balloons), Kites, and Rockets, Operating Rules** (CAA 24101/02, Rev 2(1), Jan 2020) at `backend-api.mcaa.gov.mn`. This document's rule numbering, structure, and near-exact wording (Part 71 airspace, Part 61/149 pilot licensing, "Class G airspace," NOTAM procedure) matches New Zealand's CAA Part 101 almost exactly — Mongolia appears to have adapted NZ CAA's rule template. Confirmed from this primary text:
- 400 ft (≈120 m) AGL altitude ceiling for VLOS operation without Director approval — **matches the blogs**.
- Must not operate within 4 km of an aerodrome (controlled or uncontrolled) without specific authorization — **matches the blogs**.
- Visual line of sight (VLOS) mandatory at all times; FPV requires a trained observer maintaining VLOS — **matches the blogs**.
- Night operation banned unless indoors or a "shielded operation" — **matches the blogs' "daylight only" claim**.
- Must not fly over people/property without consent — **matches privacy claims**.
- Mass limit 25 kg; 15–25 kg aircraft need special construction/operation approval — **this document says nothing about a 250 g category at all**. There is no sub-250g operational carve-out anywhere in the Part 101 text obtained.
- Registration fee (₮30,000), 5-day processing time, and any weight-based registration threshold **could not be verified** — that likely lives in Part 102 (Unmanned Aircraft Operator Certification) or a separate CAAM circular/AC102-1, neither of which I was able to read in full (PDF text extraction failed / not fetched in time).

**Consequence for this book:** the operating rules (altitude, VLOS, no-fly buffer, daylight-only, consent) are corroborated by a primary source and can be stated with moderate-high confidence. The **registration process, fee, and any sub-250g exemption are NOT independently confirmed** — they appear only in mutually-copying blog content. The DJI Mini 5 Pro's real-world weight is also a complication: DJI specifies 249.9 g **±4 g manufacturing tolerance**, and multiple owner reports (mavicpilots.com, dronexl.co) put individual units at 252–253 g. Even if Mongolia does have a 250 g exemption threshold somewhere, this specific drone cannot be assumed to reliably qualify.

**Prevention:**
- Never state the registration fee, processing time, or a "drones under 250g are exempt" claim as settled fact. Frame these explicitly as "여러 온라인 자료에 따르면 ~라고 하나, 몽골 항공청(CAAM) 1차 자료로 확인되지 않음 — 출발 전 CAAM(ops@mcaa.gov.mn, +976-11-285013)에 직접 확인 필요."
- State the VLOS/altitude/4km/daylight-only/consent rules with moderate confidence since they matched the primary Part 101 document — but still tag the whole regulations section with a single prominent "법규는 수시로 바뀔 수 있음 — 출발 전 최신 정보를 CAAM에 직접 재확인하십시오" disclaimer, dated with the book's publish date.
- Link directly to the CAAM contact channel and, if reachable at publish time, the actual Part 101/Part 102 PDF URLs — let the reader go to the primary source instead of a blog aggregator.
- Do not invent a legal fact anywhere in the regulations content to fill a gap the research couldn't close (e.g., don't guess at the sub-250g registration threshold). Explicitly write "미확인" where the research came up empty.

**Warning signs:**
- A regulations paragraph in the draft has a specific number (fee, day count, weight threshold) with no source note attached.
- The same figure appears in this book and in one of the blog aggregator posts word-for-word with no independent corroboration.
- The word "허가 불필요" (no permit needed) appears anywhere near the Mini 5 Pro's weight without a caveat.

**Phase to address:** 드론 참고 자료 (규제/허가) chapter — this is the single most important chapter in the entire v1.1 milestone to get the caveat framing right; also touches 드론 사진 개요 chapter if it front-loads any legal claims.

---

### Pitfall 2: Assuming national parks (Yolyn Am / Gobi Gurvansaikhan) have no extra drone restriction — or inventing one that doesn't exist

**What goes wrong:**
The book either (a) tells readers Yolyn Am is fine to fly at with no caveat, and a reader gets turned back or fined by a park ranger on-site, or (b) the book states a specific park drone ban/permit-fee that isn't actually confirmed, misleading readers the other direction.

**Why it happens:**
No source found in this research — not CAAM's Part 101 text, not the Gobi Gurvansaikhan National Park's own pages (national-parks.org, Wikipedia, Wikivoyage), not Mongolia's 1994 Law on Special Protected Areas (located but not text-extractable) — contains an explicit, citable drone rule for Yolyn Am or Gobi Gurvansaikhan National Park specifically. General web search repeatedly returns the generic claim "national parks and reserves require case-by-case permission; check with local park authorities," which is a reasonable operating assumption but not a confirmed rule. CAAM's Part 101 §101.7 *does* establish, as a general national-airspace principle, that flying within any "restricted area" or "military operating area" designated under Part 71 requires the administering authority's approval — Gurvansaikhan National Park's status under Part 71 airspace designations could not be determined from available sources.

**Consequence if unaddressed:** a beginner reader arrives at Yolyn Am (Day 3 of the documented itinerary) already having paid for the trip, with no idea whether a ranger will object, and no fallback plan.

**Prevention:**
- Frame the Yolyn Am / national park guidance as: "국립공원(고비 구르왕사이한 국립공원, 욜링암 포함)은 진입료를 받는 관리 구역으로, 드론 비행에 대해 별도 허가나 제한이 있을 수 있습니다. 몽골 항공청 규정과는 별개로 공원 입구 관리소 또는 가이드/투어사를 통해 현지에서 반드시 재확인하십시오." — i.e., tell the reader this is a *local, on-the-ground* check, not something a book written months in advance can settle for them.
- Recommend the practical mitigation every drone-in-Mongolia trip report converges on: ask the local guide/driver/park ranger at the gate before flying, and have a "no-fly fallback" composition plan (ground-level shots already exist in the v1.0 book for all 5 sites) so the chapter doesn't strand the reader if the drone can't fly there.
- Do not state a specific park drone fee or permit process — none was found and inventing one is worse than omitting it.
- Apply the same "check on-site" framing to the other 4 sites too (차강소브라가·바양작·홍고린엘스·바가가즈링 촐로) even though they are not formally inside the national park boundary — Khongoryn Els (홍고린엘스) sits within Gobi Gurvansaikhan National Park's territory as well.

**Warning signs:** the 명소별 가이드 chapter's Yolyn Am section reads as flight-permissive with no caveat, or states a specific park permit fee/process without a citation.

**Phase to address:** 명소별 드론 촬영 가이드 chapter (Yolyn Am section specifically, and the Khongoryn Els section since it's also inside GGNP boundaries) + cross-reference from 드론 참고 자료.

---

### Pitfall 3: Underestimating Gobi wind for a sub-250g airframe

**What goes wrong:**
A beginner launches in what looks like calm morning air, wind picks up over open steppe/dune terrain (nothing blocks it — no trees, no buildings), and a light Mini-class drone gets pushed off course, drains battery fighting the wind, or is genuinely blown down.

**Why it happens:**
The Mini 5 Pro's official max wind resistance is rated around 12 m/s (~level 5, ~43 km/h), but that is the drone's *survivability* ceiling, not a safe *operating* margin — a sub-250g airframe fights wind with far less authority than a 900g+ drone, and steppe/dune wind is gustier and less predictable than the sustained number on a weather app suggests. Open desert has no terrain features to break wind, and afternoon heating in the Gobi commonly builds wind through the day, meaning a calm 7am launch can turn into a risky 11am flight if the reader is not watching for the trend.

**Prevention:**
- Teach a beginner-safe personal wind ceiling well below the drone's rated max (e.g., "고시 풍속이 아니라 체감 — 국기·모래 표면·본인 몸으로 느끼는 바람이 강하면 이륙하지 않는다"; a commonly cited practical rule is to stay under roughly half the rated max for a sub-250g airframe in gusty conditions).
- Teach fly-early strategy explicitly: Gobi wind tends to build through the day, so golden-hour-morning flights are not just about light, they're also about wind (this is a natural teaching synergy — flag it, don't just mention light).
- Teach reading conditions before powering on: loose sand blowing horizontally at ground level, National Weather / windy.com gust forecast, tour guide's read of the day.
- Cover the abort decision explicitly: if the drone is fighting to hold position or drifting, land immediately rather than pushing for "one more shot."

**Warning signs (in the field, for the reader):** drone visibly drifting while trying to hover; battery draining faster than expected; DJI Fly app wind warning.

**Phase to address:** DJI Mini 5 Pro 조작·설정 chapter (pre-flight check section) + 고비 사막 환경 대응 content + 명소별 가이드 (특히 홍고린엘스 — open dune sea, highest wind exposure of the 5 sites).

---

### Pitfall 4: Sand/dust ingestion damaging motors, gimbal, and lens

**What goes wrong:**
Fine Gobi sand gets sucked into motors during takeoff/landing from bare ground, or blown onto the gimbal/lens during flight, causing gimbal wobble, motor grinding noise, degraded image quality (sand specks, scratched lens coating), or — in the worst case — motor failure far from any repair shop.

**Why it happens:**
Beginners default to launching and landing by hand-catching or placing the drone directly on sand, and don't think about mid-air dust exposure the way they would about rain. Gobi sand is fine and can become airborne even in moderate wind, and propwash during takeoff/landing actively kicks loose sand into the motor housings.

**Prevention:**
- Always launch/land from a hard surface or a dedicated landing pad, never bare sand — hand-launch/catch as the default technique in dune areas (Khongoryn Els especially).
- Carry and use a rocket blower + microfiber cloth, check/clean gimbal and motors after every flight, before packing away.
- Turn off aggressive obstacle-avoidance sensitivity on dusty/windy days — sensors can misread blowing sand as an obstacle and cause erratic avoidance maneuvers.
- Use a sealed case for transport between sites, not an open bag, given the multi-day itinerary crossing several dune/desert legs.

**Warning signs:** gritty sound from motors, gimbal not sitting level at power-on, visible haze/specks in test shots.

**Phase to address:** 고비 사막 환경 대응 content within either the DJI 사용법 chapter or 명소별 가이드 (홍고린엘스 section specifically has the most exposed dune sand).

---

### Pitfall 5: Cold-morning / battery-drain surprises cutting shots short

**What goes wrong:**
A battery shown at 80% at camp drops to critical/auto-RTH within minutes of takeoff on a cold Gobi morning, or a battery left in a cold vehicle overnight barely powers on — the reader loses the golden-hour window mid-shoot.

**Why it happens:**
LiPo batteries lose usable capacity sharply in cold temperatures (drone-flying sources cite drain rates many times faster than room-temperature baseline in cold conditions), and Gobi nights/early mornings can be cold even when midday is hot (desert diurnal swing). This is the same physical phenomenon the existing v1.0 astro-photography content already teaches for camera batteries in Gobi night cold (`03-practice/field-prep-and-hazards.md`) — it reapplies directly to drone batteries, just for the dawn/dusk shooting window instead of midnight.

**Prevention:**
- Keep spare batteries warm (inside a jacket, not in a cold vehicle) until immediately before flight.
- Let the drone run its self-warming behavior in flight, but don't take off already borderline-cold.
- Carry more batteries than the "shots needed" math suggests — cold-weather margin, not just flight-time margin.
- Reuse/cross-link the existing astro-book cold-battery lesson rather than rewriting it from scratch — same physics, different device.
- Cover the opposite extreme too: hot midday desert vehicle storage above ~38°C also degrades flight time (~15–25%) — don't leave batteries baking in a car between the morning and evening flying windows.

**Warning signs:** battery percentage dropping unusually fast right after takeoff; DJI Fly low-temperature warning.

**Phase to address:** DJI Mini 5 Pro 조작·설정 chapter (배터리 관리 & RTH section) — direct cross-link to existing `03-practice/field-prep-and-hazards.md`.

---

### Pitfall 6: No Return-to-Home plan → lost drone in featureless/remote terrain

**What goes wrong:**
A reader never checks/sets RTH altitude and home point before flying; loses GPS lock or visual line of sight over dunes or inside a canyon; the drone can't find its way back over the actual terrain (e.g., RTH altitude set too low to clear a canyon wall at Yolyn Am, or triggers RTH into a dune it can't see over), and the drone is lost or crashed in a location with zero recovery infrastructure — no drone shop, no rescue service, days from the next town.

**Why it happens:**
RTH is an easy setting to skip when it "just works" at home in a park. In the Gobi the stakes are categorically different: featureless dune terrain makes it hard to keep visual reference points, GPS/compass performance can degrade near steep canyon walls (Yolyn Am) or from magnetic interference, and there is no local repair/replacement option if something goes wrong.

**Prevention:**
- Make setting RTH altitude *above the tallest local obstacle* (canyon wall height at Yolyn Am, dune crest height at Khongoryn Els) a mandatory pre-flight step, taught explicitly per site where terrain height varies.
- Teach GPS/compass calibration and a "wait for strong GPS lock before takeoff" habit, especially near canyon walls or metal-heavy vehicles/camp gear.
- Teach maintaining visual/mental orientation over open terrain (use natural landmarks, note takeoff point relative to camp/vehicle) since a beginner can lose track of where "home" is on featureless sand much more easily than in a park.
- Recommend a maximum-distance discipline for beginners (don't push VLOS/signal range limits in unfamiliar terrain) rather than teaching aggressive long-range flying.

**Warning signs:** RTH altitude left at default (often 30–50m) without checking against local terrain height; weak GPS satellite count shown in-app before takeoff.

**Phase to address:** DJI Mini 5 Pro 조작·설정 chapter (RTH/pre-flight checklist) + per-site notes in 명소별 가이드 for Yolyn Am (canyon walls) and Khongoryn Els (dune height, featureless terrain).

---

### Pitfall 7: Blown-out highlights on bright dunes/white cliffs from not exposing correctly

**What goes wrong:**
Midday shots of Khongoryn Els' pale dunes or Tsagaan Suvarga's light-colored cliff faces come back with clipped, unrecoverable white highlights — the exact areas that carry the texture/ripple/erosion detail that make the aerial angle worthwhile in the first place.

**Why it happens:**
Bright sand and pale rock are highly reflective; the camera's auto-exposure (or a beginner eyeballing the live view on a small phone screen in bright sunlight) easily overexposes these surfaces, and once a highlight is clipped in-camera there is no recovering the detail in post — unlike a slightly underexposed shot, which RAW can often rescue.

**Prevention:**
- Teach "expose for the highlights, not the midtones" specifically for bright desert subjects — the inverse emphasis from the astro book's dark-sky exposure teaching, worth calling out as a deliberate contrast for a reader coming from that chapter.
- Enable and read the DJI Fly histogram/highlight-clipping (zebra) overlay rather than trusting the live-view screen in bright sunlight — screen glare is a form-factor reality, not a training gap, and readers need a tool-based check instead of trusting their eyes.
- Always shoot RAW/DNG (see Pitfall 8) so a slightly conservative exposure remains recoverable.
- Recommend AEB (auto exposure bracketing, 3/5/7 frames) for high-contrast dune/cliff scenes as a beginner-safe hedge.

**Warning signs:** histogram data piled against the right edge; zebra pattern covering large areas of sand/cliff in the live view.

**Phase to address:** DJI Mini 5 Pro 조작·설정 chapter (노출/히스토그램 section) + 명소별 가이드 (차강소브라가, 홍고린엘스 sections specifically — the two brightest/palest subjects).

---

### Pitfall 8: Skipping RAW/DNG and shooting JPEG-only, or skipping ND filters and accepting a bad shutter speed

**What goes wrong:**
A beginner leaves the camera on default JPEG, loses the ability to pull back blown highlights or push shadow detail in post, and the "전/후 보정" pattern the rest of the book already teaches (RAW develop workflow) becomes unusable for their drone photos. Separately, shooting bright daylight without an ND filter forces either a very fast shutter (fine for stills, but trains a bad habit) or, when the reader later tries hyperlapse/video, a shutter speed far off the 180-degree-rule norm, producing strobe-y/unnatural motion.

**Why it happens:**
JPEG is the DJI Fly default and "looks fine" on the small in-app preview, so a beginner has no obvious signal they're leaving quality on the table. ND filters are an extra accessory purchase and an extra step (screw on, recheck exposure) that's easy to skip when "it looks bright enough already."

**Prevention:**
- Set RAW/DNG capture as the default instruction from the first settings walkthrough, framed as "이 책의 후보정 챕터를 그대로 재사용하려면 RAW가 필요합니다" — tie it explicitly to the reuse of the existing `05-postprocessing/raw-develop.md` workflow so the reason is concrete, not abstract.
- Recommend a small ND filter set (ND8/32/128 range, as sold for this drone) as a low-cost, high-value accessory purchase specifically for bright Gobi daylight, and teach the simple selection rule (dawn/dusk → weaker ND, midday bright → stronger ND) rather than a full cinematography ND lecture.
- Since 영상 is intentionally brief in this book's scope, keep the ND-for-video explanation short (one line: "영상엔 180도 셔터 규칙 참고") rather than expanding it into a full topic — avoid scope creep past the "사진 중심" decision.

**Warning signs:** draft content that shows only JPEG output examples; no mention of ND filters anywhere in the settings chapter despite "주간 중심" being the stated focus.

**Phase to address:** DJI Mini 5 Pro 조작·설정 chapter — core content, not an aside.

---

### Pitfall 9: Overpromising drone night/Milky Way capability the Mini-class hardware can't deliver

**What goes wrong:**
A reader who just finished the book's existing astro-photography chapters (tracker-free Milky Way with a mirrorless camera) assumes the newly-added drone part will let them also get aerial Milky Way shots, tries it in the field, and is disappointed or wastes trip time attempting a shot the hardware fundamentally can't produce well.

**Why it happens:**
It's an intuitive but wrong assumption — "if the drone has a big sensor and RAW, why not stars too?" DJI drone cameras (including Mini-class) are capped around 8-second maximum exposure, cannot reliably autofocus/pre-focus precisely on stars via live view, and are mounted on a gimbal subject to wind/propeller micro-vibration — all of which defeat the 10–25 second, rock-steady exposures Milky Way photography needs. This is exactly why PROJECT.md already scoped the drone part to "주간·황혼 중심" and excluded night — but that scoping decision needs to be *stated to the reader*, not just followed silently by the author.

**Prevention:**
- State the scope boundary explicitly and early in the 드론 사진 개요 chapter: "이 드론 파트는 주간·황혼(골든아워/블루아워) 사진에 집중합니다. 은하수 등 야간 항공 촬영은 Mini급 드론의 하드웨어 한계(최대 노출 시간, 짐벌 흔들림, 정밀 포커싱 어려움)로 다루지 않으며, 이 책의 은하수 파트는 지상 촬영 기준입니다." — turn the exclusion into a taught fact, not a silent gap.
- Do not let a stray line elsewhere in the drone chapters imply night capability (e.g., in a "장점" list) that contradicts this scoping.

**Warning signs:** any promotional-sounding line about the drone's low-light sensor bleeding into an implied night-shooting capability without the explicit hardware-limitation caveat attached.

**Phase to address:** 드론 사진 개요 chapter (opening scope statement) — cheap to fix, high cost if missed since it sets reader expectations for the entire part.

---

## Technical Debt Patterns

Shortcuts that seem reasonable in content production but create long-term problems for this specific book.

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|-----------------|------------------|
| Copying a blog aggregator's Mongolia drone-law numbers verbatim without a caveat | Saves research time, sounds authoritative | Book states a legally-wrong fact readers rely on for a real trip; reputational/liability risk if wrong | Never — always caveat or mark 미확인 |
| Writing the DJI Mini 5 Pro spec sheet from memory/training data instead of the current official spec page | Faster drafting | DJI drone specs (weight, battery life, sensor) get revised across firmware/hardware runs; a stale number undermines the book's other verified content | Never for numbers that affect legal weight class or purchase decisions; low-stakes for general marketing copy |
| Reusing v1.0's cold-battery/dust-hazard prose unchanged instead of adapting phrasing for drone-specific context (motors/gimbal vs. camera body) | Fast, proven prose | Reads as copy-pasted, misses drone-specific failure modes (motor sand ingestion has no camera-body equivalent) | Acceptable for the *physics explanation* (cold = capacity loss), not acceptable for the *prevention checklist* (must be drone-specific) |
| Skipping the "check official sources before travel" disclaimer because it was already said once in the intro | Cleaner prose, less repetition | A reader who jumps straight to the 명소별 가이드 or 참고자료 chapter without reading the intro never sees the caveat | Never — repeat the caveat at every point a specific legal/regulatory claim appears, not just once globally |
| Describing national park drone rules as "허용됨" or "금지됨" definitively because no source explicitly banned it | Sounds decisive, avoids hedging language | Directly false-confident claim in a domain where no source has confirmed either direction | Never |

---

## Integration Gotchas

Common mistakes when relying on/citing external authorities and sources for this content.

| "Integration" | Common Mistake | Correct Approach |
|-------------|----------------|-------------------|
| CAAM (Mongolia Civil Aviation Authority) | Treating a blog's paraphrase of CAAM rules as equivalent to CAAM's own text | Cite CAAM's own Part 101/Part 102 documents where reachable (`backend-api.mcaa.gov.mn/storage/filemanager/...`) and the ops@mcaa.gov.mn contact for anything not confirmable in the primary text |
| Gobi Gurvansaikhan National Park authority | Assuming the park's general visitor rules (found on tourism sites) cover drone-specific policy | Explicitly tell the reader this is unconfirmed and must be checked at the park gate / through a local guide — do not extrapolate a drone rule from general park-visitor content |
| DJI official spec/support pages | Citing a leaked/rumor spec page (pre-launch leak sites) as final spec | Cite DJI's own current product page for anything stated as fact (weight, battery life, sensor); note the ±4g manufacturing tolerance explicitly since it's directly relevant to the 250g legal question |
| Third-party drone-law aggregator sites (drone-laws.com, propelrc.com, etc.) | Using them as the sole source for a legal claim | Fine to use as a *starting point / cross-check*, never as the sole citation for a legal fact stated in the book |
| Tour operator / local guide (informal source) | Assuming a single guide's anecdote ("몽골에서 드론 문제 없었어요") generalizes to all sites/seasons/officials | Frame guide advice as "현지 가이드에게 도착 즉시 확인" — a practical fallback procedure, not a substitute for the regulation content itself |

---

## Security Mistakes

Domain-specific privacy/safety issues beyond general web security — this book is a static content site, so "security" here means reader privacy/safety and subject privacy, not application security.

| Mistake | Risk | Prevention |
|---------|------|------------|
| Flying over/photographing herders, livestock, or local people without consent | Legal risk under CAAM's consent-for-overflight rule (confirmed in Part 101 §101.207); cultural offense; livestock can be spooked by drone noise causing real harm/liability | Teach explicit consent-seeking as a named step in the pre-flight checklist, not an aside; call out livestock-spooking as a distinct local-etiquette point (already flagged in FEATURES.md research) |
| Publishing exact GPS coordinates / flight paths for fragile or sensitive dune/cliff areas | Could encourage traffic to fragile erosion-prone terrain (Tsagaan Suvarga cliffs, Bayanzag fossil beds) beyond what the site can sustain | Keep location guidance at the same granularity the v1.0 ground-level chapters already use — site name + general access info, not a precision flight-path GPX file |
| Embedding photo EXIF/GPS metadata in any example gallery images without review | Could reveal exact camp/private locations if example photos come from personal trip data later | Strip or review EXIF on any real photos added post-trip before publishing in the gallery/reference section |

---

## UX Pitfalls

Reader-facing mistakes specific to how this content should be structured.

| Pitfall | Reader Impact | Better Approach |
|---------|----------------|-------------------|
| Burying the Mongolia legal/regulation content deep in an appendix reference page instead of up front | A reader who skips straight to "명소별 가이드" for trip planning never sees the legal caveats before assuming they can fly | Put a short, prominent regulation summary + caveat in the 드론 사진 개요 chapter (the entry point), with the full detail in 참고 자료 — summary-then-detail, not detail-only |
| One generic "고비는 바람이 강합니다" wind warning instead of per-site specifics | Reader doesn't know Khongoryn Els (open dune sea, highest exposure) is materially riskier than Baga Gazriin Chuluu (granite formations, some wind-break) | Give each of the 5 site sections its own specific hazard note, not one shared paragraph |
| Implying the whole book (including night astro chapters) applies equally to the drone, when night astro is ground-camera only | Reader tries to apply Milky Way settings/techniques to the drone and fails per Pitfall 9 | Explicit scope statement per Pitfall 9's prevention |
| Writing the RTH/pre-flight checklist as flowing prose instead of a scannable checklist | Under field conditions (wind, sun glare, limited time at golden hour) a reader needs to scan, not read paragraphs | Match the existing v1.0 checklist/cheat-sheet pattern already established in `06-bonus`/appendix content |

---

## "Looks Done But Isn't" Checklist

Things that will appear complete in a draft but are missing critical pieces.

- [ ] **몽골 규제 섹션:** Often missing the explicit "미확인/재확인 필요" tag on the registration fee and any weight-exemption claim — verify every specific number has either a primary-source citation or a visible caveat.
- [ ] **명소별 가이드 (욜링암/홍고린엘스):** Often missing the national-park-specific "on-site 재확인 필요" caveat — verify it's present in both sections, not just a general note elsewhere.
- [ ] **DJI Mini 5 Pro 사양 인용:** Often missing the ±4g weight tolerance caveat when weight is mentioned in a legal context — verify it's attached wherever weight is tied to a legal threshold.
- [ ] **배터리/RTH 체크리스트:** Often missing terrain-specific RTH altitude guidance (canyon at Yolyn Am vs. dunes at Khongoryn Els) — verify each site page states or links a concrete altitude reference, not just "RTH 고도를 설정하세요."
- [ ] **노출/ND 필터 설명:** Often missing the explicit RAW/DNG-first instruction tied back to the reused `05-postprocessing` workflow — verify the cross-link exists and isn't assumed implicit.
- [ ] **드론 파트 스코프 고지:** Often missing an explicit "야간/은하수 제외" statement even though PROJECT.md already decided this — verify the decision is stated to the *reader*, not just tracked internally.
- [ ] **모래/먼지 유지관리:** Often missing a concrete post-flight cleaning step per site — verify it's not just a one-time mention in the intro but repeated where it matters (Khongoryn Els).

---

## Recovery Strategies

When pitfalls occur despite prevention, how to recover.

| Pitfall | Recovery Cost | Recovery Steps |
|---------|----------------|------------------|
| Published regulation content later found factually wrong (CAAM changed a rule, or a source was mistaken) | LOW | mdBook content is easy to correct post-publish; add a dated correction note and update the page — the existing "미검증 표기" practice already primes readers to expect possible updates |
| Reader reports being turned away / fined at a national park for flying | LOW–MEDIUM | Update the specific site section with the reported outcome as an added data point (with date), strengthening future editions' caveat rather than treating it as a one-off |
| Drone actually lost/crashed by a reader following the book's guidance | MEDIUM (reputational, not code) | Review whether the specific pre-flight/RTH guidance that was followed had a gap; patch the checklist; this is exactly why the RTH/pre-flight content needs to be conservative rather than optimized for "getting the shot" |
| DJI Mini 5 Pro spec cited in the book becomes outdated after a firmware/hardware revision | LOW | Refresh the spec citation in 드론 참고 자료 — isolated to one reference page, doesn't cascade into technique chapters since those teach concepts (RAW, ND, exposure) that don't depend on exact spec numbers |

---

## Pitfall-to-Phase Mapping

How the v1.1 drone-part chapters (per PROJECT.md's Active requirements) should address these pitfalls.

| Pitfall | Prevention Chapter | Verification |
|---------|----------------------|----------------|
| Unverified Mongolia legal claims (Pitfall 1) | 드론 참고 자료 (규제/허가) + brief mention in 드론 사진 개요 | Every specific number (fee, weight threshold, processing days) has either a primary CAAM citation or a visible "미확인" tag |
| National park / Yolyn Am restriction uncertainty (Pitfall 2) | 명소별 드론 촬영 가이드 (욜링암, 홍고린엘스 sections) | Both sections contain an explicit "현지 재확인 필요" caveat, not just a general note elsewhere in the book |
| Gobi wind (Pitfall 3) | DJI 조작·설정 (사전 점검) + 명소별 가이드 (홍고린엘스) | Wind ceiling guidance references a concrete personal margin below rated max, not just "바람이 강하면 주의" |
| Sand/dust ingestion (Pitfall 4) | 고비 사막 환경 대응 content (either within DJI 사용법 or 명소별 가이드) | Launch-surface and post-flight cleaning steps present, not just a one-line mention |
| Cold/heat battery drain (Pitfall 5) | DJI 조작·설정 (배터리 관리) | Cross-link to `03-practice/field-prep-and-hazards.md` exists and cold-vs-heat both covered |
| RTH / lost-drone risk (Pitfall 6) | DJI 조작·설정 (RTH) + per-site notes | RTH altitude guidance is terrain-specific per site, not one generic number |
| Blown highlights (Pitfall 7) | DJI 조작·설정 (노출/히스토그램) + 명소별 가이드 (차강소브라가, 홍고린엘스) | Histogram/zebra-based exposure check taught explicitly, not "trust the screen" |
| Skipping RAW/ND (Pitfall 8) | DJI 조작·설정 (촬영 설정) | RAW/DNG set as default instruction; ND filter selection rule present |
| Overpromising night capability (Pitfall 9) | 드론 사진 개요 (opening scope statement) | Explicit night/Milky Way exclusion statement present near the top of the chapter |

---

## Sources

**Primary/official (higher confidence):**
- Mongolia CAAM Part 101 — Gyrogliders and Parasails, Unmanned Aircraft (Including Balloons), Kites, and Rockets, Operating Rules (CAA 24101/02, Rev 2(1), Jan 2020) — `https://backend-api.mcaa.gov.mn/storage/filemanager/9f4e7437-9085-44fc-821e-4dd87898c872.pdf` — successfully read; confirms altitude/VLOS/4km/night/consent/mass-limit rules; does NOT contain a sub-250g exemption clause.
- Mongolia CAAM Part 102 — Unmanned Aircraft Operator Certification — `https://backend-api.mcaa.gov.mn/storage/filemanager/d9f072d6-ecea-4d40-89cb-5f0f9b979805.pdf` — located but not text-extracted in this pass; likely holds registration/certification detail not covered by Part 101; recommended follow-up read.
- Civil Aviation Authority of Mongolia (CAAM) — `https://mcaa.gov.mn` / `ops@mcaa.gov.mn` / +976-11-285013 — official regulator; site navigable but detailed drone-specific pages not reachable via WebFetch in this session.
- Law of Mongolia on Special Protected Area (1994) — `https://www.uaipit.com/uploads/legislacion/files/1413197290_20._Ley_mongolia_zona_especial_proteccion_EN.pdf` — located, PDF not text-extractable in this pass; establishes the general legal category Gobi Gurvansaikhan National Park falls under, but no specific drone/aircraft clause was confirmed.

**Secondary (cross-referenced, moderate confidence — used for figures NOT contradicted by the primary source):**
- [Mongolia Drone Laws 2026 — drone-laws.com](https://drone-laws.com/drone-laws-in-mongolia/)
- [Drone Laws In Mongolia 2026 — propelrc.com](https://www.propelrc.com/drone-laws-in-mongolia/)
- [Updated Drone Laws In Mongolia — Skyward Wings](https://skywardwings.com/latest-drone-laws-in-mongolia/)
- [Drone Regulations in Mongolia — danistanomads.com](https://danistanomads.com/mongolian-culture/drone-regulations-in-mongolia/)
- [Are drones allowed in Western Mongolia? — vacationsmongolia.com](https://www.vacationsmongolia.com/post/are-drones-allowed-in-western-mongolia-what-travelers-need-to-know)
- [Mongolia Drone Laws (Guide 2024) — canifly.in](https://canifly.in/mongolia)
- [Mongolia Drone Laws 2025 — droneller.com](https://droneller.com/blog/mongolia-drone-laws/)

**DJI Mini 5 Pro hardware (moderate-high confidence, cross-referenced across owner community + press):**
- [Does DJI Mini 5 Pro drone actually weigh under 250 grams? — dronedj.com](https://dronedj.com/2025/09/17/dji-mini-5-pro-weight/)
- [DJI Mini 5 Pro Weight: Is It Still Considered Sub-250g? — dronexl.co](https://dronexl.co/2025/09/19/dji-mini-5-pro-weight-sub-250g/)
- [Is the Mini 5 Pro a sub-250g drone? — mavicpilots.com forum](https://mavicpilots.com/threads/is-the-mini-5-pro-a-sub-250g-drone.153582/)
- [DJI Mini 5 Pro Long-Term Review: Battery — dronexl.co](https://dronexl.co/2025/12/08/dji-mini-5-pro-long-term-review-battery/)
- [DJI Mini 5 Pro ND Filters guide — Freewell Gear](https://freewellgear.com/blogs/news/best-nd-filters-dji-mini-5-pro-cinematic-guide)
- YouTube — "I Tested the DJI Mini 5 Pro at Night… And Found a Big Problem" (night-shooting limitation, corroborates Pitfall 9)

**Gobi environmental/physical (cross-referenced, higher confidence):**
- [Gobi Gurvansaikhan National Park — Wikipedia](https://en.wikipedia.org/wiki/Gobi_Gurvansaikhan_National_Park)
- [Yolyn Am — Wikipedia](https://en.wikipedia.org/wiki/Yolyn_Am)
- mavicpilots.com forum threads: "Mongolia from above," "Two weeks in Mongolia (a drone pilots paradise)," "Gobi Desert, Mongolia," "The Sand Dunes of the Gobi Desert Mongolia" — practical pilot-reported wind/sand/terrain conditions
- Elevation/altitude data (maplogs.com, Gobi Desert Wikipedia) — general Gobi elevation ~1,580 m; not extreme-altitude, so lift/thin-air impact is minor relative to wind and sand as the dominant environmental risks

**Internal project sources (already validated in this project):**
- `.planning/PROJECT.md` — v1.1 scope decisions (사진 중심, 주간·황혼 중심, 몽골 규제 검증 필수)
- `.planning/research/FEATURES.md` — parallel research pass covering the same domain from a feature-landscape angle; corroborates the "미검증" framing already adopted for this content area and the sub-250g borderline-weight flag

---
*Pitfalls research for: Beginner drone photography travel guide (Mongolia Gobi, DJI Mini 5 Pro)*
*Researched: 2026-07-13*
