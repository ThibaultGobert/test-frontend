import axios from 'axios';
import baseUrl from './baseUrl';

class AuthApi {
  static login(credentials) {
    return axios.request({
      method: 'get',
      url: baseUrl + '/webresources/v1/authUser',
      timeout: 3000,
      headers: {
        'x-username': credentials.username,
        'x-password': credentials.password,
      }
    }).then(response => {
      return response.data;
    }).catch(error => {
      if(error.code == "ECONNABORTED") {
        throw "Timeout error";
      }

      let errorReturned = error.response.data;
      if (errorReturned.status == 500) {
        throw "Geen geldige username - wachtwoord combinatie";
      }

      throw error;
    });
  }
}

export default AuthApi;

// TODO: send pasword and username in a JSON body instead of using custom headers
