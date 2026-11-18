"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      className="site-footer"
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.5 }}
    >
      <div className="footer-inner">
        <p>Designed & built with care <span>✳</span> by Nishanth</p>
        <p>Next.js · Thoughtful details · A little motion</p>
        <a href="mailto:nishanthsherugar@gmail.com">Say hello ↗</a>
      </div>
    </motion.footer>
  );
}
