import { normalize } from 'normalizr';
import values from 'lodash/values';
import * as schema from './schema';
import createDate from '../../functions/createDate';
import mapToCalendar from './mapToCalendar';

export default (data, replacement) => {
  data = data.sort((a, b) => {
    if (!a.lessons[0] || !b.lessons[0]) {
      return -1;
    }

    const dateA = a.lessons[0].courseStartdate;
    const dateB = b.lessons[0].courseStartdate;

    const lessonDateA = createDate(dateA);
    const lessonDateB = createDate(dateB);
    if (lessonDateA.getDay() === lessonDateB.getDay()) {
      return lessonDateA.getHours() - lessonDateB.getHours();
    }
    return lessonDateA.getDay() - lessonDateB.getDay();
  });

  data = values(data).map((course) => {
    course.lessons = mapToCalendar(course.lessons);
    course.roomname = course.location.roomname;
    course.replacement = replacement;
    return course;
  });

  data = normalize(data, [schema.course]);
  return data;
};
