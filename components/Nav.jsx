import Link from 'next/link';

const Nav = () => {
  return (
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
      <style jsx>{`
        .site-header { position: relative; z-index: 10; border-bottom: 1px solid rgba(255,255,255,.08); background: rgba(10,9,15,.82); backdrop-filter: blur(18px); }
        .nav-inner { width: min(1180px, calc(100% - 48px)); min-height: 82px; margin: auto; display: flex; align-items: center; gap: 22px; }
        .brand { display: flex; align-items: center; gap: 10px; color: #f5f1fc; font-family: 'Manrope', sans-serif; font-size: 17px; font-weight: 800; letter-spacing: -.04em; white-space: nowrap; }
        .brand-mark { display: grid; place-items: center; width: 34px; height: 34px; border: 1px solid #b49aff70; border-radius: 11px; background: #b49aff16; color: #c9b6ff; font-size: 13px; }
        .brand-period { color: #b49aff; }
        .nav-caption { color: #777286; font-size: 9px; letter-spacing: .15em; white-space: nowrap; }
        .nav-links { display: flex; align-items: center; justify-content: flex-end; gap: 27px; margin-left: auto; }
        .nav-links :global(a) { color: #aaa5b8; font-size: 12px; transition: color .2s ease; white-space: nowrap; }
        .nav-links :global(a:hover) { color: #d3c2ff; }
        .nav-links :global(.nav-contact) { padding: 11px 14px; border: 1px solid rgba(180,154,255,.35); border-radius: 10px; color: #e5dbff; background: rgba(180,154,255,.07); }
        .nav-links :global(.nav-contact span) { margin-left: 9px; }
        @media (max-width: 700px) { .nav-inner { width: calc(100% - 30px); min-height: 72px; flex-wrap: wrap; gap: 9px 14px; padding: 12px 0; } .nav-caption { display: none; } .nav-links { width: 100%; justify-content: space-between; gap: 9px; margin-left: 0; } .nav-links :global(a) { font-size: 11px; } .nav-links :global(.nav-contact) { padding: 8px 9px; } }
      `}</style>
    </header>
  );
};

export default Nav;
