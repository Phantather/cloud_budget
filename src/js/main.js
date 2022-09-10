$(document).ready(function () {
    $('.burger').on('click',function () {
        $('.header__list').toggleClass('header__list_active')
        $('.burger').toggleClass('close')
    })
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