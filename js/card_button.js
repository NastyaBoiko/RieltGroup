descBtn = document.querySelector(".description__btn");
console.log(descBtn);
descBtn.addEventListener("click", function() {
    descBtn.outerHTML = '<a href="tel:+79110367710" class="description__btn description__phone btn wow animate__animated animate__pulse animate__infinite">+7 911-036-77-10</a>';
})