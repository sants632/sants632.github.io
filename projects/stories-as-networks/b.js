let body = document.body;
let textReveal = document.querySelector(".textreveal");

function showText() {
    textReveal.classList.toggle("show");
}

let button = document.querySelector(".number");
button.addEventListener("click", showText);