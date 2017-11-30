export const getLessonById = (state, lessonId) => {
  return state.lessons && state.lessons.data[lessonId];
};
