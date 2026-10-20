/**
 * Ease a scroll to an absolute document offset with requestAnimationFrame.
 *
 * Native `behavior: 'smooth'` is not universally reliable — it can be blocked
 * by the embedding environment, interrupted by scroll anchoring, or simply
 * absent in some webviews (in others it never starts at all). Driving the
 * scroll ourselves makes the animation predictable everywhere and lets it use
 * the same weighted curve as the rest of the site's motion.
 *
 * The curve is ease-out-quart: a soft landing with no overshoot, matching the
 * critically damped feel of the `glide` spring. Honours reduced-motion by
 * jumping instantly.
 */

const DURATION = 620 // ms

const ease = (t: number) => 1 - Math.pow(1 - t, 4)

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Animate the viewport to the document offset `to`.
 *
 * `offset` is subtracted so fixed chrome (the top bar, the floating bottom
 * nav) never covers the destination. The target is clamped to the scrollable
 * range. Starting a new call cancels any in-flight one.
 */
let cancelInFlight: (() => void) | null = null

export function animateScrollTo(
  to: number,
  { offset = 0, duration = DURATION }: { offset?: number; duration?: number } = {},
): void {
  const doc = document.documentElement
  const max = Math.max(0, doc.scrollHeight - window.innerHeight)
  const target = Math.max(0, Math.min(to - offset, max))

  cancelInFlight?.()
  cancelInFlight = null

  if (prefersReducedMotion()) {
    window.scrollTo(0, target)
    return
  }

  const from = window.scrollY
  const delta = target - from
  if (Math.abs(delta) < 1) return

  let raf = 0
  const start = performance.now()

  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration)
    window.scrollTo(0, from + delta * ease(t))
    if (t < 1) raf = requestAnimationFrame(tick)
  }

  raf = requestAnimationFrame(tick)
  cancelInFlight = () => cancelAnimationFrame(raf)
}

/** Scroll to the top of an element by id, clear of the fixed chrome. */
export function scrollToId(id: string, offset = 96): void {
  const el = document.getElementById(id)
  if (!el) return
  animateScrollTo(el.getBoundingClientRect().top + window.scrollY, { offset })
}
