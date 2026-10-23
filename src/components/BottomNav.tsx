import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { animated, useReducedMotion, useSpring } from '@react-spring/web'
import { SECTIONS } from '../lib/sections'
import { useActiveSection } from '../hooks/useActiveSection'
import { snap } from '../lib/motion'
import { scrollToId } from '../lib/scroll'

/**
 * Floating bottom navigation — mobile only.
 *
 * Three coordinated motions:
 *  1. A lime indicator pill slides horizontally under the active item
 *     (a single spring driving `x` + `width`, so it both glides and squashes).
 *  2. The active icon scales up and its label fades in; inactive items rest
 *     smaller and quieter.
 *  3. Tapping a bar eases the page to that section rather than jumping.
 *
 * The active section comes from IntersectionObserver-based scroll-spy, so the
 * bar tracks the viewport without a per-frame layout read. The pill's position
 * is measured only when the active id changes (or on resize), never on scroll —
 * keeping it jank-free on low-end mobile.
 */
export function BottomNav() {
  const reduced = useReducedMotion()
  const sectionIds = SECTIONS.map((s) => s.id)
  const activeId = useActiveSection(sectionIds, true)

  const listRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  /* the pill follows the active item */
  const [pill, pillApi] = useSpring(() => ({
    x: 0,
    width: 0,
    opacity: 0,
    config: reduced ? { duration: 0 } : snap,
  }))

  const moveTo = useCallback(
    (id: string) => {
      const list = listRef.current
      const el = itemRefs.current[id]
      if (!list || !el) return
      const box = el.getBoundingClientRect()
      const base = list.getBoundingClientRect()
      pillApi.start({
        x: box.left - base.left,
        width: box.width,
        opacity: 1,
        config: reduced ? { duration: 0 } : snap,
      })
    },
    [pillApi, reduced],
  )

  // park the pill on the active item once laid out, and re-measure on resize
  useLayoutEffect(() => {
    const id = window.setTimeout(() => moveTo(activeId), 60)
    return () => window.clearTimeout(id)
  }, [activeId, moveTo])

  useEffect(() => {
    const onResize = () => moveTo(activeId)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [activeId, moveTo])

  /* tap → ease the page to the section */
  const scrollTo = useCallback(
    (id: string) => {
      const el = document.getElementById(id)
      if (!el) return
      moveTo(id)
      // keep the section clear of the fixed top bar + this bar; the helper
      // handles reduced-motion and clamps to the scrollable range
      scrollToId(id, 96)
    },
    [moveTo],
  )

  return (
    <nav className="bottom-nav" aria-label="Section navigation">
      <div className="bottom-nav__bar" ref={listRef}>
        <animated.span
          className="bottom-nav__pill"
          aria-hidden="true"
          style={{
            transform: pill.x.to((x) => `translateX(${x}px)`),
            width: pill.width,
            opacity: pill.opacity,
          }}
        />
        {SECTIONS.map((section) => {
          const isActive = section.id === activeId
          return (
            <button
              key={section.id}
              ref={(el) => {
                itemRefs.current[section.id] = el
              }}
              className={`bottom-nav__item${isActive ? ' is-active' : ''}`}
              aria-current={isActive ? 'true' : undefined}
              aria-label={section.label}
              onClick={() => scrollTo(section.id)}
            >
              <span className="bottom-nav__icon" aria-hidden="true">
                {section.icon}
              </span>
              <span className="bottom-nav__label">{section.short}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
