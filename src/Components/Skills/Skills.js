import React from "react";
import skills1 from "../../Img/50-file-outline.gif";
import skills2 from "../../Img/10-analytics-outline.gif";
import skills3 from "../../Img/34-code-outline.gif";
import skills4 from "../../Img/14-article-outline.gif";
import skills5 from "../../Img/43-pie-chart-diagram-outline (2).gif";
import skills6 from "../../Img/197-calculate-outline.gif";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="all-content work-section">
        <div className=" first-content">
          <div className="work-headers">
            <h1 className="work-header">My Skills</h1>
            <Slide left>
              <div className="work-first-para skill-section">
                <div className="skills-img-background">
                  <img width={"50px"} src={skills1} alt="" />
                </div>
              </div>
              <div className="py-3 ">
                <h2 className="skills-h2">User Experience Design</h2>
                <p className="text-white">
                  Defining business problems, building strategies to <br />
                  piece together the business goal and user needs by designing{" "}
                  <br />
                  meaningful experiences.
                </p>
              </div>
            </Slide>
            <Slide left>
              <div className="work-first-para skill-section pt-5">
                <div className="skills-img-background">
                  <img width={"50px"} src={skills3} alt="" />
                </div>
              </div>
              <div className="py-3 ">
                <h2 className="skills-h2">Responsive Web Design</h2>
                <p className="text-white">
                  I create layouts that adjust to any type of screen size,
                  <br /> desktop, tablet or mobile
                </p>
              </div>
            </Slide>

            <Slide left>
              <div className="work-first-para skill-section pt-5">
                <div className="skills-img-background">
                  <img width={"50px"} src={skills5} alt="" />
                </div>
              </div>
              <div className="py-3 ">
                <h2 className="skills-h2">User Interface Design</h2>
                <p className="text-white">
                  Designing user-centric, modern interfaces for digital <br />{" "}
                  products or services which helps transfers the <br /> brand’s
                  strengths and visual assets to a product’s <br /> interface.
                </p>
              </div>
            </Slide>
          </div>
        </div>
        <div className="second-content working-img">
          <div className="skill-second-section">
            <Fade right>
              <div className="work-first-para skill-section pt-5">
                <div className="skills-img-background">
                  <img width={"50px"} src={skills2} alt="" />
                </div>
              </div>
              <div className="py-3 text-center">
                <h2 className="">Animated Interactions</h2>
                <p className="">
                  I create animated micro-interactions usually to make <br />{" "}
                  things more engagingand less boring.
                </p>
              </div>
            </Fade>
            <Fade right>
              {" "}
              <div className="work-first-para skill-section pt-5">
                <div className="skills-img-background">
                  <img width={"50px"} src={skills4} alt="" />
                </div>
              </div>
              <div className="py-3 text-center">
                <h2 className="">Api Integration</h2>
                <p className="">
                  API is the acronym for Application Programming <br />
                  Interface, which is a software intermediary that allows <br />{" "}
                  two applications to talk to each other.
                </p>
              </div>
            </Fade>
            <Fade right>
              {" "}
              <div className="work-first-para skill-section pt-5">
                <div className="skills-img-background">
                  <img width={"50px"} src={skills6} alt="" />
                </div>
              </div>
              <div className="py-3 text-center">
                <h2 className="">Making Killer Beats</h2>
                <p className="">
                  When I’m not designing, I create killer “lo-fi” beats in{" "}
                  <br /> my mini home studio.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
