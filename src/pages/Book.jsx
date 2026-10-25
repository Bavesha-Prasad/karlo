import { useState, useId } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import './Book.css'

export default function Book() {
  const [searchParams] = useSearchParams()
  const initialService = searchParams.get('service') || ''

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    streetAddress: '',
    unit: '',
    postalCode: '',
    serviceType: ['regular', 'deep', 'move'].includes(initialService) ? initialService : '',
    homeSize: '',
    serviceDate: '',
    timeSlot: '',
    specialInstructions: ''
  })

  // Validation Errors
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [confirmationData, setConfirmationData] = useState(null)

  // Generate unique IDs for accessibility
  const baseId = useId()

  // Calculate today's / minimum allowable date (YYYY-MM-DD)
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const dd = String(today.getDate()).padStart(2, '0')
  const minDate = `${yyyy}-${mm}-${dd}`

  // Helper to determine day of week from YYYY-MM-DD string
  const getDayOfWeek = (dateString) => {
    if (!dateString) return null
    const [y, m, d] = dateString.split('-').map(Number)
    const dateObj = new Date(y, m - 1, d)
    return dateObj.getDay() // 0 = Sun, 1 = Mon, ..., 6 = Sat
  }

  const selectedDay = getDayOfWeek(formData.serviceDate)
  const isSunday = selectedDay === 0
  const isSaturday = selectedDay === 6
  const isWeekday = selectedDay !== null && selectedDay >= 1 && selectedDay <= 5

  // Compute available time slots depending on the selected date
  const getTimeSlots = () => {
    if (!formData.serviceDate || isSunday) {
      return []
    }
    if (isSaturday) {
      return [
        { id: 'morning-sat', label: 'Morning (9:00 AM – 11:30 AM)' },
        { id: 'midday', label: 'Midday (12:00 PM – 2:30 PM)' }
      ]
    }
    // Weekday: Mon-Fri
    return [
      { id: 'morning-weekday', label: 'Morning (8:30 AM – 11:30 AM)' },
      { id: 'midday', label: 'Midday (12:00 PM – 2:30 PM)' },
      { id: 'afternoon-weekday', label: 'Afternoon (3:30 PM – 6:00 PM)' }
    ]
  }

  const availableSlots = getTimeSlots()

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => {
      const updated = { ...prev, [name]: value }

      // If date changes, check if current timeSlot is still valid
      if (name === 'serviceDate') {
        const newDay = getDayOfWeek(value)
        if (newDay === 0) {
          updated.timeSlot = '' // Closed on Sunday
        } else if (newDay === 6 && prev.timeSlot === 'afternoon-weekday') {
          updated.timeSlot = '' // Afternoon not available on Saturday
        }
      }
      return updated
    })

    // Clear inline error when user edits
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  // Form Validation
  const validate = () => {
    const newErrors = {}

    // Customer details
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name.'
    }

    const phoneDigits = formData.phone.replace(/[^0-9]/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.'
    } else if (phoneDigits.length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits).'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).'
    }

    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = 'Street address is required.'
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required.'
    }

    // Service details
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type.'
    }

    if (!formData.homeSize) {
      newErrors.homeSize = 'Please select your home size.'
    }

    // Date & Time
    if (!formData.serviceDate) {
      newErrors.serviceDate = 'Please select a preferred service date.'
    } else if (isSunday) {
      newErrors.serviceDate = 'Klaro is closed on Sundays for team rest. Please choose Monday through Saturday.'
    } else if (formData.serviceDate < minDate) {
      newErrors.serviceDate = 'Past dates cannot be selected.'
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please select an available time window.'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      // Focus the first invalid element for accessibility
      const firstErrorKey = Object.keys(validationErrors)[0]
      const el = document.getElementById(`${baseId}-${firstErrorKey}`)
      if (el) el.focus()
      return
    }

    // Generate mock reference
    const randomRef = `#KL-${Math.floor(1000 + Math.random() * 9000)}`

    // Human readable labels for receipt
    const serviceLabels = {
      regular: 'Regular Home Maintenance (From $110)',
      deep: 'Deep Seasonal Clean (From $220)',
      move: 'Move-In / Move-Out Clean (From $290)'
    }

    const sizeLabels = {
      small: '1 bedroom / 1 bathroom',
      medium: '2–3 bedrooms / 2 bathrooms',
      large: '4+ bedrooms / 3+ bathrooms'
    }

    const slotObj = availableSlots.find((s) => s.id === formData.timeSlot)
    const slotLabel = slotObj ? slotObj.label : formData.timeSlot

    // Format selected date
    const [y, m, d] = formData.serviceDate.split('-').map(Number)
    const formattedDate = new Date(y, m - 1, d).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    setConfirmationData({
      refNumber: randomRef,
      serviceName: serviceLabels[formData.serviceType] || formData.serviceType,
      homeSize: sizeLabels[formData.homeSize] || formData.homeSize,
      dateString: formattedDate,
      timeSlotString: slotLabel,
      customerName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      fullAddress: `${formData.streetAddress}${formData.unit ? `, Apt/Unit ${formData.unit}` : ''}, ${formData.postalCode.toUpperCase()}`,
      specialInstructions: formData.specialInstructions.trim()
    })

    setIsSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      streetAddress: '',
      unit: '',
      postalCode: '',
      serviceType: '',
      homeSize: '',
      serviceDate: '',
      timeSlot: '',
      specialInstructions: ''
    })
    setErrors({})
    setIsSubmitted(false)
    setConfirmationData(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="klaro-book-page">
      {/* Page Header */}
      <section className="book-hero-section">
        <div className="container">
          <div className="book-hero-content">
            <span className="section-eyebrow">Online Scheduling</span>
            <h1 className="book-hero-title">Book Your Cleaning</h1>
            <p className="book-hero-subtitle">
              Choose your service type, home size, and preferred daytime window. 
              Our validated scheduling form demonstrates transparent small-business appointment booking.
            </p>
          </div>
        </div>
      </section>

      <div className="container book-container">
        {/* =================================================================
            VIEW A: CONFIRMATION RECEIPT (Rendered upon valid submission)
            ================================================================= */}
        {isSubmitted && confirmationData ? (
          <div className="confirmation-card" role="status" aria-live="polite">
            <div className="confirmation-header">
              <div className="confirmation-badge" aria-hidden="true">&#10003;</div>
              <span className="confirmation-eyebrow">Request Received (Demo)</span>
              <h2 className="confirmation-title">Booking Confirmation</h2>
              <div className="confirmation-ref">
                Reference: <strong>{confirmationData.refNumber}</strong>
              </div>
            </div>

            {/* Strict Honesty Disclosure */}
            <div className="confirmation-notice-box" role="alert">
              <strong>Important Notice:</strong> Demo submission only. No real booking was placed, and your information was not transmitted or saved. No slot has been reserved or charged, and no real availability was checked.
            </div>

            <div className="confirmation-summary-grid">
              <div className="summary-item">
                <span className="summary-label">Selected Service</span>
                <span className="summary-value">{confirmationData.serviceName}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Property Size</span>
                <span className="summary-value">{confirmationData.homeSize}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Appointment Date</span>
                <span className="summary-value">{confirmationData.dateString}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Time Window</span>
                <span className="summary-value">{confirmationData.timeSlotString}</span>
              </div>
              <div className="summary-item summary-full-width">
                <span className="summary-label">Service Address</span>
                <span className="summary-value">{confirmationData.fullAddress}</span>
              </div>
              <div className="summary-item summary-full-width">
                <span className="summary-label">Customer Contact</span>
                <span className="summary-value">
                  {confirmationData.customerName} &bull; {confirmationData.phone} &bull; {confirmationData.email}
                </span>
              </div>
              {confirmationData.specialInstructions && (
                <div className="summary-item summary-full-width">
                  <span className="summary-label">Special Instructions</span>
                  <span className="summary-value notes-text">
                    "{confirmationData.specialInstructions}"
                  </span>
                </div>
              )}
            </div>

            <div className="confirmation-actions">
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-primary"
              >
                Book Another Service
              </button>
              <Link to="/" className="btn btn-secondary">
                Return to Home
              </Link>
            </div>
          </div>
        ) : (
          /* =================================================================
             VIEW B: INTERACTIVE BOOKING FORM
             ================================================================= */
          <div className="booking-form-wrapper">
            <form onSubmit={handleSubmit} className="booking-form" noValidate>
              
              {/* Form Intro Notice */}
              <div className="form-info-banner">
                <p>
                  <strong>Frontend Demonstration:</strong> All fields are validated in real time. Required fields are marked with an asterisk (<span className="required-star">*</span>).
                </p>
              </div>

              {/* -------------------------------------------------------------
                  SECTION 1: CUSTOMER DETAILS
                  ------------------------------------------------------------- */}
              <fieldset className="form-fieldset">
                <legend className="fieldset-legend">1. Customer Information</legend>
                
                <div className="form-grid form-grid-2">
                  <div className="form-group">
                    <label htmlFor={`${baseId}-fullName`} className="form-label">
                      Full Name <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={`${baseId}-fullName`}
                      name="fullName"
                      type="text"
                      className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                      placeholder="e.g. Jane Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? `${baseId}-fullName-error` : undefined}
                    />
                    {errors.fullName && (
                      <span id={`${baseId}-fullName-error`} className="field-error" role="alert">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor={`${baseId}-phone`} className="form-label">
                      Mobile Number <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={`${baseId}-phone`}
                      name="phone"
                      type="tel"
                      className={`form-input ${errors.phone ? 'input-error' : ''}`}
                      placeholder="e.g. (555) 019-2834"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? `${baseId}-phone-error` : undefined}
                    />
                    {errors.phone && (
                      <span id={`${baseId}-phone-error`} className="field-error" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor={`${baseId}-email`} className="form-label">
                    Email Address <span className="required-star" aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${baseId}-email`}
                    name="email"
                    type="email"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    placeholder="e.g. jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? `${baseId}-email-error` : undefined}
                  />
                  {errors.email && (
                    <span id={`${baseId}-email-error`} className="field-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-grid form-grid-address">
                  <div className="form-group address-street">
                    <label htmlFor={`${baseId}-streetAddress`} className="form-label">
                      Street Address <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={`${baseId}-streetAddress`}
                      name="streetAddress"
                      type="text"
                      className={`form-input ${errors.streetAddress ? 'input-error' : ''}`}
                      placeholder="e.g. 742 Evergreen Terrace"
                      value={formData.streetAddress}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.streetAddress}
                      aria-describedby={errors.streetAddress ? `${baseId}-streetAddress-error` : undefined}
                    />
                    {errors.streetAddress && (
                      <span id={`${baseId}-streetAddress-error`} className="field-error" role="alert">
                        {errors.streetAddress}
                      </span>
                    )}
                  </div>

                  <div className="form-group address-unit">
                    <label htmlFor={`${baseId}-unit`} className="form-label">
                      Unit / Apt <span className="optional-tag">(Optional)</span>
                    </label>
                    <input
                      id={`${baseId}-unit`}
                      name="unit"
                      type="text"
                      className="form-input"
                      placeholder="e.g. 4B"
                      value={formData.unit}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group address-postal">
                    <label htmlFor={`${baseId}-postalCode`} className="form-label">
                      Postal Code <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={`${baseId}-postalCode`}
                      name="postalCode"
                      type="text"
                      className={`form-input ${errors.postalCode ? 'input-error' : ''}`}
                      placeholder="e.g. NW102"
                      value={formData.postalCode}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.postalCode}
                      aria-describedby={errors.postalCode ? `${baseId}-postalCode-error` : undefined}
                    />
                    {errors.postalCode && (
                      <span id={`${baseId}-postalCode-error`} className="field-error" role="alert">
                        {errors.postalCode}
                      </span>
                    )}
                  </div>
                </div>
              </fieldset>

              {/* -------------------------------------------------------------
                  SECTION 2: SERVICE DETAILS
                  ------------------------------------------------------------- */}
              <fieldset className="form-fieldset">
                <legend className="fieldset-legend">2. Service & Property Details</legend>
                
                <div className="form-grid form-grid-2">
                  <div className="form-group">
                    <label htmlFor={`${baseId}-serviceType`} className="form-label">
                      Service Type <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <select
                      id={`${baseId}-serviceType`}
                      name="serviceType"
                      className={`form-select ${errors.serviceType ? 'input-error' : ''}`}
                      value={formData.serviceType}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.serviceType}
                      aria-describedby={errors.serviceType ? `${baseId}-serviceType-error` : undefined}
                    >
                      <option value="">Choose a service package...</option>
                      <option value="regular">Regular Home Maintenance (From $110)</option>
                      <option value="deep">Deep Seasonal Clean (From $220)</option>
                      <option value="move">Move-In / Move-Out Clean (From $290)</option>
                    </select>
                    {errors.serviceType && (
                      <span id={`${baseId}-serviceType-error`} className="field-error" role="alert">
                        {errors.serviceType}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor={`${baseId}-homeSize`} className="form-label">
                      Home Size <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <select
                      id={`${baseId}-homeSize`}
                      name="homeSize"
                      className={`form-select ${errors.homeSize ? 'input-error' : ''}`}
                      value={formData.homeSize}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.homeSize}
                      aria-describedby={errors.homeSize ? `${baseId}-homeSize-error` : undefined}
                    >
                      <option value="">Select your home size...</option>
                      <option value="small">1 bedroom / 1 bathroom</option>
                      <option value="medium">2–3 bedrooms / 2 bathrooms</option>
                      <option value="large">4+ bedrooms / 3+ bathrooms</option>
                    </select>
                    {errors.homeSize && (
                      <span id={`${baseId}-homeSize-error`} className="field-error" role="alert">
                        {errors.homeSize}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor={`${baseId}-specialInstructions`} className="form-label">
                    Special Instructions / Notes <span className="optional-tag">(Optional)</span>
                  </label>
                  <textarea
                    id={`${baseId}-specialInstructions`}
                    name="specialInstructions"
                    rows="3"
                    className="form-textarea"
                    placeholder="e.g. We have a friendly golden retriever; key will be in the porch lockbox; please focus extra care on the master bathroom."
                    value={formData.specialInstructions}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </fieldset>

              {/* -------------------------------------------------------------
                  SECTION 3: DATE & TIME SELECTION
                  ------------------------------------------------------------- */}
              <fieldset className="form-fieldset">
                <legend className="fieldset-legend">3. Schedule & Daytime Window</legend>

                <div className="operating-hours-callout">
                  <strong>Operating Hours:</strong> Monday&ndash;Friday 8:00 AM&ndash;6:00 PM &bull; Saturday 9:00 AM&ndash;2:00 PM &bull; Sunday Closed
                </div>

                <div className="form-grid form-grid-2">
                  <div className="form-group">
                    <label htmlFor={`${baseId}-serviceDate`} className="form-label">
                      Preferred Date <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={`${baseId}-serviceDate`}
                      name="serviceDate"
                      type="date"
                      min={minDate}
                      className={`form-input ${errors.serviceDate ? 'input-error' : ''}`}
                      value={formData.serviceDate}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.serviceDate}
                      aria-describedby={`${baseId}-date-hint ${errors.serviceDate ? `${baseId}-serviceDate-error` : ''}`}
                    />
                    <span id={`${baseId}-date-hint`} className="input-hint">
                      Sundays and past dates are unavailable.
                    </span>
                    {errors.serviceDate && (
                      <span id={`${baseId}-serviceDate-error`} className="field-error" role="alert">
                        {errors.serviceDate}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor={`${baseId}-timeSlot`} className="form-label">
                      Time Window <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <select
                      id={`${baseId}-timeSlot`}
                      name="timeSlot"
                      className={`form-select ${errors.timeSlot ? 'input-error' : ''}`}
                      value={formData.timeSlot}
                      onChange={handleChange}
                      disabled={!formData.serviceDate || isSunday}
                      aria-required="true"
                      aria-invalid={!!errors.timeSlot}
                      aria-describedby={errors.timeSlot ? `${baseId}-timeSlot-error` : undefined}
                    >
                      <option value="">
                        {!formData.serviceDate
                          ? 'Select a date first...'
                          : isSunday
                          ? 'Closed on Sundays'
                          : 'Select an available time window...'}
                      </option>
                      {availableSlots.map((slot) => (
                        <option key={slot.id} value={slot.id}>
                          {slot.label}
                        </option>
                      ))}
                    </select>

                    <span className="input-hint">
                      {isSaturday && 'Saturday slots: Morning & Midday only.'}
                      {isWeekday && 'Weekday slots: Morning, Midday, & Afternoon available.'}
                      {isSunday && 'Please select Monday through Saturday to see slots.'}
                    </span>

                    {errors.timeSlot && (
                      <span id={`${baseId}-timeSlot-error`} className="field-error" role="alert">
                        {errors.timeSlot}
                      </span>
                    )}
                  </div>
                </div>
              </fieldset>

              {/* Submit Button */}
              <div className="form-submit-row">
                <button type="submit" className="btn btn-primary submit-booking-btn">
                  Submit Booking Request &rarr;
                </button>
                <p className="form-safe-text">
                  <span>&#128274;</span> This is a frontend demo. No credit card is required, and no live appointment will be booked.
                </p>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  )
}
