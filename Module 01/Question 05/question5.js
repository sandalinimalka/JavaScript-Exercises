'use strict';
//User Input
const year = prompt('Enter a year:');

let result;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  result = `${year} year is a Leap Year`;
} else {
  result = `${year} year is not a Leap Year`;
}

console.log('result ', result);
document.querySelector('#year').innerHTML = result;