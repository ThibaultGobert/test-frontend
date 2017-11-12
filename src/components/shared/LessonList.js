import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const LessonList = ({lessons, slideType, showLockedLessons}) => {
  let lessonCount = lessons.length;
  let lessonLocked = [];
  for(let i = 0; i < 10 - lessonCount; i++) {
    lessonLocked[i] = lessonCount+i+1;
  }

  return (
    <div className="cards">
      {
        lessons.map(lesson => {
          let slideViewerLink = "/slideviewer/" + lesson.id;
          if (slideType) {
            slideViewerLink += '/' + slideType;
          }

          let lessonKey = "card" + lesson.programlessonid;
          return(
            <div className="cardholder" key={lessonKey}>
              <Link to={slideViewerLink}>
              </Link>
            </div>
          );
        })
      }
      { showLockedLessons &&
        lessonLocked.map(lessonOrder => {
          return (<div className="cardholder" key={"lessonOrder-" + lessonOrder}>
          </div>);
        })
      }
    </div>
  );
};

LessonList.propTypes = {
  lessons: PropTypes.arrayOf(PropTypes.object),
  slideType: PropTypes.string,
  showLockedLessons: PropTypes.bool.isRequired
};

export default LessonList;
