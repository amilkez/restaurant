const Contact = (() => {
	const createDiv = () => {
		const div = document.createElement("div");
		div.classList.add("contact-wrapper");
		const div1 = document.createElement("div");
		div1.classList.add("heading-wrapper");
		const h2Contact = document.createElement("h2");
		h2Contact.textContent = "GET IN TOUCH";
		const p1 = document.createElement("p");
		p1.textContent = "We love to hear from you!";

		const form = document.createElement("form");
		form.classList.add("form");
		const nameWrapper = document.createElement("div");
		nameWrapper.classList.add("form-element", "name");
		const nameLabel = document.createElement("label");
		nameLabel.setAttribute("for", "name");
		nameLabel.textContent = "Name:";
		const nameInput = document.createElement("input");
		nameInput.setAttribute("type", "text");
		nameInput.setAttribute("name", "name");
		nameInput.setAttribute("id", "name");

		nameWrapper.append(nameLabel, nameInput);

		const emailWrapper = document.createElement("div");
		emailWrapper.classList.add("form-element", "email");
		const emailLabel = document.createElement("label");
		emailLabel.setAttribute("for", "email");
		emailLabel.textContent = "Email:";
		const emailInput = document.createElement("input");
		emailInput.setAttribute("type", "email");
		emailInput.setAttribute("name", "email");
		emailInput.setAttribute("id", "email");

		emailWrapper.append(emailLabel, emailInput);

		const subjectWrapper = document.createElement("div");
		subjectWrapper.classList.add("form-element", "subject");
		const subjectLabel = document.createElement("label");
		subjectLabel.setAttribute("for", "subject");
		subjectLabel.textContent = "Subject:";
		const subjectInput = document.createElement("input");
		subjectInput.setAttribute("type", "text");
		subjectInput.setAttribute("name", "subject");
		subjectInput.setAttribute("id", "subject");

		subjectWrapper.append(subjectLabel, subjectInput);

		const textAreaWrapper = document.createElement("div");
		textAreaWrapper.classList.add("form-element", "textarea");
		const textAreaLabel = document.createElement("label");
		textAreaLabel.setAttribute("for", "textarea");
		textAreaLabel.textContent = "Message:";

		const textArea = document.createElement("textarea");
		textArea.setAttribute("name", "textarea");
		textArea.setAttribute("id", "textarea");

		textAreaWrapper.append(textAreaLabel, textArea);

		// Button
		const button = document.createElement("button");
		button.textContent = "Send Message";

		form.append(
			nameWrapper,
			emailWrapper,
			subjectWrapper,
			textAreaWrapper,
			button
		);

		div1.append(h2Contact, p1);
		div.append(div1, form);

		return div;
	};
	return { createDiv };
})();

export { Contact };
