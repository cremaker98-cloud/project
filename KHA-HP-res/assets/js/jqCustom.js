$(function () {
    //Header Fixed
    var $window = $(window),
        $mainHeader = $("header");

    $window.scroll(function () {
        if ($(this).scrollTop() > 30) {
            if (!$mainHeader.hasClass("shrink")) {
                $mainHeader.addClass("shrink");
            }
        } else {
            if ($mainHeader.hasClass("shrink")) {
                $mainHeader.removeClass("shrink");
            }
        }
    });

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
    initializeGnbMenu();
});
