import React from "react";
import RecipeItem from "./RecipeItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useWindowSize from "../hooks/useWindowSize";

const RecipeSlider = ({ recipes, numPerPage }) => {
  const size = useWindowSize()
  const handlePerPage = () => {
    if(size.width >= 1024) {
      return numPerPage ||  4;
    }
    
    if(size.width >= 600 && size.width < 1024) {
      return numPerPage || 2;
    }

    if(size.width < 600) {
      return 1;
    }
  }

  return (
    <div className="mx-auto w-10/12">
      <Splide
        options={{
          perPage: handlePerPage(),
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
