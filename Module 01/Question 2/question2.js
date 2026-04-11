'use strict';
//User Input
const name = prompt('Enter your name: ');

//Print
console.log(`Hello, ${name}!`);
document.querySelector('#greet').innerHTML = `Hello, ${name}!`;