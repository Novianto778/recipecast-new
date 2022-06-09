import React from "react";
import HeroImage from "../assets/hero-image.png"

const Hero = () => {
  return (
    <div className="w-full h-hero bg-primary md:rounded-b-corner">
      <div className="grid md:grid-cols-2 grid-cols-1 w-10/12 mx-auto items-center h-full">
        <div className="self-center">
          <h1 className="text-4xl mb-8 font-bold">
            Let’s Cooking with Favorite Recipes
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus voluptatem consectetur mollitia cum optio placeat,
            reiciendis, provident veniam odio, iure esse nostrum eveniet amet
            itaque.
          </p>
          <button className="btn btn-primary btn-curved mt-12">Get Started</button>
        </div>
        <div className="hidden self-start md:block">
          <img src={HeroImage} alt="food" className="block w-80 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
