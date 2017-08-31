import React from 'react';
import {Link} from 'react-router';

const LessonList = ({lessons}) => {
  return (
    <div className="cards">
      {
        lessons.map(lesson => {
          let slideViewerLink = "/slideviewer/" + lesson.id;
          let lessonKey = "card" + lesson.id;
          return(
            <div className="cardholder" key={lessonKey}>
              <Link to={slideViewerLink}>
                { lesson.order !== 0 && <img src={require(`../../../images/placeholders/les${lesson.order}.png`)} alt="" />}
              </Link>
              <Link to={slideViewerLink}>
                { lesson.order == 0 && <img src={require(`../../../images/placeholders/eddy.png`)} alt="" />}
              </Link>
            </div>
          );
        })
      }
    </div>
  );
};

export default LessonList;
