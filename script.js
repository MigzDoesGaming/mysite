// === TILE GRID ===
const tileGrid = document.getElementById("tileGrid");

const totalColumns = 28;
const tilesPerColumn = 6;

for (let i = 0; i < totalColumns; i++) {
  const column = document.createElement("div");
  column.className = "tile-column";

  // Slight horizontal offset for diagonal look
  column.style.transform = `translateX(${i * 5}px)`;

  for (let j = 0; j < tilesPerColumn; j++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    column.appendChild(tile);
  }

  tileGrid.appendChild(column);
}

// === TEXT ANIMATION ===
const fonts = [
  '"Special Gothic Expanded One", sans-serif',
  '"Anton", sans-serif',
  '"Archivo Black", sans-serif',
  '"Passion One", sans-serif',
  '"Roboto Condensed", sans-serif',
  '"Inter", sans-serif',
  '"Google Sans Code", monospace'
];

const target = document.querySelector(".name-heading h1");
const originalText = target.textContent;
target.textContent = ""; // Clear text

// Wrap each letter in a span
[...originalText].forEach(char => {
  const span = document.createElement("span");
  span.textContent = char;
  target.appendChild(span);
});

const spans = target.querySelectorAll("span");

// Animate for 4 seconds, every 0.4s
let time = 0;
const interval = 400; // 0.4s
const duration = 4000; // 4s
const originalFont = '"Inter", sans-serif'; // Your final font

const fontInterval = setInterval(() => {
  spans.forEach(span => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    span.style.fontFamily = randomFont;
  });

  time += interval;
  if (time >= duration) {
    clearInterval(fontInterval);

    // Revert to original font
    spans.forEach(span => {
      span.style.fontFamily = originalFont;
    });
  }
}, interval);
