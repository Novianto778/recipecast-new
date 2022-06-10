import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BackIcon from "../assets/arrow-icon.svg";
import { getRecipeById, getSimilar } from "../store/recipeSlice";
import RecipeSlider from "../components/RecipeSlider";
import Clock from "../assets/clock-icon.svg";

const Detail = () => {
  const [detailRecipe, setDetailRecipe] = useState({});
  const [recipeInstruction, setRecipeInstruction] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipe, similar, pending } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeById(id));
    dispatch(getSimilar(id));
  }, [dispatch, id]);

  useEffect(() => {
    setDetailRecipe(recipe);
  }, [recipe]);

  useEffect(() => {
    if (
      !pending &&
      Object.keys(detailRecipe).length !== 0 &&
      detailRecipe.analyzedInstructions.length > 0
    )
      setRecipeInstruction(detailRecipe.analyzedInstructions[0].steps);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailRecipe]);

  // console.log(similar)

  const content =
    recipeInstruction.length > 0 ? recipeInstruction : recipe.summary;
  const ingredients = [].concat(
    ...recipeInstruction
      .map((ins) => ins.ingredients)
      .map((ing) => ing.map((i) => i.name))
  );

  return (
    <>
      {pending || Object.keys(detailRecipe).length === 0 ? (
        <p>Loading</p>
      ) : (
        <div className="bg-white rounded-md w-auto">
          <div className="w-11/12 mx-auto m-4 grid grid-cols-1 md:grid-cols-5 gap-x-8">
            <div className="mt-4 col-span-3">
              <span onClick={() => navigate(-1)}>
                <img src={BackIcon} alt="back icon" className="w-8 h-8" />
              </span>
              <div className="mt-8">
                <h4 className="text-3xl font-bold">{recipe.title}</h4>
                <div className="flex">
                  <div className="pr-6 pt-4 pb-2">
                    {detailRecipe.cuisines[0] && (
                      <span className="inline-block border-primary border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {detailRecipe.cuisines[0]}
                      </span>
                    )}
                    <span className="inline-block border-primary border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {detailRecipe.vegetarian
                        ? "Vegetarian"
                        : "Non-Vegetarian"}
                    </span>
                    {detailRecipe.dishTypes[0] && (
                      <span className="inline-block border-primary border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {detailRecipe.dishTypes[0]}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex mt-2">
                  <div className="flex items-center mr-6 text-body">
                    <img src={Clock} alt="time" className="w-5 h-5 mr-2" />
                    <span className="font-semibold text-sm">
                      {detailRecipe.readyInMinutes}min
                    </span>
                  </div>
                  <div className="flex items-center mr-6 text-body">
                    <span className="relative mr-4 font-medium">
                      <span className="absolute border-primary border-2 w-6 h-6 rounded-full top-0.5 -left-1.5"></span>
                      <span className="mr-2 text-xs">
                        {detailRecipe.healthScore}
                      </span>{" "}
                      Health Score
                    </span>
                  </div>
                </div>
                <div className="w-full mt-4 px-8">
                  {recipeInstruction.length > 0 ? (
                    content.map((ins) => {
                      return (
                        <div className="mt-6" key={ins.number}>
                          <span className="relative mr-4 font-medium">
                            <span className="absolute border-primary border-2 w-8 h-8 rounded-full -top-1 -left-3"></span>
                            {ins.number}{" "}
                          </span>
                          <p className="inline text-sm">{ins.step}</p>
                        </div>
                      );
                    })
                  ) : (
                    <p
                      className="text-gray-700 text-base"
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8 col-span-2 top-0">
              <img
                src={detailRecipe.image}
                alt=""
                className="rounded bg-cover aspect-4/3 shadow w-10/12"
              />
              <div className="mt-6">
                <h6 className="text-lg font-medium mb-4">Ingredients:</h6>
                {ingredients.length > 0 ? (
                  ingredients.map((ing, idx) => (
                    <p
                      key={idx}
                      className="inline-block border-primary border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {ing}
                    </p>
                  ))
                ) : (
                  <p>Not found</p>
                )}
              </div>
              <div className="w-full">
                <p className="text-lg font-semibold mb-4">Similar Recipe</p>
                <RecipeSlider recipes={similar} numPerPage={2} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
