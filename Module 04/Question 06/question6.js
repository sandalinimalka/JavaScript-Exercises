'use strict';

const form = document.querySelector('#joke-form');
const query = document.querySelector('#query');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const response = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${query.value}`);
  const data = await response.json();

  results.innerHTML = '';

  for (const joke of data?.result) {
    const article = document.createElement('article');

    const paragraph = document.createElement('p');
    paragraph.textContent = joke?.value;

    article.appendChild(paragraph);
    results.appendChild(article);
  }
});