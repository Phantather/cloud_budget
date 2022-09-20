$(".mobile-btn").on("click", function () {
    $(".mobile-btn").toggleClass("show-mobile-btn");
    $(".header__list").toggleClass("show-header__menu");
    $(".header__link").toggleClass("show-header__link");
});

$(".header__list").on("click", function () {
    $(".mobile-btn").removeClass("show-mobile-btn");
    $(".header__list").removeClass("show-header__menu");
    $(".header__link").removeClass("show-header__link");
});

$('#demoDefaultSelection').ddslick({

    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});