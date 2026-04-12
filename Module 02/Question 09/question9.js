'use strict';

function even(numbers) {
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  return evenNumbers;
}

const numbers = [2, 7, 4, 9, 12, 15, 20];
const newArray = even(numbers);

console.log('All Numbers:', numbers);
console.log('Even Numbers:', newArray);