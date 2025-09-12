import React from 'react'
import './ContactSection.css'

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        // lightweight client-side handling for now
        const form = new FormData(e.target)
        const data = Object.fromEntries(form.entries())
        // eslint-disable-next-line no-console
        console.log('Contact form submitted', data)
        // reset form
        e.target.reset()
    }

    return (
        <div>
            <div className='contact-head'>
                <h1 className='contact-title'>Contact Us For <span className='highlight'>A Quote</span> Today</h1>
                <p className='contact-desc'>Get in touch with us today—we’re here to help with information, quotes, and expert guidance. Fill out the form below or reach out to our team, and we’ll respond promptly to support your renewable energy journey.</p>
            </div>
            <section className="contact-section">
                <div className="contact-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label className="field-label">Name <span className="required">*</span></label>
                        <input name="name" type="text" className="text-input" placeholder="Text" required />

                        <label className="field-label">Email <span className="required">*</span></label>
                        <input name="email" type="email" className="text-input" placeholder="Text" required />

                        <label className="field-label">Your Message</label>
                        <textarea name="message" className="text-area" placeholder="Text" rows="6" />

                        <div className="form-actions">
                            <button type="submit" className="submit-btn">Send Message</button>
                        </div>
                    </form>

                    <aside className="contact-info">
                        <h2 className="contact-title">Contact Us</h2>
                        <p className="contact-line"><strong>Phone:</strong> +91-12345-67890</p>
                        <p className="contact-line"><strong>Email:</strong> contact@example.com</p>
                        <p className="contact-line"><strong>Address:</strong> 123 Solar Lane, Mumbai, MH</p>
                    </aside>
                </div>
            </section>
        </div>
    )
}

export default ContactSection
