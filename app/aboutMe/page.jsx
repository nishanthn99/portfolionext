"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const initialForm = { email: "", feedname: "", textfeed: "" };

export default function AboutMe() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "loading", message: "Sending your message…" });

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("The message could not be sent. Please try again or email me directly.");
      }

      setFormData(initialForm);
      setStatus({ type: "success", message: "Thanks for reaching out. Your message has been sent." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="inner-page about-page">
      <div className="page-container inner-page-content">
        <Reveal className="page-heading">
          <p className="eyebrow">A LITTLE MORE ABOUT ME</p>
          <h1 className="page-title">Curiosity drives<br /><span className="serif-accent">the build.</span></h1>
          <p className="page-intro-copy">I enjoy understanding how things work, learning new technologies, and turning ideas into practical digital experiences.</p>
        </Reveal>

        <section className="about-story-grid">
          <Reveal className="about-story">
            <p className="eyebrow">THE PERSON BEHIND THE PROJECTS</p>
            <h2>Developer by craft.<br /><span className="serif-accent">Learner by nature.</span></h2>
            <p>I’m a Computer Science Engineer with an interest in backend systems, full-stack development, and thoughtful user experiences. I like exploring the details behind a product—from how its data moves to how its interface feels.</p>
            <p>This portfolio brings together selected projects, skills, education, and experiences. It is a work in progress, just like the learning that goes into every build.</p>
            <a className="button-primary about-resume" href="https://drive.google.com/file/d/11r-hFIH6V3REcn3OBpAz0QjRds7Ncdsx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Image src="/images/resume.png" alt="" width={20} height={20} />
              View my resume <span>↗</span>
            </a>
          </Reveal>

          <Reveal className="about-profile-card" delay={0.12}>
            <div className="about-profile-image">
              <Image src="/images/profile.JPG" alt="Portrait of Nishanth Sherugar" width={620} height={760} sizes="(max-width: 760px) 90vw, 420px" />
            </div>
            <div className="about-profile-caption">
              <span>NISHANTH SHERUGAR</span>
              <span>SOFTWARE DEVELOPER</span>
            </div>
          </Reveal>
        </section>

        <section className="about-contact-band">
          <div>
            <p className="eyebrow">OPEN TO CONVERSATIONS</p>
            <h2>Have a question or an idea?</h2>
            <p>For opportunities, collaborations, or a simple hello, the best way to reach me is by email.</p>
          </div>
          <div className="about-contact-links">
            <a href="mailto:nishanthsherugar@gmail.com">nishanthsherugar@gmail.com <span>↗</span></a>
            <a href="tel:+917676729896">+91 76767 29896 <span>↗</span></a>
          </div>
        </section>

        <Reveal className="feedback-panel">
          <div className="feedback-intro">
            <p className="eyebrow">LEAVE A NOTE</p>
            <h2>Every good conversation<br /><span className="serif-accent">starts somewhere.</span></h2>
            <p>Share feedback about the portfolio or send me a message using the form.</p>
          </div>

          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="feedback-name">Your name</label>
              <input
                id="feedback-name"
                name="feedname"
                type="text"
                autoComplete="name"
                placeholder="How should I address you?"
                value={formData.feedname}
                onChange={handleChange}
                minLength={4}
                maxLength={80}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="feedback-email">Email address</label>
              <input
                id="feedback-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                maxLength={254}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="feedback-message">Your message</label>
              <textarea
                id="feedback-message"
                name="textfeed"
                placeholder="Write your message here…"
                value={formData.textfeed}
                onChange={handleChange}
                rows={5}
                minLength={6}
                maxLength={3000}
                required
              />
            </div>
            <div className="feedback-form-footer">
              <p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.message}</p>
              <div className="form-actions">
                <button className="button-primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : "Send message"} <span>↗</span>
                </button>
                <button className="form-reset" type="button" onClick={() => { setFormData(initialForm); setStatus({ type: "", message: "" }); }} disabled={isSubmitting}>
                  Clear form
                </button>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </main>
  );
}
