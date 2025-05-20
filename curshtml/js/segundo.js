function cambiarEstilo() {
  const texto = document.getElementById('mi-texto');
  const body = document.body;
  const header = document.querySelector('h1');

  texto.textContent = "A funcionó el JS!";
  texto.classList.add('texto-azul');
  body.classList.add('body-lightgray');
  header.classList.add('header-darkblue');
}

function restablecerEstilo() {
  const texto = document.getElementById('mi-texto');
  const body = document.body;
  const header = document.querySelector('h1');

  texto.textContent = "Ya está listo";
  texto.classList.remove('texto-azul');
  body.classList.remove('body-lightgray');
  header.classList.remove('header-darkblue');
}
let coloresOriginales = {
  body: document.body.style.backgroundColor,
  header: document.querySelector('h1').style.backgroundColor,
  headerText: document.querySelector('h1').style.color
};

const body = document.body;
const header = document.querySelector('header'); // Selecciona el elemento header
const cambiarButton = document.getElementById('cambiarColores');
const restablecerButton = document.getElementById('restablecerColores');

function cambiarColores() {
  document.body.style.backgroundColor = 'lightblue';
  document.querySelector('h1').style.backgroundColor = 'pink';
  document.querySelector('h1').style.color = 'white';
}

