import _ from 'lodash';
import * as lessonTypes from '../../constants/lessonTypes';

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

const createDate = (dateString) => {
  let splitted = dateString.split(' ');
  const hour = splitted[1].split(':')[0];
  const minutes = splitted[1].split(':')[1];
  let dayMonthYear = splitted[0].split('-');
  const day = dayMonthYear[0];
  const month = parseInt(dayMonthYear[1], 10);
  const year = dayMonthYear[2];
  let date = new Date(year, month - 1, day, hour, minutes);
  return date;
};
