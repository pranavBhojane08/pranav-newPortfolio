import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <a href="#home" className="nav-logo footer-logo">
            <span className="logo-bracket">{'{'}</span>
            <span className="logo-name">PB</span>
            <span className="logo-bracket">{'}'}</span>
            <span className="logo-dot">.</span>
          </a>
          <p className="footer-tagline">Full Stack Java Developer · MERN Stack · Web Designer</p>
        </div>

        <div className="footer-links">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="footer-link">{link}</a>
          ))}
        </div>

        <div className="footer-right">
          <p className="footer-copy">
            © {new Date().getFullYear()} Pranav Bhojane. Built with React + Vite.
          </p>
          <p className="footer-copy" style={{ opacity: 0.5 }}>
            Mangrulpir, Maharashtra 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}
