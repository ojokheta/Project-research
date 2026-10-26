import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { animated, useReducedMotion, useSpring } from '@react-spring/web'
import { Wordmark } from './Wordmark'
import { SpringButton } from './SpringButton'
import { snap } from '../lib/motion'

/**
 * The desktop top bar.
 *
 * Navigation on small screens is handled entirely by the floating bottom nav
 * (see BottomNav.tsx), so the collapsing hamburger and its drawer are gone —
 * there is nothing left for them to do. Below the 760px breakpoint the links
 * and CTA are hidden by CSS and only the wordmark remains, giving mobile a
 * quiet brand bar while the bottom bar carries the wayfinding.
 */
const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/resources', label: 'Resources' },
  { to: '/help', label: 'Get help' },
  { to: '/involve', label: 'Get involved' },
]

export function Nav() {
  const { pathname } = useLocation()
  const reduced = useReducedMotion()
  const [condensed, setCondensed] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 16,
  )

  const listRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  const activeTo = navLinks.find((l) => pathname.startsWith(l.to))?.to ?? ''

  /* the pill follows the hovered link, and parks on the active one */
  const [pillStyles, pillApi] = useSpring(() => ({
    x: 0,
    width: 0,
    opacity: 0,
    config: reduced ? { duration: 0 } : snap,
  }))

  const moveTo = useCallback(
    (to: string) => {
      const list = listRef.current
      const el = itemRefs.current[to]
      if (!list) return
      if (!el) {
        // no active route (home) — hide the pill instead of parking it
        pillApi.start({
          opacity: 0,
          config: reduced ? { duration: 0 } : snap,
        })
        return
      }
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

  useLayoutEffect(() => {
    const id = window.setTimeout(() => moveTo(activeTo), 120)
    return () => window.clearTimeout(id)
  }, [activeTo, moveTo])

  useEffect(() => {
    const onResize = () => moveTo(activeTo)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [activeTo, moveTo])

  /* condensed bar once the page has moved */
  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="nav"
      style={{
        background: condensed
          ? 'rgba(4, 20, 13, 0.78)'
          : 'rgba(4, 20, 13, 0.52)',
        borderBottomColor: condensed
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(255, 255, 255, 0.05)',
        transition: 'background-color 300ms ease, border-color 300ms ease',
      }}
    >
      <nav className="nav-inner" aria-label="Primary">
        <Link to="/" aria-label="Project RESET — home">
          <Wordmark kicker={null} style={{ fontSize: 21, width: 'fit-content' }} />
        </Link>

        <div className="nav-links" ref={listRef} onMouseLeave={() => moveTo(activeTo)}>
          <animated.span
            className="nav-pill"
            aria-hidden="true"
            style={{
              transform: pillStyles.x.to((x) => `translate(${x}px, -50%)`),
              width: pillStyles.width,
              opacity: pillStyles.opacity,
            }}
          />
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              ref={(el) => {
                itemRefs.current[link.to] = el
              }}
              onMouseEnter={() => moveTo(link.to)}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-cta">
          <SpringButton to="/contact" variant="ghost" size="sm">
            Talk to us
          </SpringButton>
        </div>
      </nav>
    </header>
  )
}
