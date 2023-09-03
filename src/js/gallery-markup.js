import { catTitle } from './refs';

// markup for book-card sorted by category
function createBookMarkup(arr) {
  return arr
    .map(
      ({ book_image, title, author, _id }) =>
        `<div class="book-card" id="${_id}"><a href="#" class="img-link">
        <img class="book-cover" src="${book_image}" alt="book cover" loading="lazy"/>
        <div class="overlay-bg">
        <p class="overlay-text">QUICK VIEW</p>
        </div>
    <h2 class="book-title">
      ${title}
    </h2>
    <p class="author-name">
      ${author}
    </p></a> 
</div>`
    )
    .join('');
}

function addCategoryTitle(category) {
  let num = Math.floor(category.split(' ').length / 2);
  const title = `${category.split(' ').splice(0, num).join(' ')} 
  <span class="cat-span">${category.split(' ').splice(num, num).join(' ')}</span>`;
  catTitle.innerHTML = title;
}

// markup for bestsellers books all categories

// Помилка у функції нижче

function createBestsellersMarkup(arr) {
  return arr.map(({ list_name, books }) => `<div class="books-category">
          <p class="bestsellers-cat-title">${list_name}</p>
          <ul">
            <li class="books-list">${createBookMarkup(books)}</li>
          </ul>
          <button class="btn-see-more" type="button" data-cat="${list_name}">SEE MORE</button>
        </div>`).join('');  
}

export { createBookMarkup, addCategoryTitle, createBestsellersMarkup };
