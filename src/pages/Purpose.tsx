import { Reveal } from '../components/Reveal'
import { PageHero } from '../components/PageHero'
import { SpringButton, ArrowLink } from '../components/SpringButton'

const purposes = [
  {
    n: '01',
    t: 'Prevent before crisis',
    d: 'Deliver practical, evidence-informed education before harmful use escalates.',
  },
  {
    n: '02',
    t: 'Make help easier',
    d: 'Create approachable, confidential and non-judgmental entry points into support.',
  },
  {
    n: '03',
    t: 'Mobilize students',
    d: 'Train responsible peer advocates who can identify concerns, listen safely and refer appropriately.',
  },
  {
    n: '04',
    t: 'Change the narrative',
    d: 'Challenge shame, misinformation and normalization without stigmatizing people who use substances.',
  },
  {
    n: '05',
    t: 'Build a replicable model',
    d: 'Document what works at UI so other institutions and communities can adapt it.',
  },
]

const roadmap = [
  {
    phase: 'Phase 01',
    years: '2026 – 2027',
    t: 'Foundation',
    d: 'Secure institutional alignment, establish governance, train the founding volunteer cohort, develop protocols, launch pilot campaigns, establish referral pathways and create baseline measures.',
  },
  {
    phase: 'Phase 02',
    years: '2027 – 2028',
    t: 'Campus expansion',
    d: 'Expand across halls and faculties, strengthen digital access, develop student ambassadors and publish annual impact reports.',
  },
  {
    phase: 'Phase 03',
    years: '2028 – 2029',
    t: 'Nigeria network',
    d: 'Adapt the model for other universities and youth communities through institutional partnerships, training-of-trainers and standardized toolkits.',
  },
  {
    phase: 'Phase 04',
    years: '2029 – 2030+',
    t: 'Africa & global partnerships',
    d: 'Build international collaborations, knowledge exchange, research partnerships and a global youth network rooted in the lessons learned at UI.',
  },
]

export function Purpose() {
  return (
    <>
      <PageHero
        eyebrow="Vision · Mission · Purpose"
        title={
          <>
            A renewal movement, <em>not a punitive campaign.</em>
          </>
        }
        lede="RESET • REBUILD • RECOVER • RISE. Core language across everything we publish emphasises second chances, courage and prevention."
        actions={
          <>
            <SpringButton to="/involve">Get involved</SpringButton>
            <SpringButton to="/contact" variant="ghost">
              Partner with us
            </SpringButton>
          </>
        }
      />

      {/* ---------- vision ---------- */}
      <section className="band band--flush-top">
        <div className="container">
          <div className="split split--even">
            <Reveal>
              <article className="card" style={{ height: '100%' }}>
                <div className="card__index">Vision</div>
                <p
                  style={{
                    marginTop: 22,
                    fontSize: 'var(--step-3)',
                    lineHeight: 1.24,
                    letterSpacing: '-0.028em',
                    color: 'var(--text)',
                    fontWeight: 480,
                  }}
                >
                  To build a world where students and young people can choose
                  healthy, purposeful lives free from the destructive effects of
                  substance misuse and addiction — and where seeking help is met
                  with dignity, confidentiality, compassion and practical
                  support.
                </p>
              </article>
            </Reveal>

            <Reveal delay={90}>
              <article className="card" style={{ height: '100%' }}>
                <div className="card__index">Mission</div>
                <p
                  style={{
                    marginTop: 22,
                    fontSize: 'var(--step-3)',
                    lineHeight: 1.24,
                    letterSpacing: '-0.028em',
                    color: 'var(--text)',
                    fontWeight: 480,
                  }}
                >
                  To prevent substance misuse, reduce stigma, equip young people
                  with credible knowledge and life skills, create safe pathways
                  to early help, strengthen peer support and connect affected
                  students to appropriate professional care — beginning at the
                  University of Ibadan and expanding across Nigeria, Africa and
                  the world.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- purpose ---------- */}
      <section className="band band--light">
        <div className="container split split--top">
          <div className="sticky-col">
            <Reveal>
              <div className="eyebrow">Movement purpose</div>
              <h2 className="title" style={{ marginTop: 18 }}>
                Five reasons this exists.
              </h2>
              <p className="copy" style={{ marginTop: 18 }}>
                Each one is an operating commitment, not a slogan. Together they
                decide what we run, what we decline, and how we measure whether
                any of it worked.
              </p>
            </Reveal>
          </div>

          <div className="rows">
            {purposes.map((p, i) => (
              <Reveal key={p.n} delay={i * 55}>
                <div className="row">
                  <span className="row__num">{p.n}</span>
                  <div className="row__body">
                    <h3>{p.t}</h3>
                    <p>{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- roadmap ---------- */}
      <section className="band">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Five-year roadmap</div>
            <h2 className="title" style={{ marginTop: 18, maxWidth: '16ch' }}>
              Start local. Learn deeply. Scale with purpose.
            </h2>
          </Reveal>

          <div className="timeline" style={{ marginTop: 'clamp(34px, 4vw, 52px)' }}>
            {roadmap.map((r, i) => (
              <Reveal key={r.phase} delay={i * 60}>
                <div className="timeline__item">
                  <div className="timeline__phase">
                    {r.phase}
                    <span className="timeline__years">{r.years}</span>
                  </div>
                  <div>
                    <h3>{r.t}</h3>
                    <p>{r.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- success + founding statement ---------- */}
      <section className="band band--tight">
        <div className="container split split--even">
          <Reveal>
            <div className="eyebrow">Definition of success</div>
            <p className="quote" style={{ marginTop: 24 }}>
              Seeking help becomes easier than hiding.
            </p>
            <p className="copy" style={{ marginTop: 22 }}>
              Prevention becomes part of student culture. Peer leaders become
              responsible bridges to professional support. And the University of
              Ibadan becomes a credible starting point for a scalable,
              youth-focused prevention and support model.
            </p>
          </Reveal>

          <Reveal delay={110}>
            <div className="eyebrow">Founding statement</div>
            <p className="copy" style={{ marginTop: 24, fontSize: 'var(--step-1)' }}>
              Project RESET begins at the University of Ibadan, but its purpose
              is bigger than one campus. We are building a movement that
              believes young people deserve accurate information, safe support,
              dignity in recovery and the opportunity to reclaim their future.
            </p>
            <p className="copy">
              We start local, learn deeply, build responsibly and scale with
              purpose.
            </p>
            <div className="actions" style={{ marginTop: 30 }}>
              <ArrowLink to="/involve" accent>
                Join the founding cohort
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
