// scripts.js

let currentIndex = 0;
const intervalTime = 2000; // 0.7 segundos

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    currentIndex = (index + totalSlides) % totalSlides; // Lógica para el bucle cíclico
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function reiniciarCarrusel() {
    currentIndex = 0; // Reiniciar el índice al inicio del carrusel
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setInterval(nextSlide, intervalTime); // Cambiar imagen cada 0.7 segundos
});
