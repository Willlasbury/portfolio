import "./styles.css";

import AboutMe from "../aboutMe";
import Projects from "../projects";

export default function ({ loading, projects }) {
  return (
    <div id="main">
      <AboutMe />
      <Projects loading={loading} projects={projects} />
    </div>
  );
}
