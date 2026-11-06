import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { animate, utils } from 'animejs'
import './Navbar.css'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Writing', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const headerRef = useRef(null)

  // Entrance animation — runs before first paint to avoid flash
  useLayoutEffect(() => {
    const header = headerRef.current
    if (!header) return

    const logo = header.querySelector('.navbar__logo')
    const navLinks = header.querySelectorAll('.navbar__link')

    utils.set(logo, { opacity: 0, translateY: -10 })
    utils.set(navLinks, { opacity: 0, translateY: -8 })

    animate(logo, {
      opacity: [0, 1],
      translateY: [-10, 0],
      ease: 'outCubic',
      duration: 550,
      delay: 300,
    })

    animate(navLinks, {
      opacity: [0, 1],
      translateY: [-8, 0],
      ease: 'outCubic',
      duration: 480,
      delay: utils.stagger(60, { start: 380 }),
    })
  }, [])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Scrollspy: highlight the link for the section currently in view
  useEffect(() => {
    const sections = links
      .map(l => document.getElementById(l.toLowerCase()))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    const hero = document.getElementById('hero')
    const heroObs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setActive(''),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    if (hero) heroObs.observe(hero)
    return () => { observer.disconnect(); heroObs.disconnect() }
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header ref={headerRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo" onClick={close}>VJ</a>
        <nav className={`navbar__nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className={`navbar__link ${active === l.toLowerCase() ? 'active' : ''}`}
              aria-current={active === l.toLowerCase() ? 'true' : undefined}
              onClick={close}
            >
              {l}
            </a>
          ))}
        </nav>
        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
