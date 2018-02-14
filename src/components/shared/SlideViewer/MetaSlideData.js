import React from 'react';
import PropTypes from 'prop-types';
import * as roles from '../../../constants/roles';
import FeedBackButton from './FeedBackButton';

const MetaSlideData = ({ slide, lesson, loggedInUser }) => {
  return (
    <div className="meta-slide-data">
      { (loggedInUser.role === roles.TEACHER_ROLE) &&
        <div>
          <span className="slide-id" >
            ID: {lesson.id}_{slide.order}
          </span>
          <span className="FeedBackButton">
            <FeedBackButton slide={slide} loggedInUser={loggedInUser} lesson={lesson} />
          </span>
        </div>
      }
    </div>
  );
};

MetaSlideData.propTypes = {
  slide: PropTypes.object.isRequired,
  slideType: PropTypes.string.isRequired,
  lesson: PropTypes.object.isRequired,
};

export default MetaSlideData;
