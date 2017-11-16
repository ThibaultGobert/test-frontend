import * as userRoles from '../../constants/roles';

export default (role, slideType, data) => {
  data.slideType = slideType;

  if ((role === userRoles.TEACHER_ROLE && !data.activateTeacher) ||
    (role === userRoles.STUDENT_ROLE && !data.activateStudent)) {
    throw new Error("Les is niet beschikbaar");
  }

  return data;
}
