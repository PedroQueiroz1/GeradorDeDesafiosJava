const frontends = ['Angular', 'JSF + Primefaces', 'JavaFX', 'Servlets + JSP', 'Java Swing', 'AWT (Abstract Window Toolkit)'];
const bancosDeDados = ['MySQL', 'PostgreSQL', 'Oracle DB'];
const spring = ['Sim', 'Não'];
const tema = ['Carrinho de compras (1..N)', 'Banco + cadastro/login', 'Lista de Tarefas']

const frontendEl = document.querySelector('.frontend');
const bancoDeDadosEl = document.querySelector('.bancodedados');
const springEl = document.querySelector('.spring');
const temaEl = document.querySelector('.tema');
const btnSorteio = document.querySelector('#btn-sorteio');

function sortear() {
  const randomFrontend = frontends[Math.floor(Math.random() * frontends.length)];
  const randomBancoDeDados = bancosDeDados[Math.floor(Math.random() * bancosDeDados.length)];
  const randomSpring = spring[Math.floor(Math.random() * spring.length)];
  const randomTema = tema[Math.floor(Math.random() * tema.length)];

  frontendEl.textContent = `Frontend: ${randomFrontend}`;
  bancoDeDadosEl.textContent = `Banco de Dados: ${randomBancoDeDados}`;
  springEl.textContent = `Spring: ${randomSpring}`;
  temaEl.textContent = `Tema: ${randomTema}`;
}

btnSorteio.addEventListener('click', sortear);