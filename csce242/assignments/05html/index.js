const speechColumn = document.getElementById("speech-column");
const speechBubble = document.getElementById("speech-bubble");
const beverageSelect = document.getElementById("beverage-select");
const beverageMessage = document.getElementById("beverage-message");
const sunImage = document.getElementById("sun-image");
const sticker = document.getElementById("sticker");

/* Shows or hides the speech bubble when its column is clicked */
const toggleSpeechBubble = () => {
    speechBubble.classList.toggle("hidden");
};

/* Shows a message based on the selected beverage */
const displayBeverageMessage = () => {
    const selectedBeverage = beverageSelect.value;

    if (selectedBeverage === "") {
        beverageMessage.textContent = "";
    } else {
        beverageMessage.textContent = `${selectedBeverage}: Nice choice!`;
    }
};

/* Shows the emoji sticker when the sun image is clicked */
const addSticker = () => {
    sticker.classList.remove("hidden");
};

speechColumn.onclick = toggleSpeechBubble;
beverageSelect.onchange = displayBeverageMessage;
sunImage.onclick = addSticker;