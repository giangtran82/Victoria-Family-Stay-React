import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery13.css'

const Gallery13 = (props) => {
  return (
    <div className="gallery13-thq-gallery3-elm thq-section-padding">
      <div className="gallery13-thq-max-width-elm thq-section-max-width">
        <div className="gallery13-thq-section-title-elm">
          <h2 className="gallery13-thq-text-elm1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery13-text6">Gallery</span>
              </Fragment>
            )}
          </h2>
          <span className="gallery13-thq-text-elm2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery13-text4">
                  Take a look at our beautifully curated vacation rental spaces
                  in Victoria, BC.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery13-thq-content-elm">
          <div className="gallery13-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery13-thq-image1-elm thq-img-ratio-4-3"
            />
            <span className="thq-body-small">
              {props.image1Title ?? (
                <Fragment>
                  <span className="gallery13-text7">
                    Cozy Living Room with Fireplace
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery13-container2">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery13-thq-image2-elm thq-img-ratio-4-3"
            />
            <span className="thq-body-small">
              {props.image2Title ?? (
                <Fragment>
                  <span className="gallery13-text8">
                    Scenic Mountain Views from Bedroom
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery13-container3">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery13-thq-image3-elm thq-img-ratio-4-3"
            />
            <span className="thq-body-small">
              {props.image3Title ?? (
                <Fragment>
                  <span className="gallery13-text5">
                    Modern Kitchen with Stainless Steel Appliances
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery13.defaultProps = {
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1620759233251-b64eb38e33f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTU0MDAxNXw&ixlib=rb-4.1.0&q=80&w=1080',
  image2Alt: 'Bedroom with mountain views',
  image3Title: undefined,
  image1Alt: 'Living room with fireplace',
  heading1: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1767629676948-bb72a21183d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTU0MDAxNnw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Alt: 'Kitchen with stainless steel appliances',
  image2Src:
    'https://images.unsplash.com/photo-1772510585648-df6fac0e2f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3NTU0MDAxNnw&ixlib=rb-4.1.0&q=80&w=1080',
  image1Title: undefined,
  image2Title: undefined,
}

Gallery13.propTypes = {
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Title: PropTypes.element,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
  image3Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image1Title: PropTypes.element,
  image2Title: PropTypes.element,
}

export default Gallery13
