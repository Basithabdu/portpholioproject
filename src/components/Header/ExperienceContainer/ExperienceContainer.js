import React from "react";
import { Element } from "react-scroll";
import Experience from "../ExperienceBox/Experience";
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience</h1>
      <div className="experienceContainer__info">
        <Experience number="+2" title="Clients" />
        <Experience
          number="10+"
          title="Projects"
          style={{ backgroundColor: "#f64c08" }}
        />
        <Experience number="4.5+" title="Years of Experience" />
        <Experience number="20+" title="Students got traine" />
      </div>
    </Element>
  );
};

export default ExperienceContainer;
