'use strict';

function getDiceValue(diceSides) {
  return Math.floor(Math.random() * diceSides) + 1;
}

const diceSidesInput = Number(prompt('Enter the number of sides: '));

const results = [];
let diceValue;

do {
  diceValue = getDiceValue(diceSidesInput);
  console.log('Dice Value', diceValue);
  results.push(`<li>${diceValue}</li>`);
}
while (diceValue !== diceSidesInput);

document.querySelector('#dice').innerHTML = results.join('');