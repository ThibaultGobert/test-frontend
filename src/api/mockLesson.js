import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const lessons = [
  {
    "level": "1",
    "clan": "BYTEBUSTER",
    "time": "11:15",
    "day": "ZA",
    "location": {
      "city": "Gent",
      "zip": "9000",
      "street": "Valentin Vaerwyckweg 1",
      "Organisation": "HoGent"
    },
    "assistents": [
      {
        "name": "John Doe",
        "email": "johndoe@hotmail.com",
        "contact": "0475 45 77 85"
      },
      {
        "name": "Jane Doe",
        "email": "janedoe@hotmail.com",
        "contact": "0694 12 52 32"
      }
    ],
    "classlist": [
      {
        "name": "John Doe",
        "comments": "Heeft concentratieproblemen"
      },
      {
        "name": "Jane Doe",
        "comments": ""
      }
    ]
  },
  {
    "level": "2",
    "clan": "CODEKRAKS",
    "time": "13:15",
    "day": "ZA",
    "location": {
      "city": "Gent",
      "zip": "9000",
      "street": "Valentin Vaerwyckweg 1",
      "Organisation": "HoGent"
    },
    "assistents": [
      {
        "name": "John Doe",
        "email": "johndoe@hotmail.com",
        "contact": "0475 45 77 85"
      },
      {
        "name": "Jane Doe",
        "email": "janedoe@hotmail.com",
        "contact": "0694 12 52 32"
      }
    ],
    "classlist": [
      {
        "name": "John Doe",
        "comments": "Heeft concentratieproblemen"
      },
      {
        "name": "Jane Doe",
        "comments": ""
      }
    ]
  }
];

class LessonApi {
  static getLessons() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], lessons));
      }, delay);
    });
  }

}

export default LessonApi;
