import api from './sumoApi';
import { getUser } from './storage';

class NotesApi {
  static getNotes(studentId) {
    if (!studentId) {
      throw Error('Must provide a studentID to fetch notes');
    }
    return api.get('/notes?object_id=' + studentId + '&object_type=Child&session_token=' + getUser().token);
  }
}

export default NotesApi;
