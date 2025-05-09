const itemCount= document.querySelector(".item-num");
const itemMinus= document.querySelector(".minus");
const itemPlus= document.querySelector(".plus");
const empty= document.querySelector(".cart-items p");
const addBtn= document.querySelector(".main-button");
const itemNum= document.querySelector(".item-number");
const totalPrice= document.querySelector(".total-price");
const cartItems= document.querySelector(".cart-items")


itemPlus.addEventListener("click",()=>{
  itemCount.innerHTML=Number(itemCount.innerHTML)+1
})

itemMinus.addEventListener("click",()=>{
  if(Number(itemCount.innerHTML)>0){itemCount.innerHTML=Number(itemCount.innerHTML)-1}
})

addBtn.addEventListener("click", () => {
  let itemnum = Number(itemCount.innerHTML);
  if (itemnum > 0) {
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
