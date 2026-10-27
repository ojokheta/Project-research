'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useRef, useState } from 'react'
import { Chat, HandHeart, Home, Lightbulb, Target, Users, type IconComponent } from 'reicon-react'

type DockItem = { href: string; label: string; Icon: IconComponent }

/* Icons from Reicon (reicon.dev) — MIT-licensed outline set on a 24px grid,
   matching the reference dock's light stroke weight. */
const ITEMS: DockItem[] = [
  { href: '/', label: 'Home', Icon: Home },
  { href: '/about', label: 'About', Icon: Lightbulb },
  { href: '/purpose', label: 'Purpose', Icon: Target },
  { href: '/help', label: 'Get help', Icon: HandHeart },
  { href: '/involve', label: 'Get involved', Icon: Users },
]

/**
 * Floating bottom dock — mobile only (hidden from 761px up, where the desktop
 * pill nav takes over).
 *
 * The active chip is a single absolutely-positioned element that slides
 * between items: its x/width are measured only when the route changes, when
 * the item's entrance animation ends, when the pill resizes, or on viewport
 * resize — never on scroll — and CSS carries the motion with an overshoot
 * easing, so it glides like a spring without a per-frame loop.
 */
export function BottomNav() {
  const pathname = usePathname()
  const listRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [chip, setChip] = useState({ x: 0, w: 0, ready: false })

  const activeHref = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')

  useLayoutEffect(() => {
    const el = itemRefs.current[activeHref]
    const list = listRef.current
    if (!el || !list) return

    const measure = () => {
      const box = el.getBoundingClientRect()
      const base = list.getBoundingClientRect()
      setChip({ x: box.left - base.left, w: box.width, ready: true })
    }

    measure()

    // The item's entrance animation scales it (0.85 → 1), so its box is wrong
    // while that runs — re-measure the moment it ends.
    const onAnimationEnd = () => measure()
    el.addEventListener('animationend', onAnimationEnd)

    // …and whenever the pill itself changes size (fonts, scrollbar, layout),
    // plus once after everything has settled as a fallback.
    const ro = new ResizeObserver(measure)
    ro.observe(list)
    const t = window.setTimeout(measure, 900)
    window.addEventListener('resize', measure)

    return () => {
      el.removeEventListener('animationend', onAnimationEnd)
      ro.disconnect()
      window.clearTimeout(t)
      window.removeEventListener('resize', measure)
    }
  }, [activeHref])

  return (
    <nav className="mdock" aria-label="Primary">
      <div className="mdock__pill" ref={listRef}>
        <span
          className="mdock__chip"
          aria-hidden="true"
          style={{ transform: `translateX(${chip.x}px)`, width: chip.w, opacity: chip.ready ? 1 : 0 }}
        />
        {ITEMS.map((item, i) => {
          const active = item.href === activeHref
          return (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => {
                itemRefs.current[item.href] = el
              }}
              className={`mdock__item${active ? ' is-active' : ''}`}
              aria-label={item.label}
              title={item.label}
              aria-current={active ? 'page' : undefined}
              style={{ '--i': i } as React.CSSProperties}
            >
              <span className="mdock__icon" aria-hidden="true">
                <item.Icon size={22} strokeWidth={1.7} />
              </span>
            </Link>
          )
        })}
      </div>

      <Link
        href="/contact"
        className={`mdock__fab${activeHref === '/contact' ? ' is-active' : ''}`}
        aria-label="Talk to us"
        title="Talk to us"
      >
        <Chat size={21} strokeWidth={1.8} aria-hidden="true" />
      </Link>
    </nav>
  )
}
