# Architecture Research

**Domain:** Korean mdBook tutorial (content project) — astrophotography field guide
**Researched:** 2026-07-09
**Confidence:** HIGH (mdBook structural mechanics are well-documented and simple; content ordering is derived directly from the project's own stated practice→trip timeline, cross-checked against how published beginner astrophotography books sequence gear→fundamentals→field→post-processing)

## Standard Architecture

### System Overview

This is a **content architecture**, not a software architecture: the "components" are chapters/parts, the "data flow" is the reader's learning path (and, in parallel, the author's photo pipeline from camera to page). Both must be designed together because this book is built incrementally, gated by real-world shoot dates (7/17 practice, 8/13–8/17 Mongolia trip).

```
┌───────────────────────────────────────────────────────────────────────┐
│  0부 · 소개 (prefix, unnumbered)                                       │
│  "왜 트래킹 없이", "이 책을 보는 법", 여행 개요                          │
├───────────────────────────────────────────────────────────────────────┤
│  1부 · 준비하기                                                         │
│  ┌───────────────┐   ┌────────────────────────────┐                   │
│  │ 장비 가이드    │→ │ 촬영 기초 (설정/초점/법칙/계획)│                  │
│  └───────────────┘   └────────────────────────────┘                   │
├───────────────────────────────────────────────────────────────────────┤
│  2부 · 연습 로그 (반복 템플릿 × 4)                                      │
│  [연습1 집] → [연습2 서해안 7/17] → [연습3 집] → [연습4 집(리허설)]      │
│      └───────────────── 교훈이 다음 세션·본편으로 누적 ───────────────┘  │
├───────────────────────────────────────────────────────────────────────┤
│  3부 · 몽골 현지 (반복 템플릿 × 5, Day1~Day5, 8/13~8/17)                │
│  [Day1] → [Day2] → [Day3] → [Day4] → [Day5]                            │
│  각 Day: 사전 계획(피사체·시간표) + 사후 결과(사진·후기)                 │
├───────────────────────────────────────────────────────────────────────┤
│  4부 · 후보정 워크플로                                                  │
│  RAW 현상 → 스태킹(노이즈 감소) → 보정(대비/색감) → 내보내기/업로드      │
├───────────────────────────────────────────────────────────────────────┤
│  부록 (suffix, unnumbered)                                              │
│  치트시트 │ 체크리스트 │ 앱 가이드 │ 용어 사전                          │
└───────────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component (Part) | Responsibility | Depends On | Feeds Into |
|---|---|---|---|
| 소개 (Intro) | Frame the "no tracker" concept, trip context, how to use the book | Nothing — true entry point | Sets expectations reader carries into every later part |
| 1부 장비 (Gear) | Camera/lens/accessory picks filtered by portability + budget + beginner-friendliness | Nothing (can be researched/written first) | Gear list referenced by every practice session and field day ("checked before leaving") |
| 1부 기초 (Fundamentals) | Night exposure settings, manual focusing method, 500/NPF rule for crop sensor, planning apps/timing | Gear (needs to know lens focal length/aperture to teach the rule) | **Hard prerequisite** for Practice Session 1 and all field days — you cannot log "무슨 설정을 썼는지" without the vocabulary this part defines |
| 2부 연습 로그 (Practice ×4) | One repeatable logbook template applied 4 times; each entry captures goal → setup → settings → results → lessons | Fundamentals (concepts); previous session's lessons (iterative) | Session 4 lessons flow directly into Mongolia's shooting plan; sample RAWs from Session 2 onward feed Post-processing |
| 3부 몽골 (Field Days ×5) | Per-day target recommendations (what's shootable that night — Milky Way core position, moonrise, landscape) + shooting plan, later filled with real results | Fundamentals + Practice lessons (settings baseline); trip dates 8/13–8/17 (content literally cannot be completed before the trip happens) | Real trip photos become the book's best images — feed Post-processing chapter and Appendix cheat sheet |
| 4부 후보정 (Post-processing) | RAW → stack → edit → export, taught with real screenshots | Needs at least one set of real night-sky RAWs (earliest available: Session 1 home test, but outdoor dark-sky RAWs only exist after Session 2 on 7/17) | Final polished version needs Mongolia photos too — this chapter is written in two passes (skeleton early, richly illustrated late) |
| 부록 (Appendices) | Cheat sheet, pre-shoot checklist, app guide, glossary — quick-reference distillation | Everything above (it's a summary/distillation layer) | Nothing — terminal component, finalized last |

## Recommended Project Structure

```
MongolPhoto/
├── book.toml
├── src/
│   ├── SUMMARY.md
│   ├── introduction.md                     # 소개 (prefix chapter)
│   │
│   ├── 01-gear/
│   │   ├── index.md                        # 장비 가이드 개요
│   │   ├── camera-lens.md                  # 카메라 & 렌즈 추천
│   │   ├── accessories.md                  # 삼각대·인터벌로미터·전원·앱
│   │   └── gear-checklist.md               # 최종 장비 체크리스트
│   │
│   ├── 02-fundamentals/
│   │   ├── index.md
│   │   ├── night-settings.md               # 노출·ISO·조리개
│   │   ├── focusing.md                     # 수동 초점 맞추기
│   │   ├── 500-npf-rule.md                 # 크롭센서 500/NPF 룰
│   │   └── planning.md                     # 은하수 위치·시간 계획, 앱
│   │
│   ├── 03-practice/
│   │   ├── _template.md                    # (편집용 참고본, SUMMARY에는 미등록)
│   │   ├── session-1-home.md
│   │   ├── session-2-westcoast.md
│   │   ├── session-3-home.md
│   │   └── session-4-home.md
│   │
│   ├── 04-mongolia/
│   │   ├── overview.md                     # 일정·달의 위상·GPS 개요
│   │   ├── day-1-0813.md
│   │   ├── day-2-0814.md
│   │   ├── day-3-0815.md
│   │   ├── day-4-0816.md
│   │   └── day-5-0817.md
│   │
│   ├── 05-postprocessing/
│   │   ├── index.md
│   │   ├── raw-develop.md
│   │   ├── stacking.md
│   │   ├── editing.md
│   │   └── export.md
│   │
│   ├── 06-appendix/
│   │   ├── cheat-sheet.md
│   │   ├── checklists.md
│   │   ├── apps.md
│   │   └── glossary.md
│   │
│   └── images/
│       ├── gear/
│       ├── fundamentals/
│       ├── practice/
│       │   ├── session-1/
│       │   ├── session-2-westcoast/
│       │   ├── session-3/
│       │   └── session-4/
│       ├── mongolia/
│       │   ├── day-1/ ... day-5/
│       │   └── overview/                   # star charts, map, moon-phase graphics
│       ├── postprocessing/
│       │   ├── before-after/
│       │   └── screenshots/
│       └── appendix/
│
└── .planning/                              # GSD planning artifacts (not part of the book)
```

### Structure Rationale

- **Numbered top-level folders (`01-`…`06-`) mirror the SUMMARY.md parts.** mdBook doesn't require this, but it keeps `src/` navigable in a file tree and prevents ambiguity when the book grows (a future 2nd trip becomes `07-<tripname>/`, not a rename-everything event).
- **`images/` mirrors the chapter tree 1:1**, one subfolder per chapter group, per the repo's own `mdbook-docs-images` skill (`src/images/...`, relative paths only, alt text required, captions in italics, no `<img>` tags). This makes "which photos go with which chapter" self-evident and avoids a single flat dumping-ground folder that becomes unmanageable once trip photos (dozens per day × 5 days) land.
- **`_template.md` is a non-chapter reference file**, not linked from `SUMMARY.md`. It exists purely so the author copies its section skeleton into each new `session-N-*.md` / `day-N-*.md` file — mdBook ignores files that aren't listed in `SUMMARY.md`, so this is safe.
- **RAW files never live in `src/`.** Only web-sized JPEG/WebP exports belong in `images/`. RAW originals (tens/hundreds of MB each) should stay outside the mdBook source tree (e.g., a separate `raw/` folder excluded via `.gitignore`, or cloud storage) — GitHub Pages and git itself are not built for multi-GB RAW libraries. The post-processing chapter should show *cropped preview exports* of before/after RAW states, not full RAW files.
- **`04-mongolia/overview.md` is separate from the day chapters** because it holds content that's stable regardless of what actually gets shot each night (moon phase table, GPS waypoints, general itinerary) — this can be finished well before the trip, unlike the day chapters which need real outcomes.

## Architectural Patterns

### Pattern 1: The Repeatable Practice-Log Template

**What:** A fixed set of subsections used identically across all 4 practice sessions (and adapted for the 5 Mongolia days). Writing it once and stamping it out prevents each session write-up from drifting into an unstructured diary entry, and lets a beginner reader pattern-match "oh, this is the same shape as last time."

**When to use:** Any chapter that logs a real shoot (practice sessions, field days).

**Template skeleton (`03-practice/_template.md`):**
```markdown
# 연습 N차 — [장소] ([날짜])

