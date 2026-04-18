'use strict';

function calculate() {
  // Get formula
  const formula = document.getElementById('calculation').value.toString();

  // Calculate
  let result;
  if (formula.includes('+')) {
    const numbers = formula.split('+');
    result = Number(numbers[0]) + Number(numbers[1]);
  } else if (formula.includes('-')) {
    const numbers = formula.split('-');
    result = Number(numbers[0]) - Number(numbers[1]);
  } else if (formula.includes('*')) {
    const numbers = formula.split('*');
    result = Number(numbers[0]) * Number(numbers[1]);
  } else if (formula.includes('/')) {
    const numbers = formula.split('/');
    result = Number(numbers[0]) / Number(numbers[1]);
  }

  // Pass value to HTML
  document.getElementById('result').innerHTML = result;
}
