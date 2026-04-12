'use strict';

const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

function concat(list) {
  let resultStr = '';
  for (let i = 0; i < list.length; i++) {
    resultStr += list[i];
  }
  return resultStr;
}

const result = concat(names);
document.querySelector('#result').innerHTML = result;