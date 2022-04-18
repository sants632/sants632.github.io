// console.log("Hello, Airtable");

// import Airtable from "airtable";
// console.log(Airtable);

// // use the airtable librar to get a variable that represents one of our bases
// var base = new Airtable({ apiKey: "keyLhnFLSZbCgVtB2" }).base(
//   "appextHbNAglZqO1g"
// );

// //get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
// base("tiktokfood").select({}).eachPage(gotPageOfRecipes, 
//     gotAllRecipes);

// // an empty array to hold our book data
// var recipes = [];

// // callback function that receives our data
// function gotPageOfRecipes(records, fetchNextPage) {
//   console.log("gotPageOfRecipes()");
//   // add the records from this page to our books array
//   recipes.push(...records);
//   // request more pages
//   fetchNextPage();
// }

// // call back function that is called when all pages are loaded
// function gotAllRecipes(err) {
//     console.log("gotAllRecipes()");
  
//     // report an error, you'd want to do something better than this in production
//     if (err) {
//       console.log("error loading data");
//       console.error(err);
//       return;
//     }
  
//     // call functions to log and show the books
//     consoleLogRecipes();
//     showRecipes();
//   }

//   // just loop through the books and console.log them
// function consoleLogRecipes() {
//     console.log("consoleLogRecipes()");
//     recipes.forEach((recipe) => {
//       console.log("Recipe:", recipe);
//     });
//   }
  
//   // loop through the books, create an h2 for each one, and add it to the page
//   function showRecipes() {
//     console.log("showRecipes()");
//     recipes.forEach((recipe) => {
        
//         var recipeTitle = document.createElement("h1");
//         recipeTitle.innerText = recipe.fields.name;
//         document.body.append(recipeTitle);
//     });
//   }
  
   
var ul = document.querySelector("section");

// get the data
async function getRecipes() {
  let response = await fetch(
    "https://api.airtable.com/v0/appextHbNAglZqO1g/Table%201?api_key=keyLhnFLSZbCgVtB2"
  );
  let data = response.json();
  return data;
}

getRecipes().then((data) => {
  showRecipes(data.records);
});

// do stuff with it
function showRecipes(records) {
  for (let i = 0; i < records.length; i++) {
    let name = records[i].fields.name;
    let type = records[i].fields.type;
    let likes = records[i].fields.likes;
    let user = records[i].fields.user;
    let ingredients = records[i].fields.ingredients;
    let tiktok = records[i].fields.tiktok;

    let recipeTitle = document.createElement("h2");
    let recipeType = document.createElement("h5");
    let recipeLikes = document.createElement("h3");
    let recipeUser = document.createElement("h4");
    let recipeIngredients = document.createElement("article");
    let recipeTiktok = document.createElement("section");
    
    recipeTitle.appendChild(document.createTextNode(name));
    ul.appendChild(recipeTitle);

    recipeLikes.appendChild(document.createTextNode(likes));
    ul.appendChild(recipeLikes);

    recipeUser.appendChild(document.createTextNode(user));
    ul.appendChild(recipeUser);

    recipeType.appendChild(document.createTextNode(type));
    ul.appendChild(recipeType);

    recipeIngredients.appendChild(document.createTextNode(ingredients));
    ul.appendChild(recipeIngredients);

    recipeTiktok.appendChild(document.createTextNode(tiktok));
    ul.appendChild(recipeTiktok);
  }
}