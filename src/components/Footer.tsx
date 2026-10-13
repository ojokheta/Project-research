import { Link } from 'react-router-dom'
import { Wordmark } from './Wordmark'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Wordmark compact />
          <p style={{ marginTop: 12, maxWidth: 360 }}>
            A student-led movement at the University of Ibadan, in volunteer
            partnership with the CDCC, Student Affairs Division.
          </p>
        </div>
        <div>
          <p>Confidential. Non-judgmental. Not a clinical service.</p>
          <p style={{ marginTop: 8 }}>
            <Link to="/help">Get help</Link>
            {' · '}
            <Link to="/involve">Volunteer</Link>
            {' · '}
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
