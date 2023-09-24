import "./styles.css";

import Project from "../project";

export default function Projects({ projects }) {
  return (
    <section>
      <h3>Projects</h3>
      <ul id="project_list">
        {projects ? (
          projects.map((project) => {
            return (
              <Project key={project.id} name={project.name} url={project.url} />
            );
          })
        ) : (
          <p>Could not get projects from Github</p>
        )}
      </ul>
    </section>
  );
}
