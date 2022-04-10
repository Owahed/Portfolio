import React from "react";
import "./AboutMe.css";
import me from "../../Img/2.png";

const AboutMe = () => {
  return (
    <div className="skills-box-section">
      <div className="about-section">
        <h1 className="work-header about-all">About Me</h1>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="about-me-second  w-50 ">
          <div className="happy d-flex  align-items-center">
            <img src={me} alt="" />
            <div className="h2div">
              I am an extremely curious and self-motivated individual with a
              huge passion for development in general. As an autodidact, I take
              a very positive and ego-free approach to all aspects of my life,
              and I carry a strong work ethic with me wherever I go.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
