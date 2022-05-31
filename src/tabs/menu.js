const Menu = (() => {
	const createDiv = () => {
		const div = document.createElement("div");

		const h2Menu = document.createElement("h2");
		h2Menu.textContent = "MENU";

		// FIRST MENU

		const menuClassic = document.createElement("div");
		const h3Classic = document.createElement("h3");
		const rollsContainer = document.createElement("div");

		h3Classic.textContent = "CLASSIC ROLLS";

		const ulClassic = document.createElement("ul");

		const liClassicItem1 = document.createElement("li");

		const imgClassicItem1 = document.createElement("img");
		imgClassicItem1.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4ClassicItem1 = document.createElement("p");
		h4ClassicItem1.textContent = "QUESO ROLL";
		const pClassicItem1 = document.createElement("p");
		pClassicItem1.textContent = "$4.00";

		liClassicItem1.append(imgClassicItem1, h4ClassicItem1, pClassicItem1);

		// ITEM 2

		const liClassicItem2 = document.createElement("li");

		const imgClassicItem2 = document.createElement("img");
		imgClassicItem2.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4ClassicItem2 = document.createElement("p");
		h4ClassicItem2.textContent = "KIURI ROLL";
		const pClassicItem2 = document.createElement("p");
		pClassicItem2.textContent = "$4.00";

		liClassicItem2.append(imgClassicItem2, h4ClassicItem2, pClassicItem2);

		//ITEM 3

		const liClassicItem3 = document.createElement("li");

		const imgClassicItem3 = document.createElement("img");
		imgClassicItem3.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4ClassicItem3 = document.createElement("p");
		h4ClassicItem3.textContent = "PHILADELPHIA ROLL";
		const pClassicItem3 = document.createElement("p");
		pClassicItem3.textContent = "$4.00";

		liClassicItem3.append(imgClassicItem3, h4ClassicItem3, pClassicItem3);

		//ITEM 4

		const liClassicItem4 = document.createElement("li");

		const imgClassicItem4 = document.createElement("img");
		imgClassicItem4.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4ClassicItem4 = document.createElement("p");
		h4ClassicItem4.textContent = "AVOCADO ROLL";
		const pClassicItem4 = document.createElement("p");
		pClassicItem4.textContent = "$4.00";

		liClassicItem4.append(imgClassicItem4, h4ClassicItem4, pClassicItem4);

		// LIST

		ulClassic.append(
			liClassicItem1,
			liClassicItem2,
			liClassicItem3,
			liClassicItem4
		);

		menuClassic.append(h3Classic, ulClassic);

		// SECOND MENU

		const menuCalifornia = document.createElement("div");
		const h3California = document.createElement("h3");
		h3California.textContent = "CALIFORNIA ROLLS";

		const ulCalifornia = document.createElement("ul");

		const liCaliforniaItem1 = document.createElement("li");

		const imgCaliforniaItem1 = document.createElement("img");
		imgCaliforniaItem1.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4CaliforniaItem1 = document.createElement("p");
		h4CaliforniaItem1.textContent = "BABY CALIFORNIA ROLL";
		const pCaliforniaItem1 = document.createElement("p");
		pCaliforniaItem1.textContent = "$4.00";

		liCaliforniaItem1.append(
			imgCaliforniaItem1,
			h4CaliforniaItem1,
			pCaliforniaItem1
		);

		// ITEM 1

		const liCaliforniaItem2 = document.createElement("li");

		const imgCaliforniaItem2 = document.createElement("img");
		imgCaliforniaItem2.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4CaliforniaItem2 = document.createElement("p");
		h4CaliforniaItem2.textContent = "SUPER CALIFORNIA ROLL";
		const pCaliforniaItem2 = document.createElement("p");
		pCaliforniaItem2.textContent = "$4.00";

		liCaliforniaItem2.append(
			imgCaliforniaItem2,
			h4CaliforniaItem2,
			pCaliforniaItem2
		);

		//ITEM 3

		const liCaliforniaItem3 = document.createElement("li");

		const imgCaliforniaItem3 = document.createElement("img");
		imgCaliforniaItem3.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4CaliforniaItem3 = document.createElement("p");
		h4CaliforniaItem3.textContent = "THAI CALIFORNIA ROLL";
		const pCaliforniaItem3 = document.createElement("p");
		pCaliforniaItem3.textContent = "$4.00";

		liCaliforniaItem3.append(
			imgCaliforniaItem3,
			h4CaliforniaItem3,
			pCaliforniaItem3
		);

		//ITEM 4

		const liCaliforniaItem4 = document.createElement("li");

		const imgCaliforniaItem4 = document.createElement("img");
		imgCaliforniaItem4.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4CaliforniaItem4 = document.createElement("p");
		h4CaliforniaItem4.textContent = "CALIFORNIA SPECIAL ROLL";
		const pCaliforniaItem4 = document.createElement("p");
		pCaliforniaItem4.textContent = "$4.00";

		liCaliforniaItem4.append(
			imgCaliforniaItem4,
			h4CaliforniaItem4,
			pCaliforniaItem4
		);

		// LIST

		ulCalifornia.append(
			liCaliforniaItem1,
			liCaliforniaItem2,
			liCaliforniaItem3,
			liCaliforniaItem4
		);

		menuCalifornia.append(h3California, ulCalifornia);

		// THIRD MENU

		const menuChipotle = document.createElement("div");
		const h3Chipotle = document.createElement("h3");
		h3Chipotle.textContent = "CHIPOTLE ROLLS";

		const ulChipotle = document.createElement("ul");

		const liChipotleItem1 = document.createElement("li");

		const imgChipotleItem1 = document.createElement("img");
		imgChipotleItem1.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4ChipotleItem1 = document.createElement("p");
		h4ChipotleItem1.textContent = "MANGO ROLL";
		const pChipotleItem1 = document.createElement("p");
		pChipotleItem1.textContent = "$4.00";

		liChipotleItem1.append(imgChipotleItem1, h4ChipotleItem1, pChipotleItem1);

		// ITEM 1

		const liChipotleItem2 = document.createElement("li");

		const imgChipotleItem2 = document.createElement("img");
		imgChipotleItem2.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4ChipotleItem2 = document.createElement("p");
		h4ChipotleItem2.textContent = "GODZILLA ROLL";
		const pChipotleItem2 = document.createElement("p");
		pChipotleItem2.textContent = "$4.00";

		liChipotleItem2.append(imgChipotleItem2, h4ChipotleItem2, pChipotleItem2);

		//ITEM 3

		const liChipotleItem3 = document.createElement("li");

		const imgChipotleItem3 = document.createElement("img");
		imgChipotleItem3.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4ChipotleItem3 = document.createElement("p");
		h4ChipotleItem3.textContent = "VOLCAN ROLL";
		const pChipotleItem3 = document.createElement("p");
		pChipotleItem3.textContent = "$4.00";

		liChipotleItem3.append(imgChipotleItem3, h4ChipotleItem3, pChipotleItem3);

		//ITEM 4

		const liChipotleItem4 = document.createElement("li");

		const imgChipotleItem4 = document.createElement("img");
		imgChipotleItem4.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4ChipotleItem4 = document.createElement("p");
		h4ChipotleItem4.textContent = "SPICY ROLL";
		const pChipotleItem4 = document.createElement("p");
		pChipotleItem4.textContent = "$4.00";

		liChipotleItem4.append(imgChipotleItem4, h4ChipotleItem4, pChipotleItem4);

		// LIST

		ulChipotle.append(
			liChipotleItem1,
			liChipotleItem2,
			liChipotleItem3,
			liChipotleItem4
		);

		menuChipotle.append(h3Chipotle, ulChipotle);

		// FOURTH MENU

		const menuTampico = document.createElement("div");
		const h3Tampico = document.createElement("h3");
		h3Tampico.textContent = "TAMPICO ROLLS";

		const ulTampico = document.createElement("ul");

		const liTampicoItem1 = document.createElement("li");

		const imgTampicoItem1 = document.createElement("img");
		imgTampicoItem1.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4TampicoItem1 = document.createElement("p");
		h4TampicoItem1.textContent = "BANANA ROLL";
		const pTampicoItem1 = document.createElement("p");
		pTampicoItem1.textContent = "$4.00";

		liTampicoItem1.append(imgTampicoItem1, h4TampicoItem1, pTampicoItem1);

		// ITEM 1

		const liTampicoItem2 = document.createElement("li");

		const imgTampicoItem2 = document.createElement("img");
		imgTampicoItem2.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4TampicoItem2 = document.createElement("p");
		h4TampicoItem2.textContent = "TSUNAMI ROLL";
		const pTampicoItem2 = document.createElement("p");
		pTampicoItem2.textContent = "$4.00";

		liTampicoItem2.append(imgTampicoItem2, h4TampicoItem2, pTampicoItem2);

		//ITEM 3

		const liTampicoItem3 = document.createElement("li");

		const imgTampicoItem3 = document.createElement("img");
		imgTampicoItem3.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4TampicoItem3 = document.createElement("p");
		h4TampicoItem3.textContent = "GEISHA ROLL";
		const pTampicoItem3 = document.createElement("p");
		pTampicoItem3.textContent = "$4.00";

		liTampicoItem3.append(imgTampicoItem3, h4TampicoItem3, pTampicoItem3);

		//ITEM 4

		const liTampicoItem4 = document.createElement("li");

		const imgTampicoItem4 = document.createElement("img");
		imgTampicoItem4.src =
			"https://pbs.twimg.com/profile_images/1527227108673605632/JeNystpr_normal.jpg";
		const h4TampicoItem4 = document.createElement("p");
		h4TampicoItem4.textContent = "TIGRE ROLL";
		const pTampicoItem4 = document.createElement("p");
		pTampicoItem4.textContent = "$4.00";

		liTampicoItem4.append(imgTampicoItem4, h4TampicoItem4, pTampicoItem4);

		// LIST

		ulTampico.append(
			liTampicoItem1,
			liTampicoItem2,
			liTampicoItem3,
			liTampicoItem4
		);

		menuTampico.append(h3Tampico, ulTampico);

		// MAIN CONTENT

		rollsContainer.append(
			menuClassic,
			menuCalifornia,
			menuChipotle,
			menuTampico
		);

		div.append(h2Menu, rollsContainer);

		return div;
	};
	return { createDiv };
})();

export { Menu };
