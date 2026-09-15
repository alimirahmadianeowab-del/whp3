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


// =========================
// شگفت انگیزها
// =========================

const amazingSwiper = new Swiper(".amazingSwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    speed: 500,
    navigation: {
        nextEl: ".amazing-next",
        prevEl: ".amazing-prev"
    }
});


// =========================
// تایمر
// =========================

let amazingTime = (11 * 60 * 60) + (44 * 60) + 27;

function updateAmazingTimer() {
    const hours = Math.floor(amazingTime / 3600);
    const minutes = Math.floor((amazingTime % 3600) / 60);
    const seconds = amazingTime % 60;

    document.getElementById("amazing-hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("amazing-minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("amazing-seconds").textContent =
        String(seconds).padStart(2, "0");

    if (amazingTime > 0) {
        amazingTime--;
    }
}

updateAmazingTimer();
setInterval(updateAmazingTimer, 1000);