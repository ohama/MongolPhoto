# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-13)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (v1.1: 몽골 드론 사진으로 범위 확장)
**Current focus:** v1.1 드론 사진 마일스톤 — Phase 7-10 전부 완료. Phase 10(참고 자료/규제) 3개 plan(10-01·10-02·10-03) 병렬 실행 후 전부 완료, 전체 책 mdbook build 최종 그린.

## Current Position

Phase: 10 of 10 (드론 참고 자료) — 완료
Plan: 3 of 3 (10-01·10-02·10-03 모두 완료)
Status: Phase complete — v1.1 드론 사진 마일스톤 전체 완료
Last activity: 2026-07-13 — 10-03-PLAN.md 완료 (drone-galleries.md: 상단 드론촬영 미확인 캐비어트 + 3단 라이선스 구분(Commons CC 재사용 가능·Unsplash 재사용 가능하나 CC0 아님·SkyPixel 감상 전용), 차강소브라가·바가가즈링 촐로 카테고리 부재로 제외; Phase 10 최종 전체 책 mdbook build src 그린 + 드론 참고 자료 3페이지 docs/08-references/ HTML 렌더 확인)

Progress: v1.0 ✅ SHIPPED (Phase 1-6, 10 plans) / v1.1 ✅ [██████████] Phase 7-10 전부 완료

## Performance Metrics

**Velocity (v1.0):**
- Total plans completed: 10
- By phase: Phase 1 (5 plans), Phase 2-6 (1 plan each)

**v1.1:**
- Total plans completed: 10 (07-01, 08-01, 08-02, 08-03, 09-01, 09-02, 09-03, 10-01, 10-02, 10-03)
- Phase 7: 1 plan, ~3 min (순수 구조 재편 + 스텁 — 콘텐츠 없음, 이후 phase 소요시간 참고치로는 부적합)
- Phase 8: 08-01 ~10min (index.md + dji-mini5pro-basics.md + dji-mini5pro-settings.md, 08-02/08-03과 병렬 실행), 08-02 ~15min (composition.md + flight-and-battery.md 콘텐츠 작성, 08-01/08-03과 병렬 실행), 08-03 ~15min (gobi-environment.md + drone-postprocessing.md, 08-01/08-02와 병렬 실행) — Phase 8 전체 3-plan 병렬 실행, 세 plan 모두 완료 후 mdbook build src 통합 검증 그린
- Phase 9: 09-01 ~10min (10-drone-sites/overview.md 허브 + tsagaan-suvarga.md, 09-02/09-03과 병렬 실행), 09-02 병렬 완료(홍고린엘스·욜링암), 09-03 ~12min(바양작·바가가즈링 촐로) — Phase 9 전체 3-plan 병렬 실행으로 명소 5곳 전부 완료
- Phase 10: 10-01 ~10min (drone-mongolia-regulations.md — 확인/미확인 시각 분리 정직성 페이지, 10-02/10-03과 병렬 실행), 10-02 ~6min (drone-gear-tutorials.md — DJI 공식 3건+YouTube 6건(제목 기준)+텍스트 튜토리얼 5건, 10-01/10-03과 병렬 실행), 10-03 ~8min (drone-galleries.md — Commons/Unsplash/SkyPixel 3단 라이선스 구분 갤러리, 10-01/10-02와 병렬 실행 + Phase 10 최종 전체 책 mdbook build src 그린 검증) — Phase 10 전체 3-plan 병렬 실행 완료, v1.1 드론 사진 마일스톤 전체 완료

*Updated after each plan completion*

## Accumulated Context

### Decisions

