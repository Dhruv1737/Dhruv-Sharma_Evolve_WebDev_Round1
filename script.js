function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);

const glyphs = "X%/&?#$!<>{}[]01";
const target = document.querySelector("#decrypt-text");
const finalValue = target.dataset.value;

function startDecrypt() {
    let iteration = 0;
    let interval = setInterval(() => {
        target.innerText = finalValue.split("").map((letter, index) => {
            if (index < iteration) return finalValue[index];
            return glyphs[Math.floor(Math.random() * glyphs.length)];
        }).join("");
        if (iteration >= finalValue.length) clearInterval(interval);
        iteration += 1 / 3;
    }, 35);
}

document.addEventListener('DOMContentLoaded', () => {
    startDecrypt();
    reveal(); 
});

function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('active');
}

const slider = document.getElementById("mainSlider");

let slidePos = 0;
let intervalId;

if (slider) {
    const slides = slider.children.length;

    function startSlider() {
        intervalId = setInterval(() => {
            slidePos = (slidePos + 1) % slides;
            slider.style.transform = `translateX(-${slidePos * 100}%)`;
        }, 4000);
    }

    function stopSlider() {
        clearInterval(intervalId);
    }

    startSlider();

    slider.addEventListener("mouseenter", stopSlider);

    slider.addEventListener("mouseleave", startSlider);
}