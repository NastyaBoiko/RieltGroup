const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");

headerBurger.addEventListener('click', function() {
    headerNav.classList.toggle("show");
})

window.addEventListener('resize', function() {
    headerNav.classList.remove("show");
})

window.addEventListener('click', function(event) {
    if (!event.target.matches('.header__burger-svg') 
        && !event.target.matches('.header__burger-sprite') 
        && !event.target.matches('.header__nav-item') 
        && !event.target.matches('.header__burger')) 
    {
        headerNav.classList.remove("show");
    }
})