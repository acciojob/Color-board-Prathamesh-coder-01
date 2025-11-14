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
  // inner span just ensures square keeps aspect ratio set by padding-top
  const inner = document.createElement('span');
  sq.appendChild(inner);

  // mouseenter is non-bubbling and reliable for single-target hover
  sq.addEventListener('mouseenter', () => {
    // set a random color immediately
    const color = randomColor();
    // apply color (triggers CSS transition)
    sq.style.backgroundColor = color;

    // revert after 1 second (1000ms)
    setTimeout(() => {
      // revert to base color — transition defined in CSS causes smooth fade
      sq.style.backgroundColor = BASE_COLOR;
    }, 1000);
  });

  container.appendChild(sq);
}

// random HSL color for good variety
function randomColor() {
  const h = Math.floor(Math.random() * 360);
  const s = 70; // saturation
  const l = 60; // lightness
  return `hsl(${h} ${s}% ${l}%)`;
}

