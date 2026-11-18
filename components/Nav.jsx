import Link from 'next/link';

const Nav = () => (
  <header className="site-header">
    <div className="nav-inner">
      <Link href="/" className="brand" aria-label="Nishanth home">
        <span className="brand-mark">N.</span><span>Nishanth<span className="brand-period">.</span></span>
      </Link>
      <span className="nav-caption">SOFTWARE DEVELOPER</span>
      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/aboutMe">About</Link>
        <a href="mailto:nishanthsherugar@gmail.com" className="nav-contact">Let’s talk <span>↗</span></a>
      </nav>
    </div>
  </header>
);

export default Nav;
