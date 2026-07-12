# Phase 5: 몽골 여행지별 촬영 가이드 - Research

**Researched:** 2026-07-09
**Domain:** Content reframe (Korean mdBook) — turning an existing personal 5-day itinerary section into a general "여행지별 촬영 가이드." No new data collection needed; the archived Phase 4 research already contains all verified numbers.
**Confidence:** HIGH (source data, file inventory, restructure plan) / MEDIUM (exact wording choices for generalizing the moon table — a content judgment call, not a fact question)

## Summary

This phase is a **rewrite, not a research problem.** All GPS/moon/core-altitude/composition data already exists, verified, in `.planning/archive/04-몽골-사전-계획/04-RESEARCH.md` (superseded numbering — this is the source for what is now Phase 5). The current `src/04-mongolia/` content was authored under the old "personal 5-day trip" framing (dated Day 1–5 pages, two-pass "촬영 결과 (여행 후 작성 — Phase 5)" placeholders). Phase 5's job is to strip the personal/dated framing and reframe the same underlying facts as a general "이 명소에서는 이렇게 찍으면 좋다" guide — mirroring exactly what Phase 2 and Phase 3 already did for the home/field practice sections (see their SUMMARYs: both explicitly "정리"'d "개인/날짜 스테일 참조").

The clearest structural decision: **rename the 4 shooting-site files from `day-N-MMDD.md` to site-name files**, drop `day-5-0817.md` (공항) entirely, and fold its one substantive point (이동 소요/장비 방진) into the general 주의사항 in `overview.md` as required by SITE-03's "이동" item. Renaming is justified by direct project precedent — the 2026-07-09 로드맵 pivot note says prior phases were already restructured without preserving old URLs, and CI (`.github/workflows/mdbook.yml`) rebuilds `docs/` automatically from `src/**` on every push, so there is no stale published-URL concern to protect.

The moon/timing data (0%→3%→8%→14% illumination across 4 nights, all setting before astronomical dusk) is the one place needing real editorial judgment: it's currently presented as "your itinerary's specific nights." Recommendation: keep the verified numbers (they're a strong, concrete illustration of the general principle) but reframe them as a **worked example** ("신월 직후 나흘간 예시") rather than "당신의 5박 일정," paired with an explicit instruction to check PhotoPills/Stellarium for the reader's own dates — this is the same pattern the book already uses elsewhere (`finding-the-milkyway.md` §2 already tells readers to verify core position for "그날 그 위치").

**Primary recommendation:** One phase, one plan, 3 tasks, no checkpoints (all data already verified, nothing blocks straight-through authoring) — same shape as Phases 2–4.

## Existing Content Inventory (what to read before writing)

