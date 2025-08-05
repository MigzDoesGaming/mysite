const tileGrid = document.getElementById("tileGrid");

const totalColumns = 20;
const tilesPerColumn = 12;

for (let i = 0; i < totalColumns; i++) {
  const column = document.createElement("div");
  column.className = "tile-column";

  // Offset every other column downward for staggered effect
  if (i % 2 !== 0) {
    column.style.marginTop = "50px"; // adjust to taste
  }

  for (let j = 0; j < tilesPerColumn; j++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    column.appendChild(tile);
  }

  tileGrid.appendChild(column);
}
