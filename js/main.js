const swiper = new Swiper('.main-slider', {
  slidesPerView: 2,
  spaceBetween: 28,
  loop: true,

  navigation: {
    nextEl: '.main-slider__arrow',
  },
});