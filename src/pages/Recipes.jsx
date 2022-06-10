import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipeSlider from "../components/RecipeSlider";
import SearchSection from "../components/SearchSection";
import { getPopular, getVeggie } from "../store/recipeSlice";

const Recipes = () => {
  const { popular, veggie } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopular());
    dispatch(getVeggie())
  }, [dispatch]);
  return (
    <>
      <SearchSection />
      <div className="my-6">
        <div className="mt-12">
          <h4 className="text-center font-bold mb-8 text-2xl">
            Our Popular Recipes
          </h4>
          <RecipeSlider recipes={popular} numPerPage={3} />
        </div>
        <div className="mt-12">
          <h4 className="text-center font-bold mb-8 text-2xl">
            Our Vegetarian Recipes
          </h4>
          <RecipeSlider recipes={veggie} />
        </div>
      </div>
    </>
  );
};

export default Recipes;
