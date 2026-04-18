'use strict';

function calculate() {
  // Get numbers and operation value
  const number1 = Number(document.getElementById('num1').value);
  const number2 = Number(document.getElementById('num2').value);
  const type = document.getElementById('operation').value;

  // Calculate
  let result;
  if (type === 'add') {
    result = number1 + number2;
  } else if (type === 'sub') {
    result = number1 - number2;
  } else if (type === 'multi') {
    result = number1 * number2;
  } else if (type === 'div') {
    result = number1 / number2;
  }

  // Pass value to HTML
  document.getElementById('result').innerHTML = result;
}