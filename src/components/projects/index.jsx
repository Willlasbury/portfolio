import "./styles.css";

import Project from "../project";

export default function Projects({ projects }) {
  if (projects) {
    return (
      <section>
        {projects.map((project) => {
          return (
            <Project key={project.id} name={project.name} url={project.url} />
          );
        })}
      </section>
    );
  } else {
    return <p>Could not get projects from Github</p>;
  }
}
