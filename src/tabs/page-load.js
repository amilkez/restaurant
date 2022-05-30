import "../style.css";

const Homepage = (() => {
	const createHeader = () => {
		const header = document.createElement("header");
		const nav = document.createElement("nav");
		const h1 = document.createElement("h1");
		h1.textContent = "SUSHI-ON!";

		const ul = document.createElement("ul");
		const liHome = document.createElement("li");
		const liMenu = document.createElement("li");
		const liContact = document.createElement("li");
		const liAbout = document.createElement("li");
		ul.append(liHome, liMenu, liContact, liAbout);

		nav.append(h1, ul);

		header.append(nav);

		return header;
	};

	const createFooter = () => {
		const footer = document.createElement("div");

		const ul = document.createElement("ul");
		const social1 = document.createElement("li");
		const social2 = document.createElement("li");
		const social3 = document.createElement("li");
		ul.append(social1, social2, social3);

		const table = document.createElement("table");
		const th = document.createElement("th");
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

		footer.append(ul, table);

		return footer;
	};

	const cta = () => {
		const div = document.createElement("div");

		const h2 = document.createElement("h2");
		h2.textContent = "Authentic Japanese cuisine and sushi";

		const button = document.createElement("button");
		button.textContent = "SEE OUR MENU";

		div.append(h2, button);
		return div;
	};

	return { createHeader, createFooter, cta };
})();

export { Homepage };
