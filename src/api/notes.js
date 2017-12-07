import api from './api';
import mapToNotes from './mappers/mapToNotes';
import { getUser } from './storage';

class NotesApi {
  static getNotes(studentId) {
    if (!studentId) {
      throw Error('Must provide a studentID to fetch notes');
    }
    return api.get('/content/notes/' + studentId + '/Child').then(mapToNotes);
  }

  static addNote(data) {
    return api.put('/content/notes', {body: data});
  }
}

export default NotesApi;
