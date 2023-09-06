import {requestBookData} from './API-by-book-Id-info'
import {popUp,closeBtn, modalCard, addBook, removeBook, bookArr} from './refs'

async function createBookCard(bookId) {
  try {
    const data = await requestBookData(bookId);

    function addMarkup(data) {
      modalCard.innerHTML = createMarkup(data);
    }
    addMarkup(data);
    createBookObj(data);
    activateRemoveButton();

  } catch (error) {
    console.error(error.message);
  }
  
}
function createBookObj(_id, book_image, title, author, buy_links, description){
  const bookObj = {_id, book_image, title, author, buy_links, description}
}
function createMarkup(data){
  const {_id, book_image, title, author, buy_links, description,book_image_height, book_image_width} = data;
  return `<div class="book-id" id=${_id} >
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
             src="./img/popUp/amazon.png"
            alt="Amazone-logo" 
              />

             </a></li>
             <li class="shop" >
            <a href="${buy_links[1].url}" class="shop-link" target=_blank>
             <img
            class="shops-item-icon"
             src="./img/popUp/applebooks.png"
            alt="Apple-Books-logo" 
              />
             </a></li>
             <li class="shop" >
            <a href="${buy_links[4].url}" class="shop-link" target=_blank>
             <img
            class="shops-item-icon"
             src="./img/popUp/bookshop.png"
            alt="Bookshop-logo" 
              />
             </a></li>
        </ul>
      </div>
      
  </div>
      `;
 }


function activateRemoveButton() {
  removeBook.style.display = 'block';
}

function onAddBookClick(evt) {
  if (evt.target.tagName === 'BUTTON') {
    if (bookObj) {
      bookArr.push(bookObj);
      localStorage.setItem('books', JSON.stringify(bookArr));
      addBook.removeEventListener('click', onAddBookClick);
      removeBook.addEventListener('click', onRemoveBookClick);
    }
  }
}


// closeBtn.onclick = function() {
//   // modalEl.classList.remove('active');
// 	// popUp.classList.remove('active');
//   popUp.style.display = "none";
//   document.body.style.overflow = "";}

function onRemoveBookClick(evt) {
  if (evt.target.tagName === 'BUTTON') {
    const bookIdToRemove = bookObj._id;
    const indexToRemove = bookArr.findIndex(
      book => book._id === bookIdToRemove
    );
    if (indexToRemove !== -1) {
      bookArr.splice(indexToRemove, 1);
      localStorage.setItem('books', JSON.stringify(bookArr));
      removeBook.removeEventListener('click', onRemoveBookClick);
      addBook.addEventListener('click', onAddBookClick);
      removeBook.style.display = 'none';
    }
  }
}

addBook.addEventListener('click', onAddBookClick);
closeBtn.onclick = function () {
  popUp.style.display = 'none';
};


window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
    document.body.style.overflow = "";
  }
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    popUp.style.display = 'none';
    document.body.style.overflow = "";
  }
})



export { createBookCard, createMarkup}