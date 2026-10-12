import React from 'react';
import { createRoot } from 'react-dom/client';
import { profile } from './profile';
import './styles.css';

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SignalArt() {
  return <div className="signal-art" aria-hidden="true">
    <div className="art-label"><span className="status-dot" /> HUMAN CONTEXT. MACHINE INTELLIGENCE.</div>
    <svg viewBox="0 0 600 420" fill="none">
      <defs><pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#abc2b5" /></pattern><linearGradient id="wash"><stop stopColor="#dce9dc" /><stop offset="1" stopColor="#c1d9ca" /></linearGradient></defs>
      <rect width="600" height="420" fill="url(#grid)" />
      <circle cx="300" cy="210" r="156" stroke="#9bb8a5" strokeDasharray="3 8" />
      <circle cx="300" cy="210" r="112" fill="url(#wash)" stroke="#8da996" />
      <ellipse cx="300" cy="210" rx="58" ry="112" stroke="#8da996" />
      <ellipse cx="300" cy="210" rx="112" ry="42" stroke="#8da996" />
      <path d="M70 213h114l24-34 30 76 32-105 32 133 30-70h198" stroke="#265f4b" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="184" cy="213" r="6" fill="#265f4b" /><circle cx="435" cy="213" r="6" fill="#265f4b" />
      <path d="M300 36v18M300 366v18M126 210h18M456 210h18" stroke="#265f4b" />
    </svg>
    <div className="art-footer"><span>01 / EXPLORING THE INTERSECTION</span><span>AI × HEALTHCARE</span></div>
  </div>;
}

function App() {
  const contacts = [profile.email && { label: 'Email me', url: `mailto:${profile.email}` }, profile.linkedin && { label: 'LinkedIn', url: profile.linkedin }, profile.github && { label: 'GitHub', url: profile.github }].filter(Boolean);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header container">
      <a className="wordmark" href="#home"><span className="brand-icon">+</span>{profile.name}<span className="wordmark-dot">.</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Selected work</a><a className="nav-contact" href="#contact">Let’s connect <Arrow /></a></nav>
    </header>
    <main id="main">
      <section className="hero container" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> {profile.role}</div>
          <h1>Technology with<br />a <em>human purpose.</em></h1>
          <p>{profile.introduction}</p>
          <a className="button" href="#work">Explore my work <Arrow /></a>
          <div className="hero-note">Curiosity. Care. Practical impact.</div>
        </div>
        <SignalArt />
      </section>
      <div className="focus-strip"><div className="container"><span>AT THE INTERSECTION OF</span><span>Artificial intelligence</span><span className="strip-plus">+</span><span>Healthcare</span><span className="strip-plus">+</span><span>Useful software</span></div></div>
      <section className="about section container" id="about">
        <div className="section-label">01 — A LITTLE ABOUT ME</div>
        <div><h2>Better questions.<br /><em>Meaningful possibilities.</em></h2><p className="about-copy">{profile.about}</p>
        <div className="interests"><span>My focus</span><p>AI in healthcare</p><span>My approach</span><p>Curiosity, experimentation, and building</p></div></div>
      </section>
      <section className="work section container" id="work">
        <div className="work-heading"><div><div className="section-label">02 — SELECTED WORK</div><h2>Ideas, put into practice<span className="wordmark-dot">.</span></h2></div><span className="small-note">A growing collection of things I’ve built</span></div>
        {profile.projects.map((project, index) => <article className="project" key={project.url}>
          <a className="project-visual" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${project.title}`}>
            <div className="mock-window"><div className="window-bar"><span /><span /><span /><small>Scheduling workspace · illustration</small></div><div className="mock-content"><div className="mock-sidebar"><b>+</b><i /><i /><i /></div><div className="mock-calendar"><div className="mock-title">A little more organized.<span>WEEK AT A GLANCE</span></div><div className="calendar-grid">{Array.from({ length: 20 }, (_, i) => <div key={i}>{[1, 4, 7, 10, 13, 18].includes(i) && <span className={`calendar-event event-${i % 3}`} />}</div>)}</div></div></div></div>
            <span className="visual-caption">TOOLS FOR THE EVERYDAY</span><span className="visual-arrow"><Arrow /></span>
          </a>
          <div className="project-copy"><span className="project-number">PROJECT {String(index + 1).padStart(2, '0')}</span><div className="eyebrow project-category">{project.category}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">Explore the live app <Arrow /></a></div>
        </article>)}
      </section>
      <section className="contact container" id="contact"><div><div className="section-label">03 — KEEP IN TOUCH</div><h2>Good work starts<br />with a <em>conversation.</em></h2><p>Interested in healthcare AI or building something useful? Let’s connect.</p></div><div className="contact-links">{contacts.length ? contacts.map(contact => <a key={contact.label} href={contact.url} target={contact.url.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">{contact.label} <Arrow /></a>) : <p className="contact-placeholder">Contact details coming soon.</p>}</div></section>
    </main>
    <footer className="container"><span>© {new Date().getFullYear()} {profile.name}</span><span>Made with curiosity & purpose.</span><a href="#home">Back to top ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
