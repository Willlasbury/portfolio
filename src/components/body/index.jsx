import './styles.css'

import AboutMe from "../aboutMe";
import Projects from "../projects";

export default function ({ projects }) {
  return (
    <div>
      <AboutMe />
      <Projects projects={projects} />
    </div>
  );
}
