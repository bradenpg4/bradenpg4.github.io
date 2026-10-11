const serviceUrl =
    "https://bradenpg4.github.io/csce242/part7/json/services.json";

const servicesDiv = document.querySelector("#services-list");

const getServices = async () => {
    try {
        const response = await fetch(serviceUrl);

        if (!response.ok) {
            throw new Error("Could not load services.");
        }

        const services = await response.json();

        services.forEach((service) => {
            servicesDiv.append(getService(service));
        });
    } catch (error) {
        servicesDiv.innerHTML =
            "<p class='json-error'>Sorry, the services could not load.</p>";
        console.error(error);
    }
};

const getService = (service) => {
    const article = document.createElement("article");
    article.classList.add("json-service-card");

    const img = document.createElement("img");
    img.src = service.img;
    img.alt = service.title;

    const content = document.createElement("div");
    content.classList.add("json-service-content");

    const category = document.createElement("p");
    category.classList.add("eyebrow");
    category.textContent = service.category;

    const title = document.createElement("h3");
    title.textContent = service.title;

    const description = document.createElement("p");
    description.textContent = service.description;

    const details = document.createElement("ul");

    const duration = document.createElement("li");
    duration.innerHTML = `<strong>Timeline:</strong> ${service.duration}`;

    const audience = document.createElement("li");
    audience.innerHTML = `<strong>Best For:</strong> ${service.audience}`;

    details.append(duration);
    details.append(audience);

    content.append(category);
    content.append(title);
    content.append(description);
    content.append(details);

    article.append(img);
    article.append(content);

    return article;
};

getServices();