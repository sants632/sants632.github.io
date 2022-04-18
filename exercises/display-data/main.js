
let tiktoks = [
    {name: "Baked Pasta Dishes", amount: 58.8},
    {name: "Aloe Vera Juice", amount: 553.4},
    {name: "Ranch Cucumbers", amount: 407.8},
    {name: "Cookie Baked Oatmeal", amount: 519.2},
    {name: "Savory Oats", amount: 42.8},
    {name: "Foraged Mushrooms", amount: 444.9}
    ];
  
    // One: Use the amount to indicate how big each circle is
  
  // First show all the flowers and create divs for each of them
  let container = document.querySelector(".garden");
  // create a counter variable that will give us each flowers number in the array
  let i = 0;
  
  function displayTiktoks(flower) {
    // creates a new div; appends that div to the container
    let newItem = document.createElement("div");
    let flowerDiv = container.appendChild(newItem);
    // increase the counter variable by one
    i++;
    // adds a shared class to each new div
    newItem.classList.add("flower");
    // adds a specific class to each new div
    newItem.classList.add("flower" + [i]);
    // places the flower name and amount to the div
    flowerDiv.innerHTML = flower.name + " – " + flower.amount + "K ";
    // sets height of flower to the amount. try changing height to width, or padding
    flowerDiv.style.height = flower.amount + "px";
    console.log(flower);
  }
  // loops through the flowers and runs the displayFlowers function for each one
  tiktoks.forEach(displayTiktoks);