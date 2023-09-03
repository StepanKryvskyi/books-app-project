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

    const apiUrl = "https://books-backend.p.goit.global/api/books";

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
}
