import Image from "next/image";
import Reveal from "@/components/Reveal";
import ProjectShowcaseCard from "@/components/ProjectShowcaseCard";

const projects = [
  {
    title: "CraveCure",
    category: "SOCIAL IMPACT · FULL STACK",
    description: "A donation platform designed to connect donors, NGOs, and recipients through a more organised way to give and receive essential items.",
    details: "Built around food, clothing, gadgets, and stationery donations, with NGOs helping coordinate requests and delivery.",
    images: [{ src: "/images/cravecure.jpg", alt: "CraveCure project interface" }],
  },
  {
    title: "Travel Management System",
    category: "WEB DEVELOPMENT · DATABASE",
    description: "A travel-planning website that connects a frontend experience to a MySQL-backed system for storing customer details and managing bookings.",
    images: [{ src: "/images/projdatabase.png", alt: "Travel management database project" }],
  },
  {
    title: "Chicken Disease Prediction",
    category: "MACHINE LEARNING · DEEP LEARNING",
    description: "A convolutional neural network project that classifies chicken disease imagery using a model trained on healthy and affected samples.",
    details: "Developed using Keras and TensorFlow.",
    images: [
      { src: "/images/pic6.png", alt: "Chicken disease prediction project screen one" },
      { src: "/images/pic1.png", alt: "Chicken disease prediction project screen two" },
    ],
  },
  {
    title: "Project Showcase Website",
    category: "WORDPRESS · WEB DESIGN",
    description: "A WordPress website created to present academic projects through a simple visual showcase, using a drag-and-drop publishing workflow.",
    images: [{ src: "/images/aicteproj.jpg", alt: "Academic project showcase" }],
  },
];

const internships = [
  {
    company: "Vault of Code",
    role: "Frontend Web Development with React",
    duration: "1 month",
    image: "/images/logo.png",
    alt: "Vault of Code logo",
  },
  {
    company: "Infosys Limited",
    role: "System Engineer",
    duration: "Jan 2025 – Present",
    image: "/images/Infosys.png",
    alt: "Infosys logo",
  },
];

export default function Projects() {
  return (
    <main className="inner-page projects-page">
      <div className="page-container inner-page-content">
        <Reveal className="page-heading">
          <p className="eyebrow">SELECTED WORK & EXPERIENCE</p>
          <h1 className="page-title">Ideas made <span className="serif-accent">tangible.</span></h1>
          <p className="page-intro-copy">A collection of projects, experiments, and experiences that reflect what I enjoy learning and building.</p>
        </Reveal>

        <section className="page-section" aria-labelledby="project-list-heading">
          <div className="inner-section-heading">
            <div>
              <p className="eyebrow">PROJECT ARCHIVE</p>
              <h2 id="project-list-heading">Things I’ve <span className="serif-accent">built.</span></h2>
            </div>
            <span className="section-count">04 PROJECTS</span>
          </div>
          <div className="work-grid">
            {projects.map((project, index) => (
              <ProjectShowcaseCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="page-section experience-section" aria-labelledby="experience-heading">
          <div className="inner-section-heading">
            <div>
              <p className="eyebrow">LEARNING THROUGH PRACTICE</p>
              <h2 id="experience-heading">Experience & <span className="serif-accent">internships.</span></h2>
            </div>
          </div>
          <div className="internship-grid">
            {internships.map((internship, index) => (
              <Reveal key={internship.company} className="internship-card" delay={index * 0.1}>
                <div className="internship-logo">
                  <Image src={internship.image} alt={internship.alt} width={160} height={100} sizes="120px" />
                </div>
                <div className="internship-copy">
                  <p className="work-card-kicker">EXPERIENCE / 0{index + 1}</p>
                  <h3>{internship.company}</h3>
                  <p>{internship.role}</p>
                  <span>{internship.duration}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
