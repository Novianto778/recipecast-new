import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BackIcon from "../assets/arrow-icon.svg";
import { getRecipeById } from "../store/recipeSlice";
import Clock from "../assets/clock-icon.svg";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipe, pending } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  const instruction = pending
    ? []
    : recipe.analyzedInstructions.length > 0
    ? recipe.analyzedInstructions[0].steps
    : [];
  const content = instruction.length > 0 ? instruction : recipe.summary;
  const ingredients = [].concat(
    ...instruction
      .map((ins) => ins.ingredients)
      .map((ing) => ing.map((i) => i.name))
  );
  return (
    <>
      {pending ? (
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
                    {recipe.cuisines[0] && (
                      <span className="inline-block border-primary border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {recipe.cuisines[0]}
                      </span>
                    )}
                    <span className="inline-block border-primary border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {recipe.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
                    </span>
                    {recipe.dishTypes[0] && (
                      <span className="inline-block border-primary border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {recipe.dishTypes[0]}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex mt-2">
                  <div className="flex items-center mr-6 text-body">
                    <img src={Clock} alt="time" className="w-5 h-5 mr-2" />
                    <span className="font-semibold text-sm">
                      {recipe.readyInMinutes}min
                    </span>
                  </div>
                  <div className="flex items-center mr-6 text-body">
                    <span className="relative mr-4 font-medium">
                      <span className="absolute border-red-500 border-2 w-6 h-6 rounded-full top-0.5 -left-1.5"></span>
                      <span className="mr-2 text-xs">{recipe.healthScore}</span>{" "}
                      Health Score
                    </span>
                  </div>
                </div>
                <div className="w-full mt-4 px-8">
                  {instruction.length > 0 ? (
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
            <div className="mt-8 col-span-2 max-h-screen sticky top-0">
              <img
                src={recipe.image}
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
