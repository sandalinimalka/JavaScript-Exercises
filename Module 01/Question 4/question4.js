'use strict';
//User Inputs
const name = prompt('Enter your name: ');

//Random Chose
let result;
const options = Math.floor(Math.random() * 4) + 1;

//Chose class
switch (options) {
  case 1:
    result = `${name}, you are Gryffindor!`;
    break;
  case 2:
    result = `${name}, you are Slytherin!`;
    break;
  case 3:
    result = `${name}, you are Hufflepuff!`;
    break;
  case 4:
    result = `${name}, you are Ravenclaw!`;
    break;
}

//Print
console.log('choice ', result);
document.querySelector('#classes').innerHTML = result;
