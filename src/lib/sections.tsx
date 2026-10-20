import type { ReactNode } from 'react'

export type SectionDef = {
  id: string
  path: string
  label: string
  short: string
  icon: ReactNode
  bg: string
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/**
 * The single source of truth for the site's sections, in reading order.
 *
 * The same list drives the desktop top nav, the mobile floating bottom nav,
 * the continuous mobile page, and the scroll-driven background backdrop — so
 * they can never drift out of sync.
 */
export const SECTIONS: SectionDef[] = [
  {
    id: 'home',
    path: '/',
    label: 'Home',
    short: 'Home',
    bg: '/images/bg-06.jpg',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" {...stroke} aria-hidden="true">
        <path d="M4 10.5 12 4l8 6.5" />
        <path d="M6 10v9h12v-9" />
        <path d="M10 19v-5h4v5" />
      </svg>
    ),
  },
  {
    id: 'about',
    path: '/about',
    label: 'About RESET',
    short: 'About',
    bg: '/images/bg-03.jpg',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" {...stroke} aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 11v5" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    id: 'purpose',
    path: '/purpose',
    label: 'Vision & purpose',
    short: 'Purpose',
    bg: '/images/bg-02.jpg',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" {...stroke} aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'help',
    path: '/help',
    label: 'Get help',
    short: 'Help',
    bg: '/images/bg-11.jpg',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" {...stroke} aria-hidden="true">
        <path d="M12 20s-7-4.35-7-9.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 7 2.5C19 15.65 12 20 12 20Z" />
      </svg>
    ),
  },
  {
    id: 'involve',
    path: '/involve',
    label: 'Get involved',
    short: 'Join',
    bg: '/images/bg-07.jpg',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" {...stroke} aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M4 19c0-3 2.5-5 5-5s5 2 5 5" />
        <path d="M17 8h4M19 6v4" />
      </svg>
    ),
  },
  {
    id: 'contact',
    path: '/contact',
    label: 'Contact',
    short: 'Contact',
    bg: '/images/bg-05.jpg',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" {...stroke} aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="m4.5 7 7.5 5.5L19.5 7" />
      </svg>
    ),
  },
]

/** Route path → section id ("/" → "home", "/help" → "help"). */
export function pathToSectionId(pathname: string): string {
  const clean = pathname.replace(/\/+$/, '') || '/'
  const match = SECTIONS.find((s) => s.path === clean)
  return match ? match.id : 'home'
}

/** Section id → route path. */
export function sectionIdToPath(id: string): string {
  return SECTIONS.find((s) => s.id === id)?.path ?? '/'
}
