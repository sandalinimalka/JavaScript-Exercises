'use strict';

// Get form element
const form = document.querySelector('form');

// Add submit event Listener
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = document.querySelector('input[name="firstname"]').value;
  const lastName = document.querySelector('input[name="lastname"]').value;

  // Pass value to HTML
  document.querySelector('#target').textContent = `Your name is ${firstName} ${lastName}`;
});