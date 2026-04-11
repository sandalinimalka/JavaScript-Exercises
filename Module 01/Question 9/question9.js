'use strict';
//User Input
const num = prompt('Enter a Number:');

//Convert to Number
const numInt = parseInt(num);

//Find Number is Prime or Not
let isPrimeNumber = true;
if (numInt < 2) {
  isPrimeNumber = false;
} else {
  for (let i = 2; i < numInt; i++) {
    if (numInt % i === 0) {
      isPrimeNumber = false;
    }
  }
}

//Create Result
let primeResult;
if (isPrimeNumber) {
  primeResult = `Number ${numInt} is a Prime Number!`;
} else {
  primeResult = `Number ${numInt} is not a Prime Number!`;
}

//Print
console.log('prime result ', primeResult);
document.querySelector('#primeNumber').innerHTML = primeResult;

