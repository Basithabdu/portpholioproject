import React from "react";
import Element from "antd/es/skeleton/Element";
import Project from "../Project/Project";

const ProjectContainer = () => {
  const projects = [
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2F4k-wallpaper&psig=AOvVaw1JMO0KWOIhj5_yltb5puBl&ust=1695806343019000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLiM_Yf5x4EDFQAAAAAdAAAAABAE",
      title: "facebook",
      desc: "Free 4k Wallpaper Photos",
      link: "www.google.com",
    },
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2F4k-wallpaper&psig=AOvVaw1JMO0KWOIhj5_yltb5puBl&ust=1695806343019000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLiM_Yf5x4EDFQAAAAAdAAAAABAE",
      title: "facebook",
      desc: "Free 4k Wallpaper Photos",
      link: "www.google.com",
    },
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2F4k-wallpaper&psig=AOvVaw1JMO0KWOIhj5_yltb5puBl&ust=1695806343019000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLiM_Yf5x4EDFQAAAAAdAAAAABAE",
      title: "facebook",
      desc: "Free 4k Wallpaper Photos",
      link: "www.google.com",
    },
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2F4k-wallpaper&psig=AOvVaw1JMO0KWOIhj5_yltb5puBl&ust=1695806343019000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLiM_Yf5x4EDFQAAAAAdAAAAABAE",
      title: "facebook",
      desc: "Free 4k Wallpaper Photos",
      link: "www.google.com",
    },
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2F4k-wallpaper&psig=AOvVaw1JMO0KWOIhj5_yltb5puBl&ust=1695806343019000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLiM_Yf5x4EDFQAAAAAdAAAAABAE",
      title: "facebook",
      desc: "Free 4k Wallpaper Photos",
      link: "www.google.com",
    },
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2F4k-wallpaper&psig=AOvVaw1JMO0KWOIhj5_yltb5puBl&ust=1695806343019000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLiM_Yf5x4EDFQAAAAAdAAAAABAE",
      title: "facebook",
      desc: "Free 4k Wallpaper Photos",
      link: "www.google.com",
    },
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2F4k-wallpaper&psig=AOvVaw1JMO0KWOIhj5_yltb5puBl&ust=1695806343019000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLiM_Yf5x4EDFQAAAAAdAAAAABAE",
      title: "facebook",
      desc: "Free 4k Wallpaper Photos",
      link: "www.google.com",
    },
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2F4k-wallpaper&psig=AOvVaw1JMO0KWOIhj5_yltb5puBl&ust=1695806343019000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLiM_Yf5x4EDFQAAAAAdAAAAABAE",
      title: "facebook",
      desc: "Free 4k Wallpaper Photos",
      link: "www.google.com",
    },
  ];
  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here are some projects which I done for making lives of people easy.
      </p>
      <div className="projectContainer_projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;
