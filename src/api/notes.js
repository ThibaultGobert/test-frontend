import api from './api';
import { getUser } from './storage';

class NotesApi {
  static getNotes(studentId) {
    if (!studentId) {
      throw Error('Must provide a studentID to fetch notes');
    }
    return api.get('/content/notes/' + studentId + '/Child');
  }
}

export default NotesApi;
