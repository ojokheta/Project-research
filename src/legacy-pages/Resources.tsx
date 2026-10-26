import { useMemo, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { PageHero } from '../components/PageHero'
import { SpringButton } from '../components/SpringButton'

type Resource = { name: string; category: 'Campus care' | 'Peer support' | 'Guides'; description: string; availability: string; initials: string; color: string }

const resources: Resource[] = [
  { name: 'CDCC Counselling', category: 'Campus care', description: 'Confidential counselling and professional guidance through the Career Development & Counselling Centre.', availability: 'By appointment', initials: 'CD', color: 'mint' },
  { name: 'University Health Services', category: 'Campus care', description: 'Medical support and a route to appropriate specialist care when your wellbeing needs more attention.', availability: 'Campus clinic', initials: 'UH', color: 'blue' },
  { name: 'RESET Connect', category: 'Peer support', description: 'A low-pressure first conversation with a trained student peer who can help you consider next steps.', availability: 'Private first contact', initials: 'RC', color: 'lavender' },
  { name: 'Recovery-friendly community', category: 'Peer support', description: 'Connection, routine, and encouragement for students rebuilding healthier patterns at their own pace.', availability: 'Student-led', initials: 'RF', color: 'peach' },
  { name: 'Starting a conversation', category: 'Guides', description: 'A short guide for finding words when you want to support a friend—or ask for support yourself.', availability: '5 minute read', initials: '↗', color: 'sage' },
  { name: 'Understanding substance use', category: 'Guides', description: 'Clear, non-shaming information about risk, coping, and where professional support can help.', availability: 'Self-guided', initials: 'i', color: 'rose' },
]

function ResourceCard({ resource }: { resource: Resource }) {
  const [hovered, setHovered] = useState(false)
  const style = useSpring({ y: hovered ? -7 : 0, scale: hovered ? 1.012 : 1, config: { tension: 280, friction: 18 } })
  return <animated.article className="directory-card" style={{ transform: style.y.to(y => `translateY(${y}px) scale(${style.scale.get()})`) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
    <span className={`directory-card__avatar directory-card__avatar--${resource.color}`}>{resource.initials}</span>
    <div className="directory-card__category">{resource.category}</div>
    <h2>{resource.name}</h2><p>{resource.description}</p>
    <footer><span>{resource.availability}</span><button aria-label={`Open ${resource.name}`}>↗</button></footer>
  </animated.article>
}

export function Resources() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('All')
  const filters = ['All', 'Campus care', 'Peer support', 'Guides']
  const shown = useMemo(() => resources.filter(resource => (active === 'All' || resource.category === active) && `${resource.name} ${resource.description}`.toLowerCase().includes(query.toLowerCase())), [active, query])
  return <>
    <PageHero eyebrow="Resource directory" title={<>Support that meets you <em>where you are.</em></>} lede="A considered collection of campus support, student-led connection, and practical guides. Explore quietly, then choose what feels useful." />
    <section className="directory band band--flush-top"><div className="container">
      <div className="directory-tools"><label className="directory-search"><span aria-hidden="true">⌕</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search support, guides, or services" aria-label="Search resources" /></label><div className="directory-filters" aria-label="Resource categories">{filters.map(filter => <button key={filter} className={active === filter ? 'is-selected' : ''} onClick={() => setActive(filter)}>{filter}</button>)}</div></div>
      <p className="directory-result" aria-live="polite">{shown.length} {shown.length === 1 ? 'place' : 'places'} to start</p>
      <div className="directory-grid">{shown.map(resource => <ResourceCard key={resource.name} resource={resource} />)}</div>
      {shown.length === 0 && <div className="directory-empty"><p>Nothing quite matches that search.</p><SpringButton onClick={() => { setQuery(''); setActive('All') }} variant="ghost" size="sm">Show all resources</SpringButton></div>}
    </div></section>
  </>
}
