import { useAnimeReveal } from '../hooks/useAnimeReveal'
import './Freelance.css'

const services = [
  {
    icon: '⚙️',
    title: 'API Design & Development',
    description:
      'REST and async APIs built with FastAPI or Django REST Framework — schema-first, documented, and built to handle real production traffic.',
  },
  {
    icon: '🏗️',
    title: 'Backend Systems',
    description:
      'Multi-tenant architectures, distributed task pipelines, performance tuning, and database optimisation for systems that need to scale.',
  },
  {
    icon: '🤖',
    title: 'LLM Integration',
    description:
      'LLM-powered features, automated developer workflows, prompt engineering, and AI-assisted tooling integrated into existing products.',
  },
]

export default function Freelance() {
  const [ref] = useAnimeReveal({ stagger: true })

  return (
    <section id="freelance" className="freelance">
      <div className="container">
        <p className="section-label">Available for hire</p>
        <h2 className="section-title">Freelance Services</h2>
        <p className="freelance__intro">
          I take on select freelance engagements alongside my work. If you need a
          reliable senior backend engineer who can own things end-to-end — let's talk.
        </p>
        <div ref={ref} className="freelance__grid reveal-children">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <span className="service-card__icon" aria-hidden="true">{s.icon}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="freelance__cta">
          <a href="#contact" className="btn btn--primary">Get in touch →</a>
        </div>
      </div>
    </section>
  )
}
