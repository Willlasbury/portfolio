import "./styles.css";

export default function Projects({ projects }) {
  console.log("projects:", projects)
  return (
    <section>
      <p>{projects ? "projects" : "nope"}</p>
    </section>
  );
}
