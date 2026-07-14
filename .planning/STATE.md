# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-14)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (v1.1: 드론 사진으로 확장 / v1.2: 여행 사진으로 확장 중)
**Current focus:** v1.2 몽골 여행 사진 — Phase 11, Phase 12 (여행 사진 기초) 완료. 다음: Phase 13 (코스 명소별 여행 사진) 계획.

## Current Position

Phase: 13 of 14 (코스 명소별 여행 사진) — 완료
Plan: 2 of 2 (13-02)
Status: Phase complete
Last activity: 2026-07-14 — 13-02-PLAN.md 완료 (12-travel-sites/khongoryn-els.md: 사구·낙타 특화(능선 실루엣·캐러밴·발자국 리딩라인·리플, 골든아워 긴 그림자, 모래 방진·낙타 동물복지 예절), yolyn-am.md: 슬롯 협곡(12mm 필수)·얼음 계절성·야생 기회성(수염수리·아이벡스·야크 방목), baga-gazriin-chuluu.md: 화강암 기암(아치 프레임 속 프레임·사원터·질감)·최북단 저온·유목민 게르 조우 예절. mdbook build 그린). 13-01과 합쳐 Phase 13(코스 명소별 여행 사진) 전체 완료.

Progress: v1.0 ✅ SHIPPED (Phase 1-6, 10 plans) / v1.1 ✅ SHIPPED (Phase 7-10, 10 plans) / v1.2 🚧 [█████░░░░░] Phase 13/14 완료 (Phase 14 plans TBD)

## Performance Metrics

**Velocity:**
- Total plans completed: 25 (v1.0: 10, v1.1: 10, v1.2: 5)
- v1.2: Phase 11 — 1 plan, ~20 min (순수 구조 재편 + 스텁 — 콘텐츠 없음) / Phase 12 plan 01 — ~25 min (index.md + camera-settings.md, 병렬 실행) / Phase 12 plan 02 — ~25 min (composition-and-light.md + landscape-and-street.md, 병렬 실행) / Phase 13 plan 01 — ~20 min (overview.md + tsagaan-suvarga.md + bayanzag.md, 13-02와 병렬 실행) / Phase 13 plan 02 — ~20 min (khongoryn-els.md + yolyn-am.md + baga-gazriin-chuluu.md, 13-01과 병렬 실행)

**Recent Trend:**
- v1.0/v1.1 완주 실적 기준 — v1.2도 유사 4-phase 구조(v1.1 패턴 재사용), Phase 11이 v1.1 Phase 7과 동일 패턴으로 재검증됨
- Phase 12는 wave 1에서 12-01·12-02가 병렬로 11-travel/ 4개 파일(index/camera-settings/composition-and-light/landscape-and-street)을 파일 단위로 충돌 없이 나눠 완료
- Phase 13도 동일 패턴 — 13-01·13-02가 병렬로 12-travel-sites/ 5개 명소 파일(overview+tsagaan-suvarga+bayanzag / khongoryn-els+yolyn-am+baga-gazriin-chuluu)을 파일 단위로 충돌 없이 나눠 완료, Phase 13 전체 완료

*Updated after each plan completion*

## Accumulated Context

### Decisions

