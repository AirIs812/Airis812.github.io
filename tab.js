document.addEventListener("DOMContentLoaded", () => {
	const tabs = document.querySelectorAll("ul li a");
	const contentBoxEl = document.querySelector("#contentBox");

	function setActive(tab) {
		tabs.forEach(item => item.classList.remove("active"));

		const color = tab.dataset.color;
		document.documentElement.style.setProperty("--active-color", color);
		tab.classList.add("active");
	}

	function setHover(tab) {
		const color = tab.dataset.color;
		document.documentElement.style.setProperty("--hover-color", color);
	}

	function resetHover() {
		document.documentElement.style.setProperty("--hover-color", "transparent");
	}

	tabs.forEach(tab => {
		tab.addEventListener("click", event => {
			event.preventDefault();
			setActive(event.currentTarget);
		});

		tab.addEventListener("mouseover", event => {
			setHover(event.currentTarget);
		});

		tab.addEventListener("mouseout", resetHover);
	});

	// 페이지 로드시 기본 탭 선택
	const defaultTab = document.querySelector("ul li a");
	if (defaultTab) {
		setActive(defaultTab);
	}
});
