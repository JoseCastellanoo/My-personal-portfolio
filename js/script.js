const images = [
  {
    src: "images/Me-portrait.png",
    alt: "Portrait of Jose Castellano",
  },
  {
    src: "images/6B617E92-634B-479F-B9E8-98FDA062E990.JPG",
    alt: "Secondary portrait",
  },
];

const THEME_STORAGE_KEY = "portfolio-theme";

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

function updateThemeButton(isDark) {
  if (!darkBtn) {
    return;
  }

  darkBtn.textContent = isDark ? "☀️" : "🌙";
  darkBtn.setAttribute("aria-pressed", String(isDark));
  darkBtn.setAttribute("aria-label", isDark ? "Enable light mode" : "Enable dark mode");
}

function setTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark", isDark);
  updateThemeButton(isDark);
  localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
}

function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || savedTheme === "light") {
    setTheme(savedTheme);
    return;
  }

  updateThemeButton(systemPrefersDark);
  document.body.classList.toggle("dark", systemPrefersDark);
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

if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
    setTheme(nextTheme);
  });
}

renderCarousel();
loadTheme();
