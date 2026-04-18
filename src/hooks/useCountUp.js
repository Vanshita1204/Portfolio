import { useEffect, useState } from 'react'

export function useCountUp(value, duration = 1400, started = false) {
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/)
  const target = match ? parseFloat(match[1]) : 0
  const suffix = match ? match[2] : ''
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started || target === 0) return
    const startTime = performance.now()
    const tick = now => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [started, target, duration])

  return `${count}${suffix}`
}
