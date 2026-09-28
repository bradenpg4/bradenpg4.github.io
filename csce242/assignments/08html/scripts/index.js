const mountains = {
    "Asheville, North Carolina":
        "https://www.google.com/maps?q=Asheville,+North+Carolina&output=embed",

    "Boone, North Carolina":
        "https://www.google.com/maps?q=Boone,+North+Carolina&output=embed",

    "Hot Springs, North Carolina":
        "https://www.google.com/maps?q=Hot+Springs,+North+Carolina&output=embed",

    "Table Rock, South Carolina":
        "https://www.google.com/maps?q=Table+Rock+State+Park,+South+Carolina&output=embed"
};

const beaches = {
    "Myrtle Beach, South Carolina":
        "https://www.google.com/maps?q=Myrtle+Beach,+South+Carolina&output=embed",

    "Folly Beach, South Carolina":
        "https://www.google.com/maps?q=Folly+Beach,+South+Carolina&output=embed",

    "Hilton Head Island, South Carolina":
        "https://www.google.com/maps?q=Hilton+Head+Island,+South+Carolina&output=embed",

    "Tybee Island, Georgia":
        "https://www.google.com/maps?q=Tybee+Island,+Georgia&output=embed"
};

const destinationType = document.getElementById("destination-type");
const destinationLinks = document.getElementById("destination-links");
const mapContainer = document.getElementById("map-container");

destinationType.onchange = () => {
    destinationLinks.innerHTML = "";
    mapContainer.innerHTML = "";
    mapContainer.classList.add("hidden");

    let destinations;

    if(destinationType.value == "mountains") {
        destinations = mountains;
    } else if(destinationType.value == "beaches") {
        destinations = beaches;
    } else {
        return;
    }

    for(const destination in destinations) {
        const link = document.createElement("a");

        link.innerHTML = destination;
        link.href = "#";

        link.onclick = (e) => {
            e.preventDefault();

            mapContainer.innerHTML =
                `<iframe src="${destinations[destination]}"
                title="Map of ${destination}"
                loading="lazy"></iframe>`;

            mapContainer.classList.remove("hidden");
        };

        destinationLinks.append(link);
    }
};