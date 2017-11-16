import api from './api';

class UserAdministrationApi {
  static getUserInformation(token) {
    return api.get('/useradministration/getUserInformation').then(response => response.data);
  }
}

export default UserAdministrationApi;
