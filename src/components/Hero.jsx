import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const roles = [
  'Full Stack Developer',
  'Java Backend Engineer',
  'MERN Stack Developer',
  'Web Designer',
]

const codeSnippet = `@SpringBootApplication
public class PranavPortfolio {

  @GetMapping("/developer")
  public Developer getMe() {
    return Developer.builder()
      .name("Pranav Bhojane")
      .role("Full Stack Developer")
      .stack(List.of("Java", "Spring",
             "React", "Node.js"))
      .passion("Building scalable apps")
      .build();
  }
}`

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [codeVisible, setCodeVisible] = useState(false)
  const codeRef = useRef(null)

  // Typewriter for roles
  useEffect(() => {
    const role = roles[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  // Code snippet animation
  useEffect(() => {
    const timer = setTimeout(() => setCodeVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="orb orb-orange" style={{ width: 500, height: 500, top: -100, right: -100 }} />
      <div className="orb orb-green" style={{ width: 300, height: 300, bottom: 100, left: -80 }} />

      {/* Scan line effect */}
      <div className="scan-line" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero-heading">
            <span className="hero-greeting">Hello, I'm</span>
            <br />
            <span className="hero-name">Pranav</span>
            <span className="hero-name-accent"> Bhojane</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">// </span>
            <span className="role-text">{displayed}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-desc">
            Engineering robust, scalable applications with <span className="highlight">Java</span> & <span className="highlight">Spring Boot</span> on the backend,
            and <span className="highlight">React</span> & <span className="highlight">Node.js</span> on the frontend.
            B.Tech graduate from GCOE Yavatmal.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">05+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">2025</span>
              <span className="stat-label">B.Tech Graduate</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">9+</span>
              <span className="stat-label">Certificates</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2-2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/pranavBhojane08" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/pranav-bhojane-789b692b3" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:pranavbhojane1@gmail.com" className="social-link" title="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2-2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
            </a>
          </div>
        </div>

        <div className={`hero-code-panel ${codeVisible ? 'visible' : ''}`}>
          <div className="code-window">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="code-filename">PranavPortfolio.java</span>
              <span className="code-lang">Java + Spring Boot</span>
            </div>
            <div className="code-body">
              <pre className="code-content">
                {codeSnippet.split('\n').map((line, i) => (
                  <div key={i} className="code-line" style={{ animationDelay: `${0.5 + i * 0.06}s` }}>
                    <span className="line-num">{String(i + 1).padStart(2, ' ')}</span>
                    <span dangerouslySetInnerHTML={{ __html: syntaxHighlight(line) }} />
                  </div>
                ))}
              </pre>
            </div>
            <div className="code-footer">
              <span className="code-status">
                <span className="status-dot" />
                Spring Boot 3.x · Java 17
              </span>
            </div>
          </div>

          {/* Floating tech badges */}
          <div className="floating-badge badge-java">☕ Java</div>
          <div className="floating-badge badge-spring">🌿 Spring</div>
          <div className="floating-badge badge-react">⚛️ React</div>
          <div className="floating-badge badge-mern">🔷 MERN</div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  )
}

function syntaxHighlight(line) {
  return line
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/(@\w+)/g, '<span class="sh-annotation">$1</span>')
    .replace(/\b(public|class|return|new|List|of)\b/g, '<span class="sh-keyword">$1</span>')
    .replace(/"([^"]*)"/g, '<span class="sh-string">"$1"</span>')
    .replace(/\b(Developer|String|void|Builder)\b/g, '<span class="sh-type">$1</span>')
    .replace(/\/\/.*/g, '<span class="sh-comment">$&</span>')
}
