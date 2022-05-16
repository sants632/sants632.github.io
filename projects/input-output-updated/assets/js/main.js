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
      anythingIWant.style.background = "black";
    //   anythingIWant.style.color = "black";
      isDark = false;
      console.log("dark mode is off!");
    } else if(isDark === false) {
      
      darkModeButton.textContent = "Light Mode";
      anythingIWant.style.background = "#f5591c";
    //   anythingIWant.style.color = "white";
      isDark = true;
      console.log("dark mode is on!");
    }
  }


let oneURL = "https://cdn.glitch.global/2a823c1f-e238-48b0-9214-f0cf3e3f48b0/beat_one.mp4?v=1652688891106";

let twoURL = "https://cdn.glitch.global/2a823c1f-e238-48b0-9214-f0cf3e3f48b0/beat_two.mp4?v=1652688888786";

let threeURL = "https://cdn.glitch.global/2a823c1f-e238-48b0-9214-f0cf3e3f48b0/beat_three.mp4?v=165268803332";

let fourURL = "https://cdn.glitch.global/2a823c1f-e238-48b0-9214-f0cf3e3f48b0/four_beats.mp4?v=1652689543473";

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
      selectedCard.classList.add("visualizer");
      selectedCard.muted = true;
      selectedCard.autoplay = true;
      selectedCard.loop = true;

      let selectedCardFour = document.createElement("video");
      selectedCardFour.classList.add("visualizerFour");
      selectedCardFour.muted = true;
      selectedCardFour.autoplay = true;
      selectedCardFour.loop = true;
      
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
        selectedCardFour.src = fourURL;
      }
      
      result.appendChild(selectedCard);
      result.appendChild(selectedCardFour);
    }
    
  }
})

function OpenModal() {
    let element = document.getElementById('overlay')
    element.style.display = 'block'
  }
  function CloseModal() {
    let element = document.getElementById('overlay')
    element.style.display = 'none'
  }

