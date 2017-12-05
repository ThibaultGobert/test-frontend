import _ from 'lodash';

export const getNotesByStudentId = (state, studentId) => {
  return _.values(state.notes.data).filter(note => note.object_id === studentId);
};
