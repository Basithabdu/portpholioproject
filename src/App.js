//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";

import TopContainer from "./components/Header/TopContainer/TopContainer";
import SkillContainer from "./components/Header/SkillContainer/SkillContainer";
import ProjectContainer from "./components/Header/ProjectContainer/ProjectContainer";
import ExperienceContainer from "./components/Header/ExperienceContainer/ExperienceContainer";
import Contact from "./components/Header/Contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </div>
  );
};

export default App;
