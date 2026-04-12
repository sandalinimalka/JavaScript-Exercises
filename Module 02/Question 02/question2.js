'use strict';
const count = prompt('Enter the number of participants: ');

const names = [];
let name;
for (let i = 0; i < count; i++) {
  name = prompt(`Enter the name participant ${i + 1}: `);
  names.push(name);
}
names.sort();
console.log('participants ', names);

const results = [];
for (let i = 0; i < names.length; i++) {
  results.push(`<li>${names[i]}</li>`);
}

document.querySelector('#names').innerHTML = results.join('');