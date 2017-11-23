import { normalize } from 'normalizr';
import * as schema from './schema';

export default (slideType, data) => {
  data.slideType = slideType;
  data = normalize(data, schema.lessonContent);
  return data;
}
