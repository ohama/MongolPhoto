# Phase 2: 연습 1차(집) + 2차(7/17 서해안) - Research

**Researched:** 2026-07-09
**Domain:** Content authoring for a Korean mdBook logbook chapter, gated by a real-world event the AI cannot perform (a night photography session) — this is a human-in-the-loop content phase, not a software feature.
**Confidence:** HIGH — this phase reuses artifacts Phase 1 already built and verified (template.md, SUMMARY.md skeleton, optimize-images.sh, fundamentals content) and follows the exact planning conventions already used successfully in Phase 1's own PLAN files. The only genuine unknowns are real-world facts the user must supply (see Open Questions), not tooling or process unknowns.

## Summary

Phase 2 does not require new tooling, new dependencies, or new architecture — everything it needs (the practice-log template, the SUMMARY.md draft entries, the image-optimization script, and the fundamentals pages that the drills exercise) was already built and verified in Phase 1. What makes this phase different from Phase 1 is that **its two success criteria cannot be fully satisfied by an AI executor alone**: 연습 1차 and 연습 2차 are logbook entries whose "결과 사진 / 배운 점" sections must contain a real human's real photos and real observations from a session that has not happened yet (1차) or is hard-gated to 2026-07-17 (2차). The correct shape of this phase is therefore **"scaffold + drill plan now, checkpoint for real data, fill-in after"** — split into two plans (one per session), each internally sequenced as an auto-authored pre-shoot section followed by a `checkpoint:human-action` that pauses until the user supplies real photos/settings/notes, followed by a final auto task that ingests that data into the template's remaining sections.

The template (`src/03-practice/template.md`) already defines the exact six sections to fill (목표 / 장비 & 세팅 / 촬영 환경 / 결과 사진 / 배운 점·문제점 / 다음 세션 개선 사항) and explicitly instructs: "실제 세션이 끝나기 전에는 이미지 파일을 만들지 않는다." This is a load-bearing constraint — the plan must not fabricate photos, settings, or "lessons learned." The 목표 section, however, is legitimately pre-shoot content (a drill plan), and per the template's own design, 연습 2차's 목표 section should literally be copied from 연습 1차's 다음 세션 개선 사항 — creating a hard sequencing dependency between the two plans, independent of the 7/17 date gate.

