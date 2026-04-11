'use strict';
//Confirmation
const answer = confirm('Should I calculate the square root?');

let response;
if (answer) {
  //User Input
  const num = prompt('Enter a number:');

  //Convert to Number
  const numINt = parseInt(num);

  if (numINt < 0) {
    response = 'The square root of a negative number is not defined';
  } else {
    response = (`The square root of ${num} is: ${Math.sqrt(numINt).
        toFixed(2)}`);
  }
} else {
  response = 'The square root is not calculated.';
}

//Print
console.log('response ', response);
document.querySelector('#response').innerHTML = response;