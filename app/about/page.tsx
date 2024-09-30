"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.section
      id="about"
      className="text-center my-10 px-4 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="mt-4 text-base sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        I am an experienced Full Stack Developer proficient in building scalable
        applications using the MERN stack (MongoDB, Express.js, React, Node.js),
        along with Next.js, Nest.js, and Spring Boot. My expertise also includes
        C++, Python, and Java, giving me a strong foundation in both web and
        software development. I have extensive experience in backend services,
        database management, and CI/CD pipelines, and I am skilled in deploying
        applications on AWS. Additionally, I work with microservices and Kafka
        for efficient communication. Passionate about Agile methodologies, I
        utilize tools like Bitbucket and Jira to deliver robust solutions while
        continuously learning and improving my skillset.
      </motion.p>
    </motion.section>
  );
}
