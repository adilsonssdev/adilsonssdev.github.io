let  imSlider = document.querySelectorAll('.carrossel-container .carrossel-item');
let  btnProx = document.querySelector('#proximo');
let  btnAnte = document.querySelector('#anterior');
let  btnNav = document.querySelectorAll('.btn-nav-box .btn-nav')

let  qtdImagens = imSlider.length;
let  imgAtiva = 0;

function mostrarSlider(){
  let antigaImg = document.querySelector('.carrossel-container .carrossel-item.ativo')
  let antigoBtnNav = document.querySelector('.btn-nav-box .btn-nav.ativo')  

  antigaImg.classList.remove('ativo');
  antigoBtnNav.classList.remove('ativo');

  imSlider[imgAtiva].classList.add('ativo');
  btnNav[imgAtiva].classList.add('ativo');
}


// Evento para o botão "Próxima"
btnProx.addEventListener('click', () => {
  imgAtiva++;
  if (imgAtiva >= qtdImagens) {
    imgAtiva = 0;
  }
  mostrarSlider();
});

// Evento para o botão "Anterior"
btnAnte.addEventListener('click', () => {
  imgAtiva--;
  if (imgAtiva < 0) {
    imgAtiva = qtdImagens - 1;
  }
  mostrarSlider();
});

// Evento para os botões de navegação
btnNav.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    imgAtiva = index;
    mostrarSlider();
  });
});

// Mostra o primeiro slide ao carregar a página
mostrarSlider();

