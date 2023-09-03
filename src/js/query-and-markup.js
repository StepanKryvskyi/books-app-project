import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/category-list';

const categoriesList = document.querySelector('.categories-list');

async function makeRequestCategoryList() {
  return await axios.get(BASE_URL);
}

async function createCategory() {
  try {
    const { data } = await makeRequestCategoryList();

    categoriesList.innerHTML = createMarkup(data);
    // addCategoryList(data);
  } catch (error) {
    console.error(error.message);
  }
}

function createMarkup(arr) {
  return arr.map(({ list_name }) =>
    `<li class="book-list" ><a class="list-link">
${list_name}
  </a>
</li>`).join(" ")
};

export {createCategory}

