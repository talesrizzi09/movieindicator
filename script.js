

// Script para manipular o efeito de zoom da imagem
const image = document.getElementById('image');

image.addEventListener('mouseenter', () => {
  image.style.transform = 'scale(1.2)';
});

image.addEventListener('mouseleave', () => {
  image.style.transform = 'scale(1)';
});


const image2 = document.getElementById('image2');

image2.addEventListener('mouseenter', () => {
  image2.style.transform = 'scale(1.2)';
});

image2.addEventListener('mouseleave', () => {
  image2.style.transform = 'scale(1)';
});

const image3 = document.getElementById('image3');

image3.addEventListener('mouseenter', () => {
  image3.style.transform = 'scale(1.2)';
});

image3.addEventListener('mouseleave', () => {
  image3.style.transform = 'scale(1)';
});