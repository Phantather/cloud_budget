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