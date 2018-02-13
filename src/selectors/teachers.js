export const getTeachersByCourseId = (state, courseId) => {
  if (!state.courses.data[courseId]) {
    return [];
  }

  let teachers = [];

  if (state.courses.data[courseId].assistants) {
    teachers = state.courses.data[courseId].assistants.map((assistantId) => {
      return state.teachers.data[assistantId];
    });
  }

  if (state.courses.data[courseId].headTeacher) {
    state.courses.data[courseId].headTeacher.forEach((teacherId) => {
      teachers.push(state.teachers.data[teacherId]);
    });
  }

  return teachers;
};

