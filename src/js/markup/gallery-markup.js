function createMarkup(arr) {
  return arr.map(({ book_image, title, author, _id }) =>
    `<li class="book-card" id="${_id}"><a class="img-link">
  <img class="book-cover" src="${book_image}" alt="book cover" loading="lazy"/>
    <h2 class="book-title">
      ${title}
    </h2>
    <p class="author-name">
      ${author}
    </p></a> 
</li>`).join(" ")
};

export { createMarkup };