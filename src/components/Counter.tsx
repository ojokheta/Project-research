import { useEffect, useState } from 'react'
import { useInView, useReducedMotion } from '@react-spring/web'

type Props = {
  value: number
  suffix?: string
  label: string
  delay?: number
}

const DURATION = 1200

/**
 * Counts up when scrolled into view.
 *
 * Values are counts drawn from the movement framework itself — pillars,
 * programmes, modules, years — never invented performance metrics.
 */
export function Counter({ value, suffix = '', label, delay = 0 }: Props) {
  const reduced = useReducedMotion()
  const [ref, inView] = useInView({ once: true, amount: 0.5 })
  const [ticked, setTicked] = useState(0)

  useEffect(() => {
    if (!inView || reduced) return

    let frame = 0
    const started = performance.now() + delay

    const tick = (now: number) => {
      const progress = Math.min(1, Math.max(0, (now - started) / DURATION))
      // ease-out quart — settles the way Apple's springs do, without overshoot
      const eased = 1 - Math.pow(1 - progress, 4)
      setTicked(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, delay, reduced])

  return (
    <div className="stat" ref={ref}>
      <div className="stat__value">
        {reduced ? value : ticked}
        {suffix}
      </div>
      <p className="stat__label">{label}</p>
    </div>
  )
}