## 목표
이번 세션에서 확인/연습하려는 것 (예: 초점 잡는 법 숙달, 인터벌로미터 세팅)

## 장비 & 세팅
사용 장비, 카메라 설정값 (조리개/ISO/셔터스피드/초점거리)

## 촬영 환경
날씨, 월령, 광공해, 시간대 (서해안/몽골처럼 야외 세션이면 위치·GPS 추가)

## 결과 사진
![설명](../images/practice/session-N/xxx.jpg)
*그림. 캡션*

## 배운 점 / 문제점
잘 된 것, 실패한 것, 원인 분석

## 다음 세션 개선 사항
다음 번에 바꿀 것 → 다음 세션 "목표" 섹션과 연결됨
```

**Trade-offs:** A rigid template can feel repetitive to read cover-to-cover, but for a *logbook*, predictability is a feature — readers skim to the section they need (e.g., jump straight to "결과 사진" or "배운 점"). Keep each entry concise; if a session generates a lot of content, split "결과 사진" into a linked sub-gallery rather than bloating the page.

### Pattern 2: The Field-Day Template (Two-Pass Content)

**What:** Same logbook shape as practice sessions, but each day chapter is **written twice**: a "plan" pass before 8/13 (target recommendation, timing, what to shoot) and a "results" pass after the day happens (real photos, what actually worked). This is necessary because Mongolia content literally cannot be finished before the trip.

**When to use:** `04-mongolia/day-N-*.md` chapters only.

**Template skeleton:**
```markdown
# Day N — [날짜] · [지역/장소]

