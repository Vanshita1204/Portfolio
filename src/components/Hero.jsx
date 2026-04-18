import { useEffect, useState } from 'react'
import cvPdf from '../assets/Vanshita_Jain_CV.pdf'
import './Hero.css'

const tags = ['Python Backend', 'Distributed Systems', 'LLM Integration']

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className={`hero ${visible ? 'visible' : ''}`}>
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__blob hero__blob--3" aria-hidden="true" />
      <div className="container hero__content">
        <div className="hero__left">
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
            Based in Lucknow, India · Open to remote roles worldwide.
          </p>
          <div className="hero__ctas">
            <a href="#projects" className="btn btn--primary">View My Work</a>
            <a href={cvPdf} download="Vanshita_Jain_CV.pdf" className="btn btn--outline">
              Download CV
            </a>
          </div>
        </div>
        <div className="hero__right" aria-hidden="true">
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
