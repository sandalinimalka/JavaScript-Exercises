'use strict';

function getDiceValue() {
  return Math.floor(Math.random() * 6) + 1;
}

const results = [];
let diceValue = getDiceValue();
console.log(diceValue);
while (diceValue !== 6) {
  console.log('Dice Value', diceValue);
  results.push(`<li>${diceValue}</li>`);
  diceValue = getDiceValue();
}

document.querySelector('#dice').innerHTML = results.join('');