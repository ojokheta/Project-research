import { useLayoutEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { animated, useReducedMotion, useSpring } from '@react-spring/web'
import { settle } from '../lib/motion'

type Item = { q: string; a: string }

function Panel({ open, children }: { open: boolean; children: ReactNode }) {
  const inner = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    const el = inner.current
    if (!el) return
    const measure = () => setHeight(el.offsetHeight)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const styles = useSpring({
    height: open ? height : 0,
    opacity: open ? 1 : 0,
    config: reduced ? { duration: 0 } : settle,
  })

  return (
    <animated.div className="accordion__panel" style={styles}>
      <div ref={inner} inert={!open}>
        {children}
      </div>
    </animated.div>
  )
}

export function Accordion({
  items,
  initial = null,
}: {
  items: Item[]
  initial?: number | null
}) {
  const [open, setOpen] = useState<number | null>(initial)

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div className="accordion__item" key={item.q}>
            <button
              className="accordion__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {item.q}
              <span className="accordion__icon" aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 11 11">
                  <path
                    d="M5.5 1v9M1 5.5h9"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    style={{
                      transition: 'transform 320ms cubic-bezier(.2,.9,.25,1)',
                      transform: isOpen ? 'rotate(135deg)' : 'none',
                      transformOrigin: 'center',
                    }}
                  />
                </svg>
              </span>
            </button>
            <Panel open={isOpen}>
              <p>{item.a}</p>
            </Panel>
          </div>
        )
      })}
    </div>
  )
}
