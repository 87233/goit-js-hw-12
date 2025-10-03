import axios from 'axios';
const API_KEY = '52560033-9cbbf5f969f605b9fcf55c2f5';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };
  const res = await axios.get(BASE_URL, { params });
  return res.data;
}
