let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((slide) => (slide.style.display = "none"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].classList.add("active");
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

// Função de slides automáticos
let slideInterval = setInterval(() => {
    showSlides((slideIndex += 1));
}, 5000); /* Muda o slide a cada 5 segundos */

/* Pausar o intervalo ao clicar em um dot */
const dots = document.querySelectorAll('.dot');
dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
    });
});
