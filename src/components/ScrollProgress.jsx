import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setPct((scrollTop / (scrollHeight - clientHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${pct}%`,
        background: 'linear-gradient(90deg, var(--accent-deep), var(--accent), var(--accent-rose))',
        zIndex: 999,
        pointerEvents: 'none',
        transition: 'width 0.08s linear',
      }}
    />
  )
}
