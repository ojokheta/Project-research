import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import {
  animated,
  useReducedMotion,
  useScroll,
  useSpring,
} from '@react-spring/web'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { VantaBackground } from './VantaBackground'
import { Backdrop } from './Backdrop'
import { BottomNav } from './BottomNav'
import { ContinuousPage } from './ContinuousPage'
import { useIsMobile } from '../hooks/useIsMobile'
import { pathToSectionId } from '../lib/sections'
import { glide, settle } from '../lib/motion'
import { scrollToId } from '../lib/scroll'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reduced = useReducedMotion()

  const styles = useSpring({
    scaleX: scrollYProgress,
    config: reduced ? { duration: 0 } : glide,
  })

  return (
    <animated.div
      className="progress"
      aria-hidden="true"
      style={{ transform: styles.scaleX.to((v) => `scaleX(${v})`) }}
    />
  )
}

const NAV_OFFSET = 96

/** Align the viewport to the top of a section, clear of the fixed chrome. */
function scrollToSection(id: string, behavior: ScrollBehavior) {
  const el = document.getElementById(id)
  if (!el) return false
  if (behavior === 'smooth') {
    // native smooth scrolling is unreliable in some webviews, so the rAF
    // helper does the easing; instant jumps stay instant (first paint).
    scrollToId(id, NAV_OFFSET)
    return true
  }
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  // 'instant', not 'auto': 'auto' defers to html's `scroll-behavior: smooth`,
  // which is unreliable in embedded webviews.
  window.scrollTo({ top: Math.max(0, top), left: 0, behavior: 'instant' })
  return true
}

export function Layout() {
  const { pathname } = useLocation()
  const isMobile = useIsMobile()
  const reduced = useReducedMotion()

  // suppress the entrance re-animation on mobile: ContinuousPage never remounts
  const reducedStyles = useSpring({
    from: reduced ? { opacity: 1 } : { opacity: 0, y: 14 },
    to: { opacity: 1, y: 0 },
    config: settle,
  })

  const first = useRef(true)

  /**
   * Route changes drive scroll differently per layout:
   *  - desktop: a routed page change starts at the top, as before;
   *  - mobile: every route is a section of the one continuous page, so a
   *    change (CTA tap, footer link, back/forward) eases to that section.
   * The first pass is instant so a deep link like /help doesn't animate all
   * the way down from the top of the document.
   */
  useEffect(() => {
    if (first.current) {
      first.current = false
      if (isMobile && pathname !== '/') {
        scrollToSection(pathToSectionId(pathname), 'auto')
      }
      return
    }

    if (isMobile) {
      scrollToSection(pathToSectionId(pathname), reduced ? 'auto' : 'smooth')
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, isMobile, reduced])

  return (
    <div className={`shell${isMobile ? ' shell--mobile' : ''}`}>
      <VantaBackground />
      <Backdrop pathname={pathname} mobile={isMobile} />
      <ScrollProgress />
      <div className="site">
        <Nav />
        {isMobile && pathname !== '/resources' ? (
          <animated.main id="main" style={reducedStyles}>
            <ContinuousPage />
          </animated.main>
        ) : (
          <animated.main id="main" key={pathname} style={reducedStyles}>
            <Outlet />
          </animated.main>
        )}
        <Footer />
      </div>
      {isMobile && <BottomNav />}
    </div>
  )
}
