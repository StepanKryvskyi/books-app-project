// Button Toggle
const themeToggleBtn = document.querySelector('#themeToggle');

// Header Item
const headerEL = document.querySelector('#header');
const shoperIcon = document.querySelector('.shoper-icon');

// Book List Item
const bookEl = document.querySelector('.book-list');

themeToggleBtn.addEventListener('change', onBtnThemeClick);

// Function Dark Mode
export function onBtnThemeClick() {
  if (themeToggleBtn.checked) {
    document.body.classList.add('darkmode');
    headerEL.classList.add('header-dark');

    shoperIcon.classList.add('shoper-dark');

    bookEl.classList.add('book-dark');
  } else {
    document.body.classList.remove('darkmode');
    headerEL.classList.remove('header-dark');

    shoperIcon.classList.remove('shoper-dark');

    bookEl.classList.remove('book-dark');
  }
}
