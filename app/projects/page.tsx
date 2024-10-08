"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";

const projects = [
  {
    title: "Tarot Card App",
    description: "A tarot card reading app",
    link: "https://tarot-mrrobot.vercel.app/",
    image: "/images/project-tarot-card-app.png",
    github: "https://github.com/mrrobot1795/tarot-app",
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "TailWind CSS",
    ],
  },
  {
    title: "My Portfolio",
    description: "A portfolio which showcases my projects",
    link: "https://shashidhar-web.vercel.app",
    github: "https://github.com/mrrobot1795/my-portfolio",
    image: "/images/project-portfolio.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "CSS",
      "Node.js",
      "Express",
    ],
  },
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
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className={styles.projectImage}
            />
            <h3>
              <b>{project.title}</b>
            </h3>
            <p>{project.description}</p>
            <div className={styles.technologies}>
              <strong>Technologies:</strong>
              <ul>
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <a href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
            <a href={project.github} target="_blank" rel="noreferrer">
              Github
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
