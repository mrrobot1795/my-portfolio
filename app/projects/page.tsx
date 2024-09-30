import styles from "./page.module.css";

export default function ProjectsPage() {
  const projects = [
    { title: "Tarot Card App", description: "Description of project 1", link: "#" },
    { title: "Project 2", description: "Description of project 2", link: "#" },
  ];

  return (
    <section id="projects">
      <h2 className={styles.projectsHeader}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div key={index} className={styles["project-card"]}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
