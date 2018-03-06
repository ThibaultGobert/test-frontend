import api from './api/lpfApi';
import appServiceApi from './api/appServiceApi';
import { getUser } from './storage';
import mapToAttendances from './mappers/mapToAttendances';

class UserAdministrationApi {
  static getUserInformation(token) {
    let headers = {};
    if (token) {
      headers = { 'x-token': token };
    }
    return api.get('/useradministration/getUserInformation', { headers });
  }

  static getTeacher() {
    return appServiceApi.get(`/userservice/getteacher?sessionToken=${getUser().token}`);
  }

  static updateTeacher(data) {
    const body = data;
    body.sessionToken = getUser().token;
    return appServiceApi.post('/userservice/updateteacher', { body });
  }

  static getAttendanceForCourse(courseId) {
    return api.get(`/courses/getAttendanceForCourse?courseid=${courseId}`).then(mapToAttendances);
  }

  static postAttendance(body) {
    return api.post('/useradministration/markpresence', { body });
  }
}

export default UserAdministrationApi;
