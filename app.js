document.addEventListener("DOMContentLoaded", () => {

 ////////// tab-bar
 const tabBarLink = document.querySelectorAll(".tab-bar-link")
 const underline = document.querySelector(".underline")
 const iconMenu =document.querySelector(".icon-container-menu")
 const sideBar =document.querySelector(".side-bar")
 const closeBtn =document.querySelector(".close-btn")
const overlay =document.querySelector(".overlay")


tabBarLink.forEach((link=>{
    link.addEventListener("click",(e)=>{
    // ???????????????????????????
    })
}))

iconMenu.addEventListener("click", (e)=>{
    sideBar.classList.add("active");
    overlay.style.display="block";
})
closeBtn.addEventListener("click", (e)=>{
    sideBar.classList.remove("active");
    overlay.style.display="none";
})


//////////////card
const iconCard =document.querySelector(".icon-card")
const card =document.querySelector(".card")

iconCard.addEventListener("click", (e)=>{
    e.preventDefault();
    card.classList.toggle('active');

})


/////////////slider
document.addEventListener("DOMContentLoaded", () => {
    const nextBtn = document.querySelector("#nextBtn");
    const prevBtn = document.querySelector("#prevBtn");
    const slide = document.querySelectorAll(".slide");
    const slides = document.querySelector(".slides");

    let counter = 0;

    prevBtn.style.display = 'none';

    nextBtn.addEventListener("click", () => {
        counter++;
        carousel();
    });

    prevBtn.addEventListener("click", () => {
        counter--;
        carousel();
    });

    function carousel() {
        if (counter > 0) {
            prevBtn.style.display = "block";
        } else {
            prevBtn.style.display = "none";
        }
        if (counter < slide.length - 1) {
            nextBtn.style.display = "block";
        } else {
            nextBtn.style.display = "none";
        }
        slides.style.transform = `translateX(-${100 * counter}vw)`;
    }
});

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



/////////adding to cart

const itemCount= document.querySelector(".item-num");
const itemMinus= document.querySelector(".minus");
const itemPlus= document.querySelector(".plus");
const empty= document.querySelector(".cart-items p");
const addBtn= document.querySelector(".main-button");
const itemNum= document.querySelector(".item-number");
const totalPrice= document.querySelector(".total-price");
const cartItems= document.querySelector(".cart-items");

const item= document.querySelector(".Item");
const emptyText= `<p class="emptyText" style="text-wrap: nowrap; margin: 4rem">Your cart is empty</p>`;
if(!item){cartItems.insertAdjacentHTML("beforeend",emptyText)}

itemPlus.addEventListener("click",()=>{
  itemCount.innerHTML=Number(itemCount.innerHTML)+1
})

itemMinus.addEventListener("click",()=>{
  if(Number(itemCount.innerHTML)>0){itemCount.innerHTML=Number(itemCount.innerHTML)-1}
})

addBtn.addEventListener("click", () => {
  let itemnum = Number(itemCount.innerHTML);
  if (itemnum > 0) {
    const empty= cartItems.querySelector(".emptyText")
    if (empty) empty.remove();

    const totalprice = itemnum * 125;

    const existingItem = document.querySelector(".cart-items .Item");
    if(existingItem){
      const existingItemNumber= existingItem.querySelector(".item-number");
      const existingTotalPrice= existingItem.querySelector(".total-price");

      const newQuantity= Number(existingItemNumber.textContent)+ itemnum;
      const newTotal = newQuantity*125;

      existingItemNumber.textContent=newQuantity;
      existingTotalPrice.textContent= `$${newTotal.toFixed(2)}`;
    }
    else{cartItem(itemnum, totalprice);}
    addCheckoutBtn()
    itemCount.innerHTML = 0;

  }
});

function cartItem(itemNum, totalPrice) {
  const newItem = `
    <div class="Item">
      <div class="item-img"><img src="image-product-1-thumbnail.jpg" alt=""></div>
      <div class="item-descrition">
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 x <span class="item-number">${itemNum}</span> <strong class="total-price">$${totalPrice.toFixed(2)}</strong></p>
      </div>
      <div class="delete">🗑️</div>
    </div>`;
  cartItems.insertAdjacentHTML("beforeend", newItem);
}

function addCheckoutBtn(){
  const checkOutBtn=`<button class="button checkOutBtn"> <span>Checkout</span </button>`;
  const existingBtn= document.querySelector(".cart-items .checkOutBtn");
  if(existingBtn){return} else{cartItems.insertAdjacentHTML("beforeend",checkOutBtn)}
}

cartItems.addEventListener("click",(e)=>{

    if(e.target.classList.contains("delete")){
      const item= e.target.closest(".Item")
      item.remove();
      }
    const remainingItem= cartItems.querySelector(".Item");
    if(!remainingItem){
      const checkOutBtn=cartItems.querySelector(".checkOutBtn");
      if (checkOutBtn) checkOutBtn.remove();

      cartItems.insertAdjacentHTML("beforeend",`<p class="emptyText" style="text-wrap: nowrap; margin: 4rem">Your cart is empty</p>`)
    }

      }
    
)