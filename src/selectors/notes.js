export const getNotesByStudentId = (state, studentId) => {
  return state.notes.filter(note => note.object_id === studentId);
};
