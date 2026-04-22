import { useEffect, useRef } from 'react'
import { createTimeline, utils } from 'animejs'
import './Experience.css'

const experience = [
  {
    company: 'Tarams Software Technologies',
    url: 'https://www.tarams.com/',
    period: 'Jan 2025 – Present',
    role: 'Software Engineer · Remote',
    products: [
      {
        name: 'JrnyOn — Travel Booking & Experiences Platform',
        period: 'Jul 2025 – Present',
        link: 'https://jrnyon.com/',
        bullets: [
          'Engineered a multi-tenant IAM system inside a live monolith — wildcard DNS routing, centralised SSO (JWT + refresh rotation), and per-tenant RBAC with row-level isolation; zero data leakage across 3 B2B partner onboardings serving ~20K users, with <5 ms auth overhead per request.',
          'Designed a secure OTP verification pipeline (5K+ monthly flows) — HMAC hashing, IP/email rate limiting, and Celery async dispatch; cut fake signups by 40% and lifted onboarding success by 25%.',
          'Delivered an end-to-end influencer analytics system — ingested 100K+ Mixpanel events/day into Citus-backed OLAP schemas via ETL; served <200 ms p95 APIs powering real-time dashboards across 10+ KPIs on multi-million row datasets.',
          'Integrated Claude AI across 20+ modules — automated OpenAPI specs, architecture docs, and test scaffolding; reduced feature cycle time by 30% and pushed documentation coverage from near-zero to 100%.',
          'Spearheaded a testing overhaul across booking and transaction flows — 50+ pytest cases (unit + integration + async), CI gating, layered DB validation; coverage 5% → 90%+, production defects ~0% during 3-partner rollout, regression detection time ↓70%.',
        ],
      },
      {
        name: 'Outset (now Button) — Retail & Resale Product Enrichment',
        period: 'Jan 2025 – Jul 2025',
        link: 'https://home.trybutton.co/',
        bullets: [
          'Built fault-tolerant ingestion pipelines processing 10K+ products weekly via parallel Celery workers and retry queues — boosted data coverage by 40%.',
          'Designed a synonym-based attribute normalization engine that automated product classification end-to-end — lifted accuracy by 30% and eliminated manual review bottlenecks.',
          'Automated the full transactional email lifecycle (onboarding, notifications, confirmations) via Celery + Brevo API — cut email response time by 80%.',
        ],
      },
    ],
  },
  {
    company: 'Suraasa',
    url: 'https://suraasa.com/',
    period: 'Apr 2023 – Jan 2025',
    role: 'Software Development Engineer · Remote',
    products: [
      {
        name: null,
        period: 'Jul 2023 – Jan 2025',
        link: null,
        bullets: [
          'Built metaprogramming utilities standardising logging, error handling, and event-schema validation across all microservices — boosted overall system efficiency by 40%.',
          'Optimized the Olympiad platform serving 20K+ concurrent users — composite indexing, SQL refactoring, and Redis caching drove a 30% response time reduction with zero incidents under peak load.',
          'Integrated 15+ third-party APIs across payments, notifications, and data services — expanded platform capabilities by 35% and unlocked new product verticals.',
          'Designed and shipped a profile completeness engine on MongoDB — dynamic scoring, targeted nudges, and personalised recommendations lifted user engagement by 50%.',
          'Engineered a Zoho CRM 2-way sync — automated lead routing, status propagation, and follow-up workflows; drove lead conversion up 60% and cut manual sales ops effort by 20%.',
        ],
      },
      {
        name: 'Suraasa Jobs — Teacher Hiring Platform',
        period: null,
        link: 'https://jobs.suraasa.com/',
        bullets: [
          'Co-owned Suraasa Jobs end-to-end — RBAC, job listing and application APIs, and recruiter-driven school–teacher matching logic; shipped to 20K+ users across India.',
        ],
      },
      {
        name: 'Software Development Intern',
        period: 'Apr 2023 – Jun 2023',
        link: null,
        bullets: [
          ['Designed and shipped a ', { text: 'book library management system', link: 'https://github.com/Vanshita1204/book_library' }, ' from scratch — relational schema, REST APIs, and session-based authentication delivered as a complete, functional product within the internship window.'],
          'Refactored hot-path modules for performance and maintainability — optimised DB queries and restructured tangled logic, achieving 15% faster execution and 20% fewer recurring bugs.',
          'Assisted production deployments and post-release debugging, building hands-on familiarity with live system operations.',
        ],
      },
    ],
  },
]

