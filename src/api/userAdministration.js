import api from './api';
import mapToAttendances from './mappers/mapToAttendances';
import mockAttendances from './mocks/mockAttendances';

class UserAdministrationApi {
  static getUserInformation(token) {
    return api.get('/useradministration/getUserInformation', { headers: { 'x-token': token}});
  }

  static getAttendanceForCourse(courseId) {
    if (true) {
      return mockAttendances()
        .then(mapToAttendances);
    }

    return api
      .get(`/courses/getAttendanceForCourse?courseid=${courseId}`)
      .then(mapToAttendances);
  }
}

export default UserAdministrationApi;