## 사전 계획 (여행 전 작성)
- 위치 / GPS
- 일몰·일출, 월출·월몰, 은하수 코어 방향·고도
- 이날의 추천 피사체 (구도 아이디어, 랜드마크)
- 촬영 타임라인 (예: 21:00 세팅 → 22:30 촬영 시작 → 01:00 철수)

## 촬영 결과 (여행 후 작성)
![설명](../images/mongolia/day-N/xxx.jpg)
*그림. 캡션*

## 현장 노트 & 다음 날을 위한 교훈
```

**Trade-offs:** Publishing the "사전 계획" section pre-trip means the live book briefly ships with an unfinished-looking chapter (no photos yet). Mitigate with a visible status line at the top of each day chapter (e.g., "촬영 전 — 계획만 작성됨" → replaced with "촬영 완료" after the trip) so readers aren't confused, rather than using mdBook's true draft-chapter mechanism (which disables the link entirely and would hide the useful pre-trip planning content).

### Pattern 3: Parts as SUMMARY.md Section Headers, Not Nested Chapters

**What:** mdBook's `SUMMARY.md` supports unnumbered level-1 `# Header` lines as pure visual separators between groups of numbered chapters (they render in the sidebar but aren't clickable pages and don't consume a chapter file). Use one per Part (준비하기 / 연습 로그 / 몽골 현지 / 후보정) instead of creating an `index.md` "part landing page" for each — simpler, and there's no real content that needs to live on a part-level landing page for this book.

**When to use:** Every top-level part boundary in this book.

**Example (`SUMMARY.md`):**
```markdown
# Summary

[소개](introduction.md)

# 1부 · 준비하기

- [장비 가이드](01-gear/index.md)
  - [카메라 & 렌즈 추천](01-gear/camera-lens.md)
  - [필수 액세서리](01-gear/accessories.md)
  - [장비 체크리스트](01-gear/gear-checklist.md)
- [촬영 기초](02-fundamentals/index.md)
  - [야간 카메라 설정](02-fundamentals/night-settings.md)
  - [초점 맞추기](02-fundamentals/focusing.md)
  - [500 / NPF 법칙 (크롭센서)](02-fundamentals/500-npf-rule.md)
  - [은하수 촬영 계획](02-fundamentals/planning.md)

# 2부 · 연습 로그

- [연습 1차 — 집](03-practice/session-1-home.md)
- [연습 2차 — 서해안 (7/17)](03-practice/session-2-westcoast.md)
- [연습 3차 — 집](03-practice/session-3-home.md)
- [연습 4차 — 집 (몽골 직전 리허설)](03-practice/session-4-home.md)

# 3부 · 몽골 (8/13 ~ 8/17)

- [여행 개요](04-mongolia/overview.md)
- [Day 1 · 8/13](04-mongolia/day-1-0813.md)
- [Day 2 · 8/14](04-mongolia/day-2-0814.md)
- [Day 3 · 8/15](04-mongolia/day-3-0815.md)
- [Day 4 · 8/16](04-mongolia/day-4-0816.md)
- [Day 5 · 8/17](04-mongolia/day-5-0817.md)

# 4부 · 후보정

- [워크플로 개요](05-postprocessing/index.md)
- [RAW 현상](05-postprocessing/raw-develop.md)
- [스태킹 (노이즈 감소)](05-postprocessing/stacking.md)
- [보정 (대비·색감·별 강조)](05-postprocessing/editing.md)
- [내보내기 & 업로드](05-postprocessing/export.md)

---

[치트시트](06-appendix/cheat-sheet.md)
[촬영 전 체크리스트](06-appendix/checklists.md)
[추천 앱 가이드](06-appendix/apps.md)
[용어 사전](06-appendix/glossary.md)
```

