import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { animated, useReducedMotion, useSpring } from '@react-spring/web'
import { Wordmark } from './Wordmark'
import { SpringButton } from './SpringButton'
import { settle, snap } from '../lib/motion'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/purpose', label: 'Purpose' },
  { to: '/help', label: 'Get help' },
  { to: '/involve', label: 'Get involved' },
]

export function Nav() {
  const { pathname } = useLocation()
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [condensed, setCondensed] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 16,
  )

  const listRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const drawerInner = useRef<HTMLDivElement>(null)
  const [drawerHeight, setDrawerHeight] = useState(0)

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

  /* the ResizeObserver reports height immediately once it observes */
  useLayoutEffect(() => {
    const el = drawerInner.current
    if (!el) return
    const ro = new ResizeObserver(() => setDrawerHeight(el.offsetHeight))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const drawerStyles = useSpring({
    height: open ? drawerHeight : 0,
    opacity: open ? 1 : 0,
    config: reduced ? { duration: 0 } : settle,
  })

  const close = useCallback(() => setOpen(false), [])

  return (
    <>
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
          <Link to="/" onClick={close} aria-label="Project RESET — home">
            <Wordmark
              kicker={null}
              style={{ fontSize: 21, width: 'fit-content' }}
            />
          </Link>

          <div
            className="nav-links"
            ref={listRef}
            onMouseLeave={() => moveTo(activeTo)}
          >
            <animated.span
              className="nav-pill"
              aria-hidden="true"
              style={{
                transform: pillStyles.x.to(
                  (x) => `translate(${x}px, -50%)`,
                ),
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
                className={({ isActive }) =>
                  `nav-link${isActive ? ' is-active' : ''}`
                }
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

          <button
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d={open ? 'M3 3L13 13M13 3L3 13' : 'M2 5h12M2 11h12'}
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>
      </header>

      <animated.div
        className="drawer"
        style={{ ...drawerStyles, visibility: open ? 'visible' : 'hidden' }}
        aria-hidden={!open}
      >
        <div className="drawer__inner" ref={drawerInner} inert={!open}>            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={close}
                className={({ isActive }) =>
                  `drawer__link${isActive ? ' is-active' : ''}`
                }
              >
              {link.label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                aria-hidden="true"
                style={{ opacity: 0.5 }}
              >
                <path
                  d="M3 7h8M8 4l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          ))}
          <div className="drawer__cta">
            <SpringButton to="/contact" size="sm" onClick={close}>
              Talk to us
            </SpringButton>
          </div>
        </div>
      </animated.div>
    </>
  )
}
