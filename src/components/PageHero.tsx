import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = {
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
  actions?: ReactNode
  center?: boolean
  /** Renders the hero at roughly half height for interior pages. */
  compact?: boolean
}

export function PageHero({
  eyebrow,
  title,
  lede,
  actions,
  center = false,
}: Props) {
  return (
    <section className={`page-hero${center ? ' page-hero--center' : ''}`}>
      <div className="container">
        <Reveal distance={16}>
          <div className="eyebrow">{eyebrow}</div>
        </Reveal>
        <Reveal delay={80} distance={20}>
          <h1 className="display--md">{title}</h1>
        </Reveal>
        {lede ? (
          <Reveal delay={150} distance={18}>
            <p className="lede">{lede}</p>
          </Reveal>
        ) : null}
        {actions ? (
          <Reveal delay={220} distance={14}>
            <div className="actions">{actions}</div>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
