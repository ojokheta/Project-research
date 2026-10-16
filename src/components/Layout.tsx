import { useEffect } from 'react'
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
import { glide, settle } from '../lib/motion'

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

function PageFrame() {
  const reduced = useReducedMotion()

  const styles = useSpring({
    from: reduced ? { opacity: 1 } : { opacity: 0, y: 14 },
    to: { opacity: 1, y: 0 },
    config: settle,
  })

  return (
    <animated.main id="main" style={styles}>
      <Outlet />
    </animated.main>
  )
}

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <div className="shell">
      <VantaBackground />
      <ScrollProgress />
      <div className="site">
        <Nav />
        <PageFrame key={pathname} />
        <Footer />
      </div>
    </div>
  )
}
