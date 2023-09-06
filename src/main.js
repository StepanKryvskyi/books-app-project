
// import './js/pagination';
import { createCategoryGallery, createBestsellersGallery} from './js/books-gallery-cat';
import { galleryList, catList, loader, btnToTop} from './js/refs';
import { onBtnThemeClick } from './js/dark-mode';
import { addCategoryTitle } from './js/gallery-markup';
import { createCategory } from './js/query-and-markup';
import { createMarkup, createBookCard } from './js/pop-up';
import {scrollTop} from './js/scroll-to-top'

// import { createShoppingCard } from './js/shopping-list';

scrollTop();

createCategoryGallery();
// createShoppingCard();

import { load } from './js/support-ukraine';

// creating list of categories
createCategory();

// Creating bestsellers gallery
createBestsellersGallery();

// Creating books gallery by category

load()

catList.addEventListener('click', onClickShowCatBooks);

onBtnThemeClick();

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

btnSeeMore.addEventListener('click', onClickSeeMore);

function onClickSeeMore(evt) {
  galleryList.innerHTML = "";
  loader.classList.toggle('visually-hidden');
  const catName = evt.target.dataset.cat;
  addCategoryTitle(`${ catName } # #`);
  createCategoryGallery(catName);
  loader.classList.toggle('visually-hidden');
}

galleryList.addEventListener("click", onBookClick)

 function onBookClick(evt){
  const bookId = evt.target.closest('.book-card').getAttribute('id');
  popUp.style.display = "block";
  
    createBookCard(bookId)
}

