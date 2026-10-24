// =========================
// بنر اصلی
// =========================

const mainSwiper = new Swiper(".mainSwiper", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".mainSwiper .swiper-button-next",
        prevEl: ".mainSwiper .swiper-button-prev"
    },
    pagination: {
        el: ".mainSwiper .swiper-pagination",
        clickable: true
    },
    speed: 600
});

const amazingSwiper = new Swiper(".amazingSwiper",{
slidesPerView:6,
spaceBetween:8,
speed:600,
navigation:{
nextEl:".amazingSwiper .swiper-button-next",
prevEl:".amazingSwiper .swiper-button-prev"
}
});
const deliverySwiper = new Swiper(".deliverySwiper",{
slidesPerView:7,
spaceBetween:8,
speed:600,
navigation:{
nextEl:".deliverySwiper .swiper-button-next",
prevEl:".deliverySwiper .swiper-button-prev"
}
});
const productSwiper = new Swiper(".productSwiper",{
slidesPerView:7,
spaceBetween:8,
speed:600,
navigation:{
nextEl:".productSwiper .swiper-button-next",
prevEl:".productSwiper .swiper-button-prev"
}
});
const addressButton = document.querySelector(".header-menu-adres");
const addressOverlay = document.querySelector("#addressOverlay");
const addressClose = document.querySelector("#addressClose");

addressButton.addEventListener("click",function(){
addressOverlay.classList.add("active");
});

addressClose.addEventListener("click",function(){
addressOverlay.classList.remove("active");
});

addressOverlay.addEventListener("click",function(event){
if(event.target === addressOverlay){
addressOverlay.classList.remove("active");
}
});