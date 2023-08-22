const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageWidth = carousel.querySelector('img').clientWidth;

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + 4) % 4;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % 4;
  updateCarousel();
});

function updateCarousel() {
  const translateX = -currentIndex * imageWidth;
  carousel.style.transform = `translateX(${translateX}px)`;
}