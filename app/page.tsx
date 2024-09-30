'use client';

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="text-center my-10 px-4 max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold"
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-base sm:text-lg"
      >
        Full Stack Developer with expertise in MERN, Next.js, C++, Python, Java, and AWS, building scalable web and backend solutions using modern technologies.
      </motion.p>
    </section>
  );
}
