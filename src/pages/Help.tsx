import { Reveal } from '../components/Reveal'
import { SpringButton } from '../components/SpringButton'

export function Help() {
  return (
    <div className="page">
      <section className="hero" style={{ minHeight: 'auto' }}>
        <Reveal>
          <div className="eyebrow">Confidential pathways</div>
          <h1 className="display">You can ask for help without being defined by it.</h1>
          <p className="lede">
            RESET is not a clinic. We make the first step smaller: a private
            conversation, a peer who listens, and a clear link to approved
            professional care.
          </p>
          <div className="actions">
            <SpringButton to="/contact">Reach the RESET desk</SpringButton>
            <SpringButton to="/about" variant="ghost">
              How RESET works
            </SpringButton>
          </div>
          <div className="banner">
            If you or someone near you is in immediate danger, contact campus
            security or local emergency services first. Clinical care remains
            with qualified professionals and approved referral pathways through
            the CDCC, Student Affairs Division.
          </div>
        </Reveal>
      </section>

      <section className="section grid-3">
        {[
          {
            title: 'Peer intake',
            copy: 'Trained student advocates provide confidential, non-judgmental first conversations across halls and faculties.',
          },
          {
            title: 'Referral linkage',
            copy: 'We connect you to appropriate professional care rather than substituting for it.',
          },
          {
            title: 'Psychoeducation',
            copy: 'Credible knowledge and life skills — before a situation becomes a crisis.',
          },
        ].map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <article className="card">
              <div className="card-index">0{i + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  )
}
