import { Homepage } from "./tabs/page-load";
import { About } from "./tabs/about";
const content = document.querySelector("#content");

content.append(
	Homepage.createHeader(),
	Homepage.cta(),
	Homepage.createFooter()
);

const tabs = document.querySelectorAll(".nav-links>li");

tabs.forEach((tab) => {
	tab.addEventListener("click", switchPage);
});

function switchPage(e) {
	if (!e.target.className.includes("link")) return;
	const tab = e.target;
	const mainContent = document.querySelector(".bottom").previousSibling;

	if (tab.className.includes("about")) {
		mainContent.innerHTML = "";

		mainContent.appendChild(About.createDiv());
	}
}
