const swiper = new Swiper('.main-slider', {
  spaceBetween: 28,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    }
  },

  navigation: {
    nextEl: '.main-slider__arrow',
  },
});

const byrgerBtnOpen = document.querySelector('.menu-burger');
const byrgerBtnClose = document.querySelector('.header__menu-close');
const mobileMenu = document.querySelector('.header');
const modalWindow = document.querySelector('.modal');
const playTrailerButton = document.querySelector('.main__button-play');
const trailer = document.querySelectorAll('.main-slider__slide');

byrgerBtnOpen.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

byrgerBtnClose.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

playTrailerButton.addEventListener('click', () => {
  modalWindow.classList.add('active');
});

trailer.forEach(item => {
  item.addEventListener('click', () => {
    modalWindow.classList.add('active');
  });
});

modalWindow.addEventListener('click', e => {
  const isModal = e.target.closest('.modal__inner');

  if (!isModal) {
    modalWindow.classList.remove('active');
  }
});

