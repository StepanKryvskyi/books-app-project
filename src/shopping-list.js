// <<<<<<< pagination
import { load } from './js/support-ukraine';

const emptyBox = document.querySelector('.shopping-list-empty');
const booksBox = document.querySelector('.shop-list-with-books');
const fundList = document.querySelector('.container-support');

if (window.innerWidth >= 1440) {
  fundList.classList.remove('is-hidden');
  load();
} else {
  fundList.classList.add('is-hidden');
}

let books = localStorage.getItem('books');

try {
  books = JSON.parse(books);
} catch (error) {
  console.error(error.message);
}
createShopListMarkup();

function createShopListMarkup() {
  if (!books || !books.length) {
    booksBox.classList.add('is-hidden');
    emptyBox.classList.remove('is-hidden');
    return;
  } else {
    emptyBox.classList.add('is-hidden');
    booksBox.classList.remove('is-hidden');
    booksBox.insertAdjacentHTML('beforeend', createBookMarkup());
    booksBox.addEventListener('click', onClickRemoveBook);
  }
}
// 
function onClickRemoveBook(evt) {
  if (evt.target.dataset.action !== 'remove') {
    return;
  }
  const parentEl = evt.target.closest('.shopping-list-item');
  const idToRemove = parentEl.dataset.id;
  
  books = books.filter(book => book._id !== idToRemove);
  localStorage.setItem('books', JSON.stringify(books));

  booksBox.innerHTML = '';
  createShopListMarkup();
}

// svg (41 рядок) додати у папку із зображеннями, а в розмітку потім посилання на зображення
function createBookMarkup() {
  return books
    .map(
      ({ _id, book_image, title, author, buy_links, description, list_name }) =>
    `<li class="shopping-list-item" data-id=${_id}>
        <button type="button" class="shopping-list-svg" data-action="remove">
             <svg data-action="remove" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                <title>trash-03</title>
                <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" stroke="#fff" d="M12 4h8M4 8h24M25.333 8l-0.935 14.026c-0.14 2.104-0.21 3.156-0.665 3.954-0.4 0.702-1.004 1.267-1.731 1.62-0.826 0.4-1.881 0.4-3.99 0.4h-4.025c-2.109 0-3.163 0-3.99-0.4-0.727-0.353-1.331-0.917-1.731-1.62-0.455-0.798-0.525-1.85-0.665-3.954l-0.935-14.026M13.333 14v6.667M18.667 14v6.667"></path>
            </svg>              
        </button>
        <img src="${book_image}" alt="book-cover" class="shopping-list-img">
        <div class="shopping-list-book-details">
            <h2 class="shopping-list-book-name">${title}</h2>
            <p class="shopping-list-book-genre">${list_name}</p>
            <p class="shopping-list-book-description">${description}</p>
            <p class="shopping-list-author">${author}</p>        
                <div class="shopping-list-company-icons">
                    <a href="${buy_links[0].url}" target="_blank" rel="noopener noreferrer"><img src="./img/shopping-list-icon/company-1.png" alt="Amazon"></a>
                    <a href="${buy_links[1].url}" target="_blank" rel="noopener noreferrer"><img src="./img/shopping-list-icon/company-2.png" alt="Apple Books"></a>
                    <a href="${buy_links[4].url}" target="_blank" rel="noopener noreferrer"><img src="./img/shopping-list-icon/company-3.png" alt="Bookshop"></a>
                </div>      
        </div>
    </li>`
    )
    .join(' ');
}

