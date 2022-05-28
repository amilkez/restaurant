import "./style.css";

function component() {
	const content = document.querySelector("#content");
	content.textContent = "hello";
	return content;
}

document.body.appendChild(component());
