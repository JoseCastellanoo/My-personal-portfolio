const images = [
  {
    src: "images/Me-portrait.png",
    alt: "Main portrait",
  },
  {
    src: "images/6B617E92-634B-479F-B9E8-98FDA062E990.JPG",
    alt: "Secondary portrait",
  },
];

let currentIndex = 0;

const centerImage = document.querySelector(".card.center img");
const leftImage = document.querySelector(".card.left img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const darkBtn = document.getElementById("theme-toggle");

function renderCarousel() {
  if (!centerImage || !leftImage || images.length === 0) {
    return;
  }

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const currentImage = images[currentIndex];
  const previousImage = images[prevIndex];

  centerImage.src = currentImage.src;
  centerImage.alt = currentImage.alt;

  leftImage.src = previousImage.src;
  leftImage.alt = previousImage.alt;
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    renderCarousel();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderCarousel();
  });
}

renderCarousel();

if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}
