// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="introduction.html">소개</a></span></li><li class="chapter-item "><li class="part-title">1부 · 여행 사진</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/index.html"><strong aria-hidden="true">1.</strong> 여행 사진 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/1-shooting/index.html"><strong aria-hidden="true">2.</strong> 여행 사진 촬영</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/1-shooting/exposure-basics.html"><strong aria-hidden="true">2.1.</strong> 노출의 기본 — 3요소 (노출 삼각형)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/1-shooting/raw-and-wb.html"><strong aria-hidden="true">2.2.</strong> RAW와 화이트밸런스</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/1-shooting/camera-settings.html"><strong aria-hidden="true">2.3.</strong> Canon R7 카메라 설정 · 렌즈 선택</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/1-shooting/av-mode-auto-iso.html"><strong aria-hidden="true">2.4.</strong> Av 모드 · Auto ISO · 최소 셔터속도 완전 정리</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/1-shooting/setup-and-custom-modes.html"><strong aria-hidden="true">2.5.</strong> 출발 전 R7 세팅 — 메뉴 · 버튼 · 커스텀 모드</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/1-shooting/situational-settings.html"><strong aria-hidden="true">2.6.</strong> 상황별 카메라 세팅 (시간대·날씨)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/1-shooting/composition-and-light.html"><strong aria-hidden="true">2.7.</strong> 구도와 빛 · 타이밍</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/1-shooting/landscape-and-street.html"><strong aria-hidden="true">2.8.</strong> 풍경과 현장 · 사람</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/2-sites/index.html"><strong aria-hidden="true">3.</strong> 명소별 여행 사진 가이드</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/2-sites/tsagaan-suvarga.html"><strong aria-hidden="true">3.1.</strong> 차강소브라가 (Tsagaan Suvarga)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/2-sites/bayanzag.html"><strong aria-hidden="true">3.2.</strong> 바양작 (Bayanzag)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/2-sites/khongoryn-els.html"><strong aria-hidden="true">3.3.</strong> 홍고린엘스 (Khongoryn Els)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/2-sites/yolyn-am.html"><strong aria-hidden="true">3.4.</strong> 욜링암 (Yolyn Am)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/2-sites/baga-gazriin-chuluu.html"><strong aria-hidden="true">3.5.</strong> 바가가즈링 촐로 (Baga Gazriin Chuluu)</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/3-editing/index.html"><strong aria-hidden="true">4.</strong> 여행 사진 보정 (Lightroom Classic)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/3-editing/lightroom-workflow.html"><strong aria-hidden="true">4.1.</strong> 왜 보정하나 · 비파괴 편집과 카탈로그</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/3-editing/software-comparison.html"><strong aria-hidden="true">4.2.</strong> Lightroom Classic vs 다른 편집 앱</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/3-editing/develop-order.html"><strong aria-hidden="true">4.3.</strong> 필수 보정 순서 (현상 모듈 17단계)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/3-editing/travel-recipes.html"><strong aria-hidden="true">4.4.</strong> 몽골 여행 상황별 보정 레시피</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/3-editing/masking-and-detail.html"><strong aria-hidden="true">4.5.</strong> 국소 보정 — 마스킹 · 디테일 · 노이즈</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/3-editing/panorama-hdr.html"><strong aria-hidden="true">4.6.</strong> 합치기 — 파노라마 · HDR 병합</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/3-editing/shoot-for-edit.html"><strong aria-hidden="true">4.7.</strong> 촬영 시 고려사항 — SW를 염두에 둔 촬영</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/3-editing/credits.html"><strong aria-hidden="true">4.8.</strong> 예시 사진 출처 · 라이선스 · 참고 자료</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/4-references/index.html"><strong aria-hidden="true">5.</strong> 여행 사진 참고 자료</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/4-references/gear-tutorials.html"><strong aria-hidden="true">5.1.</strong> 카메라 사용법·촬영 팁 튜토리얼</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/4-references/galleries.html"><strong aria-hidden="true">5.2.</strong> 여행 사진 예시 갤러리</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-travel/4-references/faq.html"><strong aria-hidden="true">5.3.</strong> 자주 묻는 질문 (FAQ)</a></span></li></ol><li class="chapter-item "><li class="part-title">2부 · 드론 사진·영상</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/index.html"><strong aria-hidden="true">6.</strong> 드론 사진·영상 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/1-photo/index.html"><strong aria-hidden="true">7.</strong> 드론 사진 촬영</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/1-photo/dji-mini5pro-basics.html"><strong aria-hidden="true">7.1.</strong> DJI Mini 5 Pro 기본 조작</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/1-photo/first-flight.html"><strong aria-hidden="true">7.2.</strong> 첫 비행 — 스위치부터 사진 확인까지</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/1-photo/dji-mini5pro-settings.html"><strong aria-hidden="true">7.3.</strong> DJI Mini 5 Pro 카메라 설정</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/1-photo/composition.html"><strong aria-hidden="true">7.4.</strong> 항공 구도의 기초</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/1-photo/flight-and-battery.html"><strong aria-hidden="true">7.5.</strong> 비행 기초와 배터리·RTH 관리</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/1-photo/gobi-environment.html"><strong aria-hidden="true">7.6.</strong> 고비 사막 드론 환경 주의</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/2-sites/index.html"><strong aria-hidden="true">8.</strong> 명소별 드론 촬영 가이드</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/2-sites/tsagaan-suvarga.html"><strong aria-hidden="true">8.1.</strong> 차강소브라가 (Tsagaan Suvarga)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/2-sites/bayanzag.html"><strong aria-hidden="true">8.2.</strong> 바양작 (Bayanzag)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/2-sites/khongoryn-els.html"><strong aria-hidden="true">8.3.</strong> 홍고린엘스 (Khongoryn Els)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/2-sites/yolyn-am.html"><strong aria-hidden="true">8.4.</strong> 욜링암 (Yolyn Am)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/2-sites/baga-gazriin-chuluu.html"><strong aria-hidden="true">8.5.</strong> 바가가즈링 촐로 (Baga Gazriin Chuluu)</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/drone-postprocessing.html"><strong aria-hidden="true">9.</strong> 드론 사진 후보정</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/3-video/index.html"><strong aria-hidden="true">10.</strong> 드론 영상 촬영</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/3-video/video-shooting.html"><strong aria-hidden="true">10.1.</strong> 드론 영상 촬영 기초</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/3-video/video-movements.html"><strong aria-hidden="true">10.2.</strong> 시네마틱 움직임 샷</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/domestic-example.html"><strong aria-hidden="true">11.</strong> 국내 촬영 예제 — 선운사와 서해 바닷가</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/4-capcut/index.html"><strong aria-hidden="true">12.</strong> CapCut 영상 편집</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/4-capcut/capcut-basics.html"><strong aria-hidden="true">12.1.</strong> CapCut 시작하기 · 무료/Pro</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/4-capcut/capcut-cut.html"><strong aria-hidden="true">12.2.</strong> 컷 편집과 순서 · 속도</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/4-capcut/capcut-grade-speed.html"><strong aria-hidden="true">12.3.</strong> 색보정과 음악</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/4-capcut/capcut-export.html"><strong aria-hidden="true">12.4.</strong> 내보내기 설정</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/4-capcut/capcut-storyboard.html"><strong aria-hidden="true">12.5.</strong> 예시 편집 — 고비 드론 스토리보드</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/5-references/index.html"><strong aria-hidden="true">13.</strong> 드론 참고 자료</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/5-references/mongolia-regulations.html"><strong aria-hidden="true">13.1.</strong> 몽골 드론 비행 규제·허가</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/5-references/gear-tutorials.html"><strong aria-hidden="true">13.2.</strong> DJI Mini 5 Pro 사양·튜토리얼</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/5-references/galleries.html"><strong aria-hidden="true">13.3.</strong> 드론 항공사진 예시 갤러리</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-drone/5-references/faq.html"><strong aria-hidden="true">13.4.</strong> 자주 묻는 질문 (FAQ)</a></span></li></ol><li class="chapter-item "><li class="part-title">3부 · 천체사진 (은하수)</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/index.html"><strong aria-hidden="true">14.</strong> 천체사진 (은하수) 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/1-gear/index.html"><strong aria-hidden="true">15.</strong> 장비 가이드</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/1-gear/camera-lens.html"><strong aria-hidden="true">15.1.</strong> 카메라와 렌즈 고르기</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/1-gear/accessories.html"><strong aria-hidden="true">15.2.</strong> 필수 액세서리 · 앱</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/1-gear/checklist.html"><strong aria-hidden="true">15.3.</strong> 출발 전 체크리스트</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/2-fundamentals/index.html"><strong aria-hidden="true">16.</strong> 은하수 촬영 기초</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/2-fundamentals/night-exposure.html"><strong aria-hidden="true">16.1.</strong> 밤 노출 — M모드와 시작값</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/2-fundamentals/500-npf-rule.html"><strong aria-hidden="true">16.2.</strong> 500 / NPF 룰 — 크롭센서 셔터속도 계산</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/2-fundamentals/focusing.html"><strong aria-hidden="true">16.3.</strong> 별에 초점 맞추기</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/2-fundamentals/finding-the-milkyway.html"><strong aria-hidden="true">16.4.</strong> 은하수 찾기와 타이밍</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/2-fundamentals/field-workflow.html"><strong aria-hidden="true">16.5.</strong> 현장 촬영 워크플로</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/3-practice/index.html"><strong aria-hidden="true">17.</strong> 가기 전 연습</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/3-practice/template.html"><strong aria-hidden="true">17.1.</strong> 연습 로그 템플릿</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/3-practice/home-camera-controls.html"><strong aria-hidden="true">17.2.</strong> 카메라 조작·세팅 연습</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/3-practice/home-focus-and-interval.html"><strong aria-hidden="true">17.3.</strong> 초점·구도·인터벌 연습</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/3-practice/home-checklist.html"><strong aria-hidden="true">17.4.</strong> 집 연습 체크리스트</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/3-practice/field-practice.html"><strong aria-hidden="true">17.5.</strong> 실전 연습 — 노출·초점·구도</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/3-practice/field-prep-and-hazards.html"><strong aria-hidden="true">17.6.</strong> 야외 준비와 현장 워크플로 리허설</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/3-practice/field-review.html"><strong aria-hidden="true">17.7.</strong> 야외 연습 결과 점검</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/4-sites/index.html"><strong aria-hidden="true">18.</strong> 명소별 은하수 촬영 가이드</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/4-sites/tsagaan-suvarga.html"><strong aria-hidden="true">18.1.</strong> 차강소브라가 (Tsagaan Suvarga)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/4-sites/bayanzag.html"><strong aria-hidden="true">18.2.</strong> 바양작 (Bayanzag)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/4-sites/khongoryn-els.html"><strong aria-hidden="true">18.3.</strong> 홍고린엘스 (Khongoryn Els)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/4-sites/yolyn-am.html"><strong aria-hidden="true">18.4.</strong> 욜링암 (Yolyn Am)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/4-sites/baga-gazriin-chuluu.html"><strong aria-hidden="true">18.5.</strong> 바가가즈링 촐로 (Baga Gazriin Chuluu)</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/5-postprocessing/index.html"><strong aria-hidden="true">19.</strong> 천체사진 보정 (은하수 후보정)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/5-postprocessing/raw-develop.html"><strong aria-hidden="true">19.1.</strong> RAW 현상 기본</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/5-postprocessing/stacking.html"><strong aria-hidden="true">19.2.</strong> 스태킹으로 노이즈 줄이기</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/5-postprocessing/enhance-milkyway.html"><strong aria-hidden="true">19.3.</strong> 은하수 강조 보정</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/5-postprocessing/before-after.html"><strong aria-hidden="true">19.4.</strong> 전/후 비교로 배우는 후보정</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/6-bonus/index.html"><strong aria-hidden="true">20.</strong> 보너스 기법</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/6-bonus/panorama.html"><strong aria-hidden="true">20.1.</strong> 은하수 파노라마 촬영·병합</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/6-bonus/star-trails.html"><strong aria-hidden="true">20.2.</strong> 스타트레일(별궤적) 촬영·합성</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/6-bonus/timelapse.html"><strong aria-hidden="true">20.3.</strong> 밤하늘 타임랩스</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/7-references/index.html"><strong aria-hidden="true">21.</strong> 천체사진 참고 자료</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/7-references/technique-references.html"><strong aria-hidden="true">21.1.</strong> 촬영 기법 참고 자료</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/7-references/software-references.html"><strong aria-hidden="true">21.2.</strong> 사용 소프트웨어</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/7-references/practice-raw-samples.html"><strong aria-hidden="true">21.3.</strong> 연습용 무료 RAW·샘플</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/7-references/mongolia-astrophotography-links.html"><strong aria-hidden="true">21.4.</strong> 몽골 천체사진 링크 모음</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-astro/7-references/mongolia-travel-info.html"><strong aria-hidden="true">21.5.</strong> 몽골 여행 실무 정보</a></span></li></ol><li class="chapter-item "><li class="part-title">부록</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appendix/camera-lens-picks.html"><strong aria-hidden="true">22.</strong> 카메라 · 렌즈 추천 목록</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appendix/cheat-sheet.html"><strong aria-hidden="true">23.</strong> 현장 치트시트</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appendix/checklists.html"><strong aria-hidden="true">24.</strong> 체크리스트 모음</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appendix/app-software.html"><strong aria-hidden="true">25.</strong> 앱·소프트웨어 가이드</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appendix/glossary.html"><strong aria-hidden="true">26.</strong> 용어 사전</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

