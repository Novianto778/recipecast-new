import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ReviewSlider from "../components/ReviewSlider";
import { HOME, SIGN_UP } from "../constant/routes";
import GoogleIcon from "../assets/google-icon.svg";
import { app } from "../services/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const googleSignIn = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    const authUser = response.user;
    dispatch(
      login({
        user: authUser.displayName,
        email: authUser.email,
        uid: authUser.uid,
      })
    );
    navigate(HOME)
  };

  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mx-auto w-10/12 mt-6 items-center justify-between">
          <div className="w-full pb-4">
            <h2 className="font-medium text-3xl leading-normal">
              Start Cooking, <br /> With The Best Recipe
            </h2>
            <div className="mt-4">
              <p className="text-base mb-2 font-semibold">Login with Google</p>
              <button
                className="btn btn-small border-2 border-body w-10/12 rounded relative"
                onClick={googleSignIn}
              >
                <img src={GoogleIcon} alt="google" className="absolute left-12 w-6 h-6" />
                Sign In with Google
              </button>
            </div>
            <p className="mt-2 text-sm font-medium">Or Login With</p>
            <div className="w-10/12 mt-4">
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
              <button className="btn btn-secondary w-full  mt-8 text-lg font-semibold rounded">
                Login
              </button>
              <p className="text-gray-500 text-center mt-2">
                Don't have an account?{" "}
                <Link to={SIGN_UP}>
                  <span className="text-primary font-medium cursor-pointer">
                    Sign Up
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="w-full hidden lg:block">
            <ReviewSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
