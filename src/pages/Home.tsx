import { Reveal } from '../components/Reveal'
import { SpringButton, ArrowLink } from '../components/SpringButton'
import { Wordmark } from '../components/Wordmark'
import { Marquee } from '../components/Marquee'
import { StickyStory, type StoryStep } from '../components/StickyStory'
import { Counter } from '../components/Counter'

const problem = [
  {
    n: '01',
    title: 'The patterns have changed',
    body: 'Misuse of prescription medicines, nicotine vaping, shisha, synthetic cannabinoids and illicit psychoactive substances now sit alongside older patterns of use — and they rarely announce themselves.',
  },
  {
    n: '02',
    title: 'The pressure behind it is ordinary',
    body: 'Academic pressure, peer influence, curiosity, insomnia and self-medication. Nothing about the starting point looks dramatic, which is exactly why it escalates quietly.',
  },
  {
    n: '03',
    title: 'Asking for help still feels risky',
    body: 'Fear of sanctions. Stigma and shame. Worry that it will not stay confidential. Normalisation and denial. Simply not knowing that support exists.',
  },
]

const story: StoryStep[] = [
  {
    kicker: 'Prevention',
    title: 'Education lands before a crisis does.',
    body: 'Campus campaigns, hall and faculty engagements, workshops and myth-busting content — delivered while use is still experimental, not yet entrenched.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21c4.5-2.4 7-6 7-10.5V5.5L12 3 5 5.5v5C5 15 7.5 18.6 12 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    kicker: 'Peer intake',
    title: 'A conversation that starts without a form.',
    body: 'A trained student advocate listens — privately, without judgement and without a diagnosis. QR codes and anonymous entry points mean no one has to be seen asking.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 12.5c0 3.6-3.6 6.5-8 6.5-.9 0-1.8-.1-2.6-.35L4.5 20l1.2-3.2C4.6 15.6 4 14.1 4 12.5 4 8.9 7.6 6 12 6s8 2.9 8 6.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 11.5h6M9 14h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    kicker: 'Referral linkage',
    title: 'A warm handover, never a hand-off.',
    body: 'When professional care is the right answer, RESET walks the student to the door — CDCC counselling, University Health Services, or an approved referral pathway.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M10 13.5a4 4 0 0 0 5.7.3l2.6-2.6a4 4 0 0 0-5.7-5.7l-1.3 1.3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 10.5a4 4 0 0 0-5.7-.3l-2.6 2.6a4 4 0 0 0 5.7 5.7l1.3-1.3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    kicker: 'Follow-through',
    title: 'Nobody disappears after the referral.',
    body: 'Follow-up, recovery-friendly peer communities and healthy routines keep the door open. Reintegration is supported alongside professional care, not instead of it.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 12a8 8 0 1 1-2.5-5.8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 4v4.5h-4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const pillars = [
  {
    n: '01',
    t: 'Prevention & education',
    d: 'Campus campaigns, classroom and hall engagements, workshops, myth-busting content and life-skills education.',
  },
  {
    n: '02',
    t: 'Peer support & early help',
    d: 'Recruited, trained and supervised volunteers who listen, support within scope, and connect students to professional services.',
  },
  {
    n: '03',
    t: 'Advocacy & stigma reduction',
    d: 'A health-centred, dignity-first conversation about addiction and recovery — without stigmatizing people who use substances.',
  },
  {
    n: '04',
    t: 'Research & evidence',
    d: 'Ethical needs assessments, documented barriers and outcomes, and data used to improve what we run next.',
  },
  {
    n: '05',
    t: 'Digital access',
    d: 'Anonymous and low-barrier entry points, QR campaigns, educational media and verified referral directories.',
  },
  {
    n: '06',
    t: 'Recovery & reintegration',
    d: 'Recovery-friendly peer communities, healthy routines, mentorship and reintegration alongside professional care.',
  },
  {
    n: '07',
    t: 'Partnerships & scale',
    d: 'University units, health professionals, student organisations, NGOs, government agencies and responsible private partners.',
  },
]

const programmes = [
  { code: 'RESET Talks', d: 'Recurring educational sessions across departments.' },
  { code: 'RESET Campus', d: 'Hall and faculty prevention activations.' },
  { code: 'RESET Peer Network', d: 'Trained student ambassadors and peer supporters.' },
  { code: 'RESET Connect', d: 'Confidential, anonymous first contact and referral.' },
  { code: 'RESET Media', d: 'Short video, stories and educational campaigns.' },
  { code: 'RESET Research', d: 'Surveys, learning reports and annual impact reviews.' },
  { code: 'RESET Recovery', d: 'Supervised, recovery-supportive peer activity.' },
  { code: 'RESET Summit', d: 'Annual gathering of students, professionals and partners.' },
]

export function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero__mark-row">
          <Reveal distance={0}>
            <Wordmark kinetic className="hero__mark" />
          </Reveal>
        </div>

        <Reveal delay={420} distance={16}>
          <p className="hero__tagline">
            Reset your choices. <em>Rebuild your life.</em>
          </p>
        </Reveal>

        <Reveal delay={500} distance={14}>
          <p className="lede hero__lede">
            A student-led movement at the University of Ibadan for substance-misuse
            prevention, early support and recovery-friendly communities —
            confidential, non-judgmental, and built to travel beyond one campus.
          </p>
        </Reveal>

        <Reveal delay={580} distance={12}>
          <div className="actions hero__actions">
            <SpringButton to="/help">I need support</SpringButton>
            <SpringButton to="/involve" variant="ghost">
              Join the movement
            </SpringButton>
          </div>
        </Reveal>

        <Reveal delay={660} distance={10}>
          <div className="hero__meta">
            <span className="tag">
              <span className="tag__dot" /> Student-led
            </span>
            <span className="tag">
              <span className="tag__dot" /> CDCC · Student Affairs
            </span>
            <span className="tag">
              <span className="tag__dot" /> Confidential
            </span>
          </div>
        </Reveal>
      </section>

      <Marquee />

      {/* ---------- the problem ---------- */}
      <section className="band">
        <div className="container split split--top">
          <div className="sticky-col">
            <Reveal>
              <div className="eyebrow">The problem we answer</div>
              <h2 className="title" style={{ marginTop: 18 }}>
                It rarely starts with a crisis.
              </h2>
              <p className="copy" style={{ marginTop: 18 }}>
                The original brief identified changing patterns of substance use
                among tertiary students — and, just as importantly, the reasons
                students never put a hand up in the first place.
              </p>
              <div className="actions" style={{ marginTop: 26 }}>
                <ArrowLink to="/purpose" accent>
                  Read the full framework
                </ArrowLink>
              </div>
            </Reveal>
          </div>

          <div className="rows">
            {problem.map((item, i) => (
              <Reveal key={item.n} delay={i * 70}>
                <div className="row">
                  <span className="row__num">{item.n}</span>
                  <div className="row__body">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- scroll story ---------- */}
      <section className="band band--tight">
        <div className="container">
          <Reveal>
            <div className="eyebrow">How RESET works</div>
            <h2 className="title" style={{ marginTop: 18, maxWidth: '18ch' }}>
              Four steps between a student and real support.
            </h2>
          </Reveal>

          <div style={{ marginTop: 'clamp(40px, 6vw, 72px)' }}>
            <StickyStory steps={story} />
          </div>
        </div>
      </section>

      {/* ---------- numbers ---------- */}
      <section className="band band--tight">
        <div className="container">
          <Reveal>
            <div className="eyebrow">The framework in numbers</div>
          </Reveal>
          <div className="stats" style={{ marginTop: 34 }}>
            <Counter value={7} label="strategic pillars guiding the work" />
            <Counter value={8} delay={90} label="RESET programme arms in the architecture" />
            <Counter value={10} delay={180} label="modules in the peer volunteer curriculum" />
            <Counter value={5} delay={270} suffix="-year" label="roadmap from foundation to pan-African network" />
          </div>
        </div>
      </section>

      {/* ---------- pillars ---------- */}
      <section className="band">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Strategic pillars</div>
            <h2 className="title" style={{ marginTop: 18, maxWidth: '16ch' }}>
              Seven fronts, one movement.
            </h2>
          </Reveal>

          <div className="grid grid--3" style={{ marginTop: 'clamp(34px, 4vw, 52px)' }}>
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={(i % 3) * 70}>
                <article className="card">
                  <div className="card__index">{p.n}</div>
                  <h3 style={{ marginTop: 14 }}>{p.t}</h3>
                  <p style={{ marginTop: 10 }}>{p.d}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="actions" style={{ marginTop: 34 }}>
            <ArrowLink to="/purpose" accent>
              Vision, mission and purpose
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* ---------- programmes ---------- */}
      <section className="band band--light">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Programme architecture</div>
            <h2 className="title" style={{ marginTop: 18, maxWidth: '15ch' }}>
              Eight ways the movement shows up.
            </h2>
          </Reveal>

          <div className="grid grid--4" style={{ marginTop: 'clamp(34px, 4vw, 52px)' }}>
            {programmes.map((p, i) => (
              <Reveal key={p.code} delay={(i % 4) * 60}>
                <article className="card card--flat">
                  <div className="card__index">{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ marginTop: 14, fontSize: 'var(--step-1)' }}>{p.code}</h3>
                  <p style={{ marginTop: 8 }}>{p.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- closing ---------- */}
      <section className="band">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="quote quote--wide" style={{ marginInline: 'auto' }}>
              Seeking help should become easier than hiding — and prevention
              should become part of student culture.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="actions" style={{ marginTop: 36, justifyContent: 'center' }}>
              <SpringButton to="/help">Find a pathway</SpringButton>
              <SpringButton to="/contact" variant="ghost">
                Talk to the desk
              </SpringButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
