'use strict';

const numbers = [];
let num;
do {
  num = Number(prompt('Enter a number: '));
  if (num !== 0) {
    numbers.push(num);
  }
}
while (num !== 0);
console.log('Input Numbers', numbers);

numbers.sort((a, b) => a - b).reverse();
console.log('Ordered List', numbers);