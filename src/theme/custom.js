// 사이드바 제거(v1.4) 대응 — 모든 페이지 상단에 '목차(홈)'로 가는 링크를 제공한다.
// mdBook이 각 페이지에 정의하는 전역 path_to_root(예: "../../")로 루트를 계산한다.
(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var root = (typeof path_to_root !== "undefined" && path_to_root != null) ? path_to_root : "";
    var home = root + "index.html";

    var HOME_SVG =
      '<span class="fa-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" aria-hidden="true">' +
      '<path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg></span>';

    // 1) 상단 왼쪽 버튼 영역 맨 앞에 홈 아이콘 버튼
    var left = document.querySelector("#mdbook-menu-bar .left-buttons, .menu-bar .left-buttons");
    if (left && !document.getElementById("mdbook-home-button")) {
      var btn = document.createElement("a");
      btn.id = "mdbook-home-button";
      btn.className = "icon-button";
      btn.href = home;
      btn.title = "목차(홈)로";
      btn.setAttribute("aria-label", "목차(홈)로");
      btn.innerHTML = HOME_SVG;
      left.insertBefore(btn, left.firstChild);
    }

    // 2) 가운데 책 제목도 홈으로 가는 링크로
    var title = document.querySelector("#mdbook-menu-bar .menu-title, .menu-bar .menu-title");
    if (title && !title.querySelector("a.menu-title-link")) {
      var txt = title.textContent.trim();
      title.textContent = "";
      var link = document.createElement("a");
      link.href = home;
      link.className = "menu-title-link";
      link.textContent = txt;
      title.appendChild(link);
    }
  });
})();
