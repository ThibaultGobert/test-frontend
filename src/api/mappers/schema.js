import { schema } from 'normalizr';

export const user = new schema.Entity('users');

export const lesson = new schema.Entity('lessons');

export const location = new schema.Entity('locations');

export const course = new schema.Entity('courses', {
  assistants: [user],
  headTeacher: user,
  location: location
});
