import axios from 'axios';
import baseUrl from './baseUrl';

class UserAdministrationApi {
  static getUserInformation(token) {
    return axios.request({
      method: 'get',
      url: baseUrl + "/useradministration/getUserInformation",
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': token
      }
    }).then(response => {
      return response.data;
    }).catch(error => {
      throw error;
    });
  }
}

export default UserAdministrationApi;
