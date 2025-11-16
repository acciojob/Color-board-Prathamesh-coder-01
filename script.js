// create 800 squares inside .container
const SQUARES = 800;
const container = document.querySelector('.container');
const BASE_COLOR = '#1d1d1d'; 

for (let i = 0; i < SQUARES; i++) {
  const sq = document.createElement('div');
  sq.className = 'square';

  const inner = document.createElement('span');
  sq.appendChild(inner);

  sq.addEventListener('mouseenter', () => {
    const color = randomColor();
    sq.style.backgroundColor = color;

    setTimeout(() => {
      sq.style.backgroundColor = BASE_COLOR;
    }, 1000);
  });

  container.appendChild(sq);
}

function randomColor() {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h}, 70%, 60%)`;
}

