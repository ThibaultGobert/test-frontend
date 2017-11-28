import { normalize } from 'normalizr';
import * as schema from './schema';
import _ from 'lodash';

export default data => {
  data = data.map(attendancePerLesson => {
    let list = _.compact(attendancePerLesson.attendanceList);
    list = list.map(attendance => {
      return { ...attendance, lessonId: attendancePerLesson.lessonId};
    });
    list = normalize(list, schema.attendancesForLesson);
    list.lessonId = attendancePerLesson.lessonId;
    return list;
  });

  data = _.keyBy(data, 'lessonId');

  return data;
};
