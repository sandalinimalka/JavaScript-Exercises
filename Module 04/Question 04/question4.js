'use strict';

const form = document.getElementById('searchForm');
const query = document.getElementById('query');
const results = document.getElementById('results');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query.value}`);
    const data = await response.json();
    console.log('TV series ', data);

    results.innerHTML = '';

    for (const tvShow of data) {
      const article = document.createElement('article');

      const title = document.createElement('h2');
      title.textContent = tvShow.show.name;

      const link = document.createElement('a');
      link.href = tvShow.show.url;
      link.target = '_blank';
      link.textContent = 'Show details';

      const image = document.createElement('img');
      image.src = tvShow.show.image
          ? tvShow.show.image.medium
          : 'https://placehold.co/210x295?text=Not%20Found';
      image.alt = tvShow.show.name;

      const summary = document.createElement('div');
      summary.innerHTML = tvShow.show.summary;

      article.appendChild(title);
      article.appendChild(link);
      article.appendChild(image);
      article.appendChild(summary);

      results.appendChild(article);
    }

  } catch (error) {
    console.log(error.message);
  }
});