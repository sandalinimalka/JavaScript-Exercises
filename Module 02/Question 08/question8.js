'use strict';

const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
let result = '';

function concat() {
  for (let i = 0; i < names.length; i++) {
    result += names[i];
  }
}

concat();
document.querySelector('#result').innerHTML = result;