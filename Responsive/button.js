const menuButton = document.querySelector('.menu-button');
const navbarMenu = document.querySelector('.navbar-menu');

menuButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});