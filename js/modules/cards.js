

function cards() {
    fetch("../json/item.json")
      .then((response) => response.json())
      .then((data) => {
        const products = data.cards;
        const container = document.querySelector(".goods__card-inner");

        products.forEach((product) => {
          const card = document.createElement("a");
          card.className = "goods__card card";
          // card.href = product.link;
          card.href = `hilton.html?id=${product.id}`;

          const cardImg = document.createElement("div");
          cardImg.className = "card__img";
          const img = document.createElement("img");
          img.src = product.image1;
          img.alt = product.name;
          cardImg.appendChild(img);

          const cardSubtitle = document.createElement("p");
          cardSubtitle.className = "card__subtitle";
          cardSubtitle.textContent = product.name;

          card.appendChild(cardImg);
          card.appendChild(cardSubtitle);

          container.appendChild(card);
        });
      })
      .catch((error) => console.error("Error fetching the data:", error));
}

export default cards;