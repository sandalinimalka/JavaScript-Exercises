'use strict';

const numbers = [];

let num = Number(prompt('Enter a number: '));
while (!numbers.includes(num)) {
  numbers.push(num);
  num = Number(prompt('Enter a number: '));
}
console.log(`Number ${num} has already been given!`);
console.log(numbers.sort((a, b) => a - b));