PIRATE_GAME.renderGrid("map-example");

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

const gameStart = PIRATE_GAME.startGame(pirateMap);
const step1 = PIRATE_GAME.turnLeft(pirateMap, ...gameStart);
const step2 = PIRATE_GAME.turnLeft(pirateMap, ...step1);
const step3 = PIRATE_GAME.turnLeft(pirateMap, ...step2);
const step4 = PIRATE_GAME.moveForward(pirateMap, ...step3);
const step5 = PIRATE_GAME.moveForward(pirateMap, ...step4);
const step6 = PIRATE_GAME.turnRight(pirateMap, ...step5);
const step7 = PIRATE_GAME.moveForward(pirateMap, ...step6);
const fourthStep = PIRATE_GAME.moveForward(pirateMap, ...step7);
const fifthStep = PIRATE_GAME.turnLeft(pirateMap, ...fourthStep);
const sixtStep = PIRATE_GAME.turnLeft(pirateMap, ...fifthStep);
const seventhStep = PIRATE_GAME.moveForward(pirateMap, ...sixtStep);
const eightStep = PIRATE_GAME.turnLeft(pirateMap, ...seventhStep);

PIRATE_GAME.renderGrid("grid");
