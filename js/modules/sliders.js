
let myImageSlider = new Swiper(".products__slider", {
  // Навигация
  // Буллеты, текущее положение, прогрессбар
  pagination: {
    el: ".swiper-pagination",
    // Буллеты
    type: "bullets",
    clickable: true,
    // Динамические буллеты
    dynamicBullets: true,
    // Кастомные буллеты
    // renderBullet: function (index, className) {
    // 	return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },

    /*
		// Фракция
		type: 'fraction',
		// Кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' +
				' из ' +
				'<span class="' + totalClass + '"></span>';
		},
		*/
    // Прогрессбар
    // type: 'progressbar'
  },

  // Эффекты переключения слайдов.
  // Cмена прозрачности
  effect: "fade",

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

