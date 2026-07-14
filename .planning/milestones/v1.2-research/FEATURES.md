# Feature Research

**Domain:** Beginner ground-based DAYTIME/TWILIGHT travel photography guide — Canon R7 (APS-C) + Samyang AF 12mm F2.0 (≈19mm ultrawide) + RF 50mm F1.8 STM (≈80mm short-tele), RF-S 18-150mm recommended as a gap-filling travel zoom. Korean mdBook, Mongolia Gobi desert route, photo-first, new FIRST part of an existing three-part book (travel → drone → Milky Way).
**Researched:** 2026-07-14
**Confidence:** HIGH on composition/light/settings fundamentals (cross-verified against generic travel-photography sources and this book's own proven teaching pattern from the drone and astro parts). MEDIUM on Mongolia-specific nomad-photography etiquette (aggregated from tour-operator and photographer blog sources, not one authoritative etiquette code — same "정직 표기" caveat this book already applies to other unverified claims) and on Gobi wildlife-sighting specifics (ibex/bearded vulture presence is seasonal and opportunistic, sourced from wildlife-tour marketing pages rather than primary field data — must be framed as "가능성" not a guarantee).

> Note: this is a **content project**, not software. "Feature" below means "content element/section the travel part must or should contain." Complexity ratings reflect *writing/research/production effort*, not code effort.

## Feature Landscape

### Table Stakes (Users Expect These)

Ordered roughly by the teaching dependency chain (intro → camera/lens fundamentals → composition/light → people/story → structural completeness/references), mirroring the pattern the drone part (v1.1) already established for this book.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| 여행 사진 개요·매력 + 책 구조 재편(최상단 1부) | Every part of this book so far opens with an editorial "why this is worth doing" hook before gear/technique (astro's intro, drone's `09-drone/index.md`); PROJECT.md already commits to moving travel photography to the new first part, ahead of drone and Milky Way | LOW | Net-new but cheap — mirrors `src/introduction.md` and `09-drone/index.md` tone. Also the place to explain *why* travel photography goes first in reading order (it's what a traveler shoots constantly, all day, vs. drone/astro which are situational). |
| 카메라 설정 기초 (M/Av 모드 선택·노출보정·측광) — 주간용 | A beginner cannot get a well-exposed daytime shot by copying the night chapters verbatim — night teaches M-mode-only because auto-exposure *fails* in the dark; daytime auto-exposure actually works, so a beginner needs different, simpler guidance | MEDIUM | **Delta content, not a rebuild.** Reuse the exposure-triangle *concept* from [노출의 기본](../../src/02-fundamentals/exposure-basics.md) (link, don't re-teach ISO/조리개/셔터 definitions), but add what's new for daytime: Av(조리개 우선) as the beginner-friendly default mode (vs. forced M at night), exposure compensation (±EV dial) for high-contrast scenes (white cliffs, backlit portraits), and metering mode choice (평가측광 vs 인물 얼굴 기준 스팟/부분측광). This is the single biggest "unlearn the night chapters' habit" moment in the book and should say so explicitly. |
| RAW·화이트밸런스 — 주간 프리셋 | Same RAW-first practice as the rest of the book, but daylight WB presets (태양광/그늘/흐림) differ completely from the night chapters' fixed-Kelvin (3800–4200K) approach | LOW | **Reuse + delta.** Link [RAW와 화이트밸런스](../../src/02-fundamentals/raw-and-wb.md) for *why RAW*, add only the daytime-specific WB delta (AWB works reasonably in daylight, unlike at night; preset WB useful for consistent look across a golden-hour sequence). |
| 초광각(12mm, ≈19mm) 활용법 | Reader owns this lens specifically; a beginner needs to know *when and how* to reach for it, not just that it exists | MEDIUM | Concrete teaching: barrel distortion management (keep verticals/horizons centered, or lean into distortion for dramatic near-far foreground), tight-space use (ger interior, slot-canyon width at Yolyn Am), foreground-emphasis composition (close subject + far landscape in one frame), environmental portraits that show context (person + full scene) rather than tight headshots. |
| 준망원(50mm, ≈80mm) 활용법 | Reader owns this lens specifically; complements the ultrawide with the opposite toolset | MEDIUM | Concrete teaching: background compression (stacks distant ridgelines/dunes visually closer together), shallow depth of field at F1.8 for portrait subject separation, tight detail shots (rock texture, distant wildlife, candid portraits from a respectful distance without a telephoto lens). |
| RF-S 18-150mm 추천 (화각 공백 메우기) | PROJECT.md explicitly commits to this recommendation; the reader's owned kit has a real gap (≈19mm to ≈80mm, nothing in between) that a fixed two-lens kit can't cover for fast-changing travel situations | LOW–MEDIUM | Frame as "이미 있는 렌즈로도 충분하다, 이건 편의성 업그레이드" (same non-mandatory tone as the rest of the book's gear recommendations — recommend-only, no purchase-guide). Explain when a zoom beats prime-swapping: fast-moving scenes (departing camel caravan, herder passing by) where lens-changing costs the shot. |
| 구도 기초 (삼분할법·전경/중경/원경·프레임 속 프레임·리딩라인·스케일) | Every travel-photography source surveyed treats composition, not gear, as the actual skill that separates good travel photos from snapshots — "the Moment Triangle" (light + composition + story) recurs across sources | MEDIUM–HIGH | Ground-level version of concepts the book has *touched* before but never taught fully at this level: leading lines and human-silhouette-for-scale were introduced for aerial use in [항공 구도의 기초](../../src/09-drone/composition.md) — this section is new content but can note "항공 파트에서 리딩라인·스케일 개념을 이미 배웠다면 지상 버전도 어렵지 않습니다" as a light cross-reference. New for this part: rule of thirds, foreground/midground/background layering (a wide-angle-specific technique, directly tied to the 12mm lens), frame-within-frame (an archway, a ger door, a rock arch — directly reusable at Baga Gazriin Chuluu). |
| 빛과 타이밍 — 여행 사진 버전 (골든아워·블루아워·정오 하드라이트·역광/실루엣) | Light quality determines whether a travel photo looks flat or has depth/mood; every source surveyed puts this at the top | MEDIUM | Ground-level delta from the aerial version already taught in [항공 구도의 기초](../../src/09-drone/composition.md#항공-특유의-빛-읽기): at ground level, midday hard light is actively *bad* for portraits (harsh nose/eye-socket shadows) rather than merely "useful for pattern shots" as in the aerial teaching — beginners need to know to seek shade or wait for golden hour when shooting people. Also new: backlighting/rim-light for silhouettes (person against a cliff or dune ridge at sunset — a signature Gobi travel shot), and reading light direction relative to a site's known orientation (e.g. Tsagaan Suvarga's cliff faces east, so morning light is front-light and evening light is backlight/silhouette — a genuinely site-specific insight this book can offer that a generic tutorial cannot). |
| 인물/현장 사진 기초 (스냅·자연스러운 순간·배경 정리) | Table-stakes for any travel guide covering a route with nomads, camp life, and fellow travelers — a beginner needs basic guidance before being told "환경인물사진 with consent" is the differentiator move | MEDIUM | Core beginner skills: shoot candid/in-motion rather than posed ("avoid posed photos, choose photos on the move" is explicit, repeated advice from Mongolia-specific sources), expose for skin tone (not the bright sky/sand background — link back to exposure-compensation teaching above), simplify the background before pressing the shutter, get low (kneel) for photos of someone on horseback rather than shooting down. |
| 여행 사진 스토리텔링 — 와이드·미디엄·디테일 세트 | Recurring, source-verified pattern: a travel photo *sequence* (establishing/wide shot → medium/action shot → detail/close-up) tells a story a single frame can't; ties the 12mm/50mm two-lens kit directly to a teachable workflow | LOW–MEDIUM | Practical, low-cost teaching: for each stop, deliberately shoot a wide establishing shot (12mm — the place), a medium shot (people/animals doing something in the place), and a detail shot (50mm — texture, an object, a face). This single framework gives a beginner a checklist instead of "just take good photos." |
| 명소별 여행 사진 가이드 — 5곳 (기본 골격) | PROJECT.md's route (차강소브라가·바양작·홍고린엘스·욜링암·바가가즈링 촐로) already has dedicated per-site chapters in two other parts of this book (astro's `04-mongolia/`, drone's `10-drone-sites/`) — a reader would expect the same per-site structure for travel photography as the structural baseline | LOW (existence) — see Differentiators for the depth | Baseline expectation: each site gets its own travel-photography page with at least one core subject and a light/timing note, mirroring the existing `04-mongolia/*.md` and `10-drone-sites/*.md` page structure (intro → subjects/composition → cautions → shooting timeline). The *specific, terrain-grounded* depth of this content is where the real value is — see the Differentiators section and per-site table below. |
| 여행 사진 참고 자료 | Mirrors the `08-references/` pattern already established for drone (3 pages) and astro (5 pages) — a dedicated curated-link appendix is expected once a new content part exists | LOW | CC-licensed example galleries (travel/street/environmental-portrait photography), 1–2 vetted general travel-composition tutorial sources, a short pointer to Mongolia cultural-etiquette resources for photographing people. Same "라이선스 확인 시만 임베드, 불가 시 링크로만" honesty practice already fixed as a project-wide constraint (PROJECT.md Key Decisions) — not a new decision, just carried forward. |

### Differentiators (Competitive Advantage)

These are what make *this* travel part better than a generic "how to take good travel photos" article — they align with the book's proven strength (trip-specific, site-specific guidance, already demonstrated twice in this book for astro and drone) and extend it to the ground-level daytime context.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| 명소별 여행 사진 구도·피사체 상세 (5곳, 지형 연계) | No generic travel-photography tutorial can tell a reader that Tsagaan Suvarga's cliff faces east (so shoot it at sunrise for front-light, sunset for silhouette) or that Yolyn Am's slot canyon is narrow enough that only the 12mm ultrawide will fit a person-for-scale shot — this is the book's proven signature move (already done twice, for astro composition and aerial composition), now extended to daytime ground-level travel | HIGH | **Reuse the existing terrain research, add the ground-level daytime layer.** The terrain facts (cliff height/orientation, dune height, canyon wall height, rock formation type) are already documented in `src/04-mongolia/*.md` and reinforced in `src/10-drone-sites/*.md` — this content should add a travel-photo subsection to the existing site pages (same pattern the drone part used) rather than duplicate GPS/access/hazard info. See the per-site table below for concrete subject/lens/light pairings per site. |
| 유목민 환경인물사진 (동의 얻기 예절) | Directly named in the milestone context as the book's differentiator move for people photography; distinguishes this from every generic composition tutorial, which never addresses the specific cultural situation of photographing Mongolian herders, their gers, and their livestock | MEDIUM–HIGH | Concrete, source-grounded etiquette to teach: **always ask before photographing a person** — Mongolians are often unaccustomed to being photographed and some older Mongolians hold a belief that being photographed shortens one's life/ages them, so a refusal should be respected without argument. **Livestock are not props** — horses, camels, yaks are working animals central to a family's livelihood, not photo accessories; avoid staged setups that stress an animal (forced repeated poses, restraint for a photo) and step back if an animal looks distressed or over-handled. **Shoot the everyday, not the staged** — candid/in-motion herding or camp-life moments read as more honest and are explicitly recommended over posed tourist photos. **Ger visits** — treat a ger as someone's home, not a photo backdrop; the same ask-first principle applies indoors as outdoors, and the ultrawide 12mm is genuinely useful here (small interior space) once permission is given. Mark this content MEDIUM confidence per the header — sources are tour-operator/photographer blogs, not a single Mongolian cultural authority, so phrase as "일반적으로 통용되는 예절" rather than hard rules. |
| 고비 야생동물 사진 소재 (아이벡스·수염수리 등) | Named in milestone context as part of the Gobi's photographic character; a small opportunistic wildlife section rounds out the travel-photo subject list beyond landscape/people | MEDIUM | Set honest expectations: sightings are opportunistic and seasonal, not guaranteed — frame as "보이면 놓치지 마세요," not "여기 가면 반드시 본다." Bearded vulture (lammergeier, 수염수리) is documented as visible soaring over Yolyn Am's gorge, often at midday when thermals form — genuinely matches this book's daytime-only scope. Gobi ibex are associated with rocky slopes near Yolyn Am/Gobi-Altai terrain. **Honest gear-limitation note**: the reader's 50mm (≈80mm equivalent) is not a wildlife telephoto — recommend framing wildlife as a small element in a wider habitat shot rather than expecting a frame-filling portrait, and mention the Canon R7's high-resolution APS-C sensor (~32.5MP) as a real, useful crop margin for salvaging a distant sighting in post. |
| 명소별 촬영 타임라인 (일출~일몰 흐름) | Mirrors a structural pattern already proven twice in this book — both `04-mongolia/*.md` (night: 도착→일몰→박명종료→본촬영→철수) and `10-drone-sites` pages implicitly follow a time-of-day flow — a travel-photo version gives the reader a similar hour-by-hour shot plan for daytime | LOW–MEDIUM | Per-site suggested flow: early morning arrival/scouting light → mid-morning candid people/animal shots (softer light, camp activity) → midday break (harsh light, low photo priority — good time to review shots/rest) → golden hour landscape + silhouette shots → blue hour closing shot before dark (astro setup begins). This slots cleanly *before* the existing night timeline already documented in the astro site pages, without duplicating it. |

## Per-Site Travel Subject Table

Concrete subject/lens/light pairings for the 5 route sites, grounded in the terrain facts already established in `src/04-mongolia/*.md` (astro) and `src/10-drone-sites/*.md` (drone).

| 명소 | 지형 특징 (기존 리서치 근거) | 핵심 여행 피사체 | 추천 렌즈·화각 | 빛/타이밍 | 비고 |
|---|---|---|---|---|---|
| **차강소브라가** (Tsagaan Suvarga) | 동향 거의 수직 절벽, 높이 30~60m·길이 400m, 겹겹 퇴적층 | 절벽 전경 + 인물 실루엣(스케일), 층리 텍스처 클로즈업, 캠프 숙영지 생활(1일차) | 12mm(≈19mm) — 절벽 전체+전경 인물 스케일 / 50mm(≈80mm) — 층리 텍스처 압축 클로즈업 | **동향이라 아침 골든아워가 정면광**(층리·질감이 가장 잘 삼) — 저녁은 역광이 되어 실루엣 컷에 유리 | 흰 절벽 하이라이트 클리핑 주의(드론 파트와 동일 이슈) — 노출보정 −0.3~−0.7EV 권장, 히스토그램 확인 |
| **바양작** (Bayanzag, Flaming Cliffs) | 붉은 사암 굴곡 능선, 삭사울 관목 산재, 공룡알 화석지, 일몰에 붉게 물드는 것으로 유명 | 절벽 트레킹 인물 스냅, 삭사울 실루엣 전경, 노을에 물든 절벽 풍경, 화석지 안내판/지형 디테일 | 12mm — 굴곡 능선+열린 지평선 와이드샷 / 50mm — 삭사울 실루엣 압축, 절벽 색감 클로즈업 | **골든아워·일몰이 핵심 시간대**(붉은 색감) — 정오는 하드라이트라 인물 촬영엔 불리, 그늘이나 역광 실루엣으로 대체 | 화석·암석 채취 금지, 지정 탐방로 준수(드론 파트와 동일 보호구역 예절) |
| **홍고린엘스** (Khongoryn Els) | 사구 높이 80~300m, 동서 100km, "노래하는 모래", 낙타 트래킹 관광 통용 | 사구 능선 위 인물 실루엣(스케일), 낙타 캐러밴 실루엣, 발자국 리딩라인, 모래 리플 텍스처 클로즈업 | 12mm — 사구+하늘 넓게, 낙타 행렬 실루엣 와이드샷 / 50mm — 능선 굴곡·모래 리플 텍스처 압축 | 골든아워 긴 그림자가 능선 굴곡을 조각처럼 드러냄(정오엔 무늬가 납작해짐), 블루아워엔 능선 실루엣 마무리 컷 | 모래바람 방진(기존 액세서리 파트 참고), 낙타 탑승·촬영 시 동물 복지 예절(연출·강요 포즈 금지) |
| **욜링암** (Yolyn Am) | 협곡벽 최대 200m, 길이 8km, 슬롯 구간(두 사람 겨우 통과), 얼음벌판(계절성), 수염수리(래머자이어) 서식지로 알려짐 | 협곡 슬롯 속 인물 스케일 샷, 트레킹 스냅, 협곡 입구 산맥 전경, 맹금류(수염수리)·아이벡스 원경 | **12mm 필수** — 좁은 슬롯 안에서는 광각 아니면 벽 사이에 인물이 담기지 않음 / 50mm(≈80mm) — 원경 야생동물·능선 압축 | 협곡은 직사광이 짧게만 들어옴 — 빛이 벽에 걸리는 짧은 시간대를 노려야 함, 맹금류는 정오 무렵 상승기류를 타고 활공하는 모습이 관찰되기 쉬움 | 8월엔 얼음벌판이 대부분 녹아 있을 가능성이 높음(계절성 — 정직 표기 필요), 야생동물은 50mm(≈80mm 환산)로는 작게 찍힘 — R7 고화소 센서 크롭으로 일부 보완 가능하다는 정도로만 안내 |
| **바가가즈링 촐로** (Baga Gazriin Chuluu) | 화강암 기암·아치 지대, 옛 사원터·나무, 코스 4곳 중 최북단 | 아치 프레임 속 프레임 샷, 바위 사이 인물 스케일, 사원터 스토리텔링 디테일, 화강암 표면 질감 | 12mm — 아치 프레임+광각 왜곡을 살린 근경-원경 구도 / 50mm — 바위 질감 클로즈업, F1.8 배경 흐림 인물 클로즈업 | 골든아워의 낮은 태양광이 화강암 표면의 결과 균열, 기암의 그림자를 가장 잘 살림 | 최북단이라 새벽 기온이 낮음(저온 대응은 기존 파트 재사용), 유목민 게르 조우 가능성 — 환경인물사진 예절 원칙 적용 |

### Anti-Features (Commonly Requested, Often Problematic)

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|------------------|-------------|
| 야간/은하수 촬영 콘텐츠 | Readers photographing the same 5 sites for the astro part may expect the travel part to also cover "how to shoot the sky at night" since it's the same locations | **Scope collision, not a knowledge gap** — this book already has a complete, proven night/Milky Way part (`02-fundamentals/`, `04-mongolia/`, `05-postprocessing/`, `06-bonus/`); duplicating any of it here would fragment a currently-coherent teaching sequence and contradict the milestone's explicit scope decision ("야간 은하수는 은하수 파트") | Keep travel content strictly daytime/twilight (ends at blue hour, matching the drone part's same boundary); cross-link to the existing astro chapters rather than re-explain M-mode/500-NPF/focusing-on-stars here |
| 항공/드론 촬영 콘텐츠 | The same 5 sites already have a full aerial-composition treatment in this book (`09-drone/`, `10-drone-sites/`), and a reader flipping through might expect travel and drone content merged | **Different gear, different physical vantage point, different part of the book already built for this** — merging would blur the book's clean three-part structure (travel → drone → astro) that PROJECT.md just established in v1.1 | Cross-reference only ("항공 관점은 드론 파트를 참고하세요") — no aerial technique content in the travel part |
| 심화 영상 제작 (컬러그레이딩·다중 클립 편집·시네마틱 스토리텔링) | Travel photography content is often bundled with travel vlogging/video content in generic online guides, and a beginner might assume "good travel photos" implies "good travel video" | This book is explicitly photo-first (PROJECT.md: "사진 가이드"); the drone part already made and justified this exact scope call ("영상 심화" excluded as disproportionate to a photo-first book) — repeating the same mistake here for a different gear kit adds no new value | None needed — the travel part should not touch video at all, not even a brief page (unlike the drone part's one intentionally-shallow hyperlapse page, which was justified by the drone's specific intelligent flight modes; the R7 has no equivalent "free" video feature worth a dedicated page here) |
| 타이트한 스튜디오 인물사진 (조명 세팅·배경지·포즈 디렉팅 심화) | "인물 사진" in the milestone scope could be over-read as a request for formal portraiture technique | Travel/environmental portraiture is a fundamentally different skill from studio portraiture (available light only, no control over background/pose, consent-based candid moments) — teaching flash lighting ratios or posing directories would be disproportionate effort for a beginner travel guide and orthogonal to the actual use case | Keep people-photography content scoped to environmental/candid technique (natural light reading, background simplification, respectful distance) as already covered under Table Stakes and the nomad-portrait Differentiator above |
| 동물을 소품처럼 다루는 연출 사진 (강제 포즈·과도한 근접·핸들링 유도) | A beginner wanting a "great camel/horse shot" might default to asking a handler to force a pose or get an animal to hold still unnaturally, mirroring common but ethically poor tourist-photography habits | Directly contradicts the sourced Mongolia photography-etiquette guidance (animals are not props; step back if an animal looks stressed or over-handled) and risks real animal welfare harm plus reputational risk for a "정직한" travel guide | Teach candid/in-motion animal photography instead — waiting for a natural moment (a camel mid-stride, a horse grazing) rather than requesting a staged pose, framed explicitly as the *better* photograph, not just the ethical one |
| 심화 후보정 (전문 컬러그레이딩 프리셋·고급 리터칭 워크플로) | Travel photography content online is often paired with heavy preset-based color-grading tutorials (e.g. "moody desert preset packs") | This book already has a dedicated, proven post-processing part (`05-postprocessing/`) built around RAW develop → stacking → enhance → before/after; duplicating a parallel travel-specific deep-editing workflow would fragment that existing structure and add disproportionate scope for a beginner-focused book | Link to the existing `05-postprocessing/raw-develop.md` for the core workflow, add only a short delta note (skin-tone adjustment, sky/highlight recovery for daylight scenes) rather than a new full post-processing sub-track |
| 장비 구매 가이드 (구매처·가격 비교·구매 프로세스) | A reader excited about the 12mm/50mm/18-150mm recommendations might want purchase links or price comparisons | Already a fixed, book-wide constraint from PROJECT.md ("장비 구입/구매 가이드... 추천만 제공, 구매 강제 아님"), reaffirmed for every other part of this book (gear appendix gives "고려할 만한" examples with rough price *ranges* only, never vendor links) | Keep travel gear content in the same "추천만, 이미 있는 장비로도 충분하다" tone already established by `01-gear/camera-lens.md` and `07-appendix/camera-lens-picks.md` |

## Feature Dependencies

```
여행 사진 개요·매력 + 책 구조 재편
    └──must precede──> ALL travel-technique content (reader needs to know why this part exists and comes first)

카메라 설정 기초 (M/Av·노출보정·측광, 주간)
    └──requires (concept reuse)──> 기존 노출의 기본 (exposure-basics.md) — link, explain the M→Av delta explicitly
    └──enables──> 초광각/준망원 렌즈 활용법 (need exposure control before lens-specific technique makes sense)
    └──enables──> 인물/현장 사진 기초 (skin-tone metering depends on exposure-compensation understanding)

RAW·화이트밸런스 (주간 프리셋)
    └──requires (concept reuse)──> 기존 RAW와 화이트밸런스 (raw-and-wb.md) — link, add only daylight-preset delta
    └──independent of──> camera settings (parallel prerequisite, not sequential)

초광각(12mm) 활용법 + 준망원(50mm) 활용법 + RF-S 18-150mm 추천
    └──requires──> 카메라 설정 기초
    └──enables──> 구도 기초 (foreground/midground/background is a 12mm-specific technique; compression is a 50mm-specific technique)
    └──enables──> 명소별 여행 사진 구도·피사체 상세 [DIFFERENTIATOR] (per-site lens choice depends on knowing what each lens does)

구도 기초 (삼분할법·전경/중경/원경·프레임 속 프레임·리딩라인·스케일)
    └──requires──> 초광각/준망원 활용법
    └──light reuse of concept──> 기존 항공 구도의 기초 (composition.md) — leading lines/scale introduced there for aerial, re-taught here for ground level (not a link-only reuse, genuinely new content)
    └──enables──> 명소별 여행 사진 구도·피사체 상세 [DIFFERENTIATOR]

빛과 타이밍 — 여행 사진 버전
    └──light reuse of concept──> 기존 항공 특유의 빛 읽기 (composition.md 절) — golden/blue hour concept already introduced, ground-level portrait implications are new
    └──enables──> 명소별 촬영 타임라인 [DIFFERENTIATOR]
    └──enables──> 인물/현장 사진 기초 (midday-hard-light-is-bad-for-portraits insight)

인물/현장 사진 기초
    └──requires──> 카메라 설정 기초, 빛과 타이밍
    └──enables──> 유목민 환경인물사진 [DIFFERENTIATOR] (etiquette content assumes the reader already knows basic candid-portrait technique)

여행 사진 스토리텔링 (와이드·미디엄·디테일)
    └──requires──> 구도 기초, 초광각/준망원 활용법 (the framework explicitly maps to the two owned lenses)
    └──enables──> 명소별 여행 사진 구도·피사체 상세 [DIFFERENTIATOR] (per-site guide can recommend a wide/medium/detail shot list)

명소별 여행 사진 가이드 — 5곳 (기본 골격)
    └──requires──> 구도 기초, 빛과 타이밍, 인물/현장 사진 기초
    └──requires (reuse)──> existing 04-mongolia/*.md and 10-drone-sites/*.md terrain descriptions (add travel-photo subsection, don't duplicate GPS/access/hazard info)
    └──enables──> 명소별 여행 사진 구도·피사체 상세 [DIFFERENTIATOR], 유목민 환경인물사진 [DIFFERENTIATOR], 고비 야생동물 소재 [DIFFERENTIATOR], 명소별 촬영 타임라인 [DIFFERENTIATOR]

여행 사진 참고 자료
    └──requires──> all of the above (assembled last, mirrors existing 08-references/ pattern)
```

### Dependency Notes

- **The M→Av mode switch is the single biggest "unlearn" moment in the book, and must be stated explicitly, not just taught silently:** a reader who has already read the astro chapters (or reads this book front-to-back later) has been trained that M-mode is mandatory; the travel part must explicitly say "낮에는 자동 노출이 실제로 작동하므로 Av 모드가 더 편합니다" rather than assume the reader will infer the difference.
- **Per-site travel content is the highest-leverage differentiator and it's cheap relative to its value, exactly as it was for the drone part:** the terrain research already exists twice over (astro's `04-mongolia/*.md`, drone's `10-drone-sites/*.md`) — this content should *add* a travel-photo subsection to the existing site pages rather than write new standalone chapters, following the exact pattern the drone part already validated in v1.1.
- **Composition and light content cannot be a pure link-reuse of the drone part's aerial teaching**, even though the concepts (leading lines, scale, golden/blue hour) were introduced there first — the ground-level, people-inclusive application is different enough (portrait light quality, frame-within-frame, foreground/midground/background layering with a specific lens) to need its own full treatment, with only a light cross-reference acknowledging the concept overlap.
- **Post-processing must stay a thin delta, not a parallel track:** the existing `05-postprocessing/` part already has a proven, complete workflow (RAW develop → stacking → enhance → before/after) — the travel part should link to `raw-develop.md` and add only what's genuinely different for daylight/people photos (skin tone, highlight recovery), never rebuild the workflow.
- **Nomad-portrait and wildlife content both carry MEDIUM confidence and must ship with honest framing**, per this book's established practice (PROJECT.md: "검증 못 한 링크는 미검증으로 정직 표기") — etiquette guidance should read as "일반적으로 통용되는 예절," and wildlife content should read as "보이면" opportunistic, not a guaranteed sighting itinerary.
- **Video stays fully out of scope for this part**, more strictly than the drone part (which allowed one shallow hyperlapse page) — there is no equivalent "free," low-effort video feature on the R7 kit that would justify even a single page, so the anti-feature here is a hard exclusion, not a "keep it shallow" compromise.

## MVP Definition

### Launch With (v1.2)

Matches PROJECT.md's "Active (v1.2 몽골 여행 사진)" requirements — the table-stakes list plus the differentiators PROJECT.md already commits to.

- [ ] 여행 사진 개요·매력 + 책을 최상단 1부로 재편 (제목·소개·SUMMARY 구조 변경)
- [ ] 카메라 설정 기초 — M/Av 모드·노출보정·측광 (주간, 기존 노출 기본 개념 재사용+델타)
- [ ] RAW·화이트밸런스 — 주간 프리셋 델타 (기존 페이지 재사용+델타)
- [ ] 초광각(12mm) 활용법 + 준망원(50mm) 활용법 + RF-S 18-150mm 추천
- [ ] 구도 기초 (삼분할법·전경/중경/원경·프레임 속 프레임·리딩라인·스케일)
- [ ] 빛과 타이밍 — 여행 사진 버전 (골든/블루아워·정오 하드라이트·역광 실루엣)
- [ ] 인물/현장 사진 기초 (스냅·측광·자연스러운 순간)
- [ ] 여행 사진 스토리텔링 (와이드·미디엄·디테일 세트)
- [ ] 명소별 여행 사진 가이드 (5곳) — 기본 골격 + 구도·피사체 상세 + 촬영 타임라인
- [ ] 유목민 환경인물사진 (동의 얻기 예절)
- [ ] 고비 야생동물 사진 소재 (아이벡스·수염수리, 기대치 정직 표기)
- [ ] 여행 사진 참고 자료 (라이선스 확인 시만 임베드, 불가 시 링크)

### Add After Validation (v1.x)

- [ ] 실제 여행 사진 예시(전/후 비교) — trigger: after a real practice outing or the actual Mongolia trip produces real travel RAW files, mirrors the same production-timeline dependency the drone/astro parts already have
- [ ] 명소별 실제 여행 사진 채우기 — trigger: same as above

### Future Consideration (v2+)

- [ ] 여행 영상 콘텐츠 — defer indefinitely: explicitly out of scope, photo-first project-wide decision
- [ ] 심화 인물 조명/스튜디오 기법 — defer: orthogonal to travel/environmental portraiture use case

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| 여행 사진 개요·매력 + 구조 재편 | HIGH | LOW | P1 |
| 카메라 설정 기초 (M/Av, 주간) | HIGH | MEDIUM | P1 |
| RAW·화이트밸런스 (주간 델타) | MEDIUM | LOW | P1 |
| 초광각/준망원 렌즈 활용법 + 18-150mm 추천 | HIGH | MEDIUM | P1 |
| 구도 기초 | HIGH | MEDIUM-HIGH | P1 |
| 빛과 타이밍 (여행 버전) | HIGH | MEDIUM | P1 |
| 인물/현장 사진 기초 | HIGH | MEDIUM | P1 |
| 여행 사진 스토리텔링 | MEDIUM-HIGH | LOW-MEDIUM | P1 |
| 명소별 여행 사진 가이드 (5곳, 상세) | HIGH | HIGH | P1 |
| 유목민 환경인물사진 (예절) | HIGH | MEDIUM-HIGH | P1 |
| 고비 야생동물 소재 | MEDIUM | MEDIUM | P1 |
| 여행 사진 참고 자료 | MEDIUM | LOW | P1 |
| 실제 여행 사진 전/후 비교 | MEDIUM-HIGH | LOW-MEDIUM* | P2 |
| 명소별 실제 사진 채우기 | HIGH | LOW-MEDIUM* | P2 |
| 여행 영상 콘텐츠 | LOW | HIGH | P3 |
| 심화 스튜디오 인물조명 | LOW | HIGH | P3 |

*Cost is mostly production-timeline-bound (waiting on real outings/the trip), not writing effort.

**Priority key:**
- P1: Must have for v1.2 launch
- P2: Should have, add when possible
- P3: Nice to have, future consideration

## Competitor Feature Analysis

| Feature | Generic web travel-photography tutorials | Mongolia tour-operator/photographer blogs | Our Approach |
|---------|-------------------------------------------|---------------------------------------------|--------------|
| Composition technique | Comprehensive and well-taught (rule of thirds, framing, leading lines, storytelling triangle), but generic — any destination | Rarely covered — these sources focus on logistics/etiquette, not technique | Same core techniques, applied specifically to the reader's owned 12mm/50mm kit and the 5 documented Gobi sites |
| Camera settings | Often assumes a zoom lens and Auto/Program mode; rarely addresses a fixed ultrawide+short-tele two-lens kit | Not covered | Settings taught specifically for the M-mode-trained reader transitioning to Av-mode daytime shooting, and for the exact two primes + recommended zoom the reader owns |
| Nomad/animal etiquette | Not covered (destination-agnostic) | Covered, but scattered across multiple sources, inconsistent depth, no photography-technique integration | Etiquette integrated directly with technique (how to shoot candidly + how to ask consent + what settings work for a moving subject), sourced and flagged MEDIUM confidence |
| Site-specific planning | Never — generic composition articles only | Sometimes covers general Gobi trip logistics, rarely photography-specific per site | Per-site travel composition ideas for the 5 exact Gobi locations already researched twice in this book — the book's core competitive moat, extended to ground-level daytime |
| Wildlife | Usually a separate "wildlife photography" genre with telephoto-lens assumptions | Covered as a trip highlight, not photography-technique-integrated | Honestly scoped to the reader's actual gear (no telephoto) — small-in-frame opportunistic shots, not a false promise of wildlife-photography-grade results |
| Post-processing | Often paired with preset packs / heavy color grading | Not covered | Linked to the existing `05-postprocessing/` workflow with only a thin daylight/people delta — no parallel editing track |

## Sources

- [Travel Photography Techniques: Tips For Amazing Results — PhotoWhoa](https://www.photowhoa.com/blog/travel-photography-techniques/)
- [Making the most of the golden hour: 5 tips for travel photographers — DIYPhotography](https://www.diyphotography.net/golden-hour-landscape-photography-tips/)
- [25 Best Travel Photography Tips for Beginners (2026) — Amateur Photographer Guide](https://amateurphotographerguide.com/travel-photography-tips/)
- [Travel Photography Tips for Beginners — Nomad Photographer](https://nomadphotographer.com/travel-photography-tips-essential-guide/)
- [Travel Photography: Complete Guide to Planning, Shooting, and Storytelling — Photographei](https://photographei.com/travel-photography-a-complete-guide-to-capturing-journeys/)
- [Responsible Photography in Mongolia — Eternal Landscapes](https://eternal-landscapes.co.uk/responsible-photography-in-mongolia/)
- [MONGOLIA - Tips to take good photos and films during your tour — Mongolia Travel and Tours](https://www.mongolia-travel-and-tours.com/photo-film-mongolia.html)
- [Mongolia Photo Tour | Eagle Hunters/Reindeer Herders — Nomad Photo Expeditions](https://www.nomadphotoexpeditions.com/photo-tours/mongolia/)
- [Tips for Your Next Mongolian Photography Expeditions — Wild Focus Expeditions](https://wildfocusexpeditions.com/tips-mongolian-photography-expeditions/)
- [Mongolia Cultural Guide: Etiquette, Customs, and Tips — Travel With Hello](https://www.travelwithhello.com/blog/mongolia-cultural-guide)
- [Mongolia Wildlife Tour to Gobi | Snow Leopard, Bearded Vulture, Ibex, Pallas Cat — Explorer Company](https://explorer.company/tour/mongolia-wildlife-tour-photography-south-gobi-snow-leopard/)
- [12 Amazing Animals That Define Wildlife in the Gobi — Three Camel Lodge](https://www.threecamellodge.com/12-amazing-animals-that-define-wildlife-in-the-gobi/)
- [Destination in Focus: Gobi Desert, Mongolia — Whitehawk Birding](https://www.whitehawkbirding.com/destination-in-focus-gobi-desert-mongolia/)
- [Aperture Priority Mode for Travel Photography (2026) — Finding the Universe](https://www.findingtheuniverse.com/aperture-priority-mode-travel-photography/)
- [Canon EOS R7 for Beginners: Your First-Day Setup Shooting Guide — PhotographyTalk](https://www.photographytalk.com/canon-eos-r7-for-beginners-a-simple-setup-guide-for-your-first-day-shooting/)
- [Essential Canon Camera Settings for Stunning Travel Photos — I Am Casey Lee](https://iamcaseylee.com/essential-canon-camera-settings-for-stunning-travel-photos-beginners-guide/)
- MongolPhoto `PROJECT.md`, `MILESTONES.md` (v1.2 active requirements, gear/kit decisions, context)
- MongolPhoto `src/04-mongolia/*.md` (existing terrain/GPS/hazard research for the 5 Gobi sites, astro angle)
- MongolPhoto `src/10-drone-sites/*.md`, `src/09-drone/composition.md`, `src/09-drone/gobi-environment.md` (existing aerial-composition and Gobi-environment research, reused/cross-referenced for the ground-level travel angle)
- MongolPhoto `src/02-fundamentals/exposure-basics.md`, `src/02-fundamentals/raw-and-wb.md` (existing night-specific exposure/RAW teaching identified for concept-reuse + daytime delta)
- MongolPhoto `src/01-gear/camera-lens.md`, `src/07-appendix/camera-lens-picks.md`, `src/01-gear/accessories.md` (existing gear-recommendation tone and crop-factor calculation method identified for reuse)
- MongolPhoto `.planning/milestones/v1.1-research/FEATURES.md` (structural/format precedent for this research file, from the drone part's own feature research)

---
*Feature research for: Beginner ground-based daytime travel photography guide (Canon R7 + Samyang 12mm F2.0 + RF 50mm F1.8, Mongolia Gobi, Korean mdBook)*
*Researched: 2026-07-14*
