import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DETAIL, HOME, LOGIN, SIGN_UP } from "./constant/routes";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGN_UP} element={<Signup />} />
          <Route path={DETAIL + '/:id'} element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
