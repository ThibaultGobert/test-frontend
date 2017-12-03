export const getChildById = (state, childId) => {
  return state.users.data[childId];
};

export const getChildrenByCourseId = (state, courseId) => {
  if (!state.courses.data[courseId] || !state.courses.data[courseId].children) {
    return [];
  }

  return state.courses.data[courseId].children.map((childId) => {
    return state.users.data[childId];
  });
};

