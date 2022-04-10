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
      <div className="over-view">
        <OverView />
      </div>
      <div className="working-img">
        <Working />
      </div>
      <div className="">
        <Skills />
      </div>
      <div className="">
        <SkillsBox />
      </div>
      <div className="">
        <AboutMe />
      </div>
      <div className="">
        <Contact />
      </div>
    </div>
  );
};

export default Main;
