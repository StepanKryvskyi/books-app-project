
import {requestBookData} from './API-by-book-Id-info'
import {popUp,closeBtn, modalCard, addBook, removeBook, bookArr} from './refs'

async function createBookCard(bookId) {
  try {
    const data = await requestBookData(bookId);

    
    function addMarkup(data){
      modalCard.innerHTML = createMarkup(data)  
     }
     console.log(data);
    addMarkup(data)
    createBookObj(data)
  } catch (error) {
    console.error(error.message);
  }
}

function createBookObj(_id, book_image, title, author, buy_links, description) {
  bookObj = { _id, book_image, title, author, buy_links, description };
}

function createMarkup(data){
  const {_id, book_image, title, author, buy_links, description,book_image_height, book_image_width} = data;

  return `<div class="book-id" id=${_id} >
      <img class="book-cover-mw" src="${book_image}" alt="cover-book" >      
      <div class="book-info">
        <h1 class="modal-title">${title}</h1>
        <h3 class="modal-author">${author}</h3>
        <p class="book-descr">${description}</p>
        <ul class="sale-platforms-list"><li class="shop" >
            <a href="${buy_links[0].url}" class="shop-link" target=_blank>
             <img
            class="shops-item-icon"
             src="../img/shopping-list-icon/company-1.png"
            alt="Amazon-logo" 
              />
             </a></li>
             <li class="shop" >
            <a href="${buy_links[1].url}" class="shop-link" target=_blank>
             <img
            class="shops-item-icon"
             src="../img/shopping-list-icon/company-2.png"
            alt="Apple-Books-logo" 
              />
             </a></li>
             <li class="shop" >
            <a href="${buy_links[4].url}" class="shop-link" target=_blank>
             <img
            class="shops-item-icon"
             src="../img/shopping-list-icon/company-3.png"
            alt="Bookshop-logo" 
              />
             </a></li>
        </ul>
      </div>
      
  </div>
      `;
}

addBook.addEventListener('click', onAddBookClick);


closeBtn.onclick = function() {
  popUp.style.display = "none";
  document.body.style.overflow = "";

}

closeBtn.onclick = function () {
  popUp.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == popUp) {

    popUp.style.display = "none";
    document.body.style.overflow = "";
  }
};


window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    popUp.style.display = 'none';
    document.body.style.overflow = "";
  }
})



export { createBookCard, createMarkup}