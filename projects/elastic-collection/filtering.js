/* globals require */
console.log("Hello, Airtable");
 
let wrapper = document.querySelector(".wrapper");
 
// load the airtable library, call it "Airtable"
let Airtable = require("airtable");
console.log(Airtable);
 
// use the airtable library, connect to our base using API key
let base = new Airtable({ apiKey: "keyLhnFLSZbCgVtB2" }).base(
 "appextHbNAglZqO1g"
);
 
//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("tiktokfood").select({}).eachPage(gotPageOfRecipes, gotAllRecipes);
 
// an empty array to hold our book data
let recipes = [];
 
// callback function that receives our data
function gotPageOfRecipes(records, fetchNextPage) {
 console.log("gotPageOfRecipes()");
 // add the records from this page to our books array
 recipes.push(...records);
 // request more pages
 fetchNextPage();
}
 
// call back function that is called when all pages are loaded
function gotAllRecipes(err) {
 console.log("gotAllRecipes()");
 
 // report an error, you'd want to do something better than this in production
 if (err) {
   console.log("error loading recipes");
   console.error(err);
   return;
 }
 
 // call functions to log and show the books
 consoleLogRecipes();
 showRecipes();
}
 
// just loop through the books and console.log them
function consoleLogRecipes() {
 console.log("consoleLogRecipes()");
 recipes.forEach((recipe) => {
   console.log("Recipes:", recipe);
 });
}
 
// loop through the books, create an h2 for each one, and add it to the page
function showRecipes() {
 console.log("showRecipes()");
 recipes.forEach((recipe) => {
   
   let recipeContainer = document.createElement("div");
        recipeContainer.classList.add("recipeContainer");
        wrapper.appendChild(recipeContainer);

        let recipeTitle = document.createElement("h2");
        recipeTitle.innerText = recipe.fields.name;
        recipeContainer.appendChild(recipeTitle);

        // let videoHolder = document.createElement("video");
        // videoHolder.src = recipe.fields.video[0].url;
        // videoHolder.classList.add("tiktokVideo");
        // videoHolder.muted = true;
        // videoHolder.controls = true;
        // videoHolder.loop = true;
        // recipeContainer.appendChild(videoHolder);
   
        var recipeType = document.createElement("h3");
        recipeType.classList.add("type");
        recipeType.innerText = recipe.fields.type;
        recipeContainer.append(recipeType);

        var recipeUser = document.createElement("h4");
        recipeUser.classList.add("user");
        recipeUser.innerText = recipe.fields.user;
        recipeContainer.append(recipeUser);

        var recipeLikes = document.createElement("h5");
        recipeLikes.classList.add("likes");
        recipeLikes.innerText = recipe.fields.likes;
        recipeContainer.append(recipeLikes);

        var recipeIngredients = document.createElement("div");
        recipeIngredients.classList.add("ingredients");
        recipeIngredients.innerText = recipe.fields.ingredients;
        recipeContainer.append(recipeIngredients);
 
 
 const slugify = function(name) {
   return name.toLowerCase().replaceAll(' ', '-');
 };
  // clean up names of tags to be lower case without spaces
 
 
// moved everything inside the show recipe function
 //changed recipes to recipe
 let type = recipe.fields.type;
  type.forEach(function(type) {
   
   let typeClassName = slugify(type);
   console.log('typeClassName', typeClassName);
   recipeContainer.classList.add(typeClassName);
 });
   
  // add event listener to our filter to add an active class to our video
  let filterEntree = document.querySelector(".entree");
  let entreebutton = document.querySelector(".entreebutton");
      filterEntree.addEventListener("click", function(){
   if (recipeContainer.classList.contains("entree")) {
     recipeContainer.style.display = "block";
     entreebutton.classList.add("active");
   } else {
     recipeContainer.style.display = "none";
     entreebutton.classList.remove("active");
   }
 });
   
  let filterSnack = document.querySelector(".snack");
  let snackButton = document.querySelector(".snackbutton");
      filterSnack.addEventListener("click", function(){
   if (recipeContainer.classList.contains("snack")) {
      recipeContainer.style.display = "block";
      snackButton.classList.add("active");
   } else {
      recipeContainer.style.display = "none";
      snackButton.classList.remove("active");
   }
 });
   
   let filterSidedish = document.querySelector(".side-dish");
   let sidedishButton = document.querySelector(".side-dishbutton");
       filterSidedish.addEventListener("click", function(){
   if (recipeContainer.classList.contains("side")) {
       recipeContainer.style.display = "block";
       sidedishButton.classList.add("active");
   } else {
      recipeContainer.style.display = "none";
      sidedishButton.classList.remove("active");
   }
 });
   
   
  let filterBeverage = document.querySelector(".beverage");
  let beverageButton = document.querySelector(".beveragebutton");
      filterBeverage.addEventListener("click", function(){
   if (recipeContainer.classList.contains("beverage")) {
      recipeContainer.style.display = "block";
      beverageButton.classList.add("active");
   } else {
      recipeContainer.style.display = "none";
      beverageButton.classList.remove("active");
   }
 });
   
  let filterIngredient = document.querySelector(".ingredient");
  let ingredientButton = document.querySelector(".ingredientbutton");
      filterIngredient.addEventListener("click", function(){
   if (recipeContainer.classList.contains("ingredient")) {
     recipeContainer.style.display = "block";
     ingredientButton.classList.add("active");
   } else {
    recipeContainer.style.display = "none";
    ingredientButton.classList.remove("active");
   }
 });

  // filter reset
  var filterReset = document.querySelector(".js-reset");
  filterReset.addEventListener("click", function() {
    recipeContainer.style.display = "inline";
  });
  
 });
}

function OpenModal() {
  let element = document.getElementById('overlay')
  element.style.display = 'block'
}
function CloseModal() {
  let element = document.getElementById('overlay')
  element.style.display = 'none'
}