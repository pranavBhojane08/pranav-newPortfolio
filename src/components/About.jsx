import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="orb orb-purple" style={{ width: 350, height: 350, top: 0, left: '30%', opacity: 0.08 }} />
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-avatar-wrap">
              <div className="avatar-ring ring-1" />
              <div className="avatar-ring ring-2" />
              <div className="avatar-ring ring-3" />
              <div className="avatar-img">
                <img
                  src="https://pranavbhojane-portfolio.netlify.app/css/img/1741009247841.jpg"
                  alt="Pranav Bhojane"
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Pranav+Bhojane&background=f89820&color=000&size=300&bold=true' }}
                />
              </div>
              <div className="avatar-badge">
                <span>Full Stack</span>
                <span className="badge-line">Java Developer</span>
              </div>
            </div>

            <div className="about-tech-stack">
              {['Java', 'Spring Boot', 'React', 'Node.js', 'MySQL', 'MongoDB'].map((tech) => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>

          <div className="about-content">
            <p className="section-tag">About Me</p>
            <h2 className="section-title" style={{ marginBottom: 28 }}>
              Building the <span>web</span> from<br />backend to frontend
            </h2>

            <div className="about-desc">
              <p>
                I'm <strong>Pranav Bhojane</strong>, a passionate Full Stack Developer and B.Tech graduate
                from Government College of Engineering, Yavatmal (2021–2025).
              </p>
              <p>
                My expertise lies in building <strong>scalable Java backend systems</strong> with Spring Boot,
                crafting responsive frontends with React, and connecting everything with RESTful APIs and databases.
              </p>
              <p>
                I thrive on turning complex problems into elegant, efficient solutions — from architecting
                backend microservices to polishing pixel-perfect UIs.
              </p>
            </div>

            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">📍 Location</span>
                <span className="info-value">Mangrulpir, Maharashtra</span>
              </div>
              <div className="info-item">
                <span className="info-label">📧 Email</span>
                <span className="info-value">pranavbhojane1@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">📱 Phone</span>
                <span className="info-value">+91 9404367038</span>
              </div>
              <div className="info-item">
                <span className="info-label">🎓 Degree</span>
                <span className="info-value">B.Tech (2021–2025)</span>
              </div>
            </div>

            <div className="about-actions">
              <a href="https://www.linkedin.com/in/pranav-bhojane-789b692b3" target="_blank" rel="noreferrer" className="btn btn-primary">
                ↓ Download Resume
              </a>
              <a href="#contact" className="btn btn-outline">
                Let's Talk →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
