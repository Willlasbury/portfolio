import "./styles.css";

export default function Projects({ projects }) {
  return (
    <section>
      <p>{projects ? "projects" : "nope"}</p>
    </section>
  );
}
