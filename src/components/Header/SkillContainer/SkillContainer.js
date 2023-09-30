import React from "react";
import { Element } from "react-scroll";
// import skillImg from "image/Skillimage.jpg";

import { LinearProgress } from "@mui/material";
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
    <Element className="SkillContainer" id="skills">
      <div className="skillContainer__image">
        <img src="./image/Skillimage.jpg" alt="skill" />
      </div>

      <div className="skillContainer__text">
        <h2>SKILLSET</h2>
        <div className="skillContainer__skillSet">
          <h5>React JS</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={90} />
          </div>

          <h5>JavaScript</h5>
          <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={70} />
          </div>

          <h5>HTML5</h5>
          <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={98} />
          </div>

          <h5>CSS3</h5>
          <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={98} />
          </div>

          <h5>Bootstrap5</h5>
          <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant="determinate" value={94} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
