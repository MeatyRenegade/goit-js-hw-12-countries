import refs from './refs.js';
import notify from './notify.js';
import countriesBox from '../templates/countries-box.hbs';
import countriesList from '../templates/countries-list.hbs';

const applyTemplate = function (template, content) {
  return template(content);
};

function makeMarkup(data = []) {
  const countCountries = data.length;
  let markupHTML = '';

  if (countCountries > 10) {
    notify('To many matches found. \nPlease enter a more specific query!');
  } else {
    if (countCountries === 1) {
      markupHTML = applyTemplate(countriesBox, data);
    }
    if (countCountries > 1) {
      markupHTML = applyTemplate(countriesList, data);
    }
  }

  refs.container.innerHTML = markupHTML;
}

export default makeMarkup;
