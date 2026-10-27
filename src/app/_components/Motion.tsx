'use client'

import { useState, type ReactNode } from 'react'
import { animated, useSpring, config } from '@react-spring/web'

/**
 * Physics-based card hover (React Spring).
 *
 * Pointer enter/leave drives a spring on `y`/`scale`, so cards lift with an
 * organic settle instead of a mechanical CSS ease. Focus/blur mirror hover for
 * keyboard users. Springs clean themselves up on unmount (hook-owned).
 */
export function SpringCard({
  children,
  className,
  lift = 7,
  ...rest
}: { children: ReactNode; className?: string; lift?: number } & Record<string, unknown>) {
  const [hovered, setHovered] = useState(false)

  const style = useSpring({
    y: hovered ? -lift : 0,
    scale: hovered ? 1.022 : 1,
    config: { tension: 280, friction: 18 }, // slightly springy settle
    reset: true,
  })

  return (
    <animated.article
      className={className}
      {...(rest as React.HTMLAttributes<HTMLElement>)}
      style={style}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {children}
    </animated.article>
  )
}

/**
 * Gentle idle float for decorative layers (hero orbs/sun).
 *
 * A spring oscillation between `-distance` and `distance` with `loop.reverse`
 * gives a calm breathing bob. Nest it *inside* a parallax wrapper if the same
 * element also needs GSAP scrub — two systems, two elements, no transform
 * collisions.
 */
export function Float({
  children,
  className,
  distance = 10,
  duration = 3400,
}: {
  children: ReactNode
  className?: string
  distance?: number
  duration?: number
}) {
  const style = useSpring({
    from: { y: -distance },
    to: { y: distance },
    loop: { reverse: true },
    config: { duration, easing: (t) => t * (2 - t) }, // easeInOutSine-like, no overshoot
  })

  return (
    <animated.div className={className} style={style} aria-hidden="true">
      {children}
    </animated.div>
  )
}
