import React from "react";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-full">
      <div className="nav-bar-container">
        <Navbar />
      </div>
      <div className="main-container">
        <Main />
      </div>
     
    </div>
  );
};

export default Home;
