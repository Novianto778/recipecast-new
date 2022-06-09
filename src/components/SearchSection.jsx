import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { DETAIL } from "../constant/routes";

const SearchSection = () => {
  const [input, setInput] = useState("");
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const debounceValue = useDebounce(input);
  
  useEffect(() => {
    async function fetchFromInput() {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_API_KEY}&number=4&query=${debounceValue}`
        );
        const res = await response.json();
        setSearchedRecipes(res);
      }
    fetchFromInput();
  }, [debounceValue]);

  return (
    <div className="container w-10/12 mx-auto my-12">
      <h2 className="text-3xl font-semibold text-center">Find Your Recipe</h2>
      <div className="mt-8 w-full md:w-9/12 mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative mb-2">
          <div className="flex absolute inset-y-0 left-0 items-center pl-6 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-14 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-200 focus:ring-blue-500 outline-none"
            placeholder="Search recipes, food..."
            onInput={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-primary font-medium rounded-full text-sm px-4 py-2"
          >
            Search
          </button>
        </div>

        {searchedRecipes.length > 0 && (
          <div className="bg-white shadow-md py-1">
            {searchedRecipes.map((recipe) => (
              <Link
                to={DETAIL + "/" + recipe.id}
                key={recipe.id}
                className="py-2 px-4 hover:bg-primary block"
              >
                {recipe.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSection;
