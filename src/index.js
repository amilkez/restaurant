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
		mainContent.classList.add("about");
		mainContent.appendChild(About.createDiv());
	} else if (tab.className.includes("contact")) {
		mainContent.innerHTML = "";
		mainContent.classList.remove("menu", "home", "about");
		mainContent.classList.add("contact");
		mainContent.appendChild(Contact.createDiv());
	} else if (tab.className.includes("home")) {
		mainContent.innerHTML = "";
		mainContent.classList.remove("contact", "menu", "about");
		mainContent.classList.add("home");
		mainContent.appendChild(Homepage.cta());
	} else if (tab.className.includes("menu")) {
		button =
			document.querySelector(".bottom").previousSibling.lastChild.lastChild;
		mainContent.innerHTML = "";
		mainContent.classList.remove("contact", "home", "about");
		mainContent.classList.add("menu");
		mainContent.appendChild(Menu.createDiv());
	}
}

let button = document.querySelector(".bottom").previousSibling.lastChild;

button.addEventListener("click", () => {
	const mainContent = document.querySelector(".bottom").previousSibling;

	if (button) {
		mainContent.innerHTML = "";
		mainContent.classList.remove("contact", "home", "about");
		mainContent.classList.add("menu");
		mainContent.appendChild(Menu.createDiv());
	}
});
