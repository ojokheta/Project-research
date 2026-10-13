import { Reveal } from '../components/Reveal'

const purposes = [
  {
    title: 'Prevent before crisis',
    copy: 'Deliver practical, evidence-informed education before harmful use escalates.',
  },
  {
    title: 'Make help easier',
    copy: 'Create approachable, confidential and non-judgmental entry points into support.',
  },
  {
    title: 'Mobilize students',
    copy: 'Train responsible peer advocates who can identify concerns, listen safely and refer appropriately.',
  },
  {
    title: 'Change the narrative',
    copy: 'Challenge shame, misinformation and normalization without stigmatizing people who use substances.',
  },
  {
    title: 'Build a replicable model',
    copy: 'Document what works at UI so other institutions and communities can adapt it.',
  },
]

export function Purpose() {
  return (
    <div className="page">
      <section className="hero" style={{ minHeight: 'auto', paddingBottom: 12 }}>
        <Reveal>
          <div className="eyebrow">Framework</div>
          <h1 className="display">Vision. Mission. Purpose.</h1>
        </Reveal>
      </section>

      <section className="section grid-2">
        <Reveal>
          <article className="card">
            <div className="card-index">Vision</div>
            <h3>Healthy, purposeful lives.</h3>
            <p>
              To build a world where students and young people can choose
              healthy, purposeful lives free from the destructive effects of
              substance misuse and addiction — and where seeking help is met
              with dignity, confidentiality, compassion and practical support.
            </p>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="card">
            <div className="card-index">Mission</div>
            <h3>Prevent. Equip. Connect.</h3>
            <p>
              To prevent substance misuse, reduce stigma, equip young people
              with credible knowledge and life skills, create safe pathways to
              early help, strengthen peer support and connect affected students
              to appropriate professional care — beginning at the University of
              Ibadan and expanding through partnerships across Nigeria, Africa
              and the world.
            </p>
          </article>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <h2 className="section-title">What we exist to do</h2>
        </Reveal>
        <div className="grid-3">
          {purposes.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="card">
                <div className="card-index">0{i + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="media-frame">
            <img
              src="/brand/framework.jpg"
              alt="Project RESET vision, mission and purpose"
            />
          </div>
        </Reveal>
      </section>
    </div>
  )
}
