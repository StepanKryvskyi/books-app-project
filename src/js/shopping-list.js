document.addEventListener("DOMContentLoaded", function () {
    const bookList = document.getElementById("bookList");
    const emptyMessage = document.getElementById("emptyMessage");

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
