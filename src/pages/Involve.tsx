import { Reveal } from '../components/Reveal'
import { PageHero } from '../components/PageHero'
import { SpringButton, ArrowLink } from '../components/SpringButton'

const roles = [
  {
    t: 'Movement / Project Lead',
    d: 'Overall strategy, partnerships and accountability.',
  },
  {
    t: 'Programme & Operations Lead',
    d: 'Programme delivery, schedules and activation logistics.',
  },
  {
    t: 'Peer Support Lead',
    d: 'Volunteer supervision and referral protocols.',
  },
  {
    t: 'Research & Impact Lead',
    d: 'Data, evaluation and reporting across the framework.',
  },
  {
    t: 'Communications & Media Lead',
    d: 'Campaigns, content and public education.',
  },
  {
    t: 'Partnerships Lead',
    d: 'Institutional, NGO and professional relationships.',
  },
  {
    t: 'Faculty / Hall Coordinators',
    d: 'Local mobilisation where students actually live and study.',
  },
  {
    t: 'Peer Volunteers',
    d: 'Awareness, listening within scope, and referral.',
  },
]

const curriculum = [
  'Understanding substance use, misuse, dependence and addiction',
  'Recognizing risk indicators and responding without judgment',
  'Active listening and basic supportive communication',
  'Confidentiality, consent, boundaries and safeguarding',
  'Referral pathways and crisis escalation',
  'Stigma, language and ethical advocacy',
  'Digital safety and anonymous engagement',
  'Campaign planning and public speaking',
  'Documentation and incident/reporting procedures',
  'Self-care, burnout prevention and peer-volunteer wellbeing',
]

const commitments = [
  {
    t: 'Stay inside your scope',
    d: 'All peer-support activity runs under approved CDCC protocols, clear role boundaries, confidentiality requirements and escalation procedures.',
  },
  {
    t: 'Refer, never treat',
    d: 'No diagnosis, no clinical advice. Your job is to listen well and connect people to the professionals whose job that is.',
  },
  {
    t: 'Escalate when it matters',
    d: 'High-risk and emergency situations go immediately to qualified professionals and the appropriate university or health services — even when it is hard.',
  },
  {
    t: 'Protect identities absolutely',
    d: 'Public communications never identify affected individuals without informed consent. Sensitive information is collected only when necessary.',
  },
  {
    t: 'Look after yourself too',
    d: 'Self-care and burnout prevention are part of the curriculum, not an afterthought. Peer volunteers need support as much as anyone.',
  },
]

const campaigns = [
  'Campus Drug Awareness March',
  'RESET Week',
  'Faculty & hall awareness visits',
  'Peer-led discussion circles',
  'Recovery & resilience storytelling',
  'Mental wellness workshops',
  'Exam-period prevention campaigns',
  'International awareness-day activations',
]

export function Involve() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer arm"
        title={
          <>
            Be the person someone <em>can actually talk to.</em>
          </>
        }
        lede="RESET trains responsible peer advocates to identify concerns, listen safely and refer appropriately — a frontline bridge to professional care, never a substitute for it."
        actions={
          <>
            <SpringButton to="/contact">Apply to volunteer</SpringButton>
            <SpringButton to="/help" variant="ghost">
              See what you would be bridging to
            </SpringButton>
          </>
        }
      />

      {/* ---------- roles ---------- */}
      <section className="band band--flush-top">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Volunteer structure</div>
            <h2 className="title" style={{ marginTop: 18, maxWidth: '18ch' }}>
              Eight roles. Every one of them supervised.
            </h2>
          </Reveal>

          <div className="grid grid--4" style={{ marginTop: 'clamp(34px, 4vw, 52px)' }}>
            {roles.map((r, i) => (
              <Reveal key={r.t} delay={(i % 4) * 60}>
                <article className="card" style={{ height: '100%' }}>
                  <div className="card__index">{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ marginTop: 14, fontSize: 'var(--step-1)' }}>{r.t}</h3>
                  <p style={{ marginTop: 10 }}>{r.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- curriculum ---------- */}
      <section className="band band--light">
        <div className="container split split--top">
          <div className="sticky-col">
            <Reveal>
              <div className="eyebrow">Training curriculum</div>
              <h2 className="title" style={{ marginTop: 18 }}>
                Ten modules before you sit with anyone.
              </h2>
              <p className="copy" style={{ marginTop: 18 }}>
                Volunteer orientation and training is an immediate action
                priority for the founding cohort. Nobody represents RESET without
                completing it.
              </p>
            </Reveal>
          </div>

          <div className="rows">
            {curriculum.map((item, i) => (
              <Reveal key={item} delay={i * 40}>
                <div className="row">
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

      {/* ---------- commitments ---------- */}
      <section className="band">
        <div className="container split split--top">
          <div className="sticky-col">
            <Reveal>
              <div className="eyebrow">What we ask of you</div>
              <h2 className="title" style={{ marginTop: 18 }}>
                The commitments behind the badge.
              </h2>
              <p className="copy" style={{ marginTop: 18 }}>
                The project maintains clear referral, supervision and
                incident-response protocols before independent peer-support
                operations begin. Volunteers hold those protocols, not their own
                judgement calls.
              </p>
              <div className="actions" style={{ marginTop: 26 }}>
                <ArrowLink to="/about" accent>
                  Read the safeguarding framework
                </ArrowLink>
              </div>
            </Reveal>
          </div>

          <div className="rows">
            {commitments.map((c, i) => (
              <Reveal key={c.t} delay={i * 55}>
                <div className="row">
                  <span className="row__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="row__body">
                    <h3>{c.t}</h3>
                    <p>{c.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- campaigns ---------- */}
      <section className="band band--tight">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Where volunteers show up</div>
            <h2 className="title" style={{ marginTop: 18, maxWidth: '17ch' }}>
              The campus calendar you would be joining.
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <ul className="grid grid--4" style={{ marginTop: 'clamp(30px, 4vw, 46px)' }}>
              {campaigns.map((c) => (
                <li key={c}>
                  <span className="tag" style={{ width: '100%' }}>
                    <span className="tag__dot" />
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div className="actions" style={{ marginTop: 42 }}>
              <SpringButton to="/contact">Apply to the founding cohort</SpringButton>
              <SpringButton to="/purpose" variant="ghost">
                Read the framework first
              </SpringButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
