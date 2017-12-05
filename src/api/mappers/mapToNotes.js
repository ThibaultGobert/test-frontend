import { normalize } from 'normalizr';
import * as schema from './schema';

export default (data) => {
  data = normalize(data, [schema.note]);
  return data;
};
