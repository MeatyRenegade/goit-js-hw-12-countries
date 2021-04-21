function fetchCountries(searchQuery) {
  const filter = '?fields=name;capital;languages;population;flag';
  const url = `http://restcountries.eu/rest/v2/name/${searchQuery}${filter}`;

  return fetch(url).then(response => response.json());
}

export default fetchCountries;
