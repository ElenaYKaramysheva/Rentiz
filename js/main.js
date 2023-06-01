/*=============================
           Mobile Menu
=============================*/

const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');
  burger.addEventListener(
    'click', function() {
      headerMenu.classList.toggle('header__menu--active');
      burger.classList.toggle('burger--active');
  }) 

/*=============================
          Slider Popular
=============================*/

const popularSwiper = new Swiper('.popular-slider', {
    navigation: {
      nextEl: '.section-popular-slider__next',
      prevEl: '.section-popular-slider__prev',
      disabledClass: 'carousel-button--disabled',     
    },
    slidesPerView: 3,
    spaceBetween: 20,

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      360: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      480: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

/*=============================
          Slider Review
=============================*/

const reviewSwiper = new Swiper('.review-slider', {
  navigation: {
    nextEl: '.review-slider__next',
    prevEl: '.review-slider__prev',
    disabledClass: 'slider-button--disabled'
  },
});

  