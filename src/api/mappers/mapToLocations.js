import { normalize } from 'normalizr';
import * as schema from './schema';

export default (data) => {
  return normalize(data, [schema.location]);
};
