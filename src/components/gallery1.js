import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-thq-gallery3-elm thq-section-padding">
      <div className="gallery1-thq-max-width-elm thq-section-max-width">
        <div className="gallery1-thq-section-title-elm">
          <h2 className="gallery1-thq-text-elm1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery1-text2">
                  Explore Our Beautiful Properties
                </span>
              </Fragment>
            )}
          </h2>
          <span className="gallery1-thq-text-elm2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery1-text1">
                  Take a look at our stunning vacation rentals in Victoria, BC.
                  Each property is thoughtfully designed to provide comfort and
                  style during your stay.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery1-thq-content-elm">
          <div className="gallery1-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container3">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image2Alt: 'Fully Equipped Kitchen',
  content1: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1656339883079-4a77cb2b47c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTc2NTQ4OXw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Alt: 'Cozy Bedroom with Private Bath',
  image2Src:
    'https://images.unsplash.com/photo-1514500656691-01c2918eb76e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTc2NTQ4OXw&ixlib=rb-4.1.0&q=80&w=1080',
  image1Alt: 'Living Room with Mountain View',
  image1Src:
    'https://images.unsplash.com/photo-1619288524031-0fcf418264e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTc2NTQ4OXw&ixlib=rb-4.1.0&q=80&w=1080',
  heading1: undefined,
}

Gallery1.propTypes = {
  image2Alt: PropTypes.string,
  content1: PropTypes.element,
  image3Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
}

export default Gallery1
