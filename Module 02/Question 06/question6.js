'use strict';

function getDiceValue() {
  return Math.floor(Math.random() * 6) + 1;
}

const results = [];
let diceValue;

do {
  diceValue = getDiceValue();
  console.log('Dice Value', diceValue);
  results.push(`<li>${diceValue}</li>`);
} while (diceValue !== 6);

document.querySelector('#dice').innerHTML = results.join('');