import {requestBookData} from './API-by-book-Id-info'
import {popUp,closeBtn, modalCard, addBook, removeBook, modalEl} from './refs'

const amazon = new URL('../img/popUp/amazon.png', import.meta.url);
const appleBooks = new URL('../img/popUp/applebooks.png', import.meta.url);
const bookShop = new URL('../img/popUp/bookshop.png', import.meta.url);

async function createBookCard(bookId) {
  try {
    const data = await requestBookData(bookId);
    addMarkup(data);
    createBookObj(data);
  } catch (error) {
    console.error(error.message);
  }
}
function addMarkup (data){
    modalCard.innerHTML = createMarkup(data);
  }

function createMarkup(data){
  const {_id, book_image, title, author, buy_links, description, list_name} = data;
  return `<div class="book-id" id=${_id} data-category=${list_name}>
      <img class="book-cover-mw" src="${book_image}" alt="cover-book" >      
      <div class="book-info">
        <div class="thumb">
          <h1 class="modal-title">${title}</h1>
          <h3 class="modal-author">${author}</h3>
        </div>
        <p class="book-descr">${description}</p>
        <ul class="sale-platforms-list"><li class="shop" >
            <a href="${buy_links[0].url}" class="shop-link" target=_blank>

            <img
            class="shops-item-icon"
             src="${amazon}"
            alt="Amazone-logo" 
              />

             </a></li>
             <li class="shop" >
            <a href="${buy_links[1].url}" class="shop-link" target=_blank>
             <img
            class="shops-item-icon"
             src="${appleBooks}"
            alt="Apple-Books-logo" 
              />
             </a></li>
             <li class="shop" >
            <a href="${buy_links[4].url}" class="shop-link" target=_blank>
             <img
            class="shops-item-icon"
             src="${bookShop}"
            alt="Bookshop-logo" 
              />
             </a></li>
        </ul>
      </div>
      
  </div>
      `;
 }

const bookArr = [];
let bookObj = {};

function createBookObj({ _id, book_image, title, author, buy_links, description, list_name }){
  bookObj = {_id, book_image, title, author, buy_links, description, list_name}
}

function onAddBookClick(evt) {
  if (evt.target.tagName === 'BUTTON') {
    if (bookObj) {
      bookArr.push(bookObj);
      localStorage.setItem('books', JSON.stringify(bookArr));
      addBook.classList.add('display')
      removeBook.classList.remove('display')
      removeBook.addEventListener('click', onRemoveBookClick);
    }
  }
}

function onRemoveBookClick(evt) {
  if (evt.target.tagName === 'BUTTON') {
    const bookIdToRemove = bookObj._id;
    const indexToRemove = bookArr.findIndex(
      book => book._id === bookIdToRemove
    );
    if (indexToRemove !== -1) {
      bookArr.splice(indexToRemove, 1);
      localStorage.setItem('books', JSON.stringify(bookArr));
      removeBook.classList.add('display');
      addBook.classList.remove('display');
    }
  }
}

addBook.addEventListener('click', onAddBookClick);

closeBtn.onclick = function () {
  modalEl.classList.remove('active');
    popUp.classList.remove('active');
    document.body.classList.remove('modal-open')
};

closeBtn.onclick = function() {
    modalEl.classList.remove('active');
    popUp.classList.remove('active');
    document.body.classList.remove('modal-open')
}

window.onclick = function(event) {
  if (event.target == popUp) {
    modalEl.classList.remove('active');
	  popUp.classList.remove('active');
    document.body.classList.remove('modal-open')
  }
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalEl.classList.remove('active');
	  popUp.classList.remove('active');
    document.body.classList.remove('modal-open')
  }
})

export { createBookCard, createMarkup}