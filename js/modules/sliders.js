
let myImageSlider = new Swiper(".products__slider", {
  autoplay: {
    // Пауза между прокруткой
    delay: 2000,
    // Закончить на последнем слайде
    stopOnLastSlide: false,
    // Отключить после ручного переключения
    disableOnInteraction: false,
  },

  // Скорость
  speed: 2000,

  // Бесконечный слайдер
  loop: false,

  // Отступ между слайдами
  // spaceBetween: 15,

  // Количество слайдов для показа
  slidesPerView: 1,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    // 670: {
    //   slidesPerView: 2,
    // },
    // 991: {
    //   spaceBetween: 36,
    // },
  },
});



export default myImageSlider;

