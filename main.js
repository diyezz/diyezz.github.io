"use strict";

// Function declaration
function moveForward(arr, x, y) {
  arr[y - 1][x] = 'v';
  return [x, y - 1];
}

// Fuction expression
const turnLeft = function(arr, x, y) {
  arr[y][x - 1] = 'v';
  return [x - 1, y];
}

// Arrow function
const turnRight = (arr, x, y) => {
  arr[y][x + 1]= 'v';
  return [x + 1, y];
}

function generateMap(length) {
  const subArray = new Array(length).fill('o')
  const map = new Array(length).fill(subArray);
  const lastIndex = length - 1;

  const drawMap = map.map(el => {
    const newEl = [...el];
    const random = Math.floor(Math.random() * lastIndex);

    newEl[random] = 'x';

    return newEl;
  });

  drawMap[lastIndex][lastIndex] = 'v';

  return drawMap;
}


const firstStep = turnLeft(pirateMap, 4, 4)
const secondStep = moveForward(pirateMap, ...firstStep);
const thirdStep = moveForward(pirateMap, ...secondStep);
const fourthStep = moveForward(pirateMap, ...thirdStep);
const fifthStep = turnLeft(pirateMap, ...fourthStep);
const sixtStep = turnLeft(pirateMap, ...fifthStep);
const seventhStep = moveForward(pirateMap, ...sixtStep);
const eightStep = turnLeft(pirateMap, ...seventhStep);

console.log(pirateMap);