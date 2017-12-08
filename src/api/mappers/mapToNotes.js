import { normalize } from 'normalizr';
import * as schema from './schema';

export default (data) => {
  data = data.map(note => {
    note.editable = note.editable === "true";
    return note;
  });
  data = normalize(data, [schema.note]);
  return data;
};
