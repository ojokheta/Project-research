import { Link } from 'react-router-dom'
import { Wordmark } from './Wordmark'
import { ArrowLink } from './SpringButton'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Wordmark style={{ fontSize: 34, width: 'fit-content' }} />
            <p className="footer__blurb">
              A long-term, student-led movement for addiction and substance-abuse
              prevention, advocacy and peer counselling support — originating at
              the University of Ibadan in volunteer partnership with the CDCC,
              Student Affairs Division.
            </p>
          </div>

          <div className="footer__col">
            <h4>Move</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About RESET</Link>
            <Link to="/purpose">Vision &amp; purpose</Link>
            <Link to="/involve">Become a peer advocate</Link>
          </div>

          <div className="footer__col">
            <h4>Support</h4>
            <Link to="/help">Get help now</Link>
            <Link to="/contact">Contact the desk</Link>
            <p>
              Confidential, non-judgmental, and not a clinical service.
            </p>
            <ArrowLink to="/help" accent>
              How RESET Connect works
            </ArrowLink>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {YEAR} Project RESET · University of Ibadan
          </p>
          <p>
            Career Development &amp; Counselling Centre · Student Affairs Division
          </p>
          <p>In an emergency, contact campus security or local emergency services.</p>
        </div>
      </div>
    </footer>
  )
}