전체 로그는 PROJECT.md Key Decisions 표. v1.1 로드맵 관련 결정:
- 책을 "몽골 사진 가이드"로 확장 — 1부=드론(DJI Mini 5 Pro), 그 뒤가 기존 은하수 파트. 기존 01-08 폴더는 renumbering 없이 SUMMARY만 재편(09-drone/, 10-drone-sites/ 신설, 드론 참고 자료는 기존 08-references/ 안에 배치).
- Phase 순서: 7(구조/제목, 스텁 먼저 — book.toml create-missing=false 때문) → 8(드론 기초) → 9(명소별 항공) → 10(참고 자료/규제, 검증 시간 최대화 위해 마지막).
- 규제는 "가볍게"(핵심만 간략) — CAAM Part 101 확인 사실만 단정, 250g 면제·국립공원 규정은 전부 "미확인 — 재확인 필요"로 표기.
- 드론 야간 촬영 제외 — 법(주간만) + 하드웨어(Mini 한계) 이중 이유, Phase 8 개요에서 명시.
- (07-01) 책 제목·설명·소개·README를 "몽골 사진 가이드"로 확장하되, 은하수 섹션 본문·예시 사진·이미지 출처 표는 전혀 수정하지 않고 리드/도입 문단·읽는 법·인라인 파트번호만 갱신 — 콘텐츠 재작성은 각 phase(8/9/10)에서.
- (08-03) 저온 배터리 물리·RAW 현상 슬라이더 레시피는 field-prep-and-hazards.md/raw-develop.md로 링크만 걸고 재서술하지 않음 — 드론 델타(보온 습관·38도 방치 금지 / 렌즈 왜곡·먼지 얼룩·낮은 노이즈)만 신규 서술. 바람 개인 한계는 정격 풍속(12m/s)의 절반 이하로 명시.
- (08-01) 규제 요약을 "CAAM Part 101 확인 사실 단정 + 250g 면제·국립공원 규정 미확인 인용구 블록"으로 명확히 분리. 야간 은하수 드론 제외를 법(주간만 비행)+하드웨어(8초 노출 한계) 두 이유로 index.md에 나란히 명시. 노출 설정은 RAW 이론(raw-and-wb.md)을 재서술하지 않고 링크, f/1.8 고정 조리개로 인한 ISO·셔터 2요소 제어만 신규 서술.
- (09-01) 명소별 항공 페이지의 공통 골격 확립: 도입(한 문장 주제) → GPS/공통이론은 04-mongolia·09-drone 링크로만 재사용(재기입 금지) → 지형 특화 항공 구도 → 지형 특화 위험 → 고비 공통 환경 링크. 국립공원 캐비어트는 욜링암·홍고린엘스를 명시 지목하되 특정 허가비/절차는 지어내지 않고 "현지 재확인"으로만 안내. 지상 은하수 콘텐츠(코어 방위각·남중 시각)는 항공 페이지에 전혀 가져오지 않음.
- (09-02) 국립공원(고비 구르왕사이한) 영역에 걸친 홍고린엘스·욜링암 두 페이지 모두에 "미확인 — 재확인" 캐비어트를 각 페이지 내부에 독립적으로 배치(한쪽이 다른 쪽 링크로 대체되지 않도록) — 정직성 하드 제약(성공기준 3) 검증에서 가장 잦은 누락 지점이라 09-01 골격을 그대로 따르되 캐비어트 중복 배치를 의도적으로 유지.
- (09-03) 바가가즈링 촐로 페이지에서 GPS 좌표(46.383°N)를 지형 설명 문장에서도 숫자로 노출하지 않고 "가장 북쪽"이라는 정성적 표현만 사용 — GPS 표 재기입 금지 규칙을 서술 문장까지 일관 적용. 두 페이지 모두 국립공원 밖이지만 관리·보호구역 가능성을 언급한 뒤 overview.md 규제 절로 링크해 규제 문구 유지보수 지점을 하나로 수렴.
- (10-01) drone-mongolia-regulations.md에서 propelrc.com을 "접속 확인 필요" 캐비어트로 남기는 대신 도메인명 자체를 본문에서 완전히 제거(완전 배제) — 미확인 정직성 페이지에서는 실패한 2차 소스를 아예 언급하지 않는 편이 검증(grep)과 정직성 양쪽에 더 안전하다고 판단. 국립공원 특칙은 특별보호구역법 PDF를 "링크 생존만 확인, 내용은 미확인"으로 정확히 한정.
- (10-02) drone-gear-tutorials.md의 YouTube 6건은 oEmbed로 제목·채널·실재만 검증됐으므로 서술을 "~다루는 것으로 보입니다"로 일관 표기해 프레임별 내용을 지어내지 않음. DJI 사양은 09-drone/basics·settings로 역링크만 하고 재나열하지 않음. medium.com/@hayekesteloo(403)는 완전 배제, 동일 저자 내용은 dronexl.co 링크로 대체.
- (10-03) drone-galleries.md는 차강소브라가·바가가즈링 촐로를 Commons 카테고리 부재(조사로 확인된 사실)를 이유로 명시적으로 제외 — 카테고리를 지어내지 않음. Commons 개별 파일 4건은 카테고리 단위가 아니라 파일별 정확한 라이선스(CC BY 2.0/CC BY-SA 2.0/CC BY-SA 3.0)+촬영자를 표로 병기. Unsplash License는 CC0와 명확히 구분(재판매·경쟁서비스 수집 금지 명시)하고, SkyPixel은 "재사용 불가·각 작가 저작권"을 굵게 강조해 재사용 가능 두 절과 시각적으로 분리. Phase 10 마지막 plan으로서 전체 책 mdbook build 최종 그린 + 드론 참고 자료 3페이지 HTML 렌더까지 함께 검증 완료.

### Pending Todos

[From .planning/todos/pending/ — ideas captured during sessions]

None yet.

### Blockers/Concerns

- **Phase 10 (규제) 검증**: (10-01 완료로 갱신) CAAM Part 102는 이번 조사에서 텍스트 추출·독해 완료했으나 등록비/처리기간/250g 면제 조항은 여전히 미확인. 국립공원(욜링암·홍고린엘스) 드론 정책 출처는 특별보호구역법 PDF 생존만 확인, 내용은 여전히 미확인 — drone-mongolia-regulations.md에 "미확인" 프레이밍으로 정직하게 출간 완료.
- 몽골 출발일(8/13) 전 완결 목표 — 날짜 게이트는 아니지만 타임라인 인지 필요.

## Session Continuity

Last session: 2026-07-13
Stopped at: Phase 10 (드론 참고 자료) 진행 중 — 10-01(drone-mongolia-regulations.md, 확인/미확인 시각 분리 완료) 완료, 10-02(DJI 사양·튜토리얼)도 병렬로 완료. 10-03(항공사진 갤러리) 진행 중일 수 있음. 각 plan 단위로 `mdbook build src` exit 0 확인. 다음: 10-03까지 모두 완료되면 Phase 10 전체 mdbook build 재검증.
Resume file: None
