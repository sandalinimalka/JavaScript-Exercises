'use strict';
//User Inputs
const num1Str = prompt('Enter a integer 1: ');
const num2Str = prompt('Enter a integer 2: ');
const num3Str = prompt('Enter a integer 3: ');

//Change the type
const num1Int = parseInt(num1Str);
const num2Int = parseInt(num2Str);
const num3Int = parseInt(num3Str);

//Calculate sum
const sum = num1Int + num2Int + num3Int;
console.log('sum ', sum);

//Calculate product
const product = num1Int * num2Int * num3Int;
console.log('product ', product);

//Calculate average
const average = sum / 3;
console.log('average ', average.toFixed(2));

//Print
document.querySelector('#sum').innerHTML = `Sum of the numbers: ${sum}`;
document.querySelector(
    '#product').innerHTML = `Product of the numbers: ${product}`;
document.querySelector(
    '#average').innerHTML = `Average of the numbers: ${average.toFixed(2)}`;
