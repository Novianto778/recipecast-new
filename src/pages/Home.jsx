import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RandomSection from "../components/RandomSection";
import SearchSection from "../components/SearchSection";
import { login, logout } from "../store/userSlice";

const Home = () => {
  const auth = getAuth()
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            user: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <RandomSection />
      <SearchSection />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
