import { normalize } from 'normalizr';
import * as schema from './schema';

export default data => {
  const attendances = data.map(({ lessonId, attendanceList }) => {
    return {
      id: lessonId,
      attendances: attendanceList,
    };
  });

  return normalize(attendances, [schema.lesson]);
};
