import axios from "axios";

const BASE_URL = 'https://books-backend.p.goit.global/books/';

async function getSelectedBookData(bookId){

    // const params = new URLSearchParams(
    //   { _id: bookId,
    //     book_image, 
    //     title, 
    //     author,
    //     description, 
    //     buy_links
    //   })
      const resp = await axios.get(`${BASE_URL}bookId`);
      const selectedBookData = resp.data
      console.log(selectedBookData);
      return selectedBookData
      
   }

export { getSelectedBookData }