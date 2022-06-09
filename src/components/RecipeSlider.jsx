import React from "react";
import RecipeItem from "./RecipeItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const RecipeSlider = ({ recipes }) => {
  return (
    <div className="mx-auto w-10/12">
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {recipes.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <RecipeItem recipe={recipe} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default RecipeSlider;
