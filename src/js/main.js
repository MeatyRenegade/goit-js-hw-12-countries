import refs from './refs.js';
import notify from './notify.js';
import fetchCountries from './fetch-countries.js';
import markupRender from './markup-render.js';

const debounce = require('lodash.debounce');

function searchHandler() {
  const searchQuery = this.value.trim();

  markupRender();

  if (searchQuery !== '') {
    fetchCountries(searchQuery)
      .then(data => markupRender(data))
      .catch(message => notify(message));
  }
}

refs.input.addEventListener('input', debounce(searchHandler, 500));
