import { useReveal } from '../hooks/useReveal'
import './Projects.css'

const projects = [
  {
    title: 'Job Aggregator & Analyzer',
    description:
      'Multi-platform job scraping pipeline with concurrent workers, smart deduplication, and LLM-based CV analysis. Fully containerised for single-command deployment.',
    tech: ['FastAPI', 'React', 'Celery', 'Redis', 'Docker', 'LLM'],
    github: 'https://github.com/Vanshita1204/jobs_aggregator',
    demo: null,
    accent: 'violet',
  },
  {
    title: 'Influencer Sponsorship Management',
    description:
      'REST API backend for end-to-end campaign management — Celery-driven scheduling, Redis-cached real-time metrics, and full campaign lifecycle workflow.',
    tech: ['Flask', 'Celery', 'Redis', 'PostgreSQL'],
    github: 'https://github.com/Vanshita1204/influencer-sponsorship-management',
    demo: null,
    accent: 'teal',
  },
  {
    title: 'Family Expense Tracker',
    description:
      'Shared ledger app for households — split bills intelligently, track recurring costs, and get monthly spending breakdowns per member. Settlement suggestions reduce back-and-forth to zero.',
    tech: ['Django', 'React', 'PostgreSQL', 'REST API', 'Chart.js'],
    github: 'https://github.com/Vanshita1204',
    demo: null,
    accent: 'rose',
  },
]

export default function Projects() {
  const [ref, visible] = useReveal()

  return (
    <section id="projects" className="projects">
      <div className="projects__bg-deco" aria-hidden="true">
        <div className="projects__blob projects__blob--1" />
        <div className="projects__blob projects__blob--2" />
      </div>
      <div className="container">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Projects</h2>
        <div ref={ref} className={`projects__grid reveal-children ${visible ? 'visible' : ''}`}>
          {projects.map((p, i) => (
            <article
              key={i}
              className={`project-card project-card--${p.accent}`}
              onMouseMove={e => {
                const card = e.currentTarget
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const cx = rect.width / 2
                const cy = rect.height / 2
                const rotY = ((x - cx) / cx) * 5
                const rotX = -((y - cy) / cy) * 5
                card.style.transform = `perspective(800px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateY(-6px)`
                card.style.setProperty('--mx', `${x}px`)
                card.style.setProperty('--my', `${y}px`)
              }}
              onMouseLeave={e => {
                const card = e.currentTarget
                card.style.transform = ''
              }}
            >
              <div className="project-card__accent-bar" aria-hidden="true" />
              <div className="project-card__top">
                <div className="project-card__num" aria-hidden="true">0{i + 1}</div>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>
              </div>
              <div className="project-card__bottom">
                <div className="project-card__tags">
                  {p.tech.map(t => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={`View ${p.title} on GitHub`}>
                      GitHub →
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-card__link project-card__link--demo" aria-label={`Live demo of ${p.title}`}>
                      Live →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
