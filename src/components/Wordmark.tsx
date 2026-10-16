import { useReducedMotion, useSpring, animated } from '@react-spring/web'
import type { CSSProperties } from 'react'
import { settle } from '../lib/motion'

/**
 * The RESET logotype, rebuilt as vector geometry rather than set in a font.
 *
 * Drawn on a 40-unit cap height with a 9-unit monoline stroke, matching the
 * supplied brand artwork: a squared R, an E reduced to three bars, a lime S,
 * and a plain T.
 */

type Letter = { d: string; x: number; lime?: boolean }

const LETTERS: Letter[] = [
  // R — stem, squared bowl, straight leg
  { d: 'M4.5 0V40M4.5 0H19A10 10 0 0 1 19 20H4.5M19 20L30 40', x: 0 },
  // E — three bars
  { d: 'M0 4.5H27M0 20H27M0 35.5H27', x: 42 },
  // S — two stacked elliptical bowls, in lime
  {
    d: 'M25 12.25A11 7.75 0 1 0 14 20A11 7.75 0 1 1 4.5 27.75',
    x: 77,
    lime: true,
  },
  // E — three bars
  { d: 'M0 4.5H27M0 20H27M0 35.5H27', x: 115 },
  // T — crossbar and stem
  { d: 'M0 4.5H30M15 0V40', x: 150 },
]

const VIEWBOX = '0 0 180 40'

function LetterGlyph({
  letter,
  index,
  animate,
}: {
  letter: Letter
  index: number
  animate: boolean
}) {
  const [springs] = useSpring<{ opacity: number; y: number }>(
    () =>
      animate
        ? {
            from: { opacity: 0, y: 16 },
            to: { opacity: 1, y: 0 },
            delay: 160 + index * 75,
            config: settle,
          }
        : { opacity: 1, y: 0 },
    [animate],
  )

  return (
    <animated.g
      style={{
        opacity: springs.opacity,
        transform: springs.y.to(
          (v) => `translate(${letter.x}px, ${v}px)`,
        ),
      }}
    >
      <path
        d={letter.d}
        fill="none"
        stroke={letter.lime ? 'var(--lime)' : 'currentColor'}
        strokeWidth={9}
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
    </animated.g>
  )
}

type Props = {
  /** Kicker line above the logotype. Pass null to hide it. */
  kicker?: string | null
  /** Animate each letter into place on mount. */
  kinetic?: boolean
  className?: string
  /** Em-based scale — the whole lockup sizes from the parent font-size. */
  style?: CSSProperties
}

export function Wordmark({
  kicker = 'Project',
  kinetic = false,
  className,
  style,
}: Props) {
  const reduced = useReducedMotion()
  const animate = Boolean(kinetic) && !reduced

  return (
    <span className={`wordmark ${className ?? ''}`.trim()} style={style}>
      {kicker ? (
        <span className="wordmark__kicker" aria-hidden="true">
          {kicker
            .replace(/\s+/g, '')
            .split('')
            .map((char, i) => (
              <span key={`${char}-${i}`}>{char}</span>
            ))}
        </span>
      ) : null}
      <svg
        className="wordmark__svg"
        viewBox={VIEWBOX}
        role="img"
        aria-label="Project RESET"
      >
        {LETTERS.map((letter, i) => (
          <LetterGlyph key={i} letter={letter} index={i} animate={animate} />
        ))}
      </svg>
    </span>
  )
}
