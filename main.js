const pirateMap = [
  ["f", "o", "o", "x", "o", "o"],
  ["x", "o", "o", "o", "o", "o"],
  ["o", "o", "x", "o", "o", "o"],
  ["o", "x", "o", "o", "o", "x"],
  ["o", "o", "o", "x", "x", "o"],
  ["o", "x", "o", "o", "o", "s"],
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
// renderGrid("map-example");

// Function declaration
function moveForward(arr, x, y) {
  arr[y - 1][x] = "v";
  return [x, y - 1];
}

// Fuction expression
const turnLeft = function (arr, x, y) {
  arr[y][x - 1] = "v";
  return [x - 1, y];
};

// Arrow function
const turnRight = (arr, x, y) => {
  arr[y][x + 1] = "v";
  return [x + 1, y];
};

// const gameStart = startGame(pirateMap);
// const step1 = turnLeft(pirateMap, ...gameStart);
// const step2 = turnLeft(pirateMap, ...step1);
// const step3 = turnLeft(pirateMap, ...step2);
// const step4 = moveForward(pirateMap, ...step3);
// const step5 = moveForward(pirateMap, ...step4);
// const step6 = turnRight(pirateMap, ...step5);
// const step7 = moveForward(pirateMap, ...step6);
// const fourthStep = moveForward(pirateMap, ...step7);
// const fifthStep = turnLeft(pirateMap, ...fourthStep);
// const sixtStep = turnLeft(pirateMap, ...fifthStep);
// const seventhStep = moveForward(pirateMap, ...sixtStep);
// const eightStep = turnLeft(pirateMap, ...seventhStep);

// renderGrid("grid");


window.pirateGame = {
  start: startGame,
  rederGrid,
  pirateMap,
  moveForward,
  turnLeft,
  turnRight
}
