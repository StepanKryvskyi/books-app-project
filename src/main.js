// import './js/pagination';
import { createCategoryGallery, createBestsellersGallery} from './js/books-gallery-cat';
import { galleryList, catList, loader} from './js/refs';
import { addCategoryTitle } from './js/gallery-markup';
import { createCategory } from './js/query-and-markup';
import {  createMarkup, createBookCard } from './js/pop-up';


import { load } from './js/support-ukraine';
// creating list of categories
createCategory();

// Creating bestsellers gallery
createBestsellersGallery();

// Creating books gallery by category

load()

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
  const bookId = evt.target.closest('.book-card').getAttribute('id');
  popUp.style.display = "block";
  document.body.style.overflow = "hidden";
    createBookCard(bookId)
}
onBookClick()
