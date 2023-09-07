import {requestBookData} from './API-by-book-Id-info'
import {popUp,closeBtn, modalCard, addBook, removeBook, bookArr, modalEl} from './refs'

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

 addBook.addEventListener("click", onAddBookClick)

 function onAddBookClick(evt){
  if(evt.target.tagName === "BUTTON")
  bookArr.push(bookObj)
  localStorage.setItem("books", JSON.stringify(bookArr))
 }

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