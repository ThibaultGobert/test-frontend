import React from 'react';
import PropTypes from 'prop-types';
import * as slideTypes from '../../../constants/slideTypes';

const MetaSlideData = ({slide, slideType, lesson}) => {
  return(
    <div className="meta-slide-data">
      { slideType === slideTypes.INFO &&
        <div className="slide-id">
          ID: {lesson.id}_{slide.order}
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


