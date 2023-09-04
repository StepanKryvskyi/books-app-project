import { makeRequestByCategory, makeRequestAllBooks } from './API-by-categories';
import { createBookMarkup, createBestsellersMarkup } from './gallery-markup';
import { galleryList, loader, bookCard} from './refs';

// Creating a gallery of bestsellers book all categories
async function createBestsellersGallery() {
  loader.classList.toggle('visually-hidden');
  galleryList.classList.add('best-gallery');
  try {
    const { data } = await makeRequestAllBooks();
    addMarkup(createBestsellersMarkup(data));
    loader.classList.toggle('visually-hidden');
  } catch (error) {
    console.error(error.message);
  }
}
// Creating books gallery by category
async function createCategoryGallery(category) {
  loader.classList.toggle('visually-hidden');
  galleryList.classList.remove('best-gallery');
  try {
    const { data } = await makeRequestByCategory(category);
    if (!data.length) {
      const noBooksMessage = '<p class="no-books-text">Sorry, there are no books in this category...</p>';
      galleryList.innerHTML = noBooksMessage;
      return;
    }
    addMarkup(createBookMarkup(data));
    if (!bookCard.classList.contains('card')) {
    bookCard.classList.add('card');
    }  
    console.log(bookCard);
    loader.classList.toggle('visually-hidden');
  } catch (error) {
    console.error(error.message);
  }
}

function addMarkup(markup) {
  galleryList.innerHTML = markup;
}

export { createCategoryGallery, createBestsellersGallery};