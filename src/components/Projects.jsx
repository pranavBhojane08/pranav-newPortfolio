import './Projects.css'

const projects = [
  {
    title: 'Movie Ticket Booking App',
    subtitle: 'QuikShow',
    desc: 'Full-featured movie ticket booking platform built with the MERN stack. Users can browse movies, select seats, and book tickets with real-time availability.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    type: 'MERN Stack',
    color: 'var(--accent-java)',
    demo: 'https://quikshow.vercel.app/',
    code: 'https://github.com/pranavBhojane08/Quikshow',
    featured: true,
    icon: '🎬',
  },
  {
    title: 'MERN Authentication System',
    subtitle: 'Auth System',
    desc: 'Secure authentication system with JWT tokens, bcrypt password hashing, email verification, and protected routes for full-stack MERN applications.',
    stack: ['MongoDB', 'Express.js', 'React', 'JWT'],
    type: 'Security',
    color: 'var(--accent-spring)',
    demo: 'https://mern-authetication-1.onrender.com',
    code: 'https://github.com/pranavBhojane08/Mern-authetication',
    icon: '🔐',
  },
  {
    title: 'Weather App',
    subtitle: 'Weather Vite',
    desc: 'Real-time weather application using OpenWeather API with React + Vite. Shows temperature, humidity, wind speed, and 5-day forecasts with beautiful UI.',
    stack: ['React', 'Vite', 'API', 'CSS3'],
    type: 'Frontend',
    color: 'var(--accent-blue)',
    demo: 'https://weather-appvite.netlify.app/',
    code: 'https://github.com/pranavBhojane08/Weather-App',
    icon: '🌤️',
  },
  {
    title: 'Event Management Platform',
    subtitle: 'EventHub',
    desc: 'Frontend platform for managing and discovering events. Features event listings, filters, registration forms, and responsive design for all devices.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    type: 'Frontend',
    color: 'var(--accent-purple)',
    demo: 'https://event-managment-platform.netlify.app/',
    code: 'https://github.com/pranavBhojane08/frontend',
    icon: '📅',
  },
  {
    title: 'REST API Backend',
    subtitle: 'Blog CMS API',
    desc: 'RESTful API for a content management system with full CRUD operations, user authentication, and structured JSON endpoints for blog posts.',
    stack: ['Node.js', 'Express', 'MongoDB', 'REST'],
    type: 'Backend',
    color: '#ff6b6b',
    demo: 'https://github.com/pranavBhojane08/REST_API',
    code: 'https://github.com/pranavBhojane08/REST_API',
    icon: '🔌',
  },
  {
    title: 'Simon Game',
    subtitle: 'Memory Challenge',
    desc: 'Classic Simon memory game with increasing difficulty levels, sound effects, color animations, and high-score tracking using pure JavaScript.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    type: 'Game',
    color: '#ffd700',
    demo: 'https://simon-01game.netlify.app/',
    code: 'https://github.com/pranavBhojane08/simon-game',
    icon: '🎮',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="orb orb-blue" style={{ width: 400, height: 400, top: '20%', left: -120, opacity: 0.06 }} />
      <div className="container">
        <p className="section-tag">My Work</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={project.title} className={`project-card card ${project.featured ? 'featured' : ''}`}>
              {project.featured && (
                <div className="featured-badge">⭐ Featured</div>
              )}
              <div className="project-icon-wrap" style={{ background: `${project.color}12`, border: `1px solid ${project.color}25` }}>
                <span className="project-emoji">{project.icon}</span>
              </div>

              <div className="project-type" style={{ color: project.color }}>{project.type}</div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-desc">{project.desc}</p>

              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-tag" style={{ borderColor: `${project.color}40`, color: project.color }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer" className="project-link link-demo" style={{ background: project.color }}>
                  ↗ Live Demo
                </a>
                <a href={project.code} target="_blank" rel="noreferrer" className="project-link link-code">
                  ⌥ Source
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more?</p>
          <a href="https://github.com/pranavBhojane08" target="_blank" rel="noreferrer" className="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
