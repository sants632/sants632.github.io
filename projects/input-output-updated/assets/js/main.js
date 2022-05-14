// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   }

//button one
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//button two
function functionTwo() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//button three
function functionThree() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//button four
function functionFour() {
    var x = document.getElementById("myDIV4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//dark mode
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
      anythingIWant.style.background = "#f5591c";
    //   anythingIWant.style.color = "black";
      isDark = false;
      console.log("dark mode is off!");
    } else if(isDark === false) {
      
      darkModeButton.textContent = "Light Mode";
      anythingIWant.style.background = "black";
    //   anythingIWant.style.color = "white";
      isDark = true;
      console.log("dark mode is on!");
    }
  }

//random color
// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//   }
  
//   genNew.addEventListener("click", setBg);
//   setBg();



//visualizer
// let dim;

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   dim = width / 2;
//   background(0);
//   colorMode(HSB, 360, 100, 100);
//   noStroke();
//   ellipseMode(RADIUS);
//   frameRate(0);
// }

// function draw() {
//   background(0);
//   for (let x = 0; x <= width; x += dim) {
//     drawGradient(x, height / 2);
//   }
// }

// function drawGradient(x, y) {
//   let radius = dim / 2;
//   let h = random(0, 360);
//   for (let r = radius; r > 0; --r) {
//     fill(h, 90, 90);
//     ellipse(x, y, r, r);
//     h = (h + 1) % 360;
//   }
// }

// let dim;

// function sketch_myDIV(p) {
//     p.setup = function () {
//       p.createCanvas(400,400);

//       dim = width / 2;
//         background(255);
//         colorMode(HSB, 360, 100, 100);
//         noStroke();
//         ellipseMode(RADIUS);
//         frameRate(0);
//     }
  
//     p.draw = function () {
//       // stuff to draw
//       background(0);
//         for (let x = 0; x <= width; x += dim) {
//         drawGradient(x, height / 2);
//         }
        
//     }

//     // p.drawGradient(x, y) = function () {
//     //     let radius = dim / 2;
//     //     let h = random(0, 360);
//     //     for (let r = radius; r > 0; --r) {
//     //       fill(h, 90, 90);
//     //       ellipse(x, y, r, r);
//     //       h = (h + 1) % 360;
//     //     }
//     //   }

//   }
//   new p5(sketch_myDIV, 'myDIV')

let oneURL = "assets/videos/one_count.mov";

let twoURL = "assets/videos/two_count.mov";

let threeURL = "assets/videos/three_count.mov";

let fourURL = "assets/videos/four_count.mov";

let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");

// Detect when we press a key while in the text box
inputElement.addEventListener("keydown",function(event){

  // Detect when we specifically press enter key
  if (event.key == "Enter"){


    
    // Get the contents of the text input (aka name)
    let name = inputElement.value;
    console.log(name);

    //We can also clear what we wrote in the text box
    inputElement.value = "";
    
    //Clear the reading result from last time
    result.innerHTML = "";
    
    // Loop through 4 times
    for (let i = 0; i < 4; i++){
      
      // Print the number we're at in the loop
      console.log(i);
      
      // Get the i-th letter in the name
      let letter = name[i];
      console.log(letter);
      
      // Create a new HTML image element for the card
      let selectedCard = document.createElement("video");
      
      // If letter is any of these, use the devil card
      if (["n"].includes(letter)){
        selectedCard.src = oneURL;
      }
      
      // If letter is any of these, use the magician card
      if (["w"].includes(letter) ){
        selectedCard.src = twoURL;
      }
      
      // If letter is any of these, use the star card
      if (["h"].includes(letter)){
        selectedCard.src = threeURL;
      }
      
      // If letter is any of these, use the moon card
      if (["f"].includes(letter)){
        selectedCard.src = fourURL;
      }
      
      result.appendChild(selectedCard);
      
    }
    
  }
})


