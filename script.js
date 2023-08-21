
const stars = document.querySelectorAll('.rating input');
const selectedRating = document.getElementById('selected-rating'); // Elemento para exibir a nota

stars.forEach(star => {
  star.addEventListener('change', (event) => {
    const rating = event.target.value;
    selectedRating.textContent = `Você deu uma nota de ${rating} estrelas.`;
  });
});

// Script para manipular o efeito de zoom da imagem
const image = document.getElementById('image');

image.addEventListener('mouseenter', () => {
  image.style.transform = 'scale(1.2)';
});

image.addEventListener('mouseleave', () => {
  image.style.transform = 'scale(1)';
});


