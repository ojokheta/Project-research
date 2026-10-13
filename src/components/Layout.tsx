import { Outlet, useLocation } from 'react-router-dom'
import { animated, useSpring } from '@react-spring/web'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { VantaBackground } from './VantaBackground'
import { appleSpring } from '../lib/motion'

function PageFrame() {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,18px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: appleSpring,
  })

  return (
    <animated.main style={styles}>
      <Outlet />
    </animated.main>
  )
}

export function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="app-shell">
      <VantaBackground />
      <div className="site-content">
        <Nav />
        <PageFrame key={pathname} />
        <Footer />
      </div>
    </div>
  )
}
