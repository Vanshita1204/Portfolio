import { useEffect, useRef, useState } from 'react'
import { animate, utils } from 'animejs'
import './Projects.css'

const projects = [
  {
    title: 'ACME Salary Management',
    description:
      'Full-stack HR compensation system for 10K employees, designed for 1M: append-only pay history enforced by DB triggers, multi-currency analytics on daily-refreshed rates, keyset pagination, pg_trgm search, materialized-view insights, and a concurrency-capped analytics cache. 579 backend tests at 93% coverage; Dockerized and deployed on Render.',
    tech: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
    github: 'https://github.com/Vanshita1204/acme-salary-management',
    demo: null,
    accent: 'violet',
  },
  {
    title: 'Job Aggregator & Analyzer',
    description:
      'Full-stack job aggregator scraping LinkedIn / Indeed / Hirist on a Celery-beat schedule (Playwright + curl_cffi), with RAG-powered semantic job search: local MiniLM embeddings, cosine-similarity retrieval, LLM-extracted negation and location filters, and grounded answers across pluggable LLM providers (Groq / OpenAI / Anthropic / Gemini). JWT auth, GCS CV storage, Redis rate limiting, 63 pytest tests, 5-service Docker Compose stack.',
    tech: ['RAG', 'FastAPI', 'Celery', 'Redis', 'Playwright', 'React', 'Docker Compose'],
    github: 'https://github.com/Vanshita1204/jobs_aggregator',
    demo: null,
    accent: 'teal',
  },
  {
    title: 'Influencer Sponsorship Management',
    description:
      'REST API backend for end-to-end campaign management: Celery-driven scheduling, Redis-cached real-time metrics, and full campaign lifecycle workflow.',
    tech: ['Flask', 'Celery', 'Redis', 'PostgreSQL'],
    github: 'https://github.com/Vanshita1204/influencer-sponsorship-management',
    demo: null,
    accent: 'rose',
  },
]

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <article className={`project-card project-card--${p.accent}`}>
      <div className="project-card__accent-bar" aria-hidden="true" />
      <div className="project-card__top">
        <h3 className="project-card__title">{p.title}</h3>
        <p className={`project-card__desc ${open ? 'open' : ''}`}>{p.description}</p>
        <button
          type="button"
          className="project-card__more"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          {open ? 'Show less' : 'Read more'}
        </button>
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
  )
}

export default function Projects() {
  const gridRef = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const cards = Array.from(grid.children)
    utils.set(cards, { opacity: 0, translateY: 32 })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        animate(cards, {
          opacity:    [0, 1],
          translateY: [32, 0],
          ease: 'cubicBezier(.16,1,.3,1)',
          duration: 700,
          delay: utils.stagger(100, { start: 40 }),
        })

        observer.unobserve(grid)
      },
      { threshold: 0.1 }
    )

    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects">
      <div className="projects__bg-deco" aria-hidden="true">
        <div className="projects__blob projects__blob--1" />
        <div className="projects__blob projects__blob--2" />
      </div>
      <div className="container">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Projects</h2>
        <div ref={gridRef} className="projects__grid">
          {projects.map(p => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
