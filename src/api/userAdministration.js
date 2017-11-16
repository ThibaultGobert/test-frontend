import api from './api';

class UserAdministrationApi {
  static getUserInformation(token) {
    return api.get('/useradministration/getUserInformation');
  }
}

export default UserAdministrationApi;
