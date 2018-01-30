import * as userRoles from '../constants/roles';

export const isStudent = state => {
  return (
    state.loggedIn.data.role === userRoles.STUDENT_ROLE ||
    state.loggedIn.data.role === userRoles.WORKSHOP_STUDENT_ROLE
  );
};
