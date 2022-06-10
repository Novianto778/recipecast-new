import React from "react";
import { Link } from "react-router-dom";
import { DETAIL } from "../constant/routes";

const RecipeItem = ({recipe}) => {
  console.log(recipe)
  return (
    <Link to={DETAIL + '/' + recipe.id} className="w-full bg-white shadow-md relative max-w-xs cursor-pointer">
      <img
        className="w-full"
        src={recipe.image || `https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`}
        alt="Sunset in the mountains"
      />
      <div className="absolute bottom-0 bg-overlay w-full h-full z-10"></div>
      <p className="px-4 py-2 font-bold text-sm mb-2 text-white absolute bottom-2 z-20">
        {recipe.title}
      </p>
    </Link>
  );
};

export default RecipeItem;
