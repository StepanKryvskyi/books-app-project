import axios from "axios";

const BASE_URL = 'https://books-backend.p.goit.global/books/';

async function requestBookData(bookId){      
      return await axios.get(`${BASE_URL}${bookId}`)
  .then((resp) => {
      return resp.data
  } )
   }

export { requestBookData }

