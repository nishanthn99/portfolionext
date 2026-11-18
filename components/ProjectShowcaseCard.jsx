"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function ProjectShowcaseCard({ project, index = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="work-card"
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`work-card-media ${project.images.length > 1 ? "work-card-media-gallery" : ""}`}>
        {project.images.map((image) => (
          <div className="work-card-image" key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 720}
              height={image.height || 520}
              sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 38vw"
              className="work-card-img"
            />
          </div>
        ))}
        <span className="work-card-index">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="work-card-body">
        <p className="work-card-kicker">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="work-card-description">{project.description}</p>
        {project.details && <p className="work-card-detail">{project.details}</p>}
      </div>
    </motion.article>
  );
}
