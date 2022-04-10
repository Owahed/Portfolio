import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nave-bar ">
      <div className="nave-bar-element ">
        <a href="#">EDGAR</a>
        <br />
        <a href="#">Work</a>
        <br />
        <a href="#">About</a>
        <br />
        <a href="#">CV</a>
      </div>
      <div className="nav-bar-link ">
        <h3>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </h3>
        <h3>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </h3>
        <h3>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
