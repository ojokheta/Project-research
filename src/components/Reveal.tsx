import { animated, useInView, useReducedMotion } from '@react-spring/web'
import type { ReactNode } from 'react'
import { drift } from '../lib/motion'

type Props = {
  children: ReactNode
  /** ms offset for staggered groups */
  delay?: number
  /** larger initial travel for hero-scale content */
  distance?: number
  className?: string
  as?: 'div' | 'li' | 'article' | 'section'
}

/**
 * Scroll reveal. Content stays readable without motion, and the whole thing
 * collapses to a no-op under `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  delay = 0,
  distance = 22,
  className,
}: Props) {
  const reduced = useReducedMotion()

  const [ref, springs] = useInView(
    () =>
      reduced
        ? { opacity: 1 }
        : {
            from: { opacity: 0, y: distance },
            to: { opacity: 1, y: 0 },
            delay,
            config: drift,
          },
    { once: true, amount: 0.15 },
  )

  return (
    <animated.div ref={ref} className={className} style={springs}>
      {children}
    </animated.div>
  )
}

/** Staggered container — children render in place, the wrapper fades in. */
export function RevealGroup({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <Reveal className={className} delay={delay}>
      {children}
    </Reveal>
  )
}
