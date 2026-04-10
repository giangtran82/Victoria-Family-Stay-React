import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav id="main-nav" className="navigation-wrapper">
        <div className="navigation-container">
          <Link to="/">
            <div className="navigation-logo-link">
              <div className="navigation-logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="m12 4.27l9.577 7.172l-.623.793L19 10.769V20H5v-9.23l-1.954 1.465l-.623-.793zm-3.496 8.198q0 1.003 1.079 2.138T12 16.962q1.377-1.221 2.456-2.355t1.079-2.134q0-.83-.57-1.383q-.57-.551-1.368-.551q-.493 0-.896.204q-.403.205-.701.515q-.26-.31-.678-.515q-.418-.204-.875-.204q-.8 0-1.372.548q-.571.549-.571 1.381M18 19v-9l-6-4.5L6 10v9zm0 0H6z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <span className="navigation-brand-name section-title">
                Victoria Family Stay
              </span>
            </div>
          </Link>
          <div className="navigation-desktop-menu">
            <div className="navigation-link-group">
              <Link to="/">
                <div className="navigation-link">
                  <span>Home</span>
                </div>
              </Link>
              <div className="navigation-dropdown">
                <button
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="navigation-dropdown-trigger navigation-link"
                >
                  <span>Our Properties</span>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m6 9l6 6l6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div className="navigation-dropdown-content">
                  <Link to="/">
                    <div className="navigation-dropdown-link">
                      <span className="navigation-dropdown-title">
                        Mountain Suite
                      </span>
                      <span className="navigation-dropdown-desc">
                        3BR with Kitchen &amp; Balcony
                      </span>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="navigation-dropdown-link">
                      <span className="navigation-dropdown-title">
                        Private Sanctuary
                      </span>
                      <span className="navigation-dropdown-desc">
                        Bedroom with Private Bath
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              <Link to="/">
                <div className="navigation-link">
                  <span>Victoria Guide</span>
                </div>
              </Link>
              <Link to="/">
                <div className="navigation-link">
                  <span>Contact</span>
                </div>
              </Link>
            </div>
            <Link to="/">
              <div className="btn-sm btn-primary btn">
                <span>Book Your Stay</span>
              </div>
            </Link>
          </div>
          <button
            id="mobile-toggle"
            aria-label="Open Menu"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 8h16M4 16h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobile-overlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <Link to="/">
            <div className="navigation-logo-link">
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m8 3l4 8l5-5l5 15H2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="navigation-brand-name section-title">
                Harbor Peak
              </span>
            </div>
          </Link>
          <button
            id="mobile-close"
            aria-label="Close Menu"
            className="navigation-mobile-close"
          >
            <svg
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                <path d="M9 16l3-3l3 3"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <div className="navigation-overlay-links">
            <Link to="/">
              <div className="navigation-overlay-link">
                <span>Home</span>
              </div>
            </Link>
            <div className="navigation-overlay-nested">
              <span className="navigation-overlay-label">Our Properties</span>
              <Link to="/">
                <div className="navigation-overlay-link-sub">
                  <span>Mountain Suite (3BR)</span>
                </div>
              </Link>
              <Link to="/">
                <div className="navigation-overlay-link-sub">
                  <span>Private Sanctuary (1BR)</span>
                </div>
              </Link>
            </div>
            <Link to="/">
              <div className="navigation-overlay-link">
                <span>Victoria Guide</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-overlay-link">
                <span>Contact</span>
              </div>
            </Link>
          </div>
          <div className="navigation-overlay-footer">
            <Link to="/">
              <div className="btn-lg btn-primary navigation-full-width btn">
                <span>Book Now</span>
              </div>
            </Link>
            <p className="section-content navigation-location-tag">
              Victoria, British Columbia
            </p>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-mobile-overlay {
  transition: none;
}
.navigation-dropdown-content {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById("mobile-toggle")
  const mobileClose = document.getElementById("mobile-close")
  const mobileOverlay = document.getElementById("mobile-overlay")
  const navLinks = document.querySelectorAll(".navigation-overlay-link, .navigation-overlay-link-sub")

  const openMenu = () => {
    mobileOverlay.classList.add("is-active")
    document.body.style.overflow = "hidden"
    mobileToggle.setAttribute("aria-expanded", "true")
  }

  const closeMenu = () => {
    mobileOverlay.classList.remove("is-active")
    document.body.style.overflow = ""
    mobileToggle.setAttribute("aria-expanded", "false")
  }

  mobileToggle.addEventListener("click", openMenu)
  mobileClose.addEventListener("click", closeMenu)

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })

  let lastScroll = 0
  const nav = document.getElementById("main-nav")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      nav.style.boxShadow = "none"
      return
    }

    if (currentScroll > lastScroll) {
      nav.style.transform = "translateY(-100%)"
    } else {
      nav.style.transform = "translateY(0)"
      nav.style.boxShadow = "0 4px 20px -10px rgba(0,0,0,0.1)"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
