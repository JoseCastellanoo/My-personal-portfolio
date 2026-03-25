const images = [
  {
    src: "images/58F821A3-489D-4220-A509-22E73CD59D99.JPG",
  },
  {
    src: "images/6B617E92-634B-479F-B9E8-98FDA062E990.JPG",
  }
];

let currentIndex = 0;

const centerImage = document.querySelector(".card.center img");
const leftImage = document.querySelector(".card.left img");

const title = document.querySelector(".about-text h2");
const text = document.querySelector(".about-text p");


const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function renderCarousel() {
  const prevIndex = (currentIndex - 1 + images.length) % images.length;

  centerImage.src = images[currentIndex].src;
  leftImage.src = images[prevIndex].src;

  
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  renderCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  renderCarousel();
});

renderCarousel();



const darkbtn = document.getElementById("theme-toggle");

darkbtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkbtn.textContent = "☀️";
    } else {
        darkbtn.textContent = "🌙";
    }
});