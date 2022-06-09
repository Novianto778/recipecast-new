import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ReviewSlider from "../components/ReviewSlider";
import { LOGIN } from "../constant/routes";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mx-auto w-10/12 mt-6 items-center justify-between">
          <div className="w-full">
            <h2 className="font-medium text-3xl leading-normal">
              Start Cooking, <br /> With The Best Recipe
            </h2>
            <form action="" className="w-10/12 mt-8">
              <label htmlFor="email" className="font-semibold mb-2 block">
                Email
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-100 focus:outline-gray-300 text-base rounded"
                placeholder="your email address"
              />
              <label
                htmlFor="password"
                className="font-semibold mb-2 mt-4 block"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-gray-100 focus:outline-gray-300 text-base rounded"
                placeholder="your password"
              />
              <label
                htmlFor="password"
                className="font-semibold mb-2 mt-4 block"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-gray-100 focus:outline-gray-300 text-base rounded"
                placeholder="your confirm password"
              />
              <button className="btn btn-secondary w-full  mt-8 text-lg font-semibold rounded">
                Sign Up
              </button>
              <p className="text-gray-500 text-center mt-2">
                Have an account?{" "}
                <Link to={LOGIN}>
                  <span className="text-primary font-medium cursor-pointer">Sign In</span>
                </Link>
              </p>
            </form>
          </div>
          <div className="w-full hidden lg:block">
            <ReviewSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
