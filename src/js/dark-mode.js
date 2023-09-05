// Button Toggle
const themeToggleBtn = document.querySelector('#themeToggle');

// Header Item
const headerEL = document.querySelector('#header');
const shopperIcon = document.querySelector('.shopper-icon');

// Book List Item
const bookEl = document.querySelector('.book-list');

themeToggleBtn.addEventListener('change', onBtnThemeClick);

// Function Dark Mode
export function onBtnThemeClick() {
  if (themeToggleBtn.checked) {
    document.body.classList.add('darkmode');
    headerEL.classList.add('header-dark');
    shopperIcon.classList.add('shopper-dark');
    bookEl.classList.add('book-dark');
  } else {
    document.body.classList.remove('darkmode');
    headerEL.classList.remove('header-dark');
    shopperIcon.classList.remove('shopper-dark');
    bookEl.classList.remove('book-dark');
  }
}
