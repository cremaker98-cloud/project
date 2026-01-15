class ComponentLoader {
    constructor() {
        this.init();
    }

    async init() {
        const allElements = document.querySelectorAll("[data-include-path]");

        for (const el of allElements) {
            const path = el.getAttribute("data-include-path");
            if (path) {
                try {
                    const response = await fetch(path);
                    if (!response.ok) throw new Error("Network response was not ok");
                    const html = await response.text();

                    // 1. 해당 요소 안에 HTML 삽입
                    // el.innerHTML = html;

                    // 2. (추천) 해당 요소를 불러온 HTML로 완전히 교체 (DOM이 깔끔해짐)
                    el.outerHTML = html;
                } catch (error) {
                    console.error(`파일을 불러오는데 실패했습니다: ${path}`, error);
                }
            }
        }
    }
}

class ModalManager {
    constructor() {
        this.init();
    }

    init() {
        // [클릭 이벤트 리스너]
        document.addEventListener("click", (e) => {
            // 1. 열기 버튼 클릭 감지 (data-modal-target 속성)
            const openBtn = e.target.closest("[data-modal-target]");
            if (openBtn) {
                const modalId = openBtn.getAttribute("data-modal-target");
                this.open(modalId);
            }

            // 2. 닫기 버튼 또는 배경 클릭 감지 (data-modal-close 속성)
            if (e.target.matches("[data-modal-close]")) {
                const modal = e.target.closest(".modal");
                if (modal) this.close(modal);
            }
        });

        // [키보드 이벤트 리스너] ESC 키 누르면 닫기
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                const activeModal = document.querySelector(".modal.is-open");
                if (activeModal) this.close(activeModal);
            }
        });
    }

    // 모달 열기 함수
    open(id) {
        const modal = document.getElementById(id);
        if (!modal) return; // ID가 없으면 종료

        modal.classList.add("is-open"); // 활성화 클래스 추가
        modal.setAttribute("aria-hidden", "false"); // 접근성 업데이트
        document.body.style.overflow = "hidden"; // 배경 스크롤 잠금
    }

    // 모달 닫기 함수
    close(modal) {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // 배경 스크롤 복구
    }
}

// 실행
new ComponentLoader();

new ModalManager();
