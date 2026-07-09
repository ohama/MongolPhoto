# Phase 6: 부록 + 보너스 기법 + 배포 검증 - Research

**Researched:** 2026-07-09
**Domain:** Content compilation (Korean mdBook) — distilling 4 reference/appendix pages from already-written chapters, authoring 3 new "bonus technique" pages that extend already-taught fundamentals, restructuring `src/SUMMARY.md`, and closing out the milestone with a deploy check.
**Confidence:** HIGH (file inventory, content-mapping, SUMMARY restructure, mdBook print behavior) / MEDIUM (bonus-technique tool picks — panorama/star-trail/timelapse software wasn't covered by the original STACK.md research pass, verified fresh via WebSearch this session) / MEDIUM (deploy-checkpoint recommendation — a judgment call, not a fact)

## Summary

This is the terminal phase of the milestone: no new astronomical/gear facts need discovering, only **compilation** (REF-01~04, distilled from 19 already-written chapters) and **light extension** (BONUS-01~03, new techniques that reuse already-taught mechanics — manual mode, intervalometer, RAW+WB, stacking). REF-05 (카메라·렌즈 추천 목록) is already done and lives at `src/06-appendix/camera-lens-picks.md`.

Two structural decisions drive everything else:

1. **Where does "보너스 기법" go in the TOC?** There is currently no bonus section and `06-appendix/` is already claimed by the one existing appendix page. Recommendation: rename `06-appendix/` → `07-appendix/`, create `06-bonus/` for the 3 new pages, and insert a `# 보너스 기법` heading **between** `4부 후보정` and `# 부록` in `SUMMARY.md`. This costs exactly 3 one-line link-path fixes (grep-verified below) and reads correctly as a book: bonus techniques are a natural "next step" after the reader finishes post-processing, while 부록 (cheat sheet/checklists/glossary/gear picks) is genuinely back-matter — reference material meant to be looked up, not read in sequence, so it belongs last. `REQUIREMENTS.md` itself already lists `### 보너스 기법 (BONUS)` before `### 부록 (REF)`, which is a weak but real signal the project's own mental model already orders it this way.
2. **Is a human deploy-verify checkpoint warranted?** Yes, recommended. Success criterion 3 says "**배포된 사이트**에서 전체 목차가 깨짐 없이 탐색 가능하다" (on the *deployed* site) — the same language Phase 1 used for its one human checkpoint (01-05), which the user already approved once for this exact repo/Pages setup. Since this is the final phase closing out the whole milestone, and 7 new pages + 2 SUMMARY-structural changes (a new top-level section, a renamed folder) are the largest single content/structure delta since Phase 1, a final human look at the live URL is cheap insurance against CJK-rendering or sidebar-collapse surprises that a local `mdbook build` can't see. This makes Phase 6 **not fully autonomous**, same as Phase 1.

**Primary recommendation:** 1 plan, 3 sequential tasks (not parallel waves — every task touches `SUMMARY.md`, so waves would conflict), ending in a human deploy-verify checkpoint. Same shape as Phases 1–5, just with an extra task for the larger content volume.

## Existing Content Inventory (source material for REF-01~04)

| File | Relevant content for REF pages |
|---|---|
| `src/02-fundamentals/exposure-basics.md` | M모드 이유, ISO/조리개/셔터 개념, "은하수 시작 세팅값" table (M / 최대개방 / ISO 1600–3200 / 15–20s / 3800–4200K / RAW) → **REF-01 core table** |
| `src/02-fundamentals/500-npf-rule.md` | 500룰 공식 `500 ÷ (초점거리×크롭계수)`, worked examples, NPF 룰 = PhotoPills Spot Stars / 온라인 계산기 → **REF-01 formula line** |
| `src/02-fundamentals/focusing.md` | 6-step manual-focus method → **REF-01 condensed steps** |
| `src/02-fundamentals/field-workflow.md` | 7-step field sequence (도착·암순응 → 삼각대 → 구도 → 세팅 → 초점 → 시험촬영 → 본촬영) → **REF-01 checklist backbone** |
| `src/02-fundamentals/finding-the-milkyway.md` | "오늘 찍을 수 있나?" 5-item checklist (계절/방향/달/Bortle/날씨) → **REF-01 pre-flight checklist**; Bortle definition, 코어/박명 terms → **REF-04** |
| `src/02-fundamentals/raw-and-wb.md` | RAW vs JPEG, 3800–4200K 화밸 → **REF-01/REF-04** |
| `src/01-gear/checklist.md` | 출발 전 체크리스트 (카메라·전원·삼각대·방한·앱·기타 6개 카테고리) → **REF-02 source #1**, link don't duplicate |
| `src/03-practice/home-checklist.md` | 집 연습 체크리스트 (조작·초점·촬영진행) → **REF-02 source #2**, link don't duplicate |
| `src/02-fundamentals/field-workflow.md` (again) | Has no checkboxes today — a prose 7-step sequence → **REF-02 source #3, needs new value-add**: condense into an actual checkbox list (not duplicating existing content, since none exists as a checklist yet) |
| `src/03-practice/field-review.md` | 증상→확인/원인→다음개선 표 — **NOT** a pre-trip checklist; skip for REF-02, doesn't fit "checklist compilation" framing |
| `src/01-gear/accessories.md` | PhotoPills, Stellarium, Windy/Clear Outside intro (apps) → **REF-03 apps half** |
| `src/05-postprocessing/raw-develop.md` | darktable(default)/Lightroom software note → **REF-03 software half** |
| `src/05-postprocessing/stacking.md` | Sequator(Win, free)/Starry Landscape Stacker(Mac, ~$40), explicit "추천하지 않는 도구"(DeepSkyStacker, Topaz — 구독 전용화) → **REF-03 software half** |
| `src/06-appendix/camera-lens-picks.md` | Gear/lens picks — **out of REF-03 scope** (REF-03 = apps+software only per phase context; camera/lens already lives in REF-05) |
| Scattered across 12 files | Term candidates for **REF-04** (full list below) |

## Architecture Patterns

### Recommended file/folder structure

```
src/
├── 05-postprocessing/            # unchanged (4부, existing)
├── 06-bonus/                     # NEW — 보너스 기법
│   ├── panorama.md                # BONUS-01
│   ├── star-trails.md             # BONUS-02
│   └── timelapse.md               # BONUS-03
└── 07-appendix/                  # RENAMED from 06-appendix/ (git mv)
    ├── camera-lens-picks.md        # REF-05, existing, content unchanged
    ├── cheat-sheet.md              # REF-01
    ├── checklists.md               # REF-02
    ├── apps-and-software.md        # REF-03
    └── glossary.md                 # REF-04
```

```
src/images/
├── bonus/{panorama,star-trails,timelapse}/   # NEW, empty placeholder dirs (mirrors mongolia/ pattern)
└── appendix/                                  # NEW if REF-01/04 want illustrations; optional, low priority
```

**3 cross-references to fix on rename** (grep-verified, only these 3 exist):
```
src/SUMMARY.md:46            06-appendix/camera-lens-picks.md → 07-appendix/camera-lens-picks.md
src/01-gear/camera-lens.md:3, :51   ../06-appendix/... → ../07-appendix/...
src/02-fundamentals/500-npf-rule.md:19   ../06-appendix/... → ../07-appendix/...
```

### SUMMARY.md — new section + flipped 부록

**Current tail of SUMMARY.md:**
```markdown
# 부록

- [카메라 · 렌즈 추천 목록](06-appendix/camera-lens-picks.md)
- [현장 치트시트]()
- [체크리스트 모음]()
- [앱·소프트웨어 가이드]()
- [용어 사전]()
```

**Recommended:**
```markdown
# 보너스 기법

- [은하수 파노라마 촬영·병합](06-bonus/panorama.md)
- [스타트레일(별궤적) 촬영·합성](06-bonus/star-trails.md)
- [밤하늘 타임랩스](06-bonus/timelapse.md)

# 부록

- [카메라 · 렌즈 추천 목록](07-appendix/camera-lens-picks.md)
- [현장 치트시트](07-appendix/cheat-sheet.md)
- [체크리스트 모음](07-appendix/checklists.md)
- [앱·소프트웨어 가이드](07-appendix/apps-and-software.md)
- [용어 사전](07-appendix/glossary.md)
```

This is a "surgical flip" identical in spirit to what Phases 2–5 each did to their own SUMMARY block — 4 draft placeholders → 4 real links, plus one brand-new top-level section inserted above it.

**Alternative considered (rejected):** Keep `06-appendix/` as-is, add bonus pages as `07-bonus/` placed *after* 부록 in the TOC. Zero rename risk, but reads oddly — a glossary/cheat-sheet "back matter" section followed by a "here are 3 more techniques" section breaks the closing-reference feel the phase goal describes ("완결된 참고자료로 마무리"). The rename option's cost (3 link fixes, 1 `git mv`) is low enough that the better-reading structure should win. **Flagging as a decision point for the planner** in case there's a reason to prefer zero-churn.

### Don't add print-specific CSS/tooling for REF-01

`book.toml`'s `[output.html]` uses mdBook's default theme, which already ships a `css/print.css` linked with `media="print"` on **every** page (not just an aggregate print.html) — hitting the browser's Print function on any single chapter page already strips the sidebar, nav arrows, and other UI chrome automatically. `PROJECT.md`'s explicit out-of-scope line — "인쇄용 실물 책 제작 — 우선 웹으로 시작" — confirms REF-01's "(인쇄용)" qualifier means "printable at home on demand," not professional print production. **Recommendation: no custom CSS or mdBook preprocessor needed.** REF-01's job is purely content design: keep it dense (tables/checkboxes, minimal prose) so it reads as roughly one printed page, and rely on the existing print stylesheet.

## Content Spec — REF-01: 현장 치트시트 (인쇄용)

One dense page, tables/checkboxes over prose, every value **linked back** to its teaching chapter (link don't restate the *why*, only restate the *value*):

1. **시작 세팅값 표** — mode/조리개/ISO/셔터/화밸/파일형식, copied verbatim from `exposure-basics.md`'s existing table, plus a one-line 500룰 formula reminder (`500 ÷ (초점거리×크롭계수)`) pointing to `500-npf-rule.md` and `07-appendix/camera-lens-picks.md` for the reader's own crop factor — **don't hardcode a crop-factor number** (matches the project's established "마운트 미확정" principle used in every prior phase, per STATE.md).
2. **초점 5단계** — condensed one-line-per-step from `focusing.md`'s 6 steps (MF전환 → 라이브뷰 확대 → 링 미세조정 → 테이프 고정 → 테스트샷 100% 확인), link to full page.
3. **현장 워크플로 체크박스** — the 7 `field-workflow.md` headers as `- [ ]` items (도착·암순응 / 삼각대 / 구도 / 세팅 / 초점 / 시험촬영 / 본촬영), link to full page.
4. **오늘 찍을 수 있나? 5문항** — verbatim from `finding-the-milkyway.md`'s existing checklist.
5. **빠른 문제해결** — condensed version of `field-review.md`'s symptom table (별 궤적/초점 흐림/노출 어긋남/뿌옇게 나옴), 1 line each, link to full page for causes.

## Content Spec — REF-02: 체크리스트 모음

An index/compilation page, **not a re-listing** of every checkbox (per phase context: compile/link, don't reinvent):

- Short intro: "이 책의 체크리스트를 한곳에 모았습니다. 상황별로 필요한 것을 골라 쓰세요."
- **출발 전 체크리스트** → link to `01-gear/checklist.md`, one-line description of when to use it (짐 쌀 때).
- **집 연습 체크리스트** → link to `03-practice/home-checklist.md`, one-line description (야외 나가기 전 자가진단).
- **현장 촬영 워크플로 체크리스트** — `field-workflow.md` is prose today with no checkboxes; this is the one place REF-02 adds real value: render its 7 steps as an actual `- [ ]` checklist here, with a "자세한 설명은 [현장 촬영 워크플로](../02-fundamentals/field-workflow.md) 참고" link. This is legitimately new (a checklist that doesn't exist elsewhere yet), not a duplicate.

## Content Spec — REF-03: 앱·소프트웨어 가이드

Two short tables, apps then software, each row linking to where it's actually taught/used — this page is a **directory**, not a tutorial:

**앱:**
| 앱 | 용도 | 자세히 |
|---|---|---|
| PhotoPills | 코어 뜨는 시각/방위각/고도, Spot Stars(NPF) 계산기 | `01-gear/accessories.md`, `02-fundamentals/500-npf-rule.md` |
| Stellarium | 밤하늘 시뮬레이션, 방향 사전 확인 | `01-gear/accessories.md` |
| Windy / Clear Outside | 구름·습도·달 위상 예보 | `02-fundamentals/finding-the-milkyway.md` |

**소프트웨어:**
| 소프트웨어 | 용도 | OS | 자세히 |
|---|---|---|---|
| darktable | RAW 현상 (기본 추천, 무료) | Win/Mac/Linux | `05-postprocessing/raw-develop.md` |
| Lightroom | RAW 현상 (구독 중이면) | Win/Mac | `05-postprocessing/raw-develop.md` |
| Sequator | 스태킹 (무료) | Windows | `05-postprocessing/stacking.md` |
| Starry Landscape Stacker | 스태킹 (~$40) | Mac | `05-postprocessing/stacking.md` |

Explicitly **exclude** camera/lens gear (that's REF-05's job, already done) — keep REF-03 scoped to apps+software only, per phase context note.

## Content Spec — REF-04: 용어 사전

Compiled term list (alphabetical or by category — either works; recommend Korean-alphabetical for scan-ability), each entry 1–2 lines + link back to first-use chapter. Terms found across the existing book:

| 용어 | 처음 등장 |
|---|---|
| 크롭계수 (Crop Factor) | `500-npf-rule.md`, `camera-lens-picks.md` |
| 500 룰 / NPF 룰 | `500-npf-rule.md` |
| 노출 삼각형 (Exposure Triangle) | `exposure-basics.md` |
| Bortle 척도 | `finding-the-milkyway.md` |
| 은하수 코어 (Galactic Core) | `finding-the-milkyway.md` |
| 천문박명 (Astronomical Twilight) | `finding-the-milkyway.md`, `04-mongolia/overview.md` |
| 신월 / 초승달 | `finding-the-milkyway.md` |
| 다크스카이 / 광해 | `finding-the-milkyway.md` |
| 자오선 통과 (Meridian Transit / Culmination) | `04-mongolia/overview.md` |
| 암순응 (Dark Adaptation) | `field-workflow.md` |
| RAW | `raw-and-wb.md` |
| 화이트밸런스 / 켈빈(K) | `raw-and-wb.md` |
| 인터벌 타이머 / 릴리즈 | `accessories.md` |
| 이슬점 / 결로 | `accessories.md`, `field-prep-and-hazards.md` |
| 코마수차 (Coma Aberration) | `camera-lens-picks.md` |
| 스태킹 (Stacking) | `stacking.md` |
| 디헤이즈 (Dehaze) | `raw-develop.md` |
| 로컬 대비 / 명료도 | `enhance-milkyway.md` |
| 크러시된 블랙 (Crushed Blacks) | `enhance-milkyway.md` |
| 헤일로 (Halo) | `enhance-milkyway.md` |
| 히스토그램 | `field-workflow.md` |
| 파노라마 병합 / 스타트레일 / 타임랩스 | new BONUS-01/02/03 pages |

## Content Spec — BONUS-01/02/03

All three explicitly build on already-taught mechanics — **link, don't re-teach** M모드/RAW/화밸/인터벌/스태킹. Keep each page to "concept + basic procedure" only (phase context: don't go deep). FEATURES.md's dependency graph already flags **star trails as conflicting with single-frame Milky Way settings** — must be presented as a clearly separate workflow, not blended.

### BONUS-01: 은하수 파노라마 촬영·병합
- **개념:** 한 프레임에 담기 힘든 넓은 은하수 아치를 여러 장 겹쳐 찍어 하나로 이어 붙이는 기법.
- **기본 절차:** ① 노출 세팅은 단일 프레임 은하수 촬영과 동일 — [노출의 기본](../02-fundamentals/exposure-basics.md) / [500·NPF 룰](../02-fundamentals/500-npf-rule.md) / [RAW와 화이트밸런스](../02-fundamentals/raw-and-wb.md) 그대로 재사용. ② 인접한 프레임끼리 30~50% 겹치도록 촬영(하늘 먼저 한 줄, 그다음 전경 줄 — 또는 격자로). ③ 프레임 사이 노출·화밸·초점을 바꾸지 않는다(M모드 + 수동 화밸이 이미 이를 보장). ④ 병합 소프트웨어: 무료 — Microsoft ICE(Windows) 또는 Hugin(Win/Mac/Linux); 유료 — PTGui Pro(업계 표준); 이미 Lightroom을 쓰고 있다면 Photomerge도 가능하나 전문 파노라마 툴보다 옵션이 적음. ⑤ 병합 결과를 [RAW 현상 기본](../05-postprocessing/raw-develop.md) 순서로 후보정.
- **흔한 실수:** 겹침이 부족하면 아치가 납작해 보이거나 이음매가 어긋남 — 30% 이상 겹침 확보가 핵심.

### BONUS-02: 스타트레일(별궤적) 촬영·합성
- **개념:** 별의 일주운동을 궤적으로 남기는 기법. 단일 장노출이 아니라 **짧은 노출을 아주 많이 연속 촬영**해 나중에 합성한다 — 노이즈가 훨씬 적고 배터리 부담도 분산된다. ⚠️ 이 책의 기본 은하수 세팅(단일 프레임 15~20초)과는 촬영 전략 자체가 다르므로 섞어 쓰지 않는다.
- **기본 절차:** ① [인터벌 타이머](../01-gear/accessories.md)로 짧은 간격 없이 연속 촬영 설정(예: 20~30초 노출을 프레임 사이 텀 없이 수십~수백 장). ② 카메라 내 장노출 노이즈 감소(Long Exposure NR) 기능은 꺼둔다 — 켜두면 프레임 사이 공백이 생겨 궤적이 끊긴다. ③ ISO·조리개·셔터·화밸을 프레임 전체에서 고정(M모드 + 수동 화밸 재사용). ④ 구도: 북극성(또는 남반구는 남쪽 천구극) 방향이면 동심원 궤적, 다른 방향이면 사선 궤적 — 전경 실루엣을 함께 넣는다. ⑤ 합성 소프트웨어: **StarStaX**(무료, Windows+Mac 모두 지원 — 이 책이 이미 쓰는 Sequator(Win 전용)/Starry Landscape Stacker(Mac 전용, 은하수 코어용)와는 다른 목적의 별도 도구). Lighten 블렌드 모드로 합성하고, gap-filling 옵션으로 프레임 사이 미세한 끊김을 메운다.
- **배터리/저장공간:** 장시간 연속 촬영이므로 보조배터리(파워뱅크)·여유 메모리카드를 미리 확인 — [필수 액세서리 & 앱](../01-gear/accessories.md) 참고.

### BONUS-03: 밤하늘 타임랩스
- **개념:** 인터벌로 찍은 사진 시퀀스를 이어 붙여 하늘이 움직이는 영상으로 만드는 기법.
- **기본 절차:** ① [인터벌 타이머](../01-gear/accessories.md)로 재생 시 부드러운 움직임이 나오도록 간격 설정(예: 20~30초 간격으로 1~2시간). ② M모드 + 수동 화밸을 프레임 전체에서 고정 — 자동 모드를 쓰면 프레임마다 밝기가 튀어 재생 시 **깜빡임(플리커)**이 생긴다; 이 책이 이미 [노출의 기본](../02-fundamentals/exposure-basics.md)/[RAW와 화이트밸런스](../02-fundamentals/raw-and-wb.md)에서 M모드·수동 화밸을 가르치는 이유가 여기서도 그대로 적용된다. ③ 모든 프레임에 동일한 RAW 현상 설정을 일괄 적용(darktable/Lightroom의 "설정 복사·붙여넣기" 또는 "동기화" 기능) — [RAW 현상 기본](../05-postprocessing/raw-develop.md)의 순서를 배치로 적용한다고 생각하면 된다. ④ 영상으로 조립: Lightroom 슬라이드쇼 내보내기, 또는 무료 도구인 ffmpeg으로 이미지 시퀀스를 영상으로 변환. ⑤ 더 정교한 디플리커가 필요하면 LRTimelapse(유료, Lightroom 연동, 업계 표준)를 선택 사항으로 언급.
- **배터리/저장공간:** 스타트레일과 동일하게 장시간 촬영이므로 파워뱅크·여유 저장공간 확인.

## Don't Hand-Roll

| Problem | Don't | Do Instead | Why |
|---|---|---|---|
| Verifying "print-friendly" REF-01 | Write custom `@media print` CSS or an mdBook preprocessor | Rely on mdBook default theme's built-in `css/print.css` (already active on every page) + dense content design | Zero added tooling; matches STACK.md's existing decision to use mdBook's default theme with no preprocessors; PROJECT.md explicitly scopes out "인쇄용 실물 책 제작" |
| Checking for broken internal links before deploy | Add `mdbook-linkcheck` (new Rust binary dependency in CI) | `mdbook build src` (catches SUMMARY-level missing files) + a manual grep pass for `](../` / `](0` relative link targets, same lightweight process Phase 5 already used ("mdbook build src green") | mdBook build does NOT validate arbitrary prose cross-links (only SUMMARY.md entries), but adding a new CI dependency for one final phase is disproportionate to a ~26-page content book; the existing manual-grep pattern has worked for 5 prior phases |
| Star-trail stacking tool choice | Force readers into the existing Sequator(Win)/Starry Landscape Stacker(Mac) split (that's for Milky Way core stacking) | **StarStaX** (free, runs on both Windows and Mac) | Avoids introducing a third OS-split tool; one tool covers both platforms for this specific technique |

## Common Pitfalls

### Pitfall 1: REF pages re-explaining instead of linking
**What goes wrong:** REF-01's cheat sheet re-derives *why* ISO 1600–3200 or re-explains the focusing method in prose, ballooning what should be a 1-page reference into a second copy of 4 chapters.
**How to avoid:** Every value in REF-01/02/03/04 must be copy-value + link-to-source, never re-explained reasoning. This is the same discipline Phase 5 already enforced for the core-altitude formula (owned once by `overview.md`, cited elsewhere).

### Pitfall 2: BONUS pages blending star-trail settings into the core Milky Way workflow
**What goes wrong:** A reader treats BONUS-02's "shoot continuously, LENR off" advice as a replacement for the book's main 15–20s single-frame settings, and applies it on a night meant for a normal Milky Way shot (or vice versa).
**How to avoid:** BONUS-02 opens with an explicit ⚠️ callout (drafted above) stating this is a different capture strategy from the rest of the book, per FEATURES.md's explicit dependency-graph warning ("conflicts (partially) with core Milky Way single-frame settings").

### Pitfall 3: Forgetting the 3 cross-references when renaming `06-appendix/` → `07-appendix/`
**What goes wrong:** `01-gear/camera-lens.md` (2 links) and `02-fundamentals/500-npf-rule.md` (1 link) still point at `../06-appendix/camera-lens-picks.md` after the folder is renamed, producing 3 dead links site-wide.
**How to avoid:** `git mv src/06-appendix src/07-appendix`, then grep-fix these exact 3 lines (paths given above) before running `mdbook build src` — a 404 in the built output for any of these would be caught by even a cursory local build+click-through.

### Pitfall 4: Treating "인쇄용" as a request for new build tooling
**What goes wrong:** Time gets spent researching/adding a dedicated print stylesheet or PDF-export preprocessor for REF-01, when mdBook already handles this per-page via its default theme, and PROJECT.md has explicitly scoped out physical book production.
**How to avoid:** Confirm mdBook's default `css/print.css` is active (it is, per `book.toml`'s use of the unmodified default theme) and spend the effort on making REF-01's *content* dense/scannable instead.

## Plan Structure Recommendation

**Not fully autonomous** — the final task should end in a human deploy-verify checkpoint (see below), same posture as Phase 1's 01-05.

**Recommended: 1 plan, 3 sequential tasks** (no parallel waves — every task edits `SUMMARY.md`, so parallel agents would conflict on that file):

- **Task 1 — REF-01~04 (4 pages in `07-appendix/`).** Also do the `06-appendix/` → `07-appendix/` rename + fix the 3 cross-references (Pitfall 3) here, since REF pages live in that folder anyway.
- **Task 2 — BONUS-01~03 (3 pages in new `06-bonus/`).** Independent content from Task 1's appendix pages; only overlaps on the final SUMMARY edit.
- **Task 3 — SUMMARY.md restructure + deploy verification.** Insert `# 보너스 기법` section (3 links) + flip `# 부록`'s 4 draft placeholders to real `07-appendix/` links + update the "카메라·렌즈 추천 목록" link's folder. Run `mdbook build src` locally (must exit 0), grep for any remaining `06-appendix` references (should be zero) and any empty `[...]()`  SUMMARY links (should be zero). Commit + push, let `.github/workflows/mdbook.yml` rebuild `docs/`. **Then: human deploy-verify checkpoint** — open the live GitHub Pages URL, confirm the full TOC (all parts including new 보너스 기법 + completed 부록) renders and navigates without 404s or broken Korean rendering, same shape as Phase 1's 01-05 approval step. This is the milestone's closing gate.

This mirrors the 1-plan/2–3-task shape every prior phase used, sized up slightly (3 tasks vs. 2–3) for the larger content volume (7 new pages vs. 3–4 in prior phases) and the added folder-rename housekeeping.

## Open Questions

1. **Folder rename (`06-appendix` → `07-appendix`) vs. zero-churn alternative (`07-bonus` after 부록)**
   - What we know: rename costs exactly 3 link fixes + 1 `git mv`, verified by grep; it produces a TOC order that reads as a proper book (content → bonus techniques → back-matter reference).
   - What's unclear: whether the project's stated "general guide, minimize churn" instinct should override a purely presentational preference here.
   - Recommendation: do the rename (primary recommendation above), but this is cheap enough to flip either way — flagging explicitly per phase context's request.

2. **Human deploy-verify checkpoint: required or optional?**
   - What we know: Phase 1 did exactly this (01-05) for the same repo/Pages setup and the user approved it; success criterion 3's wording ("배포된 사이트에서...") mirrors that phase's language; this is the terminal phase of the milestone.
   - What's unclear: whether the user considers Phase 1's checkpoint sufficient precedent to skip re-verifying (the Pages mechanism itself hasn't changed, only content), or wants one more look given this closes the whole milestone.
   - Recommendation: include it, but keep it lightweight — it's not re-verifying the deploy *mechanism* (already proven working), just a final content/TOC sanity check on the live URL. Flagging per phase context's explicit request to surface this decision.

3. **REF-01 exact print length**
   - What we know: PROJECT.md scopes out physical book production, so "one page" is aspirational/best-effort, not a hard constraint requiring layout tooling.
   - What's unclear: whether compiling all 5 proposed sections (시작 세팅값/초점 5단계/워크플로 체크박스/오늘 찍을 수 있나/문제해결) fits one printed A4 page in mdBook's default theme typography, or spills to 2.
   - Recommendation: don't block on this — if it renders as ~1.5–2 printed pages that's still a fine "cheat sheet," and no reader-facing requirement demands exactly one physical sheet.

## Sources

### Primary (HIGH confidence)
- `src/SUMMARY.md`, all 19 existing chapter files under `src/01-gear/`, `src/02-fundamentals/`, `src/03-practice/`, `src/05-postprocessing/`, `src/06-appendix/camera-lens-picks.md` — read in full for content-mapping and cross-reference inventory.
- `.planning/ROADMAP.md` (Phase 6 section), `.planning/REQUIREMENTS.md` (REF-01~05, BONUS-01~03 exact wording), `.planning/PROJECT.md` (explicit "인쇄용 실물 책 제작" out-of-scope line), `.planning/STATE.md` (confirms REF-05 already done via 01-02 note, confirms Phase 1's 01-05 human deploy-checkpoint precedent and its approval).
- `.github/workflows/mdbook.yml`, `src/book.toml`, `src/theme/custom.css` — confirms CI auto-rebuild pattern and default (unmodified) mdBook theme in use.
- `.planning/research/STACK.md` — confirms mdBook 0.4.4x + default theme decision (Phase 1), Sequator/Starry Landscape Stacker/darktable/Lightroom recommendations already baked into `stacking.md`/`raw-develop.md`.
- `.planning/research/FEATURES.md` — confirms panorama/star-trails/timelapse were flagged v2/bonus from the start, and the explicit dependency-graph warning that star trails "conflicts (partially)" with core Milky Way single-frame settings (Pitfall 2 above).
- `.planning/phases/05-몽골-여행지별-촬영-가이드/05-RESEARCH.md` — precedent/pattern reference for this RESEARCH.md's structure and for the "1 plan, few tasks, no parallel waves when SUMMARY.md is touched repeatedly" shape.
- Grep verification: `grep -rn "06-appendix" src/` → confirmed exactly 3 cross-reference lines exist (SUMMARY.md:46, camera-lens.md:3,51, 500-npf-rule.md:19).

### Secondary (MEDIUM confidence)
- WebSearch: "star trail stacking software 2026" → StarStaX (free, Win+Mac) confirmed as the standard cross-platform star-trail stacker, distinct from Sequator/Starry Landscape Stacker's Milky-Way-core-stacking purpose. [Sky at Night Magazine](https://www.skyatnightmagazine.com/astrophotography/star-trails-software-sequator), [Capture the Atlas star trails guide](https://capturetheatlas.com/star-trails-photography-guide/), [AstroBackyard stacking software guide](https://astrobackyard.com/astrophotography-image-stacking-software/)
- WebSearch: "milky way panorama stitching software 2026" → Microsoft ICE (free) / Hugin (free, cross-platform) / PTGui Pro (paid, industry standard) confirmed as current panorama-stitching options; Lightroom/Photoshop Photomerge noted as usable-but-limited if already in that ecosystem. [PhotoWorkout panorama software roundup](https://www.photoworkout.com/best-panorama-stitching-software/), [Capture the Atlas Milky Way panorama guide](https://capturetheatlas.com/how-to-shoot-milky-way-panorama/)
- WebSearch: "timelapse deflicker software 2026" → LRTimelapse confirmed as the paid/industry-standard deflicker tool (Lightroom-integrated); ffmpeg confirmed as a free video-assembly option; no strong free dedicated deflicker tool found (noted as a real gap, kept the bonus page's software mention brief/optional accordingly). [LRTimelapse official](https://lrtimelapse.com/), [timelapse.org deflicker software roundup](https://timelapse.org/deflicker-timelapse-software/)
- WebSearch: mdBook `print.css`/`index.hbs` behavior → confirmed mdBook's default theme ships a `print.css` linked with `media="print"` that applies per-page (not just an aggregate print view), supporting the "no custom print tooling needed" recommendation. [mdBook Theme docs](https://rust-lang.github.io/mdBook/format/theme/index.html)

## Metadata

**Confidence breakdown:**
- File inventory / content-mapping for REF-01~04: HIGH — every source chapter read in full this session, mapping is direct extraction not inference.
- SUMMARY/folder restructure plan: HIGH — grep-verified exact cross-reference count (3), directly follows Phase 5's established "surgical flip" precedent.
- Bonus-technique tool recommendations (StarStaX, ICE/Hugin, LRTimelapse/ffmpeg): MEDIUM — fresh WebSearch this session (not in original STACK.md research pass), cross-referenced across 2–3 sources each but not as deeply verified as the original gear/software research.
- Deploy-checkpoint recommendation: MEDIUM — a judgment call grounded in Phase 1 precedent and success-criterion wording, not a fact; explicitly flagged as an open question for the planner/user to confirm.

**Research date:** 2026-07-09
**Valid until:** ~30 days for the bonus-technique software recommendations (fast-moving tool landscape, e.g. Topaz's 2025-10 subscription pivot already noted elsewhere in this project's research); no expiry for the file-structure/content-mapping findings (depend only on this repo's current state).

---
*Research for: Phase 6 (부록 + 보너스 기법 + 배포 검증), MongolPhoto*
*Researched: 2026-07-09*
