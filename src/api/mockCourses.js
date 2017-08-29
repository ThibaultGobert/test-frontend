import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    "id": 484,
    "name": "IT-girls in Gent",
    "day": "ZA",
    "starttime": "11:00",
    "endtime": "12:00",
    "clan": "Workshop",
    "level": 0,
    "headteacher": {
      "name": "John Doe",
      "email": "johndoe@gmail.com",
      "contact": "0548 75 26 56"
    },
    "assistents": [
      {
        "name": "John Doe",
        "email": "johndoe@gmail.com",
        "contact": "0548 75 26 56"
      },
      {
        "name": "Jane Doe",
        "email": "janedoe@gmail.com",
        "contact": "0548 75 26 56"
      }
    ],
    "location": {
      "name": "Hogeschool Gent - Campus Schoonmeersen",
      "address": "eenstraat 87",
      "city": "Gent",
      "organisation": "HoGent",
      "room": "GSCHB 1.026",
      "roomremark": "<p>Gebouw B, eerste verdieping</p>\r\n\r\n<p>&#160;</p>\r\n\r\n<p>De &#39;console&#39; pc, waar Netsupport School (Docent console) op ge&#239;nstalleerd stond, is&#39;verdwenen&#39;.</p>\r\n\r\n<p>Nu staat er een gewone cursist PC in de plaats. We gaan steeds een console PC halen uit een ander lokaal waar geen les gegeven wordt.</p>\r\n\r\n<p>Deze applicatie heeft ongelooflijk veel mogelijkheden die het les geven een pak makkelijker maakt.</p>\r\n",
    },
    "classlist": [
      {
        "firstName": "Nora",
        "surName": "George",
        "age": 9,
        "grade": 3,
        "parent": {
          "firstName": "Mckay",
          "surName": "Mcgowan",
          "contact": "(950) 438-2083"
        },
        "usernames": {
          "scratch": "officia",
          "platform": "deserunt"
        }
      },
      {
        "firstName": "Tonya",
        "surName": "Stafford",
        "age": 14,
        "grade": 5,
        "parent": {
          "firstName": "Martinez",
          "surName": "Silva",
          "contact": "(845) 548-3566"
        },
        "usernames": {
          "scratch": "exercitation",
          "platform": "nisi"
        }
      },
      {
        "firstName": "Linda",
        "surName": "Oneal",
        "age": 12,
        "grade": 2,
        "parent": {
          "firstName": "Ophelia",
          "surName": "Richardson",
          "contact": "(896) 516-2135"
        },
        "usernames": {
          "scratch": "dolore",
          "platform": "ipsum"
        }
      },
      {
        "firstName": "Pitts",
        "surName": "Page",
        "age": 12,
        "grade": 5,
        "parent": {
          "firstName": "Geneva",
          "surName": "Arnold",
          "contact": "(928) 490-2082"
        },
        "usernames": {
          "scratch": "ullamco",
          "platform": "non"
        }
      },
      {
        "firstName": "Harmon",
        "surName": "Rutledge",
        "age": 15,
        "grade": 6,
        "parent": {
          "firstName": "Hopper",
          "surName": "Morgan",
          "contact": "(920) 554-2577"
        },
        "usernames": {
          "scratch": "veniam",
          "platform": "laborum"
        }
      },
      {
        "firstName": "Catalina",
        "surName": "Farley",
        "age": 14,
        "grade": 3,
        "parent": {
          "firstName": "Briggs",
          "surName": "Cameron",
          "contact": "(947) 566-3680"
        },
        "usernames": {
          "scratch": "commodo",
          "platform": "commodo"
        }
      },
      {
        "firstName": "Fuentes",
        "surName": "Gilliam",
        "age": 14,
        "grade": 4,
        "parent": {
          "firstName": "England",
          "surName": "Hall",
          "contact": "(988) 549-2536"
        },
        "usernames": {
          "scratch": "minim",
          "platform": "ut"
        }
      },
      {
        "firstName": "Dillon",
        "surName": "Hodges",
        "age": 9,
        "grade": 3,
        "parent": {
          "firstName": "Jewell",
          "surName": "Sharp",
          "contact": "(987) 445-2584"
        },
        "usernames": {
          "scratch": "qui",
          "platform": "nisi"
        }
      },
      {
        "firstName": "Reyna",
        "surName": "Hancock",
        "age": 14,
        "grade": 5,
        "parent": {
          "firstName": "Sybil",
          "surName": "Long",
          "contact": "(903) 425-2479"
        },
        "usernames": {
          "scratch": "eiusmod",
          "platform": "ut"
        }
      },
      {
        "firstName": "Russo",
        "surName": "Wagner",
        "age": 12,
        "grade": 4,
        "parent": {
          "firstName": "Ines",
          "surName": "Clemons",
          "contact": "(899) 454-3756"
        },
        "usernames": {
          "scratch": "consectetur",
          "platform": "adipisicing"
        }
      },
      {
        "firstName": "Cheri",
        "surName": "Pace",
        "age": 10,
        "grade": 3,
        "parent": {
          "firstName": "Estrada",
          "surName": "Greer",
          "contact": "(943) 514-2778"
        },
        "usernames": {
          "scratch": "consectetur",
          "platform": "quis"
        }
      },
      {
        "firstName": "Patterson",
        "surName": "Contreras",
        "age": 13,
        "grade": 5,
        "parent": {
          "firstName": "Whitaker",
          "surName": "Joyner",
          "contact": "(927) 468-2162"
        },
        "usernames": {
          "scratch": "consequat",
          "platform": "dolor"
        }
      },
      {
        "firstName": "Marcella",
        "surName": "Moreno",
        "age": 8,
        "grade": 5,
        "parent": {
          "firstName": "Hensley",
          "surName": "Ward",
          "contact": "(983) 557-3437"
        },
        "usernames": {
          "scratch": "nulla",
          "platform": "eu"
        }
      },
      {
        "firstName": "Dorothea",
        "surName": "Joyce",
        "age": 11,
        "grade": 3,
        "parent": {
          "firstName": "Richards",
          "surName": "Chen",
          "contact": "(959) 401-2345"
        },
        "usernames": {
          "scratch": "eiusmod",
          "platform": "nisi"
        }
      },
      {
        "firstName": "Serrano",
        "surName": "Singleton",
        "age": 14,
        "grade": 4,
        "parent": {
          "firstName": "Potter",
          "surName": "Aguilar",
          "contact": "(897) 508-3332"
        },
        "usernames": {
          "scratch": "ad",
          "platform": "ullamco"
        }
      },
      {
        "firstName": "Cecilia",
        "surName": "Lucas",
        "age": 8,
        "grade": 6,
        "parent": {
          "firstName": "Tillman",
          "surName": "Mccoy",
          "contact": "(842) 448-2852"
        },
        "usernames": {
          "scratch": "in",
          "platform": "incididunt"
        }
      },
      {
        "firstName": "Becker",
        "surName": "Ware",
        "age": 10,
        "grade": 6,
        "parent": {
          "firstName": "Parker",
          "surName": "Dickson",
          "contact": "(831) 585-2785"
        },
        "usernames": {
          "scratch": "magna",
          "platform": "labore"
        }
      },
      {
        "firstName": "Minerva",
        "surName": "Foley",
        "age": 12,
        "grade": 3,
        "parent": {
          "firstName": "Gonzales",
          "surName": "Simmons",
          "contact": "(837) 593-2524"
        },
        "usernames": {
          "scratch": "aliqua",
          "platform": "est"
        }
      },
      {
        "firstName": "Bobbie",
        "surName": "Hodge",
        "age": 12,
        "grade": 3,
        "parent": {
          "firstName": "Odom",
          "surName": "Whitehead",
          "contact": "(834) 522-3214"
        },
        "usernames": {
          "scratch": "tempor",
          "platform": "culpa"
        }
      }
    ]
  },
  {
    "id": 189,
    "name": "C2 ZA 11:00 Gent",
    "day": "ZA",
    "starttime": "11:00",
    "endtime": "12:00",
    "clan": "CodeKraks",
    "level": 2,
    "headteacher": {
      "name": "John Doe",
      "email": "johndoe@gmail.com",
      "contact": "0548 75 26 56"
    },
    "assistents": [
      {
        "name": "John Doe",
        "email": "johndoe@gmail.com",
        "contact": "0548 75 26 56"
      },
      {
        "name": "Jane Doe",
        "email": "janedoe@gmail.com",
        "contact": "0548 75 26 56"
      }
    ],
    "location": {
      "name": "Hogeschool Gent - Campus Schoonmeersen",
      "address": "eenstraat 87",
      "city": "Gent",
      "organisation": "HoGent",
      "room": "GSCHB 1.026",
      "roomremark": "<p>Gebouw B, eerste verdieping</p>\r\n\r\n<p>&#160;</p>\r\n\r\n<p>De &#39;console&#39; pc, waar Netsupport School (Docent console) op ge&#239;nstalleerd stond, is&#39;verdwenen&#39;.</p>\r\n\r\n<p>Nu staat er een gewone cursist PC in de plaats. We gaan steeds een console PC halen uit een ander lokaal waar geen les gegeven wordt.</p>\r\n\r\n<p>Deze applicatie heeft ongelooflijk veel mogelijkheden die het les geven een pak makkelijker maakt.</p>\r\n",
    },
    "classlist": [
      {
        "firstName": "Nora",
        "surName": "George",
        "age": 9,
        "grade": 3,
        "parent": {
          "firstName": "Mckay",
          "surName": "Mcgowan",
          "contact": "(950) 438-2083"
        },
        "usernames": {
          "scratch": "officia",
          "platform": "deserunt"
        }
      },
      {
        "firstName": "Tonya",
        "surName": "Stafford",
        "age": 14,
        "grade": 5,
        "parent": {
          "firstName": "Martinez",
          "surName": "Silva",
          "contact": "(845) 548-3566"
        },
        "usernames": {
          "scratch": "exercitation",
          "platform": "nisi"
        }
      },
      {
        "firstName": "Linda",
        "surName": "Oneal",
        "age": 12,
        "grade": 2,
        "parent": {
          "firstName": "Ophelia",
          "surName": "Richardson",
          "contact": "(896) 516-2135"
        },
        "usernames": {
          "scratch": "dolore",
          "platform": "ipsum"
        }
      },
      {
        "firstName": "Pitts",
        "surName": "Page",
        "age": 12,
        "grade": 5,
        "parent": {
          "firstName": "Geneva",
          "surName": "Arnold",
          "contact": "(928) 490-2082"
        },
        "usernames": {
          "scratch": "ullamco",
          "platform": "non"
        }
      },
      {
        "firstName": "Harmon",
        "surName": "Rutledge",
        "age": 15,
        "grade": 6,
        "parent": {
          "firstName": "Hopper",
          "surName": "Morgan",
          "contact": "(920) 554-2577"
        },
        "usernames": {
          "scratch": "veniam",
          "platform": "laborum"
        }
      },
      {
        "firstName": "Catalina",
        "surName": "Farley",
        "age": 14,
        "grade": 3,
        "parent": {
          "firstName": "Briggs",
          "surName": "Cameron",
          "contact": "(947) 566-3680"
        },
        "usernames": {
          "scratch": "commodo",
          "platform": "commodo"
        }
      },
      {
        "firstName": "Fuentes",
        "surName": "Gilliam",
        "age": 14,
        "grade": 4,
        "parent": {
          "firstName": "England",
          "surName": "Hall",
          "contact": "(988) 549-2536"
        },
        "usernames": {
          "scratch": "minim",
          "platform": "ut"
        }
      },
      {
        "firstName": "Dillon",
        "surName": "Hodges",
        "age": 9,
        "grade": 3,
        "parent": {
          "firstName": "Jewell",
          "surName": "Sharp",
          "contact": "(987) 445-2584"
        },
        "usernames": {
          "scratch": "qui",
          "platform": "nisi"
        }
      },
      {
        "firstName": "Reyna",
        "surName": "Hancock",
        "age": 14,
        "grade": 5,
        "parent": {
          "firstName": "Sybil",
          "surName": "Long",
          "contact": "(903) 425-2479"
        },
        "usernames": {
          "scratch": "eiusmod",
          "platform": "ut"
        }
      },
      {
        "firstName": "Russo",
        "surName": "Wagner",
        "age": 12,
        "grade": 4,
        "parent": {
          "firstName": "Ines",
          "surName": "Clemons",
          "contact": "(899) 454-3756"
        },
        "usernames": {
          "scratch": "consectetur",
          "platform": "adipisicing"
        }
      },
      {
        "firstName": "Cheri",
        "surName": "Pace",
        "age": 10,
        "grade": 3,
        "parent": {
          "firstName": "Estrada",
          "surName": "Greer",
          "contact": "(943) 514-2778"
        },
        "usernames": {
          "scratch": "consectetur",
          "platform": "quis"
        }
      },
      {
        "firstName": "Patterson",
        "surName": "Contreras",
        "age": 13,
        "grade": 5,
        "parent": {
          "firstName": "Whitaker",
          "surName": "Joyner",
          "contact": "(927) 468-2162"
        },
        "usernames": {
          "scratch": "consequat",
          "platform": "dolor"
        }
      },
      {
        "firstName": "Marcella",
        "surName": "Moreno",
        "age": 8,
        "grade": 5,
        "parent": {
          "firstName": "Hensley",
          "surName": "Ward",
          "contact": "(983) 557-3437"
        },
        "usernames": {
          "scratch": "nulla",
          "platform": "eu"
        }
      },
      {
        "firstName": "Dorothea",
        "surName": "Joyce",
        "age": 11,
        "grade": 3,
        "parent": {
          "firstName": "Richards",
          "surName": "Chen",
          "contact": "(959) 401-2345"
        },
        "usernames": {
          "scratch": "eiusmod",
          "platform": "nisi"
        }
      },
      {
        "firstName": "Serrano",
        "surName": "Singleton",
        "age": 14,
        "grade": 4,
        "parent": {
          "firstName": "Potter",
          "surName": "Aguilar",
          "contact": "(897) 508-3332"
        },
        "usernames": {
          "scratch": "ad",
          "platform": "ullamco"
        }
      },
      {
        "firstName": "Cecilia",
        "surName": "Lucas",
        "age": 8,
        "grade": 6,
        "parent": {
          "firstName": "Tillman",
          "surName": "Mccoy",
          "contact": "(842) 448-2852"
        },
        "usernames": {
          "scratch": "in",
          "platform": "incididunt"
        }
      },
      {
        "firstName": "Becker",
        "surName": "Ware",
        "age": 10,
        "grade": 6,
        "parent": {
          "firstName": "Parker",
          "surName": "Dickson",
          "contact": "(831) 585-2785"
        },
        "usernames": {
          "scratch": "magna",
          "platform": "labore"
        }
      },
      {
        "firstName": "Minerva",
        "surName": "Foley",
        "age": 12,
        "grade": 3,
        "parent": {
          "firstName": "Gonzales",
          "surName": "Simmons",
          "contact": "(837) 593-2524"
        },
        "usernames": {
          "scratch": "aliqua",
          "platform": "est"
        }
      },
      {
        "firstName": "Bobbie",
        "surName": "Hodge",
        "age": 12,
        "grade": 3,
        "parent": {
          "firstName": "Odom",
          "surName": "Whitehead",
          "contact": "(834) 522-3214"
        },
        "usernames": {
          "scratch": "tempor",
          "platform": "culpa"
        }
      }
    ]
  }
];

class CourseApi {
  static getCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

}

export default CourseApi;
