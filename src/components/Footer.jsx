import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleServicesClick = (e) => {
    e.preventDefault()
    const el = document.getElementById('services')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#services'
    }
  }

  return (
    <footer className="klaro-footer">
      <div className="container">
        <div className="klaro-footer-grid">
          {/* Brand & Tagline */}
          <div className="footer-col footer-brand-col">
            <Link to="/" className="footer-brand">
              <span className="footer-wordmark">KLARO</span>
              <span className="footer-brand-tag">HOME SERVICES</span>
            </Link>
            <p className="footer-tagline">
              Thoughtful cleaning for mindful living. Reliable residential care tailored to modern homes.
            </p>
            <div className="footer-demo-badge">
              <span>Concept Project</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="#services" onClick={handleServicesClick}>Services</a></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/book">Book a Service</Link></li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={handleServicesClick}>Regular Home Maintenance</a></li>
              <li><a href="#services" onClick={handleServicesClick}>Deep Seasonal Clean</a></li>
              <li><a href="#services" onClick={handleServicesClick}>Move-In / Move-Out Clean</a></li>
              <li><Link to="/book">Custom Service Request</Link></li>
            </ul>
          </div>

          {/* Business & Demo Notice */}
          <div className="footer-col">
            <h4 className="footer-heading">Demo Hours & Area</h4>
            <p className="footer-info-text">
              <strong>Service Area:</strong> Northwood & Metro West [Demo Territory]
            </p>
            <p className="footer-info-text">
              <strong>Hours:</strong> Mon–Fri 8:00 AM – 6:00 PM<br />
              Sat 9:00 AM – 2:00 PM &bull; Sun Closed
            </p>
            <p className="footer-info-text">
              <strong>Phone:</strong> +1 (555) 019-2834 [Demo]
            </p>
          </div>
        </div>

        {/* Portfolio Concept Disclaimer */}
        <div className="footer-disclaimer">
          <p>
            <strong>Portfolio Disclosure:</strong> This website is a fictional concept project designed and developed by <strong>VYOMASANDHI</strong> to demonstrate small-business web architecture, accessible UI design, and responsive frontend systems. Klaro Home Services is not an operating company, does not accept actual payments, and does not conduct real appointments.
          </p>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} KLARO Home Services. Concept project for VYOMASANDHI portfolio.</p>
          <div className="footer-bottom-links">
            <span>All rights reserved.</span>
            <span>&bull;</span>
            <Link to="/contact">Demo Inquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
