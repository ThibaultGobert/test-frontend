import api from './api';
import mapToAttendances from './mappers/mapToAttendances';

class UserAdministrationApi {
  static getUserInformation(token) {
    return api.get('/useradministration/getUserInformation', { headers: { 'x-token': token }});
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
