import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomRecipes, getSimilar } from "../store/recipeSlice";
import RecipeCard from "./RecipeCard";

const RandomSection = () => {
  const dispatch = useDispatch();
  const { recipes, similar, pending } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRandomRecipes());
  }, [dispatch]);


  return (
    <div className="mt-12 container w-10/12 mx-auto">
      <h2 className="text-3xl font-semibold text-center">
        Try Our Random Recipes
      </h2>
      <div className="mt-8 grid lg:grid-cols-3 grid-cols-1 gap-6 justify-center">
        {pending ? (
          <p>Loading...</p>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} detail={recipe} />
          ))
        )}
      </div>
    </div>
  );
};

export default RandomSection;
