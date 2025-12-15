$(function () {
    // 1. 헤더 (header.html) 로드 및 GNB 메뉴 스크립트 실행 (순서 보장)
    fetch("assets/inc/header.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            // 헤더 HTML을 DOM에 삽입
            document.getElementById("header-placeholder").innerHTML = data;

            // ************************************************
            // ** 2. GNB 메뉴 토글 스크립트 실행 **
            // 헤더 로딩이 완료된 후 .gnbMenu가 DOM에 존재함을 보장합니다.
            // ************************************************
            initializeGnbMenu();
        })
        .catch((error) => console.error("Error loading the header:", error));

    fetch("/inc/lnb-info.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("lnb-info-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the lnb:", error));

    fetch("assets/inc/lnb-about.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("lnb-about-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the lnb:", error));

    fetch("assets/inc/lnb-sale.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("lnb-sale-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the lnb:", error));

    fetch("assets/inc/lnb-notice.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("lnb-notice-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the lnb:", error));

    fetch("assets/inc/lnb-member.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("lnb-member-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the lnb:", error));

    fetch("assets/inc/link-buttons.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("link-buttons-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the lnb:", error));

    // 4. 푸터 (footer.html) 로드 (header 로드와는 독립적으로 실행)
    fetch("../assets/inc/footer.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the footer:", error));
});
