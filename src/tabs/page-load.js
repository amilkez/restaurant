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

	return { createHeader };
})();

export { Homepage };
