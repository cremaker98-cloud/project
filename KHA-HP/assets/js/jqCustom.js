$(function () {
    $(".toggleBtn").click(function () {
        $(".gnb").slideToggle();
    });
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $(".gnb").show();
        } else {
            $(".gnb").hide();
        }
    });

    $(".toggleBtn").click(function (ev) {
        ev.preventDefault();
        $(this).toggleClass("active");
    });

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

    $(".pop_slider, .machine_slider, .deep_slider").bxSlider({
        minSlides: 2, //반응형갯수//
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 235,
        slideMargin: 20,
        touchEnabled: navigator.maxTouchPoints > 0,
        nextText: '<i class="fa-solid fa-angle-right"></i>',
        prevText: '<i class="fa-solid fa-angle-left"></i>',
        pager: false,
    });

    var tabSlide2 = $(".tabMulti_slide").bxSlider({
        minSlides: 2, //반응형갯수//
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 325,
        slideMargin: 30,
        touchEnabled: navigator.maxTouchPoints > 0,
        nextText: '<i class="fa-solid fa-angle-right"></i>',
        prevText: '<i class="fa-solid fa-angle-left"></i>',
        pager: false,
    });

    $(".slide_tab2").tabs({
        activate: function (event, ui) {
            tabSlide2.reloadSlider();
        },
    });

    //animation : Waypoint
    var waypoints = $(".mainLink").waypoint(
        function (direction) {
            $(".mainLink").find(".inner").addClass("mainanimate");
        },
        {
            offset: "75%",
        }
    );
    var waypoints = $(".boxs").waypoint(
        function (direction) {
            $(".boxs").find(".box-inner").addClass("animate");
        },
        {
            offset: "80%",
        }
    );

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
