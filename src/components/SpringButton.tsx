import { animated, useReducedMotion, useSpring } from '@react-spring/web'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { settle, snap } from '../lib/motion'

type Props = {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'lime' | 'light'
  size?: 'sm' | 'md'
  type?: 'button' | 'submit'
  onClick?: () => void
  'aria-label'?: string
}

/**
 * Apple-style press physics: the control lifts a hair on hover, compresses on
 * press, and settles back with a critically damped spring.
 */
export function SpringButton({
  to,
  href,
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  ...rest
}: Props) {
  const reduced = useReducedMotion()

  const [styles, api] = useSpring(() => ({
    scale: 1,
    config: reduced ? { duration: 0 } : settle,
  }))

  const hover = () => !reduced && api.start({ scale: 1.03, config: snap })
  const leave = () => !reduced && api.start({ scale: 1, config: settle })
  const down = () => !reduced && api.start({ scale: 0.965, config: snap })

  const className = [
    'btn',
    `btn--${variant}`,
    size === 'sm' ? 'btn--sm' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const handlers = {
    onMouseEnter: hover,
    onMouseLeave: leave,
    onMouseDown: down,
    onMouseUp: hover,
    onFocus: hover,
    onBlur: leave,
  }

  if (to) {
    return (
      <animated.div style={styles} {...handlers}>
        <Link className={className} to={to} onClick={onClick} {...rest}>
          {children}
        </Link>
      </animated.div>
    )
  }

  if (href) {
    return (
      <animated.div style={styles} {...handlers}>
        <a className={className} href={href} {...rest}>
          {children}
        </a>
      </animated.div>
    )
  }

  return (
    <animated.div style={styles} {...handlers}>
      <button className={className} type={type} onClick={onClick} {...rest}>
        {children}
      </button>
    </animated.div>
  )
}

/** Small inline call-to-action with a spring-fed arrow. */
export function ArrowLink({
  to,
  children,
  accent = false,
}: {
  to: string
  children: ReactNode
  accent?: boolean
}) {
  return (
    <Link className={`link${accent ? ' link--accent' : ''}`} to={to}>
      <span>{children}</span>
      <svg
        className="link-arrow"
        width="13"
        height="13"
        viewBox="0 0 13 13"
        aria-hidden="true"
      >
        <path
          d="M2 6.5h8M7 3.5l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  )
}
