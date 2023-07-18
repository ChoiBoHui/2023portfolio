$(function () {

    // swiper 슬라이더
    let slider = new Swiper(".swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});