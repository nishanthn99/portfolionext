const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>Designed & built with care <span>✳</span> by Nishanth</p>
        <p>Next.js · Tailwind CSS · A little motion</p>
        <a href="mailto:nishanthsherugar@gmail.com">Say hello ↗</a>
      </div>
      <style jsx>{`
        .site-footer { border-top: 1px solid rgba(255,255,255,.08); background: #09090d; color: #898397; }
        .footer-inner { width: min(1180px, calc(100% - 48px)); min-height: 80px; margin: auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; font-size: 10px; }
        .footer-inner p { margin: 0; } .footer-inner span { color: #b49aff; padding: 0 4px; }
        .footer-inner a { color: #c9b6ff; transition: color .2s ease; } .footer-inner a:hover { color: white; }
        @media (max-width: 650px) { .footer-inner { width: calc(100% - 32px); padding: 20px 0; flex-wrap: wrap; justify-content: center; text-align: center; } .footer-inner p:nth-child(2) { width: 100%; order: 3; } }
      `}</style>
    </footer>
  );
};
export default Footer;
