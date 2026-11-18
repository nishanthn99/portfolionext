"use client";

import { useEffect } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export default function MotionLayer() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer || reduceMotion) return undefined;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let cursorFrame = 0;

    const cursor = document.createElement("div");
    cursor.className = "motion-cursor";
    cursor.setAttribute("aria-hidden", "true");
    const cursorRing = document.createElement("div");
    cursorRing.className = "motion-cursor-ring";
    cursorRing.setAttribute("aria-hidden", "true");
    document.body.append(cursor, cursorRing);

    const getElement = (target) => target instanceof Element ? target : target?.parentElement;

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      document.body.classList.add("has-motion-cursor");

      const target = getElement(event.target);
      const magnetic = target?.closest(".button-primary, .button-dark, .contact-circle");
      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        magnetic.style.transform = `translate3d(${x * 0.07}px, ${y * 0.1}px, 0)`;
      }

      const portrait = target?.closest(".portrait-frame");
      if (portrait) {
        const rect = portrait.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        portrait.style.setProperty("--tilt-x", `${(-y * 3).toFixed(2)}deg`);
        portrait.style.setProperty("--tilt-y", `${(x * 3).toFixed(2)}deg`);
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.17;
      ringY += (mouseY - ringY) * 0.17;
      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      cursorFrame = requestAnimationFrame(animateRing);
    };

    const handlePointerOver = (event) => {
      const target = getElement(event.target);
      if (target?.closest("a, button, .project-card")) cursorRing.classList.add("cursor-hover");
    };

    const handlePointerOut = (event) => {
      const from = getElement(event.target)?.closest("a, button, .project-card");
      const to = getElement(event.relatedTarget)?.closest("a, button, .project-card");
      if (from && from !== to) cursorRing.classList.remove("cursor-hover");

      const leavingMagnetic = getElement(event.target)?.closest(".button-primary, .button-dark, .contact-circle");
      const enteringMagnetic = getElement(event.relatedTarget)?.closest(".button-primary, .button-dark, .contact-circle");
      if (leavingMagnetic && leavingMagnetic !== enteringMagnetic) leavingMagnetic.style.transform = "";

      const leavingPortrait = getElement(event.target)?.closest(".portrait-frame");
      const enteringPortrait = getElement(event.relatedTarget)?.closest(".portrait-frame");
      if (leavingPortrait && leavingPortrait !== enteringPortrait) {
        leavingPortrait.style.setProperty("--tilt-x", "0deg");
        leavingPortrait.style.setProperty("--tilt-y", "0deg");
      }
    };

    const pointerOut = () => {
      document.body.classList.remove("has-motion-cursor");
      cursorRing.classList.remove("cursor-hover");
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    document.addEventListener("pointerleave", pointerOut);
    animateRing();

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("pointerleave", pointerOut);
      cancelAnimationFrame(cursorFrame);
      cursor.remove();
      cursorRing.remove();
      document.body.classList.remove("has-motion-cursor");
      document.querySelectorAll(".button-primary, .button-dark, .contact-circle").forEach((element) => {
        element.style.transform = "";
      });
      document.querySelectorAll(".portrait-frame").forEach((element) => {
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
      });
    };
  }, [reduceMotion]);

  return <motion.div className="scroll-progress" aria-hidden="true" style={{ scaleX, transformOrigin: "0% 50%" }} />;
}
