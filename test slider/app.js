const prevbtn = document.querySelector("#prevbtn");
const nextbtn = document.querySelector("#nextbtn");
const slides = document.querySelector(".slides");
const totalSlides = slides.querySelectorAll("img").length;

let currentIndex = 0;

function updateSlide() {
  slides.style.marginLeft = `-${currentIndex * 100}%`;
}

nextbtn.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlide();
  }
});

prevbtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});

// Optional: Keyboard navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") nextbtn.click();
  if (event.key === "ArrowLeft") prevbtn.click();
});




