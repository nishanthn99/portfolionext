"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/aboutMe", label: "About" },
];

function NavigationLinks({ mobile = false, pathname, onNavigate }) {
  return (
    <>
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${active ? "is-active" : ""}`}
            aria-current={active ? "page" : undefined}
            onClick={onNavigate}
          >
            {link.label}
          </Link>
        );
      })}
      <a href="mailto:nishanthsherugar@gmail.com" className="nav-contact" onClick={onNavigate}>
        Let’s talk <span>↗</span>
      </a>
    </>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Nishanth home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">N.</span><span>Nishanth<span className="brand-period">.</span></span>
        </Link>
        <span className="nav-caption">SOFTWARE DEVELOPER</span>

        <nav className="nav-links" aria-label="Main navigation">
          <NavigationLinks pathname={pathname} />
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={menuOpen ? "nav-toggle-line is-open" : "nav-toggle-line"} />
          <span className={menuOpen ? "nav-toggle-line is-open" : "nav-toggle-line"} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
          >
            <NavigationLinks mobile pathname={pathname} onNavigate={() => setMenuOpen(false)} />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
