import React from "react";
import { Link } from "react-router-dom";
import { DETAIL } from "../constant/routes";

const RecipeCard = ({ detail }) => {
  return (
    <Link
      to={DETAIL + "/" + detail.id}
      className="max-w-sm rounded-md overflow-hidden shadow-lg flex flex-col justify-between justify-self-center"
    >
      <div>
        <img
          className="w-full"
          src={detail.image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{detail.title}</div>
          <p
            className="text-gray-700 text-base clip-text"
            dangerouslySetInnerHTML={{ __html: detail.summary }}
          ></p>
        </div>
      </div>
      <div className="flex">
        <div className="px-6 pt-4 pb-2">
          {detail.cuisines[0] && (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {detail.cuisines[0]}
            </span>
          )}
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {detail.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
          </span>
          {detail.dishTypes[0] && (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {detail.dishTypes[0]}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
