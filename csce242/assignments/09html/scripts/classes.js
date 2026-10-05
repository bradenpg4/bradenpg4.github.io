class Vacation {
    constructor(title, type, description, thingsToDo, pic, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.pic = pic;
        this.mapSrc = mapSrc;
    }

   get card() {
    const section = document.createElement("section");
    section.classList.add("vacation");
    section.classList.add("project-card");

    section.append(this.vacationName());
    section.append(this.vacationType());
    section.append(this.vacationImage());

   section.onclick = (event) => {
    event.preventDefault();
    this.showModal();
};

    return section;
}

    vacationName() {
        const h3 = document.createElement("h3");
        const a = document.createElement("a");

        h3.append(a);
        a.textContent = this.title;
        a.href = "#";

        return h3;
    }

    vacationImage() {
        const img = document.createElement("img");
        img.src = `images/${this.pic}`;
        img.alt = `Picture of ${this.title}`;

        return img;
    }

    vacationType() {
        const p = document.createElement("p");
        p.classList.add("vacation-type");
        p.textContent = `${this.type} Vacation`;

        return p;
    }

    showModal() {
        document.querySelector("#modal-title").textContent = this.title;
        document.querySelector("#modal-type").textContent =
            `${this.type} Vacation`;
        document.querySelector("#modal-description").textContent =
            this.description;
        document.querySelector("#modal-things").textContent =
            this.thingsToDo;
        document.querySelector("#vacation-map").src = this.mapSrc;

        modal.classList.remove("hidden");
    }
}

const vacations = [];

vacations.push(new Vacation(
    "Asheville",
    "Mountain",
    "A creative Blue Ridge city known for art, food, and mountain views.",
    "Visit the Biltmore Estate, drive the Blue Ridge Parkway, and explore local shops.",
    "asheville.png",
    "https://www.google.com/maps?q=Asheville%2C%20NC&output=embed"
));

vacations.push(new Vacation(
    "Boone",
    "Mountain",
    "A cozy college town surrounded by trails and mountain overlooks.",
    "Visit Appalachian State, hike Grandfather Mountain, and go skiing.",
    "boone.jpg",
    "https://www.google.com/maps?q=Boone%2C%20NC&output=embed"
));

vacations.push(new Vacation(
    "Hot Springs",
    "Mountain",
    "A peaceful river town with relaxing natural mineral springs.",
    "Soak in mineral baths, raft the French Broad River, and hike.",
    "hot-springs.jpg",
    "https://www.google.com/maps?q=Hot%20Springs%2C%20NC&output=embed"
));

vacations.push(new Vacation(
    "Table Rock",
    "Mountain",
    "A South Carolina park with granite cliffs and scenic views.",
    "Hike to the summit, swim at the lake, and go camping.",
    "table-rock.jpg",
    "https://www.google.com/maps?q=Table%20Rock%20State%20Park%20SC&output=embed"
));

vacations.push(new Vacation(
    "Edisto Beach",
    "Beach",
    "A quiet barrier-island beach with Lowcountry charm.",
    "Collect shells, visit Botany Bay, and enjoy local seafood.",
    "edisto-beach.jpg",
    "https://www.google.com/maps?q=Edisto%20Beach%2C%20SC&output=embed"
));

vacations.push(new Vacation(
    "Pawleys Island",
    "Beach",
    "A relaxed beach town with wide sandy shores and sunsets.",
    "Walk the beach, kayak through marshes, and visit Brookgreen Gardens.",
    "pawleys-island.png",
    "https://www.google.com/maps?q=Pawleys%20Island%2C%20SC&output=embed"
));

vacations.push(new Vacation(
    "Sunset Beach",
    "Beach",
    "A quiet North Carolina beach known for its beautiful sunsets and calm shoreline.",
    "Walk the pier, relax on the beach, and visit Bird Island.",
    "sunset-beach.jpg",
    "https://www.google.com/maps?q=Sunset%20Beach%2C%20NC&output=embed"
));

vacations.push(new Vacation(
    "Oak Island",
    "Beach",
    "A family-friendly beach destination with wide shores and coastal activities.",
    "Visit Oak Island Lighthouse, go fishing, and explore the beach.",
    "oak-island.jpg",
    "https://www.google.com/maps?q=Oak%20Island%2C%20NC&output=embed"
));

const vacationsDiv = document.querySelector(".vacations");
const modal = document.querySelector("#vacation-modal");
const closeModal = document.querySelector("#close-modal");

vacations.forEach((vacation) => {
    vacationsDiv.append(vacation.card);
});

closeModal.onclick = () => {
    modal.classList.add("hidden");
};

modal.onclick = (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
};