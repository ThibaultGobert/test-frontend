import { normalize } from 'normalizr';
import values from 'lodash/values';
import * as schema from './schema';
import mapToCalendar from './mapToCalendar';

export default (data, replacement) => {
  data = values(data).map((course) => {
    course.lessons = mapToCalendar(course.lessons);
    course.roomname = course.location.roomname;
    course.replacement = replacement;
    return course;
  });

  data = normalize(data, [schema.course]);
  return data;
};
