import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const LessonList = ({lessons, slideType}) => {
  return (
    <div className="cards">
      {
        lessons.map(lesson => {
          let slideViewerLink = "/slideviewer/" + lesson.programlessonid + '/' + slideType;
          let lessonKey = "card" + lesson.programlessonid;
          return(
            <div className="cardholder" key={lessonKey}>
              <Link to={slideViewerLink}>
                <img src={require(`../../../images/placeholders/les${lesson.order}.png`)} alt="" />
              </Link>
            </div>
          );
        })
      }
    </div>
  );
};

LessonList.propTypes = {
  lessons: PropTypes.arrayOf(PropTypes.object),
  slideType: PropTypes.string.isRequired
};

export default LessonList;
