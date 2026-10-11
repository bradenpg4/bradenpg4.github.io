const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

const showMessage = (message, type) => {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
};

contactForm.addEventListener("invalid", () => {
    showMessage("Please fill out all required fields correctly.", "error");
}, true);

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        showMessage("Please fill out all required fields correctly.", "error");
        contactForm.reportValidity();
        return;
    }

    const formData = new FormData(contactForm);
    const formInfo = Object.fromEntries(formData);

    showMessage("Sending your message...", "sending");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formInfo)
        });

        const result = await response.json();

        if (response.ok && result.success) {
            showMessage(
                "Thank you! Your message was sent successfully.",
                "success"
            );

            contactForm.reset();
        } else {
            showMessage(
                "Your message could not be sent. Please try again.",
                "error"
            );
        }
    } catch (error) {
        showMessage(
            "Your message could not be sent. Please try again.",
            "error"
        );

        console.error(error);
    }

    setTimeout(() => {
        formMessage.textContent = "";
        formMessage.className = "form-message";
    }, 1500);
});