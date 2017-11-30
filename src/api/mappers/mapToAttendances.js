import { normalize } from 'normalizr';
import _ from 'lodash';
import * as schema from './schema';

export default data => {
  const lessons = {};

  _.flatMap(data).forEach(({ lessonId, attendanceList }) => {
    if (_.isEmpty(lessons[lessonId])) {
      lessons[lessonId] = {
        id: lessonId,
        attendances: [],
      };
    }

    const attendances = attendanceList.map((attendance) => {
      return {
        ...attendance,
        id: `${lessonId}-${attendance.userId}`,
      };
    });

    lessons[lessonId].attendances = _.concat(lessons[lessonId].attendances, attendances);
  });

  return normalize(lessons, [schema.lesson]);
};
