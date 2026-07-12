# Phase 2: 집에서 연습할 사항 (가이드) - Research

**Researched:** 2026-07-09
**Domain:** Content authoring for a Korean mdBook general how-to chapter (not a personal logbook) — reuses Phase 1's fundamentals content via cross-links, adds new "practice drill" framing content.
**Confidence:** HIGH — every asset this phase needs was read directly from the repo. No new tooling, no external research needed. The only genuine unknowns are wording/scope calls for the planner (see Open Questions).

## Summary

Phase 2 is a pure content-authoring phase: no code, no new dependencies, no checkpoints. Its job is to turn six fundamentals pages that Phase 1 already wrote (`exposure-basics.md`, `500-npf-rule.md`, `focusing.md`, `raw-and-wb.md`, plus `accessories.md`'s intervalometer/app coverage) into a **practice drill guide** — i.e. not re-teaching the theory, but telling the reader exactly what to physically *do* at home/on a balcony to internalize it before their trip. This is a narrower, more mechanical task than the old (now-archived) Phase 2, which had to gate on a real calendar date (7/17) and real photos from the author. The reframe removes that constraint entirely: everything is generic advice, fully authorable today, no checkpoints required.

Three new pages should be added to the existing `src/03-practice/` folder (which already holds `template.md`), one per requirement (HOME-01/02/03), following the same one-file-per-requirement convention Phase 1 used for FUND-01~06. `src/SUMMARY.md`'s "2부 · 연습 로그" section (currently four empty-paren draft links to personal session logs — `연습 1차 — 집`, `연습 2차 — 서해안`, etc.) must be replaced wholesale with a "2부 · 가기 전 연습" section containing this phase's three real links plus one placeholder draft link for Phase 3's 야외 연습 (mirroring the existing pattern already used for未-built chapters like "4부 · 후보정" → `- [워크플로 개요]()`). The orphan `src/03-practice/session-1-home.md` (old personal scaffold, not linked in SUMMARY) should be deleted, not repurposed — its content is a personal "연습 1차" log entry, structurally incompatible with the new general-guide framing.

One load-bearing finding: `src/03-practice/template.md`'s own intro paragraph currently says "2부의 연습 1~4차 각 페이지가 이 양식을 채운 결과이고" — a direct textual reference to the personal 4-session structure this phase is replacing. Left unedited, this sentence becomes false the moment SUMMARY's 2부 is rewritten (there will be no "연습 1~4차" pages any more). This is a required, in-scope edit for this phase (one paragraph), not just a suggestion. A second, related but lower-priority finding: `src/02-fundamentals/index.md` line 12 says "집 연습 1차에서 반드시 먼저 연습해야 하는 항목입니다" — also a stale personal-session reference that should be updated to something like "가기 전 집 연습에서 반드시 먼저 연습해야 하는 항목입니다" and can link forward to this phase's new pages.

**Primary recommendation:** One plan, single wave, 2-3 auto tasks (no checkpoints): (1) write the three new `src/03-practice/home-*.md` pages, (2) rewrite SUMMARY.md's 2부 section + fix the two stale cross-references (`template.md` intro, `02-fundamentals/index.md` line 12) + delete the orphan `session-1-home.md`. Everything can run today; there is no real-world gate left in this phase.

## Standard Stack

Not applicable in the traditional sense — no new libraries or tools. The "stack" is the project's own established mdBook content conventions and existing pages, all already verified working in Phase 1.

### Core (reuse, don't rebuild — link to these, don't restate their theory)

| Page | Requirement it feeds | What Phase 2 should do with it |
|------|----------------------|----------------------------------|
| `src/02-fundamentals/exposure-basics.md` | HOME-01 (M모드, ISO/조리개/셔터) | Link — HOME-01 page turns "여기 세 가지가 있다" into "이걸 이렇게 손으로 연습하라" |
| `src/02-fundamentals/500-npf-rule.md` | HOME-01 (크롭 셔터 계산) | Link — instruct reader to compute their *own* crop-corrected shutter limit using this page's formula/worked-example format, not a hard-coded number (the book still doesn't know the reader's camera/lens) |
| `src/02-fundamentals/raw-and-wb.md` | HOME-01 (RAW·화밸) | Link — HOME-01 page adds "지금 카메라 메뉴에서 RAW로 바꾸고 WB를 수동 3800~4200K로 맞춰보라" as an action item |
| `src/02-fundamentals/focusing.md` | HOME-02 (초점) | **Direct textual precedent already exists**: focusing.md's own "실전 팁" section says "집 발코니나 창밖에서 멀리 있는 가로등·간판 불빛을 별 대신 삼아 미리 연습해두면" — Phase 2's HOME-02 page is the full operationalization of this one sentence into a step-by-step drill (reusing focusing.md's existing 6-step method, not rewriting it) |
| `src/01-gear/accessories.md` | HOME-02 (인터벌/릴리즈) | Link — accessories.md already explains *why* an intervalometer/self-timer matters (셔터 진동 방지); HOME-02 tells the reader to actually set it up and dry-run it at home |
| `src/02-fundamentals/field-workflow.md` | HOME-01/02/03 (overall sequence) | Link — field-workflow.md's 7-step on-site sequence is the "final exam"; home practice is explicitly step 4 (세팅) and step 5 (초점) rehearsed in a low-stakes setting before ever doing it in the dark under real sky |
| `src/03-practice/template.md` | HOME-03 (soft link, not a requirement match) | Do NOT edit its structure. Fix its stale intro sentence (see Pitfalls). New HOME pages should end with a forward-pointer: "연습하면서 [연습 로그 템플릿](template.md)에 결과를 기록해 보세요" |

### Supporting

| Asset | Purpose | When to use |
|-------|---------|-------------|
| `.claude/skills/mdbook-docs-images.skill.md` | mdBook structural rules (SUMMARY paths, header levels, image path convention) | Apply when writing new pages/SUMMARY edits |
| `.claude/skills/markdown-image-insertion.skill.md` | Image insertion convention | Only relevant if new pages get diagrams — see Open Questions #3 |
| `.planning/get-shit-done/templates/summary.md`, `workflows/execute-plan.md` | Standard plan-execution scaffolding | Reuse verbatim, same as every Phase 1 plan |

### Alternatives Considered

| Instead of | Could use | Tradeoff |
|------------|-----------|----------|
| 3 separate files (one per HOME-0x) | 1 combined `home-practice.md` covering all three | Rejected as primary recommendation: breaks the one-file-per-requirement convention Phase 1 established for FUND-01~06, and makes SUMMARY nav less scannable. Acceptable fallback if the planner wants a shorter phase — flagged as a real option, not a violation, since HOME content is inherently shorter/thinner than FUND content (see Open Questions #1). |
| Deleting `session-1-home.md` | Repurposing it as one of the new HOME-0x pages | Rejected: its content is scaffolded around a personal "연습 1차 (2026-MM-DD)" session-log format with `(세션 후 채움)` placeholders — structurally the wrong shape for a general guide (no dates, no "채움" placeholders, no per-reader session). Faster and cleaner to delete and write fresh pages using its content only as inspiration for what belongs in HOME-01/02. |
| Keeping `template.md`'s "2부의 연습 1~4차" sentence unedited | Leave as-is, fix in a later phase | Rejected: it becomes actively false the moment this phase's SUMMARY edit lands (no "1~4차" pages will exist) — a reader clicking into template.md the same day this phase ships sees a broken claim. Cheap one-paragraph fix, no reason to defer. |

**Installation:** None — no new packages, no build changes.

## Architecture Patterns

### Recommended File Structure

```
src/03-practice/
├── template.md                    # UNTOUCHED structurally — only fix stale intro sentence (see Pitfalls)
├── home-camera-controls.md        # NEW (HOME-01) — 카메라 조작·세팅 연습
├── home-focus-and-interval.md     # NEW (HOME-02) — 초점·구도·인터벌/릴리즈 연습
└── home-checklist.md              # NEW (HOME-03) — 집 연습 자가점검 체크리스트

# session-1-home.md is DELETED, not replaced 1:1 — its content is superseded by
# the three files above, which are broader (any reader, not "session 1")
```

Naming rationale: matches the existing kebab-case, no-numeric-prefix convention already used for every other chapter file (`exposure-basics.md`, `500-npf-rule.md`, `field-workflow.md`) — the *folder* number (`03-`) carries ordering, not the filename. `home-*.md` prefix distinguishes this content from `template.md` and leaves room for Phase 3 to add `field-*.md` siblings in the same folder without a naming collision (see Open Questions #2 for whether Phase 3 should in fact reuse this folder).

### Pattern 1: SUMMARY.md 2부 replacement (not a surgical 2-line flip — the old archived-phase pattern doesn't apply)

**What:** Unlike the archived Phase 2 research (which flipped two empty-paren links to real links one at a time across two plans), this phase should replace the entire "2부 · 연습 로그" block in one edit, because the underlying concept changed (personal log → general guide), not just the availability of content.

**Before (current state):**
```markdown
# 2부 · 연습 로그

- [연습 1차 — 집]()
- [연습 2차 — 서해안 (7/17)]()
- [연습 3차 — 집]()
- [연습 4차 — 집 (몽골 직전 리허설)]()
```

**After Phase 2:**
```markdown
# 2부 · 가기 전 연습

- [집에서 연습하기](03-practice/home-camera-controls.md)
  - [카메라 조작·세팅 연습](03-practice/home-camera-controls.md)
  - [초점·구도·인터벌 연습](03-practice/home-focus-and-interval.md)
  - [집 연습 체크리스트](03-practice/home-checklist.md)
- [야외에서 연습하기]()
```

Notes on this pattern:
- The `- [야외에서 연습하기]()` draft-link placeholder is the same idiom already used elsewhere in this exact SUMMARY.md for not-yet-built content (`# 4부 · 후보정` → `- [워크플로 개요]()`, and the appendix's `- [현장 치트시트]()` etc.) — it signals "coming in a later phase" without breaking `mdbook build`. Empty-paren links render as plain (non-clickable) text in mdBook, which is the established convention here.
- Whether the first bullet (`집에서 연습하기`) should be its own `index.md` landing page (mirroring `01-gear/index.md` and `02-fundamentals/index.md`, both of which exist as intro pages with nested sub-bullets) or should just point straight at the first real content page is an open call — see Open Questions #1.
- "2부 · 가기 전 연습" is chosen (over alternatives like "2부 · 실전 연습" or keeping "연습 로그") specifically because it must remain accurate once Phase 3 adds a sibling "야외에서 연습하기" section under the same 2부 heading — PROJECT.md and ROADMAP.md both already use exactly this phrase ("가기 전 집에서 익혀 둘..." / "가기 전 근교 어두운 곳에서...") to describe Phase 2 and Phase 3 respectively, so the heading is drawn directly from existing planning docs' own vocabulary, not invented fresh.

### Pattern 2: New page skeleton — "drill", not "theory restatement"

**What:** Each HOME-0x page should open with 1-2 sentences framing it as a *practice drill referencing existing theory*, then give a numbered, physically-doable action list, then close with a link to `template.md`.

**Example skeleton (`home-camera-controls.md`):**
```markdown
# 카메라 조작·세팅 연습

몽골 현장에서는 손이 시리고 어두운 상태로 이 조작을 해야 합니다. 이론은 이미
[노출의 기본](../02-fundamentals/exposure-basics.md)과 [500 / NPF 룰](../02-fundamentals/500-npf-rule.md)에서
배웠으니, 여기서는 그 이론을 몸에 익히는 구체적인 연습 항목만 다룹니다.

## 연습 항목

1. **M모드 전환을 손에 익히기** — [노출의 기본](../02-fundamentals/exposure-basics.md)에서 다룬 M모드로
   전환한 뒤, 화면을 보지 않고도(또는 실내조명을 끄고) 다이얼로 ISO/조리개/셔터를 바꿔본다.
2. **본인 장비로 크롭 셔터 상한 직접 계산하기** — [500 / NPF 룰](../02-fundamentals/500-npf-rule.md)의
   공식에 본인 카메라·렌즈의 초점거리·크롭계수를 대입해 계산하고, 그 값을 적어(또는 메모 앱에 저장해) 둔다.
3. **RAW + 수동 화이트밸런스 설정 확인** — [RAW와 화이트밸런스](../02-fundamentals/raw-and-wb.md)에서
   다룬 대로 파일 형식을 RAW로, 화이트밸런스를 3800~4200K 수동으로 맞춰본다.
4. **배터리·메모리카드 여유분 확인** — [출발 전 체크리스트](../01-gear/checklist.md)의 전원·저장 항목을
   미리 훑어본다.

## 연습 방법

이 항목들을 한 번에 다 하려 하지 말고, 며칠에 걸쳐 반복해서 "생각하지 않고도 손이 움직이는" 수준까지
연습하세요. 실전에서는 어둡고 춥고 시간이 없습니다.

---

연습이 끝나면 [연습 로그 템플릿](template.md)에 기록해 보세요.
```

This pattern keeps new content genuinely new (the "연습 방법"/drill framing, the "손 감각으로 조작" instruction) while citing, not reproducing, every piece of settled theory (ISO ranges, 500-rule formula, WB Kelvin values) — same "don't hand-roll" discipline STATE.md's Phase 1 decisions already established for this project (`[01-03]`, `[01-04]`).

### Pattern 3: HOME-02's focus drill must reuse focusing.md's exact steps, not re-describe them

**What:** `focusing.md` already contains a complete 6-step manual-focus procedure and explicitly recommends practicing it "집 발코니나 창밖에서 멀리 있는 가로등·간판 불빛을 별 대신 삼아." HOME-02 should not write a second, slightly-different version of this procedure — it should link to it and add only what's missing: *what specific light source to use, how to judge success, and how composition/interval practice fits around the same drill session*.

**HOME-02 content shape:**
```markdown
# 초점·구도·인터벌 연습

## 1. 초점 연습 — 먼 불빛에 무한대 맞추기

[별에 초점 맞추기](../02-fundamentals/focusing.md)의 방법을 그대로, 별 대신 아래 같은 대상으로 연습합니다.

- 가로등, 건너편 아파트/간판 불빛, 멀리 있는 전파탑 조명 등 **가능한 한 멀리 있는** 점광원
- (반드시 실제 밤하늘 아래서 처음 시도하지 말 것 — focusing.md 실전 팁 참고)

성공 기준: 라이브뷰 10배 확대 상태에서 불빛이 작고 또렷한 점으로 보이고, 테스트 샷을 100% 확대했을 때도
점으로 남아 있으면 성공입니다.

## 2. 구도 연습 — 프레이밍·수평 잡기

- 창밖/베란다에서 "전경 + 하늘(또는 먼 불빛)" 구도를 세로/가로로 각각 잡아본다.
- 카메라의 수평계(전자 수평계) 기능을 켜고 삼각대 수평을 맞추는 연습을 한다.

## 3. 인터벌 타이머 / 릴리즈 연습

[필수 액세서리 & 앱](../01-gear/accessories.md)에서 소개한 인터벌 타이머(바디 내장 기능 또는 릴리즈)를
실제로 설정해, 셔터를 손으로 누르지 않고 여러 장을 연속 촬영해 본다. 히스토그램 확인 습관도 이때 같이
들인다.

---

연습이 끝나면 [연습 로그 템플릿](template.md)에 기록해 보세요.
```

### Anti-Patterns to Avoid

- **Reintroducing checkpoint:human-action tasks.** The archived Phase 2 research (`.planning/archive/02-연습-1차-집-2차-서해안/02-RESEARCH.md`) modeled this phase around real-world date gates and `checkpoint:human-action` tasks waiting for the user to report real photos/settings. That entire pattern is **obsolete** under the 2026-07-09 reframe — Phase 2 is now a general guide with no personal session to wait for. The plan should be 100% `type="auto"` tasks.
- **Hard-coding a specific camera/lens's crop-corrected shutter number as if it's the reader's.** The book still doesn't know any given reader's gear (STATE.md still lists "카메라 마운트 미확정" as an open item). HOME-01 should instruct the reader to compute their own value via `500-npf-rule.md`'s formula, not assert a number.
- **Restating focusing.md's 6-step method with different wording.** Creates drift risk between two descriptions of the same procedure (explicitly flagged as an anti-pattern in this project's own Phase 1 "Don't Hand-Roll" precedent).
- **Leaving `template.md`'s "2부의 연습 1~4차" sentence unedited.** Becomes a false claim the moment this phase's SUMMARY edit ships — must be fixed in the same phase, not deferred.
- **Repurposing `session-1-home.md` instead of deleting it.** Its personal-session-log shape (dated title, "(세션 후 채움)" placeholders) is incompatible with a general guide; adapting it in place risks leaving log-shaped residue (e.g. accidentally keeping a "결과 사진"/"배운 점" section that has no reader-specific referent).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|--------------|-----|
| M-mode / exposure-triangle theory | A second explanation of ISO/조리개/셔터 in the HOME-01 page | Link to `exposure-basics.md` | Already written, already the canonical source; HOME-01's job is the drill, not the theory |
| Crop-corrected shutter-speed formula | Re-deriving or re-explaining the 500/NPF math | Link to `500-npf-rule.md`, tell reader to plug in their own numbers | Formula and worked examples are already canonical (STATE.md `[01-03]`: "재도출 안 함") |
| Manual-focus-at-infinity procedure | A shortened/rewritten version in HOME-02 | Link to `focusing.md`'s 6-step method verbatim | focusing.md already explicitly recommends this exact drill in its own "실전 팁" — HOME-02 operationalizes it, doesn't duplicate it |
| Intervalometer/self-timer explanation | Re-explaining *why* shutter-shake matters | Link to `accessories.md` | Already covers the "why"; HOME-02 only needs the "now go set it up and try it" |
| RAW/WB rationale | Re-explaining JPEG-vs-RAW tradeoffs | Link to `raw-and-wb.md` | Already covers rationale in full with a comparison table |
| Practice-log structure | A new logging format for "recording your home practice" | Point to existing `template.md` | Already exists, reader-facing, generic — no reason to invent a second format |

**Key insight:** This phase's entire authoring surface is narrow — three short "drill" pages that are 80% cross-links to Phase 1 content and 20% genuinely new material (the practice-drill framing itself, the checklist, and the "practice blind/in the dark" technique which is not covered anywhere yet).

## Common Pitfalls

### Pitfall 1: Stale references to the old personal-session structure break silently
**What goes wrong:** Several Phase 1 pages contain text written when 2부 was still "연습 1~4차" — if Phase 2 only adds new files and edits SUMMARY.md, these become orphaned/false claims that nobody notices because `mdbook build` doesn't fail on stale prose, only on broken links.
**Confirmed occurrences (grep verified 2026-07-09):**
- `src/03-practice/template.md` line 3: "2부의 연습 1~4차 각 페이지가 이 양식을 채운 결과이고" — **must fix in this phase** (directly describes the structure being replaced).
- `src/02-fundamentals/index.md` line 12: "실전(서해안 연습·몽골) 전에... 집 연습 1차에서 반드시 먼저 연습해야 하는 항목입니다" — references both "집 연습 1차" (this phase) and "서해안 연습" (Phase 3's territory). Recommend fixing the "집 연습 1차" → generic "가기 전 집 연습" wording as part of this phase since it's this phase's own content; the "서해안 연습" half can be left for Phase 3 or fixed opportunistically now (cheap, same file, same line).
- `src/02-fundamentals/finding-the-milkyway.md` lines 9-10, 23, 32: multiple "연습 1·3·4차" / "7/17 서해안 연습" references — these are more clearly Phase 3's territory (야외/서해안-specific) and reference a hard date (7/17) that may itself need reframing away from personal-date-specific language. **Out of this phase's direct scope** but flagged here so the planner can decide whether Phase 2 does a light touch-up pass or leaves it entirely for Phase 3.
**How to avoid:** Fix `template.md` (required, in-scope) and `02-fundamentals/index.md` line 12 (recommended, in-scope, one sentence) in this phase's plan; explicitly note the `finding-the-milkyway.md` references as deferred-to-Phase-3 in the plan's context so they aren't silently forgotten either.
**Verification:** `grep -rn "연습 1차\|연습 2차\|연습 3차\|연습 4차" src/` should return zero hits in files this phase touches; any remaining hits (finding-the-milkyway.md) should be a deliberate, documented deferral.

### Pitfall 2: Treating this like the archived Phase 2 (checkpoint-gated, personal data)
**What goes wrong:** The archived `02-RESEARCH.md` (superseded, but still sitting in `.planning/archive/`) describes a completely different phase shape — two plans, `checkpoint:human-action` tasks, a hard 7/17 date gate, image-folder scaffolding for real photos. If a planner skims that file without noticing it's archived/superseded, they could accidentally reintroduce checkpoints or date-gating into a phase that no longer needs either.
**How to avoid:** This RESEARCH.md (and PROJECT.md/REQUIREMENTS.md/ROADMAP.md, all already updated 2026-07-09) supersede the archived research entirely for Phase 2's actual scope. The archive is useful only as a source of *content ideas* (which drill items to include — its Pattern 3 list of concrete HOME-01/02 items was reused above), never as a source of *process/architecture* (checkpoints, plan-splitting, date-gates).
**Verification:** The resulting plan should contain zero `checkpoint:*` tasks and zero references to 7/17 or specific dates.

### Pitfall 3: `src/images/practice/session-1/` already exists (empty) — don't treat it as evidence a personal session happened
**What goes wrong:** `src/images/practice/session-1/` exists with only a `.gitkeep` (created during the archived phase's Task 1, per STATE.md's "Session Continuity" note: "02-01-PLAN.md Task 1 완료·커밋... Task 2 checkpoint:human-action에서 대기"). A planner glancing at the filesystem might assume real practice photos exist or are expected here.
**How to avoid:** This folder is a leftover from the superseded personal-log phase. Since the new HOME pages are theory/drill pages (no reader-specific photos), Phase 2 doesn't need this folder at all. Leave it as-is (harmless empty `.gitkeep` dir) or remove it — either is safe since nothing links to it after SUMMARY is rewritten. Not a blocking issue either way; flagged only so it isn't mistaken for "photos are expected here."

### Pitfall 4: Checklist (HOME-03) duplicating rather than summarizing
**What goes wrong:** A checklist that just repeats HOME-01/02's numbered items verbatim adds no value and creates a third place to keep three facts in sync.
**How to avoid:** Write HOME-03 as short, tickable, outcome-oriented items ("~할 수 있다" / "~을 안다"), not restating the how-to. Model on the existing `checklist.md` (GEAR-05) which is already exactly this shape — grouped `- [ ]` items, terse, scannable, meant to be read right before moving on to the next stage (there: before departure; here: before considering home practice "done" and moving to Phase 3's outdoor practice).

## Code Examples

### Full SUMMARY.md diff for this phase
```diff
-# 2부 · 연습 로그
+# 2부 · 가기 전 연습

-- [연습 1차 — 집]()
-- [연습 2차 — 서해안 (7/17)]()
-- [연습 3차 — 집]()
-- [연습 4차 — 집 (몽골 직전 리허설)]()
+- [집에서 연습하기](03-practice/home-camera-controls.md)
+  - [카메라 조작·세팅 연습](03-practice/home-camera-controls.md)
+  - [초점·구도·인터벌 연습](03-practice/home-focus-and-interval.md)
+  - [집 연습 체크리스트](03-practice/home-checklist.md)
+- [야외에서 연습하기]()
```
(Exact nesting/bullet shape is Claude's discretion at plan time — see Open Questions #1 for the index-page alternative.)

### `template.md` intro fix
```diff
-아래는 매 연습 세션마다 그대로 복사해서 쓰는 기록 양식이다. 2부의 연습 1~4차 각 페이지가 이 양식을 채운
-결과이고, 함께 연습하는 지인도 각자 자기 로그에 이 템플릿을 그대로 복사해 쓸 수 있다.
+아래는 매 연습 세션마다 그대로 복사해서 쓰는 기록 양식이다. [2부 · 가기 전 연습](../03-practice/home-camera-controls.md)의
+안내를 따라 연습한 뒤, 함께 연습하는 지인도 각자 자기 로그에 이 템플릿을 그대로 복사해 쓸 수 있다.
```
(Wording is illustrative — planner/executor should adjust to read naturally.)

### Orphan file removal
```bash
rm src/03-practice/session-1-home.md
# (already unreferenced in SUMMARY.md — confirmed via grep, no other file links to it)
```

## State of the Art

Not applicable — no external ecosystem shift since Phase 1. All Phase 1 STACK/FEATURES/PITFALLS research remains current and directly reusable (see Standard Stack table above).

## Open Questions

1. **Should "집에서 연습하기" get its own `index.md` landing page, or should the SUMMARY bullet point straight at `home-camera-controls.md`?**
   - What we know: `01-gear/index.md` and `02-fundamentals/index.md` both exist as short intro pages with nested sub-bullets underneath, giving each 부/section a one-paragraph orientation before diving into content. `03-practice/` currently has no `index.md`.
   - What's unclear: Whether 3 short pages (HOME-01/02/03) warrant their own intro page, or whether that's over-structuring thin content.
   - Recommendation: Optional. Given the precedent (both other 부-sections with sub-navigation have one) and that Phase 3 will add a sibling "야외에서 연습하기" section to the same 2부, an `index.md` for "집에서 연습하기" would keep the pattern consistent — but a 3-page section is also reasonably navigable without one. Leave to planner/executor discretion; either is defensible.

2. **Where should Phase 3's 야외 연습 content live — same `src/03-practice/` folder, or a new folder?**
   - What we know: `03-practice/` already mixes purposes (1부's `template.md` + this phase's `home-*.md`); folder numbers in this project don't strictly track SUMMARY 부 numbers (e.g., `04-mongolia/` is already claimed by the future Phase 5 SITE content, so Phase 3 can't use a "next number" folder without colliding).
   - What's unclear: Not this phase's decision to make, but worth flagging now so Phase 2 doesn't paint Phase 3 into an awkward corner (e.g., by naming files in a way that assumes no siblings).
   - Recommendation: Name this phase's files with an explicit `home-` prefix (as recommended above) specifically so Phase 3 can add `field-*.md` in the same folder without ambiguity. No action needed now beyond consistent naming.

3. **Do HOME-01/02 pages need diagrams/images, or is text-only sufficient?**
   - What we know: Phase 1's fundamentals pages use HTML-comment image placeholders (e.g., `exposure-basics.md`'s `<!-- 이미지: exposure-triangle.png -->`) for future diagrams, never fabricating real image files ahead of content. `focusing.md` has one such placeholder for a focus-steps diagram.
   - What's unclear: Whether HOME-01/02 (drill instructions, not diagrams-worthy theory) need any images at all.
   - Recommendation: Likely no images needed — these are action-item lists, not diagram-worthy concepts (the diagrams already exist upstream in the fundamentals pages this phase links to). If the planner disagrees, use the same HTML-comment placeholder convention, never fabricate files.

4. **Exact wording/scope of the "practice blind/in the dark" drill (genuinely new content, not sourced from any existing page).**
   - What we know: PROJECT.md/ROADMAP.md's HOME-01 wording implies "가기 전 익혀 둘 카메라 조작" generally; the objective's research_focus explicitly calls for "learning M-mode dial operation blind/in the dark" as a concrete drill. No existing fundamentals page currently teaches this specific technique (it's a field-craft tip, not exposure theory).
   - What's unclear: How much emphasis this deserves relative to the other, better-sourced drill items.
   - Recommendation: Include it as one bullet in HOME-01 (as modeled in Pattern 2's skeleton above) — it's cheap, well-motivated (real night shoots are dark and cold), and matches the phase's own success criterion language ("가기 전 집에서 익혀 둘 카메라 조작"). Don't over-invest — one or two sentences, not a standalone page.

## Sources

### Primary (HIGH confidence)
- `src/02-fundamentals/{exposure-basics,500-npf-rule,focusing,raw-and-wb,field-workflow,index}.md` — full text read; confirmed exact theory content to link (not restate) and confirmed focusing.md's own home-practice recommendation
- `src/01-gear/{accessories,checklist,index}.md` — full text read; confirmed intervalometer/app coverage and checklist page's existing terse `- [ ]` style (model for HOME-03)
- `src/03-practice/{template,session-1-home}.md` — full text read; confirmed template.md's stale "2부 연습 1~4차" sentence and session-1-home.md's incompatible personal-log shape
- `src/SUMMARY.md` — current 2부 draft-link state, and the established empty-paren-link idiom for not-yet-built chapters (used consistently across 2부/4부/appendix)
- `.planning/PROJECT.md`, `.planning/REQUIREMENTS.md`, `.planning/ROADMAP.md`, `.planning/STATE.md` — all confirmed updated 2026-07-09 for the general-guide reframe; phase goal, requirements (HOME-01/02/03), success criteria, and explicit note that Phase 2's orphan file and SUMMARY 2부 need replacement
- `grep -rn "1차\|2차\|3차\|4차\|연습 로그\|서해안" src/` — exhaustive search confirming exactly which files contain stale personal-session references (template.md, 02-fundamentals/index.md, finding-the-milkyway.md)
- `.planning/archive/02-연습-1차-집-2차-서해안/02-RESEARCH.md` — read in full; superseded architecture (checkpoints, two plans, date-gating) explicitly rejected for this phase; its content-level drill-item list (Pattern 3) was mined for HOME-01/02's concrete action items
- `.planning/phases/01-mdbook-뼈대-장비-기초-촬영법/01-04-PLAN.md` — read as the precedent for this project's plan-writing conventions (task shape, `must_haves`/`key_links` frontmatter, all-`auto`-type tasks for pure content phases)
- `.claude/skills/mdbook-docs-images.skill.md` — mdBook structural rules (SUMMARY paths, header/link conventions)

### Secondary (MEDIUM confidence)
None — no new web research needed; this phase's domain is fully covered by the project's own existing, already-verified content and research.

### Tertiary (LOW confidence)
None.

## Metadata

**Confidence breakdown:**
- Standard stack/reuse: HIGH — every linked page and its exact content was read directly from the repo
- Architecture (file naming, SUMMARY restructure): HIGH — directly follows this project's own established conventions (Phase 1's one-file-per-requirement pattern, empty-paren draft-link idiom already used elsewhere in the same SUMMARY.md)
- Pitfalls: HIGH for the stale-reference findings (directly grep-verified, exact line numbers cited); MEDIUM for the "how much should Phase 2 touch finding-the-milkyway.md" scope call (genuinely a planner decision, not a research gap)

**Research date:** 2026-07-09
**Valid until:** No real expiry — this is a static-repo-state finding, not time-bound (unlike the archived Phase 2 research, which was tied to a 7/17 calendar gate that no longer applies here).
