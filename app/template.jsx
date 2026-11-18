"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Template({ children }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="route-transition"
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
