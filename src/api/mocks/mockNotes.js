import delay from './delay';
import mapToNotes from '../mappers/mapToNotes';

const notes = [
  {
    "id": 98,
    "content": "<p>Daan zal zaterdag (07/10) niet aanwezig zijn.</p>\r\n\r\n<p>Lieve</p>\r\n",
    "object_id": 1044,
    "object_type": "Child",
    "author_id": 1,
    "author_type": "Admin",
    "visibility": [
      "teacher"
    ],
    "created_at": "2017-11-17T08:00:39.000+01:00",
    "updated_at": "2017-11-17T08:00:39.000+01:00",
    "editable": "false"
  }
];

class NotesApi {
  static getNotes(studentId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, mapToNotes(notes)));
      }, delay);
    });
  }
}

export default NotesApi;
