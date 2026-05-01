import './Education.css'

const education = [
  {
    degree: 'B.Tech',
    field: 'Computer Science & Engineering',
    institution: 'Govt. College of Engineering, Yavatmal',
    duration: '2021 – 2025',
    status: 'Graduated',
    icon: '🎓',
    color: 'var(--accent-java)',
    highlights: ['Full Stack Development', 'Data Structures & Algorithms', 'Database Management Systems', 'Computer Networks'],
  },
  {
    degree: '12th Science',
    field: 'Mathematics & Science',
    institution: 'Y.C. High School, Mangrulpir',
    duration: '2019 – 2021',
    status: '80%',
    icon: '📚',
    color: 'var(--accent-spring)',
    highlights: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
  },
]

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="orb orb-green" style={{ width: 300, height: 300, bottom: 100, left: -60, opacity: 0.08 }} />
      <div className="container">
        <p className="section-tag">My Journey</p>
        <h2 className="section-title">Education & <span>Background</span></h2>

        <div className="education-timeline">
          {education.map((edu, i) => (
            <div key={edu.degree} className="edu-item">
              <div className="edu-line">
                <div className="edu-dot" style={{ background: edu.color, boxShadow: `0 0 20px ${edu.color}` }} />
                {i < education.length - 1 && <div className="edu-connector" />}
              </div>
              <div className="edu-card card">
                <div className="edu-header">
                  <div className="edu-icon-wrap" style={{ background: `color-mix(in srgb, ${edu.color} 10%, transparent)`, border: `1px solid color-mix(in srgb, ${edu.color} 25%, transparent)` }}>
                    <span>{edu.icon}</span>
                  </div>
                  <div className="edu-meta">
                    <div className="edu-top">
                      <span className="edu-duration" style={{ color: edu.color }}>{edu.duration}</span>
                      <span className="edu-status" style={{ color: edu.color, borderColor: `color-mix(in srgb, ${edu.color} 30%, transparent)`, background: `color-mix(in srgb, ${edu.color} 10%, transparent)` }}>
                        {edu.status}
                      </span>
                    </div>
                    <h3 className="edu-degree">{edu.degree} <span style={{ color: edu.color }}>— {edu.field}</span></h3>
                    <p className="edu-institution">📍 {edu.institution}</p>
                  </div>
                </div>
                <div className="edu-highlights">
                  {edu.highlights.map((h) => (
                    <span key={h} className="highlight-tag">{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
