import { requestBookData } from './API-by-book-Id-info';
import {
  popUp,
  closeBtn,
  modalCard,
  addBookBtn,
  removeBookBtn,
  modalEl,
} from './refs';

const amazon = new URL('../img/popUp/amazon.png', import.meta.url);
const appleBooks = new URL('../img/popUp/applebooks.png', import.meta.url);
const bookShop = new URL('../img/popUp/bookshop.png', import.meta.url);

async function createBookCard(bookId) {
  try {
    const data = await requestBookData(bookId);

    addMarkup(data);
    createBookObj(data);
    const prevBooks = JSON.parse(localStorage.getItem('books')) ?? []
    if(prevBooks.some(book => book._id === data._id)) {
      showRemoveBtn()
    } else {
      showAddBtn()
    }

  } catch (error) {
    console.error(error.message);
  }
  function addMarkup(data) {
    modalCard.innerHTML = createMarkup(data);
  }
}

function createMarkup(data) {
  const {
    _id,
    book_image,
    title,
    author,
    buy_links,
    description,
    book_image_height,
    book_image_width,
  } = data;
  return `
  <div class="book-id" id="${_id}">
  <img class="book-cover-mw" src="${book_image}" alt="cover-book" />
  <div class="book-info">
    <div class="thumb">
      <h1 class="modal-title">${title}</h1>
      <h3 class="modal-author">${author}</h3>
    </div>
    <p class="book-descr">${description}</p>
    <ul class="sale-platforms-list">
      <li class="shop">
        <a href="${buy_links[0].url}" class="shop-link" target="_blank">
          <img class="shops-item-icon" src="${amazon}" alt="Amazon-logo" />
        </a>
      </li>
      <li class="shop">
        <a href="${buy_links[1].url}" class="shop-link" target="_blank">
          <img
            class="shops-item-icon"
            src="${appleBooks}"
            alt="Apple-Books-logo"
          />
        </a>
      </li>
      <li class="shop">
        <a href="${buy_links[4].url}" class="shop-link" target="_blank">
          <img class="shops-item-icon" src="${bookShop}" alt="Bookshop-logo" />
        </a>
      </li>
    </ul>
  </div>
</div>
      `;
}

let bookObj = {};

function createBookObj(data) {
  bookObj = data;
}

function onAddBookClick() {
  if (!bookObj) return;

  const prevBooks = JSON.parse(localStorage.getItem('books')) ?? []

  localStorage.setItem('books', JSON.stringify([...prevBooks, bookObj]));
  showRemoveBtn()
}

function onRemoveBookClick() {
  const bookIdToRemove = bookObj._id;
  const prevBooks = JSON.parse(localStorage.getItem('books')) ?? []
  const indexToRemove = prevBooks.findIndex(book => book._id === bookIdToRemove);
  if (indexToRemove === -1) return;

  prevBooks.splice(indexToRemove, 1);
  localStorage.setItem('books', JSON.stringify(prevBooks));
  showAddBtn()
}

function showAddBtn() {
  removeBookBtn.classList.add('display');
  addBookBtn.classList.remove('display');
}

function showRemoveBtn() {
  addBookBtn.classList.add('display');
  removeBookBtn.classList.remove('display');
}

addBookBtn.addEventListener('click', onAddBookClick);
removeBookBtn.addEventListener('click', onRemoveBookClick);

closeBtn.onclick = function () {
  modalEl.classList.remove('active');
  popUp.classList.remove('active');
  document.body.classList.remove('modal-open');
};

closeBtn.onclick = function () {
  modalEl.classList.remove('active');
  popUp.classList.remove('active');
  document.body.classList.remove('modal-open');
};

window.onclick = function (event) {
  if (event.target == popUp) {
    modalEl.classList.remove('active');
    popUp.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
};

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalEl.classList.remove('active');
    popUp.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
});

export { createBookCard, createMarkup };
