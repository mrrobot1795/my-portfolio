"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

const skills = [
  "React",
  "Node.js",
  "TypeScript",
  "AWS",
  "Docker",
  "MERN",
  "Next.js",
  "Nest.js",
  "C++",
  "Python",
  "Java",
  "Spring Boot",
  "MongoDB",
  "Express.js",
  "HTML",
  "CSS",
  "Kafka",
];

export default function SkillsPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="skills"
      className={styles.skillsSection}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.skillsHeader}
      >
        Skills
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={styles.skillsList}
      >
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            className={styles.skillItem}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
