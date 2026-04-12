'use strict';

const numbers = [];
let num;
for (let i = 0; i < 5; i++) {
  num = prompt(`Enter Number ${i + 1}: `);
  numbers.push(num);
}

console.log('input array', numbers);

const reverseNumbers = [];
for (let i = numbers.length; i !== 0; i--) {
  reverseNumbers.push(numbers[i - 1]);
}

console.log('reverse array', reverseNumbers);