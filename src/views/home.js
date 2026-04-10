import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Logos1 from '../components/logos1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Victoria Family Stay</title>
        <meta
          name="description"
          content="Offer vacation rentals, accommodation, family -friendly for singles, couples, family and group in Victoria, British Columbia, Canada"
        />
        <meta property="og:title" content="Victoria Family Stay" />
        <meta
          property="og:description"
          content="Offer vacation rentals, accommodation, family -friendly for singles, couples, family and group in Victoria, British Columbia, Canada"
        />
        <link
          rel="canonical"
          href="https://improbable-unfolded-human-qng6o0.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://improbable-unfolded-human-qng6o0.teleporthq.app/"
        />
      </Helmet>
      <div className="home-container11">
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
                    <a href="#properties" className="home-link10">
                      Our Properties
                    </a>
                    <a href="#properties">
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                        className="home-icon102"
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
                    </a>
                  </button>
                  <div className="navigation-dropdown-content">
                    <a href="#1bdr">
                      <div className="home-thq-navigation-dropdown-link-elm1 navigation-dropdown-link">
                        <span className="navigation-dropdown-title">
                          Mountain Suite
                        </span>
                        <span className="navigation-dropdown-desc">
                          3BR with Kitchen &amp; Balcony
                        </span>
                      </div>
                    </a>
                    <a href="#3bdr">
                      <div className="home-thq-navigation-dropdown-link-elm2 navigation-dropdown-link">
                        <span className="navigation-dropdown-title">
                          Private Sanctuary
                        </span>
                        <span className="navigation-dropdown-desc">
                          Bedroom with Private Bath
                        </span>
                      </div>
                    </a>
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
              <a href="#book">
                <div className="home-thq-btn-elm10 btn-sm btn-primary btn">
                  <span>Book Your Stay</span>
                </div>
              </a>
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
        <div className="home-container12">
          <div className="home-container13">
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
        <div className="home-container14">
          <div className="home-container15">
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
      <section className="welcome-hero">
        <div className="hero-media">
          <img
            alt="Victoria BC Skyline at Twilight"
            src="https://images.unsplash.com/photo-1641700038318-fbd7f0a64a7d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHx2YWNhdGlvbiUyMHZpY3RvcmlhJTIwY2FuYWRhfGVufDB8fHx8MTc3NTM2NTQyMnww&amp;ixlib=rb-4.1.0&amp;w=1500"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-container">
          <div className="home-thq-hero-content-block-elm hero-content-block">
            <h1 className="home-thq-hero-title-elm home-hero-title hero-title">
              Your Coastal Escape Awaits at Victoria Family Stays
            </h1>
            <p className="home-thq-hero-subtitle-elm hero-subtitle home-hero-subtitle">
              Experience the charm of Victoria, BC from our curated short-term
              rentals. Whether a solo retreat or a family getaway, find your
              perfect home away from home.
            </p>
            <div className="hero-actions">
              <a href="#properties">
                <div className="btn-lg btn-primary btn">
                  <span>View Properties</span>
                </div>
              </a>
              <a href="#book">
                <div className="btn-lg hero-btn-alt btn btn-outline">
                  <span>Check Availability</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="properties" className="property-showcase">
        <div className="showcase-split">
          <div className="property-private-room showcase-column">
            <div className="property-card">
              <div className="property-image-wrapper">
                <img
                  alt="Private Bedroom with Bath"
                  src="/1bedroom-1500w.jpg"
                  className="property-thumb"
                />
                <span className="property-tag">Solo or Couple</span>
              </div>
              <div className="property-details">
                <h2 className="home-thq-section-title-elm12 section-title">
                  From $65/night -  Private Bedroom &amp; Bath
                </h2>
                <p className="section-content">
                  A serene sanctuary featuring a private ensuite bathroom.
                  Perfect for singles, business travelers or couples looking for
                  a central, quiet base in Victoria.
                </p>
                <ul className="home-thq-property-highlights-elm1 property-highlights">
                  <li>
                    <div className="icon-ui">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span>
                      {' '}
                      Queen Bed
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <div className="icon-ui">
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
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <span>
                      Central Location
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
                <a href="#1bdr">
                  <div className="btn-secondary btn">
                    <span>Explore Room</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="property-suite showcase-column">
            <div className="property-card">
              <div className="property-image-wrapper">
                <img
                  alt="3-Bedroom Suite with Mountain View"
                  src="/living-1900h.jpg"
                  className="property-thumb"
                />
                <span className="property-tag">Family Friendly</span>
              </div>
              <div className="property-details">
                <h2 className="home-thq-section-title-elm13 section-title">
                  From $185/night -          3-Bedroom Mountain Suite
                </h2>
                <p className="section-content">
                  Spacious living with a full kitchen and a private balcony
                  offering stunning mountain vistas. Ideal for groups or
                  families seeking the ultimate stay.
                </p>
                <ul className="property-highlights">
                  <li>
                    <div className="icon-ui">
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
                    <span>
                      {' '}
                      Mountain Balcony
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <div className="icon-ui">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span>
                      {' '}
                      Full Kitchen
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <div className="home-thq-icon-ui-elm5 icon-ui">
                      <svg width="50" height="50" viewBox="0 0 50 50">
                        <path
                          d="M6 11v33.74C6 46.21 7.237 48 8.76 48h33.218C43.497 48 45 46.21 45 44.74V11zm19.46 26.776c-5.86 0-10.611-4.594-10.611-10.263S19.6 17.25 25.46 17.25s10.611 4.594 10.611 10.263c0 5.67-4.751 10.263-10.611 10.263M41.978 1H8.76C7.237 1 6 2.033 6 3.505V9h39V3.505C45 2.033 43.497 1 41.978 1M19 7H8V3h11zm19.146-.28c-1.249 0-2.258-.979-2.258-2.188c0-1.207 1.009-2.186 2.258-2.186s2.261.979 2.261 2.186c-.001 1.208-1.012 2.188-2.261 2.188"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span> Laundry</span>
                  </li>
                </ul>
                <a href="#3bdr">
                  <div className="home-thq-btn-elm15 btn-secondary btn">
                    <span>Explore Suite</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="1bdr" className="home-thq-gallery3-elm1 thq-section-padding">
        <div className="home-thq-max-width-elm1 thq-section-max-width">
          <div className="home-thq-section-title-elm14">
            <h2 className="home-thq-text-elm2 thq-heading-2">
              Cozy bedroom with private bath
            </h2>
            <span className="home-thq-text-elm3 thq-body-large">
              <span>
                Cozy private room in central Langford - 15 km from Victoria
                downtown which can be suitable for your short stay or vacation.
              </span>
              <br></br>
              <br></br>
              <span>
                Your private room will be furnished with queen bed, working
                desk, fridge, microwave, kettle and coffee machine.
              </span>
              <br></br>
              <br></br>
              <span>
                Our house is located in Bear Mountain, best known for its golf
                courses and resort accommodation. It also offers you great
                mountainous view and atmosphere. It is very close to all
                amenities like Costco, Save on-food and Millstream village.
              </span>
              <br></br>
              <br></br>
              <span>- 20-minute drive to Victoria Downtown</span>
              <br></br>
              <br></br>
              <span>
                - 10-minute drive to Goldstream provincial park, Hatley Castle
                and Royal Road University.
              </span>
            </span>
          </div>
          <a
            href="https://airbnb.ca/h/cozy1r"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link19"
          >
            <div className="home-thq-btn-elm16 btn-secondary btn">
              <span>Book via Airbnb</span>
            </div>
          </a>
          <div className="home-thq-content-elm1">
            <div className="home-container16">
              <img
                alt="Living Room with Mountain View"
                src="/1bedroom-1500w.jpg"
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="home-container17">
              <img
                alt="Fully Equipped Kitchen"
                src="/kitchenete-1200h.png"
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="home-container18">
              <img
                alt="Cozy Bedroom with Private Bath"
                src="/bathroom-1400w.png"
                className="thq-img-ratio-4-3"
              />
            </div>
          </div>
          <div className="home-thq-content-elm2">
            <div className="home-container19">
              <img
                alt="Living Room with Mountain View"
                src="/shared%20space-1200h.jpeg"
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="home-container20">
              <img
                alt="Fully Equipped Kitchen"
                src="/sharedpatio-1200h.jpeg"
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="home-container21">
              <img
                alt="Cozy Bedroom with Private Bath"
                src="/shared%20livingroom-1200h.jpeg"
                className="thq-img-ratio-4-3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-thq-gallery3-elm2 thq-section-padding">
        <div className="home-thq-max-width-elm2 thq-section-max-width">
          <div id="3bdr" className="home-thq-section-title-elm15">
            <h2 className="home-thq-text-elm4 thq-heading-2">
              3 bed-room suite
            </h2>
            <span className="home-thq-text-elm5 thq-body-large">
              <span>
                Welcome to your comfortable home away from home in Bear
                Mountain, Langford, just a short drive from Victoria, BC. This
                3-bedroom, 1-bathroom space is thoughtfully set up for families
                and groups, comfortably accommodating up to 8 guests.
              </span>
              <br className="home-text43"></br>
              <span>
                The home offers a warm, welcoming layout with plenty of room for
                everyone to relax after a day of adventures. Enjoy time together
                in the living area or step onto the private balcony to take in
                the peaceful mountain views—a perfect spot for morning coffee or
                winding down in the evening.
              </span>
              <br></br>
              <span>
                Located in the scenic Bear Mountain community, this home is
                surrounded by nature, with nearby parks, walking trails, and
                outdoor activities that families love. At the same time, you’re
                close to Langford’s shops, grocery stores, and restaurants,
                making family stays easy and stress-free.
              </span>
              <br className="home-text47"></br>
              <span>
                Whether you’re visiting for a family vacation, a sports
                tournament, or a weekend getaway, this home provides the space,
                comfort, and location you need for a relaxing stay.
              </span>
              <br className="home-text49"></br>
              <br></br>
              <span>Family-Friendly Features:</span>
              <br className="home-text52"></br>
              <br></br>
              <span>• 3 spacious bedrooms with 4 queen beds</span>
              <br className="home-text55"></br>
              <br></br>
              <span>• 1 full bathroom with bathtub.</span>
              <br className="home-text58"></br>
              <br></br>
              <span>• Sleeps up to 8 guests.</span>
              <br className="home-text61"></br>
              <br></br>
              <span>• Private balcony with mountain views.</span>
              <br className="home-text64"></br>
              <br></br>
              <span>• Quiet, safe neighborhood</span>
              <br className="home-text67"></br>
              <br></br>
              <span>• Close to parks, trails, and family activities</span>
              <br className="home-text70"></br>
              <br></br>
              <span>
                • Free parking
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <a
            href="https://airbnb.ca/h/3brfamily"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link20"
          >
            <div className="home-thq-btn-elm17 btn-secondary btn">
              <span>Book via Airbnb</span>
            </div>
          </a>
          <div className="home-thq-content-elm3">
            <div className="home-container22">
              <img
                alt="Living Room with Mountain View"
                src="/living-1900h.jpg"
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="home-container23">
              <img
                alt="Fully Equipped Kitchen"
                src="/kitchen-1900h.jpg"
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="home-container24">
              <img
                alt="Cozy Bedroom with Private Bath"
                src="/living2-1900h.jpg"
                className="thq-img-ratio-4-3"
              />
            </div>
          </div>
          <div className="home-thq-content-elm4">
            <div className="home-container25">
              <img
                alt="Living Room with Mountain View"
                src="/bed1-1900h.jpg"
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="home-container26">
              <img
                alt="Fully Equipped Kitchen"
                src="/bed2-1900h.jpeg"
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="home-container27">
              <img
                alt="Cozy Bedroom with Private Bath"
                src="/bed3-1900h.jpg"
                className="thq-img-ratio-4-3"
              />
            </div>
          </div>
          <div className="home-thq-content-elm5">
            <div className="home-container28">
              <img
                alt="Living Room with Mountain View"
                src="/bath4-1900h.jpg"
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="home-container29">
              <img
                alt="Fully Equipped Kitchen"
                src="/patio3-1900h.jpeg"
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="home-container30">
              <img
                alt="Cozy Bedroom with Private Bath"
                src="/view3-1900h.jpg"
                className="thq-img-ratio-4-3"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="top-features">
        <div className="features-container">
          <div className="features-header">
            <h2 className="section-title">Amenities Designed for Comfort</h2>
            <p className="section-subtitle">
              Everything you need for a seamless Victoria experience.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="feature-label">Full Kitchen</h3>
              <p className="section-content">
                Modern appliances and cookware in our 3-bedroom suite.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
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
              <h3 className="feature-label">Mountain Balcony</h3>
              <p className="section-content">
                Breathtaking views of the local peaks and fresh island air.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="feature-label">High-Speed Wi-Fi</h3>
              <p className="section-content">
                Stay connected with reliable internet throughout your stay.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
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
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                    <circle r="2" cx="7" cy="17"></circle>
                    <path d="M9 17h6"></path>
                    <circle r="2" cx="17" cy="17"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="feature-label">Free Parking</h3>
              <p className="section-content">
                Convenient, secure parking available for all our guests.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="feature-label">Private Bath</h3>
              <p className="section-content">
                Modern ensuite facilities in our private bedroom unit.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
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
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </g>
                </svg>
              </div>
              <h3 className="feature-label">Central Base</h3>
              <p className="section-content">
                Minutes from downtown attractions and easy access to Sooke,
                Nanaimo and other areas around Vancouver Island
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="location-snapshot">
        <div className="location-container">
          <div className="location-split">
            <div className="location-main">
              <h2 className="section-title">
                Perfectly Positioned in Victoria
              </h2>
              <p className="section-content">
                Located in the heart of British Columbia&apos;s capital,
                Victoria Family Stay offers the perfect balance of urban
                convenience and natural beauty. Enjoy easy access to the iconic
                Inner Harbour, historic downtown, and local hiking trails.
              </p>
              <ul className="attraction-list">
                <li className="attraction-item">
                  <span className="attraction-dist">20 Min</span>
                  <span className="attraction-name">
                    Downtown Victoria
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="attraction-item">
                  <span className="attraction-dist">10 Min</span>
                  <span className="attraction-name">
                    Goldstream Provincial Park
                  </span>
                </li>
                <li className="attraction-item">
                  <span className="attraction-dist">10 Min</span>
                  <span className="attraction-name">Hatley Castle</span>
                </li>
                <li className="attraction-item">
                  <span className="attraction-dist">5 Min</span>
                  <span className="attraction-name">
                    Costco &amp; Shopping Center
                  </span>
                </li>
              </ul>
              <a href="#">
                <div className="btn btn-outline">
                  <span>About Victoria &amp; Area</span>
                </div>
              </a>
            </div>
            <div className="location-side">
              <div className="home-thq-map-snippet-elm map-snippet">
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.5529729058493!2d-123.5205!3d48.4521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f7c9c0e9c4c6d%3A0x8f0f0f0f0f0f0f0f!2s2119%20Longspur%20Dr%2C%20Victoria%2C%20BC%20V9B%200E7!5e0!3m2!1sen!2sca!4v1600000000000"
                    title="Victoria Family Stays Location - 2119 Longspur Dr, Victoria, BC"
                    width="100%"
                    height="450"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    allowFullScreen="true"
                    className="home-iframe"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-thq-guest-testimonials-elm guest-testimonials">
        <div className="testimonials-header">
          <h2 className="section-title">Voices of Our Guests</h2>
        </div>
        <div className="testimonials-rail">
          <div className="testimonial-card">
            <div className="star-rating">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <p className="section-content">
              &quot;Michelle is a great host, very friendly and helpful.
              She&apos;s providing a binder with clear directions for the house,
              information for visiting sites and restaurants near by. After we
              had a cold beverage on the patio, we had a good sleep in a comfy
              bed in a quiet home. Thanks for having us 😁&quot;
            </p>
            <span className="testimonial-author">
              — Christian, Onoway, Canada
            </span>
          </div>
          <div className="testimonial-card">
            <div className="star-rating">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <p className="section-content">
              &quot;Nice place with four large and comfortable beds in 3
              bedrooms. Was perfect for the four of us. Very clean and well
              maintained. No complaints. Host was great! They gave all
              information up front and followed up during our stay. We’d
              definitely stay here again.&quot;
            </p>
            <span className="testimonial-author">
              — Robert, stayed with kids
            </span>
          </div>
          <div className="testimonial-card">
            <div className="star-rating">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <p className="section-content">
              &quot;It was a comfortable stay at Michelle&apos;s. The bed was
              comfortable and the washroom was squeaky clean. The neighborhood
              is very peaceful. Self check in was very easy and directions were
              extremely clear. Thank you for a wonderful stay!&quot;
            </p>
            <span className="testimonial-author">
              — Melissa, Vancouver, Canada
            </span>
          </div>
          <div className="testimonial-card">
            <div className="star-rating">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <p className="section-content">
              &quot;We loved our stay, three bedrooms with 4 queen beds very
              comfortable. Location central to the highway and Victoria&quot;
            </p>
            <span className="testimonial-author">— Mohkam, Delta, Canada</span>
          </div>
        </div>
      </section>
      <Logos1
        heading1={
          <Fragment>
            <span className="home-text75">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </span>
          </Fragment>
        }
        logo1Src="/booking-1400w.png"
        logo2Src="/instagram-stickers-blue_tra-2026-1400w.png"
        logo3Src="/airbnb-1400w.png"
        logo4Src="/guest%20favorite-1400w.png"
        logo5Src="/vrbo-1400w.png"
        logo6Src="/airbnb-superhost-requirements-1400w.jpg"
      ></Logos1>
      <section id="booking" className="booking-cta">
        <div className="booking-container">
          <div id="book" className="booking-card">
            <div className="booking-info">
              <h2 className="section-title">Ready for Your Victoria Stay?</h2>
              <p className="section-content">
                We offer flexible stay options for all our properties. Whether
                you&apos;re here for a weekend or a month, we make booking
                simple and stress-free.
              </p>
              <p className="booking-note">
                <span className="home-text76">Note:</span>
                <span>
                  {' '}
                  Flexible stay options available for both properties.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="booking-actions">
              <a
                href="https://airbnb.ca/h/cozy1r"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="home-thq-btn-elm19 btn-lg btn-primary btn">
                  <span>Book Cozy bed</span>
                </div>
              </a>
              <a
                href="https://airbnb.ca/h/3brfamily"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="home-thq-btn-elm20 btn-lg btn-accent btn">
                  <span>
                    Book 3 bedroom
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <a href="mailto:victoriafamilystay@gmail.com?subject=Inquire for Victoria Family Stay">
                <div className="home-thq-btn-elm21 btn-lg btn btn-outline">
                  <span>Contact Owner</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-snapshot">
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-text">
              <h2 className="section-title">Need Assistance?</h2>
              <p className="section-content">
                Have a special request or a question about your upcoming stay?
                Our team is here to help you plan the perfect trip to Victoria.
              </p>
            </div>
            <div className="contact-cta-wrapper">
              <div className="contact-info-bits">
                <div className="info-bit">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>+1 (250) 532-0189</span>
                </div>
                <div className="info-bit">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>victoriafamilystay@gmail.com</span>
                </div>
              </div>
              <a href="mailto:victoriafamilystay@gmail.com?subject=Inquiry to Victoria Family Stay">
                <div className="home-thq-btn-elm22 btn-secondary btn">
                  <span>Contact &amp; Booking Help</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container31">
        <div className="home-container32">
          <Script
            html={`<style>
        @keyframes slideUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container33">
        <div className="home-container34">
          <Script
            html={`<script defer data-name="harbor-peak-stays-interactions">
(function(){
  // Parallax effect for Hero background
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroMedia = document.querySelector(".hero-media")
    if (heroMedia) {
      heroMedia.style.transform = \`translateY(\${scrolled * 0.3}px)\`
    }
  })

  // Staggered reveal for feature items
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll(".feature-item")
        items.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = "1"
            item.style.transform = "translateY(0)"
          }, index * 100)
        })
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const featureGrid = document.querySelector(".features-grid")
  if (featureGrid) {
    const items = featureGrid.querySelectorAll(".feature-item")
    items.forEach((item) => {
      item.style.opacity = "0"
      item.style.transform = "translateY(20px)"
      item.style.transition = "all 0.5s ease-out"
    })
    observer.observe(featureGrid)
  }

  // Testimonials rail auto-scroll hint
  const testimonialsRail = document.querySelector(".testimonials-rail")
  if (testimonialsRail) {
    let isDown = false
    let startX
    let scrollLeft

    testimonialsRail.addEventListener("mousedown", (e) => {
      isDown = true
      startX = e.pageX - testimonialsRail.offsetLeft
      scrollLeft = testimonialsRail.scrollLeft
    })

    testimonialsRail.addEventListener("mouseleave", () => {
      isDown = false
    })

    testimonialsRail.addEventListener("mouseup", () => {
      isDown = false
    })

    testimonialsRail.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - testimonialsRail.offsetLeft
      const walk = (x - startX) * 2
      testimonialsRail.scrollLeft = scrollLeft - walk
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="home-container35">
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
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
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
        <div className="home-container36">
          <div className="home-container37">
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
      </div>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container38">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon205"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text91">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