export default function Experience() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const container = timelineRef.current
    if (!container) return

    const items = Array.from(container.querySelectorAll('.exp__item'))

    items.forEach(item => {
      const dot  = item.querySelector('.exp__dot')
      const line = item.querySelector('.exp__line')
      const card = item.querySelector('.exp__card')
      if (dot)  utils.set(dot,  { opacity: 0, scale: 0 })
      if (line) utils.set(line, { scaleY: 0 })
      if (card) utils.set(card, { opacity: 0, translateX: 24 })
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const tl = createTimeline({ defaults: { ease: 'outCubic' } })
        items.forEach((item, i) => {
          const t    = i * 220
          const dot  = item.querySelector('.exp__dot')
          const line = item.querySelector('.exp__line')
          const card = item.querySelector('.exp__card')
          if (dot)  tl.add(dot,  { opacity: [0, 1], scale: [0, 1], ease: 'outBack(1.4)', duration: 380 }, t)
          if (card) tl.add(card, { opacity: [0, 1], translateX: [24, 0], duration: 500 }, t + 120)
          if (line) tl.add(line, { scaleY: [0, 1], duration: 500 }, t + 200)
        })

        observer.unobserve(container)
      },
      { threshold: 0.1 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="experience">
      <div className="container">
        <p className="section-label">Where I've worked</p>
        <h2 className="section-title">Experience</h2>
        <div ref={timelineRef} className="exp__timeline">
          {experience.map((job, i) => (
            <div key={i} className="exp__item">
              <div className="exp__marker" aria-hidden="true">
                <div className="exp__dot" />
                {i < experience.length - 1 && <div className="exp__line" />}
              </div>
              <div className="exp__card">
                <div className="exp__header">
                  <div>
                    <h3 className="exp__company">
                      <a href={job.url} target="_blank" rel="noopener noreferrer">{job.company}</a>
                    </h3>
                    <p className="exp__role">{job.role}</p>
                  </div>
                  <span className="exp__period">{job.period}</span>
                </div>
                {job.products.map((product, j) => (
                  <div key={j} className="exp__product">
                    {(product.name || product.period) && (
                      <div className="exp__product-header">
                        {product.name && (
                          <p className="exp__product-name">
                            {product.link ? (
                              <a href={product.link} target="_blank" rel="noopener noreferrer" className="exp__product-link">
                                {product.name}
                              </a>
                            ) : (
                              product.name
                            )}
                            {product.period && (
                              <span className="exp__product-period"> · {product.period}</span>
                            )}
                          </p>
                        )}
                        {!product.name && product.period && (
                          <p className="exp__product-name">
                            <span className="exp__product-period">{product.period}</span>
                          </p>
                        )}
                        {product.link && (
                          <a href={product.link} target="_blank" rel="noopener noreferrer" className="exp__product-visit" aria-label={`Visit ${product.name}`}>
                            Visit →
                          </a>
                        )}
                      </div>
                    )}
                    <ul className="exp__bullets">
                      {product.bullets.map((b, k) => (
                        <li key={k}>
                          {Array.isArray(b)
                            ? b.map((part, p) =>
                                typeof part === 'string'
                                  ? part
                                  : <a key={p} href={part.link} target="_blank" rel="noopener noreferrer" className="exp__bullet-link">{part.text}</a>
                              )
                            : b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
