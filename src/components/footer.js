import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-top-grid">
            <div className="footer-brand-column">
              <div className="footer-logo-wrapper">
                <span className="footer-brand-name section-title">
                  Victoria Family Stay
                </span>
                <p className="footer-brand-tagline section-subtitle">
                  Boutique vacation rentals in the heart of Victoria, BC.
                </p>
              </div>
              <div className="footer-social-wrapper">
                <a href="#">
                  <div
                    aria-label="Follow us on Instagram"
                    className="footer-social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow us on Facebook"
                    className="footer-social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Find us on Airbnb"
                    className="footer-social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 10q-3 0-3 3c0 1.5 1.494 3.535 3 5.5c1 1 1.5 1.5 2.5 2s2.5 1 4.5-.5s1.5-3.5.5-6s-2.333-5.5-5-9.5C13.666 3.5 13 3 11.997 3c-1 0-1.623.45-2.497 1.5c-2.667 4-4 7-5 9.5S3 18.5 5 20s3.5 1 4.5.5s1.5-1 2.5-2c1.506-1.965 3-4 3-5.5q0-3-3-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-column-title">Our Properties</h3>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Private Bedroom</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Mountain View 3BR Suite</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="Homepage">
                    <div className="footer-nav-link">
                      <span>Back to Home</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Booking Policies</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact-column">
              <h3 className="footer-column-title">Get in Touch</h3>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <div className="footer-icon-box">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </g>
                    </svg>
                  </div>
                  <span className="section-content">
                    Victoria, British Columbia, Canada
                  </span>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-icon-box">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                  </div>
                  <a href="mailto:hello@harborpeakstays.com?subject=">
                    <div className="footer-nav-link">
                      <span>victoriafamilystay@gmail.com</span>
                    </div>
                  </a>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-icon-box">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="section-content">+1 (250) 532-0189</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-bar">
            <div className="footer-legal-links">
              <span className="section-content">
                © 2026 Victoria Family Stay. All rights reserved.
              </span>
              <div className="footer-legal-nav">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-certification">
              <span className="footer-badge">Licensed Rental</span>
              <span className="footer-badge">Superhost 2024</span>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-interactivity">
(function(){
  const socialLinks = document.querySelectorAll(".footer-social-link")

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    })
  })

  const footerLinks = document.querySelectorAll(".footer-nav-link")
  footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href")
      if (href === "#") {
        e.preventDefault()
      }
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <video
        src
        loop="true"
        muted="true"
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        autoPlay="true"
        playsInline="true"
        className="footer-video"
      ></video>
    </div>
  )
}

export default Footer
