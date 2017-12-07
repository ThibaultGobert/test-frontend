import { schema } from 'normalizr';

export const student = new schema.Entity('students');
export const teacher = new schema.Entity('teachers');
export const attendance = new schema.Entity('attendances');
export const location = new schema.Entity('locations');
export const slide = new schema.Entity('slide');
export const classList = [student];

export const lesson = new schema.Entity('lessons', {
  attendances: [attendance],
  slides: [slide],
});

export const course = new schema.Entity('courses', {
  location,
  assistants: [teacher],
  headTeacher: teacher,
  lessons: [lesson],
});
