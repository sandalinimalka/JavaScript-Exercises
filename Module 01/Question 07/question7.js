'use strict';
//User Input
const numDiceRoll = prompt('Enter the number of dice rolls:');

let sum = 0;
let i = 0;

//Calculate Sum
while (i < numDiceRoll) {
  i++;
  let diceNum = Math.floor(Math.random() * 6) + 1;
  console.log('dice number ', diceNum);

  sum += diceNum;
}

//Print
console.log('sum ', sum);
document.querySelector(
    '#display').innerHTML = (`Sum of the results of the dice rolls is: ${sum}`);