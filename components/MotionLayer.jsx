"use client";

import { useEffect } from "react";

export default function MotionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        root.style.setProperty("--scroll-progress", max > 0 ? `${(window.scrollY / max) * 100}%` : "0%");
      });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    const revealTargets = document.querySelectorAll(
      ".section-heading, .project-card, .about-strip-inner, .contact-section, .portrait-caption, .portrait-foot"
    );
    let observer;
    if (!reducedMotion && "IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -35px 0px" });

      revealTargets.forEach((target, index) => {
        target.classList.add("scroll-reveal");
        if (target.classList.contains("project-card")) {
          target.style.setProperty("--reveal-delay", `${(index % 3) * 110}ms`);
        }
        observer.observe(target);
      });
    } else {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
    }

    let cursor, cursorRing, mouseX = -100, mouseY = -100, ringX = -100, ringY = -100, cursorFrame = 0;
    const cleanup = [];

    if (finePointer && !reducedMotion) {
      cursor = document.createElement("div");
      cursor.className = "motion-cursor";
      cursor.setAttribute("aria-hidden", "true");
      cursorRing = document.createElement("div");
      cursorRing.className = "motion-cursor-ring";
      cursorRing.setAttribute("aria-hidden", "true");
      document.body.append(cursor, cursorRing);

      const moveCursor = (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        document.body.classList.add("has-motion-cursor");
      };
      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.17;
        ringY += (mouseY - ringY) * 0.17;
        cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        cursorFrame = requestAnimationFrame(animateRing);
      };
      const pointerOut = () => document.body.classList.remove("has-motion-cursor");
      window.addEventListener("pointermove", moveCursor, { passive: true });
      document.addEventListener("pointerleave", pointerOut);
      animateRing();
      cleanup.push(() => {
        window.removeEventListener("pointermove", moveCursor);
        document.removeEventListener("pointerleave", pointerOut);
        cancelAnimationFrame(cursorFrame);
        cursor?.remove();
        cursorRing?.remove();
        document.body.classList.remove("has-motion-cursor");
      });

      document.querySelectorAll("a, button, .project-card").forEach((target) => {
        const enter = () => cursorRing?.classList.add("cursor-hover");
        const leave = () => cursorRing?.classList.remove("cursor-hover");
        target.addEventListener("pointerenter", enter);
        target.addEventListener("pointerleave", leave);
        cleanup.push(() => {
          target.removeEventListener("pointerenter", enter);
          target.removeEventListener("pointerleave", leave);
        });
      });

      document.querySelectorAll(".button-primary, .button-dark, .contact-circle").forEach((target) => {
        const move = (event) => {
          const rect = target.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          target.style.transform = `translate3d(${x * 0.09}px, ${y * 0.13}px, 0)`;
        };
        const reset = () => { target.style.transform = ""; };
        target.addEventListener("pointermove", move);
        target.addEventListener("pointerleave", reset);
        cleanup.push(() => {
          target.removeEventListener("pointermove", move);
          target.removeEventListener("pointerleave", reset);
          target.style.transform = "";
        });
      });

      const portrait = document.querySelector(".portrait-frame");
      if (portrait) {
        const tilt = (event) => {
          const rect = portrait.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          portrait.style.setProperty("--tilt-x", `${(-y * 4).toFixed(2)}deg`);
          portrait.style.setProperty("--tilt-y", `${(x * 4).toFixed(2)}deg`);
        };
        const resetTilt = () => {
          portrait.style.setProperty("--tilt-x", "0deg");
          portrait.style.setProperty("--tilt-y", "0deg");
        };
        portrait.addEventListener("pointermove", tilt);
        portrait.addEventListener("pointerleave", resetTilt);
        cleanup.push(() => {
          portrait.removeEventListener("pointermove", tilt);
          portrait.removeEventListener("pointerleave", resetTilt);
        });
      }
    }

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      cancelAnimationFrame(frame);
      observer?.disconnect();
      cleanup.forEach((dispose) => dispose());
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
