const About = (() => {
	const createDiv = () => {
		const div = document.createElement("div");
		div.classList.add("about-wrapper");
		const div1 = document.createElement("div");
		div1.classList.add("about-us", "about-section");
		const h2About = document.createElement("h2");
		h2About.textContent = "ABOUT US";
		const p1 = document.createElement("p");
		p1.textContent =
			"	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, dolore. Placeat, repellendus dolorum? Numquam praesentium repellendus error quae, consequatur tempore rem veritatis impedit placeat possimus optio voluptate accusamus! Perspiciatis, voluptatibus!";
		div1.append(h2About, p1);

		const div2 = document.createElement("div");
		div2.classList.add("history", "about-section");
		const h2History = document.createElement("h2");
		h2History.textContent = "OUR HISTORY";
		const p2 = document.createElement("p");
		p2.textContent =
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit veritatis unde voluptas molestias ipsum! Vitae reiciendis illum, facilis dicta architecto ipsam fuga quidem ullam.";
		div2.append(h2History, p2);

		const div3 = document.createElement("div");
		div3.classList.add("value", "about-section");
		const h2Value = document.createElement("h2");
		h2Value.textContent = "WHAT WE VALUE";
		const p3 = document.createElement("p");
		p3.textContent =
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi dignissimos voluptatem odit iusto officiis est sunt quod, hic, natus fugit deleniti corporis sed cum?";
		div3.append(h2Value, p3);

		div.append(div1, div2, div3);

		return div;
	};
	return { createDiv };
})();

export { About };
