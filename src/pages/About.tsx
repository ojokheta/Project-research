import { Reveal } from '../components/Reveal'
import { PageHero } from '../components/PageHero'
import { SpringButton, ArrowLink } from '../components/SpringButton'

const mandate = [
  'Awareness and prevention campaigns',
  'Peer education and supervised peer support',
  'Confidential first-contact, intake and listening',
  'Referral and follow-up linkage to qualified services',
  'Research, needs assessment and impact measurement',
  'Campus advocacy and stigma reduction',
  'Digital education and anonymous access pathways',
  'Partnership development and community outreach',
]

const services = [
  {
    t: 'Psychological & personal counselling',
    d: 'The professional care RESET refers into — never competes with.',
  },
  {
    t: 'Academic support',
    d: 'Because substance-related difficulty rarely stays in one part of a life.',
  },
  {
    t: 'Career guidance',
    d: 'Part of the holistic student support CDCC already provides.',
  },
  {
    t: 'Crisis intervention & referral',
    d: 'Including escalation to University Health Services where appropriate.',
  },
]

const ethics = [
  {
    t: 'No volunteer diagnoses or treats',
    d: 'Clinical care stays with qualified professionals and approved referral pathways. Peer volunteers listen, support within scope, and refer.',
  },
  {
    t: 'No promise of absolute confidentiality',
    d: 'Where safeguarding or emergency escalation is required, information is escalated under applicable policy — and we say so plainly, upfront.',
  },
  {
    t: 'Collect only what is necessary',
    d: 'Sensitive information is gathered only when it is needed, and handled through approved systems.',
  },
  {
    t: 'Escalate high risk immediately',
    d: 'Emergency and high-risk situations go straight to qualified professionals and the appropriate university or health services.',
  },
  {
    t: 'Participation is voluntary',
    d: 'Support is offered, never imposed. Engagement is respectful and student-led.',
  },
  {
    t: 'Never identify someone without consent',
    d: 'Public communications avoid identifying affected individuals without informed consent — including in campaign material and stories.',
  },
]

