import { schema } from 'normalizr';

export const user = new schema.Entity('users');
export const attendance = new schema.Entity('attendances');
export const location = new schema.Entity('locations');
export const slide = new schema.Entity('slide');
export const classList = [user];

export const lesson = new schema.Entity('lessons', {
  attendances: [attendance],
});

export const course = new schema.Entity('courses', {
  location,
  assistants: [user],
  headTeacher: user,
  lessons: [lesson],
});

export const lessonContent = new schema.Entity('lessonContent', {
  slides: [slide],
});

