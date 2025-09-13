// === TILE GRID ===
const tileGrid = document.getElementById("tileGrid");

const totalColumns = 32; // Increased from 28 to cover wider footer
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

const originalFont = '"Inter", sans-serif';
const name = "juan miguel sanchez";
const nameContainer = document.getElementById("animated-name");

// Clear any existing content
nameContainer.innerHTML = "";

// Wrap each letter in a span and insert line break after "miguel"
[...name].forEach((char, index) => {
  if (char === " ") {
    if (index === 10) {
      // After "miguel", insert a line break
      nameContainer.appendChild(document.createElement("br"));
    } else {
      // Else insert a space character
      const space = document.createTextNode(" ");
      nameContainer.appendChild(space);
    }
  } else {
    const span = document.createElement("span");
    span.textContent = char;
    nameContainer.appendChild(span);
  }
});

const spans = nameContainer.querySelectorAll("span");

let time = 0;
const interval = 400;
const duration = 4000;

const fontInterval = setInterval(() => {
  spans.forEach(span => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    span.style.fontFamily = randomFont;
  });

  time += interval;
  if (time >= duration) {
    clearInterval(fontInterval);
    spans.forEach(span => {
      span.style.fontFamily = originalFont;
    });
  }
}, interval);
