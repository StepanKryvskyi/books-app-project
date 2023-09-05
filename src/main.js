import {
  createCategoryGallery,
  createBestsellersGallery,
} from './js/books-gallery-cat';
import { galleryList, catList, catTitle } from './js/refs';
import { addCategoryTitle } from './js/gallery-markup';
import { createCategory } from './js/query-and-markup';
import { load } from './js/support-ukraine';
import { onBtnThemeClick } from './js/dark-mode';
// creating list of categories
createCategory();
// Creating bestsellers gallery

createBestsellersGallery();

// Creating books gallery by category

catList.addEventListener('click', onClickShowCatBooks);

function onClickShowCatBooks(evt) {
  galleryList.innerHTML = '';
  if (evt.target === catList.firstElementChild) {
    addCategoryTitle('Best Sellers Books');
    createBestsellersGallery();
  } else {
    const cat = evt.target.textContent;
    addCategoryTitle(cat);
    createCategoryGallery(cat);
  }
}

load();
onBtnThemeClick();
