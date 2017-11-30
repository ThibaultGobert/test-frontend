import { isEmpty, values } from 'lodash';
import { getLessonById } from './lessons';

export const getAttendanceById = (state, attendanceId) => {
  return state.attendances.data[attendanceId];
};

export const getAttendancesByLessonId = (state, lessonId) => {
  const lesson = getLessonById(state, lessonId);

  if (isEmpty(lesson) || isEmpty(lesson.attendances)) {
    return [];
  }

  return values(state.attendances.data)
    .filter(attendance => lesson.attendances.includes(attendance.id));
};
