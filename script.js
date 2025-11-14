//your JS code here. If required.
const board = document.getElementById("board");
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    board.appendChild(square);
}

function setColor(square) {
    const color = getRandomColor();
    square.style.background = color;
}

function removeColor(square) {
    // Fade-out happens via CSS transition
    setTimeout(() => {
        square.style.background = "#1d1d1d";
    }, 1000);
}

function getRandomColor() {
    return `hsl(${Math.random() * 360}, 70%, 50%)`;
}
