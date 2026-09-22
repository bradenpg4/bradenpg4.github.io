//first loop example
document.getElementById("btn-loop").onclick = (e) => {
    const loopResult = document.getElementById("loop-result");

    for(let i = 0; i < 10; i++){
        let p = document.createElement("p");
        p.innerHTML = i;
        loopResult.append(p);
        p.classList.add("special");
        p.onclick = () => {
            console.log(`You clicked the ${i}'th element`);
        };
    }
};

//looping through a range
document.getElementById("btn-loop-range").onclick = () => {
    const startNum = document.getElementById("txt-start").value;
    const endNum = document.getElementById("txt-end").value;
    const errorStart = document.getElementById("error-start");
    errorStart.classList.add("hidden");
    const errorEnd = document.getElementById("error-end");
    errorEnd.classList.add("hidden");
    const ul = document.getElementById("range-list");

    if(startNum < 0 || startNum > 5){
        errorStart.innerHTML = "*Invalid";
        errorStart.classList.remove("hidden");
    }

    if(endNum < 10 || endNum > 20 || endNum < startNum){
        errorEnd.innerHTML = "*Invalid";
        errorEnd.classList.remove("hidden");
        return;
    }

    ul.innerHTML = "";

    for(let i = parseInt(startNum); i < parseInt(endNum); i++){
        const li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
    }
};

//first array example
document.getElementById("btn-show-toys").onclick = () => {
    const toys = ["doll", "skate board", "mini car", "board game", "bracelets"];
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    for(let i = 0; i < toys.length; i++){
        const p = document.createElement("p");
        p.innerHTML = toys[i];
        toyList.append(p);
    }
}