import axios from "axios";
import { getSelectedBookData } from "./API/API-by-categories";

const popUp = document.getElementById("popUp");
// const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector('.close');
const modalCard = document.querySelector('.book-card')
const galleryList = document.querySelector(".gallery")
const BASE_URL = 'https://books-backend.p.goit.global/books/';


let selectedBookData = null;

galleryList.addEventListener("click", onBookClick)
function onBookClick(evt){
  if(evt.target.tagName === "LI"){
    const bookId = evt.target.id;
    openModal(bookId)
      console.log(bookId);
    if(selectedBookData){
      createMarkup(selectedBookData)
    }
  }
}
export{onBookClick}
 console.log(getSelectedBookData(bookId));

async function openModal(bookId) {
  try {
    selectedBookData = await getSelectedBookData(bookId);
    console.log(selectedBookData);
    addMarkup(selectedBookData);
  } catch (error) {
    console.error(error.message);
  }
  popUp.style.display = "block";
}

function createMarkup({_id, book_image, title, author, buy_links, description}){
  `<div class="cover-book">${book_image}</div>
      <div class="book-info">
        <h1 class="modal-title">${title}</h1>
        <h3 class="modal-author">${author}</h3>
        <p class="book-descr">${description}</p>
        <ul class="sale-platforms-list">
            ${buy_links}
        </ul>
      </div>`
 }
 function addMarkup(selectedBookData){
  modalCard.innerHTML = createMarkup(selectedBookData)  
 }


closeBtn.onclick = function() {
  popUp.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
}

