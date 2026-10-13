import { Reveal } from '../components/Reveal'
import { SpringButton } from '../components/SpringButton'

export function Involve() {
  return (
    <div className="page">
      <section className="hero" style={{ minHeight: 'auto' }}>
        <Reveal>
          <div className="eyebrow">Volunteer arm</div>
          <h1 className="display">Be the person someone can actually talk to.</h1>
          <p className="lede">
            RESET trains responsible peer advocates to identify concerns,
            listen safely and refer appropriately — a frontline bridge, never a
            substitute for care.
          </p>
          <div className="actions">
            <SpringButton to="/contact">Apply to volunteer</SpringButton>
          </div>
        </Reveal>
      </section>

      <section className="section grid-3">
        {[
          {
            title: 'Prevention',
            copy: 'Evidence-informed education in halls, faculties and student communities.',
          },
          {
            title: 'Advocacy',
            copy: 'Challenge shame and misinformation without stigmatizing people who use substances.',
          },
          {
            title: 'Peer support',
            copy: 'Confidential intake, warm referral and accompaniment through the first step.',
          },
        ].map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <article className="card">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  )
}