| File | Current role | Disposition |
|---|---|---|
| `src/04-mongolia/overview.md` | Personal "8/13~8/17 고비 5일" trip overview: GPS table, per-night moon table (dated), core-altitude formula/table, low-core warning | **REWRITE → becomes SITE-01.** Strip all "5박 여정"/dated framing; keep GPS table (drop "Day N" column), core-altitude formula+table (already general), generalize moon table (see below), keep dark-window/twilight-duration facts. |
| `src/04-mongolia/day-1-0813.md` | 차강소브라가 사전 계획 (GPS, night sky, composition, timeline) + empty "촬영 결과" placeholder | **RENAME+REWRITE → `tsagaan-suvarga.md`.** Keep GPS/mine-confusion warning, composition guidance verbatim-ish. Drop date/"이날"/dated-time framing and the 촬영 결과 section entirely. |
| `src/04-mongolia/day-2-0814.md` | 홍고린엘스 사전 계획 + placeholder | **RENAME+REWRITE → `khongoryn-els.md`.** Keep 바람·모래 warning, open-desert/low-core-friendly framing. |
| `src/04-mongolia/day-3-0815.md` | 욜링암 사전 계획 (has the canyon-occlusion warning) + placeholder | **RENAME+REWRITE → `yolyn-am.md`.** This is SITE-03's centerpiece finding — keep the ⚠️ 협곡 차폐 section essentially verbatim, it's already general/site-specific, not date-specific. |
| `src/04-mongolia/day-4-0816.md` | 바가가즈링 촐로 사전 계획 (lowest core altitude, 14.6°) + placeholder | **RENAME+REWRITE → `baga-gazriin-chuluu.md`.** Keep the "4곳 중 가장 낮다" warning. |
| `src/04-mongolia/day-5-0817.md` | 공항/출국 — not a shooting site, mostly packing/dust-cleanup + retrospective placeholder | **DELETE.** Fold the one generalizable point (이동에 시간이 걸림, 이동 중 렌즈·바디 모래 먼지 점검) into `overview.md`'s 주의사항 as a short "이동" bullet — this satisfies SITE-03's explicit "이동" item without a dedicated page for a non-shooting travel day. |
| `.planning/archive/04-몽골-사전-계획/04-RESEARCH.md` | Verified source data: GPS (with mine-vs-cliff pitfall), per-night moon/twilight (USNO+NOAA cross-validated), core-altitude formula+values, per-site terrain/composition notes, confidence levels, sources | **REUSE VERBATIM.** Don't re-derive or re-search any of this — every number Phase 5 needs is already here with citations. |
| `src/SUMMARY.md` (3부 block) | `# 3부 · 몽골 (8/13 ~ 8/17)` + 6 dated Day links | **RETITLE + RELINK** (see below). |
| `src/02-fundamentals/finding-the-milkyway.md` | General Milky Way timing/direction/moon/Bortle theory. §2 already says "8월 몽골 일정에서는 코어가 초저녁부터 점점 수직에 가깝게 선다"; §3 still says **"8/12 신월 — 그리고 몽골 일정(8/13~8/17) 전체가..."** (dated, trip-specific) | **LINK from SITE-01, don't restate.** ⚠️ Flagging: this file still has leftover dated/personal framing in §3 that Phase 3's cleanup didn't touch (Phase 3 cleaned finding-the-milkyway.md's *practice*-related stale refs, not this Mongolia-dated paragraph). Since Phase 5 is explicitly the phase reframing Mongolia content to general, recommend generalizing this one paragraph too — see Pitfall 3 below. |
| `src/introduction.md` | Book intro: "이 책은 실제 8월 몽골 여행을 준비하며 기록한 과정이자..." | **Out of explicit scope but same disease.** Flagging only — see Open Questions. Low cost to fix in passing if the planner wants to close the loop, but not required by SITE-01/02/03. |
| `src/images/mongolia/{overview,day-1..day-5}/` | Empty `.gitkeep` placeholder folders, no actual images yet | **RENAME to match new site filenames** (`tsagaan-suvarga/`, `khongoryn-els/`, `yolyn-am/`, `baga-gazriin-chuluu/`); delete `day-5/`; keep `overview/`. Cheap since they're empty. |
| `docs/04-mongolia/*.html` | mdBook build output (generated) | **No manual action needed** — `.github/workflows/mdbook.yml` rebuilds `docs/` automatically on every push to `src/**`. Local `mdbook build src` is still worth running once to sanity-check no broken links before commit (prior phases did this: see commits `ce6524b`, `953d88f` "docs: rebuild mdBook site"). |

## Architecture Patterns

### Recommended file structure (after Phase 5)

```
src/04-mongolia/
├── overview.md                  # SITE-01: 고비 촬영 일반 원리 (GPS 표, 코어 방향/고도 공식, 다크스카이, 신월/타이밍 원칙 + 예시, 이동 주의사항)
├── tsagaan-suvarga.md            # SITE-02/03: 차강소브라가 — was day-1-0813.md
├── khongoryn-els.md              # SITE-02/03: 홍고린엘스 — was day-2-0814.md
├── yolyn-am.md                   # SITE-02/03: 욜링암 (협곡 차폐 경고) — was day-3-0815.md
└── baga-gazriin-chuluu.md        # SITE-02/03: 바가가즈링 촐로 — was day-4-0816.md
                                   # day-5-0817.md: DELETED, no replacement file
```

```
src/images/mongolia/
├── overview/.gitkeep
├── tsagaan-suvarga/.gitkeep      # renamed from day-1/
├── khongoryn-els/.gitkeep        # renamed from day-2/
├── yolyn-am/.gitkeep             # renamed from day-3/
└── baga-gazriin-chuluu/.gitkeep  # renamed from day-4/
                                   # day-5/: DELETED
```

