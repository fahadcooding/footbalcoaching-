// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TopNavBar from "./Components/Headers/TopNavBar";
import SubNavbar from "./Components/Headers/SubNavbar";
import Registration from "./pages/Auth/Registration/Registration";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <TopNavBar />
      <SubNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
