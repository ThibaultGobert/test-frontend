import { schema } from 'normalizr';

export const user = new schema.Entity('users');

export const lesson = new schema.Entity('lessons');

export const location = new schema.Entity('locations');

export const course = new schema.Entity('courses', {
  assistants: [user],
  headTeacher: user,
  location: location,
  lessons: [lesson]
});

export const slide = new schema.Entity('slide');

export const lessonContent = new schema.Entity('lessonContent', {
  slides: [slide]
});

export const classList = [user];

export const attendances = new schema.Entity('attendances', {
  idAttribute: 'id',
});

export const attendancesForLesson = [attendances];
export const attendancesForCourse = [attendancesForLesson];
