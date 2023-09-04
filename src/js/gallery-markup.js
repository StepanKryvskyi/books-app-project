import { catTitle } from './refs';

// markup for book-card sorted by category
function createBookMarkup(arr) {
  return arr
    .map(({ book_image, title, author, _id }) =>
      title.length < 17
        ? `<div class="book-card" id="${_id}"><a href="#" class="img-link"><div class="overlay">
        <img class="book-cover" src="${book_image}" alt="book cover" loading="lazy"/>
        <div class="overlay-bg">
        <p class="overlay-text">QUICK VIEW</p></div></div>
        <h2 class="book-title">${title}</h2>
        <p class="author-name">${author}</p></a></div>`
        : `<div class="book-card" id="${_id}"><a href="#" class="img-link"><div class="overlay">
        <img class="book-cover" src="${book_image}" alt="book cover" loading="lazy"/>
        <div class="overlay-bg">
        <p class="overlay-text">QUICK VIEW</p>
        </div></div><h2 class="book-title">${title.split('').slice(0, 17).join('')}...</h2><p class="author-name">${author}</p></a></div>`
    )
    .join('');
}

function addCategoryTitle(category) {
  const words = category.split(' ');
  const title = `${words.splice(0, words.length - 3).join(' ')} 
  <span class="cat-span">${words.splice(words.length - 3, 1).join(' ')}</span>`;
  catTitle.innerHTML = title;
}

// markup for bestsellers books all categories

function createBestsellersMarkup(arr) {
  return arr
    .map(
      ({ list_name, books }) =>
        `<div class="books-category">
          <p class="bestsellers-cat-title">${list_name}</p>
          <ul class="best-list">
            <li class="books-list">${createBookMarkup(books)}</li>
          </ul>
          <button class="btn-see-more" type="button" data-cat="${list_name}">SEE MORE</button>
        </div>`
    )
    .join('');
}

export { createBookMarkup, addCategoryTitle, createBestsellersMarkup };
