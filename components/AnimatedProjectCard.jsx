"use client";

import { motion, useReducedMotion } from "motion/react";

export default function AnimatedProjectCard({ project }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card ${project.className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.16 }}
      whileHover={reduceMotion ? undefined : { y: -7, transition: { duration: 0.25 } }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : (Number(project.number) - 1) * 0.11, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-card-top"><span>{project.number} / 03</span><span className="project-arrow">{project.symbol}</span></div>
      <div className="project-art" aria-hidden="true"><div className="art-orbit art-orbit-one" /><div className="art-orbit art-orbit-two" /><span className="art-glyph">{project.number === "01" ? "C." : project.number === "02" ? "AI" : "↗"}</span></div>
      <div className="project-info"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><span className="project-visit">Explore project ↗</span></div>
    </motion.a>
  );
}
