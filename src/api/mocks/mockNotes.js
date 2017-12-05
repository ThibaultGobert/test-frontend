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
    "created_at": "2017-12-5T08:00:39.000+01:00",
    "updated_at": "2012-11-17T08:00:39.000+01:00",
    "editable": true
  },
  {
    "id": 99,
    "content": "<p>Daan zal zaterdag (07/10) niet aanwezig zijn.</p>\r\n\r\n<p>Lieve</p>\r\n",
    "object_id": 1044,
    "object_type": "Child",
    "author_id": 1,
    "author_type": "Admin",
    "visibility": [
      "teacher"
    ],
    "created_at": "2017-11-11T08:00:39.000+01:00",
    "updated_at": "2017-11-11T08:00:39.000+01:00",
    "editable": false
  },
  {
    "id": 100,
    "content": "<p>Daan zal zaterdag (07/10) niet aanwezig zijn.</p>\r\n\r\n<p>Lieve</p>\r\n",
    "object_id": 1044,
    "object_type": "Child",
    "author_id": 1,
    "author_type": "Admin",
    "visibility": [
      "teacher"
    ],
    "created_at": "2017-11-14T08:00:39.000+01:00",
    "updated_at": "2017-11-14T08:00:39.000+01:00",
    "editable": false
  },
  {
    "id": 101,
    "content": "<p>Daan zal zaterdag (07/10) niet aanwezig zijn.</p>\r\n\r\n<p>Lieve</p>\r\n",
    "object_id": 1044,
    "object_type": "Child",
    "author_id": 1,
    "author_type": "Admin",
    "visibility": [
      "teacher"
    ],
    "created_at": "2017-11-13T08:00:39.000+01:00",
    "updated_at": "2017-11-13T08:00:39.000+01:00",
    "editable": false
  },
  {
    "id": 102,
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
    "editable": false
  },
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
