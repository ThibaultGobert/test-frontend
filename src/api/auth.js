import axios from 'axios';
import baseUrl from './baseUrl';

class AuthApi {
  static login(credentials) {
    return axios.request({
      method: 'get',
      url: baseUrl + '/webresources/v1/authUser',
      headers: {
        'x-username': credentials.username,
        'x-password': credentials.password,
      }
    }).then(response => {
      return response.data;
    }).catch(error => {
      throw "Geen geldige username - paswoord combinatie";
    });
  }
}

export default AuthApi;

// TODO: send pasword and username in a JSON body instead of using custom headers
