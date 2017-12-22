export const getSlidesByLessonId = (state, lessonId) => {
  if(!state.lessons.data[lessonId] || !state.lessons.data[lessonId].slides) {
    return [];
  }

  return state.lessons.data[lessonId].slides.map((slideId) => {
    return state.slides.data[slideId];
  });
};
