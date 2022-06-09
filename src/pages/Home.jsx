import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RandomSection from "../components/RandomSection";
import SearchSection from "../components/SearchSection";
import { login, logout } from "../store/userSlice";

const Home = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      const userLocal = JSON.parse(localStorage.getItem("user"));
      if (userAuth && userLocal) {
        const { displayName, email, uid } = userAuth;
        dispatch(
          login({
            email,
            uid,
            displayName,
          })
        );
        localStorage.setItem("user", true);
      } else {
        dispatch(logout());
        localStorage.removeItem("user");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <RandomSection />
      <SearchSection />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
