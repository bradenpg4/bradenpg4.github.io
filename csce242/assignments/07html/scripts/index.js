const road = document.getElementById("road");

const loadCar = (color, top, left) => {
    const car = document.createElement("div");
    car.classList.add("car");
    car.style.backgroundColor = color;
    car.style.top = top + "px";
    car.style.left = left + "%";

    car.innerHTML = `
        <div class="window"></div>
        <div class="wheel front-wheel"></div>
        <div class="wheel back-wheel"></div>
    `;

    road.append(car);
};

const colors = ["#367d53", "#fafab3", "#084770", "#81a2ed", "#766d85", "#ff9191"];

//creates cars when page loads
for(let i = 0; i < 8; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.floor(Math.random() * 90);
    let top = 80;

    if(i % 2 == 0) {
        top = 145;
    }

    loadCar(color, top, left);
}