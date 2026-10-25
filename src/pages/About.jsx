import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  const faqs = [
    {
      q: 'Do I need to be home during the cleaning appointment?',
      a: 'Not at all. The majority of our regular clients provide a secure lockbox code, leave a key with building management, or let us in before heading to work. We securely store all entry instructions and ensure your home is fully locked and armed upon departure.'
    },
    {
      q: 'What cleaning supplies and equipment do you bring?',
      a: 'We bring all necessary commercial-grade equipment and supplies: HEPA-filtered vacuum systems, clean microfiber flat mops, color-coded lint-free cloths, and certified non-toxic cleaning agents. If you prefer us to use a specialized product for delicate marble or unsealed hardwood, simply leave it out with instructions.'
    },
    {
      q: 'How do you handle homes with pets?',
      a: 'We love pets! All our cleaning solutions are 100% plant-derived, non-toxic, and free from harsh fumes, making them completely safe for dogs, cats, and small animals. During booking, let us know your pet’s name and whether they are comfortable roaming freely or prefer being in a quiet room.'
    },
    {
      q: 'What is your cancellation and rescheduling policy?',
      a: 'We understand that plans change. We ask for at least 24 hours notice for any rescheduling or cancellation with zero penalty fees. Cancellations made with less than 24 hours notice may incur a standard $40 late-cancellation fee to compensate our dedicated cleaner for their reserved time.'
    }
  ]

  return (
    <div className="klaro-about-page">
      {/* 1. Page Header */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-content">
            <span className="section-eyebrow">Our Philosophy</span>
            <h1 className="about-hero-title">
              Thoughtful care for the places you call home.
            </h1>
            <p className="about-hero-subtitle">
              Klaro Home Services was established with a singular conviction: home cleaning should be built on quiet craftsmanship, transparent standards, and complete trust.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Founder's Note Section */}
      <section className="founder-section" aria-labelledby="founder-heading">
        <div className="container">
          <div className="founder-card">
            <div className="founder-header">
              <div className="founder-avatar" aria-hidden="true">SJ</div>
              <div className="founder-meta">
                <h2 id="founder-heading" className="founder-name">Sarah Jenkins</h2>
                <span className="founder-role">Founder & Principal Cleaner &bull; Fictional Concept Character</span>
              </div>
            </div>
            <div className="founder-letter">
              <p>
                "I started Klaro after spending years watching the residential cleaning industry treat homes as volume quotas. Cleaners were rushed through three-bedroom homes in ninety minutes, surfaces were masked with overpowering synthetic fragrances, and clients rarely saw the same face twice.
              </p>
              <p>
                Cleaning someone’s home is fundamentally an act of trust. You are handing over your keys, your private sanctuary, and your family’s living environment. That deserves respect.
              </p>
              <p>
                At Klaro, we keep our client roster intentionally balanced. We never subcontract, we strictly use biodegradable solutions that are safe for your children and pets, and we clean each home with the exact same rigor we demand in our own."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Principles & Standards Section */}
      <section className="principles-section" aria-labelledby="principles-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">The Klaro Standard</span>
            <h2 id="principles-heading" className="section-title">
              How We Protect & Care for Your Home
            </h2>
            <p className="section-subtitle">
              Four uncompromised standards applied to every single visit.
            </p>
          </div>

          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-number" aria-hidden="true">01</div>
              <h3 className="principle-title">Color-Coded Microfiber</h3>
              <p className="principle-text">
                Strict cross-contamination barriers: blue cloths for bathrooms, yellow for kitchens, and gray for living spaces. Never mixed, laundered at 90°C daily.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-number" aria-hidden="true">02</div>
              <h3 className="principle-title">Plant-Derived Chemistry</h3>
              <p className="principle-text">
                Non-toxic, hypoallergenic, and biodegradable formulas. Effective cleansing power without noxious chlorine bleach, harsh ammonia, or artificial scents.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-number" aria-hidden="true">03</div>
              <h3 className="principle-title">32-Point Checklist</h3>
              <p className="principle-text">
                No guessing games. Every room follows an itemized, transparent checklist covering high-touch switches, door trims, corners, and baseboards.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-number" aria-hidden="true">04</div>
              <h3 className="principle-title">Dedicated Cleaner Consistency</h3>
              <p className="principle-text">
                For recurring appointments, you have the same dedicated cleaner every visit who understands your home’s layout, pet habits, and personal preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Scope Comparison Table */}
      <section className="scope-section" aria-labelledby="scope-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Clear Comparison</span>
            <h2 id="scope-heading" className="section-title">
              Standard Clean vs. Deep Clean
            </h2>
            <p className="section-subtitle">
              Understand exactly what is covered in our routine maintenance versus seasonal deep refreshes.
            </p>
          </div>

          <div className="scope-table-wrapper" tabIndex="0" role="region" aria-label="Scope comparison table">
            <table className="scope-table">
              <thead>
                <tr>
                  <th scope="col" className="table-task-col">Checklist Task / Area</th>
                  <th scope="col" className="table-tier-col">Standard Maintenance</th>
                  <th scope="col" className="table-tier-col tier-deep">Deep Seasonal Clean</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>All rooms: Dusting open horizontal surfaces & furniture</td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                </tr>
                <tr>
                  <td>Floors: HEPA-filtered vacuuming and damp microfiber mopping</td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                </tr>
                <tr>
                  <td>Bathrooms: Full sanitization of basins, showers, tubs & toilets</td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                </tr>
                <tr>
                  <td>Kitchen: Wipe exterior of stove, rangehood, fridge & cabinets</td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                </tr>
                <tr>
                  <td>Emptying household trash bins & wiping bin exteriors</td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                </tr>
                <tr className="deep-highlight-row">
                  <td>Baseboards & door frames: Hand-washed throughout entire home</td>
                  <td><span className="dash-mark" aria-label="Not included">&mdash;</span></td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                </tr>
                <tr className="deep-highlight-row">
                  <td>Tile grout: Detailed scrub and limescale treatment</td>
                  <td><span className="dash-mark" aria-label="Not included">&mdash;</span></td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                </tr>
                <tr className="deep-highlight-row">
                  <td>Interior oven & rangehood filter deep degrease</td>
                  <td><span className="dash-mark" aria-label="Not included">&mdash;</span></td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                </tr>
                <tr className="deep-highlight-row">
                  <td>Window frames, sills, and reachable interior glass</td>
                  <td><span className="dash-mark" aria-label="Not included">&mdash;</span></td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                </tr>
                <tr className="deep-highlight-row">
                  <td>Light switches, outlet plates & door handles sanitized</td>
                  <td><span className="dash-mark" aria-label="Not included">&mdash;</span></td>
                  <td><span className="check-mark" aria-label="Included">&#10003;</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="scope-cta-strip">
            <p>Need moving transition cleaning? Our <strong>Move-In / Move-Out</strong> package includes all Deep Clean tasks plus interior empty cabinet washing and interior refrigerator detailing.</p>
            <Link to="/book" className="btn btn-primary">
              Book Your Service
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="faq-section" aria-labelledby="faq-heading">
        <div className="container container-narrow">
          <div className="section-header">
            <span className="section-eyebrow">Got Questions?</span>
            <h2 id="faq-heading" className="section-title">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle">
              Everything you need to know about preparing for your first appointment.
            </p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => (
              <details key={idx} className="faq-item">
                <summary className="faq-question">
                  <span>{faq.q}</span>
                  <span className="faq-icon" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Concept Project Disclosure Banner */}
      <section className="about-concept-disclosure">
        <div className="container">
          <div className="concept-disclosure-box">
            <h4>Concept Project Note</h4>
            <p>
              Klaro Home Services and founder Sarah Jenkins are fictional creative concepts developed by <strong>VYOMASANDHI</strong>. 
              This page showcases structured editorial storytelling, accessible comparison tables, and user-centric small-business design.
            </p>
            <Link to="/contact" className="btn btn-secondary">
              View Demo Contact Details &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
