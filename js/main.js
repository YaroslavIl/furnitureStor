
//burger-menu

let navIcon = document.querySelector(".menu__icon");
let navBar = document.querySelector(".menu__body");

function iconActive() {
  navIcon.classList.toggle("active");
  navBar.classList.toggle("active");
};

navIcon.addEventListener("click", iconActive);



// Генерація карточок товару
import cards from "./modules/cards.js";
cards()

//Slider-swiper
import myImageSlider from "./modules/sliders.js";




// Функція для отримання даних про товар за його ID
// Отримуємо ID товару з URL
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    if (productId) {
        // Завантажуємо дані товару
        fetch("json/item.json")
            .then((response) => response.json())
            .then((data) => {
              const product = data.cards.find(item => item.id == productId);
              const productBox = document.querySelector(".product-details__box");
                if (product) {
                  // Відображаємо дані на сторінці
                  const imgBlock = document.createElement("div");
                  imgBlock.className = "product-details__img-block";
                  productBox.appendChild(imgBlock);

                  const productImg = document.createElement("img");
                  productImg.src = product.image1;
                  productImg.alt = product.name;
                  imgBlock.appendChild(productImg);

                  const productMiniImg = document.createElement("div");
                  productMiniImg.className = "product-details__mini-img";
                  imgBlock.appendChild(productMiniImg);

                  for (const key in product) {
                    if (key.startsWith("image") && product[key]) {

                      const imgInner = document.createElement("div");
                      imgInner.className = "product-details__img";
                      productMiniImg.appendChild(imgInner);

                      const miniImg = document.createElement("img");
                      miniImg.src = product[key];
                      miniImg.alt = `${product.name} ${key}`;
                      imgInner.appendChild(miniImg);
                    };
                  };

                  const productTextBlock = document.createElement("div");
                  productTextBlock.className = "product-details__text-block";
                  productBox.appendChild(productTextBlock);

                  const productTitle = document.createElement("h4");
                  productTitle.className = "product-details__title";
                  productTitle.textContent = product.name;
                  productTextBlock.appendChild(productTitle);

                  const productText = document.createElement("p");
                  productText.className = "product-details__text";
                  productText.textContent = product.info;
                  productTextBlock.appendChild(productText);
                } else {
                    console.error("Product not found");
                }
            })
            .catch((error) => console.error("Error fetching the data:", error));
    } else {
        console.error("No product ID found in URL");
    }
});



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




//Зміна фону картинками зі слайдеру
// import changeFon from "./modules/changeFon.js";
// changeFon();



