import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const scrollToServices = (e) => {
    e.preventDefault()
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="klaro-home">
      {/* 1. Hero Section */}
      <section className="klaro-hero" aria-labelledby="hero-heading">
        <div className="container klaro-hero-grid">
          <div className="hero-content">
            <span className="hero-eyebrow">Professional Residential Care</span>
            <h1 id="hero-heading" className="hero-title">
              Come home to calm.
            </h1>
            <p className="hero-description">
              Thoughtful, reliable home cleaning tailored to modern living. 
              From routine maintenance to thorough seasonal resets, we handle the details with honest care so you can rest easy.
            </p>
            <div className="hero-actions">
              <Link to="/book" className="btn btn-primary">
                Book a Service
              </Link>
              <a href="#services" onClick={scrollToServices} className="btn btn-secondary">
                Explore Services
              </a>
            </div>
            <div className="hero-guarantees">
              <div className="guarantee-item">
                <span className="guarantee-icon" aria-hidden="true">&#10003;</span>
                <span>Vetted & Insured</span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon" aria-hidden="true">&#10003;</span>
                <span>Eco-Friendly Supplies</span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon" aria-hidden="true">&#10003;</span>
                <span>Checklist Guaranteed</span>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-image-wrapper">
              <img
                src="/images/hero-clean-home.jpg"
                alt="Bright, pristine living room with natural light and dust-free hardwood floors"
                className="hero-image"
                loading="eager"
              />
              <div className="hero-image-caption">
                <span>The Klaro Standard: Sunlit, tranquil living spaces.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="services" className="klaro-services-section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Offerings</span>
            <h2 id="services-heading" className="section-title">
              Tailored Cleaning Services
            </h2>
            <p className="section-subtitle">
              Clear scopes, honest pricing, and meticulous attention to every room.
            </p>
          </div>

          <div className="services-grid">
            {/* Service 1 */}
            <article className="service-card">
              <div className="service-card-media">
                <img
                  src="/images/service-regular.jpg"
                  alt="Cleaner wiping spotless countertop surfaces"
                  className="service-card-img"
                  loading="lazy"
                />
                <span className="service-badge">Recurring Upkeep</span>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Regular Home Maintenance</h3>
                <p className="service-card-text">
                  Weekly, bi-weekly, or monthly upkeep keeping your home consistently pristine. Includes dusting, vacuuming, mopping, bathroom sanitization, and kitchen exterior wipe-downs.
                </p>
                <div className="service-card-meta">
                  <span className="service-price">From $110 <small>/ visit</small></span>
                  <Link to="/book" className="service-card-link">
                    Book Regular &rarr;
                  </Link>
                </div>
              </div>
            </article>

            {/* Service 2 */}
            <article className="service-card">
              <div className="service-card-media">
                <img
                  src="/images/service-deep-clean.jpg"
                  alt="Spotless polished kitchen appliances and marble surfaces"
                  className="service-card-img"
                  loading="lazy"
                />
                <span className="service-badge">Top to Bottom</span>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Deep Seasonal Clean</h3>
                <p className="service-card-text">
                  An exhaustive refresh targeting hidden grime. Includes hand-washed baseboards, detailed interior appliance exteriors, bathroom grout scrubbing, and door frame dusting.
                </p>
                <div className="service-card-meta">
                  <span className="service-price">From $220 <small>/ clean</small></span>
                  <Link to="/book" className="service-card-link">
                    Book Deep Clean &rarr;
                  </Link>
                </div>
              </div>
            </article>

            {/* Service 3 */}
            <article className="service-card">
              <div className="service-card-media">
                <img
                  src="/images/service-move-out.jpg"
                  alt="Pristine vacant apartment ready for handover inspection"
                  className="service-card-img"
                  loading="lazy"
                />
                <span className="service-badge">Handover Standard</span>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Move-In / Move-Out Clean</h3>
                <p className="service-card-text">
                  Guaranteed lease-end and new-home handover readiness. We deep-clean inside all empty cabinets, inside ovens and refrigerators, window tracks, and detailed sanitization throughout.
                </p>
                <div className="service-card-meta">
                  <span className="service-price">From $290 <small>/ clean</small></span>
                  <Link to="/book" className="service-card-link">
                    Book Move Clean &rarr;
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Photo Gallery Section */}
      <section className="klaro-gallery-section" aria-labelledby="gallery-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Work Quality</span>
            <h2 id="gallery-heading" className="section-title">
              Our Cleaning Standards
            </h2>
            <p className="section-subtitle">
              Every appointment adheres to our strict, itemized room checklist. Here is what real care looks like.
            </p>
          </div>

          <div className="gallery-grid">
            <figure className="gallery-item">
              <div className="gallery-media">
                <img
                  src="/images/gallery-kitchen.jpg"
                  alt="Detailed sink and countertop sanitization"
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
              <figcaption className="gallery-caption">
                <strong>Kitchen Countertops & Fixtures</strong>
                <span>Streak-free sanitization of high-touch food prep zones and chrome faucets.</span>
              </figcaption>
            </figure>

            <figure className="gallery-item">
              <div className="gallery-media">
                <img
                  src="/images/gallery-bathroom.jpg"
                  alt="Sparkling clean contemporary bathroom"
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
              <figcaption className="gallery-caption">
                <strong>Bathroom Tile & Glass</strong>
                <span>Eco-friendly soap scum removal and crystal clear glass enclosure polishing.</span>
              </figcaption>
            </figure>

            <figure className="gallery-item">
              <div className="gallery-media">
                <img
                  src="/images/gallery-living.jpg"
                  alt="Spotless hardwood floor living area"
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
              <figcaption className="gallery-caption">
                <strong>Living Spaces & Flooring</strong>
                <span>HEPA-filtered corner vacuuming and gentle pH-neutral hardwood floor care.</span>
              </figcaption>
            </figure>

            <figure className="gallery-item">
              <div className="gallery-media">
                <img
                  src="/images/gallery-supplies.jpg"
                  alt="Eco-friendly spray bottle and microfiber cloths"
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
              <figcaption className="gallery-caption">
                <strong>Mindful Non-Toxic Products</strong>
                <span>Biodegradable formulas and color-coded microfiber towels preventing cross-contamination.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 4. Three-Step How It Works */}
      <section className="klaro-steps-section" aria-labelledby="steps-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Simple & Transparent</span>
            <h2 id="steps-heading" className="section-title">
              How It Works
            </h2>
            <p className="section-subtitle">
              Booking your home care takes less than two minutes.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number" aria-hidden="true">01</div>
              <h3 className="step-title">Choose Your Service</h3>
              <p className="step-text">
                Pick the care level your home needs: regular maintenance, a seasonal deep scrub, or a move-in turnover clean.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number" aria-hidden="true">02</div>
              <h3 className="step-title">Select a Time Window</h3>
              <p className="step-text">
                Select a morning, midday, or afternoon window that works around your family's daily schedule.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number" aria-hidden="true">03</div>
              <h3 className="step-title">Enjoy Your Sanctuary</h3>
              <p className="step-text">
                Walk through the door to sparkling surfaces, fresh natural scent, and zero cleaning chores left on your plate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Booking Call to Action */}
      <section className="klaro-cta-section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-box">
            <span className="cta-eyebrow">Experience Mindful Home Care</span>
            <h2 id="cta-heading" className="cta-title">
              Ready for a cleaner, calmer home?
            </h2>
            <p className="cta-text">
              Try our demo booking flow to see how simple scheduling professional cleaning should be.
            </p>
            <div className="cta-actions">
              <Link to="/book" className="btn btn-primary cta-btn">
                Book a Service Today
              </Link>
              <Link to="/contact" className="btn btn-secondary cta-btn-secondary">
                Have Questions? Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
