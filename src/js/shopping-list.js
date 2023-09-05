import { requestBookData } from './API-by-book-Id-info';

document.addEventListener("DOMContentLoaded", async function () {
    const bookList = document.getElementById("shoppingBookList"); 
    const emptyMessage = document.getElementById("shoppingEmptyMessage"); 

    const shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];

    if (shoppingList.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        for (const book of shoppingList) {
            const card = await createShoppingCard(book);
            bookList.appendChild(card);
        }
    }
});


export async function createShoppingCard(bookData) {
    const card = document.createElement("li");
    card.classList.add("shopping-list-book-card");

    card.innerHTML = `
        <img src="" alt="Зображення книги" class="shopping-list-img">
        <div class="shopping-list-book-details">
            <h2 class="shopping-list-book-name"></h2>
            <p class="shopping-list-book-genre"></p>
            <p class="shopping-list-book-deskription"></p>
            <p class="shopping-list-author"></p>
        </div>
        <div class="shopping-list-icons">
            <div class="shopping-list-svg">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                    <title>trash-03</title>
                    <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" stroke="#fff" d="M12 4h8M4 8h24M25.333 8l-0.935 14.026c-0.14 2.104-0.21 3.156-0.665 3.954-0.4 0.702-1.004 1.267-1.731 1.62-0.826 0.4-1.881 0.4-3.99 0.4h-4.025c-2.109 0-3.163 0-3.99-0.4-0.727-0.353-1.331-0.917-1.731-1.62-0.455-0.798-0.525-1.85-0.665-3.954l-0.935-14.026M13.333 14v6.667M18.667 14v6.667"></path>
                </svg>              
            </div>
            <div class="shopping-list-company-icons">
                <a href=""><img src="./img/shopping-list-icon/company-1.png" alt="Amazon"></a>
                <a href=""><img src="./img/shopping-list-icon/company-2.png" alt="Company 2"></a>
                <a href=""><img src="./img/shopping-list-icon/company-3.png" alt="Company 3"></a>
            </div>
        </div>
    `;

    const image = card.querySelector(".shopping-list-img");
    const title = card.querySelector(".shopping-list-book-name");
    const genre = card.querySelector(".shopping-list-book-genre");
    const description = card.querySelector(".shopping-list-book-deskription");
    const author = card.querySelector(".shopping-list-author");

    try {
        const data = await requestBookData(bookData.id);
        image.src = data.book_image || '';
        title.textContent = data.title || '';
        genre.textContent = data.list_name || '';
        description.textContent = data.description || '';
        author.textContent = data.author || '';
    } catch (error) {
        console.error(error.message);
    }

    const deleteIcon = card.querySelector(".shopping-list-svg");
    deleteIcon.addEventListener("click", function () {
        const bookIdToDelete = bookData.id;

        removeBookFromShoppingList(bookIdToDelete);

        refreshShoppingListDisplay();
    });

    return card;
}

function removeBookFromShoppingList(bookId) {
    const shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];

    const bookIndex = shoppingList.findIndex(book => book.id === bookId);

    if (bookIndex !== -1) {
        shoppingList.splice(bookIndex, 1);
    }
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
}

function refreshShoppingListDisplay() {
    const shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];

    const bookList = document.getElementById("bookList");

    bookList.innerHTML = "";

    shoppingList.forEach(book => {
        const card = createShoppingCard(book);
        bookList.appendChild(card);
    });
}

