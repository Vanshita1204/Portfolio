import { useReveal } from '../hooks/useReveal'
import './Skills.css'

const skills = [
  {
    category: 'Languages',
    icon: '{ }',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frameworks',
    icon: '⚙',
    items: ['Django', 'Django REST Framework', 'FastAPI', 'Flask', 'React'],
  },
  {
    category: 'Databases',
    icon: '◈',
    items: ['PostgreSQL', 'Citus', 'MongoDB', 'Redis', 'MySQL'],
  },
  {
    category: 'Infrastructure',
    icon: '⬡',
    items: ['Docker', 'Celery', 'GCP', 'Google Pub/Sub', 'Kafka', 'Jenkins', 'GitHub Actions', 'Sentry', 'Grafana', 'Brevo API', 'Zoho CRM'],
  },
  {
    category: 'Focus Areas',
    icon: '◎',
    items: [
      'Distributed Systems',
      'Multi-tenant Architecture',
      'Performance Engineering',
      'LLM Integration',
      'API Design',
      'Event-Driven Architecture',
      'SSO & RBAC',
      'OLAP & Analytics Pipelines',
    ],
  },
]

export default function Skills() {
  const [ref, visible] = useReveal()

  return (
    <section id="skills" className="skills">
      <div className="skills__bg" aria-hidden="true" />
      <div className="container">
        <p className="section-label">Technical expertise</p>
        <h2 className="section-title">Skills</h2>
        <div ref={ref} className={`skills__grid reveal-children ${visible ? 'visible' : ''}`}>
          {skills.map(group => (
            <div key={group.category} className="skill-card">
              <div className="skill-card__header">
                <span className="skill-card__icon" aria-hidden="true">{group.icon}</span>
                <h3 className="skill-card__label">{group.category}</h3>
              </div>
              <div className="skill-card__pills">
                {group.items.map((item, i) => (
                  <span key={item} className="skill-pill" style={{ '--delay': `${i * 0.04}s` }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