Why rename rather than keep `day-N-MMDD.md` filenames with rewritten content: the whole point of this phase is removing personal/dated framing; keeping dated filenames while writing date-free prose is an internal inconsistency a future editor (or reader inspecting URLs/source) will trip over. The project has zero precedent for protecting old URLs — Phases 2 and 3 already renamed/restructured `03-practice/` pages without ceremony, and the ROADMAP's pivot note frames this explicitly as expected churn. CI regenerates `docs/` from scratch on every push, so there's no manual redirect burden.

### SUMMARY.md 3부 block — retitle + relink

**Current:**
```markdown
# 3부 · 몽골 (8/13 ~ 8/17)

- [여행 개요](04-mongolia/overview.md)
- [Day 1 · 8/13](04-mongolia/day-1-0813.md)
- [Day 2 · 8/14](04-mongolia/day-2-0814.md)
- [Day 3 · 8/15](04-mongolia/day-3-0815.md)
- [Day 4 · 8/16](04-mongolia/day-4-0816.md)
- [Day 5 · 8/17](04-mongolia/day-5-0817.md)
```

**Recommended:**
```markdown
# 3부 · 몽골 여행지별 촬영 가이드

- [고비 촬영 일반 원리](04-mongolia/overview.md)
- [차강소브라가 (Tsagaan Suvarga)](04-mongolia/tsagaan-suvarga.md)
- [홍고린엘스 (Khongoryn Els)](04-mongolia/khongoryn-els.md)
- [욜링암 (Yolyn Am)](04-mongolia/yolyn-am.md)
- [바가가즈링 촐로 (Baga Gazriin Chuluu)](04-mongolia/baga-gazriin-chuluu.md)
```

5 links instead of 6 — 공항 link dropped, no replacement (it was never a shooting-guide topic).

### Per-site page template (replaces the old two-pass Day-N template)

The old template (`ARCHITECTURE.md` Pattern 2, reused by archived Phase 4) had `## 사전 계획` + `## 촬영 결과 (여행 후 작성 — Phase 5)`. That two-pass structure is now obsolete — there is no "여행 후" for a general guide. Collapse to a single-pass structure:

```markdown
# [장소명] ([영문명])

## 위치 / GPS
[좌표 + 주의사항(있으면, e.g. 차강소브라가 광산 혼동) — 기존 내용 그대로, "Day N" 언급만 제거]

## 이곳에서는 이렇게 찍으면 좋다
[기존 "이날의 추천 피사체 · 구도" 섹션을 일반화한 버전 — "이날" → "이곳", 지형 특징 → 구도 제안]

## 은하수 코어 상황
[해당 장소의 코어 최대 고도 수치 + 짧은 설명. 공식 자체와 위도 표는 overview.md가 소유하므로 여기서는 결과 수치만 인용하고 "자세한 원리는 [고비 촬영 일반 원리](overview.md) 참고"로 링크]

## 주의사항
[SITE-03: 저고도 코어/협곡 차폐/바람·모래 등 이 장소 고유의 경고 — 기존 ⚠️ 섹션 재사용]

## 촬영 타임라인
[기존 "촬영 타임라인 (예시)" 구조는 유지하되 분단위 시각(예: "20:06~22:02") 대신 상대적 표현으로 일반화: "도착~일몰: 스카우팅 → 일몰~박명 종료(약 1시간50분~2시간): 세팅·시험촬영 → 박명 종료 이후: 본 촬영 → 새벽 1~2시경: 철수"]
```

Drop entirely: the `> 🔵 촬영 전 — 사전 계획만 작성됨...` banner, the `## 촬영 결과 (여행 후 작성 — Phase 5)` section, any `<!-- 이미지 예정(Phase 5) -->` comments that reference "Phase 5" as a future step (Phase 5 is now).

### Generalizing the moon/timing table (the one real editorial decision)

**Problem:** the archived moon table is keyed to specific calendar dates (8/13–8/16) tied to a specific traveler's itinerary. A general guide reader won't be going on those dates.

