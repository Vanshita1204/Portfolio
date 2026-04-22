import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { createTimeline, utils } from 'animejs'
import './Contact.css'

export default function Contact() {
  const innerRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    const inner = innerRef.current
    if (!inner) return

    const textPanel = inner.querySelector('.contact__text')
    const fields    = Array.from(inner.querySelectorAll('.form-field'))
    const submitBtn = inner.querySelector('.contact__submit')

    utils.set(textPanel, { opacity: 0, translateX: -32 })
    utils.set(fields,    { opacity: 0, translateY: 28 })
    utils.set(submitBtn, { opacity: 0, scale: 0.85 })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        createTimeline({ defaults: { ease: 'outCubic' } })
          .add(textPanel, { opacity: [0, 1], translateX: [-32, 0], duration: 600 })
          .add(fields,    { opacity: [0, 1], translateY: [28, 0], duration: 500,
                            delay: utils.stagger(90, { start: 0 }) }, '-=400')
          .add(submitBtn, { opacity: [0, 1], scale: [0.85, 1], ease: 'outBack(1.3)', duration: 380 }, '-=200')

        observer.unobserve(inner)
      },
      { threshold: 0.12 }
    )

    observer.observe(inner)
    return () => observer.disconnect()
  }, [])
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div ref={innerRef} className="contact__inner">
          <div className="contact__text">
            <p className="section-label">Say hello</p>
            <h2 className="section-title">Let's Talk</h2>
            <p className="contact__sub">
              Whether you're hiring, have a project in mind, or just want to connect —
              I'd love to hear from you.
            </p>
            <a href="mailto:vanshitajain1204@gmail.com" className="contact__email">
              vanshitajain1204@gmail.com
            </a>
          </div>
          <form ref={formRef} className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                autoComplete="email"
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="btn btn--primary contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message →'}
            </button>
            {status === 'sent' && (
              <p className="contact__feedback contact__feedback--success">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__feedback contact__feedback--error">
                Something went wrong. Please email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
