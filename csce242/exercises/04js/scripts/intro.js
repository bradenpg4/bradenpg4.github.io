//Shows a message when the button is clicked

document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello, World!";
    e.target.innerHTML = "done!";
}

//styles the link when it's clicked
document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //dont go to links destination
    e.target.classList.add("cool-link");
}

//when ball is clicked, add the bouncing-ball class to it
document.getElementById("btn-bounce").onclick = (e) => {
    document.getElementById("ball").classList.add("bouncing-ball");
}

//when you change the number of days since you watered
//show a message and change the image
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-plant-msg");
    const plantImage = document.getElementById("img-plant");
    plantImage.classList.remove("hidden");
    if(numDays <= 2){
        pMessage.innerHTML = `Let your plant rest it's only been ${numDays} day(s).`;
        plantImage.src="https://www.dummyimage.com/150x150/556B2F/fff&text=Happy+Plant";
    } else if(numDays <= 5){
        pMessage.innerHTML = `Time to water it's been ${numDays} days.`;
        plantImage.src="https://www.dummyimage.com/150x150/BDB76B/fff&text=Thirsty";
    } else if(numDays <= 7){
        pMessage.innerHTML = `Oh no your plant is wilting it's been ${numDays} days.`;
    } else{
        pMessage.innerHTML = "Your plant is a gooner";
    }
}

//counting
let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");
btnPause.disabled = true;
btnStop.disabled = true;

document.getElementById("btn-start").onclick = () =>
{
    countInterval = setInterval(()=>{
        pCount.innerHTML = count++;
    },500);
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
}

document.getElementById("btn-pause").onclick = () =>
{
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
}


document.getElementById("btn-stop").onclick = () =>
{
    count=0;
    pCount.innerHTML = "";
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
}