전체 로그는 PROJECT.md Key Decisions 표, 마일스톤별 상세는 `.planning/milestones/`.
v1.2 관련 최근 결정: 여행 파트를 최상단 1부로 배치, 기준 장비 = R7+삼양12mm+RF50mm(보유)+RF-S18-150mm(추천), 참고 사진은 라이선스 확인 시만 임베드.
- (11-01) 기존 4부 "몽골 여행지별 촬영 가이드"를 "5부 · 은하수 명소별 촬영 가이드"로 개칭(신규 여행 파트와 명칭 충돌 회피), 04-mongolia/* 링크 라인은 불변.
- (11-01) introduction.md의 깨진 "사진 준비"(07-appendix/checklists.md, 대상 섹션 미존재) 링크는 유효 대상이 없어 dead link 유지 대신 인라인 평문으로 대체.
- (12-01) M모드(은하수)→Av모드(여행) 전환을 "언런"으로 명시적으로 대비시켜 서술(암시 금지, PITFALL 대응).
- (12-01) 삼양 12mm는 "Canon RF-S 마운트 전용·AF(Linear STM)·방진 O"로 정확 표기, 범용 RF 및 Sony E/Fuji X 동명 렌즈와 구분.
- (12-01) IBIS 스탑 수: R7 일반 "최대 8단"(마케팅, 협응 최적조건)과 RF-S 18-150mm 실측 "최대 7단"(특정 조합)을 서로 다른 조건의 주장으로 한 줄 정리해 자기모순 방지.
- (12-01) 방진 split(바디+12mm만 방진) 반영 — 렌즈 교체 시 센서 먼지 위험 현장관리 callout 추가.
- (12-02) 리딩라인·스케일·골든/블루아워 이론은 09-drone/composition.md 상호참조로 재사용하고, 지상·인물 적용 델타(정오 하드라이트 인물 불리·역광 실루엣·흐림/황사 확산광·명소 방위별 빛)는 자체 서술.
- (12-02) 사람·현지 촬영 에티켓은 2차 관광업계 출처 기반이라 "일반적으로 통용되는 예절/가이드에게 현장 확인"으로 정직 표기, 오보 공물 세부 등 출처 없는 금액·의식은 확정 서술하지 않음.
- (12-02) 인물 동의 원칙을 드론 CAAM "사람·재산 상공 동의" 규정과 별개 규칙이 아니라 하나의 원칙으로 상호 링크.
- (13-01) 명소 페이지는 GPS/이론을 재서술하지 않고 04-mongolia/overview.md·11-travel/*로 링크만 하고 지형 적용 델타만 자체 서술(10-drone-sites 패턴 미러) — 13-02 이후 명소 페이지에도 동일 패턴 적용.
- (13-01) overview.md 스코프 경계 문장은 09-drone/index.md가 아니라 11-travel/index.md를 "여행 사진 개요"로 링크해 이 파트가 여행 파트 소속임을 명확히 함.
- (13-02) 얼음(욜링암)처럼 계절에 따라 있을 수도/없을 수도 있는 요소는 "~할 가능성이 높다"로, 야생동물·낙타·유목민 조우는 "보이면/방목 만나면/조우 가능성"으로 통일해 정직성 표기 수준을 명소 전체에서 일관되게 유지(야크도 수염수리·아이벡스와 동일한 기회성 등급).

### Pending Todos

None.

### Blockers/Concerns

- 여행 사진 참고 자료(Phase 14)의 이미지 라이선스 검증은 건별 확인이 필요 — 시간 배분 필요.
- 몽골 사람·현지 예절 콘텐츠는 2차 관광업계 출처 기반(MEDIUM confidence) — "일반적으로 통용" 정직 표기 유지.
- 실제 몽골 여행/드론/은하수 촬영본으로 명소 갤러리·전후 비교를 채우려면 저자 촬영이 필요(현재는 CC 예시 사진).
- 몽골 출발일 2026-08-13 — 그 전에 v1.2 콘텐츠 완결 필요.

## Session Continuity

Last session: 2026-07-14
Stopped at: 13-02-PLAN.md 완료 — 12-travel-sites/khongoryn-els.md(사구·낙타 특화), yolyn-am.md(슬롯 협곡·얼음 계절성·야생 기회성 특화), baga-gazriin-chuluu.md(화강암 기암·최북단 저온·유목민 게르 조우 예절 특화) 작성, `mdbook build src` exit 0 확인. 13-01과 합쳐 Phase 13(코스 명소별 여행 사진) 전체 완료. 다음: `/gsd:plan-phase 14` (여행 참고 자료 + 최종 검증).
Resume file: None
</content>
