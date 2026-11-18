import Image from "next/image";
import Reveal from "@/components/Reveal";
import SkillBar from "@/components/SkillBar";

const education = [
  {
    qualification: "Bachelor of Engineering",
    stream: "Computer Science & Engineering",
    institution: "St Joseph Engineering College, Mangaluru",
    year: "2025",
    result: "9.41 CGPA",
    index: "01",
  },
  {
    qualification: "Pre-University College",
    stream: "PUC",
    institution: "Government PU College, Byndoor",
    year: "2021",
    result: "95%",
    index: "02",
  },
  {
    qualification: "SSLC",
    stream: "Secondary School",
    institution: "Government High School, Byndoor",
    year: "2019",
    result: "91.36%",
    index: "03",
  },
];

const skills = [
  { name: "Java Programming", icon: "/images/java.png", level: 90 },
  { name: "Python Programming", icon: "/images/python.png", level: 90 },
  { name: "React", icon: "/images/atom.png", level: 90 },
  { name: "C Programming", icon: "/images/letter-c.png", level: 90 },
  { name: "MERN Stack", icon: "/images/web-development.png", level: 85 },
  { name: "Microsoft Office", icon: "/images/office.png", level: 80 },
  { name: "Android UI Development", icon: "/images/mobile-coding.png", level: 75 },
  { name: "Git", icon: "/images/code.png", level: 90 },
  { name: "Database Management", icon: "/images/data-science.png", level: 80 },
];

const softSkills = ["Problem solving", "Effective communication", "Collaborative working"];

export default function Skills() {
  return (
    <main className="inner-page skills-page">
      <div className="page-container inner-page-content">
        <Reveal className="page-heading">
          <p className="eyebrow">THE FOUNDATION & THE TOOLKIT</p>
          <h1 className="page-title">Always learning.<br /><span className="serif-accent">Always building.</span></h1>
          <p className="page-intro-copy">The education, technical foundations, and people skills that shape how I approach software development.</p>
        </Reveal>

        <section className="page-section" aria-labelledby="education-heading">
          <div className="inner-section-heading">
            <div>
              <p className="eyebrow">WHERE IT STARTED</p>
              <h2 id="education-heading">Education <span className="serif-accent">journey.</span></h2>
            </div>
            <span className="section-count">2019 — 2025</span>
          </div>
          <div className="education-grid">
            {education.map((item, index) => (
              <Reveal key={item.index} className="education-card" delay={index * 0.08}>
                <span className="education-index">{item.index}</span>
                <p className="education-year">{item.year}</p>
                <h3>{item.qualification}</h3>
                <p className="education-stream">{item.stream}</p>
                <p className="education-institution">{item.institution}</p>
                <span className="education-result">{item.result}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section" aria-labelledby="technical-heading">
          <div className="inner-section-heading">
            <div>
              <p className="eyebrow">TOOLS I WORK WITH</p>
              <h2 id="technical-heading">Technical <span className="serif-accent">skills.</span></h2>
            </div>
            <span className="section-count">09 AREAS</span>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => <SkillBar key={skill.name} skill={skill} index={index} />)}
          </div>
          <p className="skills-note">The percentages reflect the proficiency estimates listed in my earlier portfolio, not a standardised assessment.</p>
        </section>

        <Reveal className="soft-skills-panel">
          <div className="soft-skills-copy">
            <p className="eyebrow">HOW I WORK WITH PEOPLE</p>
            <h2>Beyond the <span className="serif-accent">code.</span></h2>
            <p>Good software is built by people who listen, work through problems, and learn together.</p>
            <ul>
              {softSkills.map((skill) => <li key={skill}><span aria-hidden="true">✳</span>{skill}</li>)}
            </ul>
          </div>
          <div className="soft-skills-art">
            <Image src="/images/soft-skills.png" alt="Illustration representing collaboration and soft skills" width={300} height={260} sizes="(max-width: 680px) 60vw, 260px" />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
