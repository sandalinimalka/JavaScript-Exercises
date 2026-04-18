'use strict';

const element = document.querySelector('#target');

// Create list item elements
const firstListItem = document.createElement('li');
firstListItem.textContent = 'First Item';

const secondListItem = document.createElement('li');
secondListItem.textContent = 'Second Item';

const thirdListItem = document.createElement('li');
thirdListItem.textContent = 'Third Item';

//Append to list items to target element
element.appendChild(firstListItem);
element.appendChild(secondListItem);
element.appendChild(thirdListItem);

//Add Class to target element
element.classList.add('my-item');