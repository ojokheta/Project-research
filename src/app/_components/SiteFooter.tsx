import { ArrowRight, Qr } from 'reicon-react'

/**
 * Site footer — one shared footer for every route (Home, About, Purpose,
 * Get help, Get involved, Contact).
 *
 * Structure mirrors the reference layout: a deep brand-green container with a
 * multi-column grid of white pill tags + content, a meta row, and — at the very
 * bottom — a full-width two-tone wave banner (vibrant green under lime) carrying
 * the UI gate sticker and three secondary stickers.
 *
 * Every sticker carries `data-reveal-pop="<from-rotation>"`, which ScrollFx
 * animates with GSAP + ScrollTrigger (springy scale/rotate pop as it scrolls
 * into view). Under `prefers-reduced-motion` ScrollFx no-ops and the stickers
 * simply render in their final state.
 */

/** Column 2 — the same destinations as the top navigation. */
const explore: [string, string][] = [
  ['About', '/about'],
  ['Purpose', '/purpose'],
  ['Get help', '/help'],
  ['Get involved', '/involve'],
  ['Contact', '/contact'],
]

/** Column 3 — approved support pathways (the three resource cards on Home). */
const pathways: [string, string][] = [
  ['RESET Connect', '/help'],
  ['CDCC Counselling', '/help'],
  ['University Health Services', '/help'],
]

/**
 * Column 4 — social pills.
 *
 * NOTE: the site has no published social handles yet, so these are visual
 * placeholders. Swap each `href` for the real profile URL when it exists —
 * the labels and pill styling are already in place.
 */
const socials: [string, string][] = [
  ['Instagram', '#'],
  ['TikTok', '#'],
  ['WhatsApp', '#'],
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          {/* ── brand ─────────────────────────────────────────────────── */}
          <div className="site-footer__col site-footer__brand">
            <a className="logo" href="/">
              PROJECT <strong>RE<span>S</span>ET</strong>
            </a>
            <p className="site-footer__blurb">
              A long-term, student-led movement for substance-misuse prevention,
              early support, peer education and referral linkage — originating at
              the University of Ibadan with the CDCC, Student Affairs Division.
            </p>
            <p className="site-footer__motto">RESET · REBUILD · RECOVER · RISE</p>
          </div>

          {/* ── explore ───────────────────────────────────────────────── */}
          <div className="site-footer__col">
            <span className="site-footer__tag">explore</span>
            <ul className="site-footer__links">
              {explore.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── pathways ──────────────────────────────────────────────── */}
          <div className="site-footer__col">
            <span className="site-footer__tag">pathways</span>
            <ul className="site-footer__links">
              {pathways.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
              <li>
                <a href="/help" className="site-footer__qr">
                  <Qr size={15} strokeWidth={2} aria-hidden="true" />
                  QR-to-RESET
                </a>
              </li>
            </ul>
          </div>

          {/* ── connect ───────────────────────────────────────────────── */}
          <div className="site-footer__col">
            <span className="site-footer__tag">connect</span>
            <p className="site-footer__note">
              Messages go to the RESET coordination desk — private,
              non-judgmental, never posted publicly.
            </p>
            <a className="primary-button site-footer__cta" href="/contact">
              Talk to us <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
            <div className="site-footer__social">
              {socials.map(([label, href]) => (
                <a key={label} href={href}>
                  {label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── meta ────────────────────────────────────────────────────── */}
        <div className="site-footer__meta">
          <p>© 2026 Project RESET · University of Ibadan · CDCC, Student Affairs Division</p>
          <p>In an emergency, contact campus security or local emergency services immediately.</p>
        </div>
      </div>

      {/* ── wavy banner + stickers (decorative) ───────────────────────── */}
      <div className="site-footer__banner" aria-hidden="true">
        <svg
          className="site-footer__wave"
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          focusable="false"
        >
          {/* back layer — vibrant brand green */}
          <path
            d="M0,96 C180,34 330,150 540,120 C760,88 900,8 1120,52 C1262,80 1362,112 1440,86 L1440,240 L0,240 Z"
            fill="#15803D"
          />
          {/* front layer — lime accent (contrast against the deep green footer) */}
          <path
            d="M0,152 C200,96 360,198 600,168 C842,138 982,72 1200,110 C1312,130 1382,152 1440,138 L1440,240 L0,240 Z"
            fill="#A3E635"
          />
        </svg>

        {/* main sticker — the UI gate cut-out, framed like a photo sticker */}
        <div className="site-footer__stage">
          <div className="sticker sticker--tower" data-reveal-pop="-7">
            <img
              src="/images/WhatsApp_Image_2026-10-13_at_4.31.43_PM__1_-removebg-preview.png"
              alt=""
              width={532}
              height={469}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* secondary sticker — lime starburst */}
        <div className="sticker sticker--burst" data-reveal-pop="-26">
          <span>
            Student-
            <br />
            led
          </span>
        </div>

        {/* secondary sticker — round badge */}
        <div className="sticker sticker--round" data-reveal-pop="24">
          <strong>100%</strong>
          <span>confidential</span>
        </div>

        {/* secondary sticker — white pill */}
        <div className="sticker sticker--pill" data-reveal-pop="-14">
          non-judgmental · no sanctions
        </div>
      </div>
    </footer>
  )
}
