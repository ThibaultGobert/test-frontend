import { schema } from 'normalizr';

export const user = new schema.Entity('users');

export const lesson = new schema.Entity('lessons');

export const course = new schema.Entity('courses', {
  lessons: [lesson],
  assistants: [user]
});