Note: the intro is a **prefix chapter** (before any `#` part header, unnumbered, not nested — mdBook disallows nesting prefix chapters). The appendix section after `---` is a **suffix chapter** block (also unnumbered); a horizontal rule visually separates it, which mdBook renders literally as a divider in the rendered sidebar/page — optional but conventional for marking "back matter."

## Chapter Granularity Guidance

- **One concept per file.** `night-settings.md`, `focusing.md`, and `500-npf-rule.md` are separate files even though they're all "기초" — a beginner should be able to bookmark/re-read just the focusing page without wading through exposure theory.
- **Practice/day logs are one file per session/day**, not one giant "연습 기록" mega-page. This keeps each page's image count manageable (photo-heavy pages are slow to scroll and slow to load) and gives each session a stable, linkable URL.
- **If a single day/session generates more photos than comfortably fit on one page** (rule of thumb: >12–15 images), split into a `day-N-gallery.md` sub-page linked from the main day chapter, keeping the day chapter itself focused on narrative + best shots.
- **`index.md` files for parts with ≥3 subchapters** (Gear, Fundamentals, Post-processing) give a one-paragraph orientation before the reader dives into subchapters — skip this for parts where the flat list is already self-explanatory (Practice, Mongolia days).

## Data Flow

### Reader's Learning Path (content dependency order)

```
소개 (motivation)
   ↓
장비 (what to buy/bring)
   ↓
기초 (how to shoot: settings, focus, 500/NPF, planning)
   ↓
연습 1→2→3→4  (apply fundamentals, iterate, lessons compound)
   ↓
몽골 Day1→Day5 (apply everything, real conditions, best photos)
   ↓
후보정 (turn all the RAWs collected above into final images)
   ↓
부록 (distilled quick-reference of everything above)
```

This is also, not coincidentally, the recommended **write order** — see below.

### Photo Pipeline (author's asset flow, parallel track)

```
카메라 촬영 (RAW)
   ↓
RAW 백업 (repo 밖: 외장 드라이브/클라우드, .gitignore 처리)
   ↓
후보정 워크플로 적용 (Lightroom/기타) → 대표 컷 선정
   ↓
웹용 export (JPEG/WebP, 리사이즈)
   ↓
src/images/<part>/<session-or-day>/ 에 배치
   ↓
해당 챕터 .md에서 상대경로로 삽입 + alt text + 캡션
```

Each practice session and field day produces its own batch through this pipeline; the Post-processing chapter (Part 4) is the one place where the pipeline *itself* becomes the subject matter, using cropped before/after examples pulled from whichever session's RAWs best illustrate each step (stacking needs multiple exposures — likely first available after Session 2 or later, since a tripod-mounted outdoor dark-sky session is required for a meaningful noise-reduction stack).

## Suggested Write/Build Order

Given today is **2026-07-09**, the West Coast practice is **2026-07-17** (8 days away) and Mongolia is **2026-08-13–17** (~5 weeks away), ordering is driven by hard external dates, not just logical dependency.

