import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { animated, useReducedMotion, useSpring } from '@react-spring/web'
import { settle } from '../lib/motion'

export type StoryStep = {
  kicker: string
  title: string
  body: string
  icon: ReactNode
}

const pad = (n: number) => String(n).padStart(2, '0')

function StoryPanel({
  step,
  active,
  index,
  activeIndex,
  total,
}: {
  step: StoryStep
  active: boolean
  index: number
  activeIndex: number
  total: number
}) {
  const reduced = useReducedMotion()

  const styles = useSpring({
    opacity: active ? 1 : 0,
    y: active ? 0 : index >= activeIndex ? 22 : -22,
    scale: active ? 1 : 0.985,
    config: reduced ? { duration: 0 } : settle,
  })

  return (
    <animated.article
      className="story__panel"
      style={{
        ...styles,
        zIndex: active ? 2 : 1,
        pointerEvents: active ? 'auto' : 'none',
      }}
      aria-hidden={!active}
    >
      <div className="story__panel-top">
        <span className="story__glyph" aria-hidden="true">
          {step.icon}
        </span>
        <span className="story__num">
          {pad(index + 1)} / {pad(total)}
        </span>
      </div>

      <div className="story__panel-mid" aria-hidden="true">
        <span className="story__giant">{pad(index + 1)}</span>
      </div>

      <div className="story__panel-foot">
        <span className="story__panel-kicker">{step.kicker}</span>
        <span className="story__dots" aria-hidden="true">
          {Array.from({ length: total }, (_, d) => (
            <i key={d} data-on={d <= index} />
          ))}
        </span>
      </div>
    </animated.article>
  )
}

/**
 * Scroll storytelling. The visual holds in place while the narrative steps
 * pass through the viewport, and swaps with a spring as each one takes focus.
 */
export function StickyStory({
  steps,
  heading,
}: {
  steps: StoryStep[]
  heading?: ReactNode
}) {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!nodes.length) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const i = Number((entry.target as HTMLElement).dataset.index)
            if (!Number.isNaN(i)) setActive(i)
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [steps])

  return (
    <div className="story">
      <div className="story__visual" aria-hidden="true">
        {steps.map((step, i) => (
          <StoryPanel
            key={step.title}
            step={step}
            index={i}
            active={i === active}
            activeIndex={active}
            total={steps.length}
          />
        ))}
      </div>

      <div className="story__steps">
        {heading ? <div className="story__lead">{heading}</div> : null}
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="story-step"
            data-index={i}
            data-active={i === active}
            ref={(el) => {
              stepRefs.current[i] = el
            }}
          >
            <p className="story-step__kicker">
              {String(i + 1).padStart(2, '0')} — {step.kicker}
            </p>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
