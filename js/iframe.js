const iframe = document.querySelector(".card-info__iframe");
console.log(iframe);
// изменение iframe карты для экранов

// Создаем медиа условие, проверяющее viewports на ширину менее 1440 пикселей.
const mediaQueryIframe = window.matchMedia('(max-width: 1440px)')
if (mediaQueryIframe.matches) {
    iframe.width = 540;
}
// При изменении экрана
window.addEventListener('resize', function() {
    if (iframe) {
        let widthScreen = document.querySelector("body").offsetWidth;
        if (widthScreen <= 1440) {
            iframe.width = 540;
        } else {
            iframe.width = 680;
        }
    }
})
