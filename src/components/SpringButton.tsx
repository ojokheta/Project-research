import { animated, useSpring } from '@react-spring/web'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { pressSpring } from '../lib/motion'

type Props = {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  type?: 'button' | 'submit'
  onClick?: () => void
}

export function SpringButton({
  to,
  href,
  children,
  variant = 'primary',
  type = 'button',
  onClick,
}: Props) {
  const [styles, api] = useSpring(() => ({
    scale: 1,
    y: 0,
    config: pressSpring,
  }))

  const className = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'}`
  const handlers = {
    onMouseEnter: () => api.start({ scale: 1.035, y: -1 }),
    onMouseLeave: () => api.start({ scale: 1, y: 0 }),
    onMouseDown: () => api.start({ scale: 0.97 }),
    onMouseUp: () => api.start({ scale: 1.03 }),
  }

  if (to) {
    return (
      <animated.div style={styles} {...handlers}>
        <Link className={className} to={to} onClick={onClick}>
          {children}
        </Link>
      </animated.div>
    )
  }

  if (href) {
    return (
      <animated.div style={styles} {...handlers}>
        <a className={className} href={href}>
          {children}
        </a>
      </animated.div>
    )
  }

  return (
    <animated.button className={className} type={type} style={styles} {...handlers}>
      {children}
    </animated.button>
  )
}
