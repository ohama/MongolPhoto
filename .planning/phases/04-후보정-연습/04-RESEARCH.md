# Phase 4: 후보정(post-processing) 연습 - Research

**Researched:** 2026-07-09
**Domain:** Content authoring for a Korean mdBook general how-to chapter (not a personal edit log) — RAW 현상 → 스태킹(노이즈 감소) → 은하수 강조 보정 → 전/후 비교. Direct structural sibling of Phase 2/3 (`HOME-*`/`FIELD-*`), reusing their exact conventions, but the *topic* domain (RAW editing sliders, Sequator/Starry Landscape Stacker workflows) is new and requires actual photography-editing domain knowledge, not just repo-internal mirroring.
**Confidence:** HIGH — every structural/convention question resolved by direct repo precedent (Phase 2/3 shipped pages); HIGH for the RAW-develop/stacking domain content (cross-verified against `.planning/research/STACK.md`, `FEATURES.md`, `PITFALLS.md`, which already did the external web research for this exact book); MEDIUM for exact Sequator/Starry Landscape Stacker UI menu labels (not independently re-verified via web this pass — reuses the prior research's tool selection, which is HIGH-confidence, but exact button names should be treated as "typical," not screenshotted).

## Summary

Phase 4 is content-authoring, not software — same "domain" as Phase 2/3. What's different from Phase 2/3: those phases had almost all their factual content already sitting in Phase 1 pages, needing only "how to rehearse this" framing. Phase 4 needs a modest amount of genuinely new domain content — the actual RAW-develop slider sequence, the actual Sequator/Starry Landscape Stacker workflow, and over-processing pitfalls — none of which exist anywhere in the repo yet. Two prior forward-promises already exist and must be fulfilled: `raw-and-wb.md` line 33 says stacking tools are "다루어질 것" in "후보정 챕터," and `camera-lens.md` line 26 has a **stale phase-number reference** ("스태킹으로 보완 — Phase 3") left over from before the 2026-07-09 roadmap reorg moved stacking from Phase 3 to Phase 4 — this must be fixed, mirroring Phase 3's fix of the dangling 이슬 link.

The burst-shooting prerequisite for stacking (EDIT-02) is **already partially covered**: `field-workflow.md` step 7 (Phase 1, existing) already tells readers "인터벌 타이머로 연속 촬영하면 나중에 스태킹(노이즈 감소)이나 구도 비교에 쓸 여러 장을 확보할 수 있다" — so the book already instructs multi-frame capture generically. What's missing and belongs in Phase 4, not Phase 1/3: the **concrete frame count** (10–20 frames per PITFALLS.md Pitfall #5 / FEATURES.md), which PITFALLS.md's own pitfall-to-phase mapping explicitly assigns to "후보정 chapter." Phase 4 should link to `field-workflow.md` step 7 for the "why shoot bursts," not re-teach it, and add only the missing number.

**Primary recommendation:** Create a new `src/05-postprocessing/` folder (filling the existing folder-number gap between `04-mongolia/` and `06-appendix/`) with 4 pages, one per EDIT-0N requirement, mirroring Phase 2/3's exact 1:1 requirement→page convention: `raw-develop.md`, `stacking.md`, `enhance-milkyway.md`, `before-after.md`. Single plan, single wave, 2 tasks (new pages; SUMMARY flip + stale-reference fixes), no checkpoints, no dates — same shape as `02-01-PLAN.md`/`03-01-PLAN.md`.

## Standard Stack

Not applicable in the software sense. "Stack" here is (a) the established project conventions Phase 4 must follow, and (b) the post-processing software this project has already selected in prior research.

### Core (established project conventions)
| Convention | Source | Purpose | Why Standard |
|---|---|---|---|
| mdBook (Rust) | Phase 1 setup | Static site build | `mdbook build src` is the acceptance gate, unchanged |
| 지침체 ("~해 보세요/~하세요/~합니다") | Phase 2/3 pages | Voice | Locked convention; no personal framing, no dates |
| Link-don't-restate | Phase 2/3 RESEARCH.md | Avoid duplication | New pages link to `raw-and-wb.md`, `field-workflow.md` instead of re-explaining RAW rationale or the 7-step field sequence |
| Empty-paren placeholder `[label]()` flip | SUMMARY.md 4부 | Marks "future phase" until resolved | Currently `- [워크플로 개요]()` — this phase flips it to 4 real links |
| No real photos; HTML-comment placeholders only | Phase 3 plan constraint (`03-01-PLAN.md`), `template.md` | No fabricated content | Directly governs EDIT-04's before/after approach (see below) |

### Post-processing software (already chosen — reuse verbatim, don't re-research)
| Tool | Role | Platform / Price | Source |
|---|---|---|---|
| **darktable** | RAW develop (primary, free) | Win/Mac/Linux, $0 | STACK.md — beginner-friendly, has an "astrophoto denoise" module, mirrors Lightroom's concepts |
| **Adobe Lightroom** | RAW develop (alternative, if reader already subscribes) | Win/Mac, ~$12/mo | STACK.md — present as an equal alternative, not the default; `raw-and-wb.md` already frames both as OS-agnostic ("두 OS 모두 지원") |
| **Sequator** | Stacking (Windows) | Win only, free | STACK.md — built specifically for untracked star+foreground stacking; primary Windows recommendation |
| **Starry Landscape Stacker** | Stacking (Mac) | Mac only, ~$40 one-time | STACK.md — Mac-native equivalent, same purpose |
| ~~DeepSkyStacker~~ | NOT the default | — | STACK.md explicitly: worse fit, no native foreground blending; mention only as a footnote if at all, never lead with it |
| ~~Topaz Photo AI~~ | NOT recommended as primary/only | — | STACK.md: subscription-only since Oct 2025, poor fit for a one-time-cost, beginner/value-first book |

**Installation:** None — this is a content phase; no software is installed by the plan itself, only described/linked for readers to install themselves.

## Architecture Patterns

### Recommended Project Structure
```
src/05-postprocessing/          # NEW — fills folder-number gap (01-gear, 02-fundamentals,
├── raw-develop.md              #   03-practice, 04-mongolia, [05 missing], 06-appendix)
├── stacking.md
├── enhance-milkyway.md
└── before-after.md
```

**Why `05-postprocessing/` and not `04-postprocessing/` or reusing `03-practice/`:** Folder numbers in this repo track *creation order*, not the SUMMARY.md "-부" numbering (already decoupled: SUMMARY "2부" content lives in `03-practice/`, "3부" in `04-mongolia/`, "4부" has no folder yet). `04-mongolia/` and `06-appendix/` already exist, leaving `05-` open — the natural next folder number for the next new content area. Confirmed no `05-*` folder currently exists (`ls src/` verified).

**Why NOT fewer pages (e.g., a single combined page, or the context's suggested `raw-develop.md + stacking.md + enhance-and-compare.md` 3-page split):** Phase 2 (3 pages for HOME-01/02/03) and Phase 3 (3 pages for FIELD-01/02/03) both used strict 1:1 requirement→page mapping and it worked cleanly for REQUIREMENTS.md traceability and SUMMARY.md sidebar granularity. EDIT-01..04 is 4 requirements, so 4 pages is the precedent-consistent choice. Recommend against merging EDIT-03+EDIT-04 (enhance + compare) even though they're related, because EDIT-04's "before/after" framing is a genuinely different *rhetorical mode* (worked examples with worded before/after) from EDIT-03's "how to enhance" (procedural slider guidance) — mirrors why Phase 3 kept `field-review.md` separate from `field-practice.md` despite both being "outdoor session" content.

### Pattern 1: Requirement-to-page 1:1 mapping (repeat from Phase 2/3)
| Requirement | New page | Links to (existing, don't restate) | What's NEW (this phase's actual content burden) |
|---|---|---|---|
| EDIT-01 (RAW 현상: 노출·화밸·대비·색감) | `raw-develop.md` | `raw-and-wb.md` (RAW 필요성, WB 시작값 3800–4200K — already established, don't re-argue) | The **order of operations** for developing a RAW frame in any tool: WB → 노출/하이라이트·섀도 → 대비/디헤이즈 → 색감/채도, expressed as tool-agnostic slider concepts (name both darktable and Lightroom's equivalent module/slider names side by side, not menu-path-specific) |
| EDIT-02 (스태킹: Sequator/Starry Landscape Stacker) | `stacking.md` | `field-workflow.md` step 7 (burst-shooting instruction — already exists, add only the missing frame count), `raw-and-wb.md` line 29 (WB must be locked manual before stacking — already stated, don't restate) | The concrete **10–20 frame count** recommendation; the actual Sequator (Win) and Starry Landscape Stacker (Mac) step sequences; the "stack first, then RAW-develop the stacked output" sequencing relative to EDIT-01 |
| EDIT-03 (은하수 강조: 대비·디테일·색) | `enhance-milkyway.md` | `raw-develop.md` (baseline already applied — this is a second pass) | Advanced-but-still-beginner slider guidance (로컬 대비/디테일, 선택적 채도) **plus** the over-processing warning list (halo, 크러시된 블랙, 과채도) — this content doesn't exist anywhere in the repo yet, must be authored fresh from PITFALLS/FEATURES anti-feature research |
| EDIT-04 (전/후 비교, 예시 기반) | `before-after.md` | `raw-develop.md`, `stacking.md`, `enhance-milkyway.md` (ties the chapter together) | A **worded** before/after narrative per adjustment step + HTML-comment placeholders for future real examples — see Decision section below, this is the one genuinely open design call |

### Pattern 2: Fulfill existing forward-promises instead of re-announcing the chapter
Two pages already promise content that only this phase can deliver:
- `raw-and-wb.md` line 33: *"노이즈 감소를 위한 스태킹 도구는 Windows(Sequator)·Mac(Starry Landscape Stacker)로 갈리는데, 이는 후보정 챕터에서 다룬다."* — currently plain text, no link (the page didn't exist yet). Once `stacking.md` exists, this should become a real markdown link, matching Phase 3's precedent of upgrading a dangling reference into a real link once the target page exists.
- `camera-lens.md` line 26: *"(부족하면 나중에 스태킹으로 보완 — **Phase 3**.)"* — this is a **stale phase-number reference**, left over from the STATE.md-recorded decision ("[Phase 3] 후보정 스태킹 툴은 편집 OS에 따라 갈림") made before the 2026-07-09 roadmap reorg moved post-processing to Phase 4. Must be fixed — either update "Phase 3" → link directly to `stacking.md` (preferred: avoids the same staleness recurring on a future renumber).

### Pattern 3: Stacking + RAW-develop sequencing (must be stated explicitly, currently ambiguous in the repo)
Beginners will naturally ask "do I RAW-develop each frame first, or stack first?" The book already half-answers this in `raw-and-wb.md` line 29 (lock WB manually before stacking so frames match) but never states the full order. Recommended sequence to teach in `stacking.md`, cross-linked from `raw-develop.md`:
1. Shoot 10–20 frames, same composition, **manual WB locked** (already true per `raw-and-wb.md`).
2. Load the RAW (or a consistent baseline-converted) frames directly into Sequator/Starry Landscape Stacker — both tools accept RAW input.
3. Align + stack → export a single flattened TIFF/PNG (noise already reduced by ~√N).
4. Run the `raw-develop.md` EDIT-01 workflow (WB→노출→대비→색감) **on the stacked output**, not on each individual frame.
5. Optionally apply the `enhance-milkyway.md` EDIT-03 second pass on top.

This resolves a real sequencing question a beginner would otherwise be stuck on, and doesn't exist anywhere in the repo today — flag as a content decision the planner should lock in (recommend: stack-then-develop, matching how Adam Thompson/Alexios Ntounas-style guides in STACK.md's sources actually sequence it).

### Anti-Patterns to Avoid
- **Re-explaining why RAW matters or the 3800–4200K WB starting point:** already fully covered in `raw-and-wb.md`. Link, don't restate.
- **Re-listing the 7-step field workflow:** `stacking.md` should link to `field-workflow.md` step 7 for "why shoot bursts," not re-explain interval-timer mechanics.
- **Personal/dated framing:** No session numbers, no calendar dates — same rule as Phase 2/3.
- **Recommending DeepSkyStacker or Topaz as defaults:** STACK.md explicitly rules these out as primary/first recommendations (see Standard Stack table above).
- **Advanced pixel-level masking/layering content:** explicitly out-of-scope per FEATURES.md anti-features ("고급 픽셀 단위 편집") and REQUIREMENTS.md Out of Scope table ("고급 픽셀 단위 포토샵 마스킹"). Keep EDIT-03 to a repeatable slider recipe, no manual luminosity masks.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---|---|---|---|
| "Why shoot RAW / what's the WB starting value?" | New explanation | Link `raw-and-wb.md` | Already fully covers this |
| "Why shoot multiple frames for stacking?" | New burst-shooting rationale | Link `field-workflow.md` step 7 | Already states this generically; only the frame-count number is missing |
| "Which stacking tool should I use?" | New tool comparison/selection logic | Reuse STACK.md's Sequator(Win)/Starry Landscape Stacker(Mac) verdict verbatim | Already researched and decided — don't re-litigate DeepSkyStacker/Topaz here |
| "What software do I use for RAW develop?" | New tool comparison | Reuse STACK.md's darktable(free)/Lightroom(paid) verdict, already foreshadowed in `raw-and-wb.md`'s "편집 소프트웨어 메모" | Don't re-argue tool choice; `raw-and-wb.md` already establishes both are OS-agnostic |

**Key insight:** Like Phase 2/3, most of the *scaffolding* content already exists somewhere in the repo (RAW rationale, WB value, burst-shooting instruction, OS-agnostic tool framing). Phase 4's actual new-content burden is narrower than it looks: the RAW-develop slider *sequence* (order of operations, tool-agnostic naming), the two stacking-tool *step sequences*, the over-processing *warning list*, and the worded before/after *narrative*. None of these exist yet and all require real photography-editing domain knowledge, unlike Phase 2/3 which was almost pure "add outdoor-rehearsal framing to existing indoor content."

## Common Pitfalls

### Pitfall 1: Leaving the stale "Phase 3" reference in `camera-lens.md` unfixed
**What goes wrong:** `src/01-gear/camera-lens.md:26` says "스태킹으로 보완 — Phase 3," which is now wrong (stacking moved to Phase 4 in the 2026-07-09 reorg per STATE.md). If unfixed, a reader following the phase reference gets confused, and a future renumber (Phase 4→5 etc.) will strand it again.
**How to avoid:** Fix in this phase's cleanup task, either updating the phase number or (preferred, more durable) replacing it with a direct link to the new `stacking.md` page — same durability logic as Phase 3's fix of the dangling 이슬 link.
**Warning signs:** `grep -rn "Phase 3\|Phase 4" src/` still shows a mismatch after this phase ships.

### Pitfall 2: `raw-and-wb.md`'s forward-promise to "후보정 챕터" stays a dangling plain-text reference
**What goes wrong:** Line 33 currently says stacking tools are "다루어질 것" in "후보정 챕터" as plain text (no link) because the target page didn't exist. If this phase creates `stacking.md` but never goes back to upgrade that sentence into a real markdown link, it's a missed cross-link, not a broken one (harmless to `mdbook build`, but a quality gap vs. Phase 3's precedent of always closing these loops).
**How to avoid:** Bundle the `raw-and-wb.md` line-33 link upgrade into the cleanup task alongside the `camera-lens.md` fix.
**Warning signs:** `grep -n "스태킹" src/02-fundamentals/raw-and-wb.md` shows no markdown link syntax pointing at `05-postprocessing/stacking.md` after this phase ships.

### Pitfall 3: Re-teaching burst-shooting mechanics instead of adding only the missing frame count
**What goes wrong:** `field-workflow.md` step 7 already tells readers to shoot bursts for stacking. It would be easy for `stacking.md` to re-explain interval-timer mechanics or repeat "왜 여러 장을 찍어야 하는가" from scratch.
**Why it happens:** Natural instinct to make each new page self-contained, same failure mode Phase 3's RESEARCH.md flagged (Pitfall 4 there, re-explaining the 7-step workflow).
**How to avoid:** Link to `field-workflow.md` step 7 for the "why," add ONLY the concrete number (10–20 frames, ~15–20s each, per PITFALLS.md Pitfall #5 / FEATURES.md) as the delta this chapter owns.
**Warning signs:** `stacking.md` containing interval-timer setup instructions that duplicate `home-focus-and-interval.md` or `field-workflow.md` content.

### Pitfall 4: EDIT-03 drifting into advanced pixel-masking territory
**What goes wrong:** "은하수 강조 보정" is exactly the kind of topic where advanced sources (astrophotography forums, pro-level tutorials) reach for luminosity masks, frequency separation, or multi-layer blending — all explicitly out of scope per REQUIREMENTS.md ("고급 픽셀 단위 포토샵 마스킹") and FEATURES.md's anti-features table.
**How to avoid:** Keep every EDIT-03 instruction expressible as "move this slider, in this tool, to roughly this range" — no masks, no layers, no frequency separation. If a technique can't be taught as a single slider adjustment in darktable/Lightroom, it doesn't belong in this chapter.
**Warning signs:** Any mention of "마스크," "레이어," "주파수 분리" in `enhance-milkyway.md`.

### Pitfall 5: EDIT-04 accidentally implying real photos exist
**What goes wrong:** "전/후 비교로 배우는 후보정" (before/after comparison) is naturally photo-shaped content. Without a clear approach decision, a draft could slip into writing as if real before/after images exist ("아래 사진에서 보듯이…") when none do — misleading and inconsistent with the rest of the book's no-fabricated-content rule.
**How to avoid:** See Decision section below — commit to worded before/after narrative + HTML-comment placeholders, matching the exact `03-01-PLAN.md` constraint ("실제 사진 없음: 이미지가 필요하면 HTML 주석 스펙만. 실제 파일 생성 금지").
**Warning signs:** Any sentence in `before-after.md` phrased as if pointing at a visible image without an accompanying `<!-- 사진: ... -->` placeholder or explicit "실제 예시는 추후 추가 예정" framing.

## Code Examples

Not applicable (content-authoring phase, no code). See Architecture Patterns above for the markdown structure; concrete slider/tool sequences below are the domain content to author.

### RAW-develop order of operations (EDIT-01) — tool-agnostic, cite both darktable and Lightroom naming
1. **화이트밸런스** — 색온도 슬라이더를 3800–4200K 근처로 (darktable: "화이트밸런스" 모듈 / Lightroom: "White Balance" 색온도 슬라이더). Already-established starting point from `raw-and-wb.md` — don't rederive.
2. **노출/하이라이트·섀도** — 전체 밝기(노출) 먼저, 그다음 하이라이트를 낮춰 코어 디테일 보존, 섀도를 올려 전경 디테일 회복 (darktable: "노출"+"톤 곡선"/"exposure"+"basecurve" 모듈군 / Lightroom: Exposure/Highlights/Shadows 슬라이더).
3. **대비/디헤이즈** — 은하수와 배경 하늘의 톤 분리를 살리되 과도하게 올리지 않기(다음 페이지 EDIT-03에서 더 다룸).
4. **색감/채도** — 은하수 특유의 청보라 톤을 살리는 방향으로 채도/생동감(Vibrance) 미세 조정, 배경 하늘 전체 채도를 과하게 올리지 않기.

### Sequator (Windows) stacking workflow — beginner level
1. 소프트웨어 실행 → **Star Images**에 미리 찍은 10–20장 프레임 불러오기.
2. **Base Image** 선택(전경이 가장 선명하게 나온 한 장).
3. **Sky Region** 마스크로 하늘/전경 경계를 대략 지정 (freehand 브러시).
4. Composition 옵션에서 **Freeze Ground**(전경 고정) 선택 — 별만 정렬하고 전경은 기준 프레임 그대로 유지.
5. **Start** 실행 → 정렬·합성된 결과물을 TIFF/PNG로 저장.
6. 결과물을 RAW 현상 도구(darktable/Lightroom)로 불러와 EDIT-01 순서대로 후보정.

### Starry Landscape Stacker (Mac) stacking workflow — beginner level
1. 소프트웨어 실행 → 같은 구도로 찍은 10–20장 프레임 폴더 불러오기.
2. 프로그램이 자동으로 겹치는 별 영역을 감지 → 사용자가 브러시로 "하늘(별 정렬)" vs "땅(고정)" 영역을 마스킹.
3. 마스크 경계를 페더링(자연스럽게 블렌딩)해 이음새 최소화.
4. 정렬·블렌드된 결과물을 TIFF로 내보내기.
5. 결과물을 RAW 현상 도구로 불러와 EDIT-01 순서대로 후보정.

**같은 점:** 두 도구 모두 N장의 정지된 삼각대 프레임을 입력받아, 별(하늘)은 프레임 간 정렬해 노이즈를 줄이고 전경은 한 프레임 기준으로 고정한 뒤 블렌드 — "무-트래킹 촬영에서 하늘+전경을 동시에 살리는" 같은 목적.
**다른 점:** Sequator는 무료·Windows 전용, 자동 하늘 감지로 더 원클릭에 가까움. Starry Landscape Stacker는 유료(~$40)·Mac 전용, 하늘/땅 경계를 브러시로 더 세밀하게 수동 조정.
**공통 전제조건:** 흔들리지 않는 삼각대, 프레임 간 구도/초점 변경 없음, 매뉴얼 WB 고정(위 sequencing 참고).

## State of the Art

Not applicable — no library/tooling version drift risk. STACK.md (researched same day, 2026-07-09) already confirms current software landscape (Topaz subscription-only shift as of Oct 2025 noted there); this phase inherits that research rather than re-verifying.

## Open Questions / Decisions for the Planner

### Decision 1: EDIT-04 전/후 비교 approach (no real photos exist) — **flagged decision, recommendation given**
**What we know:** The project has an established, precedent-backed rule: no real photos yet, HTML-comment placeholders only (`03-01-PLAN.md` constraint: "실제 사진 없음: 이미지가 필요하면 HTML 주석 스펙만. 실제 파일 생성 금지"). `template.md` already models this exact pattern for its own "결과 사진" section (leaves a relative-path example, doesn't create actual image files).
**What's unclear:** Whether to also attempt a single "worked hypothetical example" narrative (one frame's journey through all steps, described only in words) vs. per-step scattered before/after blurbs.
**Recommendation:** Combine both, matching the requirement's own phrase "예시 기반 설명" (example-based explanation):
  (a) **Per-step worded before/after** — for each of WB/노출/대비/채도/스태킹, one or two sentences describing what visually changes ("보정 전: 하늘 전체가 붉은/노란 색조를 띠고 평면적입니다. WB를 낮추면: 하늘이 차분한 청보라 톤으로 바뀌고 코어와 배경의 대비가 살아납니다.").
  (b) **HTML-comment placeholders** at 2–3 natural junctures (`<!-- 사진: 보정 전/후 비교 예시 — 추후 실제 사진으로 교체 -->`), so a future real photo can slot in without restructuring.
  (c) Optionally end with a light forward-link to `template.md`'s "결과 사진" section, noting that once real practice photos exist, before/after edits can be logged there.
This needs zero real image files and matches the project's own established convention exactly — low risk, precedent-backed.

### Decision 2: Stack-then-develop vs. develop-then-stack sequencing
**What we know:** `raw-and-wb.md` already implies stack-then-develop is compatible with its WB-locking advice (line 29). STACK.md's own sources (Adam Thompson, Alexios Ntounas guides) sequence it stack-first.
**What's unclear:** Nothing major — this is a low-risk call, not a deep ambiguity.
**Recommendation:** Teach stack-first (raw frames → Sequator/SLS → single flattened output → then RAW-develop workflow from EDIT-01 on that output). State this explicitly in `stacking.md`, cross-link from `raw-develop.md`'s opening so a reader arriving at EDIT-01 first isn't confused about when stacking happens relative to it.

### Decision 3: Burst frame-count number's exact home
**What we know:** PITFALLS.md's pitfall-to-phase mapping explicitly assigns "10–20 frames" guidance to "후보정 chapter" (not the fundamentals/field-workflow chapter, which only teaches the *habit* of shooting bursts, not the *count*).
**What's unclear:** Nothing — this is settled by PITFALLS.md's own explicit phase mapping.
**Recommendation:** State "10~20장, 각 15~20초" (or similar, matching PITFALLS Pitfall #5 wording) in `stacking.md` only, not duplicated in `field-workflow.md` (leave that page as-is — it already generically says "여러 장").

### Open item (not blocking, flag for planner awareness): REF-03 앱·소프트웨어 가이드 (Phase 6) overlap
Phase 6's appendix (`REF-03`, not yet built) is described in ROADMAP.md as a consolidated "앱·소프트웨어 가이드." This phase will mention darktable/Lightroom/Sequator/Starry Landscape Stacker in-context (same pattern as `accessories.md` mentioning PhotoPills/Stellarium ahead of their operational use in `finding-the-milkyway.md`). No action needed now — Phase 6 will later distill a summary list, this phase doesn't need to pre-build it, matching FEATURES.md's dependency note that cheat-sheets/appendices are "assembled last."

## Sources

### Primary (HIGH confidence — read directly from repo)
- `src/03-practice/home-*.md`, `field-*.md`, `template.md` — Phase 2/3's shipped pattern to mirror
- `src/02-fundamentals/raw-and-wb.md`, `field-workflow.md`, `finding-the-milkyway.md` — existing content to link, forward-promises to fulfill
- `src/01-gear/camera-lens.md`, `accessories.md` — stale phase reference found (line 26), software-mention precedent pattern
- `src/SUMMARY.md` — exact current 4부 placeholder text
- `.planning/ROADMAP.md`, `.planning/REQUIREMENTS.md`, `.planning/STATE.md` — EDIT-01..04 exact wording, success criteria, roadmap reorg history (stacking Phase 3→4 move)
- `.planning/phases/03-야외에서-연습할-사항/03-RESEARCH.md`, `03-01-PLAN.md` — direct structural/convention precedent (page-count reasoning, cleanup-task shape, no-real-photos constraint)

### Secondary (MEDIUM-HIGH confidence — reused from prior same-project research, not re-verified externally this pass)
- `.planning/research/STACK.md` Part B (Post-Processing Software section) — Sequator/Starry Landscape Stacker/darktable/Lightroom selection and rationale, Topaz/DeepSkyStacker exclusion rationale
- `.planning/research/FEATURES.md` — basic post-processing feature definition, stacking technique description (8–20 frames, √N noise reduction), MVP scoping (no masking/layering)
- `.planning/research/PITFALLS.md` Pitfall #5 (High-ISO noise, no stacking) and Pitfall #10/#11 (WB, foreground blending) — 10–20 frame count, phase-mapping to "후보정 chapter," anti-processing warnings

### Tertiary
None — no new external web research performed this pass; the domain was already thoroughly researched at project-research stage (STACK/FEATURES/PITFALLS, all dated 2026-07-09) and this phase's job was to map that existing research onto concrete phase structure, not re-derive it.

## Metadata

**Confidence breakdown:**
- Standard stack/conventions: HIGH — directly observed from Phase 2/3's shipped, verified output
- Architecture (page split, folder naming): HIGH — folder-number gap confirmed via `ls src/`, page-count precedent confirmed via Phase 2/3
- Post-processing domain content (slider order, stacking steps): HIGH for tool *selection* and *sequencing logic* (inherited from STACK/FEATURES/PITFALLS), MEDIUM for exact Sequator/Starry Landscape Stacker UI labels (typical menu names, not screenshot-verified this pass — low risk since content is instructional, not literal UI documentation)
- Pitfalls: HIGH — stale "Phase 3" reference and dangling forward-promise both verified via direct grep against current repo state

**Research date:** 2026-07-09
**Valid until:** No expiry concern for structure/conventions (repo-internal). Software landscape (Sequator/Starry Landscape Stacker/darktable/Lightroom/Topaz pricing) inherited from STACK.md, valid ~30 days per that document's own dated research — re-verify before executing if significant time has passed.
