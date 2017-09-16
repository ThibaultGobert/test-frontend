import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const authResponses = [
  {
    "token": "e21c1f03e16d41aa883f3f9d0743ebce",
    "fullname": "Simon De Gheselle",
    "role": "ADMIN",
    "level": "3",
    "username": "simondegheselle"
  }
];


class AuthApi {
  static login(credentials) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.username == "deghesellesimon") {
          reject('Geen juiste username - paswoord combinatie, probeer opnieuw');
        }

        resolve(Object.assign({}, authResponses[0]));
      }, delay);
    });
  }
}

export default AuthApi;
