const tileGrid = document.getElementById("tileGrid");

const totalColumns = 20;
const tilesPerColumn = 12;

for (let i = 0; i < totalColumns; i++) {
  const column = document.createElement("div");
  column.className = "tile-column";

  for (let j = 0; j < tilesPerColumn; j++) {
    const tile = document.createElement("div");
    tile.className = "tile";

    // Add vertical offset to every other tile
    if (j % 2 !== 0) {
      tile.style.marginTop = "20px"; // adjust the offset as needed
    }

    column.appendChild(tile);
  }

  tileGrid.appendChild(column);
}
