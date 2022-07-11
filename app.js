newFunction();

function newFunction() {
    const menu = document.querySelector('#mobile-menu');
    const menuLiks = document.querySelector('.navbar__menu');

    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLiks.classList.toggle('active');
    });
}