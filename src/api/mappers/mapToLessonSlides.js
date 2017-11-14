export default (data) => {
  let lesson =  response.data;

  lesson.slideType = slideType;
  let role = store.getState().loggedIn.data.role;

  if ((role === userRoles.TEACHER_ROLE && !lesson.activateTeacher) ||
    (role === userRoles.STUDENT_ROLE && !lesson.activateStudent)) {
    throw new Error("Les is niet beschikbaar");
  }

  return lesson;
}
