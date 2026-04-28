'use strict';

const form = document.getElementById('searchForm');
const query = document.getElementById('query');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query.value}`);
    const data = await response.json();
    console.log('TV series ', data);
  } catch (error) {
    console.log(error.message);
  }
});