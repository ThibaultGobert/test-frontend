import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Image} from 'semantic-ui-react';
import _ from 'lodash';

const LessonList = ({lessons, slideType, showLockedLessons}) => {
  let lessonCount = lessons.length;
  let lessonLocked = [];
  for(let i = 0; i < 10 - lessonCount; i++) {
    lessonLocked[i] = lessonCount+i+1;
  }

  return (
    <div className="cards">
      {
        _.map(lessons, lesson => {
          let slideViewerLink = "/slideviewer/" + lesson.id;
          if (slideType) {
            slideViewerLink += '/' + slideType;
          }

          let lessonKey = "card" + lesson.programlessonid;
          return(
            <div className="cardholder" key={lessonKey}>
              <Link to={slideViewerLink}>
                <Image src={require(`../../assets/images/placeholders/les${lesson.order}.png`)} alt="" shape="rounded"/>
              </Link>
            </div>
          );
        })
      }
      { showLockedLessons &&
        _.map(lessonLocked, lessonOrder => {
          return (<div className="cardholder" key={"lessonOrder-" + lessonOrder}>
            <Image src={require(`../../assets/images/placeholders/les${lessonOrder}-locked.png`)} alt="" shape="rounded"/>
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