**Recommendation — keep the principle, keep the numbers, drop the dates:**

1. State the general principle first (this already exists qualitatively in `finding-the-milkyway.md` §3 — link to it, don't restate the checklist): *"고비 촬영은 신월 전후 며칠 사이로 일정을 잡는 것이 이상적이다. 신월 직후 며칠은 초승달이 있어도 대개 일몰 직후 서쪽 저고도에서 금방 저버려, 완전히 어두워지는 시각(천문박명 종료) 이후에는 사실상 무월광 조건이 된다."*
2. Then present the verified table as a **worked example**, relabeled so it's clearly illustrative rather than "your dates": replace the `날짜`/`장소` columns with something like `신월 후 경과` (D0, D+1, D+2, D+3) and keep 조도(%)/월몰-완전암흑 margin columns as-is. Caption it: *"예시 — 어느 신월 직후 나흘간의 조도·월몰 변화 (43~46°N, 8월 기준)."*
3. Explicitly instruct: *"본인의 실제 촬영 날짜는 PhotoPills/Stellarium 또는 timeanddate.com으로 반드시 재확인한다"* — same pattern already used for core azimuth/altitude in the archived content.
4. Keep the twilight-duration finding (~1h49m–1h57m, longer than the "박명은 1시간" misconception) as a latitude-band fact, caveated "8월 기준."

This preserves 100% of the verified data (nothing to re-research) while removing the "this is MY itinerary" framing that conflicts with a general guide.

## Content Mapping Table (SITE-01/02/03 → source data)

| Requirement | Content | Source (archived research section) |
|---|---|---|
| SITE-01: 다크스카이 조건 | Bortle 1–2 in Gobi | Already stated in `finding-the-milkyway.md` §4 — link, don't duplicate |
| SITE-01: 코어 방향/고도 공식 | `90° − 위도 − 29°`, per-site 14.6°–17.5° | Archived §3 "은하수 코어 위치/고도" |
| SITE-01: 타이밍 | 박명 종료 직후 ~ 새벽 1–2시 권장, SSW→SW 이동 | Archived §3 "실전 함의" |
| SITE-01: 달 | Generalized worked example (see above) | Archived §2 "달 데이터" |
| SITE-01: GPS 개요 표 | 4 sites, coords, 비고 | Archived §1 |
| SITE-02: 차강소브라가 구도 | 절벽 실루엣, 남쪽 끝단/비스듬히 걸치는 위치 | Archived §4 table row 1 |
| SITE-02: 홍고린엘스 구도 | 사구 능선 리딩라인, 사람 실루엣 | Archived §4 table row 2 |
| SITE-02: 욜링암 구도 | 협곡 입구 트인 곳 + 산맥 실루엣(밤) / 슬롯·얼음벌판(낮) | Archived §4 table row 3 |
| SITE-02: 바가가즈링 촐로 구도 | 화강암 아치·기암 실루엣, 남쪽 트인 바위군락 | Archived §4 table row 4 |
| SITE-03: 저고도 코어 | 14.6°–17.5° 전체 사이트 공통 경고 | Archived §3 |
| SITE-03: 협곡 코어 차폐 | 욜링암 전용, 벽 최대 200m vs 코어 17.5° | Archived §4 row 3 + day-3-0815.md's existing ⚠️ section (already well-written) |
| SITE-03: 바람·모래 | 홍고린엘스 (+ day-5's 장비 방진 point folded in) | Archived §4 row 2 + day-5-0817.md |
| SITE-03: 이동 | Fold day-5's travel-day content into overview.md as a short general note | day-5-0817.md "이동·정리" section, generalized (no specific "공항"/8/17 framing — just "사이트 간 이동에는 시간이 걸리고, 이동 중에도 장비를 모래 먼지에서 보호한다") |

## Don't Hand-Roll

| Problem | Don't | Do Instead | Why |
|---|---|---|---|
| Core altitude/azimuth/GPS numbers | Re-derive or re-search these | Copy verbatim from `.planning/archive/04-몽골-사전-계획/04-RESEARCH.md` | Already verified (USNO/NOAA APIs + cross-validated GPS sources), redoing it risks introducing new errors and wastes the phase's time budget |
| Moon-phase-for-your-dates guidance | Write a generic "check a moon phase app" without a concrete illustration | Keep the verified 0/3/8/14% worked example, relabeled (see above) | Concrete numbers make the abstract principle credible; don't throw away verified data just because it needs reframing |
| Milky Way timing/direction theory | Re-explain "코어 시즌," direction-finding method, Bortle scale | Link to `finding-the-milkyway.md`, only add the Gobi-specific delta (low altitude at this latitude band) | Explicitly called out in the phase context: "don't restate" |

## Common Pitfalls

### Pitfall 1: Leaving "Day N"/dated language in prose after renaming files
**What goes wrong:** File gets renamed to `tsagaan-suvarga.md` but body text still says "이날의 추천 피사체" or "Day 1 하늘 상황" — half-migrated.
**How to avoid:** Grep each rewritten file for `Day |8/1[3-7]|이날|여행 후|촬영 결과` after editing; none should remain.

### Pitfall 2: Duplicating the core-altitude formula on every site page
**What goes wrong:** Each of the 4 site pages re-explains `90° − 위도 − 29°`, bloating the book and creating 4 places to keep in sync.
**How to avoid:** Formula + full per-site table lives once in `overview.md`; site pages state only their own number (e.g., "이곳의 코어 최대 고도는 약 17.5°다") and link back for the derivation.

### Pitfall 3: `finding-the-milkyway.md` §3 still reads as a personal trip diary
**What goes wrong:** SITE-01 is supposed to link to this page for general Milky Way timing theory, but the page itself currently says *"8/12 신월 — 그리고 몽골 일정(8/13~8/17) 전체가..."* — a reader arriving from the general "고비 촬영 일반 원리" page would hit personal/dated content mid-explanation, undermining the whole reframe.
**How to avoid:** As part of this phase (or flagged as a fast follow if the planner wants to keep scope tight to `04-mongolia/`), generalize that one bullet to the same "예시" pattern used in `overview.md`, or simply trim it to the general principle ("여름철 신월 전후 며칠은 초저녁부터 무월광 조건") without a specific date. This file was outside Phase 3's cleanup scope (Phase 3 fixed its *practice*-related stale refs, not this one), so it's still pending.

### Pitfall 4: Treating 욜링암's canyon warning as boilerplate
**What goes wrong:** Compressing the existing ⚠️ 협곡 차폐 section down to fit a uniform template and losing the specific reasoning (200m walls vs 17.5° core, "shoot from entrance not deep inside").
**How to avoid:** This section is already well-written and general (no date/personal framing needed removal) — copy it near-verbatim into `yolyn-am.md`, just moving it under the "주의사항" heading of the new single-pass template.

## Plan Structure Recommendation

**No checkpoints needed** — identical situation to archived Phase 4: all data is already verified and none of it depends on user-supplied field results (the "촬영 결과" pass is being removed, not filled in). Pure rewrite/restructure work.

**Recommended: 1 plan, 1 wave, 3 tasks**

- **Task 1 — `overview.md` → SITE-01.** Rewrite as "고비 촬영 일반 원리": GPS table (drop Day-N labels), core-altitude formula+table, direction/timing guidance, dark-sky link to `finding-the-milkyway.md`, generalized moon worked-example, general 이동 주의사항 (absorbing day-5's substance). Retitle page heading.
- **Task 2 — 2 site pages.** Create `tsagaan-suvarga.md` and `khongoryn-els.md` from `day-1-0813.md`/`day-2-0814.md` using the single-pass template; delete the two source files; rename their image folders.
- **Task 3 — remaining 2 site pages + cleanup + SUMMARY flip.** Create `yolyn-am.md` and `baga-gazriin-chuluu.md` from `day-3-0815.md`/`day-4-0816.md`; delete those source files plus `day-5-0817.md` and its image folder; retitle+relink `SUMMARY.md`'s 3부 block; optionally generalize `finding-the-milkyway.md` §3's dated bullet (Pitfall 3); run `mdbook build src` locally to confirm no broken links/orphans before commit.

This mirrors the 2-3 task shape of Phases 2–4 (each did content authoring + SUMMARY flip + stale-ref cleanup in the same plan).

## Open Questions

1. **`src/introduction.md`'s "실제 8월 몽골 여행을 준비하며 기록한 과정" line**
   - What we know: this is the book's front-page framing and still describes it as a personal trip log, which is now inconsistent with the whole book's 2026-07-09 pivot to a general guide (not just Phase 5's section).
   - What's unclear: whether fixing this is Phase 5's job or a separate small task — it's outside the explicit `04-mongolia/` file list given for this phase, and outside SITE-01/02/03's literal wording.
   - Recommendation: flag to the planner; low-cost one-line fix (e.g., "이 책은 트래킹 장비 없이 몽골 고비에서 은하수를 찍고 싶은 사람을 위한 실전 가이드입니다") could be folded into Task 3's cleanup pass if the planner wants to close the loop, but shouldn't block the phase if descoped.

2. **Should `finding-the-milkyway.md` §3's dated bullet be fixed in this phase or deferred?**
   - What we know: it's the one remaining stale personal/dated reference blocking a fully general reading path from SITE-01 → fundamentals theory.
   - What's unclear: it's technically a `02-fundamentals/` file, not `04-mongolia/` — could be seen as out of this phase's file boundary.
   - Recommendation: include as a small edit in Task 3 (already touching this file's neighborhood conceptually); it's a 2-3 line change, not a new content burden.

3. **Exact wording for the generalized moon table's column labels**
   - What we know: the underlying numbers (0/3/8/14% illumination, moonset-before-dusk margins) are solid and should be kept.
   - What's unclear: whether "D+0/D+1/D+2/D+3" or "신월 당일/1일 후/2일 후/3일 후" reads better in Korean prose — a copy-editing choice, not a fact question.
   - Recommendation: leave to the executor's judgment; either works, just avoid any residual "8/13" style calendar dates.

## Sources

### Primary (HIGH confidence)
- `.planning/archive/04-몽골-사전-계획/04-RESEARCH.md` — all GPS/moon/core-altitude/composition data, already cited to USNO API, sunrise-sunset.org (NOAA algorithm), Wikidata, Wikipedia cross-validation. Reused verbatim, not re-verified in this research pass (per phase context: "reuse verbatim; don't re-derive/re-search").
- `src/04-mongolia/{overview,day-1-0813,day-2-0814,day-3-0815,day-4-0816,day-5-0817}.md` — read in full, current state confirmed.
- `src/SUMMARY.md`, `src/02-fundamentals/finding-the-milkyway.md`, `src/introduction.md` — read in full to confirm cross-reference/link targets and locate remaining stale personal/dated framing.
- `.planning/ROADMAP.md` — Phase 5 goal/requirements/success criteria, and the 2026-07-09 pivot note confirming general-guide reframe intent and permission to restructure without preserving old URLs.
- `.github/workflows/mdbook.yml` — confirms CI auto-rebuilds `docs/` from `src/**` on push, so file renames don't require manual redirect handling.

### Secondary (MEDIUM confidence)
- `.planning/phases/03-야외에서-연습할-사항/03-01-SUMMARY.md` — precedent for "flip SUMMARY + clean stale personal/date refs" pattern used to justify Phase 5's approach and task shape.
- `git log` — confirmed prior phases (2, 3, 4) each shipped as 1 plan / 2 tasks with a SUMMARY flip + stale-ref cleanup bundled into the same commit pattern.

## Metadata

**Confidence breakdown:**
- Source data (GPS/moon/core/composition): HIGH — fully inherited from already-verified archived research, no new claims made
- File restructure plan: HIGH — directly follows established project precedent (Phases 2/3 renamed/restructured without ceremony) and confirmed CI auto-rebuild removes URL-stability concerns
- Moon-table generalization wording: MEDIUM — this is an editorial judgment call, not a fact; the underlying numbers are HIGH confidence, only the presentation framing is a recommendation

**Research date:** 2026-07-09
**Valid until:** No expiry — all underlying astronomical data is date-fixed historical/computed fact (per archived research), and the restructure plan depends only on the current repo state, not external volatile info.

---
*Research for: Phase 5 (몽골 여행지별 촬영 가이드), MongolPhoto*
*Researched: 2026-07-09*
