import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">Vanshita Jain</p>
        <div className="footer__links">
          <a
            href="mailto:vanshitajain1204@gmail.com"
            className="footer__link"
            aria-label="Send email to Vanshita Jain"
          >
            Email
          </a>
          <a
            href="https://github.com/Vanshita1204"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="Vanshita Jain on GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vanshita-jain-cs"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="Vanshita Jain on LinkedIn"
          >
            LinkedIn
          </a>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} Vanshita Jain</p>
      </div>
    </footer>
  )
}
