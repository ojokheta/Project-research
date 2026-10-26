import { Reveal } from '../components/Reveal'
import { ArrowLink, SpringButton } from '../components/SpringButton'

const pillars = [
  { icon: '◌', title: 'Notice sooner', text: 'Practical, stigma-free education for the moments before a concern becomes a crisis.', tone: 'sage' },
  { icon: '↗', title: 'Talk safely', text: 'A private first conversation with a trained peer who listens without a lecture.', tone: 'blue' },
  { icon: '⌁', title: 'Keep going', text: 'Warm links to professional care, community, and recovery-friendly routines.', tone: 'lavender' },
]

const pathways = [
  ['01', 'Find your way in', 'Start anonymously online, through a QR code, or with someone you trust.'],
  ['02', 'Be heard', 'Share only what feels comfortable with a peer advocate.'],
  ['03', 'Choose a next step', 'Get connected to the support that fits your situation.'],
]

export function Home() {
  return (
    <>
      <section className="renew-hero container">
        <Reveal distance={12}><p className="renew-hero__place">Project RESET · University of Ibadan</p></Reveal>
        <div className="renew-hero__grid">
          <div>
            <Reveal delay={80} distance={18}><h1>A calmer way<br />to begin <em>healing.</em></h1></Reveal>
            <Reveal delay={160} distance={18}><p className="renew-hero__copy">A student-led space for honest conversations about substance use, early support, and finding your footing again.</p></Reveal>
            <Reveal delay={240} distance={14}><div className="actions renew-hero__actions"><SpringButton to="/help">Get early help <span aria-hidden="true">↗</span></SpringButton><SpringButton to="/resources" variant="ghost">Explore support</SpringButton></div></Reveal>
          </div>
          <Reveal delay={260} distance={20}><aside className="welcome-note"><span className="welcome-note__orb" aria-hidden="true" /><p>“You do not have to have the right words to ask for support.”</p><div><span>Here with you</span><b>RESET Connect</b></div></aside></Reveal>
        </div>
        <Reveal delay={350} distance={10}><div className="hero-signals" aria-label="RESET commitments"><span><i /> Student-led</span><span><i /> Confidential</span><span><i /> No judgment</span></div></Reveal>
      </section>

      <section className="band intro-band"><div className="container intro-layout"><Reveal><p className="section-kicker">Support should feel human</p></Reveal><Reveal delay={70}><h2 className="intro-statement">There is no single “right” way to start feeling better. There is simply a place to begin.</h2></Reveal><Reveal delay={130}><p className="copy">RESET helps University of Ibadan students navigate substance-related concerns with clarity, kindness, and connections that respect their choices.</p></Reveal></div></section>

      <section className="band pillars-band"><div className="container"><div className="section-heading"><div><p className="section-kicker">Built around real student life</p><h2 className="title">Small openings can make a real difference.</h2></div><ArrowLink to="/about" accent>How RESET works</ArrowLink></div><div className="organic-grid">{pillars.map((pillar, index) => <Reveal key={pillar.title} delay={index * 80}><article className={`pillar-card pillar-card--${pillar.tone}`}><span className="pillar-card__icon">{pillar.icon}</span><h3>{pillar.title}</h3><p>{pillar.text}</p><span className="pillar-card__count">0{index + 1}</span></article></Reveal>)}</div></div></section>

      <section className="band band--light pathway-band"><div className="container pathway-layout"><div><Reveal><p className="section-kicker">A gentler first step</p><h2 className="title">Help that moves at your pace.</h2><p className="copy">No diagnosis. No pressure to disclose everything. Just a clear, private path towards the right kind of care.</p><div className="actions" style={{ marginTop: 28 }}><SpringButton to="/help" variant="light">See your options <span aria-hidden="true">↗</span></SpringButton></div></Reveal></div><div className="pathway-list">{pathways.map(([number, title, text], index) => <Reveal key={number} delay={90 + index * 70}><article><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}</div></div></section>

      <section className="band resource-prompt"><div className="container resource-prompt__inner"><Reveal><p className="section-kicker">Not sure where to turn?</p><h2 className="display--md">A good next step can be very small.</h2><p className="lede">Browse campus services, gentle self-guides, and trusted points of contact—without needing to explain yourself first.</p><div className="actions" style={{ marginTop: 30 }}><SpringButton to="/resources" variant="lime">Browse the support directory <span aria-hidden="true">↗</span></SpringButton></div></Reveal></div></section>
    </>
  )
}
