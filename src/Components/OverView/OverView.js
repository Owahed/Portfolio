import React from "react";
import "./OverView.css";
import computer from "../../Img/01.png";

const OverView = () => {
  return (
    <div className="overview-container all-content">
      <div className="content common first-content">
        <div className="sub-content">
          <h1 className="higher-gold">Hi there, I'm</h1>
          <div className="h1-wrapper common">
            <h1>Owahed </h1>
          </div>
          <h1 className="higher-gold">Web Developer</h1>
          <p className="higher-para">
            The primary responsibility of a Full Stack Developer includes
            designing user interactions on websites, developing servers and
            databases for website functionality and coding for mobile platforms.
          </p>
          <div className="higher-a ">
            <a href="#" className="reach-out-to-me-button">
              Reach Out To Me
            </a>
          </div>
        </div>
      </div>
      <div className="over-view-img second-content">
        <div>
          <img src={computer} alt="my computer" />
          <a href="#" className="reach-out-to-me-button my-work">
            See My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default OverView;
