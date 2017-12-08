export const getChildById = (state, childId) => {
  return state.students.data[childId];
};

export const getStudentsByCourseId = (state, courseId) => {
  if (!state.courses.data[courseId] || !state.courses.data[courseId].students) {
    return [];
  }

  return state.courses.data[courseId].students.map((childId) => {
    return state.students.data[childId];
  });
};

