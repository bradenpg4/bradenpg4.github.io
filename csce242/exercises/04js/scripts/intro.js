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