import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Image} from 'semantic-ui-react';

const LessonList = ({lessons, slideType}) => {
  let lessonCount = lessons.length;
  let lessonLocked = [];
  for(let i = 0; i < 10 - lessonCount; i++) {
    lessonLocked[i] = lessonCount+i+1;
  }

  return (
    <div className="cards">
      {
        lessons.map(lesson => {
          let slideViewerLink = "/slideviewer/" + lesson.programlessonid + '/' + slideType;
          let lessonKey = "card" + lesson.programlessonid;
          return(
            <div className="cardholder" key={lessonKey}>
              <Link to={slideViewerLink}>
                <Image src={require(`../../../images/placeholders/les${lesson.order}.png`)} alt="" shape="rounded"/>
              </Link>
            </div>
          );
        })
      }
      {
        lessonLocked.map(lessonOrder => {
          return renderLocked(lessonOrder);
        })
      }
    </div>
  );
};

function renderLocked(index) {
  return (
    <div className="cardholder" >
        <Image src={require(`../../../images/placeholders/les${index}-locked.png`)} alt="" shape="rounded"/>
    </div>
  );
}

LessonList.propTypes = {
  lessons: PropTypes.arrayOf(PropTypes.object),
  slideType: PropTypes.string.isRequired
};

export default LessonList;
