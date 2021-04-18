const fetchCountries = searchQuery => {
  const url = `http://restcountries.eu/rest/v2/name/${searchQuery}?fields=name;capital;languages;population;flag`;
  return fetch(url).then(response => {
    if (response.ok) return response.json();
    throw new Error(`Fetching data: ${response.status}`);
  });
};

export default fetchCountries;
