import Cheese from "../imgs/cheese.png";
import Kiuri from "../imgs/kiuri.png";
import Philadelphia from "../imgs/philadelphia.png";
import Avocado from "../imgs/avocado.png";
import BabyCali from "../imgs/baby-cali.png";
import SuperCali from "../imgs/super-cali.png";
import ThaiCali from "../imgs/thai-cali.png";
import CaliSpecial from "../imgs/cali-special.png";
import Mango from "../imgs/mango.png";
import Godzilla from "../imgs/godzilla.png";
import Spicy from "../imgs/spicy.png";
import Volcan from "../imgs/volcan.png";
import Banana from "../imgs/banana.png";
import Tsunami from "../imgs/tsunami.png";
import Geisha from "../imgs/geisha.png";
import Tigre from "../imgs/tigre.png";

const Menu = (() => {
	const createDiv = () => {
		const div = document.createElement("div");

		const h2Menu = document.createElement("h2");
		h2Menu.classList.add("section-heading");
		h2Menu.textContent = "MENU";

		// FIRST MENU

		const menuClassic = document.createElement("div");
		menuClassic.classList.add("menu-classic", "menu");
		const rollsContainer = document.createElement("div");
		const h3Classic = document.createElement("h3");
		h3Classic.classList.add("menu-heading");
		h3Classic.textContent = "CLASSIC ROLLS";

		const ulClassic = document.createElement("ul");
		ulClassic.classList.add("menu-list");

		//ITEM 1

		const liClassicItem1 = document.createElement("li");
		liClassicItem1.classList.add("menu-item");
		const imgClassicItem1 = new Image();
		imgClassicItem1.src = Cheese;
		const h4ClassicItem1 = document.createElement("p");
		h4ClassicItem1.textContent = "CHEESE ROLL";
		const pClassicItem1 = document.createElement("p");
		pClassicItem1.textContent = "$4.00";

		liClassicItem1.append(imgClassicItem1, h4ClassicItem1, pClassicItem1);

		// ITEM 2

		const liClassicItem2 = document.createElement("li");
		liClassicItem2.classList.add("menu-item");
		const imgClassicItem2 = new Image();
		imgClassicItem2.src = Kiuri;
		const h4ClassicItem2 = document.createElement("p");
		h4ClassicItem2.textContent = "KIURI ROLL";
		const pClassicItem2 = document.createElement("p");
		pClassicItem2.textContent = "$4.00";

		liClassicItem2.append(imgClassicItem2, h4ClassicItem2, pClassicItem2);

		//ITEM 3

		const liClassicItem3 = document.createElement("li");
		liClassicItem3.classList.add("menu-item");
		const imgClassicItem3 = new Image();
		imgClassicItem3.src = Philadelphia;
		const h4ClassicItem3 = document.createElement("p");
		h4ClassicItem3.textContent = "PHILADELPHIA ROLL";
		const pClassicItem3 = document.createElement("p");
		pClassicItem3.textContent = "$5.00";

		liClassicItem3.append(imgClassicItem3, h4ClassicItem3, pClassicItem3);

		//ITEM 4

		const liClassicItem4 = document.createElement("li");
		liClassicItem4.classList.add("menu-item");
		const imgClassicItem4 = new Image();
		imgClassicItem4.src = Avocado;
		const h4ClassicItem4 = document.createElement("p");
		h4ClassicItem4.textContent = "AVOCADO ROLL";
		const pClassicItem4 = document.createElement("p");
		pClassicItem4.textContent = "$5.00";

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
		menuCalifornia.classList.add("menu-california", "menu");
		const h3California = document.createElement("h3");
		h3California.classList.add("menu-heading");

		h3California.textContent = "CALIFORNIA ROLLS";

		const ulCalifornia = document.createElement("ul");
		ulCalifornia.classList.add("menu-list");

		// ITEM 1

		const liCaliforniaItem1 = document.createElement("li");
		liCaliforniaItem1.classList.add("menu-item");
		const imgCaliforniaItem1 = new Image();
		imgCaliforniaItem1.src = BabyCali;
		const h4CaliforniaItem1 = document.createElement("p");
		h4CaliforniaItem1.textContent = "BABY CALIFORNIA ROLL";
		const pCaliforniaItem1 = document.createElement("p");
		pCaliforniaItem1.textContent = "$4.00";

		liCaliforniaItem1.append(
			imgCaliforniaItem1,
			h4CaliforniaItem1,
			pCaliforniaItem1
		);

		// ITEM 2

		const liCaliforniaItem2 = document.createElement("li");
		liCaliforniaItem2.classList.add("menu-item");
		const imgCaliforniaItem2 = new Image();
		imgCaliforniaItem2.src = SuperCali;
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
		liCaliforniaItem3.classList.add("menu-item");

		const imgCaliforniaItem3 = new Image();
		imgCaliforniaItem3.src = ThaiCali;
		const h4CaliforniaItem3 = document.createElement("p");
		h4CaliforniaItem3.textContent = "THAI CALIFORNIA ROLL";
		const pCaliforniaItem3 = document.createElement("p");
		pCaliforniaItem3.textContent = "$4.50";

		liCaliforniaItem3.append(
			imgCaliforniaItem3,
			h4CaliforniaItem3,
			pCaliforniaItem3
		);

		//ITEM 4

		const liCaliforniaItem4 = document.createElement("li");
		liCaliforniaItem4.classList.add("menu-item");

		const imgCaliforniaItem4 = new Image();
		imgCaliforniaItem4.src = CaliSpecial;
		const h4CaliforniaItem4 = document.createElement("p");
		h4CaliforniaItem4.textContent = "CALIFORNIA SPECIAL ROLL";
		const pCaliforniaItem4 = document.createElement("p");
		pCaliforniaItem4.textContent = "$6.00";

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
		menuChipotle.classList.add("menu", "menu-chipotle");
		const h3Chipotle = document.createElement("h3");
		h3Chipotle.classList.add("menu-heading");

		h3Chipotle.textContent = "CHIPOTLE ROLLS";

		const ulChipotle = document.createElement("ul");
		ulChipotle.classList.add("menu-list");
		const liChipotleItem1 = document.createElement("li");
		liChipotleItem1.classList.add("menu-item");

		const imgChipotleItem1 = new Image();
		imgChipotleItem1.src = Mango;
		const h4ChipotleItem1 = document.createElement("p");
		h4ChipotleItem1.textContent = "MANGO ROLL";
		const pChipotleItem1 = document.createElement("p");
		pChipotleItem1.textContent = "$4.00";

		liChipotleItem1.append(imgChipotleItem1, h4ChipotleItem1, pChipotleItem1);

		// ITEM 1

		const liChipotleItem2 = document.createElement("li");
		liChipotleItem2.classList.add("menu-item");

		const imgChipotleItem2 = new Image();
		imgChipotleItem2.src = Godzilla;
		const h4ChipotleItem2 = document.createElement("p");
		h4ChipotleItem2.textContent = "GODZILLA ROLL";
		const pChipotleItem2 = document.createElement("p");
		pChipotleItem2.textContent = "$5.00";

		liChipotleItem2.append(imgChipotleItem2, h4ChipotleItem2, pChipotleItem2);

		//ITEM 3

		const liChipotleItem3 = document.createElement("li");
		liChipotleItem3.classList.add("menu-item");

		const imgChipotleItem3 = new Image();
		imgChipotleItem3.src = Volcan;
		const h4ChipotleItem3 = document.createElement("p");
		h4ChipotleItem3.textContent = "VOLCAN ROLL";
		const pChipotleItem3 = document.createElement("p");
		pChipotleItem3.textContent = "$4.00";

		liChipotleItem3.append(imgChipotleItem3, h4ChipotleItem3, pChipotleItem3);

		//ITEM 4

		const liChipotleItem4 = document.createElement("li");
		liChipotleItem4.classList.add("menu-item");

		const imgChipotleItem4 = new Image();
		imgChipotleItem4.src = Spicy;
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
		menuTampico.classList.add("menu-tampico", "menu");
		const h3Tampico = document.createElement("h3");
		h3Tampico.classList.add("menu-heading");
		h3Tampico.textContent = "TAMPICO ROLLS";

		const ulTampico = document.createElement("ul");
		ulTampico.classList.add("menu-list");
		const liTampicoItem1 = document.createElement("li");
		liTampicoItem1.classList.add("menu-item");
		const imgTampicoItem1 = new Image();
		imgTampicoItem1.src = Banana;
		const h4TampicoItem1 = document.createElement("p");
		h4TampicoItem1.textContent = "BANANA ROLL";
		const pTampicoItem1 = document.createElement("p");
		pTampicoItem1.textContent = "$4.00";

		liTampicoItem1.append(imgTampicoItem1, h4TampicoItem1, pTampicoItem1);

		// ITEM 1

		const liTampicoItem2 = document.createElement("li");
		liTampicoItem2.classList.add("menu-item");

		const imgTampicoItem2 = new Image();
		imgTampicoItem2.src = Tsunami;
		const h4TampicoItem2 = document.createElement("p");
		h4TampicoItem2.textContent = "TSUNAMI ROLL";
		const pTampicoItem2 = document.createElement("p");
		pTampicoItem2.textContent = "$4.00";

		liTampicoItem2.append(imgTampicoItem2, h4TampicoItem2, pTampicoItem2);

		//ITEM 3

		const liTampicoItem3 = document.createElement("li");
		liTampicoItem3.classList.add("menu-item");

		const imgTampicoItem3 = new Image();
		imgTampicoItem3.src = Geisha;
		const h4TampicoItem3 = document.createElement("p");
		h4TampicoItem3.textContent = "GEISHA ROLL";
		const pTampicoItem3 = document.createElement("p");
		pTampicoItem3.textContent = "$4.00";

		liTampicoItem3.append(imgTampicoItem3, h4TampicoItem3, pTampicoItem3);

		//ITEM 4

		const liTampicoItem4 = document.createElement("li");
		liTampicoItem4.classList.add("menu-item");

		const imgTampicoItem4 = new Image();
		imgTampicoItem4.src = Tigre;
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
