import { normalize } from 'normalizr';
import * as schema from './schema';

export default (data) => {
  data = data.filter(lesson => lesson.activateStudent);
  data = normalize(data, [schema.lesson]);
  return data;
};
