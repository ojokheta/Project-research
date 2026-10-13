export const appleSpring = {
  tension: 280,
  friction: 30,
  mass: 0.8,
} as const

export const softSpring = {
  tension: 180,
  friction: 26,
  mass: 1,
} as const

export const pressSpring = {
  tension: 420,
  friction: 22,
  mass: 0.6,
} as const

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