export function About() {
  return (
    <>
      <PageHero
        eyebrow="What is Project RESET"
        title={
          <>
            A long-term movement, <em>not a campaign week.</em>
          </>
        }
        lede="RESET originates at the University of Ibadan and is designed to grow into a scalable model for addiction and substance-abuse prevention, early support, advocacy, peer education, referral linkage and recovery-friendly communities."
        actions={
          <>
            <SpringButton to="/involve">Become a peer advocate</SpringButton>
            <SpringButton to="/purpose" variant="ghost">
              Vision &amp; purpose
            </SpringButton>
          </>
        }
      />

      {/* ---------- executive summary ---------- */}
      <section className="band band--flush-top">
        <div className="container split split--top">
          <div className="sticky-col">
            <Reveal>
              <div className="frame frame--tall">
                <img
                  src="/brand/about.jpg"
                  alt="Project RESET movement framework poster"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="eyebrow">Executive summary</div>
              <p className="copy" style={{ marginTop: 20, fontSize: 'var(--step-1)' }}>
                PROJECT RESET is a long-term, student-led movement originating at
                the University of Ibadan, designed to grow into a scalable model
                for addiction and substance-abuse prevention, early support,
                advocacy, peer education, referral linkage and
                recovery-friendly communities.
              </p>
              <p className="copy">
                Its institutional starting point is a volunteer partnership with
                the Career Development &amp; Counselling Centre (CDCC), Student
                Affairs Division. The volunteer arm’s core mandate is Addiction
                &amp; Substance Abuse Prevention, Advocacy, and Peer Counselling
                Support — a frontline bridge for student-led advocacy,
                confidential peer intake, referral linkage and psychoeducation
                across halls and faculties.
              </p>
              <p className="copy">
                The movement expands that brief into a complete framework while
                preserving the original institutional role, and while ensuring
                that clinical care remains with qualified professionals working
                through approved referral pathways.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <div className="callout" style={{ marginTop: 32 }}>
                <span className="callout__icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 1.8 2.8 4.2v4.3c0 3.4 2.5 6.6 6.2 7.7 3.7-1.1 6.2-4.3 6.2-7.7V4.2L9 1.8Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <path d="M6.4 9.1 8.3 11l3.4-3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3>The boundary that makes this work</h3>
                  <p>
                    RESET is the bridge, not the clinic. Peer volunteers never
                    diagnose, never treat, and never quietly absorb work that
                    belongs to professionals — which is precisely what makes the
                    first conversation safe enough to have.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- mandate ---------- */}
      <section className="band">
        <div className="container split split--top">
          <div className="sticky-col">
            <Reveal>
              <div className="eyebrow">Core mandate &amp; scope</div>
              <h2 className="title" style={{ marginTop: 18 }}>
                Eight things this unit exists to do.
              </h2>
              <p className="copy" style={{ marginTop: 18 }}>
                The volunteer unit formally specialises in prevention, advocacy
                and peer counselling support. It complements CDCC’s existing
                psychological, academic and career functions rather than
                replacing professional counselling or medical care.
              </p>
            </Reveal>
          </div>

          <div className="rows">
            {mandate.map((item, i) => (
              <Reveal key={item} delay={i * 45}>
                <div className="row" style={{ gridTemplateColumns: '56px 1fr' }}>
                  <span className="row__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="row__body">
                    <h3 style={{ fontSize: 'var(--step-1)', marginBottom: 0 }}>
                      {item}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- institutional context ---------- */}
      <section className="band band--light">
        <div className="container split split--top">
          <div className="sticky-col">
            <Reveal>
              <div className="eyebrow">Institutional context</div>
              <h2 className="title" style={{ marginTop: 18 }}>
                Rooted in an existing support structure.
              </h2>
              <p className="copy" style={{ marginTop: 18 }}>
                The source brief positions the CDCC under the Student Affairs
                Division as a key institutional support structure for students’
                holistic well-being, psychological stability and career
                advancement. RESET sits inside that structure — not beside it.
              </p>
            </Reveal>
          </div>

          <div>
            <div className="grid grid--2">
              {services.map((s, i) => (
                <Reveal key={s.t} delay={i * 60}>
                  <article className="card card--flat" style={{ height: '100%' }}>
                    <h3 style={{ fontSize: 'var(--step-1)' }}>{s.t}</h3>
                    <p style={{ marginTop: 10 }}>{s.d}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={160}>
              <div className="actions" style={{ marginTop: 32 }}>
                <ArrowLink to="/help">See how a referral works</ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- theory of change ---------- */}
      <section className="band">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Theory of change</div>
            <p
              className="quote quote--wide"
              style={{ marginTop: 26, maxWidth: '24ch' }}
            >
              Credible information, real skills, a safe first step and a clear
              pathway — <em style={{ fontStyle: 'normal', color: 'var(--lime)' }}>then earlier intervention.</em>
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid--3" style={{ marginTop: 'clamp(34px, 4vw, 52px)' }}>
              <article className="card">
                <div className="card__index">IF</div>
                <h3 style={{ marginTop: 14, fontSize: 'var(--step-1)' }}>
                  Young people get four things
                </h3>
                <p style={{ marginTop: 10 }}>
                  Credible information, practical prevention skills, safe
                  peer-level entry points and clear referral pathways.
                </p>
              </article>
              <article className="card">
                <div className="card__index">THEN</div>
                <h3 style={{ marginTop: 14, fontSize: 'var(--step-1)' }}>
                  Harm is addressed earlier
                </h3>
                <p style={{ marginTop: 10 }}>
                  Harmful use can be caught sooner, stigma can decrease, and more
                  people can reach appropriate professional help.
                </p>
              </article>
              <article className="card">
                <div className="card__index">AND IF</div>
                <h3 style={{ marginTop: 14, fontSize: 'var(--step-1)' }}>
                  The model is documented
                </h3>
                <p style={{ marginTop: 10 }}>
                  Measured and responsibly replicated, the impact extends beyond
                  the University of Ibadan to institutions and communities
                  across Nigeria and beyond.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- safeguarding ---------- */}
      <section className="band band--tight">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Safeguarding &amp; ethics</div>
            <h2 className="title" style={{ marginTop: 18, maxWidth: '18ch' }}>
              The rules we do not bend.
            </h2>
            <p className="copy" style={{ marginTop: 18 }}>
              Clear referral, supervision and incident-response protocols must be
              in place before independent peer-support operations begin. These
              commitments are not disclaimers — they are the design.
            </p>
          </Reveal>

          <div className="grid grid--3" style={{ marginTop: 'clamp(34px, 4vw, 52px)' }}>
            {ethics.map((e, i) => (
              <Reveal key={e.t} delay={(i % 3) * 60}>
                <article className="card">
                  <div className="card__index">{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ marginTop: 14, fontSize: 'var(--step-1)' }}>{e.t}</h3>
                  <p style={{ marginTop: 10 }}>{e.d}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <div className="actions" style={{ marginTop: 40 }}>
              <SpringButton to="/involve">Read the volunteer commitments</SpringButton>
              <SpringButton to="/contact" variant="ghost">
                Ask us something
              </SpringButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
