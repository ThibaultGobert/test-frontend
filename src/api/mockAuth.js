import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const authResponses = [
  {
    "token": "OWY0MmFlYTEtZTlhMS00M2ZlLWFkNGMtMDg0YzA5MDE4NGNj",
    "fullname": "Simon De Gheselle"
  }
];


class AuthApi {
  static login(credentials) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.username.length < 3) {
          reject('Username must be at least 3 characters');
        }

        if (credentials.password.length < 3) {
          reject('Password must be at least 3 characters');
        }

        if (credentials.username == "deghesellesimon") {
          reject('Geen juiste username - paswoord combinatie, probeer opnieuw');
        }

        resolve(Object.assign({}, authResponses[0]));
      }, delay);
    });
  }
}

export default AuthApi;
