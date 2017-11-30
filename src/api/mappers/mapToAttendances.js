import { normalize } from 'normalizr';
import _ from 'lodash';
import * as schema from './schema';

export default data => {
  const attendances = _.flatMap(data).map(({ lessonId, attendanceList }) => {
    return {
      id: lessonId,
      attendances: attendanceList.map((attendance) => {
        return {
          ...attendance,
          id: `${lessonId}-${attendance.userId}`,
        };
      }),
    };
  });

  return normalize(attendances, [schema.lesson]);
};
