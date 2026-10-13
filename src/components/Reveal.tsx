import { animated, useInView } from '@react-spring/web'
import type { ReactNode } from 'react'
import { appleSpring, prefersReducedMotion } from '../lib/motion'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: Props) {
  const reduced = prefersReducedMotion()
  const [ref, springs] = useInView(
    () => ({
      from: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
      to: { opacity: 1, y: 0 },
      delay,
      config: appleSpring,
    }),
    { once: true, rootMargin: '-8% 0%' },
  )

  return (
    <animated.div ref={ref} className={className} style={springs}>
      {children}
    </animated.div>
  )
}
