import React from 'react';
import PropTypes from 'prop-types';
import * as roles from '../../../constants/roles';
import FeedBackButton from './FeedBackButton';
import getRefactoredLessonType from '../../../functions/refactorLessonType';

const generateUrl = (data) => {
  const { slide, loggedInUser, lesson } = data;
  if (slide && loggedInUser && lesson) {
    let formUrl;
    formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe5cqrRK5t0m_oBgiW7vavymXHiVOi4dHkwDhmZppxiQoqOtA/viewform?usp=pp_url&entry.1028113136&entry.2145939336=name&entry.410557796=slideId&entry.2130843617=type&entry.1966597930=clan&entry.730223016=level';
    const slideId = `${lesson.id}_${slide.order}`;
    formUrl = formUrl
      .replace('name', loggedInUser.fullname)
      .replace('slideId', slideId)
      .replace('type', getRefactoredLessonType(lesson))
      .replace('clan', lesson.group)
      .replace('level', lesson.level);
    return formUrl;
  }
  return null;
};

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
  slideType: PropTypes.string.isRequired,
  lesson: PropTypes.object.isRequired,
};

export default MetaSlideData;
