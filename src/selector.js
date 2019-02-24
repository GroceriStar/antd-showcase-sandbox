import {
  groceristar,
  chickenKyiv,
  showcase,
  // gsLoopback
} from "@groceristar/groceristar-fetch";

function getFiveRandomIngredients(){
  return chickenKyiv.getFiveRandomIngredients();
}

//@TODO i don't like this name too
function getRecipeChickenKyivById(id) {
  return chickenKyiv.getRecipe()[id];
}


// @TODO remove fetch doesn't work
// // GS Loopback
// function getUltimateGrocery(){
//   return gsLoopback.getUltimateGrocery();
// };

// function getGLwithUserRelations(){
//   return gsLoopback.getGLwithUserRelations();
// };

// function getIngredientsSampleFromDB(){
//   return gsLoopback.getIngredientsSampleFromDB();
// };

function getGroceriesKey(){
  // console.log(groceristar.getGroceriesWithDepIngKey());
  return groceristar.getGroceriesWithDepIngKey();
};





function getRandomRecipe(){
  return chickenKyiv.getRandomRecipe()
}

function getFirstFiveRecipes(){
  return chickenKyiv.getFirstFiveRecipes();
}





export {
  getGroceriesKey,

  getRandomRecipe,
  getFirstFiveRecipes,
  getFiveRandomIngredients,
  getRecipeChickenKyivById,
}
