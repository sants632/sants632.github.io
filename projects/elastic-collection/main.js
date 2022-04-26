console.log("Hello, Airtable");

let Airtable = require("airtable");
console.log(Airtable);

let wrapper = document.querySelector(".wrapper")

var base = new Airtable({ apiKey: "keyLhnFLSZbCgVtB2" }).base(
  "appextHbNAglZqO1g"
);

base("tiktokfood").select({}).eachPage(gotPageOfRecipes, 
    gotAllRecipes);

var recipes = [];

function gotPageOfRecipes(records, fetchNextPage) {
  console.log("gotPageOfRecipes()");
  
  recipes.push(...records);
  
  fetchNextPage();
}

function gotAllRecipes(err) {
    console.log("gotAllRecipes()");
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
    
    consoleLogRecipes();
    showRecipes();
  }
  
function consoleLogRecipes() {
    console.log("consoleLogRecipes()");
    recipes.forEach((recipe) => {
      console.log("Recipe:", recipe);
    });
  }
  
  function showRecipes() {
    console.log("showRecipes()");
    recipes.forEach((recipe) => {

        // var recipeContainer = document.createElement("div");
        // recipeContainer.classList.add("recipe-container");
        // document.querySelector(".container").append(recipeContainer);
        
        let recipeContainer = document.createElement("div");
        recipeContainer.classList.add("recipeContainer");
        recipeContainer.innerText = recipe.fields.name;
        wrapper.append(recipeContainer);

        // var recipeLikes = document.createElement("h3");
        // recipeLikes.classList.add("likes");
        // recipeLikes.innerText = recipe.fields.likes;
        // recipeContainer.append(recipeLikes);

        // var recipeUser = document.createElement("h4");
        // recipeUser.classList.add("user");
        // recipeUser.innerText = recipe.fields.user;
        // recipeContainer.append(recipeUser);

        // var recipeType = document.createElement("h5");
        // recipeType.classList.add("type");
        // recipeType.innerText = recipe.fields.type;
        // recipeContainer.append(recipeType);

        // var recipeIngredients = document.createElement("section");
        // recipeIngredients.classList.add("ingredients");
        // recipeIngredients.innerText = recipe.fields.ingredients;
        // recipeContainer.append(recipeIngredients);

        // let videoHolder = document.createElement("video");
        // videoHolder.src = recipe.fields.video[0].url;
        // videoHolder.classList.add("tiktokvideo");
        // videoHolder.muted = true;
        // videoHolder.autoplay = true;
        // videoHolder.loop = true;
        // recipeTitle.appendChild(videoHolder);


    });
  }
  
   
// var ul = document.querySelector("section");

// // get the data
// async function getRecipes() {
//   let response = await fetch(
//     "https://api.airtable.com/v0/appextHbNAglZqO1g/Table%201?api_key=keyLhnFLSZbCgVtB2"
//   );
//   let data = response.json();
//   return data;
// }

// getRecipes().then((data) => {
//   showRecipes(data.records);
// });

// // do stuff with it
// function showRecipes(records) {
//   for (let i = 0; i < records.length; i++) {
//     let name = records[i].fields.name;
//     let type = records[i].fields.type;
//     let likes = records[i].fields.likes;
//     let user = records[i].fields.user;
//     let ingredients = records[i].fields.ingredients;
//     let tiktok = records[i].fields.video.url;


//     let wrapper = document.querySelector(".container");
//     let recipeVideo = document.createElement("video");
//     let recipeTitle = document.createElement("h2");
//     let recipeType = document.createElement("h5");
//     let recipeLikes = document.createElement("h3");
//     let recipeUser = document.createElement("h4");
//     let recipeIngredients = document.createElement("li");
//     let recipeTiktok = document.createElement("section");


//     recipeVideo.src = tiktok;
//     recipeVideo.muted = true;
//     recipeVideo.autoplay = true;
//     recipeVideo.loop = true;

    
//     recipeTitle.appendChild(document.createTextNode(name));
//     ul.appendChild(recipeTitle);

//     recipeLikes.appendChild(document.createTextNode(likes));
//     ul.appendChild(recipeLikes);

//     recipeUser.appendChild(document.createTextNode(user));
//     ul.appendChild(recipeUser);

//     recipeType.appendChild(document.createTextNode(type));
//     ul.appendChild(recipeType);

//     recipeIngredients.appendChild(document.createTextNode(ingredients));
//     ul.appendChild(recipeIngredients);

//     wrapper.appendChild(recipeVideo);


    // recipeTiktok.appendChild(document.createTextNode(tiktok));
    // ul.appendChild(recipeTiktok);

    // let videoHolder = document.createElement("video");
    //  videoHolder.src = records[i].fields.video[0].url;
    //  videoHolder.classList.add("tiktokVideo");
    //  videoHolder.muted = true;
    //  videoHolder.autoplay = true;
    //  videoHolder.loop = true;
    //  tiktokTextHolder.appendChild(videoHolder);

    // let videoHolder = document.createElement("video");
    //  videoHolder.src = tiktok.fields.video[0].url;
    //  videoHolder.classList.add("tiktokVideo");
    //  videoHolder.muted = true;
    //  videoHolder.autoplay = true;
    //  videoHolder.loop = true;
    //  tiktokTextHolder.appendChild(videoHolder);

//   }
// }