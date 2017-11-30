import { normalize } from 'normalizr';
import * as schema from './schema';

export default (data) => {
  debugger;
  let lessons = data.filter(lesson => lesson.activateStudent);
  lessons = normalize(lessons, [schema.lesson]);
  return lessons;
};
