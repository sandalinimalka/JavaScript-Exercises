'use strict';
const names = ['John', 'Paul', 'Jones'];

const listItems = [];

// Create list item elements using for loop
let listItem;
for (const item of names) {
  listItem = `<li>${item}</li>`;
  listItems.push(listItem);
}

// Pass value to HTML
document.querySelector('#target').innerHTML = listItems.join('');