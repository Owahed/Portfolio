import React from "react";
import "./Navbar.css";

const Navbar = () => {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className="nave-bar ">
      <div className="nave-bar-element ">
        <a onClick={refreshPage} href="#">
          EDGAR
        </a>
        <br />
        <a href="#working">Work</a>
        <br />
        <a href="#aboutMe">About</a>
        <br />
        <a
          href="https://drive.google.com/file/d/1zNyx6oV3hz1OAMqAzETmw0xNGMLanZ10/view?usp=sharing"
          target="_blank"
        >
          CV
        </a>
      </div>
      <div className="nav-bar-link ">
        <h3>
          <a
            href="https://www.facebook.com/owahedhossain.roky/"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </h3>
        <h3>
          <a
            href="https://www.linkedin.com/in/owahed-hossain-877777210/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </h3>
        <h3>
          <a href="https://github.com/Owahed" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
