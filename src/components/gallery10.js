import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery10.css'

const Gallery10 = (props) => {
  return (
    <div className="gallery10-thq-gallery3-elm thq-section-padding">
      <div className="gallery10-thq-max-width-elm thq-section-max-width">
        <div className="gallery10-thq-section-title-elm">
          <h2 className="gallery10-thq-text-elm1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery10-text1">Gallery</span>
              </Fragment>
            )}
          </h2>
          <span className="gallery10-thq-text-elm2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery10-text2">
                  Experience the charm of our boutique vacation rentals in
                  Victoria, BC.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery10-container">
          <div className="gallery10-thq-content-elm">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery10-thq-image1-elm thq-img-ratio-4-6"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery10-thq-image2-elm thq-img-ratio-4-6"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery10-thq-image6-elm thq-img-ratio-4-6"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="gallery10-thq-image7-elm thq-img-ratio-4-6"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery10.defaultProps = {
  heading1: undefined,
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1661210291339-af69768bb758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTc2NDIzMHw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1768142677226-c47c39b7bd31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTc2NDIzMXw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Alt: 'Living Room with Mountain View',
  image1Alt: 'Harbor Peak Stays Exterior',
  image2Src:
    'https://images.unsplash.com/photo-1759860238041-a7efb2a3bac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTc2NDIzMXw&ixlib=rb-4.1.0&q=80&w=1080',
  image4Alt: 'Fully Equipped Kitchen',
  image2Alt: 'Cozy Bedroom with Natural Light',
  image4Src:
    'https://images.unsplash.com/photo-1581182815808-b6eb627a8798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTc2NDIzMXw&ixlib=rb-4.1.0&q=80&w=1080',
}

Gallery10.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  image3Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Src: PropTypes.string,
}

export default Gallery10
