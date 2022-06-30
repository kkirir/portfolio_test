const   hamburger = document.querySelector('.hamburger'),
        menu =  document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');
        overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
menu.classList.add('menu_active');
});    

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});