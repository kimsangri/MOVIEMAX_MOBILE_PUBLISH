//swiper script

//movieSwiper
const movieSwiper = new Swiper(".movieSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 2,
    slidesPerView: 2.5,
    loop: true,
    initialSlide: 1,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: '.movieSwiper .paging'
    },
});


//cateSwiper
const cateSwiper = new Swiper(".cateSwiper", {
    spaceBetween: 12,
    slidesPerView: 3.5
});

//releaseSwiper
const releaseSwiper = new Swiper(".releaseSwiper", {
    spaceBetween: 12,
    slidesPerView: 1.1,

    breakpoints: {
        500: {
            slidesPerView: 1.1,
        },
        670: {
            slidesPerView: 1.5,
        },
        700: {
            slidesPerView: 2.5,
        },
    },
});

//crewSwiper
const crewSwiper = new Swiper(".crewSwiper", {
    spaceBetween: 20,
    slidesPerView: 2.5
});