export const getAttendanceById = (state, attendanceId) => {
  return state.attendances.data[attendanceId];
};
