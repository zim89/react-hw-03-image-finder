import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '34883379-49dff39fbbeb84dc4fb8b0daf';
const per_page = 12;
const image_type = 'photo';
const orientation = 'horizontal';
const safesearch = true;

const fetchImages = async (searchQuery, page = 1) => {
  const response = await axios.get(
    `/?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=${per_page}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`
  );
  return response.data;
};

const api = {
  fetchImages,
};

export default api;
