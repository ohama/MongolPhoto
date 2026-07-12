# Phase 3: 야외에서 연습할 사항 (가이드) - Research

**Researched:** 2026-07-09
**Domain:** Content authoring for a Korean mdBook general how-to chapter (not a personal logbook) — mirrors Phase 2's pattern exactly, but for 야외(outdoor) practice. Reuses Phase 1 theory pages via cross-links, adds new "야외에서 실제로 어떻게 리허설하는가" framing content, and fixes stale personal/date references in `finding-the-milkyway.md` that Phase 2 explicitly deferred here.
**Confidence:** HIGH — every asset this phase needs was read directly from the repo (Phase 1 theory pages, Phase 2's shipped output as the pattern to mirror, SUMMARY.md, REQUIREMENTS.md, ROADMAP.md). No new tooling, no external research needed. Open items are wording/split calls for the planner, listed in Open Questions.

## Summary

Phase 3 is the direct sibling of Phase 2, one level up: Phase 2 taught the reader to rehearse camera mechanics indoors (streetlight focus, dial-blind exposure changes, WB/RAW, checklist). Phase 3 teaches the reader to take that muscle memory outdoors to a real (if imperfect) dark-ish site near home and rehearse it under real sky conditions, plus rehearse the parts that can't be simulated indoors at all: real high-ISO/long-exposure star-trail checking, real composition with sky + foreground, and the field hazards (dew, wind, battery drain in cold, safety, transit) that only show up outdoors. It closes with a self-review loop (FIELD-03) — the outdoor analogue of Phase 2's HOME-03 checklist, but review-oriented rather than pure "can I do this" self-check, since FIELD-03 is explicitly about looking at *results* and extracting *improvements*.

This phase must also do one piece of cleanup Phase 2 explicitly left behind: `src/02-fundamentals/finding-the-milkyway.md` (Phase 1 content) has five lines of stale personal/dated language ("7/17 서해안 연습", "연습 1·3·4차", "국내 평시 연습") that describe the author's now-superseded personal itinerary. Phase 2's plan file contains an explicit note: *"deferred-to-Phase-3 (건드리지 말 것): `finding-the-milkyway.md`의 '7/17 서해안 연습' 등 스테일 참조는 야외(Phase 3) 영역이므로 이 phase에서 수정하지 않는다."* This phase is where that IOU comes due. A sixth stale reference was found in the same family during this research, in `src/02-fundamentals/index.md` line 3 ("실전(서해안 연습·몽골) 전에") — not explicitly called out in the task brief but same category and same fix pattern; flagged for the planner to include or explicitly defer.

**Primary recommendation:** Mirror Phase 2's structure and conventions exactly: 3 new pages in `src/03-practice/` named `field-*.md` for FIELD-01/02/03, one SUMMARY.md edit flipping the `- [야외에서 연습하기]()` placeholder to real links, and a dedicated cleanup task fixing all stale references in `finding-the-milkyway.md` (and optionally `index.md` line 3) to general wording — no new dates, no personal sessions. Single plan, single wave, autonomous tasks, no checkpoints.

## Standard Stack

Not applicable in the software sense — this is a content-authoring phase. "Stack" here means the established conventions this project already uses and Phase 3 must follow:

### Core (established conventions, not libraries)
| Convention | Source | Purpose | Why Standard |
|---|---|---|---|
| mdBook (Rust) | Phase 1 setup | Static site build | Already the whole project's engine; `mdbook build src` is the acceptance gate |
| 지침체 ("~해 보세요/~을 익히세요") | Phase 2 pages | Voice | Locked convention across Phase 2; Phase 3 must match for consistency |
| Link-don't-restate | Phase 2 RESEARCH.md | Avoid duplication | New pages link to Phase 1 theory pages instead of re-explaining ISO/초점/구도 theory |
| Forward-link to `template.md` | Phase 2 home-*.md pages | Practice-log integration | Every practice page ends with `이 연습 결과는 [연습 로그 템플릿](template.md)에 기록해 보세요.` |
| Empty-paren placeholder `[label]()` | SUMMARY.md (2부/4부/부록) | Marks "future phase, not yet linked" without breaking `mdbook build` | Already used for `[워크플로 개요]()`, and was used for `[야외에서 연습하기]()` which THIS phase flips to a real link |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|---|---|---|
| 3 separate FIELD pages | 1 combined page or 2 pages | See Open Questions #1 — recommend 3 to mirror Phase 2's HOME-01/02/03 1:1 split by requirement, keeps each page scannable and each requirement traceable to exactly one artifact |
| New `field-hazards` page for dew/wind/battery/safety | Fold into `field-workflow.md` (Phase 1) | Phase 1 page is finished/complete and framed as "the 7-step sequence," not a hazard-prep rehearsal guide; better to add a new Phase 3 page that references field-workflow.md's steps rather than retrofit Phase 1 content |

**Installation:** None — no new dependencies. Uses the same mdBook toolchain already configured.

## Architecture Patterns

### Recommended Project Structure
```
src/03-practice/
├── home-camera-controls.md      # Phase 2 (existing) — mirror pattern
├── home-focus-and-interval.md   # Phase 2 (existing) — mirror pattern
├── home-checklist.md            # Phase 2 (existing) — mirror pattern
├── field-practice.md            # NEW (FIELD-01) — real-sky exposure/focus/composition rehearsal
├── field-prep-and-hazards.md    # NEW (FIELD-02) — outdoor prep + on-site workflow rehearsal + hazards
├── field-review.md              # NEW (FIELD-03) — self-review checklist after an outdoor session
└── template.md                  # existing, unchanged structurally (already generic post-Phase-2)
```

### Pattern 1: Requirement-to-page 1:1 mapping (from Phase 2, repeat here)
**What:** Each FIELD-0N requirement gets exactly one new page, named descriptively (not `field-01.md`), matching Phase 2's `home-camera-controls.md` / `home-focus-and-interval.md` / `home-checklist.md` naming style (kebab-case, descriptive, no numbers in filename).
**When to use:** Always for this project's practice pages — keeps traceability from REQUIREMENTS.md → SUMMARY.md → file trivial to verify by grep.
**Example names:**
- FIELD-01 → `field-practice.md` (실전 연습 항목: 노출·초점·구도)
- FIELD-02 → `field-prep-and-hazards.md` (준비·워크플로 리허설·이슬/바람/배터리/안전/이동)
- FIELD-03 → `field-review.md` (결과 점검·복기 체크리스트)

### Pattern 2: Link theory, add only the "how to rehearse it outdoors" delta
**What:** Every FIELD page opens by naming the Phase 1 theory page(s) it draws on via markdown link, then adds ONLY the outdoor-rehearsal-specific instructions that don't already exist anywhere in the book.
**When to use:** For every substantive claim in the new pages. This was Phase 2's core convention (verified pattern in `home-camera-controls.md` line 3, `home-focus-and-interval.md` lines 5/9/17).
**Example (mirroring Phase 2's opening-paragraph pattern):**
```markdown
# 실전 연습 — 노출·초점·구도

집에서 손에 익힌 조작을 이제 실제 밤하늘 아래에서 확인할 차례입니다. [현장 촬영 워크플로](../02-fundamentals/field-workflow.md)의 순서를 그대로 따라가면서, 아래 세 가지를 특히 눈여겨 확인하세요.
```

### Pattern 3: Requirement → theory-page mapping for Phase 3 (concrete)

| Requirement | New page | Links to (Phase 1 theory, don't restate) | What's NEW (outdoor-rehearsal delta only) |
|---|---|---|---|
| FIELD-01 (노출·초점·구도 실전 연습) | `field-practice.md` | `exposure-basics.md`, `500-npf-rule.md`, `focusing.md`, `field-workflow.md`(3~6단계) | Finding a real (if imperfect) dark-ish site near a city; setting Bortle expectation vs Mongolia Gobi Bortle 1-2 (link `finding-the-milkyway.md` §4, already has this comparison after the stale-fix); doing a full real-exposure test at actual high ISO and the reader's own calculated shutter limit (not simulated); checking star trailing by zooming the LCD 100% on an actual night frame (vs the home streetlight drill which only tested focus, not trailing); composing with a REAL foreground + sky (vs home's "창밖/베란다" mock composition) |
| FIELD-02 (준비·현장 워크플로 리허설: 이슬·바람·배터리·안전·이동) | `field-prep-and-hazards.md` | `field-workflow.md` (전체 7단계, especially 1·2·7), `01-gear/accessories.md` (렌즈 히터/배터리 items), `01-gear/checklist.md` (방한 & 안전 section) | End-to-end on-site workflow rehearsal (drive the whole 7-step sequence once, timed, before the "real" trip); dew/condensation check-and-wipe habit (mention generically — humid/coastal conditions increase risk, NOT a specific date/location); wind/tripod stability check specific to an outdoor gusty site (vs home's still-air balcony); cold + battery drain awareness in real outdoor cold (not simulated); safety rehearsal — going out alone at night, telling someone your location/return time, terrain awareness in the dark, checking it's not private/restricted land (this last item is *already* a checklist line in `01-gear/checklist.md` line 45 — link, don't restate); transit/travel-time rehearsal (drive to the site once before doing it in an unfamiliar country) |
| FIELD-03 (결과 점검·복기 → 개선 포인트) | `field-review.md` | `field-workflow.md` §6 (시험 촬영·히스토그램), `focusing.md` §5 (100% 확대 확인), `template.md` (연습 로그의 "배운 점/문제점"·"다음 세션 개선 사항" 섹션) | A results-review checklist run AFTER the outdoor session (not during): star trailing check (100% crop), focus sharpness check, histogram/exposure check, dew/fogging check on frames, composition/horizon check, then bridging explicitly into `template.md`'s "다음 세션 개선 사항" section so the review has somewhere to go |

### Anti-Patterns to Avoid
- **Re-teaching Phase 1 theory:** Do not re-explain ISO/조리개/셔터 math, the 500/NPF formula derivation, the 6-step focusing method, or the 7-step field workflow. Link to them. (Same rule Phase 2 followed successfully.)
- **Personal/dated framing:** No "1차/2차/3차 연습", no specific calendar dates, no "내 경우엔" first-person narrative. 지침체 only — this is a general guide for any reader, any location, any date.
- **Hardcoding a specific practice site or region:** The book doesn't know where the reader lives. Frame "근교 어두운 곳" generically (e.g., "차로 30분~1시간 정도 벗어난 곳", "도심 불빛에서 최대한 먼 지점", using PhotoPills/light-pollution-map style guidance already established via `accessories.md`'s app coverage) rather than naming a real place.
- **New hardcoded exposure/shutter numbers:** Same rule as Phase 2 — don't hardcode a crop-specific shutter limit; the reader already calculated their own number in HOME-01 and should reuse it here (link back to `home-camera-controls.md` item 2 or to `500-npf-rule.md`).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---|---|---|---|
| "How do I know if my rehearsal site is dark enough?" | A new Bortle-estimation table/instructions | Link to `finding-the-milkyway.md` §4 (Bortle explanation) + `01-gear/accessories.md`'s PhotoPills/Stellarium coverage | Already fully covered; Phase 3 only needs to add "go compare your actual near-city site's Bortle number against what you'll see" framing |
| "How do I check dew is a risk?" | New weather-app guidance | Link `01-gear/checklist.md`'s 날씨 앱 items (Windy/Clear Outside) and `01-gear/accessories.md`'s 렌즈 히터 row, which already explains the dew-point mechanism | Don't restate the mechanism explanation, just add "check before you go outdoors and check your lens during the session" |
| "How do I know outdoor safety basics?" | New safety essay | Link `01-gear/checklist.md` line 45-46 (사유지/보호구역 확인, 일행과 시작·종료 시간 공유) | Already exists as checklist items; Phase 3 adds the "rehearse this habit before Mongolia" framing, not new safety content |

**Key insight:** Nearly all the raw factual content Phase 3 needs (Bortle scale, dew mechanism, battery-in-cold mechanism, wind/tripod stability, safety checklist items) already exists somewhere in Phase 1 (`finding-the-milkyway.md`, `field-workflow.md`) or Phase 1's gear pages (`accessories.md`, `checklist.md`). Phase 3's actual new-content burden is narrow: framing all of it as "go rehearse this for real, outdoors, before Mongolia" and adding the review/self-check loop (FIELD-03) which doesn't exist anywhere yet.

## Common Pitfalls

### Pitfall 1: Leaving `finding-the-milkyway.md`'s stale references unfixed (or fixing them wrong)
**What goes wrong:** The task brief explicitly requires this fix, but it's easy to under-scope it (fix only the "7/17" literal date and miss the "연습 1·3·4차" personal-session references), or over-scope it (accidentally touch content Phase 2 already correctly left alone).
**Why it happens:** The five stale lines are spread across the page (lines 9, 10, 23, 31, 32) with different specific phrasings, not a single find-replace.
**How to avoid:** Fix all five verified occurrences (see exact lines below) plus the newly-found sixth occurrence in `index.md` line 3 if in scope. Use general wording with no new dates and no personal session numbering, consistent with how Phase 2 fixed the analogous `index.md` line 12.
**Warning signs:** `grep -rn "7/17\|서해안\|연습 [0-9]차\|평시 연습" src/02-fundamentals/` returning any hits after the fix.

### Pitfall 2: The `field-workflow.md` → 이슬 link is currently a broken promise
**What goes wrong:** `finding-the-milkyway.md` line 41 says "습도가 높으면 렌즈에 이슬이 맺히기 쉽다 — 이는 [현장 촬영 워크플로](field-workflow.md)에서 다룬다" — but `field-workflow.md` (all 7 steps, verified by full read) never actually mentions dew/이슬/결로/김서림 anywhere. This is a dangling content promise that predates this phase.
**Why it happens:** Likely written when the author expected to add dew-handling to `field-workflow.md` later and never did (dew handling instead ended up only in `accessories.md`'s 렌즈 히터 row).
**How to avoid:** Since Phase 3 is creating `field-prep-and-hazards.md`, which explicitly owns dew as an outdoor rehearsal hazard (FIELD-02), redirect that link target from `field-workflow.md` to the new `field-prep-and-hazards.md` page instead of leaving it pointing at a page that doesn't cover it. This is a one-word link-target fix bundled into the same stale-reference cleanup task.
**Warning signs:** `grep -n "이슬" src/02-fundamentals/field-workflow.md` returns nothing (confirmed empty during this research) while `finding-the-milkyway.md` still claims that page covers it.

### Pitfall 3: FIELD-03 drifting into a duplicate of HOME-03
**What goes wrong:** HOME-03 (`home-checklist.md`) is a "can I do this" self-check ("할 수 있다/안다" phrasing, checked BEFORE going outdoors, about capability). FIELD-03 per the success criteria is a "check my actual results and find what to improve" review, done AFTER an outdoor session, about results-and-iteration. If `field-review.md` is written with the same capability-check framing as HOME-03, it becomes redundant instead of complementary.
**Why it happens:** Both are checklists with `- [ ]` items in the same book; easy to default to the same voice/structure.
**How to avoid:** Frame `field-review.md` items around observation + diagnosis ("별이 궤적으로 번졌다면 → 셔터속도를 다시 계산했는지 확인", "사진이 뿌옇다면 → 이슬/김서림 확인", "구도가 기울었다면 → 수평계 확인") rather than pure capability ticks, and explicitly bridge to `template.md`'s "다음 세션 개선 사항" section (the template already has this loop built in — reuse it, don't reinvent it).
**Warning signs:** `field-review.md`'s checklist items read nearly identically to `home-checklist.md`'s items with only "야외" substituted for "집".

### Pitfall 4: Re-explaining the 7-step field workflow instead of rehearsing it
**What goes wrong:** FIELD-02 asks for "현장 워크플로 리허설," which risks re-listing all 7 `field-workflow.md` steps inside the new page.
**Why it happens:** Natural instinct to be self-contained.
**How to avoid:** Link the whole `field-workflow.md` page once ("아래 7단계를 실제로 한 번 처음부터 끝까지 해보세요: [현장 촬영 워크플로](../02-fundamentals/field-workflow.md)") and only add what's NOT already in those 7 steps: the hazard-specific rehearsal detail (dew checking mid-session, wind-specific tripod technique, cold-battery management, safety pre-departure habits, travel-time-to-site rehearsal) as a supplementary layer, not a restatement of steps 1-7.
**Warning signs:** `field-prep-and-hazards.md` containing numbered steps that duplicate field-workflow.md's step titles (도착·암순응 / 삼각대 설치 / 구도 잡기 / 카메라 세팅 / 초점 맞추기 / 시험 촬영 / 본 촬영).

## Code Examples

Not applicable (content-authoring phase, no code). See "Architecture Patterns" above for the concrete markdown structure to mirror, taken directly from Phase 2's shipped pages.

### Exact stale references to fix in `finding-the-milkyway.md` (verified via grep + full read)

| Line | Current text | Problem | Suggested general replacement |
|---|---|---|---|
| 9 | `7월(서해안 연습)·8월(몽골)은 코어 시즌의 정중앙이다 — 별도의 새벽 기상 없이 초저녁~한밤중에도 코어를 볼 수 있는, 일 년 중 가장 좋은 시기다.` | Names a specific month tied to author's personal outdoor session ("서해안 연습") | `여름철(6~8월)은 코어 시즌의 정중앙이다 — 별도의 새벽 기상 없이 초저녁~한밤중에도 코어를 볼 수 있는, 일 년 중 가장 좋은 시기다.` (drop the "서해안 연습" parenthetical entirely; keep "8월(몽골)" only if other pages still date Mongolia — else also generalize) |
| 10 | `집에서 하는 평시 연습(연습 1·3·4차)은 국내 어디서든 계절 조건 자체는 충족하지만, 아래 4번(광해) 때문에 코어가 뚜렷하게 보이지 않을 수 있다 — 그래도 노출·초점 등 세팅 연습에는 문제없다.` | "연습 1·3·4차" is a direct personal-session numbering reference | `집·근교에서 하는 평소 연습은 국내 어디서든 계절 조건 자체는 충족하지만, 아래 4번(광해) 때문에 코어가 뚜렷하게 보이지 않을 수 있다 — 그래도 노출·초점 등 세팅 연습에는 문제없다.` |
| 23 | `**7/17 서해안 연습**: 달은 약 13% 밝기의 얇은 초승달이며, 해 진 뒤 몇 시간 내로 진다. 초저녁 이후로는 사실상 달 없는 하늘 조건이라 연습 일정으로 유리하다.` | Hardcoded date + personal trip name, and framed as if reporting a specific past/planned event rather than teaching a method | Either delete this bullet entirely (it's illustrative of a specific real date, which general guides shouldn't do) or replace with a generic worked example: `예: 신월 전후 며칠 이내인 밤을 고르면, 초저녁부터 사실상 달 없는 하늘 조건이 된다 — 이런 밤을 야외 연습 일정으로 우선 고려하자.` |
| 31 | `국내 평시 연습(집·근교)은 대체로 **Bortle 5~8** — 도시 불빛 때문에 밝은 별과 큰 구도 정도만 겨우 보이고, 은하수 코어는 눈으로도 사진으로도 뚜렷하게 나오기 어렵다. 이 세션들은 "은하수를 보는" 연습이 아니라 **세팅·초점·워크플로를 몸에 익히는** 연습으로 여긴다.` | "국내 평시 연습" + "이 세션들은" — still personal-session-flavored, though less blatant than others | `국내 근교 야외 연습(집 주변)은 대체로 **Bortle 5~8** — 도시 불빛 때문에 밝은 별과 큰 구도 정도만 겨우 보이고, 은하수 코어는 눈으로도 사진으로도 뚜렷하게 나오기 어렵다. 이런 곳에서는 "은하수를 보는" 연습이 아니라 **세팅·초점·워크플로를 몸에 익히는** 연습으로 여기자.` (this is the line Phase 3's new `field-practice.md` should directly link to/cite for the Bortle-expectation framing) |
| 32 | `서해안 연습(7/17)은 도심에서 벗어난 해안이라 국내 평균보다는 낫지만 여전히 도시 광해의 영향권이다 — 장소 선정 시 최대한 인공 불빛에서 먼 지점을 고른다.` | Hardcoded date + named personal trip | `도심에서 벗어난 야외 지점은 국내 평균보다는 낫지만 여전히 도시 광해의 영향권인 경우가 많다 — 장소 선정 시 최대한 인공 불빛에서 먼 지점을 고른다.` |
| 41 (bonus, Pitfall 2) | `습도가 높으면 렌즈에 이슬이 맺히기 쉽다 — 이는 [현장 촬영 워크플로](field-workflow.md)에서 다룬다.` | Link target doesn't actually cover dew (verified: `field-workflow.md` has zero occurrences of 이슬) | Redirect link to the new Phase 3 page: `습도가 높으면 렌즈에 이슬이 맺히기 쉽다 — 이는 [야외 준비와 현장 워크플로 리허설](../03-practice/field-prep-and-hazards.md)에서 다룬다.` (only works after `field-prep-and-hazards.md` exists — must be same task or sequenced after page creation within the same plan) |

**Bonus — sixth stale reference found, same family, NOT explicitly named in task brief but flagged for planner:**

| File:Line | Current text | Note |
|---|---|---|
| `src/02-fundamentals/index.md:3` | `...실전(서해안 연습·몽골) 전에 "무엇을 어떻게 눌러야 하는지"를 손에 익힐 수 있도록 구성했습니다.` | Phase 2 already edited line 12 of this same file but left line 3's "서해안 연습" untouched. Same category of stale personal reference. Planner should decide: fix in this phase (natural, since it's the sibling stale-reference cleanup) or explicitly note as still-deferred. Suggested general replacement: `...실전(야외 연습·몽골) 전에 "무엇을 어떻게 눌러야 하는지"를 손에 익힐 수 있도록 구성했습니다.` |

### SUMMARY.md flip (exact before/after)

Current (`src/SUMMARY.md` lines 20-25):
```markdown
# 2부 · 가기 전 연습

- [카메라 조작·세팅 연습](03-practice/home-camera-controls.md)
- [초점·구도·인터벌 연습](03-practice/home-focus-and-interval.md)
- [집 연습 체크리스트](03-practice/home-checklist.md)
- [야외에서 연습하기]()
```

Recommended after:
```markdown
# 2부 · 가기 전 연습

- [카메라 조작·세팅 연습](03-practice/home-camera-controls.md)
- [초점·구도·인터벌 연습](03-practice/home-focus-and-interval.md)
- [집 연습 체크리스트](03-practice/home-checklist.md)
- [실전 연습 — 노출·초점·구도](03-practice/field-practice.md)
- [야외 준비와 현장 워크플로 리허설](03-practice/field-prep-and-hazards.md)
- [야외 연습 결과 점검](03-practice/field-review.md)
```
(Replaces the single placeholder line with 3 real links — same empty-paren-placeholder convention the project already uses elsewhere, now resolved for this slot. No other SUMMARY.md sections should be touched.)

## State of the Art

Not applicable — no tooling/library evolution involved. This is entirely a content-consistency question internal to the project's own prior phases.

## Open Questions

1. **3 pages vs. fewer — is the FIELD-01/02/03 split into 3 separate files correct, or should some combine?**
   - What we know: Phase 2 used a strict 1:1 requirement→page mapping (HOME-01→home-camera-controls.md, HOME-02→home-focus-and-interval.md, HOME-03→home-checklist.md) and it worked cleanly, matches REQUIREMENTS.md traceability, and matches the SUMMARY.md sidebar granularity already established for 2부.
   - What's unclear: FIELD-01 and FIELD-02 are more similar in nature (both are "what to rehearse outdoors," one exposure/focus/composition-flavored, one prep/hazard/workflow-flavored) than HOME-01/02 were, so a planner could reasonably argue for 2 pages instead of 3, or for merging FIELD-01+02 into one longer page.
   - Recommendation: Keep 3 pages, mirroring Phase 2 exactly for consistency and 1:1 requirement traceability (this is what the parent context brief's file-naming suggestion also leans toward). If the planner prefers 2, the safest merge is FIELD-01+FIELD-02 into one `field-practice.md` (both are "before/during the session" content) while FIELD-03 (`field-review.md`, "after the session") stays separate — but 3 pages is the recommended default since it costs nothing extra and matches precedent exactly.

2. **Should the `index.md:3` stale reference (not explicitly named in the task brief) be fixed in this phase?**
   - What we know: It's the same personal-reference category as the five `finding-the-milkyway.md` lines and the already-fixed `index.md:12`. Phase 2's plan touched line 12 but explicitly left line 3 alone (not mentioned, presumably out of scope at the time since Phase 2's own scope was HOME-*, not FIELD-*/야외).
   - What's unclear: Whether the phase boundary was meant to include *all* remaining "서해안" references or just the ones inside `finding-the-milkyway.md`.
   - Recommendation: Include it — it's a one-line fix, same pattern, same file family (`02-fundamentals/`), and leaving it stale after this phase would mean a THIRD phase eventually has to circle back for a single leftover word. Bundle it into the same stale-reference-cleanup task as the `finding-the-milkyway.md` fixes.

3. **Does `field-prep-and-hazards.md` need to exist before the `finding-the-milkyway.md:41` link redirect, i.e. task ordering within the single plan?**
   - What we know: The link redirect (Pitfall 2) only makes sense once the target page exists; mdBook's build doesn't hard-fail on a link to a not-yet-existing file only if the file is created in the same plan before final build verification runs.
   - What's unclear: Whether the planner will sequence "create field-prep-and-hazards.md" and "fix finding-the-milkyway.md stale refs" as the same task or two tasks in the same wave.
   - Recommendation: Combine into one task (page creation + all stale-reference fixes including the link redirect) since they're both edits to the `02-fundamentals`/`03-practice` cross-link graph and are cheap to do together, then a second task for SUMMARY.md flip — mirrors Phase 2's exact 2-task shape (Task 1: new pages, Task 2: SUMMARY + stale refs + cleanup).

## Sources

### Primary (HIGH confidence — read directly from repo)
- `src/03-practice/home-camera-controls.md`, `home-focus-and-interval.md`, `home-checklist.md`, `template.md` — Phase 2's shipped pattern to mirror
- `src/02-fundamentals/finding-the-milkyway.md`, `field-workflow.md`, `focusing.md`, `index.md` — Phase 1 theory pages to link + stale-reference source
- `src/01-gear/accessories.md`, `checklist.md` — hazard/prep content already covered (dew, wind, battery, safety) to link not restate
- `src/SUMMARY.md` — exact current placeholder text and surrounding structure
- `.planning/phases/02-집에서-연습할-사항/02-RESEARCH.md`, `02-01-PLAN.md` — Phase 2's conventions, explicit deferred-to-Phase-3 note
- `.planning/REQUIREMENTS.md`, `.planning/ROADMAP.md` — FIELD-01/02/03 exact wording and success criteria

### Secondary / Tertiary
None used — no web research needed for this content-authoring, repo-internal phase.

## Metadata

**Confidence breakdown:**
- Standard stack/conventions: HIGH — directly observed from Phase 2's shipped, verified output
- Architecture (page split, naming): HIGH for the pattern, MEDIUM for the exact 3-vs-2 page-count call (flagged as Open Question #1, recommendation given)
- Pitfalls: HIGH — all four verified by direct grep/read against current repo state, not inferred

**Research date:** 2026-07-09
**Valid until:** No expiry concern — repo-internal content phase, not dependent on external library/tooling versions.
