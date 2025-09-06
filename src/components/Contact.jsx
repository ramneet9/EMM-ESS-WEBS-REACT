import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const tokenRef = useRef(null)
  const [startedAt, setStartedAt] = useState(Date.now())
  useEffect(() => {
    setStartedAt(Date.now())
  }, [])
  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const run = () => {
      const formData = new FormData(form)
      const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        company: formData.get('company') || '', // honeypot, must be empty
        tookMs: Date.now() - startedAt
      }
      
      // Use FormData for PHP form
      const phpFormData = new FormData()
      phpFormData.append('name', payload.name)
      phpFormData.append('email', payload.email)
      phpFormData.append('subject', payload.subject)
      phpFormData.append('message', payload.message)
      
      // Always use PHP mailer for production deployment
      const endpoint = '/forms/contact-godaddy-optimized.php'
      const requestBody = phpFormData
      const headers = {}
      
      fetch(endpoint, {
        method: 'POST',
        headers,
        body: requestBody
      }).then(async (r) => {
        const data = await r.json()
        const loading = form.querySelector('.loading')
        const error = form.querySelector('.error-message')
        const sent = form.querySelector('.sent-message')
        loading.style.display = 'none'
        
        // Handle PHP response format
        if (data.status === 'error') {
          error.textContent = data.message || 'Submission failed'
          error.style.display = 'block'
        } else if (data.status === 'success') {
          error.style.display = 'none'
          sent.style.display = 'block'
          form.reset()
        } else {
          error.textContent = 'Unknown error occurred'
          error.style.display = 'block'
        }
      }).catch(() => {
        const error = form.querySelector('.error-message')
        const loading = form.querySelector('.loading')
        loading.style.display = 'none'
        error.textContent = 'Network error'
        error.style.display = 'block'
      })
    }
    run()
  }
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
        <div>
          <div className="map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.986617504797!2d77.12011051429545!3d28.630163182418737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzQ4LjYiTiA3N8KwMDcnMjAuMyJF!5e0!3m2!1sen!2sin!4v1592389632279!5m2!1sen!2sin" style={{ border: 0, width: '100%', height: '400px' }} allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy"></iframe>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Address:</h4>
                <p>BE-375 Front Side 2nd Floor, Street No.7, Hari Nagar, New Delhi-110064</p>
              </div>
              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>info@emmessenterprises.com</p>
                <p>emmessindia@gmail.com</p>
              </div>
              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+91 011 49075849</p>
                <p>+91 9643331332</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form onSubmit={onSubmit} role="form" className="php-email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              {/* Honeypot field - hidden from users */}
              <div style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


