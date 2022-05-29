import "./style.css";

function component() {
	const h1 = document.createElement("h1");
	h1.classList.add("h1");
	h1.textContent = "Sushi-on!";

	const headline = document.createElement("p");
	headline.classList.add("headline");
	headline.textContent =
		"The Edo Kobayashi Group was founded in 2013 with innovative creation based on Japanese food, introduced in the gastronomic scene of Mexico City. From the beginning – with the opening of its first restaurant, Rokai, the spaces of Edo Kobayashi have been characterized by the perfect balance between flavor and nutrition in Japanese culture.";

	content.appendChild(h1);
	content.appendChild(headline);

	return content;
}

export { component };
