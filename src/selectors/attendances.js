export const getAttendanceById = (state, attendanceId) => {
  return state.attendances.data[attendanceId];
};
export const getAttendanceByLessonId = (state, lessonId) => {
  return state.attendances.data.filter(attendance => attendance.lessonId === lessonId);
};


