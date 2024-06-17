const coracao = document.querySelector('.coracao');

coracao.addEventListener('click', () => {
  coracao.style.animationDirection = coracao.style.animationDirection === 'normal' ? 'reverse' : 'normal';
});

const fundo = document.querySelector('.fundo');
const cores = ['#f0dbff', '#fff9c4', '#e6e6fa'];
let indiceCor = 0;

setInterval(() => {
  fundo.style.backgroundColor = cores[indiceCor];
  indiceCor = (indiceCor + 1) % cores.length;
}, 3000);

const container = document.querySelector('.imagem-container');

function setBackgroundSize() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  if (windowWidth >= windowHeight) {
    container.style.backgroundImage = 'url("/trilha1/tarefa9/img/imagem-mulheres-wide.jpg")'; // Use different URLs if needed
  } else {
    container.style.backgroundImage = 'url("/trilha1/tarefa9/img/imagem-mulheres-tall.jpg")';  // Use different URLs if needed
  }
}

window.addEventListener('resize', setBackgroundSize);
setBackgroundSize();