**Primary recommendation:** Two plans — `02-01` (연습 1차, home) and `02-02` (연습 2차, 서해안, depends on 02-01's checkpoint output) — each structured as: Task 1 (auto, can run today) writes the chapter stub + a concrete, source-linked pre-shoot drill/plan into the 목표 section and scaffolds the other five section headers with explicit "(세션 후 채움)" placeholders; Task 2 is a `checkpoint:human-action` that asks the user to actually do the session and report back real settings/photos/notes; Task 3 (auto, runs only after the checkpoint resumes) runs `optimize-images.sh`, writes the real content into the remaining five sections verbatim from what the user reported, creates `src/images/practice/session-N/`, and flips the SUMMARY.md entry from a draft `()` link to a real link. Plan 02-02's checkpoint cannot resume with real data before 2026-07-17 — this is expected and should be stated explicitly in the plan, not treated as a stall.

## Standard Stack

Not applicable in the traditional sense (no new libraries). The "stack" for this phase is the existing project's own established content conventions, all already in place from Phase 1:

### Core (reused, not rebuilt)

| Asset | Location | Purpose | Why reuse, not rebuild |
|-------|----------|---------|-------------------------|
| Practice-log template | `src/03-practice/template.md` | Defines the exact 6 sections + fenced-code-block copy-paste format every session page must follow | STATE.md decision `[01-04]`: template is fenced code block, literal copy-paste text; re-deriving a different structure would break the "동일 틀로 비교 가능" design goal PRAC-01 already satisfies |
| SUMMARY.md draft entries | `src/SUMMARY.md` lines 22-23 | `- [연습 1차 — 집]()` and `- [연습 2차 — 서해안 (7/17)]()` already reserve the nav slots as empty-paren drafts | Only the parens need filling with real paths; the surrounding structure (2부 heading, sibling 3차/4차 drafts) must NOT be touched — those belong to Phase 3 |
| Image pipeline | `scripts/optimize-images.sh` | Resize ≤2000px, `-strip` EXIF/GPS, JPEG q82 | Already built, tested, and executable in Phase 1 (01-01 Task 3); do not rewrite |
| Fundamentals content | `src/02-fundamentals/{focusing,500-npf-rule,field-workflow,finding-the-milkyway,raw-and-wb,exposure-basics}.md` | The actual technique being drilled/tested in each session | Session 목표 sections should **link to and exercise** these pages, not restate their content |
| Gear/mount info | `src/01-gear/camera-lens.md` | Crop factor per mount (needed to write a concrete 500-rule number in 1차's 목표) | Same "don't re-derive" principle as 01-03's use of PITFALLS.md's worked example |

### Supporting

| Asset | Purpose | When to use |
|-------|---------|-------------|
| `.claude/get-shit-done/references/checkpoints.md` | Defines `checkpoint:human-verify` / `checkpoint:decision` / `checkpoint:human-action` | Use `checkpoint:human-action` for "user must supply real-world data Claude cannot produce" — see Architecture Patterns below; this reference has no dedicated "human-input" type, `human-action` is the closest fit and is used exactly this way in its own "collect a value, then Claude applies it" examples |
| `.claude/get-shit-done/workflows/execute-plan.md`, `templates/summary.md` | Standard plan-execution/summary scaffolding already imported by every Phase 1 plan's `<execution_context>` | Reuse verbatim, same as 01-01 through 01-05 |
| `gsd:pause-work` / `gsd:resume-work` skills | Session continuity across a multi-day gap | Plan 02-02's checkpoint may span days-to-a-week (today is 7/9, shoot is 7/17) — the plan should note that execution is expected to pause here and resume after 7/17, not be treated as blocked/broken |

### Alternatives Considered

| Instead of | Could use | Tradeoff |
|------------|-----------|----------|
| Two separate plans (02-01, 02-02) | One combined plan with two waves | Rejected: PRAC-02 and PRAC-03 have genuinely different, independently-triggerable real-world gates (1차 can happen any day; 2차 is fixed at 7/17) — forcing them into one plan couples an unblocked task to a blocked one for no benefit, and the ROADMAP.md phase entry already implies per-session granularity |
| Filling all 6 template sections speculatively now, editing later | Scaffold-now + checkpoint-fill-later (recommended) | Rejected: violates the template's own explicit rule ("실제 세션이 끝나기 전에는 이미지 파일을 만들지 않는다") and the phase's core constraint — fabricated settings/lessons would misinform the reader and corrupt the 3차/4차 복기 chain that depends on 2차's real discovered problems |

**Installation:** None — no new packages. Confirm `scripts/optimize-images.sh` is still executable (`chmod +x`, already done in Phase 1) and ImageMagick is still installed before the fill-in tasks run.

## Architecture Patterns

### Recommended File/Directory Structure

```
src/03-practice/
├── template.md                  # UNTOUCHED — do not edit, only referenced
├── session-1-home.md            # NEW (02-01) — 연습 1차 — 집
└── session-2-westcoast.md       # NEW (02-02) — 연습 2차 — 서해안 (7/17)

src/images/practice/
├── session-1/.gitkeep           # NEW (02-01) — folder doesn't exist yet, must be created
└── session-2/.gitkeep           # NEW (02-02)
```

Naming rationale: existing chapters never use numeric filename prefixes (`camera-lens.md`, `500-npf-rule.md`, `field-workflow.md` — all descriptive kebab-case, directory number carries the ordering). `session-1-home.md` / `session-2-westcoast.md` follows this convention while matching the `session-N` token the template itself already uses for image paths (`../images/practice/session-N/xxx.jpg`). **Note `src/images/practice/` does not exist yet** — only `src/images/gear/.gitkeep` and `src/images/fundamentals/.gitkeep` exist from Phase 1 Task 2; Phase 2 must create the `practice/` parent and per-session subfolders itself (same pattern as 01-01 Task 2 step 3, but Phase 2's own responsibility per that plan's explicit "later phases create their own" note).

### Pattern 1: SUMMARY.md draft-to-real link flip

**What:** Two-line, surgical edit — replace the empty-paren draft link with a real relative path. Do not touch sibling lines (연습 3차/4차 stay draft; they belong to Phase 3).
**When to use:** Only in the plan's final auto task, after the checkpoint has resumed with real content (so the nav link never points to a stub-only page).
**Example:**
```diff
-- [연습 1차 — 집]()
-- [연습 2차 — 서해안 (7/17)]()
++ [연습 1차 — 집](03-practice/session-1-home.md)
++ [연습 2차 — 서해안 (7/17)](03-practice/session-2-westcoast.md)
```

### Pattern 2: Template reuse via literal copy

**What:** Copy the fenced markdown block from `template.md` (lines 14-35) verbatim as the starting structure of each session file, then fill the H1 per its own instructions (`연습 N차 — [장소] ([날짜])` → `연습 1차 — 집 (YYYY-MM-DD)`).
**When to use:** Task 1 of each plan (scaffold), not re-derived from scratch.
**Example — scaffold state (before real data exists):**
```markdown
# 연습 1차 — 집 (2026-MM-DD)

## 목표
[pre-shoot drill content — see Pattern 3]

## 장비 & 세팅
(세션 후 채움 — 실제 사용 장비/세팅값)

## 촬영 환경
(세션 후 채움 — 실제 날씨/시간/장소)

## 결과 사진
(세션 후 채움 — 실제 촬영 사진)

## 배운 점 / 문제점
(세션 후 채움)

## 다음 세션 개선 사항
(세션 후 채움 — 이 항목이 연습 2차 "목표"로 이어짐)
```
The explicit `(세션 후 채움)` placeholder text (rather than leaving sections blank or inventing content) makes the phase's honesty constraint visible to anyone reading the live site mid-phase, and gives the plan-checker/verifier something unambiguous to grep for.

### Pattern 3: 목표 section as a legitimate pre-shoot drill (the one section safe to write now)

**What:** Unlike the other five sections, 목표 is naturally forward-looking ("이번 세션에서 확인/연습하려는 것") — per template's own guidance ("한두 문장으로 충분하다... 구체적일수록 좋다"), it can and should be written before the session, sourced from FUND-01/02/03 + PITFALLS.md's home-practice-specific findings, not invented per-plan.
**연습 1차 목표 — concrete drill items to specify (source: PITFALLS.md Pitfall #1, #3, #9; FEATURES.md dependency notes; field-workflow.md):**
- M모드로 전환해 노출 3요소(ISO/조리개/셔터) 직접 조작해보기
- 사용자의 실제 카메라·렌즈 조합으로 크롭보정 500룰 계산값 미리 산출해 목표 셔터속도로 적어두기 (예: 크롭 1.5×, 16mm → 500÷(16×1.5)≈20.8초 — **단, 실제 계산은 사용자의 확정된 마운트/렌즈로 다시 해야 함, 아래 Open Questions #1 참고**)
- 별이 아닌 **먼 가로등/간판 불빛**을 대상으로 라이브뷰 10배 확대 → 수동 초점 → 테이프 고정 전체 절차 연습 (focusing.md 실전 팁: "반드시 실제 밤하늘 아래서 처음 시도하지 마세요")
- RAW 저장, 화이트밸런스 수동 고정(3800~4200K) 설정 확인
- 인터벌 타이머/리모컨으로 셔터 누르지 않고 촬영하는 법 확인
- (선택) 삼각대 설치·수평 잡기, 시험 촬영 후 100% 확대해 별/불빛이 점으로 보이는지 확인하는 습관 들이기

This maps 1:1 to field-workflow.md's 7단계 and to PITFALLS.md's explicit framing: 집 연습 세션은 "은하수를 보는" 연습이 아니라 "세팅·초점·워크플로를 몸에 익히는" 연습 (finding-the-milkyway.md §4, Bortle 5-8 for home sessions).

**연습 2차 목표 — must literally carry over 연습 1차's "다음 세션 개선 사항"** (this is the template's core mechanic — do not write an independent 목표 for 2차; it is defined by what 1차's checkpoint reports back as unresolved). In addition to that carry-over, 02-02's pre-shoot content should add 서해안-specific targeting (see Pitfall section below): Milky Way core direction/altitude for 7/17 via PhotoPills/Stellarium (13% waxing crescent, sets early — favorable per finding-the-milkyway.md §3 and FEATURES.md), dew/condensation mitigation (PITFALLS.md Pitfall #6, explicitly scoped to "서해안 2차 chapter" and NOT currently covered in field-workflow.md — this is the one genuinely new piece of content Phase 2 must add, not just reuse), and an on-site data-capture checklist (setup photo, settings note, at least one deliberately "bad"/failed shot for teaching — PITFALLS.md Pitfall #15).

### Pattern 4: checkpoint:human-action for real-data ingestion (not a native "human-input" type — this is the closest fit)

The project's checkpoint reference (`.claude/get-shit-done/references/checkpoints.md`) defines exactly three types: `human-verify` (confirm automated work looks right), `decision` (choose between options), `human-action` (supply something Claude cannot produce, then Claude applies it). None is a perfect semantic match for "go take real photos over the next N days and report back," but `human-action` is structurally correct — its own canonical example ("Provide your OpenAI API key" → Claude runs `npx convex env set`) is exactly the "user supplies data, Claude ingests it via automation" shape needed here, just with a much longer real-world gap before the user can respond. Model each fill-in checkpoint this way:

```xml
<task type="checkpoint:human-action" gate="blocking">
  <action>연습 1차(집) 세션을 진행하고 결과를 알려주세요</action>
  <instructions>
    이번 세션의 목표(위 "목표" 섹션에 이미 작성됨)대로 실제로 촬영을 진행한 뒤:
    1. 사진 파일 위치를 알려주세요 (폴더 경로) — Claude가 optimize-images.sh로
       resize+EXIF strip 처리해 src/images/practice/session-1/에 넣습니다.
    2. 실제 사용한 장비·세팅값 (조리개/ISO/셔터스피드/초점거리/화이트밸런스)
    3. 촬영 환경 (날짜/시간/날씨/장소, 집이면 발코니 등 위치 설명)
    4. 잘 된 것과 실패한 것, 원인 (한 줄씩이라도)
    5. 다음 세션에서 바꾸고 싶은 것
  </instructions>
  <verification>Claude가 이 정보를 세션 페이지의 나머지 5개 섹션에 그대로 반영하고 mdbook build로 확인</verification>
  <resume-signal>사진 경로 + 2~5번 답변을 텍스트로 제공</resume-signal>
</task>
```

For 02-02 specifically, add an explicit note in the plan (not the checkpoint text) that this checkpoint is expected to remain open for up to ~8 days (until on/after 2026-07-17) and that this is a hard external gate, not an execution failure — consistent with ROADMAP.md's own "하드 날짜 게이트" language.

### Anti-Patterns to Avoid

- **Fabricating any of the 5 post-shoot sections to "complete" the phase on schedule.** ROADMAP.md success criterion #2 explicitly requires "실제 촬영 사진과 현장에서 배운 점" — placeholder or invented content here would violate the phase's actual goal even if it makes the page look finished. STATE.md's own Phase 1 decision log establishes precedent (template.md explicitly refuses to create fake image files).
- **Writing 연습 2차's 목표 independently of 연습 1차's actual outcome.** This breaks the template's designed cross-session chain and the phase's own success criterion #3 (2차's problems must feed forward for Phase 3's 복기 — the reverse link, 1차→2차, is the same mechanism working backward and must not be skipped).
- **Treating the 7/17 gate as something to work around** (e.g., writing 2차 content from generic/hypothetical West Coast conditions to avoid an open checkpoint). The correct behavior is to pause, not improvise.
- **Touching 연습 3차/4차 draft entries in SUMMARY.md.** Out of this phase's scope (Phase 3) — only flip the two entries this phase owns.
- **Re-deriving the 500-rule/NPF formula, moon phase, or Bortle facts.** All already established with worked examples in `500-npf-rule.md`/`finding-the-milkyway.md`/PITFALLS.md — cite/link, don't recompute independently (same precedent as STATE.md decisions `[01-03]`/`[01-04]`).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|--------------|-----|
| Practice-log structure | A new/different set of headers per session | `src/03-practice/template.md`'s exact 6 sections, copied verbatim | It's the reader-visible reusable contract (PRAC-01); deviating breaks cross-session comparability, which is the template's entire purpose |
| Image resize/EXIF-strip | Ad hoc `sips`/manual resize commands | `scripts/optimize-images.sh <in> <out>` | Already built, tested (Phase 1 Task 3 smoke-tested GPS/EXIF stripping), and is the project's committed standard — reusing it is also literally what the script's own top comment says it's for |
| Crop-sensor shutter-speed limit math | Restating/re-deriving the 500-rule formula in the session page | Link to `500-npf-rule.md`, quote its worked example format only if computing the user's specific lens/body combo | STATE.md `[01-03]`: formula is canonically sourced from PITFALLS.md Pitfall #2, not re-derived per page |
| Manual-focus-at-infinity procedure | A new shortened description in the session page | Link to `focusing.md`'s 6-step method; session 목표 references it, doesn't restate it | Avoids drift between two descriptions of the same procedure over the book's life |
| Moon phase / Bortle facts for 7/17 | Re-searching or re-deriving these | Cite FEATURES.md/PITFALLS.md directly: 7/17 ≈13% waxing crescent, sets a few hours after sunset; 서해안 Bortle better than home (5-8) but still within urban light-pollution influence | Already cross-verified (FEATURES.md confidence: HIGH); re-deriving risks introducing a different, unverified number |

**Key insight:** This phase's entire "don't hand-roll" list is really one instruction — Phase 1 already produced every piece of reusable infrastructure and every fact this phase needs; Phase 2's actual net-new authoring work is narrow: two chapter files, one new dew-mitigation content block, and the checkpoint plumbing to receive real data.

## Common Pitfalls

### Pitfall 1: Treating the 7/17 checkpoint as a plan-execution failure
**What goes wrong:** An executor (or a human skimming STATE.md later) sees plan 02-02 "stuck" at a checkpoint for a week and assumes something is broken or the plan needs to be reworked.
**Why it happens:** Most GSD checkpoints resolve in minutes (visual verification, an API key); this one resolves on a real-world calendar.
**How to avoid:** The plan file itself should state the expected pause explicitly (in `<context>` or a comment near the checkpoint task), and STATE.md's "Blockers/Concerns" should record it as an expected, dated gate — exactly as ROADMAP.md already does at the phase level ("연습 2차 content cannot be written before 2026-07-17").
**Warning signs:** None if documented; the risk is only in *not* documenting it, leading someone to "fix" the pause by fabricating content instead of waiting.

### Pitfall 2: Camera mount/settings unknown, so the 1차 목표's concrete numbers may be wrong
**What goes wrong:** STATE.md Blockers/Concerns explicitly flags "카메라 마운트 미확정" as unresolved even after Phase 1 closed (GEAR-06 called for confirming the user's real body, but the gear chapter was written mount-agnostic, "~급" examples). If 02-01's 목표 section hard-codes a specific crop factor/focal length worked example without confirming it's the user's actual gear, the drill's own numbers could be wrong.
**Why it happens:** Gear confirmation was explicitly deferred past Phase 1.
**How to avoid:** Either (a) ask the user for their actual camera/lens as part of scaffolding 02-01 (cheap, one question, resolves a real open item), or (b) write the 목표 section's 500-rule example generically ("본인 카메라·렌즈의 크롭계수를 500-npf-rule.md에서 확인해 최대 셔터속도를 계산해 적어두세요" as an instruction rather than a worked number) and let the *user* supply the concrete value when they report back the actual settings used. Option (b) is safer and requires no new checkpoint — recommended.
**Warning signs:** A worked 500-rule number appears in 02-01's 목표 without the user having confirmed the crop factor it assumes.

### Pitfall 3: Dew/condensation content doesn't exist yet anywhere in the book
**What goes wrong:** `finding-the-milkyway.md` explicitly promises dew coverage ("이는 [현장 촬영 워크플로](field-workflow.md)에서 다룬다") but `field-workflow.md`'s actual 7 steps (read in full during this research) do not mention dew/condensation at all — only cold-weather battery drain. PITFALLS.md Pitfall #6 explicitly scopes dew mitigation to "서해안 2차 chapter (specific callout)," not to field-workflow.md.
**Why it happens:** Phase 1 sequenced dew content for Phase 2 (correctly, per PITFALLS.md's own pitfall-to-phase mapping), but the cross-link left in `finding-the-milkyway.md` currently points to a page that doesn't cover it — a latent, currently-invisible content gap.
**How to avoid:** 02-02's pre-shoot content must include an explicit dew-mitigation callout (lens hood as minimum, periodic front-element check, optional USB dew-heater strap as 준비물, coastal-humid vs Mongolia-dry contrast) — this both satisfies Pitfall #6's own prevention plan and honors the existing cross-link's implicit promise. This is genuinely new content, not reused from Phase 1.
**Warning signs:** A reader following `finding-the-milkyway.md`'s link to `field-workflow.md` looking for dew guidance finds none — check this is resolved by end of Phase 2 (either by 02-02's content covering it, or by fixing the cross-link if the planner decides dew belongs elsewhere).

### Pitfall 4: 서해안 exact location/GPS is unknown at planning time
**What goes wrong:** PITFALLS.md Pitfall #13 (site scouting/light-pollution check) and the Milky Way core azimuth/altitude calculation both genuinely need a specific location to be actionable, but no GPS/spot has been decided as of this research.
**Why it happens:** Same category as the Mongolia GPS gap already flagged in STATE.md for Phase 4 — location specifics were deferred.
**How to avoid:** Do not block 02-02's pre-shoot content on having exact GPS now. Write the *process* as an actionable pre-shoot checklist ("PhotoPills/Stellarium에 실제 촬영 예정 지점을 입력해 코어 방위·고도 확인," "lightpollutionmap.info로 후보 지점의 인공광원 점검") the same way `finding-the-milkyway.md` itself teaches process over hard-coded numbers. The user supplies their actual chosen spot as part of the "촬영 환경" data when they report back post-shoot (template.md already instructs "야외 세션이면 위치·GPS 추가").
**Warning signs:** A plan that tries to hard-code a specific 서해안 beach name/GPS the user never confirmed.

### Pitfall 5: Unknown whether 1차 has already informally happened
**What goes wrong:** If the user already did an ad hoc home practice session before this phase started (not unlikely, given the "camera mount still unconfirmed" note implies *some* hands-on gear familiarity may already exist), 02-01 might needlessly ask the user to repeat a session, or might scaffold a 목표 for a drill the user already completed.
**Why it happens:** STATE.md doesn't record this either way.
**How to avoid:** The planner/discuss-phase step should ask the user directly: "연습 1차(집)을 이미 해보셨나요, 아니면 이 phase에서 새로 진행하시나요?" before finalizing 02-01's checkpoint wording — cheap to resolve, expensive to guess wrong (asking someone to redo a session they already did, or worse, writing content as if it's still pending when real data already exists).
**Warning signs:** N/A pre-emptively — this is a question for CONTEXT.md/discuss-phase, not something research can resolve from the repo alone.

## Code Examples

### SUMMARY.md edit (Pattern 1 above, shown as exact before/after)
```markdown
<!-- before (current state, both phase-2 entries are drafts) -->
- [연습 1차 — 집]()
- [연습 2차 — 서해안 (7/17)]()
- [연습 3차 — 집]()
- [연습 4차 — 집 (몽골 직전 리허설)]()

<!-- after 02-01 completes -->
- [연습 1차 — 집](03-practice/session-1-home.md)
- [연습 2차 — 서해안 (7/17)]()
- [연습 3차 — 집]()
- [연습 4차 — 집 (몽골 직전 리허설)]()

<!-- after 02-02 completes -->
- [연습 1차 — 집](03-practice/session-1-home.md)
- [연습 2차 — 서해안 (7/17)](03-practice/session-2-westcoast.md)
- [연습 3차 — 집]()
- [연습 4차 — 집 (몽골 직전 리허설)]()
```

### Image folder scaffolding (mirrors 01-01 Task 2 step 3 exactly, one level deeper)
```bash
mkdir -p src/images/practice/session-1 src/images/practice/session-2
touch src/images/practice/session-1/.gitkeep src/images/practice/session-2/.gitkeep
```

### Post-checkpoint image ingestion (only runs after real photos exist)
```bash
# user-supplied raw photos in e.g. ~/Desktop/session1-raw/
bash scripts/optimize-images.sh ~/Desktop/session1-raw/ src/images/practice/session-1/
```

## State of the Art

Not applicable — no external ecosystem shift since Phase 1's research (9 days prior in-repo, same day in real terms). All Phase 1 STACK/FEATURES/PITFALLS findings remain current and are directly reused.

## Open Questions

1. **Has the user already done any home (1차-equivalent) practice, formally or informally?**
   - What we know: STATE.md doesn't record one; Phase 1's Blockers/Concerns still lists camera mount as unconfirmed, suggesting hands-on gear time may be limited so far.
   - What's unclear: Whether 02-01 should scaffold-then-checkpoint (assume the session hasn't happened) or go straight to a data-collection checkpoint (assume it has, or will very soon, and just needs writing up).
   - Recommendation: Ask the user directly before/during planning (discuss-phase or the planner's own clarifying pass); default assumption if unanswered should be "hasn't happened yet" (matches PITFALLS.md Pitfall #1's framing of 1차 as still-pending).

2. **What is the user's actual confirmed camera body + lens (mount, crop factor)?**
   - What we know: STACK.md defaulted to Sony E/Fuji X/Canon RF-S assumptions for the gear chapter, explicitly flagged as unconfirmed; STATE.md repeats this as an open Blocker after Phase 1.
   - What's unclear: The exact number to write into 1차's 500-rule drill target.
   - Recommendation: Don't block the phase on this — write the drill as an instruction to self-compute via `500-npf-rule.md`/PhotoPills rather than hard-coding a number (see Pitfall 2 above). If the user volunteers their gear when planning starts, use it; otherwise resolve when they report back real settings post-session.

3. **Exact 서해안 shoot location (GPS/site name)?**
   - What we know: Only "서해안" (West Coast) is fixed; no specific beach/spot has been chosen per any planning doc.
   - What's unclear: Can't precompute Milky Way core azimuth/altitude or check a light-pollution map for a specific point in advance.
   - Recommendation: Write 02-02's pre-shoot content as a checklist/process (open PhotoPills, pick a spot, check lightpollutionmap.info) rather than hard-coded numbers; capture the real location as part of post-shoot "촬영 환경" data, same pattern as Phase 4's still-open Mongolia GPS gap.

4. **Should the plan/checkpoint explicitly hedge against a rained-out or cloudy 7/17?**
   - What we know: `finding-the-milkyway.md` recommends a backup night for exactly this reason ("구름 예보가 애매하면 예비일... 잡아두는 것이 좋다"), and PITFALLS.md doesn't name a specific backup date for 서해안 (unlike Mongolia's multi-night itinerary, this is a single fixed date).
   - What's unclear: Is there flexibility to shoot 7/16 or 7/18 instead if weather forces it, or is 7/17 truly fixed (e.g., tied to when a group of friends is available)?
   - Recommendation: Flag this for the user/planner to confirm; if there's no real flexibility, 02-02's checkpoint instructions should still ask the user to report whatever night the shoot actually happened on (the template's H1 already parameterizes `[날짜]`), so a weather-forced shift doesn't break the plan — the checkpoint should not assume the date is exactly 2026-07-17, just "on or shortly after."

## Sources

### Primary (HIGH confidence)
- `src/03-practice/template.md` — exact section structure, explicit "no fabricated images before session ends" rule
- `src/SUMMARY.md` — current draft-link state for both target entries
- `.planning/ROADMAP.md`, `.planning/REQUIREMENTS.md`, `.planning/STATE.md` — phase goal, success criteria, requirement IDs, unresolved blockers (camera mount, 서해안 GPS)
- `.planning/phases/01-mdbook-뼈대-장비-기초-촬영법/01-01-PLAN.md`, `01-04-PLAN.md`, `01-05-PLAN.md` — established plan-writing conventions (file naming, `<task type="checkpoint:*">` shape, image-folder scaffolding pattern) directly precedented in this repo
- `.claude/get-shit-done/references/checkpoints.md` — canonical checkpoint type definitions, used to justify `checkpoint:human-action` as the closest fit for real-data ingestion
- `src/02-fundamentals/{focusing,500-npf-rule,field-workflow,finding-the-milkyway}.md` — full text read; confirmed field-workflow.md does NOT currently cover dew despite finding-the-milkyway.md's cross-link promising it
- `scripts/optimize-images.sh` — exact image pipeline invocation
- `.planning/research/{FEATURES,PITFALLS,STACK}.md` — 7/17 moon (~13% waxing crescent, sets early), Bortle facts (home 5-8, 서해안 better but still light-polluted, Gobi 1-2), Pitfall #1/#2/#3/#6/#9/#13/#15 all directly scoped to this phase's content

### Secondary (MEDIUM confidence)
None — no new web research was needed; this phase's domain is fully covered by the project's own existing, already-verified research and content.

### Tertiary (LOW confidence)
None.

## Metadata

**Confidence breakdown:**
- Standard stack/reuse: HIGH — every asset cited was read directly from the repo, not inferred
- Architecture (file naming, checkpoint modeling): HIGH — directly follows precedent already executed successfully in Phase 1 (5/5 plans, verified)
- Pitfalls: HIGH for the fabrication/date-gate/dew-gap findings (directly observed in repo text); MEDIUM for "should there be a weather backup date" (genuinely a user-decision open question, not a research gap)

**Research date:** 2026-07-09
**Valid until:** Effectively no expiry for the reuse/architecture findings (static repo state); the date-gate finding (7/17) is naturally time-bound and self-resolves the day of the shoot.
