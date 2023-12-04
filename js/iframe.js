const iframe = document.querySelector(".card-info__iframe");
console.log(iframe);
// изменение iframe карты для экранов

// Создаем медиа условие, проверяющее viewports на ширину менее 1440 пикселей.
const mediaQueryIframe1440 = window.matchMedia('(max-width: 1440px)')
const mediaQueryIframe768 = window.matchMedia('(max-width: 768px)')
const mediaQueryIframe320 = window.matchMedia('(max-width: 320px)')
if (mediaQueryIframe320.matches) {
    iframe.width = 300;
    iframe.height = 160;
} else if (mediaQueryIframe768.matches) {
    iframe.width = 720;
    iframe.height = 380;
} else if (mediaQueryIframe1440.matches) {
    iframe.width = 540;
}
// При изменении экрана
window.addEventListener('resize', function() {
    if (iframe) {
        let widthScreen = document.querySelector("body").offsetWidth;
        if (widthScreen <= 320) {
            iframe.width = 300;
            iframe.height = 160;
        } else if (widthScreen <= 768) {
            iframe.width = 720;
            iframe.height = 380;
        } else if (widthScreen <= 1440) {
            iframe.width = 540;
            iframe.height = 420;
        } else {
            iframe.width = 680;
        }
    }
})
