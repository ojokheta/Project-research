'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Chat } from 'reicon-react'

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/purpose', label: 'Purpose' },
  { href: '/help', label: 'Get help' },
  { href: '/involve', label: 'Get involved' },
]

/**
 * Desktop pill navigation.
 *
 * - Fixed to the top, floating as a frosted "pill" (backdrop-blur) that stays
 *   persistent while scrolling; it condenses its shadow once you leave the top.
 * - The sequential intro (brand → links → CTA) is pure CSS driven by the `--i`
 *   index on each `[data-intro]` child, so it works before hydration and can
 *   never leave the nav invisible if JavaScript fails.
 * - Hidden below 761px, where the floating bottom dock takes over; the page's
 *   legacy in-flow header is hidden at the same breakpoint, and `body` gains a
 *   top padding so nothing is clipped underneath the fixed bar.
 */
export function TopNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`topnav${scrolled ? ' is-scrolled' : ''}`} aria-label="Primary">
      <div className="topnav__pill">
        <Link href="/" className="topnav__brand" data-intro style={{ '--i': 0 } as CSSProperties}>
          <span>PROJECT</span>
          <strong>
            RE<em>S</em>ET
          </strong>
        </Link>

        <div className="topnav__links">
          {LINKS.map((link, i) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                data-intro
                style={{ '--i': i + 1 } as CSSProperties}
                className={active ? 'is-active' : undefined}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <Link
          href="/contact"
          className="outline-button topnav__cta"
          data-intro
          style={{ '--i': LINKS.length + 1 } as CSSProperties}
        >
          Talk to us
          <Chat size={16} strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </div>
    </nav>
  )
}
