import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Wordmark } from './Wordmark'
import { SpringButton } from './SpringButton'

const links = [
  { to: '/about', label: 'About' },
  { to: '/purpose', label: 'Purpose' },
  { to: '/help', label: 'Get help' },
  { to: '/involve', label: 'Get involved' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" onClick={() => setOpen(false)}>
            <Wordmark compact />
          </Link>
          <div className="nav-links">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
            <SpringButton to="/contact" variant="ghost">
              Talk to us
            </SpringButton>
          </div>
          <button
            className="menu-toggle"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-panel">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <SpringButton to="/contact" onClick={() => setOpen(false)}>
            Talk to us
          </SpringButton>
        </div>
      )}
    </header>
  )
}
