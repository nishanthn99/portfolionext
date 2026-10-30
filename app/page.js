import Image from "next/image";

const socials = [
  { label: "LinkedIn", href: "https://in.linkedin.com/in/nishanth-sherugar", icon: "/images/linkedin.png" },
  { label: "Email", href: "mailto:nishanthsherugar@gmail.com", icon: "/images/gmail-logo.png" },
  { label: "GitHub", href: "https://github.com/nishanthn99/", icon: "/images/code.png" },
  { label: "Instagram", href: "https://www.instagram.com/nishanth_kshatriya/", icon: "/images/instagram.png" },
];

export default function Home() {
  return (
    <div className="portfolio-home">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <main className="hero-shell">
        <div className="hero-copy">
          <div className="availability-pill reveal reveal-one">
            <span className="status-dot" /> OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES
          </div>
          <p className="eyebrow reveal reveal-two">HELLO, I’M NISHANT SHERUGAR</p>
          <h1 className="hero-title reveal reveal-three">
            I build things<br />for the <span className="gradient-text">digital world.</span>
          </h1>
          <p className="hero-description reveal reveal-four">
            Computer Science Engineer with a passion for backend engineering, thoughtful interfaces,
            and turning complex ideas into useful products.
          </p>
          <div className="hero-actions reveal reveal-five">
            <a href="/projects" className="button-primary">Explore my work <span aria-hidden="true">↗</span></a>
            <a href="/aboutMe" className="button-secondary">A little about me <span aria-hidden="true">→</span></a>
          </div>
          <div className="social-row reveal reveal-five" aria-label="Social links">
            {socials.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label}
                title={social.label} target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} className="social-link">
                <Image src={social.icon} alt="" width={19} height={19} />
              </a>
            ))}
            <span className="social-caption">LET’S CONNECT</span>
          </div>
        </div>
        <div className="hero-visual reveal reveal-three">
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-inner" />
          <div className="profile-card">
            <div className="profile-card-top"><span>PERSONAL PORTFOLIO</span><span className="card-dots">•••</span></div>
            <div className="profile-image-wrap">
              <Image src="/images/profile.JPG" alt="Portrait of Nishanth Sherugar" width={420} height={420}
                priority className="profile-image" />
            </div>
            <div className="profile-card-bottom">
              <div><p className="profile-name">Nishanth Sherugar</p><p className="profile-role">Developer · Lifelong learner</p></div>
              <span className="profile-mark">N.</span>
            </div>
          </div>
          <div className="floating-note note-top"><span className="note-icon">✳</span><span><b>Curious by nature</b><small>Always learning something new</small></span></div>
          <div className="floating-note note-bottom"><span className="code-icon">&lt;/&gt;</span><span><b>From idea to impact</b><small>Build · Learn · Improve</small></span></div>
        </div>
      </main>
      <section className="intro-strip">
        <div><span className="strip-number">01</span><span><b>Engineering mindset</b><small>Clean, practical solutions</small></span></div>
        <div><span className="strip-number">02</span><span><b>Full-stack perspective</b><small>From interface to database</small></span></div>
        <div><span className="strip-number">03</span><span><b>Always evolving</b><small>Curiosity-led development</small></span></div>
      </section>
      <section className="next-step">
        <p className="eyebrow">A FEW PLACES TO START</p>
        <div className="next-step-links">
          <a href="/projects">Selected projects <span>↗</span></a>
          <a href="/skills">Tools & technologies <span>↗</span></a>
          <a href="/aboutMe">My journey <span>↗</span></a>
        </div>
      </section>
    </div>
  );
}
