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

  const headteacherId = state.courses.data[courseId].headTeacher;

  if (headteacherId) {
    teachers.push(state.teachers.data[headteacherId]);
  }

  return teachers;
};

