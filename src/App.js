import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { ABOUT, DETAIL, HOME, LOGIN, RECIPE, SIGN_UP } from "./constant/routes";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Recipes from "./pages/Recipes";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGN_UP} element={<Signup />} />
          <Route path={ABOUT} element={<About />} />
          <Route path={RECIPE} element={<Recipes />} />
          <Route path={DETAIL + "/:id"} element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
