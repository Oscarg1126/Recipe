import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";


function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const createRecipe = (newRecipe)=>{
    setRecipes([...recipes, newRecipe])
  }
const deleteRecipe = (indexToDelete)=>{
  const filtered = recipes.filter((recipe,index)=>{return indexToDelete !== index})
  setRecipes(filtered)
  
}

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;