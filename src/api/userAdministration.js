import api from './api';
import mapToAttendances from './mappers/mapToAttendances';

class UserAdministrationApi {
  static getUserInformation(token) {
    let headers = {};
    if (token) {
      headers = { 'x-token': token };
    }
    return api.get('/useradministration/getUserInformation', { headers });
  }

  static getAttendanceForCourse(courseId) {
    return api
      .get(`/courses/getAttendanceForCourse?courseid=${courseId}`)
      .then(mapToAttendances);
  }

  static postAttendance(body) {
    return api
      .post('/useradministration/markpresence', { body });
  }
}

export default UserAdministrationApi;
