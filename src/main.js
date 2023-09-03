import { createCategoryGallery, createBestsellersGallery} from './js/books-gallery-cat';
import { galleryList } from './js/refs';
import { addCategoryTitle } from './js/gallery-markup';

// Creating bestsellers gallery

createBestsellersGallery();

// Creating books gallery by category

catList.addEventListener('click', onClickShowCatBooks);

function onClickShowCatBooks() {
   evt.preventDefault;    
    galleryList.innerHTML = "";
if (evt.target.nodeName === "a") {
    const cat = evt.target.textContent; 
   addCategoryTitle(cat);
   createCategoryGallery(cat);  
}
   
}

