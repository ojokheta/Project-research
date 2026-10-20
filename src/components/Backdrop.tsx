import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@react-spring/web'
import { SECTIONS, pathToSectionId } from '../lib/sections'
import { useActiveSection } from '../hooks/useActiveSection'

/**
 * Scroll-driven background imagery.
 *
 * One fixed, full-viewport layer holds a stack of section backdrops. As the
 * active section changes, the incoming image cross-fades up while the outgoing
 * one fades out — a CSS `opacity` transition, so the compositor does the work
 * and nothing reflows (zero layout shift).
 *
 * Two deliberate choices keep it cheap on mobile:
 *  - The images are blurred and scaled up, so their baked-in text dissolves
 *    into soft brand-coloured texture that blends with the palette instead of
 *    competing with the copy. It also means we never animate `background-size`.
 *  - The only per-frame motion is a bounded `translateY` written straight to a
 *    CSS variable on the root element — no React re-render on scroll, and the
 *    value never runs away because it is derived from the section's own rect.
 *
 * On desktop only one section id exists in the DOM at a time (the active
 * route), so the backdrop simply shows that route's image. On mobile all six
 * are present and the scroll-spy cross-fades between them.
 */
export function Backdrop({
  pathname,
  mobile,
}: {
  pathname: string
  mobile: boolean
}) {
  const reduced = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)

  // mobile: scroll-spy across the stacked sections. desktop: the current route.
  const spyId = useActiveSection(
    SECTIONS.map((s) => s.id),
    mobile,
  )
  const activeId = mobile ? spyId : pathToSectionId(pathname)

  /* bounded parallax shift, written straight to a CSS custom property */
  useEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    let raf = 0
    const update = () => {
      raf = 0
      const el = document.getElementById(activeId)
      if (!el) return
      const vh = window.innerHeight || 1
      const top = el.getBoundingClientRect().top
      // -1 (section below) → 0 (centred) → 1 (scrolled past)
      const progress = Math.max(-1, Math.min(1, top / vh))
      root.style.setProperty('--shift', `${(progress * 36).toFixed(1)}px`)
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [activeId, reduced])

  return (
    <div className="backdrop" ref={rootRef} aria-hidden="true">
      {SECTIONS.map((section) => (
        <div
          key={section.id}
          className={`backdrop__layer${section.id === activeId ? ' is-active' : ''}`}
          style={{ backgroundImage: `url(${section.bg})` }}
        />
      ))}
      <div className="backdrop__scrim" />
    </div>
  )
}
