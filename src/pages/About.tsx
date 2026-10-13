import { Reveal } from '../components/Reveal'
import { SpringButton } from '../components/SpringButton'

export function About() {
  return (
    <div className="page">
      <section className="hero" style={{ minHeight: 'auto', paddingBottom: 24 }}>
        <Reveal>
          <div className="eyebrow">What is Project RESET</div>
          <h1 className="display">A long-term movement, not a campaign week.</h1>
          <p className="lede">
            RESET originates at the University of Ibadan and is designed to grow
            into a scalable model for addiction and substance-abuse prevention,
            early support, advocacy, peer education, referral linkage and
            recovery-friendly communities.
          </p>
        </Reveal>
      </section>

      <section className="section split">
        <Reveal>
          <div className="media-frame">
            <img
              src="/brand/about.jpg"
              alt="Project RESET movement framework"
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="prose">
            <p>
              Its institutional starting point is a volunteer partnership with
              the CDCC, Student Affairs Division. The volunteer arm’s core
              mandate is Addiction & Substance Abuse Prevention, Advocacy, and
              Peer Counselling Support.
            </p>
            <p style={{ marginTop: 16 }}>
              RESET functions as a frontline bridge for student-led advocacy,
              confidential peer intake, referral linkage and psychoeducation
              across halls and faculties — while ensuring that clinical care
              remains with qualified professionals and approved referral
              pathways.
            </p>
          </div>
          <div className="actions">
            <SpringButton to="/involve">Become a peer advocate</SpringButton>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
