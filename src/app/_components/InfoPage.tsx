import type { ReactNode } from 'react'
import { SiteFooter } from './SiteFooter'

type Item = { title: string; body: string }

export function InfoPage({ title, lede, sections, lead }: { title: string; lede: string; sections: { heading: string; intro?: string; items: Item[] }[]; lead?: ReactNode }) {
  return <main><header className="header"><a className="logo" href="/">PROJECT <strong>RE<span>S</span>ET</strong></a><nav><a href="/about">About</a><a href="/purpose">Purpose</a><a href="/help">Get help</a><a href="/involve">Get involved</a></nav><a className="outline-button" href="/contact">Talk to us</a></header><section className="inner-hero" data-reveal="30"><h1>{title}</h1><p>{lede}</p></section>{lead}{sections.map(section=><section className="info-section" key={section.heading} data-reveal="36"><div><h2 className="info-group">{section.heading}</h2>{section.intro&&<p className="section-intro">{section.intro}</p>}</div><div className="info-list" data-reveal-group="">{section.items.map((item,index)=><article key={item.title} data-reveal-child=""><span data-anime-icon="">{String(index+1).padStart(2,'0')}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>)}<SiteFooter /></main>
}
