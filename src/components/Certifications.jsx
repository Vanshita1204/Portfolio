import { useReveal } from '../hooks/useReveal'
import './Certifications.css'

const certs = [
  {
    name: 'SystemsExpert',
    issuer: 'AlgoExpert',
    year: '2023',
    url: 'https://certificate.algoexpert.io/SystemsExpert%20Certificate%20SE-bc78d57cef',
  },
  {
    name: 'Foundation Level in Data Science and Applications',
    issuer: 'IIT Madras',
    year: '2022',
    url: 'https://drive.google.com/file/d/1DCJGeY_p-ewLrG8Ql94xtiA7iTd_Is_L/view?usp=drive_link',
  },
  {
    name: 'MongoDB Python Path',
    issuer: 'MongoDB University',
    year: '2025',
    url: null,
  },
]

const education = [
  {
    degree: 'Diploma in Programming',
    institution: 'IIT Madras',
    year: '2024',
    institutionUrl: 'https://study.iitm.ac.in',
    credentialUrl: 'https://drive.google.com/file/d/183wWhry390okcfrJTG9rl57zP9nTycuy/view?usp=drive_link',
  },
  {
    degree: 'B.Sc. (Hons.) Computer Science',
    institution: 'Hansraj College, University of Delhi',
    year: '2023',
    institutionUrl: 'https://hansrajcollege.ac.in',
    credentialUrl: 'https://drive.google.com/file/d/1fsPmd4enrY_woTo_wVseGZWlcmCjfn_7/view?usp=drive_link',
  },
  {
    degree: 'MCA (in progress)',
    institution: 'IGNOU',
    year: 'Present',
    institutionUrl: null,
    credentialUrl: null,
  },
]

export default function Certifications() {
  const [ref, visible] = useReveal()

  return (
    <section id="certifications" className="certs">
      <div className="container">
        <div ref={ref} className={`certs__inner reveal ${visible ? 'visible' : ''}`}>
          <div>
            <p className="section-label">Credentials</p>
            <h2 className="section-title">Certifications</h2>
            <div className="certs__list">
              {certs.map((c, i) => (
                <div key={i} className="cert-item">
                  <span className="cert-item__icon" aria-hidden="true">✦</span>
                  <div>
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-item__name cert-item__name--link"
                      >
                        {c.name}
                      </a>
                    ) : (
                      <p className="cert-item__name">{c.name}</p>
                    )}
                    <p className="cert-item__meta">{c.issuer} · {c.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label">Academic background</p>
            <h2 className="section-title">Education</h2>
            <div className="certs__list">
              {education.map((e, i) => (
                <div key={i} className="cert-item">
                  <span className="cert-item__icon" aria-hidden="true">◆</span>
                  <div>
                    <div className="cert-item__edu-row">
                      <p className="cert-item__name">{e.degree}</p>
                      {e.credentialUrl && (
                        <a
                          href={e.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-item__credential"
                          aria-label={`View credential for ${e.degree}`}
                        >
                          View →
                        </a>
                      )}
                    </div>
                    <p className="cert-item__meta">
                      {e.institutionUrl ? (
                        <a
                          href={e.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-item__institution-link"
                        >
                          {e.institution}
                        </a>
                      ) : (
                        e.institution
                      )}
                      {' · '}{e.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
