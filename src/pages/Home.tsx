import { Reveal } from '../components/Reveal'
import { SpringButton } from '../components/SpringButton'

const pillars = [
  {
    index: '01',
    title: 'Prevent before crisis',
    copy: 'Practical, evidence-informed education before harmful use escalates.',
  },
  {
    index: '02',
    title: 'Make help easier',
    copy: 'Approachable, confidential and non-judgmental entry points into support.',
  },
  {
    index: '03',
    title: 'Mobilize students',
    copy: 'Peer advocates who can identify concerns, listen safely and refer appropriately.',
  },
]

export function Home() {
  return (
    <div className="page">
      <section className="hero">
        <Reveal>
          <div className="eyebrow">University of Ibadan</div>
          <h1 className="display">A quieter way to choose a healthier life.</h1>
          <p className="lede">
            Project RESET is a student-led awareness movement for substance-misuse
            prevention, early support and recovery-friendly campus communities —
            beginning at UI, built to travel.
          </p>
          <div className="actions">
            <SpringButton to="/help">I need support</SpringButton>
            <SpringButton to="/about" variant="ghost">
              What RESET is
            </SpringButton>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <h2 className="section-title">Designed for dignity, not spectacle.</h2>
          <p className="section-copy">
            Seeking help should be met with confidentiality, compassion and
            practical pathways. We change the narrative without stigmatizing
            people who use substances.
          </p>
        </Reveal>
        <div className="grid-3">
          {pillars.map((item, i) => (
            <Reveal key={item.index} delay={i * 80}>
              <article className="card">
                <div className="card-index">{item.index}</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section split">
        <Reveal>
          <div className="media-frame">
            <img src="/brand/wordmark.jpg" alt="Project RESET wordmark" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="quote">
            Clinical care stays with qualified professionals. RESET is the
            frontline bridge: advocacy, confidential peer intake, referral and
            psychoeducation.
          </p>
          <div className="actions">
            <SpringButton to="/purpose" variant="ghost">
              Vision, mission, purpose
            </SpringButton>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
