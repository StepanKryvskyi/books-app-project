import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

async function makeRequestByCategory(category) {
  return await axios.get(`${BASE_URL}category?category=${category}`);
}

export { makeRequestByCategory };
