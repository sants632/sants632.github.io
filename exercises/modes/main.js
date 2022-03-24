var anythingIWant = document.body;
var isDark = false;

// if i click the button
var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);

// background color changes
// text color changes
function changeToDarkMode() {
  if(isDark === true) {
    
    darkModeButton.textContent = "Dark Mode";
    anythingIWant.style.background = "white";
    anythingIWant.style.color = "black";
    isDark = false;
    console.log("dark mode is off!");
  } else if(isDark === false) {
    
    darkModeButton.textContent = "Light Mode";
    anythingIWant.style.background = "black";
    anythingIWant.style.color = "white";
    isDark = true;
    console.log("dark mode is on!");
  }
}

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  // color.innerHTML = "#" + randomColor;
}

genNew.addEventListener("click", setBg);
setBg();

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readmorebtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  }
} 