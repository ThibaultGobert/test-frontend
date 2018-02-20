import React from 'react';
import PropTypes from 'prop-types';
import * as roles from '../../../constants/roles';
import FeedBackButton from '../FeedBack/FeedBackButton';
import generateUrl from '../FeedBack/generateFeedBackUrl';

const MetaSlideData = ({ slide, lesson, loggedInUser }) => {
  return (
    <div className="meta-slide-data">
      {(loggedInUser.role === roles.TEACHER_ROLE) &&
        <div>
          <span className="slide-id" >
            ID: {lesson.id}_{slide.order}
          </span>
          <span className="FeedBackButton">
            <FeedBackButton data={{ slide, lesson, loggedInUser }} generateUrl={generateUrl} text="FEEDBACK" />
          </span>
        </div>
      }
    </div>
  );
};

MetaSlideData.propTypes = {
  slide: PropTypes.object.isRequired,
  lesson: PropTypes.object.isRequired,
};

export default MetaSlideData;
