import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import _ from 'lodash';
import './LessonList.css';

const LessonList = ({ lessons, slideType, showLockedLessons }) => {
  const sortedLessons = _.sortBy(lessons, 'order');

  return (
    <div className="cards">
      {_.range(1, 11).map(lessonOrder => {
        const lessons = sortedLessons.filter(lesson => lesson.order === lessonOrder);
        if (lessons.length === 0 && showLockedLessons) {
          return (
            <div className="cardholder" key={`lessonOrder-${lessonOrder}`}>
              <Image
                src={require(`../../assets/images/placeholders/les${lessonOrder}-locked.png`)}
                alt=""
                shape="rounded"
              />
            </div>
          );
        }

        return lessons.map(lesson => {
          let slideViewerLink = `/slideviewer/${lesson.id}`;
          if (slideType) {
            slideViewerLink += `/${slideType}`;
          }

          const lessonKey = `card${lesson.programlessonid}`;
          return (
            <div className="cardholder" key={lessonKey}>
              <Link to={slideViewerLink}>
                <Image
                  src={require(`../../assets/images/placeholders/les${lesson.order}.png`)}
                  alt=""
                  shape="rounded"
                />
              </Link>
              {lesson.name && <div className="cardholder__title">{lesson.name}</div>}
            </div>
          );
        });
      })}
    </div>
  );
};

export default LessonList;
