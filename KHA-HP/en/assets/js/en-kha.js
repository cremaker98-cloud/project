class MobileNavigation {
    constructor() {
        // 요소 선택
        this.btn = document.querySelector(".mo-menu-btn");
        this.navWrapper = document.querySelector(".mo-gnb-wrapper");
        this.overlay = document.querySelector(".dim-overlay");

        // 상태 플래그
        this.isOpen = false;

        // 초기화 실행
        if (this.btn && this.navWrapper && this.overlay) {
            this.init();
        }
    }

    init() {
        // 이벤트 리스너 바인딩
        this.btn.addEventListener("click", () => this.toggle());
        this.overlay.addEventListener("click", () => this.close());

        // 창 크기 조절 시 메뉴 닫기 (PC로 돌아갈 경우 대비)
        window.addEventListener("resize", () => {
            if (window.innerWidth > 1024 && this.isOpen) {
                this.close();
            }
        });
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.isOpen = true;
        this.btn.classList.add("active"); // 햄버거 버튼 X 모양 변환
        this.navWrapper.classList.add("active"); // 메뉴 슬라이드 다운
        this.overlay.classList.add("active"); // 배경 딤 처리
        document.body.style.overflow = "hidden"; // 스크롤 방지
    }

    close() {
        this.isOpen = false;
        this.btn.classList.remove("active");
        this.navWrapper.classList.remove("active");
        this.overlay.classList.remove("active");
        document.body.style.removeProperty("overflow"); // 스크롤 복구
    }
}

// DOM 로드 후 실행
document.addEventListener("DOMContentLoaded", () => {
    new MobileNavigation();
});
