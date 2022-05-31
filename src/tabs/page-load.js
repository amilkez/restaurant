import "../style.css";

const Homepage = (() => {
	const createHeader = () => {
		const header = document.createElement("header");
		header.classList.add("header");
		const nav = document.createElement("nav");
		nav.classList.add("nav");

		const h1 = document.createElement("h1");
		h1.textContent = "SUSHI-ON!";

		const ul = document.createElement("ul");
		ul.classList.add("nav-links");

		const liHome = document.createElement("li");
		liHome.classList.add("home", "link");
		liHome.textContent = "HOME";

		const liMenu = document.createElement("li");
		liMenu.classList.add("menu", "link");
		liMenu.textContent = "MENU";

		const liContact = document.createElement("li");
		liContact.classList.add("contact", "link");
		liContact.textContent = "CONTACT";

		const liAbout = document.createElement("li");
		liAbout.classList.add("about", "link");
		liAbout.textContent = "ABOUT";

		ul.append(liHome, liMenu, liContact, liAbout);

		nav.append(h1, ul);

		header.append(nav);

		return header;
	};

	const createFooter = () => {
		const bottom = document.createElement("div");
		bottom.classList.add("bottom");

		const ul = document.createElement("ul");
		ul.classList.add("social-links");

		const social1 = document.createElement("li");
		const socialLink1 = document.createElement("a");
		socialLink1.classList.add("fa-brands", "fa-twitter");
		social1.appendChild(socialLink1);

		const social2 = document.createElement("li");
		const socialLink2 = document.createElement("a");
		socialLink2.classList.add("fa-brands", "fa-instagram");
		social2.appendChild(socialLink2);

		const social3 = document.createElement("li");
		const socialLink3 = document.createElement("a");
		socialLink3.classList.add("fa-brands", "fa-facebook");
		social3.appendChild(socialLink3);

		ul.append(social1, social2, social3);

		const table = document.createElement("table");
		table.classList.add("table");

		const th = document.createElement("th");
		th.setAttribute("colspan", 2);
		th.textContent = "OPEN HOURS";

		const tr1 = document.createElement("tr");
		const tdDays1 = document.createElement("td");
		tdDays1.textContent = "Monday - Friday:";
		const tdHours1 = document.createElement("td");
		tdHours1.textContent = "13 PM - 11 PM";
		tr1.append(tdDays1, tdHours1);

		const tr2 = document.createElement("tr");
		const tdDays2 = document.createElement("td");
		tdDays2.textContent = "Saturday - Sunday:";
		const tdHours2 = document.createElement("td");
		tdHours2.textContent = "10 AM - 12 AM";
		tr2.append(tdDays2, tdHours2);

		table.append(th, tr1, tr2);

		const footer = document.createElement("footer");
		footer.classList.add("footer");
		const p = document.createElement("p");
		p.textContent = "2022 Anethea";
		footer.appendChild(p);

		bottom.append(ul, table, footer);

		return bottom;
	};

	const cta = () => {
		const div = document.createElement("div");
		div.classList.add("main-content");

		const h2 = document.createElement("h2");
		h2.classList.add("h2");
		h2.textContent = "Authentic Japanese cuisine and sushi";

		const button = document.createElement("button");
		button.classList.add("button");
		button.textContent = "SEE OUR MENU";

		div.append(h2, button);
		return div;
	};

	return { createHeader, createFooter, cta };
})();

export { Homepage };