| Step | What | Why this position | Gate |
|---|---|---|---|
| 1 | `book.toml`, `SUMMARY.md` skeleton (all chapters listed, most as empty stub files) | Establishes structure once; lets every later step "just fill in a file" instead of restructuring | None — do first |
| 2 | 소개 (intro) | Cheap to write, sets frame, no dependencies | None |
| 3 | 1부 장비 (gear) | Needed before fundamentals (500/NPF rule needs a chosen focal length to demonstrate) and before Session 1 (need a gear list to bring) | None |
| 4 | 1부 기초 (fundamentals incl. 500/NPF rule, planning) | **Hard prerequisite for Session 1** — can't log camera settings you haven't been taught to choose | Must complete before Session 1, i.e. before 7/17 ideally, but at minimum before Session 1's write-up |
| 5 | Practice-log template (`_template.md`) | Build once, stamp out 4×; designing it after fundamentals ensures its "설정" section matches the vocabulary just defined | Before Session 1 |
| 6 | 연습 1차 (home) | First real use of the template; can happen anytime once steps 3–5 done | Should land before 7/17 so lessons can inform Session 2 |
| 7 | 연습 2차 (서해안, 7/17) | **Hard date gate: cannot be written before 2026-07-17** | Content only exists after this date |
| 8 | 연습 3차 (home) | Reviews/complements Session 2 results — logically must follow Session 2 | After 7/17 |
| 9 | 연습 4차 (home, final rehearsal) | Explicitly rehearses the post-processing workflow per PROJECT.md — so Post-processing chapter needs at least a **skeleton** to rehearse against by this point | After Session 3; before Mongolia |
| 10 | 4부 후보정 — skeleton pass (steps/workflow outline, no final polish) | Needed as the "recipe" Session 4 rehearses; doesn't need Mongolia photos yet, just Session 1–3 RAWs as examples | Before Session 4 |
| 11 | 3부 몽골 — `overview.md` + Day1–5 **사전 계획 (plan pass)** | Date-independent content (moon phase, GPS, target recommendations) — write anytime before the trip, ideally with slack before 8/13 | Before 8/13 |
| 12 | **Mongolia trip happens (8/13–8/17)** | — | Hard gate |
| 13 | 3부 몽골 — Day1–5 **결과 (results pass)**: real photos, field notes | Cannot exist before the trip | After 8/17 |
| 14 | 4부 후보정 — full pass (final polish using best Mongolia RAWs, before/after screenshots) | Needs the trip's best RAWs to be a compelling final chapter | After 8/17 |
| 15 | 부록 (cheat sheet, checklists, app guide, glossary) | Distillation of everything — checklists in particular should reflect what *actually* mattered across all sessions + the trip, not a guess made in step 1 | Last |
| 16 | Final SUMMARY.md sync, image alt-text/caption audit, GitHub Pages deploy check | Housekeeping pass | Last |

**Reusable-once-then-repeated components:**
- The **practice-log template** (step 5) is built once and instantiated 4 times (steps 6, 7, 8, 9).
- The **field-day template** (part of step 11's design) is built once and instantiated 5 times, each in two passes (plan in step 11, results in step 13).
- The **gear checklist / cheat sheet** (appendix) is a living document that should be drafted early as a stub and only finalized at step 15, after real-world use has validated (or corrected) the recommendations from step 3.

**Critical near-term risk:** steps 3–6 (gear → fundamentals → template → Session 1) currently have only ~8 days of runway before the 7/17 hard gate. If any of this slips, Session 1's write-up either happens without the fundamentals content existing yet (bad — defeats the point of sequencing) or Session 1 gets skipped/compressed. This should be flagged as a phase-ordering risk for the roadmap.

## Anti-Patterns

### Anti-Pattern 1: One Giant "몽골 여행기" Chapter

**What people do:** Write all 5 days of the Mongolia trip as one long narrative page because "it's one trip."
**Why it's wrong:** Buries per-day target recommendations (the thing beginners actually need to plan their own night) inside a wall of text; makes it impossible to link directly to "Day 3's plan"; one massive page with 5 days × dozens of photos is slow to load and hard to navigate on GitHub Pages.
**Instead:** One file per day (as structured above), with a short `overview.md` for the trip-wide constants (moon phase table, general itinerary).

### Anti-Pattern 2: Writing Field-Day Chapters Only After the Trip

**What people do:** Wait until returning from Mongolia to write anything about the Mongolia chapters, on the theory that "I don't know what I'll shoot yet."
**Why it's wrong:** Per-day *target recommendations* (Milky Way core direction/altitude, moonrise time, what's worth composing) are exactly the kind of planning content that's most useful written *before* the trip — both for the reader following along and for the author's own shoot-night decision-making. Delaying it also means cramming 5 chapters' worth of writing into the days right after a tiring trip.
**Instead:** Two-pass field-day template (Pattern 2 above) — plan content pre-trip, results content post-trip.

### Anti-Pattern 3: Flat `images/` Folder with All Photos Dumped Together

