import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ReviewSlider from "../components/ReviewSlider";
import { HOME, LOGIN } from "../constant/routes";
import { login } from "../store/userSlice";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = getAuth();
  const handleSignUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = auth.currentUser;
          
          updateProfile(auth.currentUser, {
            displayName: email.split("@")[0],
          });
          
          const { displayName, email: userEmail, uid } = user;
          dispatch(
            login({
              displayName,
              email: userEmail,
              uid,
            })
          );
          localStorage.setItem("user", true);
          navigate(HOME);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("password dan confirm password tidak sama");
    }
  };
  return (
    <>
      <div className="w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mx-auto w-10/12 mt-6 items-center justify-between">
          <div className="w-full">
            <h2 className="font-medium text-3xl leading-normal">
              Start Cooking, <br /> With The Best Recipe
            </h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="w-10/12 mt-8">
              <label htmlFor="email" className="font-semibold mb-2 block">
                Email
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-100 focus:outline-gray-300 text-base rounded"
                placeholder="your email address"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                className="btn btn-secondary w-full  mt-8 text-lg font-semibold rounded"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <p className="text-gray-500 text-center mt-2">
                Have an account?{" "}
                <Link to={LOGIN}>
                  <span className="text-primary font-medium cursor-pointer">
                    Sign In
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

export default Signup;
