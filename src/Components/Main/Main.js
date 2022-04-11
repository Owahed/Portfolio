import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import OverView from "../OverView/OverView";
import Skills from "../Skills/Skills";
import SkillsBox from "../Skills/SkillsBox";
import Working from "../Working/Working";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div id="overView" className="over-view ">
        <OverView />
      </div>
      <div id="working" className="working-img">
        <Working />
      </div>
      <div id="skills" className="">
        <Skills />
      </div>
      <div id="skillsBox" className="">
        <SkillsBox />
      </div>
      <div id="aboutMe" className="">
        <AboutMe />
      </div>
      <div id="contact" className="">
        <Contact />
      </div>
    </div>
  );
};

export default Main;
