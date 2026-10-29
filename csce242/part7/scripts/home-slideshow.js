const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

const showNextSlide = () => {
    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
};

setInterval(showNextSlide, 4000);