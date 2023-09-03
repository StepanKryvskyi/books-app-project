import { makeRequestByCategory, makeRequestAllBooks } from './API-by-categories';
import { createBookMarkup, createBestsellersMarkup } from './gallery-markup';
import { galleryList, booksBox } from './refs';

// Creating a gallery of bestsellers book all categories
async function createBestsellersGallery() {
  try {
    const { data } = await makeRequestAllBooks();
    console.log(data)
    console.log(createBestsellersMarkup(data))
    addMarkup(createBestsellersMarkup(data));
  } catch (error) {
    console.error(error.message);
  }
}
// Creating books gallery by category
async function createCategoryGallery(category) {
  try {
    const { data } = await makeRequestByCategory(category);
    if (!data.length) {
      const noBooksMessage = '<p class="no-books-text">Sorry, there are no books in this category...</p>';
      booksBox.insertAdjacentHTML('beforeend', noBooksMessage)
      return;
    }
    addMarkup(createBookMarkup(data));
  } catch (error) {
    console.error(error.message);
  }
}

function addMarkup(markup) {
  galleryList.innerHTML = markup;
}

export { createCategoryGallery, createBestsellersGallery};