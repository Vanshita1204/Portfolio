import { useEffect, useRef, useState } from 'react'
import { animate, utils } from 'animejs'

/**
 * Triggers an anime.js v4 reveal animation when the element enters the viewport.
 * @param {object} opts
 * @param {boolean} opts.stagger - Animate children with a stagger delay
 * @param {number}  opts.threshold - IntersectionObserver threshold
 * @returns {[React.RefObject, boolean]} [ref, visible]
 */
export function useAnimeReveal({ stagger = false, threshold = 0.12 } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = stagger ? Array.from(el.children) : [el]

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          // Set start state synchronously so there's no flash
          utils.set(targets, { opacity: 0, translateY: 24 })
          animate(targets, {
            opacity: [0, 1],
            translateY: [24, 0],
            ease: 'outCubic',
            duration: 650,
            delay: stagger ? utils.stagger(90, { start: 40 }) : 0,
          })
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [stagger, threshold])

  return [ref, visible]
}
