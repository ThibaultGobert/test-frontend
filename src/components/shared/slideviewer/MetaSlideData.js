import React from 'react';
import PropTypes from 'prop-types';
import * as slideTypes from '../../../constants/slideTypes';

const MetaSlideData = ({slide, slideType}) => {
  return(
    <div className="meta-slide-data">
      { slideType == slideTypes.INFO &&
        <div className="slide-id">
          ID: {slide.id}
        </div>
      }
    </div>
  );
};

MetaSlideData.propTypes = {
  slide: PropTypes.object.isRequired,
  slideType: PropTypes.string.isRequired
};

export default MetaSlideData;


