const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34883379-49dff39fbbeb84dc4fb8b0daf';
const per_page = 12;
const image_type = 'photo';
const orientation = 'horizontal';
const safesearch = true;

export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&page=${this.page}&per_page=${per_page}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`;

    const response = await fetch(url);
    const images = await response.json();
    this.incrementPage();
    return images;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

// ----------------------------------------------

function fetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}

const api = {
  fetchPokemon,
};

export default api;