'use strict';
//User Inputs
const startYear = prompt('Enter a year for start:');
const endYear = prompt('Enter a year for end:');

//Convert to Number
const startYearInt = parseInt(startYear);
const endYearInt = parseInt(endYear);

//Create an Empty Array
let leapYears = [];

//Find and Create List Items
for (let i = startYearInt; i <= endYearInt; i++) {
  if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
    console.log('year ', i);
    leapYears.push(`<li>${i}</li>`);
  }
}

//Print
document.querySelector(
    '#header').innerHTML = (`All leap years from the ${startYearInt} to ${endYearInt}:`);
document.querySelector('#year').innerHTML = leapYears.join('');
