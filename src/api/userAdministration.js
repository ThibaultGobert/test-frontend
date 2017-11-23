import api from './api';

class UserAdministrationApi {
  static getUserInformation(token) {
    return api.get('/useradministration/getUserInformation', { headers: { 'x-token': token}});
  }
}

export default UserAdministrationApi;
