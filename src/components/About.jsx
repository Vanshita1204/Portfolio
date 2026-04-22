import { useAnimeReveal } from '../hooks/useAnimeReveal'
import { useCountUp } from '../hooks/useCountUp'
import './About.css'

const stats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '20K+', label: 'Users Impacted' },
  { value: '4+', label: 'Products in Production' },
]


function StatCard({ value, label, started }) {
  const display = useCountUp(value, 1400, started)
  return (
    <div className="about__stat">
      <span className="about__stat-value">{display}</span>
      <span className="about__stat-label">{label}</span>
    </div>
  )
}

export default function About() {
  const [ref, visible] = useAnimeReveal({ stagger: true })

  return (
    <section id="about" className="about">
      <div className="container">
        <div ref={ref} className="about__inner reveal-children">
          <div className="about__text">
            <p className="section-label">About</p>
            <h2 className="section-title">A bit about me</h2>
            <p className="about__bio">
              I'm a backend engineer with a strong focus on distributed systems, API design,
              and building software that holds up under real-world load. I tend to care as
              much about how something is built as what is built — clean abstractions,
              observable systems, and code that the next engineer can reason about.
            </p>
            <p className="about__bio">
              I'm drawn to problems that sit at the intersection of scale and correctness —
              where performance isn't optional and the design decisions actually matter.
            </p>
            <p className="about__bio">
              My stack is Python-first — FastAPI, Django, Celery, Redis, PostgreSQL — and I've
              spent a lot of time making those pieces work reliably together under load. Lately
              I've been integrating LLMs into backend workflows: automating docs, scaffolding
              tests, accelerating feature cycles without letting AI become a blind spot.
            </p>
          </div>
          <div className="about__stats">
            {stats.map(s => (
              <StatCard key={s.label} value={s.value} label={s.label} started={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
