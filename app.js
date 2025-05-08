document.addEventListener("DOMContentLoaded", () => {
  // your code here

// ////////// tab-bar
// const tabBarLink = document.querySelectorAll(".tab-bar-link")
// const underline = document.querySelector(".underline")
// const iconMenu =document.querySelector(".icon-container-menu")
// const sideBar =document.querySelector(".side-bar")
// const closeBtn =document.querySelector(".close-btn")
// const overlay =document.querySelector(".overlay")


// tabBarLink.forEach((link=>{
//     link.addEventListener("click",(e)=>{
//     // ???????????????????????????
//     })
// }))

// iconMenu.addEventListener("click", (e)=>{
//     sideBar.classList.add("active");
//     overlay.style.display="block";
// })
// closeBtn.addEventListener("click", (e)=>{
//     sideBar.classList.remove("active");
//     overlay.style.display="none";
// })


// //////////////card
// const iconCard =document.querySelector(".icon-card")
// const card =document.querySelector(".card")

// iconCard.addEventListener("click", (e)=>{
//     e.preventDefault();
//     card.classList.toggle('active');

// })


///////////////slider
// document.addEventListener("DOMContentLoaded", () => {
//     const nextBtn = document.querySelector("#nextBtn");
//     const prevBtn = document.querySelector("#prevBtn");
//     const slide = document.querySelectorAll(".slide");
//     const slides = document.querySelector(".slides");

//     let counter = 0;

//     prevBtn.style.display = 'none';

//     nextBtn.addEventListener("click", () => {
//         counter++;
//         carousel();
//     });

//     prevBtn.addEventListener("click", () => {
//         counter--;
//         carousel();
//     });

//     function carousel() {
//         if (counter > 0) {
//             prevBtn.style.display = "block";
//         } else {
//             prevBtn.style.display = "none";
//         }
//         if (counter < slide.length - 1) {
//             nextBtn.style.display = "block";
//         } else {
//             nextBtn.style.display = "none";
//         }
//         slides.style.transform = `translateX(-${100 * counter}vw)`;
//     }
// });

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



///////////// img-container-pc
///////////// img-container-pc
const bigImages= document.querySelectorAll(".big img");
const thumbImages= document.querySelectorAll(".thumbnail img");



thumbImages.forEach((thumb,index)=>{
  thumb.addEventListener("click", ()=>{

    reset();
    bigImages[index].classList.add("active");
    thumb.classList.add("active");
  })
})

bigImages[0].classList.add('active');
thumbImages[0].classList.add('active');


function reset(){
  bigImages.forEach(img => img.classList.remove("active"))
  thumbImages.forEach(img => img.classList.remove("active"))
}


})