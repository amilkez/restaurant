import { Homepage } from "./tabs/page-load.js";

const content = document.querySelector("#content");

content.append(
	Homepage.createHeader(),
	Homepage.cta(),
	Homepage.createFooter()
);
