"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function SkillBar({ skill, index = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="skill-card"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : (index % 4) * 0.06 }}
    >
      <div className="skill-card-heading">
        <div className="skill-icon-wrap">
          <Image src={skill.icon} alt="" width={38} height={38} sizes="38px" />
        </div>
        <div className="skill-card-copy">
          <h3>{skill.name}</h3>
          <span>{skill.level}% listed proficiency</span>
        </div>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div
        className="skill-track"
        role="progressbar"
        aria-label={skill.name}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={skill.level}
      >
        <motion.div
          className="skill-fill"
          initial={{ width: reduceMotion ? `${skill.level}%` : "0%" }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 0.12 + (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.article>
  );
}
