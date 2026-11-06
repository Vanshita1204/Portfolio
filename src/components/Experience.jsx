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
        name: 'JrnyOn: Travel Booking & Experiences Platform',
        period: 'Jul 2025 – Present',
        link: 'https://jrnyon.com/',
        bullets: [
          'Architected a Slack-style multi-tenant IAM layer inside a live monolith: subdomain routing (wildcard DNS + middleware), centralised SSO (JWT + refresh rotation), and per-tenant RBAC with row-level isolation across 10K+ records; onboarded 3 B2B partners (~20K users) with 0 data leakage, 0 downtime, and <5 ms auth overhead.',
          'Designed a secure OTP email verification system (~5K+ monthly requests): time-bound OTPs, HMAC-hashed storage, retry throttling, IP/email rate limiting, and Celery async dispatch; cut fake signups ~40% and improved onboarding success ~25%.',
          'Built an influencer engagement analytics pipeline: ingested ~100K+ Mixpanel events/day, aggregated into OLAP schemas via scheduled ETL, and leveraged Citus for distributed queries on multi-million row datasets; exposed APIs at <200 ms p95 powering real-time dashboards tracking 10+ KPIs.',
          'Engineered an AI-agent-agnostic development workflow: a shared agent.md spec spanning Claude, Cursor, Copilot, and opencode, with reusable skills for BRD/TRD generation and test-case authoring; automated a BRD → TRD → test cases → code → test run → security check → deployment pipeline enforcing 100% diff coverage, cutting feature development time by 50%+.',
          'Built a revenue analytics module adopted by 100% of JrnyOn Maestros: surfaced realised and projected revenue across all streams including referrals via a projection algorithm on historical trip performance and booking volume, extended to affiliate Maestros; the earnings visibility drove more trip listings and more referrals.',
          'Pioneered an online Host application flow replacing the offline process, lifting applicants from 2–3 to 13–14 per month (~5x); built a per-field Ops approval state machine decoupled from Host promotion, Celery email notifications, and automatic profile data sync on rejection, on Django/HTMX/Alpine.js.',
          'Engineered a secure image-upload pipeline: ClamAV malware scanning, sanitisation with location and timestamp metadata extraction, encrypted storage, and direct upload to Cloudflare R2.',
        ],
      },
      {
        name: 'Outset (now Button): Retail & Resale Product Enrichment',
        period: 'Jan 2025 – Jul 2025',
        link: 'https://home.trybutton.co/',
        bullets: [
          'Engineered an AI agent that inspected retailer order-email HTML and generated per-retailer extraction functions (item name, type, price, color, images), replacing hand-written parsers; cut retailer onboarding time by 50%, leaving only review and testing.',
          'Designed an Attribute Normalization Engine with weighted synonym mapping; improved classification accuracy from 61% → 91%, eliminating the manual review bottleneck.',
          'Designed an LLM-powered discovery layer recovering retailer emails missed by exact sender/subject matching: post-sync Gmail keyword search, subject normalisation, deduplicated sender–subject tracking, LLM classification with confidence scores, and a Django Admin review flow promoting verified matches into production mappings; increased product detection by 15%.',
          'Built fault-tolerant ingestion pipelines processing 10K+ products weekly via parallel Celery workers and retry queues, boosting data coverage by 40%.',
          'Built multi-strategy product-description extraction (requests, curl_cffi, Playwright) to handle varying anti-bot protections, with an AI agent generating per-retailer extraction functions from page HTML, increasing product enrichment coverage.',
          'Automated the full transactional email lifecycle (onboarding, notifications, confirmations) via Celery + Brevo API, cutting email response time by 80%.',
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
          'Built metaprogramming utilities standardising logging, error handling, and event-schema validation across all microservices, boosting overall system efficiency by 40%.',
          'Drove P95 query latency from ~1s to ~400 ms for 20K+ concurrent users on the Olympiad platform via composite indexing, SQL refactoring, and Redis caching, with zero incidents under full olympiad load.',
          'Integrated 15+ third-party APIs across payments, notifications, and data services, expanding platform capabilities by 35% and unlocking new product verticals.',
          'Designed and shipped a profile completeness engine on MongoDB: dynamic scoring, targeted nudges, and personalised recommendations lifted user engagement by 50%.',
          'Engineered a Zoho CRM 2-way sync: automated lead routing, status propagation, and follow-up workflows; drove lead conversion up 60% and cut manual sales ops effort by 20%.',
        ],
      },
      {
        name: 'Suraasa Jobs: Teacher Hiring Platform',
        period: null,
        link: 'https://jobs.suraasa.com/',
        bullets: [
          'Co-owned Suraasa Jobs end-to-end: RBAC, job listing and application APIs, and recruiter-driven school–teacher matching logic; shipped to 20K+ users across India.',
        ],
      },
      {
        name: 'Software Development Intern',
        period: 'Apr 2023 – Jun 2023',
        link: null,
        bullets: [
          ['Designed and shipped a ', { text: 'book library management system', link: 'https://github.com/Vanshita1204/book_library' }, ' from scratch: relational schema, REST APIs, and session-based authentication delivered as a complete, functional product within the internship window.'],
          'Refactored hot-path modules for performance and maintainability: optimised DB queries and restructured tangled logic, achieving 15% faster execution and 20% fewer recurring bugs.',
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
