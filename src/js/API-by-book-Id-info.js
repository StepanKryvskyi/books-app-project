import axios from "axios";

const BASE_URL = 'https://books-backend.p.goit.global/books/';

async function requestBookData(bookId){

    // const params = new URLSearchParams(
    //   { _id: bookId,
    //     book_image, 
    //     title, 
    //     author,
    //     description, 
    //     buy_links
    //   })
      return await axios.get(`${BASE_URL}bookId`);
      
      
   }

export { requestBookData }

