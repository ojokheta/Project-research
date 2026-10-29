import { SiteFooter } from './SiteFooter'

type Item = { title: string; body: string }

export function InfoPage({ eyebrow, title, lede, sections }: { eyebrow: string; title: string; lede: string; sections: { heading: string; intro?: string; items: Item[] }[] }) {
  return <main><header className="header"><a className="logo" href="/">PROJECT <strong>RE<span>S</span>ET</strong></a><nav><a href="/about">About</a><a href="/purpose">Purpose</a><a href="/help">Get help</a><a href="/involve">Get involved</a></nav><a className="outline-button" href="/contact">Talk to us</a></header><section className="inner-hero" data-reveal="30"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{lede}</p></section>{sections.map(section=><section className="info-section" key={section.heading} data-reveal="36"><div><p className="eyebrow">{section.heading}</p>{section.intro&&<p className="section-intro">{section.intro}</p>}</div><div className="info-list" data-reveal-group="">{section.items.map((item,index)=><article key={item.title} data-reveal-child=""><span data-anime-icon="">{String(index+1).padStart(2,'0')}</span><h2>{item.title}</h2><p>{item.body}</p></article>)}</div></section>)}<SiteFooter /></main>
}
