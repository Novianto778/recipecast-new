import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipeSlider from "../components/RecipeSlider";
import SearchSection from "../components/SearchSection";
import { getPopular } from "../store/recipeSlice";

const Recipes = () => {
  const { popular } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopular());
  }, [dispatch]);
  return (
    <>
      <SearchSection />
      <h4 className="text-center font-bold mb-8 text-2xl">
        Our Popular Recipes
      </h4>
      <RecipeSlider recipes={popular} />
    </>
  );
};

export default Recipes;
