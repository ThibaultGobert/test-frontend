import api from './api/lpfApi';
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

        // When the can't connect to the API we will get no response.
        if(!error || !error.response || !error.response.data) {
          throw new Error('Er is een onverwachte fout opgetreden');
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
