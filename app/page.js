import Image from "next/image";

const socials = [
  { label: "LinkedIn", href: "https://in.linkedin.com/in/nishanth-sherugar", icon: "/images/linkedin.png" },
  { label: "GitHub", href: "https://github.com/nishanthn99/", icon: "/images/code.png" },
  { label: "Instagram", href: "https://www.instagram.com/nishanth_kshatriya/", icon: "/images/instagram.png" },
  { label: "Email", href: "mailto:nishanthsherugar@gmail.com", icon: "/images/gmail-logo.png" },
];

const projects = [
  { number: "01", title: "CraveCure", type: "SOCIAL IMPACT · FULL STACK", description: "A platform connecting people who want to help with communities that need it.", href: "https://github.com/nishanthn99/CraveCure", className: "project-card-cream", symbol: "↗" },
  { number: "02", title: "Email Automation", type: "BACKEND · AI", description: "A queue-driven workflow for classifying emails and assisting with thoughtful replies.", href: "https://github.com/nishanthn99", className: "project-card-sand", symbol: "✳" },
  { number: "03", title: "More experiments", type: "LEARNING IN PUBLIC", description: "Small builds, new technologies, and ideas that turn into something useful.", href: "https://github.com/nishanthn99", className: "project-card-dark", symbol: "↗" },
];

export default function Home() {
  return (
    <div className="portfolio-home">
      <main>
        <section className="editorial-hero page-container">
          <div className="hero-overline reveal reveal-1"><span className="availability-dot" /> AVAILABLE FOR SOFTWARE DEVELOPMENT OPPORTUNITIES <span className="overline-index">PORTFOLIO / 2026</span></div>
          <div className="hero-grid">
            <div className="hero-main-copy">
              <p className="eyebrow reveal reveal-2">HELLO, I’M NISHANT SHERUGAR</p>
              <h1 className="hero-title reveal reveal-3">Building useful<br />things for the<br /><span className="serif-accent">digital world.</span></h1>
              <div className="hero-bottom reveal reveal-4">
                <p className="hero-description">I’m a Computer Science Engineer interested in backend systems, thoughtful interfaces, and turning complex ideas into useful products.</p>
                <div className="hero-actions">
                  <a className="button-primary" href="#selected-work">Explore selected work <span>↘</span></a>
                  <a className="text-link" href="/aboutMe">A little about me <span>↗</span></a>
                </div>
              </div>
            </div>
            <div className="hero-portrait-wrap reveal reveal-3">
              <div className="portrait-caption"><span>THE PERSON BEHIND THE CODE</span><span>01 — 04</span></div>
              <div className="portrait-frame">
                <Image src="/images/profile.JPG" alt="Portrait of Nishanth Sherugar" width={620} height={760} priority className="hero-portrait" />
                <div className="portrait-stamp">N<span>.</span></div>
              </div>
              <div className="portrait-foot"><span>Developer · Lifelong learner</span><span className="handwritten-note">Curious by nature ↙</span></div>
            </div>
          </div>
          <div className="hero-marquee" aria-label="Design, build, learn, repeat"><div className="marquee-track"><span>DESIGN WITH INTENT</span><i>✳</i><span>BUILD WITH CARE</span><i>✳</i><span>KEEP LEARNING</span><i>✳</i><span>DESIGN WITH INTENT</span><i>✳</i><span>BUILD WITH CARE</span><i>✳</i><span>KEEP LEARNING</span><i>✳</i></div></div>
        </section>

        <section className="selected-work page-container" id="selected-work">
          <div className="section-heading reveal">
            <div><p className="eyebrow">A FEW THINGS I’VE WORKED ON</p><h2>Selected <span className="serif-accent">work.</span></h2></div>
            <a href="/projects" className="text-link">View all projects <span>↗</span></a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a key={project.number} href={project.href} target="_blank" rel="noopener noreferrer" className={`project-card ${project.className}`}>
                <div className="project-card-top"><span>{project.number} / 03</span><span className="project-arrow">{project.symbol}</span></div>
                <div className="project-art" aria-hidden="true"><div className="art-orbit art-orbit-one" /><div className="art-orbit art-orbit-two" /><span className="art-glyph">{project.number === "01" ? "C." : project.number === "02" ? "AI" : "↗"}</span></div>
                <div className="project-info"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><span className="project-visit">Explore project ↗</span></div>
              </a>
            ))}
          </div>
        </section>

        <section className="about-strip">
          <div className="page-container about-strip-inner">
            <p className="eyebrow">A LITTLE ABOUT MY APPROACH</p>
            <h2>Good work starts with<br />asking <span className="serif-accent">better questions.</span></h2>
            <div className="about-strip-bottom"><p>I like understanding how things work, building practical solutions, and learning something new with every project.</p><a href="/aboutMe" className="button-dark">More about my journey <span>↗</span></a></div>
          </div>
        </section>

        <section className="contact-section page-container">
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <div className="contact-heading"><h2>Let’s make<br /><span className="serif-accent">something matter.</span></h2><a className="contact-circle" href="mailto:nishanthsherugar@gmail.com" aria-label="Email Nishanth">↗</a></div>
          <div className="contact-bottom"><p>Open to opportunities, collaborations, and good conversations.</p><div className="social-row">{socials.map((social) => <a key={social.label} href={social.href} aria-label={social.label} title={social.label} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} className="social-link"><Image src={social.icon} alt="" width={18} height={18} /></a>)}</div></div>
        </section>
      </main>
    </div>
  );
}
