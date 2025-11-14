// create 800 squares inside .container, handle hover color and 1s fade-out
const SQUARES = 800;
const container = document.querySelector('.container');
const BASE_COLOR = '#1d1d1d'; // must match CSS .square background for reliable revert

if (!container) {
  throw new Error('No element with class "container" found.');
}

for (let i = 0; i < SQUARES; i++) {
  const sq = document.createElement('div');
  sq.className = 'square';

  // inner span keeps the aspect ratio trick working and avoids collapsing
  const inner = document.createElement('span');
  sq.appendChild(inner);

  // Use mouseenter (non-bubbling) for reliable single-target hover
  sq.addEventListener('mouseenter', () => {
    const color = randomColor();
    sq.style.backgroundColor = color; // triggers CSS transition

    // revert after exactly 1000ms (1s)
    setTimeout(() => {
      sq.style.backgroundColor = BASE_COLOR;
    }, 1000);
  });

  container.appendChild(sq);
}

// random HSL color
function randomColor() {
  const h = Math.floor(Math.random() * 360);
  const s = 70; // saturation %
  const l = 60; // lightness %
  return `hsl(${h}, ${s}%, ${l}%)`;
}

