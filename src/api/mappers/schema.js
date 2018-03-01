import { schema } from 'normalizr';

export const student = new schema.Entity('students');
export const teacher = new schema.Entity('teachers');
export const attendance = new schema.Entity('attendances');

export const location = new schema.Entity('locations', {
  teachers: [teacher],
});
export const slide = new schema.Entity('slides');
export const classList = [student];
export const note = new schema.Entity('notes');

export const lesson = new schema.Entity('lessons', {
  attendances: [attendance],
  slides: [slide],
});

export const course = new schema.Entity('courses', {
  location,
  assistants: [teacher],
  headTeacher: [teacher],
  lessons: [lesson],
});

export const contract = new schema.Entity('contracts');
