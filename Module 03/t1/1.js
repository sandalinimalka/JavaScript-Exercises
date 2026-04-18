'use strict';

const listItems = '<li>First item</li>\n' +
    '<li>Second item</li>\n' +
    '<li>Third item</li>';

const element = document.querySelector('#target').innerHTML = listItems;

//Add Class to target element
element.classList.add('my-list');