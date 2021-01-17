// Selectors
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');

let showMenu = false;

// Events

menuBtn.addEventListener('click', toggleMenu);

// Function

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close-menu');
    menu.classList.add('show');
    menuBranding.classList.add('show');
    menuNav.classList.add('show');
    navItem.forEach(item => {
      item.classList.add('show');
    });
    showMenu = true;
  } else {
    menuBtn.classList.remove('close-menu');
    menu.classList.remove('show');
    menuBranding.classList.remove('show');
    menuNav.classList.remove('show');
    navItem.forEach(item => {
      item.classList.remove('show');
    });
    showMenu = false;
  }
}
