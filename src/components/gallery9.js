import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery9.css'

const Gallery9 = (props) => {
  return (
    <div className="gallery9-thq-gallery3-elm thq-section-padding">
      <div className="gallery9-thq-max-width-elm thq-section-max-width">
        <div className="gallery9-thq-section-title-elm">
          <h2 className="gallery9-thq-text-elm1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery9-text1">Gallery</span>
              </Fragment>
            )}
          </h2>
          <span className="gallery9-thq-text-elm2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery9-text2">
                  Explore images of our boutique vacation rentals in Victoria,
                  showcasing the blend of modern amenities and natural beauty
                  that Harbor Peak Stays offers.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery9-container1">
          <div className="gallery9-thq-content-elm">
            <div
              data-thq="slider"
              data-navigation="true"
              data-pagination="true"
              className="gallery9-thq-slider-elm swiper"
            >
              <div
                data-thq="slider-wrapper"
                className="gallery9-thq-slider-wrapper-elm swiper-wrapper"
              >
                <div
                  data-thq="slider-slide"
                  className="gallery9-thq-slider-slide-elm1 swiper-slide"
                >
                  <div className="gallery9-container2">
                    <img
                      alt={props.image1Alt}
                      src={props.image1Src}
                      className="gallery9-thq-image1-elm thq-img-ratio-4-3"
                    />
                  </div>
                  <div className="gallery9-container3">
                    <img
                      alt={props.image2Alt}
                      src={props.image2Src}
                      className="gallery9-thq-image2-elm thq-img-ratio-4-3"
                    />
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery9-thq-slider-slide-elm2 swiper-slide"
                >
                  <div className="gallery9-container4">
                    <img
                      alt={props.image3Alt}
                      src={props.image3Src}
                      className="gallery9-thq-image3-elm thq-img-ratio-4-3"
                    />
                  </div>
                  <div className="gallery9-container5">
                    <img
                      alt={props.image4Alt}
                      src={props.image4Src}
                      className="gallery9-thq-image4-elm thq-img-ratio-4-3"
                    />
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery9-thq-slider-slide-elm3 swiper-slide"
                >
                  <div className="gallery9-container6">
                    <img
                      alt={props.image5Alt}
                      src={props.image5Src}
                      className="gallery9-thq-image5-elm thq-img-ratio-4-3"
                    />
                  </div>
                  <div className="gallery9-container7">
                    <img
                      alt={props.image6Alt}
                      src={props.image6Src}
                      className="gallery9-thq-image6-elm thq-img-ratio-4-3"
                    />
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="swiper-button-next"
              ></div>
              <div
                data-thq="slider-pagination"
                className="gallery9-thq-slider-pagination-elm swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery9.defaultProps = {
  image4Alt: 'Spacious Outdoor Patio',
  image3Alt: 'Cozy Bedroom with Queen Bed',
  image1Alt: 'Living Room with Mountain View',
  image1Src:
    'https://images.unsplash.com/photo-1681242336018-0e035c2ca2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTc2NDMyMHw&ixlib=rb-4.1.0&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1602033375892-2ec3f7493382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTc2NDMxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1756912191947-e518564ed4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTc2NDMxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1576595092285-a89d7b0115bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTc2NDMxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  image2Alt: 'Modern Kitchen with Stainless Steel Appliances',
  image5Src:
    'https://images.unsplash.com/photo-1767858701455-e8da2f90de04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTc2NDMxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  heading1: undefined,
  image6Src:
    'https://images.unsplash.com/photo-1767858898988-ba0fa7a6c22f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTc2NDMxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  content1: undefined,
  image5Alt: 'Scenic Views from the Property',
  image6Alt: 'Luxurious Bathroom with Rainfall Shower',
}

Gallery9.propTypes = {
  image4Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image4Src: PropTypes.string,
  image3Src: PropTypes.string,
  image2Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image5Src: PropTypes.string,
  heading1: PropTypes.element,
  image6Src: PropTypes.string,
  content1: PropTypes.element,
  image5Alt: PropTypes.string,
  image6Alt: PropTypes.string,
}

export default Gallery9
