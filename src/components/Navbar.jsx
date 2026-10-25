import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleServicesClick = (e) => {
    e.preventDefault()
    closeMenu()
    if (location.pathname === '/') {
      const el = document.getElementById('services')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/#services')
      setTimeout(() => {
        const el = document.getElementById('services')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <header className="klaro-header">
      <div className="klaro-top-banner">
        <p>
          <strong>Concept Portfolio Project</strong> &bull; Crafted by VYOMASANDHI for small-business demonstration purposes.
        </p>
      </div>

      <div className="container klaro-nav-container">
        <Link to="/" className="klaro-brand" onClick={closeMenu}>
          <span className="klaro-wordmark">KLARO</span>
          <span className="klaro-brand-tag">HOME SERVICES</span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="klaro-menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className={`hamburger-bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation links */}
        <nav
          id="primary-navigation"
          className={`klaro-nav ${isMenuOpen ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="klaro-nav-list">
            <li className="klaro-nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'klaro-nav-link active' : 'klaro-nav-link'
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="klaro-nav-item">
              <a
                href="#services"
                className="klaro-nav-link"
                onClick={handleServicesClick}
              >
                Services
              </a>
            </li>
            <li className="klaro-nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'klaro-nav-link active' : 'klaro-nav-link'
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className="klaro-nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'klaro-nav-link active' : 'klaro-nav-link'
                }
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
            <li className="klaro-nav-item klaro-nav-action">
              <NavLink
                to="/book"
                className="klaro-book-btn"
                onClick={closeMenu}
              >
                Book Now
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
