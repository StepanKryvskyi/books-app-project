// Button Toggle

const themeToggleBtn = document.querySelector('#themeToggle');

// Header Item
// const darkSeeMoreButton = document.querySelector('.btn-see-more');
const headerEL = document.querySelector('#header');
const shoperIcon = document.querySelector('.shoper-icon');
const unchecked = document.querySelector('.unchecked');
const darkIcon = document.querySelector('.dark-logo');
const logoIcon = document.querySelector('.logo');
const darkBtnOn = document.querySelector('.menu-icon');
const darkBtnOff = document.querySelector('.menu-toggle-icon');


// Book List Item

const bookEl = document.querySelector('.book-list');

themeToggleBtn.addEventListener('change', onBtnThemeClick);

// Function Dark Mode

export function onBtnThemeClick() {
  if (themeToggleBtn.checked) {
    document.body.classList.add('darkmode');
    headerEL.classList.add('header-dark');
    shoperIcon.classList.add('shoper-dark');
    shoperIcon.classList.remove('dark-shopper-icon');
    logoIcon.classList.add('dark-icon');
    logoIcon.classList.remove('logo-icon');
    darkIcon.classList.add('logo-icon');
    darkIcon.classList.remove('dark-icon');
    unchecked.classList.remove('shoper-dark');
    unchecked.classList.add('dark-shopper-icon');
    bookEl.classList.add('book-dark');
    darkBtnOn.classList.add('normal-mode');
    darkBtnOn.classList.remove('dark-mode-btn');
    darkBtnOff.classList.add('dark-mode-btn');
    darkBtnOff.classList.remove('normal-mode');
    // darkSeeMoreButton.style.color = "#fff";
  } else {
    document.body.classList.remove('darkmode');
    headerEL.classList.remove('header-dark');
    unchecked.classList.add('shoper-dark');
    unchecked.classList.remove('dark-shopper-icon');
    darkIcon.classList.add('dark-icon');
    darkIcon.classList.remove('logo-icon');
    logoIcon.classList.add('logo-icon');
    logoIcon.classList.remove('dark-icon');
    shoperIcon.classList.remove('shoper-dark');
    shoperIcon.classList.add('dark-shopper-icon');
    bookEl.classList.remove('book-dark');
    darkBtnOn.classList.add('dark-mode-btn');
    darkBtnOn.classList.remove('normal-mode');
    darkBtnOff.classList.add('normal-mode');
    darkBtnOff.classList.remove('dark-mode-btn');
    // darkSeeMoreButton.style.border = ""
  }
}
