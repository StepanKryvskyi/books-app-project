import { makeRequestByCategory } from './API/API-by-categories';
import { createMarkup } from './markup/gallery-markup';

const galleryList = document.querySelector('.gallery');

async function createCategoryGallery() {
  let selectedCategory = 'Hardcover Fiction';
  try {
    const { data } = await makeRequestByCategory(selectedCategory);
    console.log(data);
    addMarkup(data);
  } catch (error) {
    console.error(error.message);
  }
}

function addMarkup(data) {
  galleryList.innerHTML = createMarkup(data);
}

export { createCategoryGallery };