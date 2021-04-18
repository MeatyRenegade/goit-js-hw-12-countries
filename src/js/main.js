import refs from './refs.js';
import notify from './notify.js';
import fetchCountries from './fetchCountries.js';
import markup from './markup-render.js';

const debounce = require('lodash.debounce');

function searchHandler(event) {
  const searchQuery = this.value.trim();
  markup();
  if (searchQuery !== '') {
    fetchCountries(searchQuery)
      .then(data => markup(data))
      .catch(message => notify(message));
  }
}

refs.input.addEventListener('input', debounce(searchHandler, 500));
