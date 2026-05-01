import { useEffect, useRef, useState } from 'react'
import './Skills.css'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '☕',
    color: 'var(--accent-java)',
    skills: [
      { name: 'Java', level: 90, icon: '☕' },
      { name: 'JavaScript', level: 82, icon: '🟨' },
      { name: 'C / C++', level: 70, icon: '⚙️' },
    ]
  },
  {
    title: 'Backend & Frameworks',
    icon: '🌿',
    color: 'var(--accent-spring)',
    skills: [
      { name: 'Spring Boot', level: 82, icon: '🌿' },
      { name: 'Node.js', level: 78, icon: '🟢' },
      { name: 'Express.js', level: 75, icon: '🚂' },
      { name: 'REST API', level: 85, icon: '🔗' },
    ]
  },
  {
    title: 'Frontend',
    icon: '⚛️',
    color: 'var(--accent-blue)',
    skills: [
      { name: 'React.js', level: 80, icon: '⚛️' },
      { name: 'HTML5 / CSS3', level: 88, icon: '🎨' },
      { name: 'Tailwind CSS', level: 72, icon: '💨' },
    ]
  },
  {
    title: 'Databases & Cloud',
    icon: '🗄️',
    color: 'var(--accent-purple)',
    skills: [
      { name: 'MySQL / SQL', level: 85, icon: '🗄️' },
      { name: 'MongoDB', level: 76, icon: '🍃' },
      { name: 'SQLite', level: 72, icon: '💾' },
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: '🔧',
    color: '#ff6b6b',
    skills: [
      { name: 'Git & GitHub', level: 88, icon: '🐙' },
      { name: 'Maven', level: 75, icon: '📦' },
      { name: 'Postman', level: 80, icon: '📮' },
    ]
  },
]

function SkillBar({ name, level, icon, color, animate }) {
  return (
    <div className="skill-item">
      <div className="skill-meta">
        <span className="skill-name">
          <span className="skill-icon">{icon}</span>
          {name}
        </span>
        <span className="skill-level" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section skills">
      <div className="orb orb-orange" style={{ width: 400, height: 400, bottom: 0, right: -100, opacity: 0.08 }} />
      <div className="container" ref={ref}>
        <p className="section-tag">Technical Expertise</p>
        <h2 className="section-title">My <span>Skills</span></h2>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-category card">
              <div className="cat-header">
                <span className="cat-icon" style={{ background: `${cat.color}15`, color: cat.color }}>{cat.icon}</span>
                <h3 className="cat-title">{cat.title}</h3>
              </div>
              <div className="cat-skills">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} color={cat.color} animate={animate} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech logos marquee */}
        <div className="skills-marquee-wrapper">
          <p className="marquee-label">Technologies I work with</p>
          <div className="skills-marquee">
            <div className="marquee-track">
              {['Java', 'Spring Boot', 'React', 'Node.js', 'MySQL', 'MongoDB', 'Git', 'REST API', 'HTML5', 'CSS3', 'Express', 'Maven',
                'Java', 'Spring Boot', 'React', 'Node.js', 'MySQL', 'MongoDB', 'Git', 'REST API', 'HTML5', 'CSS3', 'Express', 'Maven'].map((tech, i) => (
                <span key={i} className="marquee-item">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
