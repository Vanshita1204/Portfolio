import { useEffect, useRef } from 'react'
import { createTimeline, utils } from 'animejs'
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
  const gridRef = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const cards = Array.from(grid.children)
    const pills = grid.querySelectorAll('.skill-pill')

    utils.set(cards, { opacity: 0, translateY: 22, scale: 0.97 })
    utils.set(pills, { opacity: 0, scale: 0.8 })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        createTimeline({ defaults: { ease: 'outCubic' } })
          .add(cards, {
            opacity: [0, 1],
            translateY: [22, 0],
            scale: [0.97, 1],
            duration: 580,
            delay: utils.stagger(85, { start: 40 }),
          })
          .add(pills, {
            opacity: [0, 1],
            scale: [0.8, 1],
            ease: 'outBack(1.3)',
            duration: 280,
            delay: utils.stagger(22, { start: 0 }),
          }, '-=300')

        observer.unobserve(grid)
      },
      { threshold: 0.1 }
    )

    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills">
      <div className="skills__bg" aria-hidden="true" />
      <div className="container">
        <p className="section-label">Technical expertise</p>
        <h2 className="section-title">Skills</h2>
        <div ref={gridRef} className="skills__grid">
          {skills.map(group => (
            <div key={group.category} className="skill-card">
              <div className="skill-card__header">
                <span className="skill-card__icon" aria-hidden="true">{group.icon}</span>
                <h3 className="skill-card__label">{group.category}</h3>
              </div>
              <div className="skill-card__pills">
                {group.items.map((item) => (
                  <span key={item} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
