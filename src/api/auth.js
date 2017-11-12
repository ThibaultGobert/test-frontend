import axios from 'axios';
import baseUrl from './baseUrl';
import mapToUser from './mappers/mapToUser';

class AuthApi {
  static login(credentials) {
    const headers = credentials.child_username ? {
      'x-username': credentials.username,
      'x-password': credentials.password,
      'x-impersonateuser': credentials.child_username
    } : {
      'x-username': credentials.username,
      'x-password': credentials.password,
    };

    return axios.request({
      method: 'get',
      url: baseUrl + '/usersession/authUser',
      timeout: 3000,
      headers: headers
    }).then(response => {
      return mapToUser(response.data);
    }).catch(error => {
      if(error.code === "ECONNABORTED") {
        throw new Error("Timeout error");
      }

      let errorReturned = error.response.data;

      if (errorReturned.status === 401 || errorReturned.status === 500) {
        throw new Error("Geen geldige username - wachtwoord combinatie");
      }

      throw error;
    });
  }
}

export default AuthApi;

// TODO: send pasword and username in a JSON body instead of using custom headers
