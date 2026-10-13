import { useState } from 'react'
import type { FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { SpringButton } from '../components/SpringButton'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="page">
      <section className="hero" style={{ minHeight: 'auto', paddingBottom: 0 }}>
        <Reveal>
          <div className="eyebrow">Contact</div>
          <h1 className="display">Write to us. We treat it as private.</h1>
          <p className="lede">
            For partnership, volunteering, or a confidential first conversation.
            Messages are reviewed by the RESET coordination desk, not posted
            publicly.
          </p>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <Reveal>
          <form className="form" onSubmit={onSubmit}>
            <label className="field">
              <span>Name</span>
              <input name="name" autoComplete="name" required />
            </label>
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="field">
              <span>I am</span>
              <select name="role" defaultValue="student">
                <option value="student">A student seeking support</option>
                <option value="friend">A friend or peer</option>
                <option value="volunteer">Interested in volunteering</option>
                <option value="partner">An institutional partner</option>
              </select>
            </label>
            <label className="field">
              <span>Message</span>
              <textarea name="message" required />
            </label>
            <SpringButton type="submit">Send message</SpringButton>
            {sent && (
              <p className="notice">
                Received. If this is urgent, please also use campus emergency
                channels.
              </p>
            )}
          </form>
        </Reveal>
      </section>
    </div>
  )
}
