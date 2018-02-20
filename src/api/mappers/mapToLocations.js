import { normalize } from 'normalizr';
import * as schema from './schema';

export default (data) => {
  const locations = normalize(data, [schema.location]);
  return locations;
};
