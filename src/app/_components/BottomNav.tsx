'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

type DockItem = { href: string; label: string; icon: ReactNode }

/* Outline icons, 24px grid — same weight as the reference dock. */
const svg = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
)

const ITEMS: DockItem[] = [
  { href: '/', label: 'Home', icon: svg(<><path d="M3 10.2 12 3l9 7.2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 21v-7h6v7" /></>) },
  { href: '/about', label: 'About', icon: svg(<><circle cx="12" cy="12" r="8.6" /><path d="M12 11.2v4.9" /><path d="M12 7.9h.01" /></>) },
  { href: '/purpose', label: 'Purpose', icon: svg(<><circle cx="12" cy="12" r="8.6" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" /></>) },
  { href: '/help', label: 'Get help', icon: svg(<><circle cx="12" cy="12" r="8.6" /><circle cx="12" cy="12" r="3.6" /><path d="m5.9 5.9 3.7 3.7M18.1 5.9l-3.7 3.7M5.9 18.1l3.7-3.7M18.1 18.1l-3.7-3.7" /></>) },
  { href: '/involve', label: 'Get involved', icon: svg(<><circle cx="9.2" cy="8.6" r="3.4" /><path d="M3.6 19.6c.6-3.2 2.9-5.1 5.6-5.1s5 1.9 5.6 5.1" /><path d="M16.2 5.8a3.4 3.4 0 0 1 0 6.5" /><path d="M17.7 15c1.7.8 2.7 2.4 3 4.6" /></>) },
]

const chatIcon = svg(
  <><path d="M20.4 11.7c0 4.1-3.8 7.5-8.4 7.5-1.1 0-2.2-.2-3.2-.6L4.2 20l1.4-3.5c-1.3-1.3-2.1-3-2.1-4.8 0-4.1 3.8-7.5 8.4-7.5s8.5 3.4 8.5 7.5Z" /><circle cx="8.7" cy="11.7" r=".95" fill="currentColor" stroke="none" /><circle cx="12" cy="11.7" r=".95" fill="currentColor" stroke="none" /><circle cx="15.3" cy="11.7" r=".95" fill="currentColor" stroke="none" /></>,
)

/**
 * Floating bottom dock — mobile only (hidden from 761px up, where the
 * header nav takes over).
 *
 * The active chip is a single absolutely-positioned element that slides
 * between items: its x/width are measured only when the route changes or
 * the viewport resizes — never on scroll — and CSS carries the motion with
 * an overshoot easing, so it glides like a spring without a per-frame loop.
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
                {item.icon}
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
        {chatIcon}
      </Link>
    </nav>
  )
}
