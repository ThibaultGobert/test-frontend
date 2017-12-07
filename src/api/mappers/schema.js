import { schema } from 'normalizr';

export const child = new schema.Entity('children');
export const teacher = new schema.Entity('teachers');
export const attendance = new schema.Entity('attendances');
export const location = new schema.Entity('locations');
export const slide = new schema.Entity('slide');
export const classList = [child];

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
