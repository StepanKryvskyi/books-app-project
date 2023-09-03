import { createCategoryGallery} from './js/books-gallery-cat';
import { galleryList } from './js/refs';
import { addCategoryTitle } from './js/gallery-markup';


// Creating books gallery by category

// catList.addEventListener('click', onClickShowCatBooks);

function onClickShowCatBooks() {
// // evt.preventDefault;    
   galleryList.innerHTML = "";
//    const cat = evt.target.textContent;  
    const cat = 'Hardcover Fiction';
    addCategoryTitle(cat);
    createCategoryGallery(cat);
}
onClickShowCatBooks()


