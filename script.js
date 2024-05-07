let moon = document.getElementById("moon")
let moonImg = document.getElementById("moon__img")
let sunImg = document.getElementById("sun__img")
let bodys = document.getElementById("asd") 
let greyBlocks = document.querySelectorAll(".grey")
let bodyText = document.querySelectorAll(".body__text")
let imgs = document.querySelectorAll(".body__img")
let serch = document.querySelector(".nav__serch")
let heroBtn = document.querySelector(".hero__btn")


moon.addEventListener("click", () =>{
    moonImg.classList.toggle("active")
    sunImg.classList.toggle("active")
    serch.classList.toggle("active")
    bodys.classList.toggle("active")
    heroBtn.classList.toggle("active")
    greyBlocks.forEach(block => {
        block.classList.toggle("active")
    });
    bodyText.forEach(text => {
        text.classList.toggle("active")
    });
    imgs.forEach(img => {
        img.classList.toggle("active")
    });
})

document.onkeydown = function(e) {
    if(event.keyCode == 123) {return false};
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){return false;}
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){return false;}
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){return false;}
    }
    document.ondragstart = noselect; 
    // запрет на перетаскивание 
    document.onselectstart = noselect; 
    // запрет на выделение элементов страницы 
    document.oncontextmenu = noselect; 
    // запрет на выведение контекстного меню 
    function noselect() {return false;} 