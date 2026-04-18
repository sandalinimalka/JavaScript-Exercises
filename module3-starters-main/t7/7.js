'use strict';

//Get elements
const imgElement = document.querySelector('#target');
const triggerElement = document.querySelector('#trigger');

// Add mouseover event Listener to change image pic A to pic B
triggerElement.addEventListener('mouseover', () => {
  imgElement.src = 'img/picB.jpg';
});

// Add mouseover event Listener to change image pic B to pic A
triggerElement.addEventListener('mouseout', () => {
  imgElement.src = 'img/picA.jpg';
});