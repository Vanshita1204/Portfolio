import { useLayoutEffect, useRef, useState } from 'react'
import { animate, utils } from 'animejs'
import cvPdf from '../assets/Vanshita_Jain_CV_Portfolio.pdf'
import './Hero.css'

const tags = ['Python Backend', 'Distributed Systems', 'LLM Integration']

// Each span is a section of the page, drawn like a request trace.
const spans = [
  { name: 'about.load', href: '#about', start: 3, width: 16, note: 'Python-first backend engineer who cares about correctness at scale' },
  { name: 'experience.fetch', href: '#experience', start: 14, width: 40, note: '3+ years across edtech, travel and retail' },
  { name: 'projects.query', href: '#projects', start: 30, width: 32, note: 'RAG search, HR analytics, campaign management' },
  { name: 'skills.aggregate', href: '#skills', start: 52, width: 22, note: 'FastAPI, Django, Celery, Postgres, Kafka' },
  { name: 'writing.list', href: '#writing', start: 68, width: 14, note: 'Notes on systems I have built' },
  { name: 'contact.send', href: '#contact', start: 80, width: 17, note: 'Open to backend and AI-platform roles' },
]

const defaultNote = 'Hover a span to preview it. Select one to jump there.'

export default function Hero() {
  const leftRef = useRef(null)
  const traceRef = useRef(null)
  const [note, setNote] = useState(defaultNote)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const leftChildren = Array.from(leftRef.current.children)
    const trace = traceRef.current
    const bars = trace.querySelectorAll('.trace__bar')

    utils.set(leftChildren, { opacity: 0, translateY: 28 })
    utils.set(trace, { opacity: 0 })
    utils.set(bars, { scaleX: 0 })

    animate(leftChildren, {
      opacity: [0, 1],
      translateY: [28, 0],
      ease: 'cubicBezier(.16,1,.3,1)',
      duration: 750,
      delay: utils.stagger(100, { start: 60 }),
    })

    // The one orchestrated moment: the trace card appears, then spans fill in one by one.
    animate(trace, { opacity: [0, 1], duration: 500, delay: 400, ease: 'outCubic' })
    animate(bars, {
      scaleX: [0, 1],
      duration: 650,
      ease: 'outExpo',
      delay: utils.stagger(110, { start: 800 }),
    })
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="container hero__content">
        <div className="hero__left" ref={leftRef}>
          <p className="hero__eyebrow">Hi, I'm</p>
          <h1 className="hero__name">Vanshita<br />Jain</h1>
          <p className="hero__title">Software Engineer</p>
          <div className="hero__tags">
            {tags.map(t => (
              <span key={t} className="hero__tag">{t}</span>
            ))}
          </div>
          <p className="hero__sub">
            3+ years building backend systems across edtech, travel, and retail: multi-tenant
            IAM, high-throughput data pipelines, and LLM-integrated workflows that hold up in
            production.
          </p>
          <div className="hero__ctas">
            <a href="#projects" className="btn btn--primary">View my work</a>
            <a href={cvPdf} download="Vanshita_Jain_CV_Portfolio.pdf" className="btn btn--outline">
              Download CV
            </a>
          </div>
        </div>

        <div className="trace" ref={traceRef} onMouseLeave={() => setNote(defaultNote)}>
          <div className="trace__head">
            <span className="trace__dots" aria-hidden="true"><i /><i /><i /></span>
            <span className="trace__title">GET /vanshita</span>
            <span className="trace__status">200 OK</span>
          </div>
          <ol className="trace__rows">
            {spans.map(s => (
              <li key={s.name}>
                <a
                  href={s.href}
                  className="trace__row"
                  onMouseEnter={() => setNote(s.note)}
                  onFocus={() => setNote(s.note)}
                  onBlur={() => setNote(defaultNote)}
                >
                  <span className="trace__name">{s.name}</span>
                  <span className="trace__track" aria-hidden="true">
                    <span
                      className="trace__bar"
                      style={{ left: `${s.start}%`, width: `${s.width}%` }}
                    />
                  </span>
                </a>
              </li>
            ))}
          </ol>
          <p className="trace__note" aria-live="polite">{note}</p>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <span aria-hidden="true" />
      </a>
    </section>
  )
}
