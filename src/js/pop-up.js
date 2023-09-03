const popUp = document.getElementById("popUp");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector('.close');
const bookList = document.getElementById("book-list")


let selectedBookData = null;

bookList.addEventListener("click", onBookClick)
function onBookClick(evt){
  if(evt.target.tagName === "LI"){
    const id = evt.target.id;
    openModal(id)

    if(selectedBookData){
      createMarkup(selectedBookData)
    }
  }
}

function openModal(id) {
  popUp.style.display = "block";
  selectedBookData = {_id}
}

function createMarkup({_id, book_image, title, author, buy_links, description}){
  `<div class="about-book">
      <div class="cover-book">${book_image}</div>
      <div class="book-info">
        <h1 class="modal-title">${title}</h1>
        <h3 class="modal-author">${author}</h3>
        <p class="book-descr">${description}</p>
        <ul class="sale-platforms-list">
            ${buy_links}
        </ul>
      </div>`
 }


closeBtn.onclick = function() {
  popUp.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
}

