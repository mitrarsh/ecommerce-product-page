


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