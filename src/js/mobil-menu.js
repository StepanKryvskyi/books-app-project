const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

function openMenu() {
    mobileMenu.style.transform = 'translateX(0%)';
}

function closeMenu() {
    mobileMenu.style.transform = 'translateX(-100%)';
}

menuToggleBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
