import { useAnimeReveal } from '../hooks/useAnimeReveal'
import './Writing.css'

const SUBSTACK = 'https://substack.com/@vanshitajain12'

const TOTAL_PARTS = 6

const series = {
  title: 'ACME Salary Management: Build Log',
  summary: 'A multi-part series on taking a 10K-employee take-home assessment to a million synthetic employees: schema design, load testing, profiling, and what actually moved the numbers.',
  progress: 'Parts 1–6 published · Series complete',
  repo: 'https://github.com/Vanshita1204/acme-salary-management',
  parts: [
    {
      title: 'Designing a Salary Database for a Million Employees: The Trade-offs Behind the Schema',
      date: 'Oct 2026',
      summary: 'A practical look at PostgreSQL schema design, query performance, and the bugs that only appeared at scale.',
      url: 'https://vanshitajain12.substack.com/p/i-designed-a-salary-database-for',
    },
    {
      title: 'When Database Optimisations Aren\'t Worth It',
      date: 'Oct 2026',
      summary: 'Why some apparently impressive improvements weren\'t worth adopting.',
      url: 'https://vanshitajain12.substack.com/p/when-database-optimisations-arent',
    },
    {
      title: 'Finding the Real Bottleneck: PostgreSQL Under Load',
      date: 'Oct 2026',
      summary: 'Load tests, a misleading count, a prepared-statement regression, and what database profiling revealed.',
      url: 'https://vanshitajain12.substack.com/p/finding-the-real-bottleneck-postgresql',
    },
    {
      title: 'When the Database Isn\'t the Only Thing Slowing You Down',
      date: 'Nov 2026',
      summary: 'Four experiments in export performance, compression, JSON encoding, and database round trips, before changing a single report query.',
      url: 'https://vanshitajain12.substack.com/p/reports-are-the-databases-problem',
    },
    {
      title: 'Inside PostgreSQL: What Actually Makes Queries Fast',
      date: 'Nov 2026',
      summary: 'A look inside PostgreSQL at what actually makes queries fast.',
      url: 'https://vanshitajain12.substack.com/p/inside-postgresql-what-actually-makes',
    },
    {
      title: 'When Optimisations Meet the Real World',
      date: 'Nov 2026',
      summary: 'Observations from taking a system from local experiments to a constrained server.',
      url: 'https://vanshitajain12.substack.com/p/when-optimisations-meet-the-real',
    },
  ],
}

const articles = [
  {
    title: 'The CA Blunder That Put Python Package Installs at Risk',
    date: 'Oct 2026',
    summary: 'The mistake that led eMudhra to exit the SSL certificate business, and how it could affect your Python projects.',
    url: 'https://vanshitajain12.substack.com/p/the-ca-blunder-that-put-python-package',
  },
  {
    title: 'I Built Semantic Search. Then I Found Out What Embeddings Are Bad At.',
    date: 'Sep 2026',
    summary: 'What three real search failures taught me about the limits of embeddings, hard constraints, and semantic ranking.',
    url: 'https://vanshitajain12.substack.com/p/i-built-semantic-search-then-i-found',
  },
]

export default function Writing() {
  const [ref] = useAnimeReveal({ stagger: true })

  return (
    <section id="writing" className="writing">
      <div className="container">
        <p className="section-label">What I've written</p>
        <h2 className="section-title">Writing</h2>
        <div ref={ref} className="writing__list">
          <div className="writing__series">
            <div className="writing__series-head">
              <span className="writing__badge">Series</span>
              <span className="writing__progress">{series.progress}</span>
            </div>
            <h3 className="writing__series-title">{series.title}</h3>
            <p className="writing__summary">{series.summary}</p>
            <ol className="writing__parts">
              {series.parts.map((a, i) => (
                <li key={a.url} className="writing__step">
                  <span className="writing__node" aria-hidden="true">{i + 1}</span>
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="writing__part">
                    <span className="writing__part-top">
                      <span className="writing__part-num">Part {i + 1}</span>
                      <span className="writing__date">{a.date}</span>
                    </span>
                    <span className="writing__title">{a.title}</span>
                    <span className="writing__summary">{a.summary}</span>
                    <span className="writing__read">Read on Substack →</span>
                  </a>
                </li>
              ))}
              {Array.from({ length: TOTAL_PARTS - series.parts.length }, (_, k) => series.parts.length + k + 1).map(n => (
                <li key={n} className="writing__step writing__step--soon">
                  <span className="writing__node" aria-hidden="true">{n}</span>
                  <div className="writing__part writing__part--soon">
                    <span className="writing__part-num">Part {n}</span>
                    <span className="writing__summary">Coming soon</span>
                  </div>
                </li>
              ))}
            </ol>
            <a href={series.repo} target="_blank" rel="noopener noreferrer" className="writing__repo">
              View the code on GitHub →
            </a>
          </div>
          <p className="writing__subhead">Standalone posts</p>
          <div className="writing__grid">
          {articles.map(a => (
            <a key={a.url} href={a.url} target="_blank" rel="noopener noreferrer" className="writing__item">
              <div className="writing__head">
                <h3 className="writing__title">{a.title}</h3>
                <span className="writing__date">{a.date}</span>
              </div>
              <p className="writing__summary">{a.summary}</p>
              <span className="writing__read">Read on Substack →</span>
            </a>
          ))}
          </div>
        </div>
        <a href={SUBSTACK} target="_blank" rel="noopener noreferrer" className="writing__all">
          Read all on Substack →
        </a>
      </div>
    </section>
  )
}
