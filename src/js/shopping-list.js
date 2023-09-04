document.addEventListener("DOMContentLoaded", function () {
    const bookList = document.getElementById("shoppingBookList"); 
    const emptyMessage = document.getElementById("shoppingEmptyMessage"); 

    const shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];

    if (shoppingList.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        shoppingList.forEach(book => {
            const card = createBookCard(book);
            bookList.appendChild(card);
        });
    }

    const apiUrl = "https://books-backend.p.goit.global/books/bookId";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            bookList.innerHTML = '';
            data.forEach(bookData => {
                shoppingList.push(bookData);
                const card = createBookCard(bookData);
                bookList.appendChild(card);
            });

            localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
        })
        .catch(error => {
            console.error("Помилка при отриманні даних з API:", error);
        });
});

function createBookCard(bookData) {
    const card = document.createElement("li");
    card.classList.add("shopping-list-book-card");

    const image = document.createElement("img");
    image.classList.add("shopping-list-img");
    image.src = bookData.book_image; 
    card.appendChild(image);

    const details = document.createElement("div");
    details.classList.add("shopping-list-book-details");

    const title = document.createElement("h2");
    title.classList.add("shopping-list-book-name");
    title.textContent = bookData.title; 
    details.appendChild(title);

    const genre = document.createElement("p");
    genre.classList.add("shopping-list-book-genre");
    genre.textContent = bookData.list_name; 
    details.appendChild(genre);

    const description = document.createElement("p");
    description.classList.add("shopping-list-book-deskription");
    description.textContent = bookData.description; 
    details.appendChild(description);

    const author = document.createElement("p");
    author.classList.add("shopping-list-author");
    author.textContent = bookData.author; 
    details.appendChild(author);

    card.appendChild(details);

    const icons = document.createElement("div");
    icons.classList.add("shopping-list-icons");
    const deleteIcon = document.createElement("div");
    deleteIcon.classList.add("shopping-list-svg");
    deleteIcon.innerHTML = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" id="${bookData.id}">
            <title>trash-03</title>
            <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" stroke="#fff" d="M12 4h8M4 8h24M25.333 8l-0.935 14.026c-0.14 2.104-0.21 3.156-0.665 3.954-0.4 0.702-1.004 1.267-1.731 1.62-0.826 0.4-1.881 0.4-3.99 0.4h-4.025c-2.109 0-3.163 0-3.99-0.4-0.727-0.353-1.331-0.917-1.731-1.62-0.455-0.798-0.525-1.85-0.665-3.954l-0.935-14.026M13.333 14v6.667M18.667 14v6.667"></path>
        </svg>`;
    icons.appendChild(deleteIcon);

    deleteIcon.addEventListener("click", function () {
        const bookIdToDelete = deleteIcon.querySelector("svg").id;

        removeBookFromShoppingList(bookIdToDelete);

        refreshShoppingListDisplay();
    });

    card.appendChild(icons);

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
        const card = createBookCard(book);
        bookList.appendChild(card);
    });
}

