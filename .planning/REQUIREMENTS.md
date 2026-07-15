# Requirements: v1.4 드론 영상 (촬영 + CapCut 편집)

**Milestone goal:** 2부 · 드론 사진에 "드론 영상 촬영" 파트를 신설하고, 영상 편집을 CapCut 기준으로 상세한 예제 편집과 함께 담아, 초보자가 드론 영상을 찍고 CapCut으로 완성할 수 있게 한다.

**핵심 정직성 원칙(승계):** DJI Mini 5 Pro 영상 사양·CapCut 요금/기능은 공식 페이지로 검증, 미확인은 "미확인"·링크 표기(숫자 조작 금지) / CapCut·DJI UI 스크린샷은 재호스팅 금지("저자 직접 캡처 예정") / 예제 편집은 실촬영본 부재로 대표 시나리오임을 정직 표기(트립 8/13 후 실영상 교체) / 음악·소재는 공개 게시 시 라이선스 안전한 것만 안내 / 기존 드론 규제(주간 한정 등)는 재도출 없이 승계·링크.

---

## v1.4 Requirements (이번 마일스톤)

### 구조 (STRUCT)

- [ ] **STRUCT-01**: 독자가 목차 2부 · 드론 사진에서 "드론 영상 촬영"과 "드론 영상 편집(CapCut)"을 본다 — 기존 `video-editing.md` 스텁·"드론 사진·영상 보정" 그룹을 사진/영상이 명확히 구분되게 재편.
- [ ] **STRUCT-02**: 새 파트의 모든 챕터가 스텁으로 존재해 `mdbook build`(create-missing=false)가 깨지지 않고, introduction/README의 드론 파트 소개가 영상 포함으로 갱신된다.

### 드론 영상 촬영 (VSHOOT)

- [ ] **VSHOOT-01**: 독자가 DJI Mini 5 Pro 영상 설정(해상도·프레임레이트, D-Log M vs Normal, ND 필터와 180도 셔터 규칙, 화이트밸런스·노출 고정)을 왜 그렇게 하는지와 함께 이해하고 설정한다.
- [ ] **VSHOOT-02**: 독자가 대표 시네마틱 움직임 샷(리빌·오빗·플라이오버·탑다운·드로니 등)을 부드럽게 촬영하는 법과, 편집을 염두에 둔 시퀀스(다양한 길이·앵글) 확보를 이해하며, 고비 환경·주간 규제(기존 [드론 규제](../08-references/drone-mongolia-regulations.md) 승계)를 지킨다.

### CapCut 편집 (VEDIT)

- [ ] **VEDIT-01**: 독자가 CapCut 편집 워크플로(가져오기 → 컷/트림 → 순서 → 속도(슬로모/램프) → 안정화 → 색보정 → 음악 → 자막 → 전환 → 내보내기)를 단계별로 따라 하고, CapCut 무료/Pro 구분·워터마크·내보내기 설정을 안다(대안 DaVinci Resolve 간단 언급).
- [ ] **VEDIT-02**: 독자가 D-Log M 색보정(LUT 적용 또는 Log→Rec709 변환)과 음악 라이선스(CapCut 내장 음원을 유튜브 등 외부에 올릴 때의 저작권 위험·안전한 음원 선택)를 정직하게 이해한다.

### 상세 예제 편집 (VEXAMPLE)

- [ ] **VEXAMPLE-01**: 독자가 대표 고비 드론 클립 시나리오로 약 45~60초 영상을 스토리보드(샷·길이·움직임·이유)부터 CapCut 스텝바이스텝(컷·속도 램프 1회·비트 싱크 컷 1회·색보정·음악·자막·내보내기)까지 상세히 따라 한다(실촬영본 부재 → 대표 시나리오·정지 프레임으로 시연, 트립 후 교체 정직 표기).

### 참고·크레딧 (VREF)

- [ ] **VREF-01**: 새 파트에 쓴 DJI/CapCut 검증 링크, 무료(라이선스 안전) 음원·예시 영상 소스, 예시 정지 프레임 출처·라이선스 크레딧을 검증된 것만 정리한다(미확인 표기, 기존 08-references 드론 자료 재사용).

---

## Future Requirements (이후 마일스톤)

- 저자 실제 고비 드론 영상으로 예제 편집·정지 프레임 교체 및 실제 CapCut/DJI 화면 캡처 삽입 (트립 8/13 이후)
- FPV·야간 영상·고급 컬러그레이딩 — 범위 밖(규제·초보자 범위)
- 영어판 / 인쇄용 PDF

## Out of Scope (이번 마일스톤 제외)

- 야간 드론 영상 — 주간 한정 규제 + Mini 하드웨어 한계(기존 드론 파트 결정 승계)
- FPV·멀티캠·복잡한 키프레임 애니메이션·헐리우드급 컬러그레이딩 — 초보자 범위 밖
- 실제 영상 파일을 GitHub Pages에 자체 호스팅 임베드 — 용량·라이선스 부담, 스토리보드·정지 프레임·텍스트로 대체
- CapCut/DJI UI 스크린샷 재호스팅 — 저작권, "저자 직접 캡처 예정"으로 대체
- 미검증 DJI 영상 사양·CapCut 요금 단정 — 공식 링크·미확인 표기로 대체

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| STRUCT-01 | Phase 20 | Pending |
| STRUCT-02 | Phase 20 | Pending |
| VSHOOT-01 | Phase 21 | Pending |
| VSHOOT-02 | Phase 21 | Pending |
| VEDIT-01 | Phase 22 | Pending |
| VEDIT-02 | Phase 22 | Pending |
| VEXAMPLE-01 | Phase 23 | Pending |
| VREF-01 | Phase 23 | Pending |

**Coverage:** 8/8 v1.4 requirements mapped ✓ — no orphans, no duplicates.
