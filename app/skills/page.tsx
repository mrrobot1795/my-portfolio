import styles from "./page.module.css";

const skills = [
  "React", "Node.js", "TypeScript", "AWS", "Docker", 
  "MERN", "Next.js", "Nest.js", "C++", "Python", 
  "Java", "Spring Boot", "MongoDB", "Express.js", 
  "HTML", "CSS", "Kafka"
];

export default function SkillsPage() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.skillsHeader}>Skills</h2>
      <ul className={styles.skillsList}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skillItem}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
