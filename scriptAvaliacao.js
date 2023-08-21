const stars = document.querySelectorAll('.rating input');
const selectedRating = document.getElementById('selected-rating'); // Elemento para exibir a nota

stars.forEach(star => {
  star.addEventListener('change', (event) => {
    const rating = event.target.value;
    selectedRating.textContent = `Você deu uma nota de ${rating} estrelas.`;

    for (let index = 1; index <= rating; index++) {
        const element = document.getElementById('starlabel'+index);
        element.style.backgroundImage= "url('estrela-preenchida-com-cinco-pontas.png')";
        
    }
    for (let index = parseInt(rating)+1; index <= 5; index++) {
        const element = document.getElementById('starlabel'+index);
        element.style.backgroundImage= "url('estrela-vazia.png')";
        
    }
  });

});


