window.addEventListener("load", () => {
    autoSlide();
 })
 
 function autoSlide() {
    setInterval(() => {
       slide(getItemActiveIndex() + 1);
    }, 5000); // slide speed = s
 }
 
 function slide(toIndex) {
    const itemsArray = Array.from(document.querySelectorAll(".carrusel_item"));
    const itemActive = document.querySelector(".carrusel_item__active");
 
    // check if toIndex exceeds the number of carousel items
    if (toIndex >= itemsArray.length) {
       toIndex = 0;
    }
 
    const newItemActive = itemsArray[toIndex];
 
    // start transition
    newItemActive.classList.add("carrusel_item__pos_next");
    setTimeout(() => {
       newItemActive.classList.add("carrusel_item__next");
       itemActive.classList.add("carrusel_item__next");
    }, 20);
 
    // remove all transition class and switch active class
    newItemActive.addEventListener("transitionend", () => {
       itemActive.className = "carrusel_item";
       newItemActive.className = "carrusel_item carrusel_item__active";
    }, {
       once: true
    });
 }
 
 function getItemActiveIndex() {
    const itemsArray = Array.from(document.querySelectorAll(".carrusel_item"));
    const itemActive = document.querySelector(".carrusel_item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
 }


 const btn = document.querySelector('.show-btn');
 btn.addEventListener('click', function (){
    if(document.getElementById('detalle').style.display === 'block'){
       document.getElementById('detalle').style.display = 'none';
       
    }else{ 
       document.getElementById('detalle').style.display = 'block';
    }
 })