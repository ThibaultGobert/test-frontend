import { normalize } from 'normalizr';
import * as schema from './schema';
import createDate from '../../functions/createDate';
import mapToCalendar from "./mapToCalendar";
import _ from 'lodash';

export default (data) => {
  data = data.sort((a, b) => {
    let lessonDateA = createDate(a.lessons[0].courseStartdate);
    let lessonDateB = createDate(b.lessons[0].courseEnddate);
    let hoursDateA = parseInt(a.starttime.split(':')[0], 10);
    let hoursDateB = parseInt(b.starttime.split(':')[0], 10);
    if(lessonDateA.getDay() === lessonDateB.getDay()) {
      return hoursDateA - hoursDateB;
    }
    return lessonDateA.getDay() - lessonDateB.getDay();
  });

  data = _.values(data).map( (course) => {
    course.lessons = mapToCalendar(course.lessons);
    return course;
  });

  data = normalize(data, [ schema.course ]);
  return data;
};
