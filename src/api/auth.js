import axios from 'axios';

class AuthApi {
  static login(credentials) {
    return axios.request({
      method: 'get',
      url: 'http://localhost:8080/CodefeverWebservice/webresources/v1/authUser',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-username': credentials.username,
        'x-password': credentials.password
      },
    }).then(response => {
      return response.data;
    }).catch(error => {
      throw "Geen geldige username - paswoord combinatie";
    });
  }
}

export default AuthApi;
