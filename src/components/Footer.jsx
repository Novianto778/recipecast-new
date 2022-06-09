import React from "react";
import Logo from "../assets/logo.png";
import Github from "../assets/github.svg";
import IG from "../assets/ig.svg";
import FB from "../assets/fb.svg";

const Footer = () => {
  return (
    <div className="w-full bg-secondary mt-24">
      <div className="mx-auto w-10/12 py-12 grid gap-8 lg:grid-cols-4 md:grid-cols-2">
        <div className="w-full self-center lg:col-span-1 md:col-span-2">
          <img className="h-6 md:mx-auto" src={Logo} alt="" />
        </div>
        <ul>
          <li className="text-lg mb-6 text-body">Recipes</li>
          <li className="text-lg mb-6 text-body">Categories</li>
          <li className="text-lg text-body">About</li>
        </ul>
        <ul>
          <li className="text-lg mb-6 text-body">Contact</li>
          <li className="text-lg mb-6 text-body">+12345678</li>
          <li className="text-lg text-body">novianto778@gmail.com</li>
        </ul>
        <ul className="flex w-full lg:justify-between md:justify-center self-center md:col-span-2 lg:col-span-1">
          <li className="text-lg mb-6 text-body">
            <img src={IG} alt="Instagram" className="w-8 h-8 mr-12 md:mx-20 lg:mx-0" />
          </li>
          <li className="text-lg mb-6 text-body">
            <img src={Github} alt="github" className="w-8 h-8 mr-12 md:mx-20 lg:mx-0" />
          </li>
          <li className="text-lg mb-6 text-body">
            <img src={FB} alt="Facebook" className="w-8 h-8 mr-12 md:mx-20 lg:mx-0" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