**What people do:** One `src/images/` folder with hundreds of files named `IMG_0001.jpg`...`IMG_0347.jpg`.
**Why it's wrong:** With 4 practice sessions + 5 trip days, each potentially producing dozens of shots, a flat folder becomes unmanageable and makes it impossible to tell which photo belongs to which chapter at a glance; also risks filename collisions across sessions.
**Instead:** Mirror the chapter tree under `images/` (Recommended Project Structure above), with descriptive filenames, not camera-default numbering.

### Anti-Pattern 4: Skipping the Fundamentals Chapter's Position

**What people do:** Treat "기초" as an appendix-style reference to write whenever, and start logging Practice Session 1 first because "that's more exciting to write."
**Why it's wrong:** A beginner reading Session 1's logbook entry ("조리개 f/2.8, ISO 3200, 15초, 500 rule 계산해서...") has no idea what those terms mean without Fundamentals existing first. This isn't just a nice-to-have ordering — it's a genuine reader-comprehension dependency, not merely an author-convenience one.
**Instead:** Fundamentals is a hard prerequisite gate before Practice Session 1, per the write order table above.

### Anti-Pattern 5: True mdBook Draft Chapters for Trip Days

**What people do:** Use mdBook's draft-chapter syntax (`- [Day 3]()`  with no path) for Mongolia days before the trip, intending to "fill them in later."
**Why it's wrong:** Draft chapters render as unclickable/greyed-out placeholders — this throws away the valuable pre-trip planning content (target recommendations, timing) that should be readable *before* the trip, both by the author and by friends following along.
**Instead:** Create the real file early with a visible status marker ("촬영 전" → "촬영 완료"), per Pattern 2.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---|---|---|
| GitHub Pages | `mdbook build` output deployed via GitHub Actions (per repo's `/pages` skill) or committed `docs/` output | Needs `docs/.nojekyll` per repo's `mdbook-utils` skill; origin already set to `github.com/ohama/MongolPhoto` |
| GitHub Actions CI | Auto-build on push (per `/pages` skill's stated purpose "CI 자동 빌드") | Should build-check every push so broken image links / SUMMARY.md drift are caught immediately, given photo-heavy content is error-prone to hand-verify |

### Internal Boundaries

| Boundary | Communication | Notes |
|---|---|---|
| `SUMMARY.md` ↔ `src/*.md` files | File-path references | Must stay in sync; repo's `mdbook-utils` skill already provides a sync-check routine (`grep -oE '\([^)]+\.md\)' SUMMARY.md`) — run before each deploy |
| Chapters ↔ `images/` | Relative path (`../images/...`), enforced by repo's `mdbook-docs-images` skill | No absolute paths, no external URLs, no `<img>` tags without explicit request |
| RAW photo library ↔ `src/images/` | Manual export step (Lightroom/etc. → resized JPEG/WebP) | RAW originals must NOT enter the git repo — size and GitHub Pages build-time concerns |
| Practice/Field templates ↔ instances | Copy-paste-and-fill, not a build-time include (mdBook has no chapter templating/partials mechanism) | Consistency is enforced by author discipline + the `_template.md` reference file, not tooling |

## Sources

- [SUMMARY.md - mdBook Documentation](https://rust-lang.github.io/mdBook/format/summary.html) — prefix/numbered/suffix chapter grammar, nesting rules, draft chapter syntax
- [Creating a book - mdBook Documentation](https://rust-lang.github.io/mdBook/guide/creating.html) — src/ layout, file-to-URL mapping
- Repo-local `.claude/skills/mdbook-docs-images.skill.md` — enforced project rule: `src/images/` relative paths, captions, no HTML/extended markdown, SUMMARY.md registration requirement
- Repo-local `.claude/skills/markdown-image-insertion.skill.md` — enforced project rule: alt text requirement, filename conventions (lowercase, hyphenated)
- Repo-local `.claude/skills/mdbook-utils.skill.md` — SUMMARY.md↔filesystem sync check, `.nojekyll` requirement, build commands
- [The Beginner's Guide to Astrophotography (Mike Shaw) — structure summary](https://astro.pics/book-review-the-beginners-guide-to-astrophotography/) — confirms gear→fundamentals→field-application→post-processing as the standard published sequence for this genre
- `.planning/PROJECT.md` (this project) — authoritative source for the practice-session structure (home×3 + West Coast×1), Mongolia dates, and audience/scope constraints

---
*Architecture research for: Korean mdBook astrophotography tutorial (MongolPhoto)*
*Researched: 2026-07-09*
</content>
