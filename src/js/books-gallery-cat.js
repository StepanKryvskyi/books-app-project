import { makeRequestByCategory } from './API-by-categories';
import { createBookMarkup } from './gallery-markup';
import { galleryList, booksBox } from './refs';

// Creating a gallery of bestsellers book all categories
// async function createBestsellersGallery() {
//   try {
//     const { data } = await makeRequestAllBooks();
//     console.log(data)
//     // addMarkup(data);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// createBestsellersGallery()


// Creating books gallery by category
async function createCategoryGallery(category) {
  try {
    const { data } = await makeRequestByCategory(category);
    if (!data.length) {
      const noBooksMessage = '<p class="no-books-text">Sorry, there are no books in this category...</p>';
      booksBox.insertAdjacentHTML('beforeend', noBooksMessage)
      return;
    }
    addMarkup(data);
  } catch (error) {
    console.error(error.message);
  }
}

function addMarkup(data) {
  galleryList.innerHTML = createBookMarkup(data);
}

export { createCategoryGallery};