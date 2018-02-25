import React from 'react';
import * as roles from '../../../constants/roles';
import FeedBackButton from '../Feedback/FeedBackButton';
import generateUrl from '../Feedback/generateFeedBackUrl';

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

export default MetaSlideData;
