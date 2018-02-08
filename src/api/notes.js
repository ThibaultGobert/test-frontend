import api from './api/lpfApi';
import mapToNotes from './mappers/mapToNotes';

class NotesApi {
  static getNotes(studentId) {
    if (!studentId) {
      throw Error('Must provide a studentID to fetch notes');
    }
    return api.get('/content/notes/' + studentId + '/Child').then(mapToNotes);
  }

  static addNote(data) {
    return api.post('/content/notes/create', {body: data});
  }

  static editNote(data) {
    return api.post('/content/notes', {body: data});
  }
}

export default NotesApi;
