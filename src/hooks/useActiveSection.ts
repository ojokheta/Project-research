import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-spy for the section-based navigation.
 *
 * Returns the id of the section currently occupying the middle band of the
 * viewport. Uses IntersectionObserver (no per-frame layout reads) as a wake-up
 * signal, plus a rAF-throttled scroll listener for continuous tracking.
 *
 * Both paths funnel into `pick()`, which must compare against the *live*
 * active id. Reading that from `active` state inside the effect would freeze it
 * at its first-render value — the effect's deps don't include it — and the spy
 * would lock onto whatever section it first reported and never move again. The
 * ref below is written synchronously by `settle()` so the comparison is always
 * current even before React re-renders.
 */
export function useActiveSection(ids: string[], enabled = true): string {
  const [active, setActive] = useState(ids[0] ?? '')
  const activeRef = useRef(ids[0] ?? '')

  useEffect(() => {
    if (!enabled) return

    const settle = (id: string) => {
      if (!id || id === activeRef.current) return
      activeRef.current = id
      setActive(id)
    }

    const pick = () => {
      const vh = window.innerHeight || 1
      let bestId = activeRef.current
      let bestScore = -1
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        // height of this section visible inside the viewport
        const visible = Math.max(
          0,
          Math.min(rect.bottom, vh) - Math.max(rect.top, 0),
        )
        // prefer sections that cover the viewport, break ties toward the one
        // whose top has already passed the halfway line
        const score = visible + (rect.top <= vh * 0.5 ? 0.5 * vh : 0)
        if (score > bestScore) {
          bestScore = score
          bestId = id
        }
      }
      settle(bestId)
    }

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = nodes.length
      ? new IntersectionObserver(() => pick(), {
          // the "active band" sits in the middle of the screen
          rootMargin: '-40% 0px -45% 0px',
          threshold: [0, 0.25, 0.5, 0.75, 1],
        })
      : null
    for (const node of nodes) observer?.observe(node)

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        pick()
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    // settle once after first layout — the observer only reports on changes,
    // so nothing fires until the user actually scrolls
    const id = window.setTimeout(pick, 80)

    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.clearTimeout(id)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [enabled, ids.join('|')])

  return active
}
