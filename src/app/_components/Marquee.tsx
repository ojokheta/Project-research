import type { IconComponent } from 'reicon-react'
import { Compass, HandHeart, Heart, Health, Lightbulb, Sparkle, Star, Stethoscope, Users } from 'reicon-react'

type Badge = { label: string; Icon: IconComponent }

/** Partners, pathways and focus areas already covered by the site content. */
const BADGES: Badge[] = [
  { label: 'CDCC Counselling', Icon: Health },
  { label: 'RESET Connect', Icon: HandHeart },
  { label: 'University Health Services', Icon: Stethoscope },
  { label: 'Student Affairs Division', Icon: Users },
  { label: 'University of Ibadan', Icon: Star },
  { label: 'Peer education', Icon: Lightbulb },
  { label: 'Confidential support', Icon: Heart },
  { label: 'Prevention first', Icon: Sparkle },
  { label: 'Referral linkage', Icon: Health },
  { label: 'Recovery-friendly communities', Icon: Compass },
]

/**
 * Infinite, pause-on-hover marquee.
 *
 * Two identical rows sit inside one track that translates from 0 to -50% —
 * because the halves are pixel-identical the wrap point is seamless, and the
 * animation is a single compositor-only `transform` (no layout, no JS loop), so
 * it holds 60fps for free.
 *
 * - `animation-play-state: paused` on hover/focus lets people read a badge.
 * - `prefers-reduced-motion` disables the animation and lets the row wrap
 *   normally instead (see `.marquee` styles in globals.css).
 * - The duplicate row is `aria-hidden` so screen readers hear each item once.
 */
export function Marquee({ items = BADGES }: { items?: Badge[] }) {
  const row = (hidden: boolean) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {items.map(({ label, Icon }) => (
        <li key={label}>
          <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
          {label}
        </li>
      ))}
    </ul>
  )

  return (
    <section className="marquee" aria-label="Partners and focus areas" data-reveal="24">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </section>
  )
}
