import { useLayoutEffect, useRef } from 'react'
import { animate, utils } from 'animejs'
import cvPdf from '../assets/Vanshita_Jain_CV.pdf'
import './Hero.css'

const tags = ['Python Backend', 'Distributed Systems', 'LLM Integration']

export default function Hero() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useLayoutEffect(() => {
    const leftChildren = Array.from(leftRef.current.children)
    const right = rightRef.current

    utils.set(leftChildren, { opacity: 0, translateY: 32 })
    utils.set(right, { opacity: 0 })

    animate(leftChildren, {
      opacity: [0, 1],
      translateY: [32, 0],
      ease: 'cubicBezier(.16,1,.3,1)',
      duration: 750,
      delay: utils.stagger(120, { start: 80 }),
    })

    animate(right, {
      opacity: [0, 1],
      ease: 'outCubic',
      duration: 900,
      delay: 500,
    })
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__blob hero__blob--3" aria-hidden="true" />
      <div className="container hero__content">
        <div className="hero__left" ref={leftRef}>
          <p className="hero__eyebrow">Hi, I'm</p>
          <h1 className="hero__name">Vanshita<br />Jain</h1>
          <p className="hero__title">Software Engineer</p>
          <div className="hero__tags">
            {tags.map((t, i) => (
              <span key={t} className="hero__tag" style={{ '--i': i }}>
                {t}
              </span>
            ))}
          </div>
          <p className="hero__sub">
            Building distributed systems and LLM-powered products that scale.
            3+ years shipping backend systems across edtech, travel, and retail,
            from multi-tenant IAM and high-throughput data pipelines to LLM-integrated
            workflows that hold up in production.
          </p>
          <div className="hero__ctas">
            <a href="#projects" className="btn btn--primary">View My Work</a>
            <a href={cvPdf} download="Vanshita_Jain_CV.pdf" className="btn btn--outline">
              Download CV
            </a>
          </div>
        </div>
        <div className="hero__right" ref={rightRef}>
          <div className="hero__featured">
            <div className="hero__featured-ring hero__featured-ring--1" aria-hidden="true" />
            <div className="hero__featured-ring hero__featured-ring--2" aria-hidden="true" />
            <a
              href="https://github.com/Vanshita1204/jobs_aggregator"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__featured-card"
            >
              <span className="hero__featured-label">Featured Project</span>
              <h2 className="hero__featured-title">AI Job Discovery Assistant</h2>
              <p className="hero__featured-desc">
                Aggregates listings from popular job platforms into one searchable
                catalog, then an LLM assistant tailors your CV to each role, line by line.
              </p>
              <div className="hero__featured-tags">
                {['Data Discovery', 'AI Assistant', 'FastAPI', 'Celery'].map(t => (
                  <span key={t} className="hero__featured-tag">{t}</span>
                ))}
              </div>
              <span className="hero__featured-link">View on GitHub →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
