import type { ComponentType } from 'react'
import { About } from '../pages/About'
import { Purpose } from '../pages/Purpose'
import { Help } from '../pages/Help'
import { Involve } from '../pages/Involve'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { SECTIONS } from '../lib/sections'

/**
 * The mobile layout: one continuous, vertically scrolling page.
 *
 * Instead of routing between six views on small screens, every section is
 * stacked in reading order and given its section id, so the floating bottom
 * nav can scroll-spy it and jump to it. Each page component is reused exactly
 * as it renders on desktop — no duplicated copy, no divergent markup — and its
 * own PageHero acts as the section header.
 *
 * The click interception that turns internal route links into smooth section
 * scrolls lives in Layout (it also covers the footer), not here.
 */
export function ContinuousPage() {
  const order: Record<string, ComponentType> = {
    home: Home,
    about: About,
    purpose: Purpose,
    help: Help,
    involve: Involve,
    contact: Contact,
  }

  return (
    <div className="continuous">
      {SECTIONS.map((section) => {
        const Page = order[section.id]
        if (!Page) return null
        return (
          <section
            key={section.id}
            id={section.id}
            className="csec"
            data-section={section.id}
            aria-label={section.label}
          >
            <Page />
          </section>
        )
      })}
    </div>
  )
}
