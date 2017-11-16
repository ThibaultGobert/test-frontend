import api from './api';
import mapToUser from './mappers/mapToUser';

class AuthApi {
  static login(credentials) {
    const headers = credentials.child_username
      ? {
          'x-username': credentials.username,
          'x-password': credentials.password,
          'x-impersonateuser': credentials.child_username
        }
      : {
          'x-username': credentials.username,
          'x-password': credentials.password
        };

    return api
      .get('/usersession/authUser', { headers })
      .then(mapToUser)
      .catch(error => {
        if (error.code === 'ECONNABORTED') {
          throw new Error('Timeout error');
        }

        const errorReturned = error.response.data;

        if (errorReturned.status === 401 || errorReturned.status === 500) {
          throw new Error('Geen geldige username - wachtwoord combinatie');
        }

        throw error;
      });
  }
}

export default AuthApi;

// TODO: send password and username in a JSON body instead of using custom headers
// Eventually make this a post request
