import { pagination } from './js/pagination';
import { createCategoryGallery, createBestsellersGallery} from './js/books-gallery-cat';
import {  galleryList, catList, catTitle, booksBox, loader, bookCard, btnSeeMore, modalEl} from './js/refs';
import { onBtnThemeClick } from './js/dark-mode';
import { addCategoryTitle } from './js/gallery-markup';
import { createCategory } from './js/query-and-markup';
import { createBookCard } from './js/pop-up';
import {scrollTop} from './js/scroll-to-top';
import { createShoppingCard } from './js/shopping-list';
import { load } from './js/support-ukraine';
import './js/mobil-menu';
// Add scroll btn to top of the page 
scrollTop();

// Add books to page with shopping card
createShoppingCard();

// Creating list of categories
createCategory();

// Add list of Ukraine's funds
load();

// Creating bestsellers gallery
createBestsellersGallery();

// Add listener on button "SEE MORE"
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-see-more')) {
    onSeeMoreClick(event);
  }
});

function onSeeMoreClick(evt) {
  const catName = evt.target.dataset.cat;
  addCategoryTitle(`${catName} # #`);
  createCategoryGallery(catName);
}

// Creating books gallery by category
createCategoryGallery();

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


galleryList.addEventListener("click", onBookClick);

 function onBookClick(evt){
  evt.preventDefault()
  const bookId = evt.target.closest('.book-card').getAttribute('id');

    modalEl.classList.add('active');
	  popUp.classList.add('active');
    document.body.classList.add('modal-open')

    createBookCard(bookId)
}

onBookClick()





