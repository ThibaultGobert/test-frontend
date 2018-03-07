import filter from 'lodash/filter';

export const getCourses = state => {
  return filter(state.courses.data, course => !course.replacement);
};

export const getReplacementCourses = state => {
  return filter(state.courses.data, course => course.replacement);
};

export const getCourseById = (state, courseId) => {
  return state.courses.data[courseId];
};

export const isAssistentOnCourse = (state, course) => {
  const loggedInUserId = state.loggedIn.data.id;
  return course.assistants.includes(loggedInUserId);
};
