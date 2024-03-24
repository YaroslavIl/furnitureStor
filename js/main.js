
//burger-menu

let navIcon = document.querySelector(".menu__icon");
let navBar = document.querySelector(".menu__body");
let navLink = document.querySelectorAll('.nav-link');
console.log(navIcon);

function iconActive() {
  navIcon.classList.toggle("active");
  navBar.classList.toggle("active");
};

navIcon.addEventListener("click", iconActive);

// function clickLink() {
//   if (navIcon.classList.contains('burger-menu__icon--active') && navBar.classList.contains('burger-menu__nav--active')) {
//     navIcon.classList.remove("burger-menu__icon--active");
//     navBar.classList.remove("burger-menu__nav--active");
//   }
// }

// navLink.forEach(element => {
//   element.addEventListener('click', clickLink)
// });



// //scroll
// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const blokID = anchor.getAttribute('href')
//     document.querySelector('' + blokID).scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     })
//   })
// }

//animation scrolling
const animItems = document.querySelectorAll(".animation");

if (animItems.length > 0) {

  window.addEventListener('scroll', animOnScroll);
  
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      console.log(animItem);
      // висота блоку
      const animItemHeight = animItem.offsetHeight;
      //позиція блоку відносно верху
      const animItemOffset = offset(animItem).top;
      //кофіцієнт старту анімації
      const animStart = 4;

      //розрахунки для старту анімації
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add("anim-active");
      }
      else {
        // no-repeat-anim - клас вимикає повтор анімації
        if (!animItem.classList.contains("no-repeat-anim")) {
          animItem.classList.remove("anim-active");
        }
      }
    }
  }

  //отримання розмірів
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return{ top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}

// анімація при завантаженні сторінки
// let animLetter = document.querySelectorAll(".title__item");
// let delayCounter = 0.2;
// const animStart = document.querySelectorAll(".start-anim");

// document.addEventListener('DOMContentLoaded', () => {
//       animLetter.forEach(element => {
//         element.setAttribute("style", `transition-delay: ${delayCounter}s;`);
//         delayCounter += 0.2;
//       });
//       animStart.forEach((element) => {
//         element.classList.add("anim-active");
//       });
// })
  


//Link Hover
// import linkClick from "./modules/linkHover.js";
// linkClick();

//Slider-swiper
import myImageSlider from "./modules/sliders.js";

//Зміна фону картинками зі слайдеру
// import changeFon from "./modules/changeFon.js";
// changeFon();



