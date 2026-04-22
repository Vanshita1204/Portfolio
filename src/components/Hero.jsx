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
            3+ years shipping backend systems across edtech, travel, and retail —
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
        <div className="hero__right" ref={rightRef} aria-hidden="true">
          <div className="hero__deco">
            <div className="hero__deco-ring hero__deco-ring--1" />
            <div className="hero__deco-ring hero__deco-ring--2" />
            <div className="hero__deco-ring hero__deco-ring--3" />
            <div className="hero__deco-chip hero__deco-chip--1">FastAPI</div>
            <div className="hero__deco-chip hero__deco-chip--2">Django</div>
            <div className="hero__deco-chip hero__deco-chip--3">Redis</div>
            <div className="hero__deco-chip hero__deco-chip--4">Docker</div>
            <div className="hero__deco-chip hero__deco-chip--5">PostgreSQL</div>
          </div>
        </div>
      </div>
    </section>
  )
}
