$(function () {
    // 1. 헤더 (header.html) 로드 및 GNB 메뉴 스크립트 실행 (순서 보장)
    fetch("../assets/inc/header.html")
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

    fetch("../assets/inc/lnb-info.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("lnb-info-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the lnb:", error));

    fetch("../assets/inc/lnb-about.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("lnb-about-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the lnb:", error));

    fetch("../assets/inc/lnb-sale.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("lnb-sale-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the lnb:", error));

    fetch("../assets/inc/lnb-notice.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("lnb-notice-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the lnb:", error));

    fetch("../assets/inc/lnb-member.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("lnb-member-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the lnb:", error));

    fetch("../assets/inc/link-buttons.html")
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

    // ************************************************
    // ** 5. GNB 메뉴 토글 함수 정의 **
    // ************************************************
    function initializeGnbMenu() {
        const toggleBtnList = document.querySelectorAll(".toggleBtn");
        const menuCloseBtnList = document.querySelectorAll(".menuClose");
        const gnbMenu = document.querySelector(".gnbMenu");
        const body = document.body;

        // 헤더 로딩 후, GNB 메뉴 존재 여부 재확인
        if (!gnbMenu) {
            console.warn("경고: 헤더 로딩 후에도 .gnbMenu 요소를 찾을 수 없어 메뉴 토글 기능이 작동하지 않습니다.");
            return;
        }

        function openMenu(e) {
            if (e) e.preventDefault();
            gnbMenu.classList.add("menuOpen");
            body.classList.add("no-scroll");
            console.log("GNB 메뉴 열림");
        }

        function closeMenu(e) {
            if (e) e.preventDefault();
            gnbMenu.classList.remove("menuOpen");
            body.classList.remove("no-scroll");
            console.log("GNB 메뉴 닫힘");
        }

        // 이벤트 리스너 연결
        toggleBtnList.forEach((btn) => {
            btn.addEventListener("click", openMenu);
        });

        menuCloseBtnList.forEach((btn) => {
            btn.addEventListener("click", closeMenu);
        });
    }

    // 6. 검색 드롭다운 토글 및 닫기 로직 (기존 유지)
    document.addEventListener("click", function (event) {
        const dropdownMenu = document.getElementById("dropdownMenu");

        if (!dropdownMenu) return; // dropdownMenu가 없으면 로직 실행 안함

        const clickedSearchBtn = event.target.closest(".searchBtn");

        if (clickedSearchBtn) {
            dropdownMenu.classList.toggle("show");
            event.stopPropagation();
        } else if (dropdownMenu.classList.contains("show")) {
            if (!dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove("show");
            }
        }
    });
});
