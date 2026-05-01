import './Certificates.css'

const certs = [
  { title: 'HTML5 Development', issuer: 'Online Certification', icon: '🌐', color: '#e34c26' },
  { title: 'CSS3 & Web Design', issuer: 'Online Certification', icon: '🎨', color: '#2965f1' },
  { title: 'C Programming', issuer: 'Online Certification', icon: '⚙️', color: '#a8b9cc' },
  { title: 'Artificial Intelligence', issuer: 'Online Certification', icon: '🤖', color: '#f89820' },
  { title: 'Full Stack Web Dev', issuer: 'Online Bootcamp', icon: '🚀', color: '#6db33f' },
  { title: 'AI & Machine Learning', issuer: 'Online Certification', icon: '🧠', color: '#a855f7' },
  { title: 'Data Analytics', issuer: 'Online Certification', icon: '📊', color: '#4a9eff' },
  { title: 'Python Programming Internship', issuer: 'Internship Program', icon: '🐍', color: '#ffd43b' },
  { title: 'TCS iON Certification', issuer: 'TCS iON', icon: '🏆', color: '#ff6b6b' },
]

export default function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="orb orb-purple" style={{ width: 350, height: 350, top: '10%', right: -80, opacity: 0.07 }} />
      <div className="container">
        <p className="section-tag">Achievements</p>
        <h2 className="section-title">My <span>Certificates</span></h2>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div key={cert.title} className="cert-card card" style={{ '--cert-color': cert.color }}>
              <div className="cert-icon-wrap">
                <span className="cert-emoji">{cert.icon}</span>
                <div className="cert-glow" style={{ background: cert.color }} />
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
              <div className="cert-badge" style={{ color: cert.color, borderColor: `${cert.color}30`, background: `${cert.color}10` }}>
                Certified ✓
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
