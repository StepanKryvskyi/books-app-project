import { makeRequestByCategory, makeRequestAllBooks } from './API-by-categories';
import { createBookMarkup, createBestsellersMarkup } from './gallery-markup';
import { galleryList, loader} from './refs';

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
    addMarkup(createBookMarkup(data));
    loader.classList.toggle('visually-hidden');
    if (!galleryList.children) {
      const noBooksMessage = '<p class="no-books-text">Sorry, there are no books in this category...</p>';
      galleryList.innerHTML = noBooksMessage;
      loader.classList.toggle('visually-hidden');
      return;
    }
    
  } catch (error) {
    console.error(error.message);
  }
}

function addMarkup(markup) {
  galleryList.innerHTML = markup;
}


export { createCategoryGallery, createBestsellersGallery};