import "./styles.css";

import Project from "./project";

export default function Projects({ loading, projects }) {
  const projectsRender = (projects) => {
    if (loading) {
      return (
        <section className="loading_sec">
          <p className="loading_message">fetching projects</p>
          <div className="loader"></div>
        </section>
      );
    }
    if (projects) {
      return (
        <ul id="project_list">
          {projects.map((project) => {
            return (
              <Project
                key={project.id}
                name={project.description}
                url={project.html_url}
              />
            );
          })}
        </ul>
      );
    } else {
      return <p>Could not access github at this time</p>;
    }
  };

  return (
    <section className="project_sec">
      <h3 id="project_h3">Projects</h3>
      {projectsRender(projects)}
    </section>
  );
}
