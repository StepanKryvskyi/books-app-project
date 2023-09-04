import axios from "axios";
import {requestBookData} from './API-by-book-Id-info'

const popUp = document.getElementById("popUp");
const closeBtn = document.querySelector('.close');
const modalCard = document.querySelector('.book-card');








async function createBookCard(bookId) {
  try {
    const data = await requestBookData(bookId);
    console.log(data);
    addMarkup(data);
  } catch (error) {
    console.error(error.message);
  }
  
}

function createMarkup({_id, book_image, title, author, buy_links, description}){
  `<div id=${_id} class="cover-book">${book_image}</div>
      <div class="book-info">
        <h1 class="modal-title">${title}</h1>
        <h3 class="modal-author">${author}</h3>
        <p class="book-descr">${description}</p>
        <ul class="sale-platforms-list">
            ${buy_links}
        </ul>
      </div>`
 }
 function addMarkup(data){
  modalCard.innerHTML = createMarkup(data)  
 }


closeBtn.onclick = function() {
  popUp.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
}

export { createBookCard, createMarkup}