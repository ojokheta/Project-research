/**
 * Spring vocabulary.
 *
 * Tuned toward Apple's documented SwiftUI defaults — the default spring is
 * response 0.55s with damping fraction 1.0 (critically damped, no overshoot),
 * and `easeInOut` resolves at 0.35s. These map to the react-spring config
 * pairs below, so motion on the site feels native rather than bouncy.
 */

/** Critically damped, settles in ~0.55s. The default for entrances. */
export const settle = { tension: 190, friction: 31, mass: 1 } as const

/** Slightly quicker and softer — for stacked / staggered reveals. */
export const drift = { tension: 120, friction: 24, mass: 1 } as const

/** Controls and press states. Fast, minimal travel. */
export const snap = { tension: 420, friction: 34, mass: 0.7 } as const

/** Scroll-linked values. Feels weighted rather than twitchy. */
export const glide = { tension: 120, friction: 26, mass: 0.9 } as const

export const stagger = (index: number, step = 70) => index * step

export { useReducedMotion } from '@react-spring/web'
