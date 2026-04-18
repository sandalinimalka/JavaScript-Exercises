'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

//Get target element
const element = document.querySelector('#target');

// Create options element and append to select using for loop
let option;
for (const item of students) {
  option = document.createElement('option');
  option.value = item.id;
  option.textContent = item.name;
  element.appendChild(option);
}