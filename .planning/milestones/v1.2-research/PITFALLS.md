# Pitfalls Research

**Domain:** Adding a beginner daytime/twilight travel-photography part (Canon R7 + Samyang AF 12mm F2.0 RF-S + Canon RF 50mm F1.8 STM) as the new top-level Part 1 of an existing Korean mdBook photo guide that already has drone (Part 1→2) and tracking-free Milky Way (Parts 2-5) parts, under a strict "verified fact only / free-license images only / mark unverified 미확인" honesty rule.
**Researched:** 2026-07-14
**Confidence:** HIGH on reference-photo licensing mechanics and on this book's existing honesty conventions (directly read from the repo's own prior chapters — `introduction.md`, `08-references/drone-galleries.md`, `08-references/drone-mongolia-regulations.md`); HIGH on Samyang AF 12mm F2 RF-S existence/specs and Canon R7 IBIS/weather-sealing (verified via product page, reviews, press coverage); MEDIUM-HIGH on Mongolia people-photography etiquette (cross-referenced against Eternal Landscapes, a Mongolia-specialist tour operator already cited elsewhere in this project's research, plus multiple independent travel-etiquette sources that agree); MEDIUM on exact redundancy boundaries since the new part's chapter list doesn't exist yet (based on the existing SUMMARY.md structure and content already written for drone/astro parts).

---

## Critical Pitfalls

### Pitfall 1: Treating "found on Google Images" or "downloaded from Instagram/500px" as good enough for an embedded reference photo

**What goes wrong:**
The book embeds (downloads + rehosts under `src/images/...`) a reference photo of a Gobi landmark or a portrait-style travel shot pulled from a Google Images search, an Instagram post, a 500px portfolio, or a Flickr photo marked "All Rights Reserved" — all four of which are **default-copyrighted, non-free sources** — and captions it the same way the book captions its verified CC images. This directly violates the book's own stated honesty rule ("무료 라이선스 이미지만 임베드, 불가능하면 링크") and, unlike a wrong regulation number, is a live copyright-infringement risk the moment the site is published, not just a documentation quality issue.

**Why it happens:**
Google Images is not a license source — it is a search index that surfaces images regardless of license, and many results are default-copyright (all rights reserved) even when they visually "look free." Instagram and 500px similarly retain full copyright with the uploader by default; there is no platform-wide free-reuse grant like Wikimedia Commons or Unsplash. It is easy to confuse "publicly viewable" with "freely reusable" — this is the exact same confusion the drone-galleries.md chapter already had to correct for SkyPixel (see below), and this new part will hit it again independently because travel/people photos are disproportionately sourced from exactly these platforms in general web search.

**The book's existing embed-vs-link decision rule (already established, extend it — do not reinvent):**

| Source | Embed (download + rehost) allowed? | Why |
|---|---|---|
| Wikimedia Commons — file explicitly tagged CC0 / Public Domain / CC BY / CC BY-SA | **Yes** | Per-file license is verifiable on the file page; this is the book's primary embed source for both `introduction.md` and `drone-galleries.md` |
| Unsplash (photo, no visible people, or people are non-identifiable/background) | **Yes, with caveats** | Unsplash License permits commercial/non-commercial reuse without attribution requirement, but it is **not CC0** — redistributing the image unmodified as a stock-photo product is prohibited (not relevant here), and attribution, while optional, is still good practice for this book's own honesty pattern |
| Unsplash (photo with an identifiable person as the visual subject) | **No — link only, or find a non-identifiable alternative** | Unsplash's own help documentation states a model release is needed for identifiable people used commercially, and Unsplash does not guarantee model releases exist; this book cannot verify model releases photo-by-photo, so treat any Unsplash photo with an identifiable face/subject as link-only or avoid |
| SkyPixel, 500px, Instagram, Flickr "All Rights Reserved" | **No — view/link only** | Individual photographer retains full copyright; no reuse grant to third parties exists. This book already established this exact rule for SkyPixel in `drone-galleries.md` — apply identically here |
| Google Images / Pinterest / Naver 이미지 검색 | **Never treat as a source at all** | These are search indexes, not licenses — the underlying image's real license/origin must be traced back to its actual source page before any embed/link decision can be made |
| A blog or news site's own uploaded photo (not Wikimedia/Unsplash) | **No — link only, unless the page itself states a CC license** | Most travel blogs are default-copyright; only embed if the specific page states a reusable license (rare) |

**Attribution format (already established in `introduction.md`'s "이미지 출처" table and per-caption pattern — reuse verbatim):**
- Inline caption under the image: *"사진: [작가명] ([라이선스명 + 링크])."* — e.g. `사진: amanderson2 (CC BY 2.0)`.
- A closing "이미지 출처" table per chapter/page listing: 파일명 | 설명 | 저작자 | 라이선스 | 출처(링크to the Commons/Unsplash file page, not just the homepage).
- CC BY / CC BY-SA legally *require* attribution — CC0/Public Domain do not require it but the book attributes anyway for transparency (already the house style).
- **CC BY-SA share-alike catch:** if a CC BY-SA image is embedded, note that reusers of *this book's* content who further reuse that specific image inherit the same share-alike obligation — this is already correctly flagged in `drone-galleries.md`; carry the same one-line explanation into any new travel gallery/reference page that embeds a BY-SA file.

**Honest captioning (already established, extend to travel-photo-specific cases):**
- "실제 명소 vs 예시" — every non-book-original photo of a named Gobi site must state plainly whether it is (a) the actual site (even if not the author's own shot) or (b) a visually-similar example from elsewhere, using the book's existing phrasing pattern: *"예시 이미지 — 실제 [명소]는 아닙니다."* vs *"[명소] — 실제 현지 사진(저자 촬영 아님)."*
- "지상 vs 항공" — this book now has three photographic vantage points (travel/ground, drone/aerial, astro/night-ground). A travel-part reference photo must not be silently mistaken for a drone shot or vice versa; state the vantage explicitly, e.g. *"지상에서 촬영, 드론 항공사진 아님."* This matters specifically because Wikimedia's "Aerial photographs of Mongolia" category (already flagged as unreliable in `drone-galleries.md` — "개별적으로 확인된 것은 아님") sits right next to the ground-level categories used for this new part; do not let vantage get blurred when browsing the same Commons categories for both parts.
- "낮/황혼 vs 밤" — since the same 5 Gobi sites now appear across three parts (travel-day, drone-day/twilight, astro-night), every reused site photo must state its time-of-day so a reader doesn't think a daytime reference photo represents what they'll see at night (or vice versa) — directly extends the existing pattern already used in `introduction.md` ("주간 촬영. 밤에는 이 실루엀 위로 은하수가 뜬다").

**Prevention:**
- Before embedding any file, open its actual Commons file page (or Unsplash photo page) and confirm the license tag yourself — do not trust a category page's implied license (Commons categories mix licenses per-file, as `drone-galleries.md` already documents for the Gobi/aerial categories).
- For any reference photo containing an identifiable person, default to **link-only** unless the source is Wikimedia Commons with an explicit CC tag AND the file's own description doesn't flag a missing model release/privacy concern.
- Reuse the exact table+caption format from `introduction.md`/`drone-galleries.md` rather than inventing a new citation style for this part — consistency also makes it easy for a future reviewer to spot a missing entry.
- If a search turns up zero freely-licensed reference photos for a specific composition idea (e.g., "a person walking toward Tsagaan Suvarga at golden hour"), follow the precedent already set for Tsagaan Suvarga/Baga Gazriin Chuluu in `drone-galleries.md`: state plainly that no licensed photo was found rather than substituting an uncredited one — *"이 구도의 라이선스 확인 참고 사진을 찾지 못했습니다."*

**Warning signs:**
- An image file appears under `src/images/` with no corresponding row in a "이미지 출처" table.
- A caption says "사진: Instagram @username" or "출처: Google" with no license name attached.
- A person is clearly recognizable (face visible, not a small silhouette) in an embedded image and there's no model-release note.

**Phase to address:** The new part's reference/gallery chapter (analogous to `08-references/drone-galleries.md`, likely something like `여행 사진 참고 자료` per PROJECT.md's Active requirements) — this is the single highest-priority chapter to get right in this milestone, mirroring how Pitfall 1 was the top priority in the v1.1 drone milestone's regulations chapter.

---

### Pitfall 2: Generic "ask permission" advice that isn't Mongolia-specific, or Mongolia-specific advice presented as more settled than it is

**What goes wrong:**
The book either (a) gives bland universal travel-photography advice ("always ask before photographing people") that misses Mongolia-specific customs a beginner would have no way to know, leaving readers unprepared for gers, ovoos, and herding life specifically, or (b) states a specific cultural rule as flat fact when it is actually guide-mediated/situational, contradicting this book's own "미확인 표기" discipline that the drone/regulations chapters already established.

**Why it happens:**
Cultural-etiquette content is easy to either skip (feels tangential to "photography technique") or over-generalize from Western travel-blog listicles that repeat each other without local grounding — the same "content-mill echo" problem this project already diagnosed for Mongolia drone-law blogs in the v1.1 PITFALLS research (Pitfall 1 there). This book's own honesty principle demands the same skepticism be applied to cultural claims, not just legal/technical ones.

**Mongolia-specific guidance verified across multiple sources (cross-referenced: Eternal Landscapes — a Mongolia-specialist tour operator already cited as a reputable source in this project's `mongolia-travel-info.md` — plus Discover Mongolia, World Nomads, and Atlas Mongolia Travel, which independently converge on the same core points):**

- **Consent for identifiable people, every time.** Ask before photographing anyone identifiable — gesture, a few Mongolian words, or through a guide. If someone declines, turns away, or adjusts their appearance/clothing before you shoot, respect it; never sneak the shot with a telephoto lens instead. This is the direct people-photography analog of the drone part's already-established "동의 필요" rule (CAAM Part 101 §101.207, cited in `08-references/drone-mongolia-regulations.md`) — cross-link the two rather than treating them as unrelated.
- **Gers are homes, not photo sets.** A *tourist ger camp* guest ger is fine to photograph freely (it's your temporary lodging). A *nomadic family's own ger* is a private home — ask before entering with a camera, never step on/over the wooden entrance threshold (considered part of the home's structural/spiritual integrity, not just a doorstep), and don't rearrange belongings or reposition people for a better shot.
- **Children — no exceptions, no incentives.** Get a parent/guardian's explicit permission for any identifiable child. Never offer candy, money, or toys to get a child to pose — this is called out specifically across sources as corrupting the relationship and encouraging performative begging behavior in future visitors.
- **Herders' work takes priority over your shot.** Livestock management, water, food prep, and seasonal tasks come first; be ready for a promised photo moment to be cancelled or delayed by weather, an animal emergency, or timing — this isn't obstruction, it's real life continuing around you.
- **Livestock aren't props.** Don't chase, crowd with a vehicle, or stage animals for a shot; if an animal looks stressed or over-handled, step back — sometimes not getting the photo is the responsible call.
- **Privacy markers exist that outsiders can't read.** A lasso pole or wooden stick planted upright near a ger/camp can signal "do not disturb" — ask your guide to point these out; don't assume an empty-looking approach path means it's fine to walk up with a camera.
- **Ovoo (sacred cairn shrines) have specific ritual etiquette, not just "be respectful":** if invited to participate, circle clockwise three times, and only add a stone/offering if shown how — never remove stones, khadag (blue scarves), or offerings for a "cleaner" composition. This is more specific and more actionable for a beginner than a vague "respect sacred sites" line, and multiple independent sources (Wikipedia, Eternal Landscapes, Silk Road Mongolia, Buman Tour) converge on the same three-circuits-clockwise + three-stones pattern — HIGH confidence on this specific ritual detail, though exact offering customs (money vs. milk vs. sweets) vary and should be framed as "지역/가이드마다 다를 수 있음."
- **No direct payment for photos, especially of children.** Instead of cash-for-photo, the recommended alternative pattern (again converging across sources) is: buy something small from a market vendor, offer to send back a printed/digital copy of the photo afterward, or support through the tour operator's fair-trade relationships — paying per-photo (particularly to kids) is explicitly flagged as encouraging staged/performative "photo ops" that degrade the interaction for future visitors, not just an ethical nicety.
- **Avoid the "noble nomad against empty steppe" stereotype trap** as a composition-level pitfall, not just an ethics one — a guide explicitly recommends photographing the *actual* mixed-modernity of Mongolian daily life (motorcycles, solar panels, phones, petrol stations alongside gers and deels) rather than only chasing the postcard image, which is also directly relevant to this book's "honesty" principle (don't stage a scene to look more "traditional" than it is).

**Confidence caveat — mark clearly in the book:** the ritual specifics (ovoo offering types, exact ger threshold rules, payment norms) come from **tourism-industry secondary sources** (tour operator blogs, travel guides), not ethnographic/anthropological primary sources or a Mongolian cultural authority. They are consistent across independently-operated sources, which raises confidence, but this book should frame them the way it already frames Mongolia travel-info content elsewhere ("일반적으로 알려진 내용," "가이드에게 현장에서 확인") rather than as absolute anthropological fact — reuse the exact hedging phrasing pattern from `08-references/mongolia-travel-info.md`'s 건강/안전 section.

**Prevention:**
- Write a dedicated 사람/현지 촬영 에티켓 subsection inside the "여행 사진 잘 찍는 법" chapter (per PROJECT.md's planned "구도·빛·타이밍·풍경·현장/사람" scope) rather than a single throwaway line — this is table-stakes content for this milestone's people-photography focus, not an aside.
- Cross-link explicitly to the drone part's existing consent rule (`08-references/drone-mongolia-regulations.md`'s "사람·재산 상공... 동의 필요" row) so the reader sees the ground-photography and aerial-photography consent rules as one consistent principle, not two unrelated facts in two unrelated parts.
- Tag ritual-specific details (ovoo, payment norms) with the same "가이드에게 확인" hedge already used throughout `mongolia-travel-info.md`, rather than stating them as fixed rules.
- Do not invent a payment amount, a specific threshold-etiquette rule, or a specific ovoo offering custom not found in the sources above — if a claim can't be traced to at least one of the sources cross-referenced here, mark it 미확인 or omit it.

**Warning signs:**
- A "사람 찍기" section reads as generic Western street-photography etiquette with no Mongolia-specific content (gers, ovoo, herders, threshold).
- A specific monetary payment figure or ritual step appears without a source, phrased as settled fact.
- Consent-for-people content in the new travel part doesn't cross-reference the drone part's already-published consent rule, creating an inconsistent "two rulebooks" feel across the same book.

**Phase to address:** "여행 사진 잘 찍는 법" chapter (사람/현지 촬영 subsection) — also touches the per-site guide chapters if any site (e.g., a ger camp stop, or an ovoo near Baga Gazriin Chuluu) gets a people/culture-specific note.

---

## Moderate Pitfalls

### Pitfall 3: Re-teaching composition/exposure/RAW-workflow/GPS content that already exists elsewhere in the book, instead of linking to it

**What goes wrong:**
The new travel part re-explains concepts the book has already taught in the drone or astro parts — composition theory, histogram/highlight-exposure reading for bright desert subjects, the RAW-develop workflow, or the Gobi site GPS table — creating duplicate (and potentially inconsistent, if phrased differently) content across three parts of the same book. Over time this becomes a maintenance burden: a future correction to one copy doesn't propagate to the others, and readers who read the book front-to-back (as it's now structured, travel-first) hit the same lesson three times with slightly different wording.

**Why it happens:**
Each part was/will be researched and written somewhat independently (v1.0 astro, v1.1 drone, v1.2 travel), and "day travel photography" genuinely does overlap with the drone part's daytime concerns (same bright dunes, same white cliffs, same Gobi dust/wind) and with the astro part's gear-selection logic (same crop-sensor math, same RAW rationale) — it is easy for each milestone's content to be written as if starting from zero rather than checking what the book already established.

**Concrete reuse targets already in the repo — link to these, do not restate:**

| Existing content | Where | What the travel part should NOT re-explain |
|---|---|---|
| Exposing for bright dunes/pale cliffs, histogram/highlight-clipping check | `09-drone/composition.md` ("항공 특유의 빛 읽기") + v1.1 PITFALLS Pitfall 7 | The travel part will hit the *exact same* Khongoryn Els/Tsagaan Suvarga bright-surface overexposure problem at ground level — link to the drone chapter's histogram-based exposure lesson and only add what's different at ground level (e.g., backlighting a person against a bright dune), not re-teach histograms from scratch |
| RAW rationale + RAW develop workflow | `02-fundamentals/raw-and-wb.md`, `05-postprocessing/raw-develop.md` | Travel photos should also be shot RAW for the same reason astro/drone photos are — state it once with a link ("이 책의 후보정 챕터를 그대로 재사용하려면 RAW가 필요합니다" — the exact phrasing v1.1 already used for the drone part) rather than re-deriving the RAW-vs-JPEG argument a third time |
| Crop-factor / focal-length-equivalent math | `07-appendix/camera-lens-picks.md` ("당신의 카메라에 맞추기") | The 12mm≈19mm / 50mm≈80mm equivalence math for the R7's 1.6× crop factor is the *same 3-step method* already documented for astro lens selection — link to it rather than re-deriving crop factor from scratch, even though the travel part's use case (daytime framing, not the 500/NPF rule) differs |
| Gobi site GPS coordinates | `04-mongolia/overview.md` (표: 촬영지 GPS) | Do not re-publish a second GPS table for the same 5 sites with the travel part's own numbers — link to the existing table as the single source of truth, and if the travel part's per-site pages need a coordinate, reference the overview table rather than duplicating (duplication risks the two tables silently drifting apart, e.g. if one gets corrected and the other doesn't) |
| Gobi dust/wind/cold-battery hazard content | `09-drone/gobi-environment.md` (drone-specific) + `03-practice/field-prep-and-hazards.md` (astro-camera-specific) | Neither existing chapter is written for a **daytime, hand-carried camera with interchangeable lenses** — this is a genuine gap, not full redundancy (see Pitfall 5 below), but the underlying physics (cold drains batteries, fine sand is abrasive, wind degrades tripod/handheld stability) should be cross-linked to the existing explanations rather than re-explained from first principles a third time |
| Mongolia travel logistics (visa, ger camps, currency, connectivity, safety) | `08-references/mongolia-travel-info.md` | The travel-photo part is about *photography*, not trip logistics — resist the temptation to re-explain ger-camp electricity hours or ATM availability inside a photography chapter; link to the existing reference page instead |
| National-park/site-specific hazard notes (already written per-site for astro) | `04-mongolia/{site}.md` (terrain, footing, fossil-bed fragility at Bayanzag, etc.) | If the travel part adds its own per-site pages (per PROJECT.md's "코스 명소별 여행 사진 가이드"), site-physical-hazard content (uneven terrain, fragile fossil beds, canyon wind at Yolyn Am) already exists for the astro-night versions of these same 5 sites — cross-link rather than rewrite, and add only what's different about the *daytime crowd/light/composition* angle |

**Prevention:**
- Before drafting each travel-part chapter, grep/search the existing `src/` tree for the same topic (composition, exposure, RAW, GPS, hazards) the way this research pass did, and default to "link + delta" instead of "rewrite."
- Reuse the book's own established cross-link phrasing pattern (e.g., "~는 이미 [챕터명]에서 다뤘으니 여기서는 다시 설명하지 않습니다" — used verbatim in `09-drone/gobi-environment.md` and `04-mongolia/overview.md`) so the travel part reads as integrated with the rest of the book, not bolted on.
- Where the travel part's version of a topic is genuinely different (e.g., handheld daytime IBIS vs. tripod-locked night exposure), state the delta explicitly rather than silently duplicating and letting the reader guess what's new.

**Warning signs:**
- A travel-part chapter draft explains histograms, RAW files, or crop factor from absolute zero with no link to the existing chapters that already cover this.
- A second GPS coordinate table for the same 5 Gobi sites appears with numbers that don't exactly match `04-mongolia/overview.md`.
- Site-specific hazard language (wind at Khongoryn Els, canyon walls at Yolyn Am) is rewritten with different numbers/phrasing than the existing drone or astro site pages.

**Phase to address:** All new travel-part chapters, but especially the "잘 찍는 법" (composition/exposure) chapter and the per-site guide chapters — cross-check against `09-drone/composition.md`, `04-mongolia/overview.md`, and the existing 5 site pages (both `04-mongolia/` and `10-drone-sites/`) before finalizing each new page.

---

### Pitfall 4: Overstating the Samyang AF 12mm F2 RF-S's optical performance, or fabricating/confusing its mount

**What goes wrong:**
The book either (a) doesn't mention the lens's well-documented barrel distortion, corner softness/coma wide open, and vignetting — setting a beginner up to be confused when their first wide-open ultrawide shots look soft-cornered and slightly distorted and think they did something wrong — or (b) states the wrong mount designation (this specific lens is **RF-S**, Canon's APS-C-only RF mount variant, not a full-frame-compatible RF lens), which matters because RF-S lenses mounted on full-frame RF bodies auto-crop, and a reader with a full-frame body could be misled about compatibility.

**Verified specs (Samyang's own product page, DPReview, Digital Camera World review, nightscapephotographer.com hands-on review — cross-referenced, HIGH confidence):**
- Full name/mount: **Samyang (Rokinon) AF 12mm F2.0 RF-S** — specifically for Canon's APS-C RF-S mount (released for preorder ~January 2025), not a generic "RF" lens.
- 12 elements/10 groups (1 ASP, 1 H-ASP, 3 ED), 99.1° field of view, F2–F22 aperture range.
- Autofocus via Samyang's Linear STM (stepping motor) — near-silent, with an MF/AF switch on the barrel.
- 213g, 57.2mm length, 62mm filter thread, 0.2m minimum focus distance, weather-sealed, ~$449 USD at launch.
- On the R7's 1.6× crop factor: 12mm × 1.6 ≈ **19.2mm full-frame-equivalent** ultrawide — matches PROJECT.md's "≈19mm 초광각" framing.
- **Optical behavior (from hands-on review, not spec sheet):** noticeable barrel distortion out of camera (easily corrected in post/Lightroom); at F2, some coma and softness toward the corners, improving substantially by F2.8; vignetting present at both F2 and F5.6 (less at F2, oddly — stopping down does not linearly reduce vignetting the way it does distortion/coma on this lens); at F2 on an APS-C sensor with this focal length, depth of field is shallow enough that getting both a close foreground element and a distant subject both sharp is genuinely hard — F2.8 is the reviewer's practical recommendation for landscape/nightscape-style shots with a foreground element.

**Why it happens:**
Marketing copy and spec sheets don't mention distortion/coma/softness — a beginner reading only the spec sheet (F2, sharp corners implied by omission) has no signal to expect these characteristics, and PROJECT.md's framing of this lens as simply "초광각" doesn't yet capture the practical shooting implications.

**Prevention:**
- State the mount correctly as **RF-S** (APS-C-specific) wherever the lens is named, and note explicitly that it will not mount on/is not designed for full-frame RF bodies — do not just say "RF 12mm."
- Teach barrel-distortion correction as an expected, normal post-processing step for this lens (link to whatever the book's RAW-develop chapter covers for lens-profile/distortion correction, or add a one-line mention there if it doesn't yet exist) rather than letting a beginner think the distortion is a defect.
- Recommend F2.8 as the practical working aperture for foreground+background sharpness in travel/landscape compositions, reserving F2 for cases where the foreground element is distant or blur is acceptable — directly reuse language from the hands-on review's finding rather than assuming F2 is always the "best" aperture just because it's the widest.
- Don't claim specific numeric MTF/sharpness percentages not found in a verifiable source — the qualitative distortion/coma/vignetting findings above are traceable to a named review; do not embellish them into invented numbers.

**Warning signs:**
- The lens is referred to as "RF 12mm" without the "-S" designation anywhere in the gear chapter.
- A sample-image caption shows a wide-open (F2) corner-to-corner sharp result presented as typical, without any distortion-correction or aperture caveat.
- Any full-frame RF body is mentioned as compatible with this lens without a crop/compatibility caveat.

**Phase to address:** The travel part's camera/lens settings chapter (Canon R7 + Samyang 12mm + RF 50mm) — coordinate directly with STACK research to ensure the mount designation and specs used there match what's verified here.

---

### Pitfall 5: The 19mm–80mm focal-length gap, and treating the RF 50mm F1.8 STM as a general-purpose travel lens without flagging its narrow effective field of view on APS-C

**What goes wrong:**
With only the Samyang 12mm (≈19mm equiv.) and the Canon RF 50mm F1.8 STM (≈80mm equiv. on the R7's 1.6× crop) in the kit, there is **no lens covering the most commonly used "normal/standard" travel-photography range (roughly 24–70mm equivalent)** — wide environmental scenes and street/portrait-length shots are covered, but general walk-around framing (a person + surrounding context, typical landscape-with-midground framing) falls in a gap between the two primes. A beginner who doesn't understand this will either awkwardly "zoom with their feet" inconsistently between two very different fields of view, or get frustrated that neither lens "just works" for an ordinary scene.

**Why this happens:**
The kit was assembled from what the author already owns (ultrawide prime + a compact 50mm STM, both inexpensive/lightweight primes bought independently, likely for different original purposes — the 50mm is a common cheap "nifty fifty" pickup, the 12mm a wide-astro/architecture lens) rather than designed as a coherent travel kit from scratch. On a full-frame body a 50mm is the classic "normal" focal length; on APS-C (1.6×) it becomes a **portrait/tight-detail** lens (≈80mm), which is a materially different use case than what "50mm" usually implies to a beginner coming from full-frame-centric general photography advice online.

**Prevention (already captured directionally in PROJECT.md, but make the *reasoning* explicit to the reader, not just the recommendation):**
- State plainly, with the actual numbers, that the two-prime kit covers ≈19mm and ≈80mm equivalent, and that this leaves the ≈24–70mm "normal" range uncovered — don't let the reader discover this gap by trial and error in the field.
- Present the RF-S 18-150mm (≈29–240mm equivalent on the R7) recommendation specifically as the fix for this gap, not as a generic "nice to have" zoom — the book should explain *why* this specific range was chosen (it starts near where the 12mm's usefulness tapers and extends past the 50mm's reach), reusing the same "추천만, 구매 강제 아님" framing already established project-wide (per PROJECT.md's Key Decisions table).
- Explicitly frame the RF 50mm F1.8 STM's role as **environmental portrait / detail / compression**, not "walk-around normal lens" — a beginner shooting a wide landscape and switching to the 50mm expecting a "slightly tighter" version of the same scene will be surprised by how much the framing changes at 80mm-equivalent.
- Verify (coordinate with STACK research) whether the RF 50mm F1.8 STM has any autofocus quirks or minimum-focus-distance limitations relevant to travel/detail shots (e.g., no weather sealing, screw-drive-free but STM-motor-based AF, ~0.3m minimum focus) rather than assuming full parity with pricier RF primes — do not state unverified AF specs as fact.

**Warning signs:**
- A gear chapter shows the 12mm and 50mm as if they form a complete "wide + normal" kit without ever stating the numeric equivalent-focal-length gap between them.
- The RF-S 18-150mm is recommended with generic "great all-in-one zoom" language rather than being explicitly tied to filling the specific 19–80mm gap this kit has.
- Any lens-comparison table states an unverified AF speed, weather-sealing, or minimum-focus-distance spec for the RF 50mm F1.8 STM without a citation.

**Phase to address:** Travel part's camera/lens settings chapter — same chapter as Pitfall 4, since both concern the same two-lens kit's real-world behavior.

---

### Pitfall 6: Treating "handheld + R7 IBIS" as a blanket substitute for a tripod, or overstating IBIS's stop-count in marginal light

**What goes wrong:**
The book leans on the Canon R7's in-body stabilization to justify a tripod-free, lightweight travel kit (consistent with the project's "가볍고 작은 구성" portability constraint) but implies or states this works equally well at golden-hour/blue-hour low light as it does at midday — leading a beginner to hand-hold a shot in dim golden-hour light that comes out blurred, when a brief tripod or brace would have saved it.

**Verified facts (Canon's own R7 spec page + press coverage, cross-referenced — HIGH confidence):**
- The R7 has in-body 5-axis stabilization rated **up to 8 stops of compensation when paired with a compatible IS lens** (coordinated IBIS+lens-IS) — but with a non-IS lens (both the Samyang 12mm AF RF-S and the Canon RF 50mm F1.8 STM are **non-stabilized primes** — neither has optical IS), the R7's IBIS-only compensation is meaningfully lower than the marketing "8 stops" figure, which specifically describes the lens+body combined-IS number under Canon's own coordinated-IS lens list.
- The R7's body is weather-sealed to a level Canon itself describes as comparable to the EOS 90D (dust/drip-resistant for light conditions, not heavy rain or sand-storm-grade sealing) — useful for Gobi dust exposure context, but should not be oversold as fully weatherproof.

**Prevention:**
- Do not cite "8 stops" of stabilization for this specific kit without the caveat that neither owned lens has optical IS, so the real-world handheld-shutter-speed safety margin with these two primes is body-IBIS-only, not the combined-IS marketing number.
- Recommend a concrete, conservative handheld shutter-speed floor for golden/blue-hour travel shots with this kit (a rule of thumb, not an invented precise number unless verified) rather than telling the reader "IBIS handles it" without qualification.
- Keep a compact/travel tripod (already covered generically in the astro gear chapters) positioned as a legitimate option for genuinely low-light blue-hour travel shots, not framed as astro-only equipment — this avoids silently contradicting the "handheld is fine" framing when blue-hour light gets marginal.
- Reuse the R7's already-noted weather-sealing level for Gobi dust guidance, and cross-link to the existing `09-drone/gobi-environment.md` dust-protection habits (blower, microfiber cloth, sealed case in transit) rather than re-deriving dust protection from scratch — but add the travel-kit-specific risk that isn't covered by the drone chapter: **lens-swapping in the field** (changing between the 12mm and 50mm primes, or attaching/removing the 18-150mm) exposes the open sensor mount to blowing Gobi sand in a way the drone (a sealed, non-interchangeable-lens system) never faces — this is a genuine gap in existing content, not a redundancy, and should get its own short callout (e.g., "렌즈 교체는 바람을 등지고, 가능하면 실내/차량 안에서").

**Warning signs:**
- A settings chapter states "8단 손떨림 보정" as if it applies with the owned primes, without the non-IS-lens caveat.
- No mention anywhere of sensor-dust risk specifically tied to swapping between the 12mm/50mm/zoom in the field.
- The tripod is framed as exclusively an astro-part accessory with no mention of its blue-hour travel use case.

**Phase to address:** Travel part's camera/lens settings chapter (IBIS/handheld guidance) + a short cross-link from `09-drone/gobi-environment.md`'s dust section or the travel part's own "잘 찍는 법"/현장 chapter for the lens-swap-dust callout.

---

## Minor Pitfalls

### Pitfall 7: Propagating the book's existing dead/undocumented "사진 준비" convention instead of fixing or properly linking it

**What goes wrong:**
`introduction.md` already contains a footnote pointing readers to "[사진 준비](07-appendix/checklists.md) 규칙" for image resize/EXIF-strip conventions (max 2000px, EXIF removal, recompression) — but `07-appendix/checklists.md` as it currently exists does **not** contain any such image-prep rule; it only lists pre-trip, home-practice, and field-workflow checklists. This is a pre-existing dead cross-reference in the book, not something the travel part created — but if the new travel part's reference/gallery chapter follows the same "(사진 준비 규칙대로...)" pattern without checking, it will propagate a link to non-existent content a second time.

**Prevention:**
- When writing the travel part's image-sourcing instructions, either (a) verify whether `checklists.md` has since been updated to include this rule and link correctly, or (b) state the resize/EXIF rule inline (as `introduction.md` and `09-drone/index.md` already do at the point of actual usage — "원본은 리사이즈(최대 2000px)·EXIF 제거 후 재압축했습니다") rather than trusting the broken cross-reference.
- Consider flagging this as a small fix-it item for whichever chapter/phase touches `07-appendix/checklists.md` next, independent of the travel-part scope, since it's a pre-existing gap this research surfaced as a side effect.

**Warning signs:** A new travel-part page links to "사진 준비" or similar phrasing pointing at `checklists.md` without the actual rule appearing there.

**Phase to address:** Travel part's reference/gallery chapter (avoid propagating) — optionally, appendix/checklists maintenance as an unrelated cleanup item.

---

### Pitfall 8: Missing glossary terms this new part will introduce

**What goes wrong:** The existing glossary (`07-appendix/glossary.md`) is astro/drone-vocabulary-scoped (노출 삼각형, 코마수차, 크롭계수, etc.) and doesn't yet have entries for terms the travel part will need for the first time in this book — e.g., **베럴 디스토션(barrel distortion)**, **환산 화각(equivalent focal length)** (crop factor is defined, but the specific "35mm-equivalent" framing used for travel-lens shopping talk may need its own beginner-friendly entry), **IBIS**, **STM(스테핑 모터)**. A beginner hitting these terms for the first time in the travel part with no glossary entry breaks the book's established "처음 등장한 챕터로 연결" pattern.

**Prevention:** As the travel part's gear/settings chapter is written, cross-check each new technical term against the existing glossary and add missing entries following the exact existing format (term — definition — link to first-use chapter).

**Warning signs:** A term like "디스토션" or "IBIS" appears in the travel part's prose with no glossary entry and no inline definition.

**Phase to address:** Travel part's camera/lens settings chapter, with a glossary update as part of the same phase (not deferred).

---

## Phase-Specific Warnings

| Planned chapter (per PROJECT.md's Active requirements) | Likely pitfall | Mitigation |
|---|---|---|
| 여행 사진 개요·매력 + 책 구조 재편 | Silently changing the meaning of "1부" cross-links elsewhere in the book (e.g., `introduction.md` currently says "[1부 · 드론 사진]" — this must be renumbered/relinked when travel becomes the new 1부) | Audit every existing internal link that references "1부," "드론 사진," or part-number language in `introduction.md`, `README.md`, and any part-index pages before/while adding the new top part — a stale "1부 = 드론" reference anywhere is a broken-navigation bug, not just cosmetic |
| Canon R7 + 삼양 12mm·RF 50mm 설정 + RF-S 18-150mm 추천 | Pitfalls 4, 5, 6 above (lens mount/optics, focal-length gap, IBIS/dust) | Verify every spec against a named source (coordinate with STACK research); state the RF-S mount designation correctly; add the lens-swap-dust callout |
| 여행 사진 잘 찍는 법 (구도·빛·타이밍·풍경·현장/사람) | Pitfalls 2, 3 above (thin/generic people-etiquette content; re-teaching exposure/composition already covered elsewhere) | Dedicate a real subsection to Mongolia-specific people/culture etiquette; link to `09-drone/composition.md`'s light-reading and the drone part's consent rule instead of re-deriving |
| 코스 명소별 여행 사진 가이드 (5곳) | Pitfall 3 (duplicate GPS table, duplicate hazard content) + Pitfall 1 (unlicensed per-site reference photos) | Link to `04-mongolia/overview.md`'s GPS table as single source of truth; verify every per-site reference photo against the embed-vs-link table in Pitfall 1 |
| 여행 사진 참고 자료 (라이선스 가능하면 임베드, 불가하면 링크) | Pitfall 1 (the core risk of this entire milestone) | Apply the embed-vs-link decision table verbatim; reuse `drone-galleries.md`'s exact structure (✅ 재사용 가능 / 👁 감상 전용 sections) as the template for this new page rather than designing a new structure from scratch |

---

## "Looks Done But Isn't" Checklist

- [ ] **참고 자료/갤러리 페이지:** Every embedded (not linked) image has a matching row in an "이미지 출처" table with 저작자·라이선스·출처 link to the actual file page (not just a category page).
- [ ] **사람이 나오는 참고 사진:** Any identifiable person in an embedded reference photo has a model-release-aware caveat, or the image is link-only instead of embedded.
- [ ] **사람/현지 촬영 에티켓 섹션:** Contains Mongolia-specific content (ger threshold, ovoo, herder priority, no payment-for-photos), not generic "always ask permission" boilerplate, and cross-links to the drone part's existing consent rule.
- [ ] **렌즈 스펙 (삼양 12mm, RF 50mm):** Mount correctly stated as RF-S for the 12mm; no invented AF-speed/weather-sealing numbers for the RF 50mm beyond what's verifiable; distortion/coma/vignetting behavior mentioned, not just headline specs.
- [ ] **19–80mm 화각 공백:** Explicitly stated with numbers, not left for the reader to discover; RF-S 18-150mm framed as the specific fix, not a generic upsell.
- [ ] **GPS/명소 데이터:** No second GPS table duplicating `04-mongolia/overview.md`'s numbers — links to it instead.
- [ ] **책 구조 재편:** Every existing internal link referencing "1부" or part order (introduction.md, README, part-index pages) updated to match the new part ordering — not just the new SUMMARY.md entries added.
- [ ] **모래 먼지 — 렌즈 교체:** A travel-kit-specific callout exists for sensor-dust risk during lens swaps in the field (genuinely new content, not covered by the drone chapter's sealed-gimbal dust advice).
- [ ] **용어 사전:** New terms introduced by this part (배럴 디스토션, IBIS, STM, 등) added to `07-appendix/glossary.md` in the existing format.

---

## Sources

**Reference-photo licensing (HIGH confidence, official/primary):**
- [Unsplash License](https://unsplash.com/license) — official license terms
- [Unsplash Help Center — When do I need to get a model release?](https://help.unsplash.com/en/articles/6604664-when-do-i-need-to-get-a-model-release)
- [Unsplash Help Center — Releases and Trademarks](https://help.unsplash.com/en/articles/2612329-releases-and-trademarks)
- [Wikimedia Commons — Commons:License laundering](https://commons.wikimedia.org/wiki/Commons:License_laundering)
- [Wikimedia Commons — Commons:Licensing](https://commons.wikimedia.org/wiki/Commons:Licensing)
- This project's own existing content (directly read, not secondary): `src/introduction.md`, `src/08-references/drone-galleries.md`, `src/08-references/drone-mongolia-regulations.md` — establishes the book's own embed-vs-link precedent and attribution format, which this document extends rather than reinvents.

**Mongolia people/cultural photography etiquette (MEDIUM-HIGH confidence, cross-referenced across independent tourism-industry sources):**
- [Responsible Photography in Mongolia — Eternal Landscapes](https://eternal-landscapes.co.uk/responsible-photography-in-mongolia/) — Mongolia-specialist tour operator, already cited as a reputable source elsewhere in this project's research (`08-references/mongolia-travel-info.md`); primary source for this document's people/ger/livestock/payment guidance.
- [Mongolia's Sacred Ovoos — Eternal Landscapes](https://eternal-landscapes.co.uk/mongolias-sacred-ovoos-2/)
- [Ovoo — Wikipedia](https://en.wikipedia.org/wiki/Ovoo)
- [Creepy Teepees of Mongolia — Silk Road Mongolia](https://silkroadmongolia.com/creepy-teepee/)
- [Ovoo — Buman Tour Mongolia](https://bumantourmongolia.com/2022/05/25/ovoo/)
- [Ger Etiquette in Mongolia: Dos and Don'ts — Atlas Mongolia Travel](https://atlasmongoliatravel.com/ger-etiquette-mongolia/)
- [Customs You Should Learn About Mongolia — Discover Mongolia](https://www.discovermongolia.mn/blogs/customs-you-should-learn-about-before-going-to-mongolia)
- [Mongolian Customs & Etiquette — World Nomads](https://www.worldnomads.com/travel-safety/eastern-asia/mongolia/a-guide-to-mongolian-customs)

**Gear specs (HIGH confidence, official product pages + hands-on reviews):**
- [Samyang AF 12mm F2.0 RF-S — Samyang US official product page](https://samyangus.com/products/samyang-af-12mm-f2-0-rf-s-ultra-wide-angle-lens)
- [SAMYANG AF 12mm F2 RF-S — Lens Review — nightscapephotographer.com](https://nightscapephotographer.com/samyang-af-12mm-f2-rf-s-lens-review/) — hands-on distortion/coma/vignetting/DOF findings
- [LK Samyang AF 12mm f/2 RF-S review — Digital Camera World](https://www.digitalcameraworld.com/cameras/lenses/lk-samyang-af-12mm-f-2-rf-s-review)
- [Samyang RF-mount APS-C lens announcement — DPReview](https://www.dpreview.com/news/4046261270/samyang-rf-mount-aps-c-lens-announcement-12mm-f2)
- [Canon EOS R7 Specifications — Canon official (Iceland regional site, English)](https://www.canon-is.com/cameras/eos-r7/specifications/)
- [Canon EOS R7 Review — techradar.com](https://www.techradar.com/reviews/canon-eos-r7) — IBIS stop-count and weather-sealing-vs-90D comparison
- [Canon EOS R7 Review — the-digital-picture.com](https://www.the-digital-picture.com/Reviews/Canon-EOS-R7.aspx)

**Internal project sources (already validated, directly read for this pass):**
- `.planning/PROJECT.md` — v1.2 scope, gear kit, honesty-continuation decision
- `.planning/STATE.md` — milestone status
- `src/SUMMARY.md` — current book structure (for the part-renumbering pitfall)
- `.planning/milestones/v1.1-research/PITFALLS.md` — v1.1's pitfalls research; this document deliberately cross-references and extends its licensing/consent/dust precedents rather than duplicating the analysis
- `src/introduction.md`, `src/08-references/drone-galleries.md`, `src/08-references/drone-mongolia-regulations.md`, `src/09-drone/gobi-environment.md`, `src/09-drone/composition.md`, `src/01-gear/camera-lens.md`, `src/07-appendix/camera-lens-picks.md`, `src/07-appendix/glossary.md`, `src/07-appendix/checklists.md`, `src/04-mongolia/overview.md`, `src/03-practice/field-prep-and-hazards.md`, `src/08-references/mongolia-travel-info.md` — read directly to establish existing conventions, redundancy targets, and the dead-link finding.

---
*Pitfalls research for: 몽골 여행 사진 파트 추가 (Canon R7 + Samyang AF 12mm F2.0 RF-S + Canon RF 50mm F1.8 STM), v1.2 milestone*
*Researched: 2026-07-14*
