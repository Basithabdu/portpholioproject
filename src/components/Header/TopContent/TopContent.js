import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
      <img
        style={{ width: "100%", height: "100%" }}
        src="./image/IMG_0282.JPG"
        alt="img"
      />
      <div className="topContent__container">
        <h1>Mr. Basith Abdul Kader</h1>
        <p>A Professional Web and Front End Developer</p>
        <a href="www.google.com">
          <button className="topContent__downloadButton">Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent__workButton">My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
