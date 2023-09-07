import { pagination } from './js/pagination';
import { createCategoryGallery, createBestsellersGallery} from './js/books-gallery-cat';
import { onBtnThemeClick } from './js/dark-mode';
import { addCategoryTitle } from './js/gallery-markup';
import { createCategory } from './js/query-and-markup';
import { createMarkup, createBookCard } from './js/pop-up';
import {scrollTop} from './js/scroll-to-top';


import {  galleryList, catList, catTitle, booksBox, loader, bookCard, btnSeeMore } from './js/refs';

import { createShoppingCard } from './js/shopping-list';

scrollTop();

createCategoryGallery();
createShoppingCard();


import { load } from './js/support-ukraine';

// creating list of categories
createCategory();

// Creating bestsellers gallery
createBestsellersGallery();

// Creating books gallery by category

load();

catList.addEventListener('click', onClickShowCatBooks);


function onClickShowCatBooks(evt) {    
  galleryList.innerHTML = "";
  loader.classList.toggle('visually-hidden');
  if (evt.target.textContent === "All categories") {
        addCategoryTitle('Best Sellers Books # #');
    createBestsellersGallery();
    loader.classList.toggle('visually-hidden');
  } else {
    
    const cat = evt.target.textContent;
    addCategoryTitle(cat);
    createCategoryGallery(cat);

    loader.classList.toggle('visually-hidden');
}
    
}

galleryList.addEventListener("click", onBookClick)


 function onBookClick(evt){
  evt.preventDefault()
  const bookId = evt.target.closest('.book-card').getAttribute('id');
  modalEl.classList.add('active');
	popUp.classList.add('active');
  document.body.classList.add('modal-open')
    createBookCard(bookId)
}
onBookClick()
// Добавляем обработчик клика на кнопку "SEE MORE"
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-see-more')) {
    onSeeMoreClick(event);
  }
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-see-more')) {
    onSeeMoreClick(event);
  }
});

function onSeeMoreClick(event) {
  const category = event.target.getAttribute('data-cat');

  if (category === 'All categories') {
    addCategoryTitle('Best Sellers Books # #');
    createBestsellersGallery();
  } else {
    addCategoryTitle(category);
    createCategoryGallery(category);
  }
  loader.classList.toggle('visually-hidden');
}
