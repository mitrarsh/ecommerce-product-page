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