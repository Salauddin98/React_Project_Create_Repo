import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/ErrorPage/Footer/Footer";
import LoadingSpiner from "./components/LoadingSpiner/LoadingSpiner";

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
