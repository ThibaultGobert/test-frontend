import _ from 'lodash';
import * as lessonTypes from '../../constants/lessonTypes';
import createDate from '../../functions/createDate';

export default (data) => {
  let lessons = data.map(course => {

    return course.lessons.map(lesson => {
      if (lesson.courseStartdate === undefined || lesson.courseEnddate === undefined) {
        return null;
      }

      let classhome = _.find(lesson.lessonEntities, {lessonType: lessonTypes.CLASSHOME});

      if (classhome) {
        lesson.name = `${course.clan} ${course.level} ${classhome.name}`;
      }

      let element =Object.assign(lesson, {
        "course_name": course.name,
        "program_type": course.program_type,
        "clan": course.clan,
        "level": course.level,
      });
      element.name = lesson.name;
      element.start = createDate(lesson.courseStartdate);
      element.end = createDate(lesson.courseEnddate);
      return element;
    });
  });
  lessons = _.flatten(lessons);
  lessons = _.without(lessons, null);
  return lessons;
};
