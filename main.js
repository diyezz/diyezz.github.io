const pirateMap = [
  ["f: (0,0)", "o", "o", "x", "o", "o"],
  ["x", "o", "o", "o", "o", "o"],
  ["o", "o", "x", "o", "o", "o"],
  ["o", "x", "o", "o", "o", "x"],
  ["o", "o", "o", "x", "x", "o"],
  ["o", "x", "o", "o", "o", "s: (5,5)"],
];

const startGame = (arr) => {
  const lastItem = arr.length - 1;
  arr[lastItem][lastItem] = 'v';
  return [lastItem, lastItem];
};
const renderGrid = (id) => {
  const gridContainer = document.getElementById(id);

  pirateMap.forEach((row) => {
    row.forEach((cellValue) => {
      const cell = document.createElement("div");
      cell.className = "cell " + cellValue;
      cell.textContent = cellValue;
      gridContainer.appendChild(cell);
    });
  });
};

window.PIRATE_GAME = {
  start: startGame,
  renderGrid,
  pirateMap
}

Object.defineProperty(PIRATE_GAME, "hint", {
  value: () => console.log("find hint in result.js"),
  writable: false
});
