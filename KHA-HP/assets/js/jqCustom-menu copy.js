$(function () {
    fetch("../assets/inc/header.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the header:", error));

    fetch("../assets/inc/lnb.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("lnb-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the footer:", error));

    fetch("../assets/inc/footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error loading the footer:", error));

    document.addEventListener("click", function (event) {
        const searchBtn = document.querySelector(".searchBtn");
        const dropdownMenu = document.getElementById("dropdownMenu");

        // 1. 클릭된 요소가 '.searchBtn' 버튼이거나 그 자식 요소인지 확인 (토글 기능)
        // event.target.closest('.searchBtn')를 사용하면, 클릭된 요소가 .searchBtn 클래스를 가진
        // 요소이거나 그 안에 있는 요소인지 확인하고 해당 버튼 요소를 반환합니다.
        const clickedSearchBtn = event.target.closest(".searchBtn");

        if (clickedSearchBtn) {
            // 검색 버튼이 클릭되면 메뉴를 토글합니다.
            dropdownMenu.classList.toggle("show");
            // 버튼 클릭 후, 이벤트가 document의 다른 영역으로 전파되는 것을 막아
            // 아래 2번 '닫기' 로직이 즉시 실행되는 것을 방지합니다.
            event.stopPropagation();
        }
        // 2. '.searchBtn'도 아니고 'dropdownMenu' 영역 내부도 아닌지 확인 (닫기 기능)
        // 닫기 기능은 기존 로직을 유지합니다.
        else if (dropdownMenu.classList.contains("show")) {
            // 메뉴가 열려 있고, 클릭된 영역이 드롭다운 메뉴 영역 내부가 아니라면 닫습니다.
            if (!dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove("show");
            }
        }
    });
});
