export const getLessonById = (state, lessonId) => {
  return state.lessons.data[lessonId];
};
