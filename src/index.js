import { Homepage } from "./tabs/page-load";
import { About } from "./tabs/about";
import { Contact } from "./tabs/contact";
import { Menu } from "./tabs/menu";
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
		mainContent.classList.remove("contact", "home", "menu");
		mainContent.appendChild(About.createDiv());
	} else if (tab.className.includes("contact")) {
		mainContent.innerHTML = "";
		mainContent.classList.remove("menu", "home", "about");
		mainContent.appendChild(Contact.createDiv());
	} else if (tab.className.includes("home")) {
		mainContent.innerHTML = "";
		mainContent.classList.remove("contact", "menu", "about");
		mainContent.appendChild(Homepage.cta());
	} else if (tab.className.includes("menu")) {
		mainContent.innerHTML = "";
		mainContent.classList.remove("contact", "home", "about");
		mainContent.classList.add("menu");
		mainContent.appendChild(Menu.createDiv());
	}
}
