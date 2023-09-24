import "./styles.css";

import Project from "./project";

export default function Projects({ projects }) {
  console.log("projects:", projects)
  return (
    <section className="project_sec">
      <h3 id="project_h3">Projects</h3>
      <ul id="project_list">
        {projects ? (
          projects.map((project) => {
            return (
              <Project key={project.id} name={project.description} url={project.html_url} />
            );
          })
        ) : (
          <p>Could not get projects from Github</p>
        )}
      </ul>
    </section>
  );
}
