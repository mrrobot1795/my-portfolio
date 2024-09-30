"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

const projects = [
  {
    title: "Tarot Card App",
    description: "A tarot card reading app",
    link: "#",
  },
  { title: "Project 2", description: "Description of project 2", link: "#" },
];

export default function ProjectsPage() {
  return (
    <motion.section
      id="projects"
      className={styles.projectsSection}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className={styles.projectsHeader}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className={styles.projects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles["project-card"]}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
