'use strict';

const dogNames = [];
let name;
for (let i = 0; i < 6; i++) {
  name = prompt(`Enter dog name ${i + 1}: `);
  dogNames.push(name);
}
dogNames.sort().reverse();
console.log('Reverse dog list ', dogNames);

let results = [];
for (let i = 0; i < dogNames.length; i++) {
  results.push(`<li>${dogNames[i]}</li>`);
}

document.querySelector('#names').innerHTML = results.join('');