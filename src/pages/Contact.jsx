import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

export default function Contact() {
  const [postalInput, setPostalInput] = useState('')
  const [searchResult, setSearchResult] = useState(null)

  // Supported demo postal codes dictionary
  const demoTerritories = {
    'NW101': 'Northwood Central & Historic Quarter',
    'NW102': 'Northwood Heights & Pine Creek',
    'NW103': 'Northwood East & Lakeview',
    'NW104': 'Northwood Business Park & Greenvale',
    'NW105': 'Northwood Bayside',
    'MW201': 'Metro West Civic Center',
    'MW202': 'Metro West Valley & High Ridge',
    'MW203': 'Metro West Gateway Suburbs'
  }

  const handlePostalCheck = (e) => {
    e.preventDefault()
    const cleaned = postalInput.trim().toUpperCase()

    if (!cleaned) {
      setSearchResult({
        status: 'error',
        message: 'Please enter a postal code to test availability.'
      })
      return
    }

    if (demoTerritories[cleaned]) {
      setSearchResult({
        status: 'success',
        code: cleaned,
        region: demoTerritories[cleaned],
        message: `Postal code ${cleaned} is within our active demo territory (${demoTerritories[cleaned]}). Standard travel rates apply with no surcharge.`
      })
    } else {
      setSearchResult({
        status: 'unavailable',
        code: cleaned,
        message: `Postal code ${cleaned} is outside our current demo territory. Currently, our fictional team only services Northwood (NW101–NW105) and Metro West (MW201–MW203).`
      })
    }
  }

  const handleQuickCode = (code) => {
    setPostalInput(code)
    if (demoTerritories[code]) {
      setSearchResult({
        status: 'success',
        code,
        region: demoTerritories[code],
        message: `Postal code ${code} is within our active demo territory (${demoTerritories[code]}). Standard travel rates apply with no surcharge.`
      })
    } else {
      setSearchResult({
        status: 'unavailable',
        code,
        message: `Postal code ${code} is outside our current demo territory. Currently, our fictional team only services Northwood (NW101–NW105) and Metro West (MW201–MW203).`
      })
    }
  }

  return (
    <div className="klaro-contact-page">
      {/* 1. Page Header */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="contact-hero-content">
            <span className="section-eyebrow">Direct Contact</span>
            <h1 className="contact-hero-title">
              Contact & Service Area
            </h1>
            <p className="contact-hero-subtitle">
              Transparent contact channels and service zone information for Klaro Home Services. 
              All details below are clearly identified for demonstration purposes.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Details & Hours Grid */}
      <section className="contact-details-section" aria-labelledby="contact-info-heading">
        <div className="container">
          <div className="contact-cards-grid">
            {/* Card 1: Founder & Demo Channels */}
            <div className="contact-card">
              <div className="card-badge">Demo Contact</div>
              <h2 id="contact-info-heading" className="contact-card-title">Owner & Management</h2>
              <p className="contact-person">
                <strong>Sarah Jenkins</strong><br />
                <span className="contact-sub">Founder & Lead Cleaner (Fictional)</span>
              </p>

              <div className="contact-channel-list">
                <div className="contact-channel">
                  <span className="channel-label">Demo Email:</span>
                  <a href="mailto:sarah@klarohome-demo.com" className="channel-link">
                    sarah@klarohome-demo.com
                  </a>
                </div>
                <div className="contact-channel">
                  <span className="channel-label">Demo Phone:</span>
                  <a href="tel:+15550192834" className="channel-link">
                    +1 (555) 019-2834
                  </a>
                </div>
              </div>

              <div className="contact-note">
                <small>&bull; Standard fictional 555-prefix and demo email domain for portfolio demonstration.</small>
              </div>
            </div>

            {/* Card 2: Operating Hours */}
            <div className="contact-card">
              <div className="card-badge">Schedule</div>
              <h2 className="contact-card-title">Operating Hours</h2>
              <p className="contact-card-desc">
                Our cleaning team operates during standard residential daytime windows to respect neighborhood quiet hours.
              </p>

              <ul className="hours-list">
                <li className="hours-item">
                  <span className="day">Monday &ndash; Friday</span>
                  <span className="time">8:00 AM &ndash; 6:00 PM</span>
                </li>
                <li className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM &ndash; 2:00 PM</span>
                </li>
                <li className="hours-item closed">
                  <span className="day">Sunday</span>
                  <span className="time">Closed (Family Rest)</span>
                </li>
              </ul>

              <div className="contact-note">
                <small>&bull; Average customer response turnaround: under 2 business hours.</small>
              </div>
            </div>

            {/* Card 3: Territory Scope */}
            <div className="contact-card">
              <div className="card-badge">Territory</div>
              <h2 className="contact-card-title">Coverage Area</h2>
              <p className="contact-card-desc">
                We operate within a focused radial zone to ensure punctual arrivals and minimal travel delays between appointments.
              </p>

              <div className="territory-list">
                <div className="territory-item">
                  <strong>Northwood Region [Demo]</strong>
                  <span>Postal Codes NW101 through NW105</span>
                </div>
                <div className="territory-item">
                  <strong>Metro West District [Demo]</strong>
                  <span>Postal Codes MW201 through MW203</span>
                </div>
              </div>

              <div className="contact-note">
                <small>&bull; Use the interactive checker below to verify demo availability.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Postal Code Territory Checker */}
      <section className="postal-checker-section" aria-labelledby="checker-heading">
        <div className="container container-narrow">
          <div className="checker-card">
            <span className="section-eyebrow">Interactive Verification</span>
            <h2 id="checker-heading" className="checker-title">
              Service Area Postal-Code Checker
            </h2>
            <p className="checker-desc">
              Test whether a location is within our demo service boundary. 
              <strong> Note:</strong> This is an interactive frontend demonstration, not a live booking backend.
            </p>

            {/* Quick Demo Code Buttons */}
            <div className="quick-codes">
              <span className="quick-label">Try Demo Codes:</span>
              <button
                type="button"
                className="quick-btn"
                onClick={() => handleQuickCode('NW101')}
              >
                NW101 (Covered)
              </button>
              <button
                type="button"
                className="quick-btn"
                onClick={() => handleQuickCode('MW202')}
              >
                MW202 (Covered)
              </button>
              <button
                type="button"
                className="quick-btn"
                onClick={() => handleQuickCode('SW999')}
              >
                SW999 (Outside)
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handlePostalCheck} className="checker-form" noValidate>
              <div className="checker-input-group">
                <label htmlFor="postal-input" className="sr-only">
                  Enter Postal Code
                </label>
                <input
                  id="postal-input"
                  type="text"
                  className="checker-input"
                  placeholder="e.g. NW101 or MW202"
                  value={postalInput}
                  onChange={(e) => setPostalInput(e.target.value)}
                  maxLength={10}
                  aria-describedby="supported-codes-hint"
                />
                <button type="submit" className="btn btn-primary checker-submit-btn">
                  Check Territory
                </button>
              </div>
            </form>

            <p id="supported-codes-hint" className="supported-codes-text">
              <strong>Supported demo codes:</strong> NW101, NW102, NW103, NW104, NW105, MW201, MW202, MW203.
            </p>

            {/* Feedback Live Region */}
            <div aria-live="polite" className="checker-result-wrapper">
              {searchResult && (
                <div className={`checker-result result-${searchResult.status}`}>
                  {searchResult.status === 'success' && (
                    <>
                      <div className="result-header">
                        <span className="result-icon success" aria-hidden="true">&#10003;</span>
                        <strong>In Service Territory</strong>
                      </div>
                      <p>{searchResult.message}</p>
                      <Link to="/book" className="btn btn-primary result-cta-btn">
                        Proceed to Book a Service &rarr;
                      </Link>
                    </>
                  )}

                  {searchResult.status === 'unavailable' && (
                    <>
                      <div className="result-header">
                        <span className="result-icon unavailable" aria-hidden="true">&times;</span>
                        <strong>Outside Service Territory</strong>
                      </div>
                      <p>{searchResult.message}</p>
                    </>
                  )}

                  {searchResult.status === 'error' && (
                    <div className="result-header">
                      <span className="result-icon error" aria-hidden="true">!</span>
                      <p className="error-text">{searchResult.message}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Honest Portfolio Disclosure on Contact Forms */}
      <section className="contact-disclosure-section">
        <div className="container container-narrow">
          <div className="contact-inquiry-box">
            <h3>Notice on Inquiries & Message Delivery</h3>
            <p>
              To maintain honesty, this website does not include a fake message submission form that claims your inquiry was emailed or received by real cleaners. 
              Klaro Home Services is a functional concept site developed by <strong>VYOMASANDHI</strong> to demonstrate accessible form architecture, clear small-business UX, and responsive layouts.
            </p>
            <p>
              If you want to test the full customer journey, explore our demo booking flow:
            </p>
            <Link to="/book" className="btn btn-primary">
              Test the Demo Booking Flow &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
