'use strict';
//User Inputs
const numDice = prompt('Enter the Number of Dice:');
const sumEyeNum = prompt(
    'Enter the sum of the eye numbers of interest to you:');

//Convert to Number
const numDiceInt = parseInt(numDice);
const sumEyeNumInt = parseInt(sumEyeNum);

const simulations = 10000;
let matchCount = 0;

//Find Match Count
for (let i = 0; i < simulations; i++) {

  let sum = 0;

  for (let j = 0; j < numDiceInt; j++) {
    sum += Math.floor(Math.random() * 6) + 1;

  }

  if (sum === sumEyeNumInt) {
    matchCount++;
  }
}
console.log('matchCount ', matchCount);

//Calculate Probability
const probability = (matchCount / simulations) * 100;

//Print
console.log('probability ', probability);
document.querySelector(
    '#result').innerHTML = `Probability to get sum ${sumEyeNumInt} with ${numDiceInt} dice is ${probability.toFixed(
    2)}%`;
