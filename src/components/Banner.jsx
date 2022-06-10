import React from "react";
import { Link } from "react-router-dom";
import Chef from '../assets/chef.webp'
import { RECIPE } from "../constant/routes";

const Banner = () => {
  return (
    <div className="w-full bg-primary mt-28">
      <div className="grid md:grid-cols-2 grid-cols-1 py-12 gap-8 w-10/12 mx-auto">
        <div className="pr-4">
          <h2 className="text-3xl font-semibold">Everyone Can Be a Chef</h2>
          <p className="text-accent text-xl mt-4">Cooking become so easily with top recipes. Let's try now!</p>
          <Link to={RECIPE} className="mt-12 btn btn-primary rounded-md inline-block">Find Recipes</Link>
        </div>
        <div className="pr-4 w-full relative md:block hidden ">
          <img className="w-60 absolute -top-32 lg:animate-slide animate-none" src={Chef} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
