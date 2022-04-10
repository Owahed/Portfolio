import React from "react";
import Title from "react-vanilla-tilt";
import bootstrap from "../../Img/bootstrap.png";
import javascript from "../../Img/javascript.png";
import materialUI from "../../Img/logo.png";
import nodejs from "../../Img/nodejs.png";
import react from "../../Img/react.png";
import vuejs from "../../Img/vuejs.png";
import redux from "../../Img/redux.png";
import sass from "../../Img/sass.png";
import Fade from "react-reveal/Fade";
import "./SkillsBox.css";

const SkillsBox = () => {
  const options = {
    max: 30,
    scale: 1.0,
    speed: 1000,
  };
  return (
    <div className="skills-box-section">
      <div className="d-flex justify-content-center skills-box-content">
        <div className="skills-box">
          <div className="sick-box">
            <Fade right>
              <Title className="tilt" options={options}>
                <div className="tilt-header">
                  <img width={"41px"} src={bootstrap} alt="" />
                  <h3 className="tilt-header-h3">Bootstrap</h3>
                </div>
                <div className="tilt-bottom">
                  <p>
                    Bootstrap is a powerful framework that has taken web
                    development, especially front-end development, and community
                    to the next level.
                  </p>
                </div>
              </Title>
              <Title className="tilt" options={options}>
                <div className="tilt-header">
                  <img width={"41px"} src={materialUI} alt="" />
                  <h3 className="tilt-header-h3">Material UI</h3>
                </div>
                <div className="tilt-bottom">
                  <p>
                    Material UI is an open-source, front-end framework for React
                    components that has 60,500 plus stars on github.
                  </p>
                </div>
              </Title>
              <Title className="tilt" options={options}>
                <div className="tilt-header">
                  <img
                    className="javascript-icon"
                    width={"41px"}
                    src={javascript}
                    alt=""
                  />
                  <h3 className="tilt-header-h3">Javascript</h3>
                </div>
                <div className="tilt-bottom">
                  <p>
                    Javascript is used by programmers across the world to create
                    dynamic and interactive web content like applications and
                    browsers.
                  </p>
                </div>
              </Title>
              <Title className="tilt" options={options}>
                <div className="tilt-header">
                  <img width={"41px"} src={nodejs} alt="" />
                  <h3 className="tilt-header-h3">Nodejs</h3>
                </div>
                <div className="tilt-bottom">
                  <p>
                    Node. js is primarily used for non-blocking, event-driven
                    servers, due to its single-threaded nature.
                  </p>
                </div>
              </Title>
              <Title className="tilt" options={options}>
                <div className="tilt-header">
                  <img width={"41px"} src={react} alt="" />
                  <h3 className="tilt-header-h3">React</h3>
                </div>
                <div className="tilt-bottom">
                  <p>
                    React. js is an open-source JavaScript library that is used
                    for building user interfaces specifically for single-page
                    applications.
                  </p>
                </div>
              </Title>
            </Fade>
            <Fade right>
              <Title className="tilt" options={options}>
                <div className="tilt-header">
                  <img width={"41px"} src={vuejs} alt="" />
                  <h3 className="tilt-header-h3">Vue.js</h3>
                </div>
                <div className="tilt-bottom">
                  <p>
                    Vue. js is a progressive framework for JavaScript used to
                    build web interfaces and one-page applications.
                  </p>
                </div>
              </Title>
              <Title className="tilt" options={options}>
                <div className="tilt-header">
                  <img width={"41px"} src={redux} alt="" />
                  <h3 className="tilt-header-h3">Redux</h3>
                </div>
                <div className="tilt-bottom">
                  <p>
                    Redux is a post-positive adjective meaning "brought back,
                    restored" (from Latin reducere, "to bring back") used in
                    literature, film and video game titles.
                  </p>
                </div>
              </Title>
              <Title className="tilt" options={options}>
                <div className="tilt-header">
                  <img width={"41px"} src={sass} alt="" />
                  <h3 className="tilt-header-h3">Sass</h3>
                </div>
                <div className="tilt-bottom">
                  <p>
                    Sass (which stands for 'Syntactically awesome style sheets)
                    is an extension of CSS that enables you to use things like
                    variables, nested rules, inline imports and more.
                  </p>
                </div>
              </Title>{" "}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsBox;
