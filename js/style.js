// header

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

// search title замена текста при экране 320

const searchTitle = document.querySelector(".search__title");

// Создаем медиа условие, проверяющее viewports на ширину менее 768 пикселей.
const mediaQuery = window.matchMedia('(max-width: 1280px)')
if (mediaQuery.matches & searchTitle) {
    searchTitle.innerHTML = "Подбор новостройки";
}
// При изменении экрана
window.addEventListener('resize', function() {
    if (searchTitle) {
        let widthScreen = document.querySelector("body").offsetWidth;
        if (widthScreen < 1280) {
            searchTitle.innerHTML = "Подбор новостройки";
        } else {
            searchTitle.innerHTML = "Квартиры в новостройках";
        }
    }
})

