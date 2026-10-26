import { Reveal } from '../components/Reveal'
import { PageHero } from '../components/PageHero'
import { SpringButton, ArrowLink } from '../components/SpringButton'
import { Accordion } from '../components/Accordion'

const steps = [
  {
    n: '01',
    t: 'Reach out however feels safe',
    d: 'Scan a QR code on a poster, use an online form, send a message through our social channels, or walk up to a RESET desk. Anonymous routes exist precisely so that being seen asking is never the barrier.',
  },
  {
    n: '02',
    t: 'A trained peer listens first',
    d: 'No forms to justify yourself to, no assessment, no lecture. A trained student advocate hears what is going on — privately and without judgement.',
  },
  {
    n: '03',
    t: 'If you need more, you are walked there',
    d: 'When professional care is the right answer, we make the introduction: CDCC counselling, University Health Services, or another approved referral pathway. A warm handover, not a hand-off.',
  },
  {
    n: '04',
    t: 'Someone checks that the door stayed open',
    d: 'Follow-up is part of the pathway. Recovery-friendly peer communities and healthy routines keep support available after the first appointment.',
  },
]

const expectations = [
  {
    t: 'Confidential by design',
    d: 'Conversations stay within approved CDCC protocols and are handled through approved systems — collected only when necessary.',
  },
  {
    t: 'Non-judgmental, always',
    d: 'You will not be shamed, moralised at, or reported for having been honest. Changing the narrative means challenging stigma, not reinforcing it.',
  },
  {
    t: 'Clear about its limits',
    d: 'Volunteers say plainly what they can and cannot do — including when safeguarding requires escalation under applicable policy.',
  },
  {
    t: 'Voluntary at every stage',
    d: 'Nothing proceeds without your agreement. Participation is offered, never imposed.',
  },
]

const faq = [
  {
    q: 'Is it actually confidential?',
    a: 'Yes. First conversations are private and handled under approved CDCC protocols. The one exception is stated upfront: where safeguarding or emergency escalation is required under applicable policy, information is escalated — a volunteer will tell you this before you share, not after.',
  },
  {
    q: 'Will a volunteer diagnose me or give me treatment?',
    a: 'No. No volunteer diagnoses a student or provides clinical treatment. Peer advocates listen, provide basic support within scope, and connect you to qualified professionals. Clinical care remains with approved professionals and referral pathways.',
  },
  {
    q: 'Do I have to give my name?',
    a: 'No. The digital strategy specifically recommends anonymous intake through QR codes and online forms, so students can initiate contact without physical exposure. There is also an anonymous question box — for education and navigation, not emergency response.',
  },
  {
    q: 'What actually happens after I reach out?',
    a: 'A trained peer advocate listens first. If professional care is the right next step, you are connected to CDCC counselling, University Health Services, or another approved referral pathway — and followed up with afterwards.',
  },
  {
    q: 'What if the situation is an emergency?',
    a: 'Contact campus security or local emergency services first. RESET is not an emergency response service. High-risk or emergency situations are escalated immediately to qualified professionals and the appropriate university or health services.',
  },
  {
    q: 'Is this only about illegal drugs?',
    a: 'No. The brief covers misuse of prescription medicines, nicotine vaping, shisha, synthetic cannabinoids and illicit substances — alongside the ordinary pressures behind them, including academics, peer influence, insomnia and self-medication.',
  },
  {
    q: 'Who is this for?',
    a: 'University students — especially anyone facing substance-related risks or barriers to help-seeking — students in recovery or looking for healthier coping strategies, peer volunteers and student leaders, and, where appropriate and consented, families and supportive networks.',
  },
]

export function Help() {
  return (
    <>
      <PageHero
        eyebrow="Confidential pathways"
        title={
          <>
            You can ask for help <em>without being defined by&nbsp;it.</em>
          </>
        }
        lede="RESET is not a clinic. We make the first step smaller: a private conversation, a peer who listens, and a clear link to approved professional care."
        actions={
          <>
            <SpringButton to="/contact">Reach the RESET desk</SpringButton>
            <SpringButton to="/about" variant="ghost">
              How RESET works
            </SpringButton>
          </>
        }
      />

      <section className="band band--flush-top" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="callout">
              <span className="callout__icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 2.2 16.4 15H1.6L9 2.2Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                  <path d="M9 7v3.4M9 12.6h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <h3>If someone is in immediate danger</h3>
                <p>
                  Contact campus security or local emergency services first.
                  RESET is a prevention and peer-support movement, not an
                  emergency or clinical service. Clinical care remains with
                  qualified professionals and approved referral pathways through
                  the CDCC, Student Affairs Division.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- pathway ---------- */}
      <section className="band">
        <div className="container split split--top">
          <div className="sticky-col">
            <Reveal>
              <div className="eyebrow">RESET Connect</div>
              <h2 className="title" style={{ marginTop: 18 }}>
                Four steps, none of them a waiting room.
              </h2>
              <p className="copy" style={{ marginTop: 18 }}>
                The pathway exists to remove friction at the exact moment when
                friction makes people walk away.
              </p>
              <div className="actions" style={{ marginTop: 26 }}>
                <ArrowLink to="/contact" accent>
                  Start a conversation
                </ArrowLink>
              </div>
            </Reveal>
          </div>

          <div className="rows">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 55}>
                <div className="row">
                  <span className="row__num">{s.n}</span>
                  <div className="row__body">
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- what to expect ---------- */}
      <section className="band band--light">
        <div className="container">
          <Reveal>
            <div className="eyebrow">What to expect</div>
            <h2 className="title" style={{ marginTop: 18, maxWidth: '16ch' }}>
              Four promises, held on purpose.
            </h2>
          </Reveal>

          <div className="grid grid--4" style={{ marginTop: 'clamp(34px, 4vw, 52px)' }}>
            {expectations.map((e, i) => (
              <Reveal key={e.t} delay={i * 60}>
                <article className="card card--flat" style={{ height: '100%' }}>
                  <div className="card__index">{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ marginTop: 14, fontSize: 'var(--step-1)' }}>{e.t}</h3>
                  <p style={{ marginTop: 10 }}>{e.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section className="band">
        <div className="container split split--top">
          <div className="sticky-col">
            <Reveal>
              <div className="eyebrow">Questions students actually ask</div>
              <h2 className="title" style={{ marginTop: 18 }}>
                Straight answers.
              </h2>
              <p className="copy" style={{ marginTop: 18 }}>
                If yours is not here, the desk will answer it without needing to
                know who you are.
              </p>
              <div className="actions" style={{ marginTop: 26 }}>
                <SpringButton to="/contact" variant="ghost" size="sm">
                  Ask anonymously
                </SpringButton>
              </div>
            </Reveal>
          </div>

          <div>
            <Accordion items={faq} initial={0} />
          </div>
        </div>
      </section>

      <section className="band band--tight" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="quote quote--wide" style={{ marginInline: 'auto' }}>
              The first conversation is the whole barrier. Everything else is
              logistics.
            </p>
            <div className="actions" style={{ marginTop: 34, justifyContent: 'center' }}>
              <SpringButton to="/contact">Talk to the RESET desk</SpringButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
