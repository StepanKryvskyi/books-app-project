import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

async function makeRequestByCategory(category) {
  return await axios.get(`${BASE_URL}category?category=${category}`);
}

export { makeRequestByCategory };

async function getSelectedBookData(bookId){
  const params = new URLSearchParams(
    { _id: bookId,
      book_image, 
      title, 
      author,
      description, 
      buy_links
    })
    const resp = await axios.get(`?${params}`);
    const selectedBookData = resp.data
    return selectedBookData

 }

 export { getSelectedBookData }