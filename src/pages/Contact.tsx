import { useState } from 'react'
import type { FormEvent } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { Reveal } from '../components/Reveal'
import { PageHero } from '../components/PageHero'
import { SpringButton, ArrowLink } from '../components/SpringButton'
import { settle } from '../lib/motion'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [styles, api] = useSpring(() => ({ opacity: 1, y: 0, config: settle }))

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    Promise.all(api.start({ opacity: 0, y: -10, config: settle })).then(
      () => {
        setSent(true)
        api.start({ opacity: 1, y: 0 })
      },
    )
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Write to us. <em>We treat it as private.</em>
          </>
        }
        lede="For a confidential first conversation, volunteering, or partnership. Messages are reviewed by the RESET coordination desk — never posted publicly."
      />

      <section className="band band--flush-top" style={{ paddingTop: 0 }}>
        <div className="container split split--top">
          {/* ---------- form ---------- */}
          <div>
            <Reveal>
              <div className="eyebrow">Send a message</div>

              <animated.div style={styles}>
                {sent ? (
                  <div
                    className="card"
                    style={{ marginTop: 24, padding: 'clamp(28px, 4vw, 40px)' }}
                    role="status"
                  >
                    <div className="card__index">Received</div>
                    <h3 style={{ marginTop: 14, fontSize: 'var(--step-2)' }}>
                      Thank you — your message is with the coordination desk.
                    </h3>
                    <p style={{ marginTop: 12 }}>
                      Someone will reply from the RESET desk. If this is urgent,
                      please also use campus emergency channels or contact
                      University Health Services directly.
                    </p>
                    <div className="actions" style={{ marginTop: 26 }}>
                      <SpringButton
                        variant="ghost"
                        size="sm"
                        onClick={() => setSent(false)}
                      >
                        Write another message
                      </SpringButton>
                    </div>
                  </div>
                ) : (
                  <form className="form" style={{ marginTop: 24 }} onSubmit={onSubmit}>
                    <div className="field-row">
                      <label className="field">
                        <span>Name</span>
                        <input
                          name="name"
                          autoComplete="name"
                          placeholder="How should we address you?"
                          required
                        />
                      </label>
                      <label className="field">
                        <span>Email</span>
                        <input
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          required
                        />
                      </label>
                    </div>

                    <label className="field">
                      <span>I am</span>
                      <select name="role" defaultValue="student">
                        <option value="student">A student seeking support</option>
                        <option value="friend">A friend or peer</option>
                        <option value="volunteer">Interested in volunteering</option>
                        <option value="partner">An institutional partner</option>
                        <option value="press">Media or research enquiry</option>
                      </select>
                    </label>

                    <label className="field">
                      <span>Message</span>
                      <textarea
                        name="message"
                        placeholder="Share as much or as little as you want. You do not have to identify anyone."
                        required
                      />
                    </label>

                    <p className="notice">
                      Only what is necessary is collected, and it is handled
                      through approved systems. Do not include medical details
                      you would not want recorded.
                    </p>

                    <div className="actions">
                      <SpringButton type="submit">Send message</SpringButton>
                    </div>
                  </form>
                )}
              </animated.div>
            </Reveal>
          </div>

          {/* ---------- side panel ---------- */}
          <div className="sticky-col stack stack--lg">
            <Reveal delay={80}>
              <article className="card">
                <div className="card__index">What happens next</div>
                <ul className="list" style={{ marginTop: 18 }}>
                  <li>
                    <span>
                      Messages are read by the <strong>RESET coordination desk</strong>,
                      not a public inbox.
                    </span>
                  </li>
                  <li>
                    <span>
                      You will hear back from a trained volunteer or lead —{' '}
                      <strong>never auto-published, never shared onward</strong>.
                    </span>
                  </li>
                  <li>
                    <span>
                      If professional care is the right next step, we make the{' '}
                      <strong>introduction to CDCC or University Health Services</strong>{' '}
                      rather than handling it ourselves.
                    </span>
                  </li>
                </ul>
              </article>
            </Reveal>

            <Reveal delay={140}>
              <article className="card">
                <div className="card__index">Other routes</div>
                <div className="stack" style={{ marginTop: 18 }}>
                  <p style={{ fontSize: 'var(--step--1)', color: 'var(--text-2)', lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--text)' }}>
                      Anonymous question box
                    </strong>{' '}
                    — for education and navigation, not emergency response.
                  </p>
                  <p style={{ fontSize: 'var(--step--1)', color: 'var(--text-2)', lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--text)' }}>
                      QR-to-RESET posters
                    </strong>{' '}
                    across halls and faculties link straight to approved intake
                    and support resources.
                  </p>
                  <p style={{ fontSize: 'var(--step--1)', color: 'var(--text-2)', lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--text)' }}>
                      On campus
                    </strong>{' '}
                    — Career Development &amp; Counselling Centre, Student
                    Affairs Division, University of Ibadan.
                  </p>
                  <ArrowLink to="/help" accent>
                    See the full pathway
                  </ArrowLink>
                </div>
              </article>
            </Reveal>

            <Reveal delay={200}>
              <article className="card">
                <div className="card__index">Partnerships &amp; funding</div>
                <p style={{ marginTop: 16 }}>
                  Institutional grants, corporate social responsibility
                  partnerships, foundation and NGO grants, research and
                  implementation grants, approved sponsorships, and in-kind
                  professional support.
                </p>
                <p style={{ marginTop: 12 }}>
                  Funding never compromises clinical independence, student
                  privacy, institutional policies or the movement’s
                  public-interest purpose.
                </p>
              </article>
            </Reveal>

            <Reveal delay={260}>
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
                  <h3>Not an emergency channel</h3>
                  <p>
                    If someone is in immediate danger, contact campus security
                    or local emergency services first.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
