import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

// Request for bestsellers all categories

async function makeRequestAllBooks() {
  return await axios.get(`${BASE_URL}top-books`);
}

// Request for books of chosen category

async function makeRequestByCategory(category) {
  return await axios.get(`${BASE_URL}category?category=${category}`);
}

export { makeRequestByCategory, makeRequestAllBooks };
